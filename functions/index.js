// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
var functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

exports.showEvent = functions.https.onRequest((password, req, res) => {

    return admin.database().ref('pwd').once('value', (snapshot) => {
        loc = snapshot.val();
        arr = Object.keys(loc);
        if (arr.includes(password)) {
            res.send(`${loc[password]}`)
        }else{
            res.send(`Wrong password`)
        };
    });
});