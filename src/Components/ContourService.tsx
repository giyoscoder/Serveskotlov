import React from 'react'
import { extra_icon_img, heating_icon_img, setting_icon_img, pipes_icon_img, water_pressure_img, plumber_icon_img, } from '../Assets/Images'
const ContourService = () => {
    return (
        <section className='my-16 md:my-24'>
            <div className="container">
                <h1 className='font-russo text-[28px] md:text-5xl font-normal leading-[44px] -tracking-[0.96px]'>Услуги</h1>
                <p className='font-jura text-lightColor text-lg md:text-xl font-normal leading-[30px] mt-4 md:mt-5'>По ремонту газовых настенных и напольных котлов</p>
                <div className='grid md:grid-cols-2 grid-flow-row-dense gap-6 md:gap-8 mt-12 md:mt-16'>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <img src={setting_icon_img} alt="setting_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>Профилактика</p>
                            <p className='text-lightColor text-base font-normal'>от 400000 сум</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <img src={pipes_icon_img} alt="pipes_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>Замена турбины</p>
                            <p className='text-lightColor text-base font-normal'>от 850000 сум</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <img src={heating_icon_img} alt="heating_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>Замена теплообменника</p>
                            <p className='text-lightColor text-base font-normal'>от 1300000 сум</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <img src={water_pressure_img} alt="water_pressure_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg  md:text-xl font-bold '>Замена датчика давления воды</p>
                            <p className='text-lightColor text-base font-normal'>от 250000 сум</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-5 md:p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <img src={plumber_icon_img} alt="plumber_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>Замена трёх ходового клапана</p>
                            <p className='text-lightColor text-base font-normal'>от 450000 сум</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-7 md:gap-16 p-6 rounded-xl bg-[#F9FAFB] font-jura'>
                        <div className='min-h-[48px] min-w-[48px] bg-mainColor p-3 rounded-[10px] inline-block'>
                            <img src={extra_icon_img} alt="extra_icon_img" />
                        </div>
                        <div className='space-y-1 md:space-y-2'>
                            <p className='text-darkColor text-lg md:text-xl font-bold '>Замена маностата</p>
                            <p className='text-lightColor text-base font-normal'>от 380000 сум</p>
                        </div>
                    </div>
                </div>
                <p className='text-lg md:text-xl text-center md:text-start text-lightColor font-jura font-normal leading-[30px] mt-12 md:mt-8'>Оставляя заявку, вы соглашаетесь на обработку персональных данных</p>
            </div>
        </section>
    )
}

export default ContourService