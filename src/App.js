import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Fields from './components/Fields';
import Middle from './components/Middle';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Middle/>
      <Fields/>
      <Footer/>
    </div>
  );
}

export default App;
