import {useState} from 'react'
import Button from "../components/Button";
import {FaUserAlt} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'

export default function NavBar() {
  return (
    <nav className="hidden md:flex justify-between items-center w-3/4 font-bold absolute left-0 right-0 mx-auto mt-6 before:content-[''] before:absolute before:w-full before:h-full before:bg-white before:bg-opacity-70 before:blur-sm before:-z-10 z-40">
      <a href="#" className="text-lg">My Tinerary</a>
      <ul className="flex gap-4 items-center">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Cites</a>
        </li>
        <li>
          <Button>
            <FaUserAlt style={{color:"#fff"}}/>
            Login
          </Button>
        </li>
      </ul>
    </nav>
  );
}

NavBar.Mobile = () =>{
  const [menu,setMenu] = useState(false)
  const clik = () => {setMenu(!menu); console.log("Click")}
  return (
    <nav className="flex flex-wrap md:hidden justify-between  w-5/6 font-bold absolute left-0 right-0 mx-auto mt-6 before:content-[''] before:absolute before:w-full before:h-full before:bg-white before:bg-opacity-50 before:blur-sm before:-z-10 z-40">
      <a href="#" className="text-lg">My Tinerary</a>
      <button onClick={clik}><GiHamburgerMenu style={{color:"#4F46E5"}} size={20} /></button>
    <ul className={`${menu?"flex" :"hidden h-0 w-0"} pb-6 w-full gap-4 flex-col items-center`}>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Cites</a>
        </li>
        <li>
          <Button>
            <FaUserAlt style={{color:"#fff"}}/>
            Login
          </Button>
        </li>
      </ul>
    </nav>
  );

}