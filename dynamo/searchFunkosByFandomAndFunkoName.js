const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const {
    headers,
    FUNKO_DYNAMO_TABLENAME
} = require('../config');
const { transformFunkoNameToKey } = require('./helpers');

const RESULT_SIZE = 20;

module.exports.handler = async (event) => {
    const {
        fandom_id
    } = event.pathParameters;

    const funkoName = decodeURIComponent(event?.queryStringParameters?.name);
    console.debug(`Searching for ${funkoName} in FANDOM ${fandom_id}`)

    if (!funkoName) {
        const errorMessage = 'Must pass in funko name queryString parameter for search';
        console.error(errorMessage);
        return {
            statusCode: 401,
            headers: {
                ...headers,
                'Content-Type': 'text/plain'
            },
            body: `Bad Request: ${errorMessage}`,
        };
    }
    const params = {
        TableName: FUNKO_DYNAMO_TABLENAME,
        KeyConditionExpression: "PK = :pk",
        ExpressionAttributeValues: {
            ":pk": `FANDOM#${fandom_id}`,
        },
        ScanIndexForward: false,
    }

    const results = [];
    while (results.length < RESULT_SIZE) {
        const res = await dynamoDb.query(params).promise();
        const {
            Items,
            LastEvaluatedKey
        } = res;

        const matches = Items.filter(({ SK }) => SK?.toLowerCase().includes(transformFunkoNameToKey(funkoName).toLowerCase()));
        results.push(...matches);
        if (!LastEvaluatedKey) break;

        params.ExclusiveStartKey = LastEvaluatedKey;
    }

    return {
        statusCode: 200,
        body: JSON.stringify({
            funkos: results
        }),
        headers,
    };
}