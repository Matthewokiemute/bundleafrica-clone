import './App.css';
import Connected from './components/connected/Connected';
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Invest from './components/invest/Invest';
import Powered from './components/powered/Powered';
import Process from './components/process/Process';
import Username from './components/username/Username';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Process />
      <Powered />
      <Username />
      <Invest />
      <Connected />
    </div>
  );
}

export default App;
