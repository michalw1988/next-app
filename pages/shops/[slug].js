import { useState, useEffect } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'


export default function Shop({ shopData }) {
  const [page, setPage] = useState(1)
  const [shopPromotions, setShopPromotions] = useState([])

  useEffect(() => {
    console.log('useEffect - 1st load')
  }, [])

  useEffect(() => {
    axios.get(`http://promocje-dla-dzieci-api.wenus.softnauts.com/api/promotions?latest&shop=${shopData.slug}&page=${page}&per_page=12`).then(response => {
      setShopPromotions(response.data.items)
    })
  }, [page])

  return <>
    <Head>
      <title>Sklep - {shopData.name}</title>
    </Head>
    <Link href={`/shops`}>
      &lt; powrót
    </Link>
    <h1>
      {shopData.name}
    </h1>
    <img src={'http://promocje-dla-dzieci-api.wenus.softnauts.com' + shopData.image_path} />
    <h2>Promocje sklepu:</h2>
    <ul>
      {
        shopPromotions.map((item, i) => (
          <li key={i}>
            <Link href={`/shops/${shopData.slug}/${item.slug}`}>
              {item.title}
            </Link>
          </li>
        ))
      }
    </ul>
    <div onClick={() => setPage(page - 1)}>prev page</div>
    <div>page: {page}</div>
    <div onClick={() => setPage(page + 1)}>next page</div>
  </>
}

export async function getServerSideProps({ params }) {
  return axios.get(`http://promocje-dla-dzieci-api.wenus.softnauts.com/api/shops/${params.slug}`)
  .then(response => {
    return {
      props: { shopData: response.data }
    }
  })
}