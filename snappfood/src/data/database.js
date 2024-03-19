import asianFoods from '../assets/website_image_asian_1.jpg'
import burgers from '../assets/website_image_burger_1.jpg'
import fastfoods from '../assets/website_image_fastfood_1.jpg'
import guilaniFoods from '../assets/website_image_gilani_1.jpg'
import iraniFoods from '../assets/website_image_irani_1.jpg'
import italyFoods from '../assets/website_image_italy_1.jpg'
import kebabs from '../assets/website_image_kebab_1.jpg'
import pizzas from '../assets/website_image_pizza_1.jpg'
import salads from '../assets/website_image_salad_1.jpg'
import sandwiches from '../assets/website_image_sandwich_1.jpg'
import seafoods from '../assets/website_image_seafood_1.jpg'
import nuggets from '../assets/website_image_sokhari_1.jpg'
//----------------------------------
import restaurantImg from '../assets/headerCategory/desktop_1_603508bf202d8_img_st_food.png'
import supermarketImg from '../assets/headerCategory/desktop_4_603508a14ab73_img_st_supermarket.png'
import cafeImg from '../assets/headerCategory/desktop_2_603508b330711_img_st_cafe.png'
import sweetImg from '../assets/headerCategory/desktop_3_603508a95b9be_img_st_sweet.png'
import bakeryImg from '../assets/headerCategory/desktop_5_60350898c61b5_img_st_bakery.png'
import fruitImg from '../assets/headerCategory/desktop_6_6035088cbcde4_img_st_fruit.png'
import meatImg from '../assets/headerCategory/desktop_11_603507afc9a32_img_st_meat.png'
import nutImg from '../assets/headerCategory/desktop_7_60350883d6e43_img_st_nut.png'
import icecreamImg from '../assets/headerCategory/desktop_8_6035087b463a3_img_st_icecream.png'
import otherImg from '../assets/headerCategory/desktop_9_603b811b1d540_img_st_other2.png'


export const IRANIP = 'ایرانی'
export const IRANI = 'irani'
export const FASTFOODP = 'فست فود'
export const FASTFOOD = 'fastfood'
export const KEBABP = 'کباب'
export const KEBAB = 'kebab'
export const PIZZAP = 'پیتزا'
export const PIZZA = 'pizza'
export const BURGURP = 'برگر'
export const BURGUR = 'burgur'
export const SANDWICHP = 'ساندویچ'
export const SANDWICH = 'sandwich'
export const SUKHARIP = 'سوخاری'
export const SUKHARI = 'sukhari'
export const PASTAP = 'پاستا'
export const PASTA = 'pasta'
export const SALADP = 'سالاد'
export const SALAD = 'salad'
export const SEAFOODP = 'دریایی'
export const SEAFOOD = 'seafood'
export const INTERNATIONALP = 'بین الملل'
export const INTERNATIONAL = 'asian'
export const GILANIP = 'گیلانی'
export const GILANI = 'gilani'

export const CATEGORIES =[
    {
        id:1,
        titleP: IRANIP,
        title: IRANI,
        image:iraniFoods
    },
    {
        id:2,
        titleP: FASTFOODP,
        title: FASTFOOD,
        image:fastfoods
    },
    {
        id:3,
        titleP: KEBABP,
        title: KEBAB,
        image:kebabs
    },
    {
        id:4,
        titleP: PIZZAP,
        title: PIZZA,
        image:pizzas
    },
    {
        id:5,
        titleP: BURGURP,
        title: BURGUR,
        image:burgers
    },
    {
        id:6,
        titleP: SANDWICHP,
        title: SANDWICH,
        image:sandwiches
    },
    {
        id:7,
        titleP: SUKHARIP,
        title: SUKHARI,
        image:nuggets
    },
    {
        id:8,
        titleP: PASTAP,
        title: PASTA,
        image:italyFoods
    },
    {
        id:9,
        titleP: SALADP,
        title: SALAD,
        image:salads
    },
    {
        id:10,
        titleP: SEAFOODP,
        title: SEAFOOD,
        image:seafoods
    },
    {
        id:11,
        titleP: INTERNATIONALP,
        title: INTERNATIONAL,
        image:asianFoods
    },
    {
        id:12,
        titleP: GILANIP,
        title: GILANI,
        image:guilaniFoods
    },
]
 
export const HEADERCATEGORY = [
    {
        id:1,
        title:"رستوران",
        image:restaurantImg
    },
    {
        id:2,
        title:"سوپرمارکت",
        image:supermarketImg
    },
    {
        id:3,
        title:"کافه",
        image:cafeImg
    },
    {
        id:4,
        title:"شیرینی",
        image:sweetImg
    },
    {
        id:5,
        title:"نانوایی",
        image:bakeryImg
    },
    {
        id:6,
        title:"میوه",
        image:restaurantImg
    },
    {
        id:7,
        title:"پروتئین",
        image:fruitImg
    },
    {
        id:8,
        title:"آجیل",
        image:nutImg
    },
    {
        id:9,
        title:"آبمیوه بستنی",
        image:icecreamImg
    },
    {
        id:10,
        title:"سایر",
        image:otherImg
    },
]

export const RESTAURANTS = [
    {
        id:1,
        title:'رستوران شایسته',
        courier : 'پیک فروشنده',
        courierPrice :12000,
        score:4.4,
        totalVote:8955,
        category:IRANI,
        orders:'ایرانی، چلوکباب، کباب',
        discount:'15%'
    },
    {
        id:2,
        title:'کباب ساطوری بناب آذربایجان',
        courier : 'ارسال اکسپرس',
        courierPrice :11000,
        score:3.8,
        totalVote:296,
        category:IRANI,
        orders:'ایرانی، کباب',
        discount:''
    },
    {
        id:3,
        title:'تهیه غذای الو غذای من',
        courier : 'ارسال اکسپرس',
        courierPrice :14700,
        score:4.4,
        totalVote:375,
        category:IRANI,
        orders:'ایرانی، سنتی',
        discount:''
    },
    {
        id:4,
        title:'رستوران کباب بناب',
        courier : 'پیک فروشنده',
        courierPrice :'رایگان',
        score:4.4,
        totalVote:6507,
        category:IRANI,
        orders:'ایرانی، کباب، پیش غذا',
        discount:''
    },
    {
        id:5,
        title:'غذای ادیب',
        courierPrice :'رایگان',
        courier : 'پیک فروشنده',
        score:3.8,
        totalVote:1604,
        category:IRANI,
        orders:'ایرانی، چلوکباب، چلوپلو ایرانی',
        discount:'5%'
    },
    {
        id:6,
        title:'رستوران ارغوان',
        courierPrice :'رایگان',
        courier : 'پیک فروشنده',
        score:3.9,
        totalVote:522,
        category:IRANI,
        orders:'ایرانی، چلوکباب، پیتزا ایتالیایی',
        discount:'5%'
    },
    
]