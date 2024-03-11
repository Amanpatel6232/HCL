import "./register.css"
import register from "./register.png"
function Registration()
{
    return(
        <div className="register0">
            <div className="registerimg">
                <img src={register}></img>
            </div>
            <div className="register1">
            <form>
                    <input type="text" placeholder="Name*" style={{width:"420px"}}></input><br></br>
                    <br></br>
                    <input type="email" placeholder="Email*" style={{width:"420px"}}></input><br></br>
                    <br></br>
                    <input type="number" placeholder="Phone No*" style={{width:"420px"}}></input><br></br>
                    <br></br>
                    <select>
                        <option>Select Graduation</option>
                        <option>B.Tech</option>
                        <option>B.E.</option>
                        <option>BCA</option>
                        <option>MCA</option>
                        <option>BSC</option>
                        <option>MSC</option>
                        <option>Other</option>
                    </select><br></br>
                    <br></br>
                    <select>
                        <option>Select Graduation Year</option>
                        <option>2019</option>
                        <option>2020</option>
                        <option>2021</option>
                        <option>2022</option>
                        <option>2023</option>
                        <option>2024</option>
                        <option>2025</option>
                        <option>2026</option>
                    </select><br></br>
                    <br></br>
                    Select Courses<br></br>
                          <input type="radio" name="gender" checked></input>MERN
                          <input type="radio" name="gender" checked></input>MEAN
                          <input type="radio" name="gender" checked></input>Java
                           <input type="radio" name="gender" checked></input>paython
                           <input type="radio" name="gender" checked></input>Android
                           <input type="radio" name="gender" checked></input>IOS
                    <br></br><br></br>
                    <button>Register</button>
            </form>
            </div>
        </div>
    )
}
export default Registration