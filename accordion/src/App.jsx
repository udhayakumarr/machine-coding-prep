import "./App.css";
import Accordion from "./Components/accordion";
import { accordionData } from "./data";

function App() {
  return <Accordion items={accordionData} allowMultipleOpen={false} />;
}

export default App;
