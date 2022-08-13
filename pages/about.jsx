import React from 'react'
import style from '../styles/about.module.scss'
import Image from 'next/image'
import github from '../public/github.png'


const about = () => {
  return (
    <div className={style.container}>
        <h1>APPLICATION EXPERIENCE</h1>
        <p>Hello guys, I build this application under the induction program of AntStack. Application is created in nextJS. NextJs is an open-source web development framework built on top of Node.js enabling React-based web applications functionalities such as server-side rendering and generating static websites. In this project I have encounter some of basic functionality that nextJS offers like lazy loading , file based routing , dynamic nested routing and my mentor Judith Joseph told to use new styling library so I have used SASS for styling the apllication. SASS is extension of CSS that enables you to use things like variables, nested rules, inline imports and more.</p>
        <a className={style.github} rel='noreferrer' target='_blank' href='https://github.com/NitinSirsath/breaking-bad-mania'><Image src={github} alt='github' height={50} width={50}/></a>
    </div>
  )
}

export default about