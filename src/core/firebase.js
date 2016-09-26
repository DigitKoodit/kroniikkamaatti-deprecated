import firebase from 'firebase';

const config = {
  apiKey: "AIzaSyBZZH9Z8iwgijHLsA0r5ge2lvJmtd_elCg",
  authDomain: "kroniikkamaatti16.firebaseapp.com",
  databaseURL: "https://kroniikkamaatti16.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "957135810661"
};

export function getNewFirebase() {
  return firebase.initializeApp(config);
}

export function addComment(firebaseRef, student, comment) {
  const guild = student.get('guild').toLowerCase();
  const tutors = student.get('tutors')
    .split(' ')
    .join('_')
    .toLowerCase();
  const name = student.get('name')
    .split(' ')
    .join('_')
    .toLowerCase();
  const dbPath = `${guild}/${tutors}/${name}`

  Promise.resolve(
    firebaseRef.database().ref(dbPath).push({
      comment: comment
    }))
    .then(() => {
      console.log('Success')
    })
    .catch((e) => {console.log(e)});
}