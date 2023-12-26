import React , {useState}  from 'react';
import { Link, NavLink } from 'react-router-dom';
import "./Navbar.css"

export const Navbar = () => {

 const [menuOpen, SetMenuOpen] = useState(false);


    return (
        <nav>
            <Link className='title' to="/"> Home   </Link>
            <div className='menu' onClick={ () => {SetMenuOpen(!menuOpen)}}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className= {menuOpen ? 'open' : ''}>
                <li><NavLink to="/about"> About   </NavLink></li>
                <li><NavLink to="/services"> Services</NavLink></li>
                <li><NavLink to="/contact"> Contact </NavLink> </li>
            </ul>
        </nav>

    )
}
