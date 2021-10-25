import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar';
import AppRoute from './routes/AppRoute';

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoute />
    </Router>
  );
}

export default App;
