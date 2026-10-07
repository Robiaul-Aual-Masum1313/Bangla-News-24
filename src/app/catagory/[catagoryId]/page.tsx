// import { MainNewsType } from "@/types/allTypes";

import NewsCard from "@/app/components/Home/NewsCard";
import { MainNewsType } from "@/types/allTypes";
import { notFound } from "next/navigation";

export default async function CatagoryPage({ params }:{params: {catagoryId:string}}) {
  const { catagoryId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/category/${catagoryId}`,
  );
  const data = await res.json();
  if(!data.data){
    notFound()
  }

  return (
    <div className="bg-[#FAFAFA] py-10">
      <div className="pt-9 container mx-auto">
        <h2 className="text-neutral-900 font-bold text-lg">{data.title}</h2>
        <p className="border-b-2 border-red-700 pt-3 mb-3"></p>
        <div className="grid grid-cols-3 gap-4">
          {data.data.map((article : MainNewsType) => {
            return <NewsCard key={article.id} article={article} />;
          })}
        </div>
      </div>
    </div>
  );
}
