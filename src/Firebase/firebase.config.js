// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyCvrGblQRor7opsTm21voAtH9_C9riINx0",
//   authDomain: "resell-phones.firebaseapp.com",
//   projectId: "resell-phones",
//   storageBucket: "resell-phones.appspot.com",
//   messagingSenderId: "9903439953",
//   appId: "1:9903439953:web:4e55759930a3a8104fb870"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;