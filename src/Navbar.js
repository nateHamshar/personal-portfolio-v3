import { useEffect, useState } from "react"
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {

    const [active, setActive] = useState(1);

 
    useEffect(() => {
        const homeLink = document.getElementById("home")
        const resumeLink = document.getElementById('resume')
        const contactLink = document.getElementById("contact")

        if (active === 1){
            homeLink.classList.add("active")
            resumeLink.classList.remove("active")
            contactLink.classList.remove("active")
        } else if (active === 2){
            resumeLink.classList.add("active")
            homeLink.classList.remove("active")
            contactLink.classList.remove("active")
        } else if (active === 3){
            contactLink.classList.add("active")
            resumeLink.classList.remove("active")
            homeLink.classList.remove("active")
        }
    }, [active])

    return (
        <nav className="navbar">
            <div className="left">
                <Link to="/" className="onLeft" onClick={() => setActive(1)}>HAMSHAR</Link>
            </div>
            <div className="right">
                <Link to="/" id="home" className="onRight" onClick={() => setActive(1)}>Home</Link>
                <Link to="/resume" id="resume" className="onRight" onClick={() => setActive(2)}>Resume</Link>
                <Link to="/contact" id="contact" className="onRight" onClick={() => setActive(3)}>Contact</Link>
            </div>
        </nav>
    )
}
 
export default Navbar;