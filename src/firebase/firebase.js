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

firebase
  .database()
  .ref()
  .set({
    name: "Alex Toson",
  });
