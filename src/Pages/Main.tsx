import React from 'react';
import { Outlet } from 'react-router-dom';
import Showcase from '../Components/Showcase';
import Superiority from '../Components/Superiority';
import Cooperation from '../Components/Cooperation';
import Services from '../Components/Services';
import Catogeries from '../Components/Catogeries';
import ContourService from '../Components/ContourService';
import Experience from '../Components/Experience';
import Comments from '../Components/Comments';
import Contact from '../Components/Contact';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const Main = () => {
    return (
        <section>
            {/* <Navbar /> */}
            <Showcase />
            <Superiority />
            <Cooperation />
            <Services />
            <Catogeries />
            <ContourService />
            <Experience />
            <Comments />
            <Outlet />
            {/* <Contact />
            <Footer /> */}
        </section>
    )
}

export default Main