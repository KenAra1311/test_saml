/** @format */

import { initializeApp } from "firebase/app";
import { getAuth, SAMLAuthProvider, signInWithPopup } from "firebase/auth";

export default function Home() {
  const provider = new SAMLAuthProvider("saml.プロバイダー名");

  const onClickSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      console.log("result", result);
    } catch (e) {
      console.error(e);
    }
  };

  const config = {
    apiKey: "firebaseのAPIキー",
    authDomain: "firebaseのドメイン",
  };

  const app = initializeApp(config);
  const auth = getAuth(app);

  return (
    <>
      <div>Identity Platform Quickstart</div>
      <div id="message">Loading...</div>
      <button onClick={onClickSignIn}>sign in</button>
    </>
  );
}
