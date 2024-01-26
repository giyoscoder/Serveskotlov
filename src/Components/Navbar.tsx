import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FaPhoneAlt, FaBars, FaTelegram, FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { logo } from '../Assets/Images'
import { useTranslation } from 'react-i18next'
import { useNavigate, useLocation } from 'react-router-dom'


const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const [navbar, setNavbar] = useState(false);
    const [lang, setLang] = useState('Ru');
    const [navDrop, setNavDrop] = useState(false)
    const [locationPath, setLocationPath] = useState(false);

    const navbarHadler = () => {
        setNavbar(prev => !prev)
    }
    const { t, i18n } = useTranslation('navbar');

    const langugeHandler = (e: string) => {
        setLang(e)
        setNavDrop(false)
        i18n.changeLanguage(e)
    }

    useEffect(() => {
        if (location.pathname != '/') { setLocationPath(false) }
        else {

            setLocationPath(true)
        }
    }, [location])

    console.log(locationPath);



    return (
        <nav className='fixed top-0 left-0 w-full bg-white z-[100]'>
            <div className="container">
                {/* desktop */}
                <div className='flex items-center justify-between py-4'>
                    <div className='flex items-center gap-6 lg:gap-10'>
                        <Link onClick={() => navigate('/')} activeClass="active"
                            to='showcase' spy={true} smooth={true} offset={-150}
                            className='text-mainColor cursor-pointer font-sans  font-bold text-base max-w-[147px]'>
                            <img src={logo} alt="" />
                        </Link>
                        <ul className='hidden md:flex items-center  cursor-pointer gap-5 lg:gap-[32px] text-base font-medium font-jura'>
                            {locationPath && <li><Link to='services' spy={true} smooth={true} offset={-150}>{t('reviews')}</Link></li>}
                            <li><Link to='about' spy={true} smooth={true} offset={-100}>{t('companies')}</Link></li>
                            {locationPath && <li><Link to='comments' spy={true} smooth={true} offset={-150}>{t('help')}</Link></li>}
                            <li><Link to='contact' spy={true} smooth={true} offset={-100}>{t('contact')}</Link></li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='flex items-center gap-4 text-mainColor'>
                            <a href="https://t.me/servis_kotlov_tashkent" target='_black'>
                                <FaTelegram size={24} />
                            </a>
                            <a href="https://www.instagram.com/serveskotlov.uz/" target='_black'>
                                <FaInstagram size={24} />
                            </a>
                        </div>
                        <div className='relative'>
                            <p onClick={() => setNavDrop(prev => !prev)} className='text-darkColor cursor-pointer text-base font-jura font-medium flex items-center gap-2 p-3 bg-[#F9FAFB] rounded-lg'><span className='capitalize'>{t('lan')}</span> <IoIosArrowDown className={`${navDrop && 'rotate-180 transition-all duration-300'}`} /></p>

                            <ul className={`absolute -right-2 transition-all duration-300 ${navDrop ? 'opacity-1 top-full' : 'opacity-0 top-9'} cursor-pointer min-w-[150px] mt-1 text-base text-darkColor bg-white p-[10px] space-y-[20px] font-hura font-bold  rounded-lg`}>
                                <li onClick={() => langugeHandler('uz')}>O’zbek tili</li>
                                <li onClick={() => langugeHandler('de')}>Узбек тили</li>
                                <li onClick={() => langugeHandler('ru')}>Русский язык</li>
                            </ul>

                        </div>
                        <a href='tel:+998951575050' className='hidden bg-mainColor py-3 px-5 rounded-lg text-white lg:flex items-center gap-2'><FaPhoneAlt /> <span className='font-medium text-base'>+998951575050</span></a>
                        <div onClick={navbarHadler} className='md:hidden text-darkColor cursor-pointer'>
                            <FaBars size='24' />
                        </div>
                    </div>
                </div>

                {/* mobile  */}
                <div className='md:hidden '>
                    <div className={`pt-10 h-screen w-2/3 bg-white absolute top-0 z-[80]  ${navbar ? 'left-0' : '-left-full'}  transition-all duration-300 space-y-5`}>
                        <Link to={'#'} className='text-mainColor text-center block  font-sans font-bold text-base max-w-[147px] mx-auto'>
                            <img src={logo} alt="" />
                        </Link>
                        <ul className='flex flex-col items-center gap-5 text-base font-medium font-jura'>
                            <li ><Link onClick={() => navbarHadler()} to='services' spy={true} smooth={true} offset={-150}>{t('reviews')}</Link></li>
                            <li ><Link onClick={() => navbarHadler()} to='about' spy={true} smooth={true} offset={-100}>{t('companies')}</Link></li>
                            {/* <li><Link onClick={() => navbarHadler()} to='#' spy={true} smooth={true} offset={-150}>{t('baymak')}</Link></li> */}
                            <li><Link onClick={() => navbarHadler()} to='comments' spy={true} smooth={true} offset={-150}>{t('help')}</Link></li>
                            <li><Link onClick={() => navbarHadler()} to='contact' spy={true} smooth={true} offset={-100}>{t('contact')} </Link></li>
                        </ul>

                        <a href="tel:+998 95-157-50-50" className=' block'>
                            <button className='bg-mainColor py-3 px-5 rounded-lg mx-auto  text-white flex items-center gap-2'><FaPhoneAlt /> <span className='font-medium text-base'>+998951575050</span></button>
                        </a>

                        {/* language */}
                        {/* <div className='relative'>
                            <p onClick={() => setNavDrop(prev => !prev)} className='text-darkColor cursor-pointer text-base font-jura font-medium flex items-center justify-center gap-2 p-3 bg-[#F9FAFB] rounded-lg'><span>{lang}</span> <IoIosArrowDown className={`${navDrop && 'rotate-180 transition-all duration-300'}`} /></p>

                            <ul className={`absolute transition-all left-1/2 -translate-x-1/2 duration-300 ${navDrop ? 'opacity-1 top-full ' : 'opacity-0 top-9'} cursor-pointer min-w-[150px] mt-1 text-base text-darkColor bg-white p-[10px] space-y-[20px] font-jura font-bold  rounded-lg`}>
                                <li onClick={() => langugeHandler('Uz')}>O’zbek tili</li>
                                <li onClick={() => langugeHandler('Уз')}>Узбек тили</li>
                                <li onClick={() => langugeHandler('Ru')}>Русский язык</li>
                            </ul>

                        </div> */}

                    </div>
                    <div onClick={navbarHadler} className={`bg-black/50 h-screen w-full absolute  top-0 ${navbar ? 'right-0' : 'right-full'} `} />
                </div>

            </div>
        </nav>
    )
}

export default Navbar