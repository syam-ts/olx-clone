import { useState, useContext } from 'react';
import { FirebaseContext } from '../strore/FirebaseContext';
import Logo from '../olx-logo.png';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const firebaseApp = useContext(FirebaseContext);
  const navigate = useNavigate()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (firebaseApp) {
      const auth = getAuth(firebaseApp);
      
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate('/body')
        })
        .catch((error) => {
          alert(error.message);
        });
    } else {
      alert('Firebase is not initialized');
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}
