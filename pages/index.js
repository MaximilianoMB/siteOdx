import Head from 'next/head'
import Image from 'next/image'
import Contato from '../components/contato'
import Cover from '../components/cover'
import Footer from '../components/footer'
import Modals from '../components/modals'
import Navigation from '../components/navigation'
import Portfolio from '../components/portfolio'
import Services from '../components/services'
import Sobre from '../components/sobre'
import Time from '../components/time'


export default function Home() {
  return (
    <div >
      <Head>
        <title>ODX</title>
        <meta name="description" content="Site ODX" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Cover />
      <Sobre />
      <Services />
      <Portfolio />
      <Time />
      <Contato />

    
    </div>
  )
}
