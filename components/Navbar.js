import { route } from "next/dist/next-server/server/router"
import Link from "next/link"
import { useRouter } from 'next/router'


export default function Navbar() {
  const router = useRouter()
  const pathname = router.pathname

  console.log('navbar rendered', pathname)

  return (
    <div className="navbar-wrapper">
      <div className={`link ${pathname.includes('/shops') && 'link-active'}`}>
        <Link href={`/shops`}>Sklepy</Link>
      </div>
      <div className={`link ${pathname.includes('/items') && 'link-active'}`}>
        <Link href={`/items`}>Test items</Link>
      </div>
      <div className={`link ${pathname.includes('/page1') && 'link-active'}`}>
        <Link href={`/page1`}>Page 1</Link>
      </div>
      <div className={`link ${pathname.includes('/page2') && 'link-active'}`}>
        <Link href={`/page2`}>Page 2</Link>
      </div>
    </div>
  )
}