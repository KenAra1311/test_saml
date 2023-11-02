import firebase from "firebase/app";
import "firebase/auth";

export default function Home() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  };

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const auth = firebase.auth();
  const provider = new firebase.auth.SAMLAuthProvider("saml.test_saml");

  const onClickSignIn = async () => {
    try {
      const result = await auth.signInWithPopup(provider);
      console.log("result", result);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <div>Identity Platform Quickstart</div>
      <div id="message">Loading...</div>
      <button onClick={onClickSignIn}>sign in</button>
    </>
  );
}
