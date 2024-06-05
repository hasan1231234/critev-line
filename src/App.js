import './App.css';
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Home from './pages/Home'; 
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Price from './pages/Price';
import Privacy from './pages/Privacy';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
function App() {
  return (
   <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/portfolio' element={<Portfolio/>}/>
      <Route path='/price' element={<Price/>}/>
      <Route path='/privacy' element={<Privacy/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/shipping' element={<Shipping/>}/>
     </Routes>
   </BrowserRouter>
  );
}

export default App;
