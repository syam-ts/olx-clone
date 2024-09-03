 import Navbar from './components/Navbar.tsx' 
 import Header from './components/Header.tsx'
import Body from './components/Body.tsx'

const App = () => { 
  return (
    <>
    <Navbar />
    <Header />
    <span className="text-xl">Fresh Recomendations</span>
    <Body />
    </>
  )
}

export default App
