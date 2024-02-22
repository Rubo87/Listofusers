import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className='NavBar'>
            <ul className='NavItems'>
                <li>
                    <Link to='/users'><button className='NavBtn'>Home</button></Link>
                </li>
                <li>
                    <Link to='/'><button className='NavBtn'>Log out</button></Link>
                </li>

            </ul>
        </nav>
    );
}

export default NavBar;
