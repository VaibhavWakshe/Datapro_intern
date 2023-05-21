import Itemlist from "../Itemlist";
import "./styles.css";

export default function App() {
  const items = ["Vaibhav", "Raj", "Nitin"];
  return (
    <div className="App">
      <h1>list of items</h1>
      <Itemlist items={items} />
    </div>
  );
}