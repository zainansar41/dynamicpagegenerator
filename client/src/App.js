import './App.css';
import Signin from './pages/AuthPages/Signin';
import Signup from './pages/AuthPages/Signup';
import Home from './pages/Home/Home';

import LivePreview from './pages/Generate/LivePreview';
import GeneratePage from './pages/Generate/GeneratePage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  // Determine if the user is on signin or signup page
  const isAuthPage = window.location.pathname.includes("/signin") || window.location.pathname.includes("/signup") || window.location.pathname.includes("/preview");

  return (
    <>
      <Router>
        {!isAuthPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GeneratePage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/preview" element={<LivePreview />} />
        </Routes>
        {!isAuthPage && <Footer />}
      </Router>
    </>
  );
}

export default App;
