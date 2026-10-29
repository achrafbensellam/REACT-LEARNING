/** ============================ start besmillah ================================*/
import './App.css';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
import HeaderPage from './layouts/Header';
function App() {
  return (
    <>
    <HeaderPage/>
    <Routes>
    <Route path='/' element={<HomePage/>}/>
    </Routes>
    </>
  );
}

export default App;
