import React from 'react'
import { showcase_img } from '../Assets/Images'
const Showcase = () => {
    return (
        <section className='pt-24'>
            <div className="container">
                <h1 className='font-russo max-w-[900px] mx-auto text-center text-6xl text-darkColor font-normal leading-[72px] -tracking-[1.2px]'>Профессиональный ремонт котлов в Ташкенте</h1>
                <p className='font-jura text-lightColor text-center text-xl font-normal leading-[36px] max-w-[768px] mx-auto mt-6 mb-12'>Наша компания специализируется на обслуживании и ремонте газовых котлов различных марок и моделей. Мы имеем в наличии все необходимые запчасти и комплектующие для быстрого и эффективного ремонта.</p>
                <form>
                    <div className='flex items-center justify-center gap-4'>
                        <input type='text' placeholder='Имя' className='font-jura' />
                        <input type='text' placeholder='Номер телефона' className='font-jura' />
                        <button type='button' className='bg-mainColor font-jura text-white text-base font-medium py-3 px-5 rounded-lg'>Оставить заявку</button>
                    </div>
                </form>
                <div className='mt-16'>
                    <img src={showcase_img} alt='showcase_img'/> 
                </div>
            </div>
        </section>
    )
}

export default Showcase