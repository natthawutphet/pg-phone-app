import logo from './logo.svg';
import './App.css';
import Navber from './Navber';
import Header from './Header';
import Main from './Main';
import About from './About';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navber />
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;
