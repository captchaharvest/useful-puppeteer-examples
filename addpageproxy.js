// This is a beautiful module! Use it!
// https://www.npmjs.com/package/puppeteer-page-proxy

const puppeteer = require('puppeteer');
const useProxy = require('puppeteer-page-proxy');

(async () => {
    const site = 'https://whatismyipaddress.com/';
    const proxy = 'http://USERNAME:PASSWORD@HOST:PORT';
    
    const browser = await puppeteer.launch({headless: false});

    const page = await browser.newPage();
    await useProxy(page, proxy);
    await page.goto(site);
    })();