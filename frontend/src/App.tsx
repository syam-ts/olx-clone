 import Navbar from './components/Navbar.tsx' 
 import Header from './components/Header.tsx'
import Body from './components/Body.tsx'
import Banner from './components/Banner.tsx'
import Footer from './components/Footer.tsx'

const App = () => { 
  return (
    <>
    <Navbar />
    <Header />
    <Banner />
    <span className="text-xl">Fresh Recomendations</span>
    <Body />
    <Footer />
    </>
  )
}

export default App
