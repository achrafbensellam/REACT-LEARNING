/** ============================ start besmillah ================================*/
import './App.css';
import FooterPage from './layouts/Footer';
import { Route,Routes } from 'react-router-dom';
import Header from './layouts/Header';
import HomePage from './pages/Home/Home';
import Error from './pages/Error/Error';
import ProductsPage from './pages/Products/Products';
import OrderPage from './pages/Order/OrderPage';
import AboutPage from './pages/About/About';
function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
    <Route path='*' element={<Error/>}/>
    <Route path='/Products' element={<ProductsPage/>}/>
    <Route path='/Order' element={<OrderPage/>}/>
    <Route path='/About' element={<AboutPage/>}/>
    </Routes>
    <FooterPage/>
    </>
  );
}

export default App;
