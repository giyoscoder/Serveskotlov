import React from 'react'
import { brand_showcase } from '../../Assets/Images';



const Showcase = ({ img, title, about }: { img?: any, title: string, about: string }) => {

  return (
    <div className='md:flex items-center justify-between mt-28'>
      <div>
        <h1 className={`text-darkColor text-[32px] text-center md:text-start md:text-[80px] font-russo font-normal leading-[44px] md:leading-[96px] -tracking-[1.6px] md:max-w-[${title.length == 18 ? 447 : 503}px]`}>{title}</h1>
        <p className='text-lightColor text-center md:text-start text-base md:text-2xl font-jura font-semibold leading-[28.8px] mt-4 md:mt-6'>{about}</p>
      </div>
      <div className='py-10'>
        <img src={img ? img : brand_showcase} alt="" />
      </div>
    </div>
  )
}

export default Showcase