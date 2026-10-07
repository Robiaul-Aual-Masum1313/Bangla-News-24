
import Image from "next/image";
import Link from "next/link";
import CategoryLinks from '@/app/components/categoryLinks'
import SInOutBtn from "./SInOutBtn";

export default function NavBar() {
  const date = new Date().toLocaleDateString('bn-BD',{dateStyle: 'full'})
  return (
    <div className="container mx-auto py-4">
      <div className="grid grid-cols-3 items-center space-y-4">
        <div></div>
        <div className="flex justify-center gap-2">
          <Link href={"/"}>
            <Image
              src={"/logo.webp"}
              width={50}
              height={50}
              alt={"Bangla news 24"}
            />
          </Link>
          <div>
            <Link href={'/'}><h2 className="text-red-700 text-2xl font-bold">Bangla News 24</h2></Link>
            <p className="text-neutral-500 text-xs">{date}</p>
          </div>
        </div>
        <div className="text-right">
          <SInOutBtn />
        </div>
      </div>
      <div className="">
        <ul className="flex gap-2.5 justify-center">
          <CategoryLinks />
          {/* <li>
            <Link href={"/"}>হোম</Link>
          </li>
          <li>
            <Link href="">রাজনীতি</Link>
          </li>
          <li>
            <Link href="">বিশ্ব</Link>
          </li>
          <li>
            <Link href="">অর্থনীতি</Link>
          </li>
          <li>
            <Link href="">স্বাস্থ্য</Link>
          </li>
          <li>
            <Link href="">খেলা</Link>
          </li>
          <li>
            <Link href="">প্রযুক্তি</Link>
          </li>
          <li>
            <Link href="">দেখুন</Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
