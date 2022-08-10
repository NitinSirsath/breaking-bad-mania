import React , {useState} from "react";
import style from "../styles/navbar.module.scss";
import logo from "../public/logo/breaking-bad-logo.png";
import Image from "next/image";
import NavMenu from "./NavMenu";
import HamMenu from '../public/navbar/ham_menu.png'

const Navbar = () => {
    const [open, setOpen] = useState(false)
  return (
    <div className={style.container}>
      <div>
        <Image
          src={logo}
          alt=""
          className={style.main_logo}
          height="60"
          width="100"
        />
      </div>
    <div onClick={() => setOpen(!open)}> {open ?  <NavMenu setOpen={setOpen} open={open}/> : <Image src={HamMenu} 
     alt='' height='40' width='40'/>}</div>
    </div>
  );
};

export default Navbar;
