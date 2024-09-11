import React, { useState, useContext } from 'react'
import Logo from '../olx-logo.png'
import { useNavigate } from "react-router-dom"
import { FirebaseContext } from '../strore/FirebaseContext'
import { getAuth, createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

export default function Signup() {
  const navigate = useNavigate()
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const firebaseApp = useContext(FirebaseContext)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (firebaseApp) {
      const auth = getAuth(firebaseApp)
      const firestore = getFirestore(firebaseApp)
      
      try {
        const result = await createUserWithEmailAndPassword(auth, email, password)
        await updateProfile(result.user, { displayName: userName })
        await addDoc(collection(firestore, 'users'), {
          id: result.user.uid,
          username: userName,
          phone: phone
        })
        navigate("/login")
      } catch (error: any) {
        if (error.code === 'auth/email-already-in-use') {
          setError('The email address is already in use by another account.')
        } else {
          setError('An error occurred during signup. Please try again.')
        }
        console.error('Error during signup:', error)
      }
    } else {
      console.error('Firebase app is not initialized.')
    }
  }

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            name="name"
            required
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            name="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            id="lname"
            name="phone" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button type="submit">Signup</button>
          {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
        </form>
        <a href="/login">Login</a>
      </div>
    </div>
  )
}


