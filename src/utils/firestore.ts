import admin from 'firebase-admin';

// Path to your service account key
import serviceAccount from '../../driverdistraction-bfaea-firebase-adminsdk-tb0p0-2d83dd41bc.json';

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount as any)
});
const db = admin.firestore();

export default db;