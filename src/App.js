import './App.css';
import "./assets/js/script";
import Header from './components/Header/Header';

import Services from './components/Services/Services';
import Work from './components/Work/Work';

import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Services />
      <Work />

      <Footer />
    </div>
  );
}

export default App;
