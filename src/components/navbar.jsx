import React from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom'
import { ImCart } from "react-icons/im";
function Navbar() {
    return (
        <nav>
            <h1>shopy</h1>
            <ul>
                <li><Link to="/">shop</Link></li>
                <li><Link to="/cart"><ImCart /></Link></li>
            </ul>
        </nav>
    )
}
export default Navbar