import './styles/globals.css'
import { BrowserRouter } from "react-router-dom";
import Switch from "./routes/Switch";
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <BrowserRouter>
    
    <Header/>
    <Switch/>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
