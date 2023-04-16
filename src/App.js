import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import FicheLogement from './Pages/Fichelogement/FicheLogement';
import NotFound from './Pages/NotFound/NotFound';
import Header from './Components/header/header';
import logo from'./Assets/LOGO.png'
import Footer from './Components/footer/footer';
import APropos from './Pages/Apropos/APropos';
import foterimg from './Assets/LOGOfooter.png'

function App() {
  return (
    
    <BrowserRouter>
     <Header logoSrc={logo} logolink='/'/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Apropos" element={<APropos />} />
        <Route path="/Fichelogement/:id" element={<FicheLogement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer logoSrc={foterimg}/>
    </BrowserRouter>
    
    
  );
}

export default App;
