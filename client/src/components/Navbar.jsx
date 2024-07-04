import React from "react";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
const NavBarItem = ({ title, link, classprops }) => (
  <li className={`mx-4 cursor-pointer ${classprops}`}>
    <a href={link} target="_blank">{title}</a>
  </li>
);

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);


  return (
    <nav className="w-full flex md:justify-center justify-between items-center p-4">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
        {[
          { title: "Market", link: "https://in.tradingview.com/chart/1ie1Y0Sd/?symbol=BINANCE%3AETHUSD"  },
          { title: "Exchange", link: "https://www.delta.exchange/" },
          { title: "Tutorials", link: "https://www.youtube.com/watch?v=4cRXEGduA-o" },
          { title: "Wallets", link: "https://ethereum.org/en/wallets/" },
        ].map((item, index) => (
          <NavBarItem
            key={item.title + index}
            title={item.title}
            link={item.link}
          />
        ))}
        
       
       
      </ul>
    </nav>
  );
};

export default Navbar;
