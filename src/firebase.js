// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase"
var firebaseConfig = {
apiKey: "AIzaSyAK5b2BKFLMsfS1I-jNw6ripyhIS1HONJo",
authDomain: "fun-food-friends-f79f4.firebaseapp.com",
projectId: "fun-food-friends-f79f4",
storageBucket: "fun-food-friends-f79f4.appspot.com",
messagingSenderId: "1040252426789",
appId: "1:1040252426789:web:3ec5bcc762fa9868e6fdcc",
measurementId: "G-48K89NGB85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase
