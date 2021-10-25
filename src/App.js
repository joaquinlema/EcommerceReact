import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar';
import AppRoute from './routes/AppRoute';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoute />
      <Footer />
    </Router>
  );
}

export default App;
