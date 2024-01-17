import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaPhoneAlt, FaBars, FaTelegram, FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const navbarHadler = () => {
        setNavbar(prev => !prev)
    }
    return (
        <nav className='fixed top-0 left-0 w-full bg-white z-50'>
            <div className="container">
                {/* desktop */}
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-center gap-6 lg:gap-10'>
                        <Link activeClass="active"
                            to='main' spy={true} smooth={true} offset={-150}
                            className='text-mainColor cursor-pointer font-sans  font-bold text-base'>Serveskotlov.uz</Link>
                        <ul className='hidden md:flex items-center  gap-5 lg:gap-[32px] text-base font-medium font-jura'>
                            <li><Link to='#'>Отзывы</Link></li>
                            <li><Link to='#'>Контакты</Link></li>
                            <li><Link to='#'>О компании</Link></li>
                            <li><Link to='#'>Baymak</Link></li>
                            <li><Link to='#'>Помощь </Link></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center gap-4'>
                        <div className='flex items-center gap-4 text-mainColor'>
                            <FaTelegram size={24} />
                            <FaInstagram size={24} />
                            <BsTelephone size={24} className='md:block lg:hidden' />
                        </div>
                        <a href='tel:@rashidov9861' className='md:hidden  bg-mainColor py-3 px-5 rounded-lg text-white lg:flex items-center gap-2'><FaPhoneAlt /> <span className='font-medium text-base'>+998951575050</span></a>
                    </div>
                    <div onClick={navbarHadler} className='md:hidden text-darkColor cursor-pointer'>
                        <FaBars size='24' />
                    </div>
                </div>

                {/* mobile  */}
                <div className='md:hidden '>
                    <div className={`pt-10 h-screen w-2/3 bg-white absolute top-0 z-50  ${navbar ? 'left-0' : '-left-full'}  transition-all duration-300   space-y-8`}>
                        <Link to={'#'} className='text-mainColor text-center block  font-sans font-bold text-base'>Serveskotlov.uz</Link>
                        <ul className='flex flex-col items-center gap-5 text-base font-medium font-jura'>
                            <li><Link to='#'>Отзывы</Link></li>
                            <li><Link to='#'>Контакты</Link></li>
                            <li><Link to='#'>О компании</Link></li>
                            <li><Link to='#'>Baymak</Link></li>
                            <li><Link to='#'>Помощь </Link></li>
                        </ul>
                        <button className='bg-mainColor py-3 px-5 rounded-lg mx-auto  text-white flex items-center gap-2'><FaPhoneAlt /> <span className='font-medium text-base'>+998951575050</span></button>
                    </div>
                    <div onClick={navbarHadler} className={`bg-black/50 h-screen w-full absolute  top-0 ${navbar ? 'right-0' : 'right-full'} `} />
                </div>

            </div>
        </nav>
    )
}

export default Navbar