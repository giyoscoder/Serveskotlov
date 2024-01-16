import React from 'react'
import { Link } from 'react-router-dom';
import { FaPhoneAlt } from "react-icons/fa";
const Navbar = () => {
    return (
        <nav>
            <div className="container">
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-center gap-10'>
                        <Link to={'#'} className='text-mainColor font-sans font-bold text-base'>Serveskotlov.uz</Link>
                        <ul className='flex items-center gap-[32px] text-base font-medium font-jura'>
                            <li><Link to='#'>Отзывы</Link></li>
                            <li><Link to='#'>Контакты</Link></li>
                            <li><Link to='#'>О компании</Link></li>
                            <li><Link to='#'>Baymak</Link></li>
                            <li><Link to='#'>Помощь </Link></li>
                        </ul>
                    </div>
                    <div>
                        <button className='bg-mainColor py-3 px-5 rounded-lg text-white flex items-center gap-2'><FaPhoneAlt/> <span className='font-medium text-base'>+998951575050</span></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar