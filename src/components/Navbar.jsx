import logo from "../images/logo.svg"

export default function Navbar() {
    return (
        <div className="navbar">
            <img src={logo}></img>
            <p>my travel journal</p>
        </div>
    )
}