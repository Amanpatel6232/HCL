import "./courses.css"
import mern from "./mern.png"
import mean from "./mean2.png"
import java from "./java.png"
import python from "./python.png"
import android from "./android.png"
import ios from "./ios.jpeg"
import { Container } from "react-bootstrap"
function Courses()
{
    return(
      <Container>
        <div>
          <div className="wrapper">
           <div className="card" style={{height:"200px"}}>
            <img src={mern}></img>
            <div className="info">
              <h1>MERN Full Stack</h1>
              <a href="courses/mern" className="btn">View Detail</a>
            </div>
           </div>

           <div className="card" style={{height:"200px"}}>
            <img src={mean}></img>
            <div className="info">
              <h1>MEAN Full Stack</h1>
              <a href="mern" className="btn">View Detail</a>
            </div>
           </div>

           <div className="card" style={{height:"200px"}}>
            <img src={java} ></img>
            <div className="info2">
              <h1>JAVA Full Stack</h1>
              <a href="mern" className="btn">View Detail</a>
            </div>
           </div>
           <div className="card" style={{height:"200px"}}>
            <img src={python}></img>
            <div className="info">
              <h1>Python Full Stack</h1>
              <a href="mern" className="btn">View Detail</a>
            </div>
           </div>

           <div className="card" style={{height:"200px"}}>
            <img src={android}></img>
            <div className="info1">
              <h1>Android</h1>
              <a href="mern" className="btn">View Detail</a>
            </div>
           </div>

           <div className="card" style={{height:"200px"}}>
            <img src={ios} ></img>
            <div className="info3">
              <h1>IOS</h1>
              <a href="mern" className="btn">View Detail</a>
            </div>
            </div>
        </div>
       
        </div>
       
        </Container>
    )
}
export default Courses 