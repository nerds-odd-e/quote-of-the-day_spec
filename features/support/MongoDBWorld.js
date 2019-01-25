class MongoDBWorld {
    constructor() {
        this.MongoClient = require('mongodb').MongoClient;
        this.mongoClient = this.MongoClient("mongodb://localhost:27017/");
    }
    async connect() {
        await this.mongoClient.connect();
    }
    disconnect() {
        this.mongoClient.close();
    }
    async dropDatabase() {
        if (this.mongoDB) {
            await this.mongoDB.dropDatabase();
        }
    }
    createDatabase() {
        this.mongoDB = this.mongoClient.db('quotes-database');
    }
    async insertCollectionIntoDatabase(collection, dataTable) {
        await this.mongoDB.collection('quotes').insertMany(dataTable.hashes());
    }
    async insertQuotesIntoDatabase(dataTable) {
        await this.insertCollectionIntoDatabase('quotes', dataTable);
    }
    async insertDaysWithQuotesIntoDatabase(dataTable) {
        await this.insertCollectionIntoDatabase('days-with-quotes', dataTable);
    }
}
exports.MongoDBWorld = MongoDBWorld;
