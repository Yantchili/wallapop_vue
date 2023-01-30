import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAT1HCoOSQELJZvAPT3bnhfbmSc82YElVM",
    authDomain: "wallapop-vue.firebaseapp.com",
    projectId: "wallapop-vue",
    storageBucket: "wallapop-vue.appspot.com",
    messagingSenderId: "789235824383",
    appId: "1:789235824383:web:1cf335c50f1ecb2babbeca"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const db = getFirestore()
createApp(App).use(store).use(router).mount('#app')
