import firebase from "firebase";
import "firebase/firestore";
import { NewContent, OnePost } from "../components/shared/interface";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();

const userRef = db.collection("user");
const postRef = db.collection("post");

export const handleSignUp = (
  email: string,
  password: string,
  userName: string
) => {
  if (email.length < 4) {
    alert("Please enter an email address.");
    return;
  }
  if (password.length < 4) {
    alert("Please enter a password.");
    return;
  }

  auth
    .createUserWithEmailAndPassword(email, password)
    .then(userCredential => {
      const currentUser = {
        id: userCredential.user?.uid,
        email: email,
        userName: userName,
        emailVerified: userCredential.user?.emailVerified
      };
      userRef.doc(currentUser.id).set({
        email: currentUser.email,
        userName: currentUser.userName,
        photoUrl: ""
      });
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === "auth/weak-password") {
        alert("The password is too weak.");
      } else {
        alert(errorMessage);
      }
      console.log(error);
    });
};

export const handleSignIn = (
  email: string,
  password: string,
  callback: any,
  historyToPush: any
) => {
  return auth
    .signInWithEmailAndPassword(email, password)
    .then(user => {
      if (user) {
        userRef
          .doc(user.user?.uid)
          .get()
          .then(doc => {
            if (doc.exists) {
              const userInfo = { ...doc.data(), id: user.user?.uid };
              callback(userInfo);
              historyToPush();
            } else {
              console.log("no such user");
            }
          })
          .catch(error => {
            console.log("error", error);
          });
      }
    })
    .catch(function(error) {
      alert(error.message);
    });
};

export const handleNewPost = (
  userId: string,
  newContent: NewContent,
  callback: any,
  postId: string
) => {
  const catagoryPostRef = postRef.doc(newContent.catagory);
  catagoryPostRef
    .collection(userId)
    .doc(postId)
    .set(newContent)
    .then(() => callback())
    .catch(error => console.log(error));
};

export const getPostList = (catagory: string, callback: any) => {
  const catagoryPostRef = postRef
    .doc(catagory)
    .collection("cAXgkDCbXLavk627CVgccH3HgQx2");
  let postList: any[] = [];
  catagoryPostRef.get().then(snapshot => {
    snapshot.forEach(doc => {
      let onePost: OnePost = {};
      onePost[doc.id] = doc.data();
      postList.push(onePost);
    });
    callback(postList);
  });
};

export const getPostContentById = (id: string, callback: any) => {
  const catagoryPostRef = postRef
    .doc("blog")
    .collection("cAXgkDCbXLavk627CVgccH3HgQx2")
    .doc(id);
  catagoryPostRef.get().then(snapshot => {
    console.log(snapshot.data());
    const data = snapshot.data();
    callback(data);
  });
};
