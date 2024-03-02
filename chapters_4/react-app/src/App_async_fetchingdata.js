import "./App.css";
import { useState, useEffect } from "react";

function GithubUser({ name, location, avatar }) {
  return (
    <div>
      <h1>{name}</h1>
      <p>{location} </p>
      <img src={avatar} height={150} alt={name} />
    </div>
  );
}

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/WMK15`)
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

  // If there is data, we will return the GithubUser component.
  return (
    <GithubUser
      name={data.name}
      location={data.location}
      avatar={data.avatar_url}
    />
  );
}

export default App;
