import Head from 'next/head'

import style from '../styles/home.module.scss'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <div className={style.container}>
   <div className={style.heading}>
    <h1>BREAKING BAD MANIA</h1>
    <p>A high school chemistry teacher diagnosed with inoperable <br /> lung cancer turns to manufacturing and selling <br /> methamphetamine in order to secure his family's future.</p>
   </div>
    </div>
    </div>
  )
}
