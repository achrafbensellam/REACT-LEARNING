/** ============================ start besmillah ================================*/
import Header from './layouts/Header';
import Herosec from './pages/Home/Home';
import Footer from './layouts/Footer';
import './App.css';
import { Route , Routes } from 'react-router-dom';
function App() {
  return (
    <>
    <Header />
    <main className='theMain'>
    <Routes>
      <Route path='/' element={<Herosec />}/>
    </Routes>
    </main>
    <Footer />
    </>
  );
}

export default App;
