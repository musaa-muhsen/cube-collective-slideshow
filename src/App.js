import Slider from "./components/Slider";
import {Data} from "./components/Data";
console.log(Data)

function App() {
  return (
    <div className="App">
         <Slider slides={Data} />
    </div>
  );
}

export default App;
