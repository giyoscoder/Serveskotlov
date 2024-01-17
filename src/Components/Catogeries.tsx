import React from 'react'
import { contour_floor_img, contour_gas_img, contour_img, contour_prevention_img, contour_wall_img } from '../Assets/Images';

const Catogeries = () => {
    return (
        <section className='my-16 md:my-24'>
            <div className="container">
                <h1 className='font-russo text-[28px] md:text-5xl font-normal leading-[38px] md:leading-[44px] -tracking-[0.96px]'>Надежный сервис</h1>
                <p className='font-jura text-lightColor text-lg md:text-xl font-normal leading-[28px] md:leading-[30px] max-w-[768px] mt-4 md:mt-5'>Мы предлагаем профессиональный ремонт котлов всех типов и брендов в кратчайшие сроки по доступной цене</p>

                <div className='grid md:grid-cols-6 gap-6 md:gap-8 mt-12 md:mt-16'>

                    <div className='md:col-span-3 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <div>
                            <img src={contour_img} alt="contour_img" className='md:rounded-lg mx-auto' />
                        </div>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>Ремонт двух контурных котлов</p>
                    </div>

                    <div className='md:col-span-3 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_img} alt="contour_wall_img" className='md:rounded-lg mx-auto' />
                        </div>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>Ремонт настенных котлов</p>
                    </div>

                    <div className='md:col-span-2 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_img} alt="contour_floor_img" className='md:rounded-lg mx-auto' />
                        </div>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>Ремонт напольных котлов</p>
                    </div>

                    <div className='md:col-span-2 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_img} alt="contour_prevention_img" className='md:rounded-lg mx-auto' />
                        </div>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>Профилактика котлов</p>
                    </div>

                    <div className='md:col-span-2 p-5 md:p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_img} alt="contour_gas_img" className='md:rounded-lg mx-auto' />
                        </div>
                        <p className='font-jura text-lg md:text-xl text-darkColor font-bold mt-[30px] md:mt-6 '>Обслуживание газовых котлов</p>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Catogeries