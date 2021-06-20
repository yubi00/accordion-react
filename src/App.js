import Accordion from "./Accordion";
import "./styles.css";
import { data } from "./data";

export default function App() {
  return (
    <div className="App">
      <Accordion data={data} openAll={true} />
    </div>
  );
}
