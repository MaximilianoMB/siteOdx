import Navigation from '../components/navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <Navigation />
    <Component {...pageProps} />
  </>
  ) 
}

export default MyApp
