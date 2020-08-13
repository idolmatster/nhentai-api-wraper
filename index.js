
const book = require('./book');

main();

// https://www.npmjs.com/package/nhentai-api
async function main() {

    let id = 187;

    book.exists(id).then(async function () {
        let doujin = await book.getDoujin(id);
        console.log(doujin);
    }).catch(function (error) {
        console.log('this might not be a valid number');
    });
}