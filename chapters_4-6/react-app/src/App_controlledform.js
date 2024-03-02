import "./App.css";
import { useState } from "react";

// Custom Hook
function useInput(initValue) {
  const [value, setValue] = useState(initValue);

  return [
    { value, onChange: (e) => setValue(e.target.value) },
    () => setValue(initValue),
  ];
}

// There are different form libraries
// Formik
// React Hook Form

// There is also a place called useHooks.com
// This is a place where you can find custom hooks that you can use in your projects.

function App() {
  const [titleProps, resetTitle] = useInput("");
  const [colorProps, resetColor] = useInput("#000000");

  const submit = (e) => {
    e.preventDefault();
    alert(`${titleProps.value}, ${colorProps.value}`);

    resetTitle();
    resetColor();
  };

  return (
    // This is called a controlled form, because we are using state to control the input fields.
    <form onSubmit={submit}>
      <input {...titleProps} type="text" placeholder="color title..." />
      <input {...colorProps} type="color" />
      <button>ADD</button>
    </form>
  );
}

export default App;
