import Link from "next/link"
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
interface headlineType     {
      id: string,
      title: string,
      description: string,
      link: string,
      imageUrl: string ,
      imageAlt: string  ,
      category: string,
      type: string,
      isLive: boolean,
      firstPublished: string,
      lastPublished: string,
      source: string
    }
export default async function MarqueHeadline() {
    const  res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data = await res.json()
    const headlinesData: headlineType[] = data.data
    
  return (
    <div className="bg-red-700">
      <div className="container mx-auto flex">

      <div className="bg-red-900 px-3  py-1.5">সর্বশেষ</div>
      <MarqueeText direction='right' duration={10} className=" py-1.5">
      {headlinesData.map(item => <Link href={`/news/${item.id}`} key={item.id}><span>{item.title}</span><span className="mx-3.5">•</span></Link>)}
    </MarqueeText>
      </div>
    </div>
  )
}
