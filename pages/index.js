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
      <div>
        <Link href={`/shops`}>Sklepy</Link>
      </div>
      <div>
        <Link href={`/items`}>Test items</Link>
      </div>
    </>
  )
}
