import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt, FaTelegram, FaInstagram } from "react-icons/fa";

import {useForm } from 'react-hook-form';

type Inputs = {
    phoneNumber: string | number
}

const Contact = () => {
  const {register, handleSubmit, formState:{errors}}  = useForm<Inputs>()

  const submitHandler = (e: Inputs) => {
      console.log(e);
      
  }

  return (
    <section id='contact'>
      <div className="container">
        <div className="bg-[#F9FAFB] rounded-2xl py-10 px-6 md:py-16 text-center">
          <p className='text-[28px] text-5xl text-darkColor font-russo font-normal leading-[44px] -tracking-[0.96px]'>Оставьте заявку</p>
          <p className='text-lg md:text-xl text-lightColor font-jura font-normal leading-[28px] md:leading-[30px] mt-5 max-w-[768px] mx-auto'>На вызов мастера по ремонту стоимость вызова котлов и услуги при заказе с сайта - дополнительная скидка 10%. Мастер перезвонит Вам в течение 10 минут! Вызов мастера стоить 90.000 UZS</p>
          <form onSubmit={handleSubmit(submitHandler)}>
            <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-8'>
              <input type='text' placeholder='Номер телефона' {...register('phoneNumber', {required: true})}/>
              <button type='button' className='bg-mainColor w-full md:max-w-[173px] font-jura text-white text-base font-medium py-3 px-5 rounded-lg'>Оставить заявку</button>
            </div>
          </form>
          <p className='text-base text-lightColor font-jura font-normal leading-5 mt-4 mx-auto max-w-[535px]'>Оставляя заявку, вы соглашаетесь на обработку персональных данных и с условиями бронирования счёта</p>

          {/* Social media */}
          <div className='mt-8 flex flex-wrap justify-start sm:justify-evenly gap-5 text-start item-start md:justify-between'>

            
            <div className='md:space-y-5  gap-4 flex  items-start md:flex-col'>
              <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><FaPhoneAlt size={'24'} /></span>
              </div>
              <div className='font-jura'>
                <p className='text-lg md:text-xl text-darkColor font-bold'>Телефон</p>
                <p className='text-base text-mainColor font-semibold leading-6'>+998 95-157-50-50</p>
              </div>
            </div>

            <div className='md:space-y-5  gap-4 flex items-start md:flex-col'>
              <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><FaTelegram size={'24'} /></span>
              </div>
              <div className='font-jura'>
                <p className='text-lg md:text-xl text-darkColor font-bold'>Телеграм</p>
                <p className='text-base text-mainColor font-semibold leading-6'>@servis_kotlov_tashkent</p>
              </div>
            </div>

            <div className='md:space-y-5  gap-4 flex items-start md:flex-col'>
              <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><FaInstagram size={'24'} /></span>
              </div>
              <div className='font-jura'>
                <p className='text-lg md:text-xl text-darkColor font-bold'>Инстаграм</p>
                <p className='text-base text-mainColor font-semibold leading-6'>@serveskotlov.uz</p>
              </div>
            </div>

            <div className='md:space-y-5  gap-4 flex items-start md:flex-col'>
              <div className='bg-[#F0F0FF] p-[6px] rounded-full inline-block'>
                <span className='bg-[#E8E7FF] p-[6px] rounded-full text-mainColor block'><CiLocationOn size={'24'} /></span>
              </div>
              <div className='font-jura'>
                <p className='text-lg md:text-xl text-darkColor font-bold'>Локация</p>
                <p className='text-base text-mainColor font-semibold leading-6 sm:max-w-[228px]'>Talimarjon street, 15, Tashkent, Yashnobod, Tashkent, Uzbekistan </p>
              </div>
            </div>


          </div>


        </div>
      </div>
    </section>
  )
}

export default Contact