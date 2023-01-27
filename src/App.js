import logo from "./logo.svg";
import "./App.css";

import Greet from "./components/Greet";

import Welcome from "./components/Welcome";

import { Hello } from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";
import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";
import UserGreeting from "./components/UserGreeting";
import ListRender from "./components/ListRender";
import Stylesheet from "./components/styles/Stylesheet";
import Inline from "./components/styles/Inline";

import './components/styles/appStyles.css'
import styles from './components/styles/appStyles.module.css'
import Form from "./components/forms/Form";

function App() {
  return (
    <div className="App">
      <h1>Day4</h1>

      <h4> 2) Forms</h4>
      <h5> Controlled components</h5>
      <Form />


      <h4> 1) Styling React Components</h4>
      <h5> i) External Styles</h5>
      <Stylesheet primary={true} />
      <h5> ii) Inline Styles</h5>
      <Inline />
      <h5> iii) CSS Module </h5>
      <h3 className="error">Error</h3>
      <h3 className={styles.success}>Success</h3>
      
      
      <h1>-------------------------------------------</h1>

      <h1>Day3</h1>

      <h4> 4) Try avoiding index as key</h4>

      <h4> 4) Lists & Maps Key prop</h4>

      <h4> 3) List Rendering</h4>
      <ListRender />

      <h4>2) Conditional Rendering</h4>
      <UserGreeting />

      <h4>1) Parent Child components</h4>
      <ParentComponent />

      <h1>-------------------------------------------</h1>

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
