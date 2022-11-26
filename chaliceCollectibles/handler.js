const { headers } = require('../config');
const chaliceCollectibles = require('./client');


module.exports.getChaliceCollectiblesProducts = async (event) => {
    const products = await chaliceCollectibles.getProducts();
    return {
        statusCode: 200,
        body: JSON.stringify({
            products
        }),
        headers,
    };

}