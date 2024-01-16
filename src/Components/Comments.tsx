import React, { useRef, useState } from 'react';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { avatar, person_one_img, person_two_img, person_three_img, person_four_img, person_five_img } from '../Assets/Images'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Comments = () => {
    const swiperRef: any = useRef();
    return (
        <section className='my-24 box-border'>
            <div className="container">
                <div className='grid grid-cols-2 items-center gap-16'>
                    <div className='relative'>
                        <Swiper
                            modules={[]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={(swiper: any) => {
                                swiperRef.current = swiper;
                            }}
                            loop={true}
                        >
                            <SwiperSlide>
                                <div className='space-y-12'>
                                    <div className='flex items-center text-[#FEC84B]'>
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                    </div>
                                    <p className='text-xl text-darkColor font-jura font-normal leading-6 -tracking-[0.4px]'>Я хотелa бы поделиться своим восторженным отзывом о компании, которая провела ремонт моего котла и предоставила услуги сантехники. Эта компания просто потрясающая!</p>
                                    <div className='flex items-center gap-4'>
                                        <img src={avatar} alt="" />
                                        <span className='text-xl text-darkColor font-bold font-jura'>Гузал Шукурова</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='space-y-12'>
                                    <div className='flex items-center text-[#FEC84B]'>
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                    </div>
                                    <p className='text-xl text-darkColor font-jura font-normal leading-6 -tracking-[0.4px]'>Я хотелa бы поделиться своим восторженным отзывом о компании, которая провела ремонт моего котла и предоставила услуги сантехники. Эта компания просто потрясающая!</p>
                                    <div className='flex items-center gap-4'>
                                        <img src={avatar} alt="" />
                                        <span className='text-xl text-darkColor font-bold font-jura'>Гузал Шукурова</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='space-y-12'>
                                    <div className='flex items-center text-[#FEC84B]'>
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                    </div>
                                    <p className='text-xl text-darkColor font-jura font-normal leading-6 -tracking-[0.4px]'>Я хотелa бы поделиться своим восторженным отзывом о компании, которая провела ремонт моего котла и предоставила услуги сантехники. Эта компания просто потрясающая!</p>
                                    <div className='flex items-center gap-4'>
                                        <img src={avatar} alt="" />
                                        <span className='text-xl text-darkColor font-bold font-jura'>Гузал Шукурова</span>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className='space-y-12'>
                                    <div className='flex items-center text-[#FEC84B]'>
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                        <MdOutlineStarPurple500 size={20} />
                                    </div>
                                    <p className='text-xl text-darkColor font-jura font-normal leading-6 -tracking-[0.4px]'>Я хотелa бы поделиться своим восторженным отзывом о компании, которая провела ремонт моего котла и предоставила услуги сантехники. Эта компания просто потрясающая!</p>
                                    <div className='flex items-center gap-4'>
                                        <img src={avatar} alt="" />
                                        <span className='text-xl text-darkColor font-bold font-jura'>Гузал Шукурова</span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className='absolute bottom-0 right-0 z-50 flex items-center gap-8'>
                            <div onClick={() => swiperRef.current.slidePrev()} className='border bg-white  border-[#EAECF0] rounded-full text-[#667085] p-4 cursor-pointer hover:bg-[#eee] transition-all duration-500'>
                                <FaArrowLeft size={24} />
                            </div>
                            <div onClick={() => swiperRef.current.slideNext()} className='border  bg-white border-[#EAECF0] rounded-full text-[#667085] p-4 cursor-pointer hover:bg-[#eee] transition-all duration-500'>
                                <FaArrowRight size={24} />
                            </div>
                        </div>
                    </div>
                    <div className='grid grid-cols-6 h-[496px] gap-4'>
                        <div className=' col-start-2 col-end-4 row-start-2 row-end-3'>
                            <img src={person_one_img} alt="person_one_img"  className='w-full h-full'/>
                        </div>
                        <div className=' col-start-4 col-end-6 row-start-1 row-end-3'>
                            <img src={person_two_img} alt="person_two_img"  className='w-full h-full'/>
                        </div>
                        <div className=' col-start-1 col-end-3 row-start-3 row-end-4'>
                            <img src={person_three_img} alt="person_three_img"  className='w-full h-full'/>
                        </div>
                        <div className=' col-start-3 col-end-5 row-start-3 row-end-5'>
                            <img src={person_four_img} alt="person_three_img"  className='w-full h-full'/>
                        </div>
                        <div className='col-start-5 col-end-7 row-start-3 row-end-4'>
                            <img src={person_five_img} alt="person_five_img"  className='w-full h-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Comments