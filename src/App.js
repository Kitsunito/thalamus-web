import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Components
import Header from './Components/layout/Header';
import Main from './Components/layout/Main';
import Footer from './Components/layout/Footer';
import WhatsappIcon from './Components/WhatsappIcon';
import MobileMenu from './Components/layout/MobileMenu';

//Pages
import NotFound from './pages/NotFound'
import Planes from './pages/Planes'
import SobreNosotros from './pages/SobreNosotros';
import Ejercicios from './pages/Ejercicios';

//Style
import "./styles/main.scss"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <MobileMenu />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/nosotros" element={<SobreNosotros />}/>
          <Route path="/ejercicios" element={<Ejercicios />}/>
          <Route path="/planes" element={<Planes />}/>
          <Route path="/futuro-thalamus" />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <WhatsappIcon />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
