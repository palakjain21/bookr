import './App.scss';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Register from '../components/Register/Register';
import Signin from '../components/Signin/Signin';

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className="Forms">
        <Signin />
        <Register />
      </div>
    </div>
  );
}

export default App;
