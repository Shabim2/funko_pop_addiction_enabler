const chaliceClient = require('../chaliceCollectibles/client');

const main = async () => {
    const products = await chaliceClient.getProducts();
    console.log(products);
}

main();