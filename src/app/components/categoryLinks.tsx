import Link from "next/link";

interface catType {
  slug: string;
  title: string;
  topicId: null | string;
  url: string;
  scrapable: boolean;
}
export default async function CategoryLinks() {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const catGory: catType[] = data.data;
  const filteredCat = catGory.filter((item) => item.scrapable);
  return (
    <>
      <li>
        {" "}
        <Link href={"/"}>হোম</Link>
      </li>
      {filteredCat.map((item) => (
        <li key={item.slug}>
          <Link href={`/catagory/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
      {/* <li>
        <Link href={"/"}>হোম</Link>
      </li> */}
    </>
  );
}
