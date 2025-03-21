import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Instituicoes from './views/Instituicoes';
import Sobre from './views/Sobre';
import { InstituicaoProvider } from './context/InstituicaoProvider';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <InstituicaoProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instituicoes" element={<Instituicoes />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </InstituicaoProvider>
  );
}

export default App;
