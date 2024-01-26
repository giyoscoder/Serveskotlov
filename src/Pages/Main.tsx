import React from 'react'
import Showcase from '../Components/Showcase';
import Superiority from '../Components/Superiority';
import Cooperation from '../Components/Cooperation';
import Services from '../Components/Services';
import Catogeries from '../Components/Catogeries';
import ContourService from '../Components/ContourService';
import Experience from '../Components/Experience';
import Comments from '../Components/Comments';
import Contact from '../Components/Contact';

const Main = () => {
    return (
        <section>
            <Showcase />
            <Superiority />
            <Cooperation />
            <Services />
            <Catogeries />
            <ContourService />
            <Experience />
            <Comments />
            {/* <Contact /> */}
        </section>
    )
}

export default Main