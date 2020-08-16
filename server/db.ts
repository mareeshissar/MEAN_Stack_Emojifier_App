const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

//const mongoURL = 'mongodb://localhost:27017/emojifier';

const mongoURL = 'add your mongoDB Atlas database link here';

module.exports = function saveFace(imageUrl, data) {
  MongoClient.connect(mongoURL, { useNewUrlParser: true }, (err, db) => {
    if (err) throw err;
    const dbo = db.db("emojifier");
	dbo.createCollection("faces");
    // TODO: insert the object into the database
	const myobjFace = { imageUrl: imageUrl, faceAttributes: data };
    dbo.collection("faces").insertOne(myobjFace, function(err, res) {
    if (err) throw err;
    console.log("1 register inserted");
    db.close();
	});
  });
};
