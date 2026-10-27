/** ============================ start besmillah ================================*/
import React from 'react';
import './App.css';
import Header from './layouts/Header';
import HomePage from './pages/Home/Home';
import Footer from './layouts/Footer';
import { Route,Routes} from 'react-router-dom';
import ProductsPage from './pages/Products/Products';
import AboutPage from './pages/About/About';
import Contact from './pages/Contact/Contact';
import EROORpage from './pages/Error/Error';
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/Products' element={<ProductsPage/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/Contact' element ={<Contact/>}/>
      <Route path='*' element ={<EROORpage/>}/>
    </Routes>
   
    <Footer/>
    </>
  );
}

export default App;
