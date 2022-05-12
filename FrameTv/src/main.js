import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './index.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCh9Zyk_vDyZWRyJg5wJq6QyTMREL-wgTY",
    authDomain: "frametvapp.firebaseapp.com",
    projectId: "frametvapp",
    storageBucket: "frametvapp.appspot.com",
    messagingSenderId: "748591939863",
    appId: "1:748591939863:web:82af9d9c995ded72a4f752"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);











const app = createApp(App)

app.use(router)

app.mount('#app')