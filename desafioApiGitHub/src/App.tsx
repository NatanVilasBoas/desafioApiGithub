import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home';
import Details from './pages/Details';

function AppRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/details/:id' element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;
