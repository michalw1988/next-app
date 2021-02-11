import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Head>
        Strona główna
      </Head>
      
      <Navbar />
      <h1>
        Strona główna
      </h1>
    </>
  )
}
