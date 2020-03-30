import "firebase/firestore";
import { db, auth } from "./index";

const userRef = db.collection("user");

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
