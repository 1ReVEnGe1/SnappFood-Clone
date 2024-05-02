'use client'
import Image from 'next/image'
// import 'swiper/css'
// import 'swiper/css/swiper.css';
import asianImg from '../assets/website_image_asian_1.jpg'

import { useRef, useEffect } from 'react'
import Swiper from 'swiper'
import 'swiper/css'
import { LATEST_RESTAURANTS } from '@/data/database'
import RestaurantCard from '@/components/RestaurantCard'
const SwiperComponent = () => {
    const swiperRef = useRef(null)

    useEffect(() => {
        const swiper = new Swiper(swiperRef.current, {
            // Swiper options here
            direction: 'horizontal',
            slidesPerView: '3',
            freeMode: true,
        });
        return () => {
            swiper.destroy(); // Cleanup Swiper instance
        };
    }, []);


    return (
        <div className='swiper-container' ref={swiperRef}>
            <div className='swiper-wrapper'>
                <div className='swiper-slide' >
                    <Image src={asianImg} alt='Slide 1' />
                </div>
                <div className='swiper-slide'>
                    <Image src={asianImg} alt='Slide 2' />
                </div>
                <div className='swiper-slide'>
                    <Image src={asianImg} alt='Slide 3' />
                </div>
                
            </div>
        </div>
    )
}

export default SwiperComponent