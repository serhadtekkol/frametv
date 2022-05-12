import vuex from "vuex"
import axios from "axios"
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCh9Zyk_vDyZWRyJg5wJq6QyTMREL-wgTY",
    authDomain: "frametvapp.firebaseapp.com",
    projectId: "frametvapp",
    storageBucket: "frametvapp.appspot.com",
    messagingSenderId: "748591939863",
    appId: "1:748591939863:web:82af9d9c995ded72a4f752"
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const store = new vuex.Store({

    state: {

        dbUrl: "https://firestore.googleapis.com/v1/projects/taskman-7c60d/databases/(default)/documents/",
        deviceid: "",

    },
    actions: {
        async newDevice({ commit, dispatch, state }, payload) {
            try {
                const docRef = await addDoc(collection(db, "devicelist"), {

                    devicename: "Lovelace",
                    deviceip: "192.168.0.1"
                });
                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }




        }


    },

    mutations: {



    }




})
export default store;