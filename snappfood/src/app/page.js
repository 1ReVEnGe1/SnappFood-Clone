import HeaderTop from "@/components/HeaderTop";
import { CATEGORIES, logoSnappFood } from "@/data/database";
import MainCategoryItems from "@/components/MainCategoryItems";
import Header from "@/components/Header";
import RestaurantCard from "@/components/RestaurantCard";
import { LATEST_RESTAURANTS } from "@/data/database";
import LeftArrowBigSvg from "@/components/SVG/LeftArrowBigSvg";
import MyketSvg from "@/components/SVG/MyketSvg";
import BazzarSvg from "@/components/SVG/BazzarSvg";
import iapps from '../assets/mainPagePics/iapps.svg'

//Images
import mobilePic from '../assets/mainPagePics/img_app_mockup@2x.png'
import business from '../assets/mainPagePics/vendor_pic.png'


//css files
import './mainPage.css'

import Image from "next/image";
import SibappSvg from "@/components/SVG/SibappSvg";
import StoreSvg from "@/components/SVG/StoreSvg";
import Link from "next/link";
import FooterCities from "@/components/FooterCities";
import Footer from "@/components/Footer";
import ConsultFixed from "@/components/ConsultFixed";



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
          <section style={{ width: '100%', marginTop: '150px', padding: '4.5rem' }} >
            <div style={{ backgroundColor: 'rgb(235, 237, 240)', padding: '4rem', position: 'relative', display: 'flex', borderBottomRightRadius: '7rem' }}>
              <div style={{ width: '60%' }}>
                <h5 style={{ fontSize: '30px', marginBottom: '30px' }}>اپلیکیشن اسنپ‌‌فود</h5>
                <p>با اپلیکیشن اسنپ‌فود به راحتی و با چند کلیک ساده می‌توانید رستوران‌ها، کافه‌ها، شیرینی‌فروشی‌ها و سوپرمارکت‌های نزدیک خودتان را جست‌و‌جو کرده و از تجربه سفارش آسان از اسنپ‌فود لذت ببرید.</p>
                <div style={{ marginTop: '30px' }}>
                  <p style={{ fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '14px' }}>برای دریافت لینک دانلود اپلیکیشن، شماره موبایلتان رو وارد کنید</p>
                  <form style={{ display: 'flex', backgroundColor: '#fff', width: '280px', justifyContent: 'space-between', marginBottom: '30px', borderRadius: '5px', paddingLeft: '7px', paddingTop: '2px', paddingBottom: '2px', alignItems: 'center', boxShadow: 'rgba(58, 61, 66, 0.06) 0px 1px 0px, rgba(0, 0, 0, 0.2) 0px 4px 16px -8px' }} >
                    <div style={{ borderRadius: '8px' }}>
                      <input style={{ border: 'none', outline: 'none', padding: '0.7rem 1rem 0.7rem 1rem', boxSizing: 'border-box', borderRadius: '8px', width: '160px' }} type="text" placeholder="*********۰۹" />
                    </div>
                    <button style={{ border: '0.09375rem solid rgb(255, 0, 166)', backgroundColor: 'rgb(255, 0, 166)', color: 'white', padding: '2px 10px', width: '100px', borderRadius: '0.375rem', fontWeight: 'bold' }}>دریافت لینک</button>
                  </form>
                </div>
                <div style={{ display: 'flex', gap: '20px' }}>
                  <MyketSvg />
                  <BazzarSvg />
                  <SibappSvg />
                  <Image src={iapps} alt="آی اپس" />
                </div>
              </div>
              <Image style={{ width: '424px', height: '400px', objectFit: 'contain', transform: 'translateY(-100px)' }} src={mobilePic} alt="اسنپ فود" />
            </div>
          </section>
          {/* -------------------------- */}
          <section style={{ width: '100%', marginTop: '50px', padding: '0rem 4.5rem' }} >
            <div style={{ backgroundColor: 'rgb(249, 250, 251)', padding: '2rem', position: 'relative', display: 'flex', borderRadius: '2rem', justifyContent: 'space-between', alignItems: 'center', height: '300px' }}>
              <div style={{ width: '60%' }}>
                <h5 style={{ fontSize: '30px', marginBottom: '30px' }}>صاحب کسب و کار هستید ؟</h5>
                <p style={{ marginBottom: '2.5rem' }}>با اسنپ فود کسب و کارتان را آنلاین کنید و فروشتان را افزایش دهید.</p>
                <Link href="#" style={{ textDecoration: 'none' }}>
                  <button style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', backgroundColor: 'rgb(255, 0, 166)', height: '3rem', border: '0.09375rem solid rgb(255, 0, 166)', fontSize: '1.125rem', fontWeight: '700', color: '#fff', borderRadius: '0.375rem', boxSizing: 'border-box', width: 'auto', minWidth: '6.6875rem', padding: '0 5px' }}  >
                    <StoreSvg />
                    ثبت نام فروشندگان
                  </button>
                </Link>
              </div>
              <Image style={{ width: '300px', height: '280px', objectFit: 'contain', transform: 'translateY(-60px)' }} src={business} alt="اسنپ فود" />
            </div>
          </section>
        </main>

        {/* -------------------------- */}
        <div style={{ marginTop: '50px', padding: '0 2rem', width: '100%', borderTop: '0.0625rem solid rgb(235, 237, 240)' }}>
          <h3 style={{ marginTop: '20px', fontSize: '14px' }}>اسنپ فود  در شهر های ایران</h3>
          <div style={{ marginTop: '25px' }}>
            <FooterCities />
          </div>
        </div>
        {/* -------------------------- */}
        <Footer />
        
      </div>
      <ConsultFixed />

    </>

  )
}
