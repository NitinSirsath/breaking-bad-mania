import Layout from '../components/Layout'

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
    {/* <Navbar /> */}
    <Layout />
     <Component {...pageProps} />
  </div>
}

export default MyApp
