import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        Strona główna
      </Head>
      <h1>
        Strona główna
      </h1>
      <Link href={`/shops`}>Sklepy</Link>
    </>
  )
}
