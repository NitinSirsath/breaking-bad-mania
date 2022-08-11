import React, { useEffect, useState } from "react";

import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import Main_logo from '../public/logo/breaking-bad-logo.png'
import Image from "next/image";
import style from "../styles/header.module.scss";
import Link from 'next/link'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  const ctaClickHandler = () => {
    menuToggleHandler();
  };

  return (
    <header className={style.header}>
      <div className={style.header__content}>
        <Image src={Main_logo} alt='' height='60' width='100' className={style.header__content__logo} />
        <nav
          className={`${style.header__content__nav} ${
            menuOpen && size.width < 768 ? style.isMenu : ""
          }`}
        >
          <ul>
            <li>
              <Link href="/" onClick={menuToggleHandler}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/mania" onClick={menuToggleHandler}>
                Character Mania
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={menuToggleHandler}>
                About
              </Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>Hamburger</button>
        </nav>
        <div  className={style.header__content__toggle}>
          {!menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
