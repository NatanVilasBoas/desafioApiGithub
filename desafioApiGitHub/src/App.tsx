import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';

function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details' element={''}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
