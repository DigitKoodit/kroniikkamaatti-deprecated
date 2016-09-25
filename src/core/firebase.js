import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBZZH9Z8iwgijHLsA0r5ge2lvJmtd_elCg",
  authDomain: "kroniikkamaatti16.firebaseapp.com",
  databaseURL: "https://kroniikkamaatti16.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "957135810661"
};

firebase.initializeApp(config);

const database = firebase.database();

export function getNewFirebase(options) {
  return function initializeFirebase(config = config) {
    const base = firebase.initializeApp(config);
    base.database().ref('guilds/');

    return base;
  }
}