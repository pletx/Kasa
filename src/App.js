import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import FicheLogement from './Pages/FicheLogement';
import NotFound from './Pages/NotFound';
import Header from '../src/Components/header';
import logo from"../src/Pages/LOGO.png"
import Footer from './Pages/footer';
function App() {
  return (
    
    <BrowserRouter>
     <Header logoSrc={logo}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/Apropos' element={<aPropos />} />
        <Route path="/Fichelogement" element={<FicheLogement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer logoSrc={logo}/>
    </BrowserRouter>
    
  );
}

export default App;
