import { SingleNewsType } from "@/types/allTypes";
import Image from "next/image";
import { notFound } from "next/navigation";

export interface PageProps {
  params: {
    newsId: string;
  };
}

const SingleNewsPage = async ({ params }: PageProps) => {
  const { newsId } = await params;
  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );
  const data = await res.json();
  const acuData: SingleNewsType = data.data;
  if(!acuData){
    notFound()
  }

  return (
    <div>
      <div className="w-4xl mx-auto space-y-7 py-6">
        <h2 className="text-neutral-900 font-bold text-2xl">{acuData.title}</h2>
        <div className="text-neutral-500 text-sm flex gap-7 border-y border-neutral-200 py-3">
          <h5>{acuData.byline[0]?.name}</h5>
          {/* <p>{acuData.firstPublished}</p> */}
          <p>
            {new Intl.DateTimeFormat("bn-BD", {
              day: "numeric",
              month: "long",
              year: "numeric",
              hour: "numeric",
              minute: "2-digit",
            }).format(new Date(acuData.firstPublished))}
          </p>
          <p>{acuData.wordCount} শব্দ</p>
        </div>
        {acuData.body.map((item, index) => {
          if (item.type === "image") {
            return (
              <div key={index}>
                <Image
                  className="rounded-lg"
                  width={900}
                  height={900}
                  src={item.url}
                  alt={item.altText}
                />
                <p>
                  {item.caption} ({item.copyrightHolder})
                </p>
              </div>
            );
          }
          if (item.type === "text") {
            return (
              <div key={index}>
                <p>{item.text}</p>
              </div>
            );
          }
          if (item.type === "subheading") {
            return (
              <div key={index}>
                <h3 className="ext-neutral-900 font-bold text-lg">
                  {item.text}
                </h3>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default SingleNewsPage;
