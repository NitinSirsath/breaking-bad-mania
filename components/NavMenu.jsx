import React , {useState} from 'react'
import style from '../styles/navbar.module.scss'
import CloseMenu from '../public/navbar/close.png'
import Image from 'next/image'

const NavMenu = () => {
    
  return (
    <div className={style.menu_items}>
        <li>Home</li>
        <li>Character Mania</li>
        <li>About</li>
        <Image className={style.menu_ham} src={CloseMenu} alt='' height='40' width='40' />
      </div>
  )
}

export default NavMenu