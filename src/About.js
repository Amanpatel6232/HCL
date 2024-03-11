import "./about.css"
import aboutlogo from "./aboutus.png"
function About()
{
    return(
        <div className="about">
            <div className="about1">
                 <img src={aboutlogo} width={400} height={400}></img>
            </div>
            <div className="about2">
            <h1 id="about2">WHAT IS HCL ?</h1>
            <p id="about3">HCL(Higher Coding Language) holds expertise in providing IT training services & IT Recruitment to college students and company employees in Indore since 2023. HCL provides intense training programs for aspiring job-seekers and corporate's to help them further learn and enhance their technical skill sets. HCL is the best place for students to develop their programming abilities in different technologies. A dedicated team of professional trainer's, with their technical expertise, can help student's get to a point of prowess which cannot be matched by most colleges and institutions.</p>
            <p id="about3">The training is provided by professionals and corporate faculties holding ample training experience, to guide students with the work culture of most IT companies. Training module is accompanied by live project experience and placement assistance which makes the candidates ready to be absorbed in the industry. HCL takes up the responsibility of placing all its students at attractive packages in companies all over India.
            </p>
            <p id="about3">HCL has been the trusted placement partner for companies both top notch and middle tier. HCL is always to do effort scratch to 100%.What this means for students and companies is that HCL is a mark of quality and no compromises are made in rendering services availed for at HCL</p>
            </div>
        </div>
    )
}
export default About