
class QOTDMongoClient {

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

    async connectToMongoAndCreateDatabase() {
        await this.connect();
        this.createDatabase();
    }
    async dropDatabaseAndDisconnect() {
        await this.dropDatabase();
        this.disconnect();
    }

    async countQuotesFromDatabase(count) {
      this.mongoDB.collection('quotes').find().forEach( function (doc) {
        console.log(doc);
      });
      return await this.mongoDB.collection('quotes').countDocuments();
    }

    async countDaysWithQuotesFromDatabase(count) {
      return await this.mongoDB.collection('days-with-quotes').countDocuments();
    }

    async insertCollectionIntoDatabase(collection, dataTable) {
        await this.mongoDB.collection(collection).insertMany(dataTable.hashes());
    }

    async insertQuotesIntoDatabase(dataTable) {
        await this.insertCollectionIntoDatabase('quotes', dataTable);
    }

    async insertDaysWithQuotesIntoDatabase(dataTable) {
        await this.insertCollectionIntoDatabase('days-with-quotes', dataTable);
    }
}
exports.QOTDMongoClient = QOTDMongoClient;
