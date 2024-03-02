import "./App.css";
import { useState, useEffect } from "react";

// GRAPHQL FETCH REQUEST
const query = `
query {
  allLifts {
    name
    status
    elevationGain
  }
}
`;

const opts = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query }),
};

function Lift({ name, elevationGain, status }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>
        {elevationGain} {status}
      </p>
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://snowtooth.moonhighway.com/`, opts)
      .then((res) => res.json())
      // We can use shorthand because the key and value are the same.
      .then(setData)
      .then(() => setLoading(false))
      .catch(setError);
  }, []);

  // If the loading state is true, we will return a loading message.
  if (loading) return <h1>Loading...</h1>;
  // If there is an error, we will return the error message.
  if (error) return <pre>{JSON.stringify(error, null, 2)}</pre>;
  // If there is no data, we will return null.
  if (!data) return null;

  console.log(data, "DATA");

  // If there is data, we will return the GithubUser component.
  return (
    <div>
      {data.data.allLifts.map((lift) => (
        <Lift
          name={lift.name}
          elevationGain={lift.elevationGain}
          status={lift.status}
          key={lift.name}
        />
      ))}
    </div>
  );
}

export default App;
