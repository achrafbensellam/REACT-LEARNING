/** ============================ start besmillah ================================*/
import './App.css';
import Header from './layouts/Header';
import { Route,Routes } from 'react-router-dom';
import HomePage from './pages/Home/Home';
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default App;
