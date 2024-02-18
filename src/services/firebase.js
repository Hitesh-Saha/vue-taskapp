import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, updateDoc, arrayUnion } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAXz3MxKlU38lWdGa5k8bro-K17yhAKpzU",
  authDomain: "vue-taskapp.firebaseapp.com",
  projectId: "vue-taskapp",
  storageBucket: "vue-taskapp.appspot.com",
  messagingSenderId: "132987943093",
  appId: "1:132987943093:web:14c13369190ca9994da6fc",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth();

const db = getFirestore(firebaseApp)

const signUp = (userObject) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(
      auth,
      userObject.username,
      userObject.password
    )
      .then((userCredential) => {
        const user = userCredential.user;
        const userDetails = auth.currentUser;
        updateProfile(userDetails, { displayName: userObject.name });
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({errorCode, errorMessage});
      });
  });
};
const logIn = (userObject) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, userObject.username, userObject.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        reject({errorCode, errorMessage});
      });
  });
};
const addNewProject = (project) => {
    return new Promise((resolve, reject) => {
        const dbRef = collection(db, 'projects');
        addDoc(dbRef, {
            title: project.title,
            description: project.description,
            tasks: project.tasks
          })
        .then((response) => {
            resolve(response.id)
        })
        .catch((error) => {
          reject(error)
        })   
    })
};
const getProjects = () => {
    return new Promise((resolve, reject) => {
        const dbRef = collection(db, "projects");
        let projects = [];
        getDocs(dbRef).then((response) => {
            response.docs.map((doc) => {
                const project = doc.data()
                project.id = doc.id
                projects.push(project)
            });
            resolve(projects)
        })
        .catch(error => {
            reject(error)
        })
    })
};
const addNewTask = (tasks) => {
    return new Promise((resolve,reject) => {
        const dbRef = doc(db, "projects", tasks.projectId);
        const project = {
            title: tasks.name,
            status: tasks.status,
            id: tasks.id
        }
        updateDoc(dbRef, {
            tasks: arrayUnion(project)
        }).then((res) => {
            console.log(res)
            resolve(res)
        })
        .catch(err => {
            reject(err)
        })
    })
}

export { firebaseApp, db, signUp, logIn, addNewProject, getProjects, addNewTask };
