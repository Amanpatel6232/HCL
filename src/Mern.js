
import { Container } from "react-bootstrap"
import "./mern.css"
import { Link } from "react-router-dom"
function Mern()
{
  return(
    <Container>
    <div className="mern0">
      <div className="mern1" >
        <h1>HTML</h1>
        <br></br>
        <Link to="html">View Syllabus</Link>
      </div>

      <div  className="mern1">
        <h1>CSS</h1>
        <br></br>
        <Link to="css">View Syllabus</Link>
      </div>

      <div  className="mern1">
        <h1>Javascript</h1>
        <br></br>
        <Link to="javascript">View Syllabus</Link>
      </div>

      <div  className="mern1">
        <h1>JQuery</h1>
        <br></br>
        <Link to="jquery">View Syllabus</Link>
      </div>

      <div className="mern1">
        <h1>React JS</h1>
        <br></br>
        <Link to="react">View Syllabus</Link>
      </div>

      <div  className="mern1">
        <h1>Node JS</h1>
        <br></br>
        <Link to="node">View Syllabus</Link>
      </div>
    </div>
    </Container>
  )
}
export default Mern