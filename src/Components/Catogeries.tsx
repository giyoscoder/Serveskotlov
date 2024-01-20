import React, { useRef } from 'react'
import { contour_floor_img, contour_gas_img, contour_img, contour_prevention_img, contour_wall_img, first_slider_one, first_slider_two, first_slider_three, third_slider_one, third_slider_two, fourth_slider_one } from '../Assets/Images';
import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
// import { Navigation } from 'swiper/modules';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";


const Catogeries = () => {
    const { t } = useTranslation('catogeries')
    const sliderOne: any = useRef();
    const sliderTwo: any = useRef();
    const sliderThree: any = useRef();
    const sliderFour: any = useRef();
    const sliderFive: any = useRef();

    return (
        <section className='my-16 md:my-24'>
            <div className="container">
                <h1 className='font-russo text-[28px] md:text-5xl font-normal leading-[38px] md:leading-[44px] -tracking-[0.96px]'>{t('title')}</h1>
                <p className='font-jura text-lightColor text-lg md:text-xl font-normal leading-[28px] md:leading-[30px] max-w-[768px] mt-4 md:mt-5'>{t('about')}</p>

                <div className='grid grid-cols-1 md:grid-cols-6 gap-6 md:gap-8 mt-12 md:mt-16'>

                    <div className='md:col-span-3 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <Swiper loop={true} onSwiper={(swiper: any) => {
                            sliderOne.current = swiper;
                        }} className="mySwiper relative">
                            <SwiperSlide><img src={first_slider_one} alt="contour_img" className='md:rounded-lg mx-auto max-h-[240px] w-full' /></SwiperSlide>

                            <SwiperSlide><img src={first_slider_two} alt="contour_img" className='md:rounded-lg mx-auto  max-h-[240px] w-full' /></SwiperSlide>

                            <SwiperSlide><img src={first_slider_three} alt="contour_img" className='md:rounded-lg mx-auto  max-h-[240px] w-full' /></SwiperSlide>

                            <div onClick={() => sliderOne.current.slidePrev()} className='absolute top-1/2 left-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowBack size={20} /></div>
                            <div onClick={() => sliderOne.current.slideNext()} className='absolute top-1/2 right-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowForward size={20} /></div>
                        </Swiper>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>{t('contour')}</p>
                    </div>

                    <div className='md:col-span-3 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <Swiper loop={true} onSwiper={(swiper: any) => {
                            sliderTwo.current = swiper;
                        }} className="mySwiper relative">
                            <SwiperSlide><img src={first_slider_one} alt="contour_img" className='md:rounded-lg mx-auto max-h-[240px] w-full' /></SwiperSlide>
                            <SwiperSlide><img src={first_slider_two} alt="contour_img" className='md:rounded-lg mx-auto  max-h-[240px] w-full' /></SwiperSlide>
                            <div onClick={() => sliderTwo.current.slidePrev()} className='absolute top-1/2 left-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowBack size={20} /></div>
                            <div onClick={() => sliderTwo.current.slideNext()} className='absolute top-1/2 right-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowForward size={20} /></div>
                        </Swiper>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>{t('contour_wall')}</p>
                    </div>

                    <div className='md:col-span-2 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <Swiper loop={true} onSwiper={(swiper: any) => {
                            sliderThree.current = swiper;
                        }} className="mySwiper relative">
                            <SwiperSlide><img src={third_slider_one} alt="contour_img" className='md:rounded-lg mx-auto max-h-[240px] w-full' /></SwiperSlide>
                            <SwiperSlide><img src={third_slider_two} alt="contour_img" className='md:rounded-lg mx-auto  max-h-[240px] w-full' /></SwiperSlide>
                            <div onClick={() => sliderThree.current.slidePrev()} className='absolute top-1/2 left-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowBack size={20} /></div>
                            <div onClick={() => sliderThree.current.slideNext()} className='absolute top-1/2 right-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowForward size={20} /></div>
                        </Swiper>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>{t('contour_prevention')}</p>
                    </div>

                    <div className='md:col-span-2 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <Swiper loop={true} onSwiper={(swiper: any) => {
                            sliderFour.current = swiper;
                        }} className="mySwiper relative">
                            <SwiperSlide><img src={fourth_slider_one} alt="contour_img" className='md:rounded-lg mx-auto max-h-[240px] w-full' /></SwiperSlide>
                            <SwiperSlide><img src={fourth_slider_one} alt="contour_img" className='md:rounded-lg mx-auto  max-h-[240px] w-full' /></SwiperSlide>
                            <div onClick={() => sliderFour.current.slidePrev()} className='absolute top-1/2 left-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowBack size={20} /></div>
                            <div onClick={() => sliderFour.current.slideNext()} className='absolute top-1/2 right-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowForward size={20} /></div>
                        </Swiper>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>{t('contour_floor')}</p>
                    </div>

                    <div className='md:col-span-2 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                    <Swiper loop={true} onSwiper={(swiper: any) => {
                            sliderFive.current = swiper;
                        }} className="mySwiper relative">
                            <SwiperSlide><img src={fourth_slider_one} alt="contour_img" className='md:rounded-lg mx-auto max-h-[240px] w-full' /></SwiperSlide>
                            <SwiperSlide><img src={third_slider_two} alt="contour_img" className='md:rounded-lg mx-auto  max-h-[240px] w-full' /></SwiperSlide>
                            <div onClick={() => sliderFive.current.slidePrev()} className='absolute top-1/2 left-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowBack size={20} /></div>
                            <div onClick={() => sliderFive.current.slideNext()} className='absolute top-1/2 right-3  z-10 -translate-y-1/2 text-mainColor p-2 bg-white/50 rounded-full cursor-pointer'><IoIosArrowForward size={20} /></div>
                        </Swiper>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>{t('contour_gas')}</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Catogeries