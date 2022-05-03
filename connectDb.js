import { initializeApp, getApps, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import myCredentials from './credentials.js';

export default function connectDb(){
    if(getApps().length === 0){     // IF we dont have any connections running
        initializeApp({             // start connection
            credential: cert(myCredentials)
        })
    }
    return getFirestore()
}
