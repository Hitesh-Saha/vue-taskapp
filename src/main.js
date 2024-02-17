import { createApp } from 'vue'
import router from './router/index.js'
import store from './store/index.js'
import './style.css';
// import { initializeApp } from "firebase/app";
import { firebaseApp } from './services/firebase.js';
import App from './App.vue'

const app = createApp(App)
// const firebaseConfig = {
//   apiKey: "AIzaSyAXz3MxKlU38lWdGa5k8bro-K17yhAKpzU",
//   authDomain: "vue-taskapp.firebaseapp.com",
//   projectId: "vue-taskapp",
//   storageBucket: "vue-taskapp.appspot.com",
//   messagingSenderId: "132987943093",
//   appId: "1:132987943093:web:14c13369190ca9994da6fc"
// };
// const firebaseApp = initializeApp(firebaseConfig);

app.use(router).use(store).use(firebaseApp).mount('#app')
