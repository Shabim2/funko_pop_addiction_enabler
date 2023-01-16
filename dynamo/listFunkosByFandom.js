const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const {
    headers,
    FUNKO_DYNAMO_TABLENAME
} = require('../config');

const PAGE_SIZE = 20;

module.exports.handler = async (event) => {
    const {
        fandom_id
    } = event.pathParameters;

    const ExclusiveStartKey = event.queryStringParameters && JSON.parse(event.queryStringParameters.nextKey);
    const params = {
        TableName: FUNKO_DYNAMO_TABLENAME,
        KeyConditionExpression: "PK = :pk",
        ExpressionAttributeValues: {
            ":pk": `FANDOM#${fandom_id}`,
        },
        ScanIndexForward: false,
        Limit: PAGE_SIZE,
        ExclusiveStartKey
    }
    try {
        let hasNext = false;
        const res = await dynamoDb.query(params).promise();
        const {
            Items,
            LastEvaluatedKey: nextKey
        } = res;

        if (nextKey) {
            hasNext = true;
        }

        return {
            statusCode: 200,
            body: JSON.stringify({
                funkos: Items,
                hasNext,
                nextKey
            }),
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
            body: `Couldn't list funkos for Fandom ${fandom_id}`,
        };
    }
}