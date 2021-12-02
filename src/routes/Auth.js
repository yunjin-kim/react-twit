import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { authService, firebaseInstance } from "../fbase";


const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");

  const onChange = (event) => {
    const { target: { name, value } } = event;
    if (name === "email") {
      setEmail(value)
    } else if(name === "password") {
      setPassword(value)
    }
  }

  const onSubmit = async (e) => {
    const auth = getAuth();
    e.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await createUserWithEmailAndPassword(auth, email, password);
      } else {
        data = await signInWithEmailAndPassword(auth, email, password);
      }
      console.log(data)
    } catch (e) {
      setError(e.message)
    }
  }

  const toggleAccount = () => setNewAccount(prev => !prev);


  const onSocialClick = async (event) => {
    const {
    target: { name },
    } = event;
    const auth = getAuth();
    
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();
    if (name === "google") {
      signInWithPopup(auth, providerGoogle).then((result) => {
        let credential = GoogleAuthProvider.credentialFromResult(result);
        let token = credential.accessToken;
        let user = result.user;
      }).catch((error) => {
        console.log(error)
      });
    } else if (name === "github") {
      signInWithPopup(auth, providerGithub).then((result) => {
        let credential = GithubAuthProvider.credentialFromResult(result);
        let token = credential.accessToken;
        let user = result.user;
      }).catch((error) => {
        console.log(error)
      });;
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          name="email" 
          type="email" 
          placeholder="Email" 
          required 
          value={email} 
          onChange={onChange} />
        <input 
          name="password" 
          type="password" 
          placeholder="Password" 
          required 
          value={password} 
          onChange={onChange} />
        <input type="submit" value="Log In" value={newAccount ? "Create Account" : "Sign In"} />
        {error}
      </form>
      <span onClick={toggleAccount}>{newAccount ? "Sign in": "Create Account"}</span>
      <div>
        <button onClick={onSocialClick} name="google">Google</button>
        <button onClick={onSocialClick} name="github">Github</button>
      </div>
    </div>
  )
}

export default Auth;