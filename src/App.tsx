import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Home from "./components/home";
import Candidaturas from "./components/candidaturas";
import Flyer from "./components/flyer";
import Bilhetes from "./components/bilhetes";
import Artistas from "./components/artistas";
import Resultados from "./components/resultados";
import Formulario from './components/formulario.tsx';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/candidaturas" element={<Candidaturas />} />
        <Route path="/flyer" element={<Flyer />} />
        <Route path="/bilhetes" element={<Bilhetes />} />
        <Route path="/artistas" element={<Artistas />} />
        <Route path="/formulario" element={<Formulario />} />
        <Route path="/resultados" element={<Resultados />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
