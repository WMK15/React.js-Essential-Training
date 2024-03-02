import "./App.css";
import { useRef } from "react";

function App() {
  // Ref can be seen as a hook that reaches out to an element and grabs its value.
  const textTitle = useRef();
  const hexColor = useRef();

  console.log(textTitle);

  const submit = (e) => {
    e.preventDefault();

    const title = textTitle.current.value;
    const color = hexColor.current.value;

    alert(`${title}, ${color}`);

    textTitle.current.value = "";
    hexColor.current.value = "";
  };

  return (
    // This is called an uncontrolled form, because we are not using state to control the input fields.
    <form onSubmit={submit}>
      <input type="text" placeholder="color title..." ref={textTitle} />
      <input type="color" ref={hexColor} />
      <button>ADD</button>
    </form>
  );
}

export default App;
