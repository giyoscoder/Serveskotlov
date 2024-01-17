import React from 'react'

const Contact = () => {
  return (
    <section id='contact'>
        <div className="container">
            <div className="bg-[#F9FAFB] rounded-2xl py-10 px-6 md:py-16 text-center">
                <p className='text-[28px] text-5xl text-darkColor font-russo font-normal leading-[44px] -tracking-[0.96px]'>Оставьте заявку</p>
                <p className='text-lg md:text-xl text-lightColor font-jura font-normal leading-[28px] md:leading-[30px] mt-5 max-w-[768px] mx-auto'>На вызов мастера по ремонту стоимость вызова котлов и услуги при заказе с сайта - дополнительная скидка 10%. Мастер перезвонит Вам в течение 10 минут! Вызов мастера стоить 90.000 UZS</p>
                <form action="">
                    <div className='flex flex-col md:flex-row items-center justify-center gap-4 mt-8'>
                    <input type='text' placeholder='Номер телефона' />
                    <button type='button' className='bg-mainColor w-full md:max-w-[173px] font-jura text-white text-base font-medium py-3 px-5 rounded-lg'>Оставить заявку</button>
                    </div>
                </form>
                <p className='text-base text-lightColor font-jura font-normal leading-5 mt-4 mx-auto max-w-[535px]'>Оставляя заявку, вы соглашаетесь на обработку персональных данных и с условиями бронирования счёта</p>
            </div>
        </div>
    </section>
  )
}

export default Contact