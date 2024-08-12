import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import About from "./pages/About/About";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer"

{/* utilisation de browserrouter pour naviguer avec des routes entre chaques pages ou composants */}
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;