import React,{ useState } from "react";
import "./App.css";
import Alert from "./Component/Alert";
// import About from "./Component/About";
import Navbar from "./Component/Navbar";
import TextForm from "./Component/TextForm";




function App() {
  const[mode,setMode]=useState('light');
  const[alert , setAlert]=useState(null);
  const showAlert=(message , type)=>{
    setAlert({
      msg: message,
      type: type
   })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
   }
   const toggle=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#062437 ';
      showAlert("Dark mode has been Enable","success");
      document.title='TextUtil-DarkMode Enable';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enable","success");
      document.title='TextUtil-LightMode Enable';
    }
   }
  return (
    <>
        <Navbar title="TextUtils Blogs" aboutBlog="About Blog" mode={mode} toggleMode={toggle} />
        <Alert alert={alert}/>
      <div className="container my-3">
          <TextForm showAlert={showAlert} heading = "Enter Text to Analyze" mode={mode}/>
          {/* <About/> */}
      </div>
    </>
  );
}

export default App;
