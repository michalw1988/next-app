import Head from 'next/head'
import Navbar from '../components/Navbar'

export default function Page1() {
  return (
    <>
      <Head>
        <title>This is page 1</title>
      </Head>
      <Navbar />
      <h1>Page 1</h1>
    </>
  )
}