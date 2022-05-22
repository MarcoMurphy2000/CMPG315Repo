import React from "react"
import './App.css';
import Sidebar from "./Sidebar";
import Chat from "./Chat";

//comment 
function App() {
  return (
    <div className="app">
      {/*<h1>Connect</h1>*/}

      <div className="app_body">
        {/*SideBar*/}
        <Sidebar />
        {/*Chat*/}
        <Chat />
        
      </div>
    </div>
  );
}

export default App;
