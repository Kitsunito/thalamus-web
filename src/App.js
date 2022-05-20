import Header from './Components/layout/Header';
import Main from './Components/layout/Main';
import Footer from './Components/layout/Footer';
import WhatsappIcon from './Components/WhatsappIcon';
import "./styles/main.scss"
import MobileMenu from './Components/layout/MobileMenu';

function App() {
  return (
    <div className="App">
      <Header />
      <MobileMenu />
      <Main />
      <WhatsappIcon />
      <Footer />
    </div>
  );
}

export default App;
