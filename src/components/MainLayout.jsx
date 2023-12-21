import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Datepicker from 'react-tailwindcss-datepicker';

const MainLayout = ({ children }) => {
  return (
    <div>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default MainLayout;