import React from 'react'
import { repair_icon_img, prevention_icon_img, service_icon_img } from '../Assets/Images';

const Services = () => {
    return (
        <section className='my-24'>
            <div className="container">
                <h1 className='font-russo text-5xl font-normal leading-[44px] -tracking-[0.96px]'>Наши услуги</h1>
                <div className='flex items-center justify-between gap-8  mt-16'>
                    <div className='bg-[#F9FAFB] min-w-[384px]  max-w-[384px]  rounded-xl py-8 px-6 text-center space-y-6'>
                        <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                            <img src={repair_icon_img} alt='repair_icon_img' />
                        </div>
                        <div className='font-jura'>
                            <p className=' text-darkColor text-2xl font-bold'>Ремонт котлов</p>
                            <p className='text-lightColor text-base font-normal leading-6'>Ремонт настенных и напольных газовых котлов.</p>
                        </div>
                    </div>
                    <div className='bg-[#F9FAFB] min-w-[384px]  max-w-[384px] rounded-xl py-8 px-6 text-center space-y-6'>
                        <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                            <img src={prevention_icon_img} alt='repair_icon_img' />
                        </div>
                        <div className='font-jura'>
                            <p className=' text-darkColor text-2xl font-bold'>Профилактика котлов</p>
                            <p className='text-lightColor text-base font-normal leading-6 mx-auto max-w-[235px]'>Профилактика двух контурных котлов</p>
                        </div>
                    </div>
                    <div className='bg-[#F9FAFB] min-w-[384px]  max-w-[384px] rounded-xl py-8 px-6 text-center space-y-6'>
                        <div className='bg-mainColor rounded-[10px] p-3 inline-block'>
                            <img src={service_icon_img} alt='repair_icon_img' />
                        </div>
                        <div className='font-jura'>
                            <p className=' text-darkColor text-2xl font-bold'>Обслуживание котлов</p>
                            <p className='text-lightColor text-base font-normal leading-6'>Устранение утечки газа и воды ремонт платы управления.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services