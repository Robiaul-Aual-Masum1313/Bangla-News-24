import { MainNewsType } from "@/types/allTypes";
import Image from "next/image";
import Link from "next/link";

export interface MainNewsProps {
  mainNews: MainNewsType[];
}

const MainNews = ({ mainNews }: MainNewsProps) => {
  const [firstNews, ...othersNews] = mainNews;
  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <Link href={`/news/${firstNews.id}`}>
            <div className="card bg-base-100  shadow-sm">
              <figure>
                <Image
                  width={550}
                  height={550}
                  src={firstNews.imageUrl}
                  alt={firstNews.imageAlt}
                />
              </figure>

              <div className="card-body">
                <p className="text-red-500">{firstNews.category}</p>
                <h2 className="card-title">{firstNews.title}</h2>
                <p>{firstNews.description}</p>
              </div>
            </div>
          </Link>
        </div>
        <div>
          <div className="card bg-base-100  shadow-sm">
            {othersNews.slice(0, 4).map((otherNews) => (
              <Link key={otherNews.id} href={`/news/${otherNews.id}`}>
              <div
                
                className="card-body border-b border-[#eee]"
              >
                <p className="text-red-500">{otherNews.category}</p>
                <h2 className="card-title">{otherNews.title}</h2>
              </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNews;
