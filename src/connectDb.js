import { initializeApp, getApps, cert } from 'firebase-admin/app'; // functions to connect to the suite
import { getFirestore } from 'firebase-admin/firestore';    // get firestore from the suite 
import myCredentials from '../credentials.js';  // get the credentials to connect to the suite

// function to connect to the database
export default function connectDb(){
    if(getApps().length === 0){     // Check if we are connected to any app in the suite, if none
        initializeApp({             // start connection
            credential: cert(myCredentials)
        })
    }
    return getFirestore()   //return the connection to firestore
}
