import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header.js';
import Home from "./components/pages/home/Home.js";
import Routeruser from "./components/pages/users/Routeruser.js";
import Routerpost from "./components/pages/post/Routerpost.js";


function App() {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes> 
          <Route path='/' element={<Home />}></Route>
          <Route path='/Users/*' element={<Routeruser />}></Route>
          <Route path='/Posts/*' element={<Routerpost />}></Route>
        </Routes>
      </BrowserRouter>
  
    </>
  );
}

export default App;

