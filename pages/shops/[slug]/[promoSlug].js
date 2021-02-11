import { useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import Navbar from '../../../components/Navbar'


export default function Promotion({ promotionData }) {

  useEffect(() => {
    console.log('promotion details', promotionData)
  }, [])

  return <>
    <Head>
      <title>Promocja: {promotionData.title}</title>
    </Head>

    <Navbar />
    <h1>{promotionData.title}</h1>
    <img src={promotionData.image_path} />
    <div>
      <Link href={`/shops`}>&lt; powrót do listy sklepów</Link>
    </div>
    <div>
      <Link href={`/`}>&lt; Strona główna</Link>
    </div>  
  </>
}

export async function getServerSideProps({ params }) {
  return axios.get(`http://promocje-dla-dzieci-api.wenus.softnauts.com/api/promotions/${params.promoSlug}`)
  .then(response => {
    return {
      props: { promotionData: response.data }
    }
  })
}