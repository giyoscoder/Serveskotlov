import React from 'react'
import { ariston_img, ferroli_img, baxi_img, unit_img, viesmann_img } from '../Assets/Images'

const Cooperation = () => {
    return (
        <section className='bg-[#F9FAFB] py-16 md:py-[42px] mt-16 md:mt-24'>
            <div className="container">
                <p className='text-center text-lightColor text-lg md:text-base font-jura font-normal leading-6 '>Работаем со всеми маркамии моделями котлов</p>
                <div className='flex flex-wrap gap-8  lg:flex-nowrap items-center justify-evenly lg:justify-between mt-8'>
                    <img src={ariston_img} alt='ariston_img' />
                    <img src={ferroli_img} alt='ferroli_img' />
                    <img src={baxi_img} alt='baxi_img' />
                    <img src={unit_img} alt='unit_img' />
                    <img src={viesmann_img} alt='viesmann_img' />
                </div>
            </div>
        </section>
    )
}

export default Cooperation