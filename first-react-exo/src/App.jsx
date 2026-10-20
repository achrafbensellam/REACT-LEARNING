/** ============================ start besmillah ================================*/
import Header from './layouts/Header';
import Herosec from './pages/Home/Home';
import Footer from './layouts/Footer';
import './App.css';

function App() {
  return (
    <>
    <Header />
    <main className='theMain'>
      <Herosec />
    </main>
    <Footer />
    </>
  );
}

export default App;
