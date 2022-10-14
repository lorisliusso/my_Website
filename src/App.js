import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


const App= ()=> {

  return (

    <Router>

    <div className="App">
  


    <Routes>

    


    <Route path='/' element= {<Home/>}   />
    <Route path='/contact' element= {<Contact/>}   />

    



      </Routes>

   


    </div>

    </Router>
  );
}

export default App;
