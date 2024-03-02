import "./App.css";
import { useReducer } from "react";

function App() {
  // useReducer() takes in the function to update state, and the inital state.
  const [checked, setChecked] = useReducer((checked) => !checked, false);

  return (
    <div className="App">
      <input type="checkbox" value={checked} onChange={setChecked} />
      <label>{checked ? "checked" : "not checked"}</label>
    </div>
  );
}

export default App;
