import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD1FnzZ1JWOt4X9FOHxHOk7529j0bkgCy0",
  authDomain: "expensify-app-84d7d.firebaseapp.com",
  databaseURL: "https://expensify-app-84d7d.firebaseio.com",
  projectId: "expensify-app-84d7d",
  storageBucket: "expensify-app-84d7d.appspot.com",
  messagingSenderId: "996559903032",
  appId: "1:996559903032:web:2b6cbfb53eab7c7ba349cd",
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref("expenses").push({
  description: "Rent",
  amount: "67000",
  note: "",
  createdAt: "515151515",
});

database.ref("expenses").push({
  description: "Food",
  amount: "7000",
  note: "",
  createdAt: "51515351",
});

database.ref("expenses").push({
  description: "Petrol",
  amount: "1020",
  note: "",
  createdAt: "241354645",
});

// database.ref("notes").push({
//   title: "Course Topics",
//   body: "react, monogo",
// });

// const firebaseNotes = {
//   notes: {
//     hacvmsnvcas: {
//       title: "first note",
//       body: "this is my note",
//     },
//     kjhschvwec: {
//       title: "Another note",
//       body: "this is my note",
//     },
//   },
// };

// const notes = [
//   {
//     id: "12",
//     title: "first note",
//     body: "this is my note",
//   },
//   {
//     id: "75427",
//     title: "Another note",
//     body: "this is my note",
//   },
// ];

// database.ref("notes").set(firebaseNotes);

// const onValueChange = database.ref().on(
//   "value",
//   (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
//   },
//   (e) => {
//     console.log("Error with data fetching", e);
//   }
// );

// setTimeout(() => {
//   database.ref().update({
//     name: "Ben",
//   });
// }, 3500);

// setTimeout(() => {
//   database.ref().off("value", onValueChange);
// }, 7000);

// database
//   .ref("location/city")
//   .once("value")
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch((error) => {
//     console.log("Error fetching data", error);
//   });

// database
//   .ref()
//   .set({
//     name: "Alex Toson",
//     age: 27,
//     stressLevel: 6,
//     location: {
//       city: "Sydney",
//       country: "Australia",
//     },
//     job: {
//       title: "Software Engineer",
//       company: "New Republique",
//     },
//   })
//   .then(() => {
//     console.log("Data is saved!");
//   })
//   .catch((error) => {
//     console.log("this failed", error);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Atlassian",
//   "location/city": "Melbourne",
// });

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((error) => {
//     console.log("Remove failed: " + error.message);
//   });
