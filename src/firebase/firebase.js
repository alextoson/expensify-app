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
    isSingle: false,
    location: {
      city: "Sydney",
      country: "Australia",
    },
  })
  .then(() => {
    console.log("Data is saved!");
  })
  .catch((error) => {
    console.log("this failed", error);
  });

// database.ref().set("This is my data.");

// database.ref("age").set(28);
// database.ref("location/city").set("Hornsby");

database
  .ref("attributes")
  .set({
    height: 1.7,
    weight: 78,
  })
  .then(() => {
    console.log("Data is saved again");
  })
  .catch((error) => {
    console.log("this failed again", error);
  });
