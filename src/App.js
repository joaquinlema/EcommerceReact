import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";
import Navbar from './components/Navbar';
import AppRoute from './routes/AppRoute';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <AppRoute />
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
