import React, { Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import {favicon} from './Assets/Images'
import 'react-toastify/dist/ReactToastify.css';

const Navbar = React.lazy(() => import('./Components/Navbar'));
const MainPage = React.lazy(() => import('./Pages/Main'));
const Footer = React.lazy(() => import('./Components/Footer'));

const App = () => {

  useEffect(() => {
    const link:any = document.querySelector('link[rel="icon"]');
    
    link.setAttribute('href', 'https://api.serveskotkov.uz/storage/01HMK7KFQ9EAVDJY2Y72PKW1QD.png');
  }, []);
  
  return (
    <div className='bg-white'>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path='/' index element={<MainPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App