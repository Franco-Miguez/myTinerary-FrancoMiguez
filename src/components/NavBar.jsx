import Button from "../components/Button";
import {FaUserAlt} from 'react-icons/fa'

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center w-3/4 font-bold">
      <a href="#">My Tinerary</a>
      <ul className="flex gap-2 items-center">
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
