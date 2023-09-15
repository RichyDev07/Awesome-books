const MongoClient = require('mongodb').MongoClient;

async function main(args) {
    const uri = process.env['DATABASE_URL'];
    let client = new MongoClient(uri);

    let bookTitle = args.title;
    let bookAuthor = args.author;


    try {
        await client.connect();
        await client.db("library").collection("books").insertOne({title: bookTitle, author: bookAuthor});
        console.log(`added ${bookTitle} book writtin by ${bookAuthor} to database.`);
        return { ok: true };
    } catch (e) {
        console.error(e);
        return {
            "body": { "error": "There was a problem adding the email address to the database." },
            "statusCode": 400
        };
    } finally {
        await client.close();
    }
}

module.exports.main = main;