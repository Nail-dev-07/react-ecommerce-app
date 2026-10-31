import Team from "../components/Team";
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p>Welcome to our company! We are a team of dedicated professionals committed to delivering exceptional results.</p>
            <Team />
        </div>
    )
};

export default About;