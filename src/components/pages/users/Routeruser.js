import { Routes, Route } from "react-router-dom"
import Users from "./Users.js"
import Person from "./Person.js"

const Routeruser = () => {

    return (

        <Routes>
            <Route path='/' element={<Users />}></Route>
            <Route path='/:id' element={<Person />}></Route>
        </Routes>

    )

}

export default Routeruser