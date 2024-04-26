import { CATEGORIES } from "@/data/database";
import MainCategoryItems from "@/components/MainCategoryItems";
import Header from "@/components/Header";
import { LATEST_RESTAURANTS } from "@/data/database";
//css files
import './mainPage.css'
import HeaderTop from "@/components/HeaderTop";
import LeftArrowBigSvg from "@/components/SVG/LeftArrowBigSvg";
import RestaurantCard from "@/components/RestaurantCard";


export default function Home() {

  return (
    <>
      <HeaderTop />
      <Header />
      <div className="mainPageCon">
        <main className={'mainCatCon'} >
          <div className={'mainCat'} >
            <p>دسته بندی ها</p>
          </div>
          <div className={'mainCon'} >
            {
              CATEGORIES.map(category => (
                <MainCategoryItems key={category.id} category={category} />
              ))
            }
          </div>
          <div className="latest_restaurants_title">
            <h2>تازه ها در اسنپ فود</h2>
            <div>
              <span>مشاهده همه</span>
              <span><LeftArrowBigSvg />  </span>
            </div>
          </div>
          <div className="latest_restaurants_con">
            <div className="latest_restaurants">
              {
                LATEST_RESTAURANTS.map(restaurant => (
                  <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                ))
              }
            </div>
          </div>

        </main>
      </div>

    </>

  )
}
