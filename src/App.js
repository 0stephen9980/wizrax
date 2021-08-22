import logo from "./logo.svg";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import Header from "./Header/header";
import Home from "./Home/home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <>
          <div className="loading">
            <Spinner animation="border" />
          </div>
        </>
      ) : (
        <>
          <Header />
          <Home />
        </>
      )}
    </div>
  );
}

export default App;
