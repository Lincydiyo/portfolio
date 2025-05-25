import "../CssFolder/Resume.css";
import { MdOutlineEmail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BsPerson } from "react-icons/bs";
import { LiaCertificateSolid } from "react-icons/lia";
import { PiSuitcase } from "react-icons/pi";
import { PiGraduationCapLight } from "react-icons/pi";
import { PiCertificateLight } from "react-icons/pi";

function Resume() {
  return (
    <>
      <div className="ResumeMainDiv">
        <h2>Lincy D</h2>
        <h3>Software Developer</h3>
        <h6>
          <MdOutlineEmail /> lincydiyo39@gmail.com
        </h6>
        <h6>
          <BsTelephone /> +91 8754891257
        </h6>
        <h6>
          <FaLinkedinIn /> https://www.linkedin.com/in/lincy-diyo/
        </h6>
        <h6>
          <FaGithub /> https://github.com/settings/profile
        </h6>

        <h3>
          <BsPerson /> Professional Summary
        </h3>
        <p>
          Fresher MERN STACK Developer skilled in JavaScript, React , Express
          and MongoDB. Passionate about building dynamic web application and
          eager to grow in a challenging development role.
        </p>
        <h3>
          <LiaCertificateSolid /> Technical Skills
        </h3>
        <ul>
          <li>Languages: JavaScript</li>
          <li>Frontend: React.js, HTML5, CSS3, Bootstrap</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
          <li>Tools: Git, VsCode</li>
        </ul>
        <h3>
          <PiSuitcase /> Professional Experience
        </h3>
        <h5>MERN stack Developer</h5>
        <h5>
          <i>Srishti Innovative, Thiruvananthapuram | June 2024-Present</i>
        </h5>
        <ul>
          <li>
            Developed and maintained RESTful APIs using Node.js and Express.js
          </li>
          <li>
            Integrated MongoDB with backend systems to manage dynamic data
            efficiently.
          </li>
          <li>
            Built responsive UIs with React.js for a smooth user experience.
          </li>
        </ul>
        <h3>
          <PiGraduationCapLight /> Education
        </h3>
        <h5>Bachelor of Science in Physics</h5>
        <p>
          St.Jude's College Thoothoor | MS University | 8.00 CGPA | Graduated
          2024
        </p>
        <h3>
          <PiCertificateLight /> Certifications
        </h3>
        <ul>
          <li>MERN Full Stack Developer Certification</li>
        </ul>
      </div>
    </>
  );
}

export default Resume;
