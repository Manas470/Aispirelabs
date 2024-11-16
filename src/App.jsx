import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import './App.css';
import LandingPage from './components/Landingpage';
import UseCaseCards from './components/UseCases';
import AboutPage from './components/AboutUs';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/use-cases" element={<UseCaseCards />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/join-waitlist" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

const Home = () => {
  return <LandingPage />;
};

export default App;