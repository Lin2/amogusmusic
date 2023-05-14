import './App.css';
import Sequencer from './Sequencer';
import Appbackground from './Appbackground'

function App() {
  return (
    <div>
      <div className="particles">
        <Appbackground/>
      </div>
      <div className="foreground">
        <Sequencer/>
      </div>
    </div>
  );
}

export default App;
