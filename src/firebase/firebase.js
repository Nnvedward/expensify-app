// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { child, get, getDatabase, off, onChildAdded, onChildChanged, onChildRemoved, onValue, push, ref, remove, set, update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIRBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getDatabase(app);



// push(ref(db, 'expenses'), {
//     description: "Rent",
//     note: '', 
//     amount: 400000,
//     createdAt: 144
// })

// const query = ref(db, 'expenses')
// onChildAdded(query, (snapshot) => {
//     console.log(snapshot.key, snapshot.val())
// })

// const query = ref(db, 'expenses')
// onValue(query, (snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })



// const dbref = ref(db)

// get(child(dbref, 'expenses')).then((snapshot) => {
//     const expenses = []

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses)
// })


// set(ref(db,'user'), {
//     username: 'Edward',
//     age: 25,
//     stressLevel: 6,
//     job: {
//         title: 'Software developer',
//         company: 'Bluetag'
//     },
//     location: {
//         city: 'Enugu',
//         country: 'Nigeria'
//     }
// });


// set(ref(db, 'user/age'), 26)
// set(ref(db, 'user/location/city'), 'Lagos')
// set(ref(db, 'user/attributes'), {
//     height: 80,
//     weight: 100
// })

// remove(ref(db, 'user/isSingle')).then(() => {
//     console.log("User relationship status removed successfully")
// }).catch((e) => {
//     console.log('Error occured', e)
// })

// update(ref(db, 'user/'), {
//     stressLevel: 9,
//     'job/company': 'Paystack',
//     'location/city': 'Lagos'
// })