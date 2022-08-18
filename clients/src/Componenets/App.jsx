import Navbar from "./Navbar"
import About from "./About"
import Home from "./Home"
import {useState, useEffect} from "react"

import { HashRouter, Routes, Route } from "react-router-dom";

 function App(){

    const [data, setData] = useState(null);

   useEffect(() => {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
console.log(data)

    return(
        <>
           <HashRouter>
        <div>
          <Navbar />
          <h1>{data}</h1>
            <Routes>
             <Route exact path="/"  element={<Home />}/>
             <Route path="/about"  element={<About />}/>
           </Routes>
        </div> 
      </HashRouter>
        </>
    )
}

export default App