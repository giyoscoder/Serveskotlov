import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { favicon } from './Assets/Images'
import 'react-toastify/dist/ReactToastify.css';

const Navbar = React.lazy(() => import('./Components/Navbar'));
const MainPage = React.lazy(() => import('./Pages/Main'));
const Footer = React.lazy(() => import('./Components/Footer'));
const Contact = React.lazy(() => import('./Components/Contact'));
const Unit = React.lazy(() => import('./Pages/Unit'));
const Airfel = React.lazy(() => import('./Pages/Airfel'))
const Kiturami = React.lazy(() => import('./Pages/Kiturami'));
const Atlantic = React.lazy(() => import('./Pages/Atlantic'))
const Baymak = React.lazy(() => import('./Pages/Baymak'));
const Baxi = React.lazy(() => import('./Pages/Baxi'))
const Viessmann = React.lazy(() => import('./Pages/Viessmann'))
const Ferroli = React.lazy(() => import('./Pages/Ferroli'))

const App = () => {

  useEffect(() => {
    const link: any = document.querySelector('link[rel="icon"]');

    link.setAttribute('href', 'https://api.serveskotkov.uz/storage/01HMK7KFQ9EAVDJY2Y72PKW1QD.png');
  }, []);

  return (
    <div className='bg-white'>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' index element={<MainPage />} />
          <Route path='/unit' element={<Unit />} />
          <Route path='/airfel' element={<Airfel />} />
          <Route path='/kiturami' element={<Kiturami />} />
          <Route path='/atlantic' element={<Atlantic />} />
          <Route path='/baymak' element={<Baymak />} />
          <Route path='/baxi' element={<Baxi />} />
          <Route path='/viessmann' element={<Viessmann />} />
          <Route path='/ferroli' element={<Ferroli />} />
        </Routes>
      </Suspense>
      <Contact />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App