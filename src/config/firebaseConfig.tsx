import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCPr5LlxV_4wvICgiaZNzzKno5WBjPafyo",
  authDomain: "architect-portfolio-demo.firebaseapp.com",
  databaseURL: "https://architect-portfolio-demo-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "architect-portfolio-demo",
  storageBucket: "architect-portfolio-demo.appspot.com",
  messagingSenderId: "418616245018",
  appId: "1:418616245018:web:2fbc214bb60f63118bcaa3",
  measurementId: "G-5W5PNXYH09"
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };