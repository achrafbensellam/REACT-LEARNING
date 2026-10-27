/** ============================ start besmillah ================================*/
import './App.css';
import Header from './layouts/Header';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import THefooter from './layouts/Footer';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/About' element/>
      </Routes>
      <THefooter/>
    </>
  );
}

export default App;
