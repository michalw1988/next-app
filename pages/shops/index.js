import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'


export default function Shops({ shops }) {

  return <>
    <Head>
      <title>Wszystkie sklepy</title>
    </Head>
    <Link href={`/`}>&lt; Strona główna</Link>
    <h1>
      Wszystkie sklepy
    </h1>
    <ul>
    {
      shops.map((item, i) => (
        <li key={i}>
          <Link href={`/shops/${item.slug}`}>
            {item.name}
          </Link>
        </li>
      ))
    }
    </ul>
  </>
}

export async function getServerSideProps() {
  return axios.get(`http://promocje-dla-dzieci-api.wenus.softnauts.com/api/shops/all`)
    .then(response => {
      return {
        props: { shops: response.data }
      }
    })
}