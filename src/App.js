import './App.scss';
import About from './Component/About';
import Contact from './Component/Contact';
import Home from './Component/Home';
import Layout from './Component/Layout';
import { Routes,Route } from 'react-router-dom';
function App() {
  return (
   <>
   <Routes>
   <Route path="/" element={<Layout/>}>
   <Route index element={<Home/>}></Route>
   <Route path="/about" element={<About/>}/>
   <Route path="/contact" element={<Contact/>}/>
   </Route>
  

   
   
  
   </Routes>
   </>
  );
}

export default App;
