import contact from "./contact.png"
import "./contact.css"
function Contact()
{
    return(
        <div className="contact0">
            <div className="contact1">
            <div>
                    <img src={contact}></img>
            </div>
            <div className="contact2">
            <form>
                    <h1>Contact Us</h1>
                    <input type="text" placeholder="Name*"></input><br></br>
                    <input type="email" placeholder="Your Email*"></input><br></br>
                    <input type="number" placeholder="Phone Number*"></input><br></br>
                    <textarea type="text" placeholder="Message*" ></textarea><br></br>
                    <button>Send</button>
            </form>
            </div>
                
            </div>
        </div>
    )
}
export default Contact 