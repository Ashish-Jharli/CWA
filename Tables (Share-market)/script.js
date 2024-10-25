const stocks = [
    {
        src: 'https://cdn.freebiesupply.com/logos/large/2x/shell-logo-png-transparent.png',
        name: 'Shell plc',
        ticker: 'SHEL',
        price: 64.53,
        change: 0.45,
        marketCap: '215.6B',
        peRatio: 7.88,
        dividendYield: 4.08,
        volume: '5.2M'
    },
    {
        src: 'https://cdn.freebiesupply.com/images/large/2x/apple-logo-transparent.png',
        name: 'Apple lnc',
        ticker: 'AAPL',
        price: 194.39,
        change: 0.12,
        marketCap: '2.732T',
        peRatio: 29.32,
        dividendYield: 0.54,
        volume: '4.2M'
    },
    {
        src: 'https://thumbs.dreamstime.com/b/real-tesla-logo-vilnius-lithuania-august-car-red-body-178655646.jpg',
        name: 'Tesla lnc',
        ticker: 'TSLA',
        price: 254.33,
        change: -5.08,
        marketCap: '816B',
        peRatio: 73.01,
        dividendYield: 'N/A',
        volume: '8.4M'
    },
    {
        src: 'https://www.nvidia.com/content/dam/en-zz/Solutions/about-nvidia/logo-and-brand/02-nvidia-logo-color-grn-500x200-4c25-p.png',
        name: 'NVidia Corporation',
        ticker: 'NVDA',
        price: 495.22,
        change: -2.2,
        marketCap: '1.223T',
        peRatio: 65.33,
        dividendYield: 0.03,
        volume: '38M'
    },
];

let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `(${stocks.length}) Stocks`;
let tableBody = document.getElementById('table-rows');

const mappedRecords = stocks.map((stock) => `<tr>
                                                <td class="stock sticky-left">
                                                    <div class="stock-wrapper">
                                                        <img src="${stock.src}" alt="${stock.name}">
                                                        <div class="stock-info">
                                                            <span class="stock-info__ticker">
                                                                ${stock.ticker}
                                                            </span>
                                                            <span class="stock-info__name">
                                                                ${stock.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td>${stock.price}</td>
                                                <td class="price ${stock.change >= 0 ? 'up' : 'down'}">${stock.change}</td>
                                                <td class="price ${stock.change >= 0 ? 'up' : 'down'}">${parseFloat(stock.change / stock.price * 100).toFixed(2)}</td>
                                                <td>${stock.marketCap}</td>
                                                <td>${stock.volume}</td>
                                                <td>${stock.peRatio}</td>
                                                <td>${stock.dividendYield}</td>
                                                <td class="sticky-right"><button class="btn btn--primary">Trade</button></td>
                                            </tr>`
);

const tableWrapper = document.querySelector('.table-wrapper');

tableWrapper.innerHTML = (`
    <table>
        <thead>
            <tr>
                <th class="sticky-left">Ticker</th>
                <th>Price[$]</th>
                <th>Change[$]</th>
                <th>Price(%)</th>
                <th>MarketCap</th>
                <th>Volume</th>
                <th>PE Ratio</th>
                <th>Dividend(%)</th>
                <th class="sticky-right" style="padding-right: 90px;"></th>
            </tr>
        </thead>
        <tbody class="table-rows">
            ${mappedRecords.join('')}
        </tbody>
        <!-- <tfoot>
                My footer
        </tfoot> -->
    </table>
` );