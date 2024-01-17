import React from 'react'
import { CiStar, CiDeliveryTruck, CiSearch } from "react-icons/ci";
import { HiOutlineHandThumbUp } from "react-icons/hi2";
import { FaPhoneAlt } from "react-icons/fa";
import { service_img } from '../Assets/Images'

const Superiority = () => {
    return (
        <section className='pt-16 md:pt-24'>
            <div className="container">
                <div>
                    <h1 className='font-russo text-darkColor text-[28px] md:text-5xl font-normal leading-[38px] md:leading-[44px] -tracking-[0.96px]'>Почему выбирают нас</h1>
                    <p className='font-jura text-lightColor text-lg md:text-xl font-normal leading-7 md:leading-[30px] max-w-[511px] mt-4 md:mt-5'>Наш сервисный центр ориентирован на удовлетворение потребностей наших клиентов</p>
                </div>

                <div className='py-16 flex flex-col  md:flex-row md:items-center justify-between'>
                    <div className='space-y-10 md:space-y-12'>
                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><CiStar size={'24'} /></span>
                            </div>
                            <div className='font-jura'>
                                <p className='text-lg md:text-[32px] text-darkColor font-bold'>Качество</p>
                                <p className='text-base text-lightColor font-normal leading-6'>Наш сервисный центр обслужит ваш звонок в любое время</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><CiDeliveryTruck size={'24'} /></span>
                            </div>
                            <div className='font-jura'>
                                <p className='text-lg md:text-[32px] text-darkColor font-bold'>Быстрый выезд</p>
                                <p className='text-base text-lightColor font-normal leading-6'>Выезд мастеров в день звонка</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><CiSearch size={'24'} /></span>
                            </div>
                            <div className='font-jura'>
                                <p className='text-lg md:text-[32px] text-darkColor font-bold'>Диагностика</p>
                                <p className='text-base text-lightColor font-normal leading-6'>Мастера быстро найдут причину поломку котла</p>
                            </div>
                        </div>

                        <div className='flex items-center gap-4'>
                            <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><HiOutlineHandThumbUp size={'24'} /></span>
                            </div>
                            <div className='font-jura'>
                                <p className='text-lg md:text-[32px] text-darkColor font-bold'>Ремонт</p>
                                <p className='text-base text-lightColor font-normal leading-6'>Качественный ремонт по доступным ценам</p>
                            </div>
                        </div>

                    </div>

                    {/* <div className='md:hidden my-12'>
                        <button className=' bg-mainColor py-3 px-5 rounded-lg text-white flex items-center gap-2 mx-auto'><FaPhoneAlt /> <span className='font-medium text-base'>Вызвать мастера</span></button>
                    </div> */}
                    
                    <div>
                        <img src={service_img} alt='servise_img' className='mx-auto mt-10' />
                    </div>

                </div>

                <div className='block fixed bottom-5 left-1/2 -translate-x-[50%]'>
                    <button className='bg-mainColor w-full py-3 px-5 rounded-lg text-white flex items-center gap-2 mx-auto'><FaPhoneAlt /> <span className='font-medium text-xs sm:text-base'>Вызвать мастера</span></button>
                </div>
            </div>
        </section>
    )
}

export default Superiority