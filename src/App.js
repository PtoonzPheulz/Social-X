import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import Features from './Components/Features/Features';
import Download from './Components/Download/Download';
import Subscribe from './Components/Subscribe/Subscribe';
import Faq from './Components/Faq/Faq';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar/>
        <Header/>
      </header>
      <Features/>
      <Download/>
      <Subscribe/>
      <Faq/>
      <Footer/>
    </main>
  );
}

export default App;
