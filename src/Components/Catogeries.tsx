import React from 'react'
import { contour_floor_img, contour_gas_img, contour_img, contour_prevention_img, contour_wall_img } from '../Assets/Images';

const Catogeries = () => {
    return (
        <section className='my-24'>
            <div className="container">
                <h1 className='font-russo text-5xl font-normal leading-[44px] -tracking-[0.96px]'>Надежный сервис</h1>
                <p className='font-jura text-lightColor text-xl font-normal leading-[30px] max-w-[768px] mt-5'>Мы предлагаем профессиональный ремонт котлов всех типов и брендов в кратчайшие сроки по доступной цене</p>
                <div className='grid grid-cols-6 gap-8 mt-16'>
                    <div className='col-span-3 p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_img} alt="contour_img" className='rounded-xl' />
                        </div>
                        <p className='font-jura text-xl text-darkColor font-bold mt-6 '>Ремонт двух контурных котлов</p>
                    </div>
                    <div className='col-span-3 p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_wall_img} alt="contour_wall_img" className='rounded-xl' />
                        </div>
                        <p className='font-jura text-xl text-darkColor font-bold mt-6 '>Ремонт настенных котлов</p>
                    </div>
                    <div className='col-span-2 p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_floor_img} alt="contour_floor_img" className='rounded-xl' />
                        </div>
                        <p className='font-jura text-xl text-darkColor font-bold mt-6 '>Ремонт напольных котлов</p>
                    </div>
                    <div className='col-span-2 p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_prevention_img} alt="contour_prevention_img" className='rounded-xl' />
                        </div>
                        <p className='font-jura text-xl text-darkColor font-bold mt-6 '>Профилактика котлов</p>
                    </div>
                    <div className='col-span-2 p-6 rounded-xl bg-[#F9FAFB]'>
                        <div >
                            <img src={contour_gas_img} alt="contour_gas_img" className='rounded-xl' />
                        </div>
                        <p className='font-jura text-xl text-darkColor font-bold mt-6 '>Обслуживание газовых котлов</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Catogeries