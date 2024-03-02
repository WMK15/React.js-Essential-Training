import "./App.css";
import { Link, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1> Home Component </h1>
    </div>
  );
}

function About() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>About Component</h1>
      <Outlet />
    </div>
  );
}

function History() {
  return (
    <div>
      <h1>Our History</h1>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <h1>Contact Component</h1>
    </div>
  );
}

function App() {
  return <Home />;
}

export { App, Home, About, Contact, History };
