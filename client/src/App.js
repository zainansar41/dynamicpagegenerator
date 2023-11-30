import './App.css';
import Signin from './pages/AuthPages/Signin';
import Signup from './pages/AuthPages/Signup';
import Home from './pages/Home/Home';

import LivePreview from './pages/Generate/LivePreview';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<LivePreview />} />
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
