import React from "react";

import Home from './Home';
import Dashboard from "./Dashboard";
import { BrowserRouter,Routes,Route } from "react-router-dom";
  
function App() {
  return (
    <div className="App">
     
        
      
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/dashboard" element={<Dashboard/>}/>
  
  

        </Routes>
     </BrowserRouter>
     
    </div>
  );
}
  
export default App;