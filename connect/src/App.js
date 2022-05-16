import React from "react"
import './App.css';
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="app">
      {/*<h1>Connect</h1>*/}

      <div className="app_body">
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
