import { MostReadDataType } from "@/types/allTypes";
import Link from "next/link";


export default async function Sidebar() {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data =await res.json()
    const acuData: MostReadDataType[] = data.data
    
  return (
    <div className="card bg-base-100  shadow-sm p-4 space-y-4">
        <h2 className="text-neutral-900 font-bold text-lg">সর্বাধিক পঠিত</h2>
        
            {
                acuData.map((item, index) => <div key={item.id} className="flex gap-2 text-neutral-900 font-semibold" ><div className="text-red-700 font-bold text-xl">{index+1}</div><Link href={`/news/${item.id}`}>{item.title}</Link></div>)
            }
            
    </div>
  )
}
