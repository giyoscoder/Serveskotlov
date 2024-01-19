import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const Navbar = React.lazy(() => import('./Components/Navbar'));
const MainPage = React.lazy(() => import('./Pages/Main'));
const Footer = React.lazy(() => import('./Components/Footer'));

const App = () => {
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