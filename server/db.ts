const mongodb = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

//const mongoURL = 'mongodb://localhost:27017/emojifier';

const mongoURL = 'mongodb+srv://student:student@123@cluster0.jbjrj.mongodb.net/emojifier?retryWrites=true&w=majority';

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
