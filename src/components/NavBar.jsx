import { useState } from "react";
import Button from "../components/Button";
import { FaUserAlt, FaUserPlus } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link as Anchor } from "react-router-dom";

const links = [
  {title: 'Home', to:'/'},
  {title:'Cities', to:'/cities'},
  {title:'Login', to:'/login'},
]

export default function NavBar() {
  return (
    <nav className="hidden md:flex justify-between items-center w-3/4 font-bold absolute left-0 right-0 mx-auto mt-6 before:content-[''] before:absolute before:w-full before:h-full before:bg-white before:bg-opacity-70 before:blur-sm before:-z-10 z-40">
      <div className="flex items-center">
        <img src="./src/img/logo.png" alt="Logo" className="h-12" />
        <a href="#" className="text-lg pl-2">
          My Tinerary
        </a>
      </div>
      <ul className="flex gap-4 items-center">
        {links.map((link) =>
          link.title != 'Login'?
          <li key={link.title}>
          <Anchor  to={link.to}>{link.title}</Anchor>
          </li> :
          <li key={link.title}>
            <Anchor  to={link.to}>
              <Button>
                <FaUserAlt style={{ color: "#fff" }} />
                {link.title}
              </Button>
            </Anchor>
          </li>
        )}
      </ul>
    </nav>
  );
}

NavBar.Mobile = () => {
  const [menu, setMenu] = useState(false);
  const clik = () => {
    setMenu(!menu);
    console.log("Click");
  };
  return (
    <nav className="flex flex-wrap md:hidden justify-between  w-5/6 font-bold absolute left-0 right-0 mx-auto mt-6 before:content-[''] before:absolute before:w-full before:h-full before:bg-white before:bg-opacity-50 before:blur-sm before:-z-10 z-40">
      <div className="flex items-center">
        <img src="./src/img/logo.png" alt="Logo" className="h-10" />
        <a href="#" className="text-lg">
          My Tinerary
        </a>
      </div>
      <button onClick={clik}>
        <GiHamburgerMenu style={{ color: "#012d57" }} size={20} />
      </button>
      <ul
        className={`${
          menu ? "flex" : "hidden h-0 w-0"
        } pb-6 w-full gap-4 flex-col items-center`}
      >
        {links.map((link) =>
          link.title != 'Login'?
          <li key={link.title}>
          <Anchor  to={link.to}>{link.title}</Anchor>
          </li> :
          <li key={link.title}>
            <Anchor  to={link.to}>
              <Button>
                <FaUserAlt style={{ color: "#fff" }} />
                {link.title}
              </Button>
            </Anchor>
          </li>
        )}
      </ul>
    </nav>
  );
};
