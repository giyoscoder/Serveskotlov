import React from 'react'
import { Link } from 'react-router-dom';
import { FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa";
const Footer = () => {
    return (
        <footer className='mt-16 md:mt-24 pt-12 pb-8 bg-mainColor'>
            <div className="container">
                <Link to={'#'} className='text-start text-white md:text-center block  font-sans font-bold text-xl md:text-base'>Serveskotlov.uz</Link>
                <ul className='flex flex-wrap items-center justify-evenly md:justify-center gap-3 md:gap-8 text-base text-white font-bold font-jura mt-8'>
                    <li><Link to='#'>О компании</Link></li>
                    <li><Link to='#'>Новости</Link></li>
                    <li><Link to='#'>Помощь </Link></li>
                    <li><Link to='#'>Контакты</Link></li>
                </ul>
                <div className='flex flex-col-reverse sm:flex-row items-start gap-6 sm:items-center justify-between border-t border-[#B9B9B9] mt-12 pt-8'>
                    <p className='text-base  text-[#D0D5DD] font-normal font-jura leading-6'>© 2024 Serveskotlov.uz. All rights reserved.</p>
                    <div className='flex items-center gap-8  text-white'>
                        <FaTelegram size={24} />
                        <FaWhatsapp size={24} />
                        <FaInstagram size={24} />
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer