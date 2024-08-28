import { Routes, Route } from "react-router-dom"
import Posts from "./Posts"
import Singlepost from "./Singlepost"
import Edit from "./Edit"
import Create from "./Create"


const Routerpost = () => {

    return (

        <Routes>
            <Route path='/' element={<Posts />}></Route>
            <Route path='/:id' element={<Singlepost />}></Route>
            <Route path='/edit/:id' element={<Edit />}></Route>
            <Route path='/create' element={<Create />}></Route>
        </Routes>

    )

}

export default Routerpost