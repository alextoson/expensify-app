import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STAORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// // child_removed
// database.ref("expenses").on(
//   "child_removed",
//   (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// // child_changed
// database.ref("expenses").on(
//   "child_changed",
//   (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// // child_added
// database.ref("expenses").on(
//   "child_added",
//   (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// // database.ref("expenses").on(
// //   "value",
// //   (snapshot) => {
// //     const expenses = [];
// //     snapshot.forEach((childSnapshot) => {
// //       expenses.push({
// //         id: childSnapshot.key,
// //         ...childSnapshot.val(),
// //       });
// //     });
// //     console.log(expenses);
// //   },
// //   (e) => {
// //     console.log("Error with data fetching", e);
// //   }
// // );

// // database.ref("notes").push({
// //   title: "Course Topics",
// //   body: "react, monogo",
// // });

// // const firebaseNotes = {
// //   notes: {
// //     hacvmsnvcas: {
// //       title: "first note",
// //       body: "this is my note",
// //     },
// //     kjhschvwec: {
// //       title: "Another note",
// //       body: "this is my note",
// //     },
// //   },
// // };

// // const notes = [
// //   {
// //     id: "12",
// //     title: "first note",
// //     body: "this is my note",
// //   },
// //   {
// //     id: "75427",
// //     title: "Another note",
// //     body: "this is my note",
// //   },
// // ];

// // database.ref("notes").set(firebaseNotes);

// // const onValueChange = database.ref().on(
// //   "value",
// //   (snapshot) => {
// //     const data = snapshot.val();
// //     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// //   },
// //   (e) => {
// //     console.log("Error with data fetching", e);
// //   }
// // );

// // setTimeout(() => {
// //   database.ref().update({
// //     name: "Ben",
// //   });
// // }, 3500);

// // setTimeout(() => {
// //   database.ref().off("value", onValueChange);
// // }, 7000);

// // database
// //   .ref("location/city")
// //   .once("value")
// //   .then((snapshot) => {
// //     const val = snapshot.val();
// //     console.log(val);
// //   })
// //   .catch((error) => {
// //     console.log("Error fetching data", error);
// //   });

// // database
// //   .ref()
// //   .set({
// //     name: "Alex Toson",
// //     age: 27,
// //     stressLevel: 6,
// //     location: {
// //       city: "Sydney",
// //       country: "Australia",
// //     },
// //     job: {
// //       title: "Software Engineer",
// //       company: "New Republique",
// //     },
// //   })
// //   .then(() => {
// //     console.log("Data is saved!");
// //   })
// //   .catch((error) => {
// //     console.log("this failed", error);
// //   });

// // database.ref().update({
// //   stressLevel: 9,
// //   "job/company": "Atlassian",
// //   "location/city": "Melbourne",
// // });

// // database
// //   .ref()
// //   .remove()
// //   .then(() => {
// //     console.log("Remove succeeded.");
// //   })
// //   .catch((error) => {
// //     console.log("Remove failed: " + error.message);
// //   });
