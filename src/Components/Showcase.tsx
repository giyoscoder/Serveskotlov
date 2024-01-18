import React, { useEffect, useState } from 'react'
import { showcase_img } from '../Assets/Images';
import { useForm } from 'react-hook-form';
import { instance } from '../instance/instance';
import { useTranslation } from 'react-i18next'
type Inputs = {
    username: string
    exampleRequired: string
    phoneNumber: string
    field: number | string
}

const Showcase = () => {

    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

    const onSubmitHandler = (e: Inputs) => {

    }
    useEffect(() => {
        // instance.get('/todos').then(res => console.log(res.data)
        // );
    }, []);

    const { t } = useTranslation('showcase')


    return (
        <section id='showcase' className='pt-16 md:pt-24'>
            <div className="container">
                <h1 className='font-russo max-w-[900px] mx-auto text-center text-[30px] md:text-6xl text-darkColor font-normal leading-[44px] md:leading-[72px] mt-8  -tracking-[1.2px]'>{t("title")}</h1>
                <p className='font-jura text-lightColor text-center text-xs md:text-xl font-normal leading-7 md:leading-[36px] max-w-[768px] mx-auto mt-4 md:mt-6 mb-8 md:mb-12'>{t('about')}</p>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4'>
                        <input type='text' placeholder={t('input_name')} className='font-jura' {...register('username', { required: { value: true, message: 'Iltimos ismingizni kiriting!' } })} />
                        <input type='number' placeholder={t('input_phone')} className='font-jura' {...register('phoneNumber', { required: { value: true, message: 'Telefon raqamingizni kiriting!' } })} />
                        <button type='submit' className='bg-mainColor w-full md:max-w-[173px] font-jura text-white text-base font-medium py-3 px-5 rounded-lg'>{t('button_submit')}</button>
                    </div>
                </form>
                <div className='mt-16'>
                    <img src={showcase_img} alt='showcase_img' />
                </div>
            </div>
        </section>
    )
}

export default Showcase