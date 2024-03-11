import "./Footer.css"
import insta from "./Instagram.webp"
import linkdin from "./linkedin.webp"
import facebook from "./facebook.webp"
import { Link } from "react-router-dom"
import call from "./Call.webp"
import whatsapp from "./Whatsapp.webp"
// import About from "./About"

function Footer()
{
    return(
        <div className="footer0">      
            <div className="footer1">
                <ol>
                    <li><h3>ABOUT US</h3></li>
                    <li><Link to="about">About Us</Link></li>
                    <li><Link to="courses">Courses</Link></li>
                    <li><Link to="contact">Contact Us</Link></li>
                </ol>
            </div>
            <div className="footer2">
                <ol>
                <li><h3>QUICK LINKS</h3></li>
                <li><Link id="l1" to="https://www.instagram.com/hcl.institute?igsh=ZjNxdXBteHU0ZjUw&utm_source=qr"><img src={insta} height={30} width={30}></img> Instagram</Link></li>
                <li><Link id="l2" to="https://www.linkedin.com/company/hcl-higher-coading-language/"><img src={linkdin} height={30} width={30}></img> Linkdin</Link></li>
                <li><Link id="l2"><img src={facebook} height={30} width={30}></img> Facebook</Link></li>
                </ol>
            </div>
            <div className="footer3">
                <ol>
                <li><h3>CONTACT US</h3></li>
                    <li><Link>109 1st Floor,306 3rd Floor, Prem Plaza, Ashok Nagar, Bhawarkua Road, Indore (M.P)</Link></li>
                        <li><Link to="tel:8236809542"><img src={call} height="20px" width="20px"></img>  +91-8236809542</Link></li>
                        <li><Link to="tel:7566299542"><img src={call} height="20px" width="20px"></img>  +91-7566299542</Link></li>
                        <li><Link><img src={whatsapp} height="20px" width="20px"></img>  +91-8236809542</Link></li>
                    </ol>
            </div>
        </div>
    )
}
export default Footer 