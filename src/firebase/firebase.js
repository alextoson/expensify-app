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

database
  .ref()
  .set({
    name: "Alex Toson",
    age: 27,
    stressLevel: 6,
    location: {
      city: "Sydney",
      country: "Australia",
    },
    job: {
      title: "Software Engineer",
      company: "New Republique",
    },
  })
  .then(() => {
    console.log("Data is saved!");
  })
  .catch((error) => {
    console.log("this failed", error);
  });

database.ref().update({
  stressLevel: 9,
  "job/company": "Atlassian",
  "location/city": "Melbourne",
});

// database
//   .ref()
//   .remove()
//   .then(() => {
//     console.log("Remove succeeded.");
//   })
//   .catch((error) => {
//     console.log("Remove failed: " + error.message);
//   });
