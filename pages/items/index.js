import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'


export default function Items({ items }) {

  return <>
    <Head>
      <title>All items</title>
    </Head>
    <Link href={`/`}>&lt; Strona główna</Link>
    <h1>
      Wszystkie
    </h1>
    <ul>
    {
      items.map((item, i) => (
        <li key={i}>
          <Link href={`/items/${item.id}`}>
            {item.title}
          </Link>
        </li>
      ))
    }
    </ul>
  </>
}

export async function getServerSideProps() {
  return axios.get(`https://jsonplaceholder.typicode.com/photos`)
    .then(response => {
      return {
        props: { items: response.data }
      }
    })
}