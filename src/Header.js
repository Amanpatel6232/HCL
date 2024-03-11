import { Link } from "react-router-dom"
import"./header.css"
import hcllogo from "./hcllogo-removebg-preview.png"
import { Container } from "react-bootstrap"

function Header()
{
    return(
        <Container>
        <div className="header1">
            <div>
            <ul>
                <li><Link to="/"><img src={hcllogo} height={80} width={170}></img></Link></li>
            </ul>
            </div>
            <div className="header12">
            <ul>
                <li className="li1"><Link to="/">Home</Link></li>
                <li className="li1"><Link to="about">About</Link></li>
                <li className="li1"><Link to="contact">Contact Us</Link></li>
                <li className="li1"><Link to="courses">Courses</Link></li> 
                <li className="mybtn"><Link to="registration">Registration</Link></li>
            </ul>
            </div>
        </div>
        </Container>
    )
}
export default Header