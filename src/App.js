import React from 'react';
import './app.css';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Offer from './components/Offres/Offer';
import Popular from './components/Popular/Popular';

const App = () => {
  return (
    <>
     <Navbar/>
     <Home/>
    <Popular/>
    <Offer/>
    <Blog/>
     {/* <About/>*/}
    <Footer/>
    </>
  )
}

export default App
