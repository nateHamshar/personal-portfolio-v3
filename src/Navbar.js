import "./Navbar.css"

const Navbar = () => {

    const homeLink = document.getElementById("home")
    const resumeLink = document.getElementById('resume')
    const contactLink = document.getElementById("contact")

    const changeActiveLink = (x) => {
        if (x === "home"){
            homeLink.classList.add("active")
            resumeLink.classList.remove("active")
            contactLink.classList.remove("active")
        } else if (x === "resume"){
            resumeLink.classList.add("active")
            homeLink.classList.remove("active")
            contactLink.classList.remove("active")
        } else if (x === "contact"){
            contactLink.classList.add("active")
            resumeLink.classList.remove("active")
            homeLink.classList.remove("active")
        }
    }

    return (
        <nav className="navbar">
            <div className="left">
                <a  className="onLeft">HAMSHAR</a>
            </div>
            <div className="right">
                <a href="/" id="home" className="onRight active" onClick={() => changeActiveLink("home")}>Home</a>
                <a href="/" id="resume" className="onRight" onClick={() => changeActiveLink("resume")}>Resume</a>
                <a href="/" id="contact" className="onRight" onClick={() => changeActiveLink("contact")}>Contact</a>
            </div>
        </nav>
    )
}
 
export default Navbar;