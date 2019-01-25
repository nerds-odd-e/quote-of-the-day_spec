const quotes = [
  {"ID": 1,
   "Quote": "What is essential is invisible to the eyes",
   "Autor": "Antoine de Saint-Exupéry",
   "Location": "Little Prince",
   "Date": "1942",
   "Language": "English",
   "Contributor": "Terry",
   "ContributionDate": "21 January 2019"
  },
  {"ID": 2,
   "Quote": "idfdfdf",
   "Autor": "yyyy",
   "Location": "Little Prince",
   "Date": "1942",
   "Language": "English",
   "Contributor": "Terry",
   "ContributionDate": "21 January 2019"
  }
];


async function name() {
  let MongoClient = require("mongodb").MongoClient;
  let client = MongoClient("mongodb://localhost:27017/");
  await client.connect();
  let db = client.db("quotes-database");
  await db.collection("quotes").insertMany(quotes);
  //await db.collection("days-with-quotes").insertMany(days_quotes);
  client.close();
}
name();

