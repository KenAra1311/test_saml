import firebase from "firebase/app";
import "firebase/auth";

export default function Home() {
  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
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
