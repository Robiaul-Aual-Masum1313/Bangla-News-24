import { AcuDataArrayType, MainNewsType } from "@/types/allTypes";
import MainNews from "./components/Home/MainNews";
import NewsCard from "./components/Home/NewsCard";
import Sidebar from "./components/Home/sidebar";


export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections')
  const data = await res.json()
  const acuDataArray : AcuDataArrayType[] = data.data 
  const mainNews : MainNewsType[] = acuDataArray[0].articles
  const othersNews = acuDataArray.slice(1)
  const filteredOtherNews = othersNews.filter(item => {
    return item.curationId !== "urn:bbc:tipo:list:0ad2eb5d-7a0e-4c74-b8b4-de3de9bc5137" && item.curationId !== "urn:bbc:tipo:list:0de6d7f8-ccae-45b6-b843-7329b6e521b7" && item.curationId !== "urn:bbc:tipo:list:61a6be9c-5bb1-4ab5-ad6e-9855ff26a267"
  })
  // console.log('filtered data',filteredOtherNews);
  

  
  return (
    <>
      
      <div className="bg-[#FAFAFA] py-10">
        <div className="container mx-auto grid grid-cols-3 gap-7">
          {/* main Section */}
          <div className="col-span-2">
            <MainNews mainNews = {mainNews}/>
            {
              filteredOtherNews.map(singleSectionNews => {
                return (
                  <div key={singleSectionNews.curationId} className="pt-9">
                    <h2 className="text-neutral-900 font-bold text-lg">{singleSectionNews.title}</h2>
                    <p className="border-b-2 border-red-700 pt-3 mb-3"></p>
                    <div className="grid grid-cols-3 gap-4">
                      {
                        singleSectionNews.articles.slice(0,4).map(article => {
                          return(
                            <NewsCard key={article.id}  article = {article}/>
                          )
                        })
                      }
                    </div>
                  </div>
                )
              })
            }

          </div>
          {/* sideVar */}
          <div className="col-span-1">
            <Sidebar />
          </div>
        </div>
      </div>
    </>
  );
}
