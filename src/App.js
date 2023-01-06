import './App.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './firebase.init';
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [user, setUser] = useState({});
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result=>{
      const user = result.user;
      console.log(user)
      setUser(user);
    })
    .catch(error=>{
      console.error(error)
    })
  
  }
  return (
    <div className="App">
      <button onClick={handleGoogleSignIn}>google sign in</button>
      <h2>name: {user.displayName}</h2>
      <img src={user.photoURL} alt="" />
    </div>
  );
}

export default App;
