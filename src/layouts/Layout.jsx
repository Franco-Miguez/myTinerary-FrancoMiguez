import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function Home({children}) {
    return(
    <>
      <NavBar/>
      {children}
      <Footer/>
    </>
    )
}