import { useState, useContext } from 'react'
import { FirebaseContext } from '../strore/FirebaseContext' 
import Logo from '../olx-logo.png'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { auth } = useContext(FirebaseContext) || {}  
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    if (auth) {
      try {
        await signInWithEmailAndPassword(auth, email, password)
        navigate('/body')
      } catch (error: any) {
        alert(`Error: ${error.message}`)
      }
    } else {
      alert('Firebase is not initialized')
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img className="mx-auto p-3" width="200px" height="200px" src={Logo} alt="Logo" />
        <form onSubmit={handleLogin}>
          <label className="ml-12" htmlFor="email">Email</label>
          <br />
          <input
            className="input border ml-12 border-black focus:border-2"
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <br />
          <label className="ml-12" htmlFor="password">Password</label>
          <br />
          <input
            className="input border ml-12 border-black focus:border-2"
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
          <br /> 
          <br /> 
          <div className="text-center"> 
          <Link to="/signup">
          <span className="bg-white underline text-blue-700">Signup</span>
          </Link>
          </div>
        </form>
      </div>
    </div>
  )
}


