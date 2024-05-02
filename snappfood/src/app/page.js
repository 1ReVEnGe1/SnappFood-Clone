import HeaderTop from "@/components/HeaderTop";
import { CATEGORIES } from "@/data/database";
import MainCategoryItems from "@/components/MainCategoryItems";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import { LATEST_RESTAURANTS } from "@/data/database";
import LeftArrowBigSvg from "@/components/SVG/LeftArrowBigSvg";
import MyketSvg from "@/components/SVG/myketSvg";

//Images
import mobilePic from '../assets/mainPagePics/img_app_mockup@2x.png'
import iapps from '../assets/mainPagePics/iapps.svg'

//css files
import './mainPage.css'
import BazzarSvg from "@/components/SVG/BazzarSvg";
import Image from "next/image";
import SibappSvg from "@/components/SVG/SibappSvg";



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
          {/* -------------------------- */}
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>برترین ها</h2>
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>جایزه خرید</h2>
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>مزه های خاص</h2>
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>دارای تخفیف</h2>
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>ارسال رایگان</h2>
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>یک تجربه جدید</h2>
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>دارای کوپن</h2>
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>دارای کوپن سفارش اول</h2>
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
          {/* -------------------------- */}
          <div className="latest_restaurants_title">
            <h2>فقط در اسنپ فود</h2>
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
          {/* -------------------------- */}
          <section style={{width:'100%',marginTop:'150px',padding:'4.5rem'}} >
            <div style={{backgroundColor:'rgb(235, 237, 240)',padding:'4rem',position:'relative',display:'flex',borderBottomRightRadius:'7rem'}}>
              <div>
                <h5>اپلیکیشن اسنپ‌‌فود</h5>
                <p>با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.</p>
                <div>
                  <p>برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید</p>
                  <form action="">
                    <div style={{}}>
                      <input type="text" placeholder="*********۰۹" />
                    </div>
                    <button>دریافت لینک</button>
                  </form>
                </div>
                <div style={{display:'flex' , gap:'20px'}}>
                  <MyketSvg />
                  <BazzarSvg />
                  <SibappSvg />
                  <Image src={iapps} alt="آی اپس" />
                </div>
              </div>
              <Image style={{width:'424px',height:'400px' ,objectFit:'contain',transform:'translateY(-100px)'}} src={mobilePic} alt="اسنپ فود" />
            </div>
          </section>

        </main>
      </div>

    </>

  )
}
