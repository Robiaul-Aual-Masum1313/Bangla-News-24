import { MainNewsType } from "@/types/allTypes";
import Image from "next/image";
import Link from "next/link";

export interface NewsCardProps {
  article: MainNewsType;
}

const NewsCard = ({ article }: NewsCardProps) => {
  return (
    <Link href={`/news/${article.id}`}>
      <div className="card bg-base-100  shadow-sm">
        <figure>
          <Image
            width={550}
            height={550}
            src={article.imageUrl}
            alt={article.imageAlt}
          />
        </figure>

        <div className="card-body">
          <p className="text-red-500">{article.category}</p>
          <h2 className="card-title">{article.title}</h2>
          <p>{article.description}</p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
