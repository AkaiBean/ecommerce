import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyAutpItUMCYds5qo20DprE0RhZqi5YMTVI',
	authDomain: 'crown-db-47576.firebaseapp.com',
	projectId: 'crown-db-47576',
	storageBucket: 'crown-db-47576.appspot.com',
	messagingSenderId: '178328831782',
	appId: '1:178328831782:web:661a1d84905221b613e3e7',
	measurementId: 'G-D15V4E4ES5'
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
