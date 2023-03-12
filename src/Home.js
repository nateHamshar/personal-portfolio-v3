import "./Home.css"


const Home = () => {
    return (
    <div className="home">
        
        <section className="landingSection">
            <div className="landingTitle">
                <h1 className="landingName">Nate Hamshar</h1>
                <h3 className="landingDescription">Web Developer</h3>
            </div>
            <div className="landingImageDiv">
                <img src="https://media.istockphoto.com/photos/black-white-tiger-picture-id954560222?b=1&k=20&m=954560222&s=612x612&w=0&h=5tNqkUbcr2-V7UUXy6qIF_G-646vBkGsuHRbPZCvvVY=" alt="" className="landingImage" />
            </div>
        </section>

        <section className="aboutSection">
            <div className="aboutMe">
                <h1 className="aboutMeHeader">About Me</h1>
                <p className="aboutMeDescription">I am a passionate web developer, with a drive to create beautiful websites that provide an amazing user experience. I have full stack experience, however, I usually prefer to focus more on the front-end. I am most comfortable building within the MERN stack, but I am always looking for opportunities to expand my knowledge.</p>
            </div>
            <div className="techSkills">
                <h1 className="techSkillsHeader">Technical Skills</h1>
                <ul className="techSkillList">
                    <li className="techSkillItem">Proficiency in HTML, CSS, and Javascript</li>
                    <li className="techSkillItem">Full-stack experience with React, Express, Node, and MongoDB</li>
                    <li className="techSkillItem">Data visualization experience using D3.js, as well as, Chart.js</li>
                    <li className="techSkillItem">Version Control with Git and Github</li>
               </ul>
            </div>
        </section>

        <section className="projectsSection">
            <div className="projectsHeader">My Projects</div>
            <div className="projectsDiv">
                <div className="projectCard">left</div>
                <div className="projectCard">mid</div>
                <div className="projectCard">right</div>
            </div>
        </section>

        <section className="challengesSection">
            <div className="challengesHeader">Coding Challenges</div>
            <div className="challengesDiv">
                <div className="challengeCard">left</div>
                <div className="challengeCard">mid</div>
                <div className="challengeCard">right</div>
                <div className="challengeCard">left</div>
                <div className="challengeCard">mid</div>
                <div className="challengeCard">right</div>
            </div>
        </section>

        <footer>
            
        </footer>
    </div>
    )
}

export default Home;
