import React from 'react'
import style from '../styles/about.module.scss'
import Image from 'next/image'
import github from '../public/github.png'


const about = () => {
  return (
    <div className={style.container}>
        <h1>Summary</h1>
        <p>Hello Guys, I build this application as a assignment  project  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor soluta, iusto sequi adipisci laudantium fugit quis, et veritatis est magni,  delectus officia facere incidunt hic porro tempora enim asperiores! Vero. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae molestiae sapiente error cumque, quidem dicta sunt animi quod deleniti ducimus distinctio suscipit doloremque minus ex at? Magnam laboriosam nemo optio?</p>
        <a className={style.github} rel='noreferrer' target='_blank' href='https://github.com/NitinSirsath/breaking-bad-mania'><Image src={github} alt='github' height={50} width={50}/></a>
    </div>
  )
}

export default about