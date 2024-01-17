import React from 'react'
import { repair_icon_img, prevention_icon_img, service_icon_img } from '../Assets/Images';

const Services = () => {
    return (
        <section className='my-16 md:my-24'>
            <div className="container">
                <h1 className='font-russo text-[28px] md:text-5xl font-normal  -tracking-[0.96px]'>Наши услуги</h1>

                <div className='grid md:grid-cols-3  gap-6 md:gap-8 mt-12 md:mt-16'>
                    <div className='bg-[#F9FAFB] rounded-xl py-8 px-6 text-center space-y-[30px] md:space-y-6'>
                        <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                            <img src={repair_icon_img} alt='repair_icon_img' />
                        </div>
                        <div className='font-jura'>
                            <p className=' text-darkColor text-lg md:text-2xl font-bold'>Ремонт котлов</p>
                            <p className='text-lightColor text-base font-normal leading-6'>Ремонт настенных и напольных газовых котлов.</p>
                        </div>
                    </div>

                    <div className='bg-[#F9FAFB] rounded-xl py-8 px-6 text-center space-y-[30px] md:space-y-6'>
                        <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                            <img src={prevention_icon_img} alt='repair_icon_img' />
                        </div>
                        <div className='font-jura'>
                            <p className=' text-darkColor text-lg md:text-2xl font-bold'>Профилактика котлов</p>
                            <p className='text-lightColor text-base font-normal leading-6 mx-auto'>Профилактика двух контурных котлов</p>
                        </div>
                    </div>

                    <div className='bg-[#F9FAFB]  rounded-xl py-8 px-6 text-center space-y-[30px] md:space-y-6'>
                        <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                            <img src={service_icon_img} alt='repair_icon_img' />
                        </div>
                        <div className='font-jura'>
                            <p className=' text-darkColor text-lg md:text-2xl font-bold'>Обслуживание котлов</p>
                            <p className='text-lightColor text-base font-normal leading-6'>Устранение утечки газа и воды ремонт платы управления.</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}

export default Services