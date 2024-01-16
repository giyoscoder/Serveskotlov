import React from 'react'
import {experience_img} from '../Assets/Images'
const Experience = () => {
    return (
        <section className='py-24 bg-[#F9FAFB] '>
            <div className="container">
                <div className='flex items-center justify-between gap-16'>
                    <div className='basis-1/2 px-8'>
                        <p className='text-base text-mainColor font-jura font-medium '>О компании</p>
                        <p className='text-5xl text-darkColor font-russo font-normal leading-[57.6px] -tracking-[0.96px] max-w-[395px] mt-3'>15 лет работаем для вас</p>
                        <p className='text-base text-lightColor font-jura font-normal leading-7 mt-5'>На протяжении многих лет мы работаем на рынке и зарекомендовали себя как надежный и ответственный партнер. Наша цель - обеспечить высокое качество работ и удовлетворение потребностей наших клиентов. Мы понимаем, что проблемы с котлами или сантехникой могут привести к дискомфорту и неудобствам, поэтому мы стремимся к быстрой реакции и оперативному решению любых проблем.</p>
                        <p className='text-black text-xl font-jura font-bold mt-5'>Номер телефона: +998951575050</p>
                    </div>
                    <div className="grow-1">
                        <img src={experience_img} alt="experience_img" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience