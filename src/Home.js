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
                    <li className="techSkillItem">Experience with responsive CSS frameworks including Bootstrap, SASS, and LESS</li>
                    <li className="techSkillItem">Full-stack experience with React, Express, Node, and MongoDB</li>
                    <li className="techSkillItem">Data visualization experience using D3.js, as well as, Chart.js</li>
                    <li className="techSkillItem">Version Control with Git and Github</li>
               </ul>
            </div>
        </section>

        <section className="projectsSection">
            <div className="projectsHeader">My Projects</div>
            <div className="projectsDiv">
                <div className="projectCard">
                    <img src={require("./images/loan-image.jpeg")} alt="" className="projectImage" />
                    
                    <div className="projectInfo">
                        <h1 className="projectTitle">Loan Calculator App</h1>
                        <p className="projectDescription"> This is a React project that calculates the projected payments for a loan. It then uses Chart.js to help visualize the loan by showing an amortization chart for the lifetime of the loan.</p>
                    </div>

                    <div className="projectButtons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/nateHamshar/loan-calculator-app" className="codeButton" >Code</a>
                        <a target="_blank" rel="noreferrer" href="https://natehamshar.github.io/loan-calculator-app/" className="codeButton" >Live</a>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={require("./images/loan-image.jpeg")} alt="" className="projectImage" />
                    
                    <div className="projectInfo">
                        <h1 className="projectTitle">Ticket System</h1>
                        <p className="projectDescription"> A full-stack MERN app that tracks tickets for companies. Uses JSON web tokens for user authentication and authorization. </p>
                    </div>

                    <div className="projectButtons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/nateHamshar/loan-calculator-app" className="codeButton" >Code</a>
                        <a target="_blank" rel="noreferrer" href="https://natehamshar.github.io/loan-calculator-app/" className="codeButton" >Live</a>
                    </div>
                </div>
                <div className="projectCard">
                    <img src={require("./images/business.jpeg")} alt="" className="projectImage" />
                    
                    <div className="projectInfo">
                        <h1 className="projectTitle">Business Tracker</h1>
                        <p className="projectDescription">A React and Firebase app that tracks sales and expenses for a business. Utilizes Axios to get the saved data, sorts the data, and then performs calculations to show some statistics. </p>
                    </div>

                    <div className="projectButtons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/nateHamshar/business-tracker" className="codeButton" >Code</a>
                        <a target="_blank" rel="noreferrer" href="https://natehamshar.github.io/business-tracker/" className="codeButton" >Live</a>
                    </div>
                </div>
            </div>
        </section>

        <section className="challengesSection">
            <div className="challengesHeader">Coding Challenges</div>
            <div className="challengesDiv">

                <div className="projectCard">
                    <img src={require("./images/fizz-buzz.jpeg")} alt="" className="projectImage" />
                    
                    <div className="projectInfo">
                        <h1 className="projectTitle">Enhanced Fizz-Buzz</h1>
                        <p className="projectDescription">My goal for this project was to take the generic fizz-buzz challenge, add more features, and then give it a UI. This project was made for desktop, and may not be mobile responsive.</p>
                    </div>

                    <div className="projectButtons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/nateHamshar/fizz-buzz" className="codeButton" >Code</a>
                        <a target="_blank" rel="noreferrer" href="https://natehamshar.github.io/fizz-buzz/" className="codeButton" >Live</a>
                    </div>
                </div>

                <div className="projectCard">
                    <img src={require("./images/string-challenge.jpeg")} alt="" className="projectImage" />
                    
                    <div className="projectInfo">
                        <h1 className="projectTitle">String Challenge</h1>
                        <p className="projectDescription">This challenge is all about strings. It first reverses the string, and then it checks to see if it is a palindrome. This project was made for desktop, and may not be mobile responsive.
                        </p>
                    </div>

                    <div className="projectButtons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/nateHamshar/string-challenge" className="codeButton" >Code</a>
                        <a target="_blank" rel="noreferrer" href="https://natehamshar.github.io/string-challenge/" className="codeButton" >Live</a>
                    </div>
                </div>

                <div className="projectCard">
                    <img src={require("./images/pokedex-image.jpeg")} alt="" className="projectImage" />
                    
                    <div className="projectInfo">
                        <h1 className="projectTitle">Pokedex</h1>
                        <p className="projectDescription">This was a fun challenge I did that shows some info about Pokemon. The main concept for this challenge was to practice working with API's, and I decided to use Axios to do it.</p>
                    </div>

                    <div className="projectButtons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/nateHamshar/offbrand-pokedex" className="codeButton" >Code</a>
                        <a target="_blank" rel="noreferrer" href="https://natehamshar.github.io/offbrand-pokedex/" className="codeButton" >Live</a>
                    </div>
                </div>

                <div className="projectCard">
                    <img src={require("./images/money-counting.jpeg")} alt="" className="projectImage" />
                    
                    <div className="projectInfo">
                        <h1 className="projectTitle">Interactive Money Counting</h1>
                        <p className="projectDescription">Practice your money counting skills with this interactive activity. This challenge is geared towards keeping track of user inputs while they try to reach the goal in as few choices as possible.</p>
                    </div>

                    <div className="projectButtons">
                        <a target="_blank" rel="noreferrer" href="https://github.com/nateHamshar/interactive-money-counting" className="codeButton" >Code</a>
                        <a target="_blank" rel="noreferrer" href="https://natehamshar.github.io/interactive-money-counting/" className="codeButton" >Live</a>
                    </div>
                </div>
            </div>
            
        </section>

        <footer>
            
        </footer>
    </div>
    )
}

export default Home;
