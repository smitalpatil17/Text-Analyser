import './App.css';
import NavBar from "./Components/NavBar";
import TextForm from "./Components/TextForm";
// import About from "./Components/About";

import Alert from "./Components/Alert";
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";
// import {Switch} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    })
    setInterval(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40';
      showAlert('Dark mode has been activated', 'success')
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been activated', 'success')
    }
  }

  return (
    <>
      {/* <Router> */}
        <NavBar title="Text Analyser" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          {/* <Switch>
            <Route path="/about">
              <About mode={mode}/>
            </Route>
            <Route path="/"> */}
              <TextForm heading="Enter text to analyse" mode={mode} showAlert={showAlert} />
            {/* </Route>
          </Switch> */}

          {/* <About/> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
