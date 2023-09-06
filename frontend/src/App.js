import React from "react";
import {  Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Activity from "./components/Activity";
import Search from "./components/Search";

const App = () => {
  return (
      <div>
        <Navbar />
    
        {/* <div className="pl-32 pr-32 pt-10 pb-10"> */}
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/activity" element={<Activity/>}/>
      <Route path="/search" element={<Search/>}/>

      



    </Routes>
        
        </div>
      
      // </div>
  );
};

export default App;
