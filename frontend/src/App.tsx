 import Navbar from './components/Navbar.tsx' 
 import Header from './components/Header.tsx'
import Body from './components/Body.tsx'
import Footer from './components/Footer.tsx'
import {Banner, LongBanner} from './components/Banner.tsx'
import { BANNER_ONE, BANNER_TWO, } from './constants/banner.ts'
import { Outlet } from 'react-router-dom'


const App = () => {  

  return (
    <>
    <Navbar />
    <Header />
    <Banner banner={BANNER_ONE} isLong={false}/>
    <Outlet />
      <Banner banner={BANNER_TWO} isLong={true}/> 
      <LongBanner />
      <Body /> 
    <Footer />
    </>
  )
}





export default App
