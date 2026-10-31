import Employee from "./Employee";

function Team() {
    return (
        <div className="team-container">
            <div className="team-title"><h3>Meet Our Team</h3></div>
            <div className="team">
                <Employee />
            </div>
        </div>
    )
};

export default Team;