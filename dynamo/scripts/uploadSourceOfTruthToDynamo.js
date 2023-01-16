const funkos = require('../../funkoSourceOfTruth.json');
const AWS = require('aws-sdk');
const { FUNKO_DYNAMO_TABLENAME } = require('../../config');
const { transformFunkoNameToKey } = require('../helpers.js');
const fandom = 'Animation';
const dynamoDb = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' });

const main = async () => {
    while (funkos.length) {
        const chunk = funkos.splice(0, 25);
        const params = {
            RequestItems: {
                [FUNKO_DYNAMO_TABLENAME]: chunk.map(({ number, name, image, year, notes, series }) => (
                    {
                        PutRequest: {
                            Item: {
                                PK: `FANDOM#${fandom}`,
                                SK: `${number}#${transformFunkoNameToKey(name)}`,
                                image,
                                year,
                                notes,
                                series,
                                createdTs: new Date().toISOString()
                            }
                        }
                    }
                ))
            }
        }
    
        console.log(params);
        const data = await dynamoDb.batchWrite(params).promise();
        console.log(data);
    }
}

main();