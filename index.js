
const book = require('./book');

main();

// https://www.npmjs.com/package/nhentai-api
async function main() {

    //for mersheesh
    let doujin = await book.getDoujin(73096);

    console.log(doujin);
}