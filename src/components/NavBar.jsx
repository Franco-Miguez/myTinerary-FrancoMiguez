import Button from "../components/Button";
import {FaUserAlt} from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-3/4 font-bold absolute left-0 right-0 mx-auto mt-6">
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
