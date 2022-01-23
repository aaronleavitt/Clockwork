import "./App.css";
import ClockPac from "./components/ClockPac.js"
import ClockMtn from "./components/ClockMtn.js"
import ClockCen from "./components/ClockCen.js"
import ClockEas from "./components/ClockEas.js"

function App() {
  return (
    
    <div className="App">
      <div style= {{ fontSize:"60px", margin: "40px" }}><b>Time Across Timezones</b></div>
      <ClockPac></ClockPac>
      <ClockMtn></ClockMtn>
      <ClockCen></ClockCen>
      <ClockEas></ClockEas>
    </div>
  );
}

export default App;
