/** ============================ start besmillah ================================*/
import './App.css';
import FooterPage from './layouts/Footer';
// import { Route,Routes } from 'react-router-dom';
import Header from './layouts/Header';
import HomePage from './pages/Home/Home';
function App() {
  return (
    <>
    <Header/>
    <HomePage/>
    <FooterPage/>
    </>
  );
}

export default App;
