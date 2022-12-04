const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const {
    headers,
    FUNKO_DYNAMO_TABLENAME
} = require('../config');

module.exports.handler = async (event) => {
    const {
        fandom_id,
        funko_id
    } = event.pathParameters;


    const params = {
        TableName: FUNKO_DYNAMO_TABLENAME,
        KeyConditionExpression: "PK = :pk AND begins_with(SK, :sk)",
        ExpressionAttributeValues: {
            ":pk": `FUNKO_DETAILS#${fandom_id}`,
            ":sk": `#${funko_id}#`,
        },
        ScanIndexForward: false
    }
    try {
        const result = await dynamoDb.query(params).promise();
        let {
            Items
        } = result;

        const resp = {
            funkoDetails: Items[0],
        }

        return {
            statusCode: 200,
            body: JSON.stringify(resp),
            headers,
        };
    } catch (error) {
        console.error(error);
        return {
            statusCode: error.statusCode || 501,
            headers: {
                ...headers,
                'Content-Type': 'text/plain'
            },
            body: `Couldn't fetch funko details for Fandom ${fandom_id} - ${funko_id}`,
        };
    }
}