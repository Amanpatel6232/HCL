import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./Header"
import Home from "./Home"
import About from "./About"
import Contact from "./Contact"
import "./routing.css"
import Footer from "./Footer"
import Courses from "./Courses"
import Mern from "./Mern"
import Html from "./Html"
import Css from "./Css"
import Javascript from "./Javascript"
import Jquery from "./Jquery"
import React from "./React"
import Node from "./Node"
import Registration from "./Registration"

function Routing()
{
    return(
        <div className="routing1">
            <BrowserRouter>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="about" element={<About></About>}></Route>
                <Route path="contact" element={<Contact></Contact>}></Route>
                <Route path="courses" element={<Courses></Courses>}></Route>
                <Route path="mern" element={<Mern></Mern>}></Route>
                <Route path="mern/html" element={<Html></Html>}></Route>
                <Route path="mern/css" element={<Css></Css>}></Route>
                <Route path="mern/javascript" element={<Javascript></Javascript>}></Route>
                <Route path="mern/jquery" element={<Jquery></Jquery>}></Route>
                <Route path="mern/react" element={<React></React>}></Route>
                <Route path="mern/node" element={<Node></Node>}></Route>
                <Route path="registration" element={<Registration></Registration>}></Route>
            </Routes>
            <Footer></Footer>
            </BrowserRouter>
        </div>
    )
}
export default Routing