// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from 'firebase/firestore';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC18tg3YHajzE9MthBg5CBrd_PRBYMSAwc',
  authDomain: 'lisek091page.firebaseapp.com',
  projectId: 'lisek091page',
  storageBucket: 'lisek091page.appspot.com',
  messagingSenderId: '226446850209',
  appId: '1:226446850209:web:6ff2bed3e826bb279bd8e0',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
