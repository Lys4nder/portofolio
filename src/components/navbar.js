import { Link } from 'gatsby'
import React from 'react'
import './navbar.css'

export default function Navbar() {
    return (
      <nav>
        <div className="nav-links"> 
            <Link to="/"> 01. About</Link>
            <Link to="/techstack"> 02. TechStack</Link>
            <Link to="/techstack"> 03. Contact</Link>
            <Link to="/techstack"> Resume </Link>
        </div>
      </nav>
    )
}
