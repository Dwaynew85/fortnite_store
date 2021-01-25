import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <nav className="nav">
            <Link to="/store">
                <h2>Fortnite Store</h2>
            </Link>
            <ul className="nav-links"> 
                <Link to="/upcoming">
                    <li>Upcoming</li>
                </Link>
                <Link to="/cart">
                    <li>Cart</li>
                </Link>
            </ul>
        </nav>
    )
}
