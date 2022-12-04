const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': true,
}

const FUNKO_DYNAMO_TABLENAME = 'funko-tracker-single-table';

const config = {
    headers,
    FUNKO_DYNAMO_TABLENAME,
}

module.exports = config;