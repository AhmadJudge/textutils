
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import React,{useState} from "react";
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  
const[mode,setMode]=useState('light');
const[alert,setalert]=useState(null);
const showalert=(message,type)=>{
  setalert({
    msg:message,
    type:type
  })
  setTimeout(() => {
    setalert(null);
  }, 2000);
}
const toggleMode=()=>{
  if(mode==='light'){
    setMode('dark')
    document.body.style.background='#05002b'
    showalert("Dark mode is enabled","success")
  }
  else{
    setMode('light')
    document.body.style.background='white'
    showalert("light mode is enabled","warning")
  }
}
return (
<>
<div className="container my-3">
{/* <BrowserRouter> */}
<Navbar title='Textutils123' mode={mode} togglemode={toggleMode}/>
<Alert alert={alert}/>
<TextForm/>
        {/* <Navbar
          title="TextUtils2"
          aboutText="TextAbouts"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} /> */}
        {/* <div className="container my-4" mode={mode}> */}
          {/* <Routes> */}
            {/* <Route exact path="/about" element={<About />}> */}
              
            {/* </Route> */}
            {/* <Route */}
              {/* exact path="/" */}
              {/* element={<TextForm showalert={showalert}heading='Enter the text' mode={mode}/>} */}
              
           {/* > </Route> */}
          {/* </Routes> */}
        {/* </div> */}
      {/* </BrowserRouter> */}
{/* <About/> */}
</div>
  </>
  );
}

export default App;
