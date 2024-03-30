import { CATEGORIES } from "@/data/database";
import MainCategoryItems from "@/components/MainCategoryItems";
import Header from "@/components/Header";
//css files
import './mainPage.css'
import HeaderTop from "@/components/HeaderTop";

export default function Home() {

  return (
    <>
      <HeaderTop />
      <Header />
      <main className={'mainCatCon'} >
        <div style={{ marginTop: '100px', display: 'flex', justifyContent: 'flex-start', width: '100%' }}>
          <p>دسته بندی ها</p>
        </div>
        <div className={'mainCon'} >
          {
            CATEGORIES.map(category => (
              <MainCategoryItems key={category.id} category={category} />
            ))
          }
        </div>
      </main>
    </>

  )
}
