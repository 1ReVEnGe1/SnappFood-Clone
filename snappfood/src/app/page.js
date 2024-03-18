import { CATEGORIES } from "@/data/database";
import Image from "next/image";
import './mainPage.css'
import Link from "next/link";

export default function Home() {

  return (
    <main className={'mainCatCon'} >
      <p>دسته بندی ها</p>
      <div className={'mainCon'} >
        {
          CATEGORIES.map( category => (
            <Link href={`/`} className={'categoryCard'} >
              <Image src={category.image} alt={category.title} />
              <div >
                <p>{category.title}</p>
              </div>
            </Link>
          ) )
        }
      </div>
    </main>
  )
}
