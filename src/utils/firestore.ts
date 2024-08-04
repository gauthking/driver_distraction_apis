import admin from 'firebase-admin';

// Path to your service account key
const serviceAccount = require('../../driverdistraction-bfaea-firebase-adminsdk-tb0p0-2d83dd41bc.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://<your-project-id>.firebaseio.com'
});

const db = admin.firestore();

export default db;