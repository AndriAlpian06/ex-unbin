import './App.css';
import Topbar from './components/Topbar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Testimonials from './components/Testimonials';
import Notice from './components/Notice';
import Partnership from './components/Partnership';
import Banner from './components/Banner';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <Testimonials />
      <Notice />
      <Partnership />
      <Banner />
      <Footer />
    </>
  );
}

export default App;
