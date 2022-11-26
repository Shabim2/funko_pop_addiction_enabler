const fetch = require('node-fetch');

const getProducts = async () => {
    const response = await fetch('https://chalicecollectibles.com/collections/web-anime', {
        headers: {
            'authority': 'chalicecollectibles.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9',
            'cookie': 'secure_customer_sig=; localization=US; cart_currency=USD; _orig_referrer=; _landing_page=%2Fcollections%2Fweb-anime; _y=b92ed982-5d94-48c6-97fd-a59ba015d7e2; _shopify_y=b92ed982-5d94-48c6-97fd-a59ba015d7e2; shopify_pay_redirect=pending; _ga=GA1.2.993401236.1669432245; _gid=GA1.2.351624252.1669432245; wsg_referrer=; wsg_pages=https://chalicecollectibles.com/collections/web-anime; cart=5170d010618776cb999862be78274913; cart_sig=ab5b4ebd1ab5edda1e2584c14b5ee7e3; keep_alive=5621c604-480a-4b70-9a39-306baec190bf; _s=f30a8e45-58ac-4e44-bbe6-377dc49634bc; _shopify_s=f30a8e45-58ac-4e44-bbe6-377dc49634bc; _shopify_sa_t=2022-11-26T03%3A49%3A06.830Z; _shopify_sa_p=; _gat=1; cart_ts=1669434547; cart_ver=gcp-us-east1%3A2',
            'sec-ch-ua': '"Google Chrome";v="105", "Not)A;Brand";v="8", "Chromium";v="105"',
            'sec-ch-ua-mobile': '?0',
            'sec-ch-ua-platform': '"macOS"',
            'sec-fetch-dest': 'document',
            'sec-fetch-mode': 'navigate',
            'sec-fetch-site': 'none',
            'sec-fetch-user': '?1',
            'upgrade-insecure-requests': '1',
            'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36'
        }
    });

    const body = await response.text();
    const { products } = JSON.parse(body.split('var meta = ')[1].split(';')[0]);

    console.log(products);
    return products;
}

module.exports = { getProducts };