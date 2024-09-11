// src/components/Login.tsx

import { useState, useContext } from 'react';
import { FirebaseContext } from '../strore/FirebaseContext'; // Fixed path
import Logo from '../olx-logo.png';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { auth } = useContext(FirebaseContext) || {}; // Correctly access context
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (auth) {
      try {
        await signInWithEmailAndPassword(auth, email, password);
        navigate('/');
      } catch (error) {
        alert(`Error: ${error.message}`);
      }
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
