import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'


export default function ItemDetails({ itemDetails }) {

  return <>
    <Head>
      <title>{itemDetails.title}</title>
    </Head>
    <Link href={`/items`}>&lt; powrót</Link>
    <h1>
      {itemDetails.title}
    </h1>
    <img src={itemDetails.thumbnailUrl} />
  </>
}

export async function getServerSideProps({ params }) {
  return axios.get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
    .then(response => {
      return {
        props: { itemDetails: response.data }
      }
    })
}