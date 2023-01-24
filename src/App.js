import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';

import Welcome from './components/Welcome';

import { Hello } from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/* <Hello name="rajesh" dept="CSE">
        <p>- from Java Background</p>
        </Hello>

      <Hello name="santosh" dept="MEC" />
      <Hello name="Vinay"  dept="CIV" />
      <Hello name= "Mahesh"  dept="CEC" />
      <Welcome  name= "Mahesh"  dept="CEC" ></Welcome> */}
      
      <Hello name="santosh" dept="MEC" />
      <Counter />
    </div>
  );
}

export default App;