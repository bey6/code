const MongoClient = require('mongodb').MongoClient;

const mdb = {
  connect: (url, dbName, method) => {
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
      if (err) throw err;
      const adminDb = client.db(dbName).admin();
      console.log('connect success!');
      method(adminDb, client);
    })
  },
  insert: function (url, dbName, collectionName, obj) {
    this.connect(url, dbName, (db, connect) => {
      db.collection(collectionName).insertOne(obj, (err, res) => {
        if (err) throw err;
        console.log('insert success！');
        connect.close();
      })
    })
  },
  find: function (url, dbName, collectionName, queryObj) {
    this.connect(url, dbName, (db, connect) => {
      return db.collection(collectionName).find(queryObj).toArray((err, res) => {
        if (err) throw err;
        console.log(res);
        connect.close();
      })
    })
  }
}

module.exports = mdb;