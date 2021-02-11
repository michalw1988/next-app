import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Navbar from '../../components/Navbar'


export default function ItemDetails({ itemDetails }) {

  return <>
    <Head>
      <title>Item {itemDetails.id} - {itemDetails.title}</title>
      <meta name="description" content={itemDetails.title} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Test next.js" />
      <meta property="og:title" content={`Item ${itemDetails.id}`} />
      <meta property="og:description" content={itemDetails.title} />
      <meta property="og:image" content={itemDetails.url} />
      <meta property="og:image:width" content="600"/>
      <meta property="og:image:height" content="600"/>
    </Head>
    
    <Navbar />
    <Link href={`/items`}>&lt; powrót</Link>
    <h1>
      {itemDetails.title}
    </h1>
    <img src={itemDetails.url} />
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