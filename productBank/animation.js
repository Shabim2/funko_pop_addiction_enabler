const fetch = require('node-fetch');
const HTMLParser = require('node-html-parser');

const getProducts = async () => {
    const products = [];
    const response = await fetch('https://funko.fandom.com/wiki/Pop!_Animation', {
        headers: {
            'authority': 'funko.fandom.com',
            'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'accept-language': 'en-US,en;q=0.9',
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
    const root = HTMLParser.parse(body);

    const table = root.querySelector("#mw-content-text > div > table:nth-child(4) > tbody").getElementsByTagName("tr")
    for (const tr of table){
        const [number, name, image, year, notes, series] = Array.from(tr.querySelectorAll('th,td')).map((c) => 
        {
            if (c.querySelector("img")){
                return c.querySelector('img').getAttribute('data-src')
            }
            return c.innerText.trim()
        });
        products.push({number,name,image,year,notes,series})
    }
    console.log(products)
    return products;
}

getProducts()


module.exports = { getProducts };