import React, { useEffect, useState } from 'react'
import { showcase_img } from '../Assets/Images';
import { useForm } from 'react-hook-form';
import { instance } from '../instance/instance';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { watch } from 'fs';

type Inputs = {
    name: string
    exampleRequired: string
    phone: string
    field: number | string
}

const Showcase = () => {
    const [error, setError] = useState<any>(false)

    const { register, handleSubmit, reset,  watch ,formState: { errors, isSubmitSuccessful } } = useForm<Inputs>();

    const onSubmitHandler = (e: Inputs) => {
        if (e.name != '' && e.phone != '') {
            instance.post('/call', e).then()
            reset()
            toast.success(' Success!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: undefined,
            });
        } else {
            // toast.error('Wrong!', {
            //   position: "top-right",
            //   autoClose: 5000,
            //   hideProgressBar: false,
            //   closeOnClick: true,
            //   pauseOnHover: true,
            //   draggable: true,
            //   progress: undefined,
            //   theme: "light",
            //   transition: undefined,
            // });
            setError(true)
        }

    }

    useEffect(()=>{
        setError(false)
    }, [watch('name')])


    const { t } = useTranslation('showcase')


    return (
        <section id='showcase' className='pt-16 md:pt-24'>
            <div className="container">
                <h1 className='font-russo max-w-[900px] mx-auto text-center text-[30px] md:text-6xl text-darkColor font-normal leading-[44px] md:leading-[72px] mt-8  -tracking-[1.2px]'>{t("title")}</h1>
                <p className='font-jura text-lightColor text-center text-xs md:text-xl font-normal leading-7 md:leading-[36px] max-w-[768px] mx-auto mt-4 md:mt-6 mb-8 md:mb-12'>{t('about')}</p>
                <form onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className='flex flex-col md:flex-row items-start justify-center gap-4'>
                        <div className='md:max-w-[360px] w-full'>
                            <input type='text' placeholder={t('input_name')} className={`font-jura ${error && 'border border-red-500 bg-red-50'}`} {...register('name')} />
                            {error && <p className='text-red-500 text-sm'>Ismni to'ldirish majburiy!</p>}
                        </div>
                        <div className='md:max-w-[360px] w-full'>
                            <input type='text' placeholder={t('input_phone')} className={`font-jura ${error && 'border border-red-500 bg-red-50'}`} {...register('phone')} />
                            {error && <p className='text-red-500'>Raqamni to'ldirish majburiy!</p>}
                        </div>

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