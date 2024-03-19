import { CATEGORIES } from "@/data/database";
import './mainPage.css'
import MainCategoryItems from "@/components/MainCategoryItems";


export default function Home() {

  return (
    <main className={'mainCatCon'} >
      <div style={{marginTop:'100px',display:'flex',justifyContent:'flex-start',width:'100%'}}>
        <p>دسته بندی ها</p>
      </div>
      <div className={'mainCon'} >
        {
          CATEGORIES.map( category => (
            <MainCategoryItems key={category.id} category={category} />
          ))
        }
      </div>
    </main>
  )
}
