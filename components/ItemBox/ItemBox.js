import Link from "next/link"

export default function ItemBox({ data }) {

  console.log('data', data)

  return (
    <div className="item-box">
      <Link href={`/items/${data.id}`}>
        <div>
          <img src={data.thumbnailUrl} />
          {data.title}
        </div>
      </Link>
    </div>
  )
}