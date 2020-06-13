const puppeteer = require("puppeteer");
const axios = require('axios');
const file = require('file-system');

var updatedArray = [];
var i;
var directory = 'C:\\Users\\Jai\\Documents\\Palace\\Pictures\\LB2020';
// Make sure to change this directory ^

const download_image = (url, image_path) =>
  axios({
    url,
    responseType: 'stream',
  }).then(
    response =>
      new Promise((resolve, reject) => {
        response.data
          .pipe(file.createWriteStream(image_path))
          .on('finish', () => resolve())
          .on('error', e => reject(e));
    }),
);

(async () => {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const navigationPromise = page.waitForNavigation({ waitUntil: "load" });

    await page.setRequestInterception(true);
    page.on("request", (req) => {
      if (req.resourceType() == "image" || req.resourceType() == "fonts" || req.resourceType() == "stylesheet") {
        req.abort();
      } else {
        req.continue();
      }
    });

    await page.goto("https://www.palaceskateboards.com/range/summer-2020/", { waitUntil: "load" });
    await navigationPromise;
    
    var imageSource = await page.evaluate(() => {
      imgQuery = document.querySelectorAll("img");
      imgQuerySources = [...imgQuery].map((e) => e.getAttribute("src"));
      return imgQuerySources;
    });

    for (i = 0; i < imageSource.length - 1; i++) {
      var interURL = imageSource[i].substring(0, imageSource[i].length - 11) + '1024x717.jpg';
      updatedArray.push(interURL);
    }
    console.log('URLs processed succesfully!')

    for (i = 0; i < imageSource.length - 1; i++) {
      var imgName = directory + '\\example-' + i + '.png';
      await download_image(updatedArray[i], imgName);
    }
    console.log('Images downloaded successfully!')

    await page.close();
    await browser.close();
})();