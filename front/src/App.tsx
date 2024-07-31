import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Main, FavoriteCats } from './pages/pages';
import { Header } from './Components/Header/Header';

export function App() {

  return (
    <div className='page'>

    <Header />

    <div className='content'>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/favorite-cats' element={<FavoriteCats />} />
      </Routes>
    </div>

  </div>
  )
}

