import logo from './logo.svg';
import './App.css';

import Greet from './components/Greet';

import Welcome from './components/Welcome';

import { Hello } from './components/Hello';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

function App() {
  return (
    <div className="App">
      
      

      <h1>Day2</h1>

      <h2>Event Binding</h2>
      <EventBind />

      <h2>Event Handling</h2>
      <FunctionClick />
      <ClassClick />

      <h1>-------------------------------------------</h1>


      <h1>Day1 & 2</h1>
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