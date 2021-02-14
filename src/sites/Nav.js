import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

export default function Nav({cart}) {
    return (
        <nav id="nav">
            <Link to="/store">
                <h1 className="title-icon" id="link-left">Fortnite Store</h1>
            </Link>
            <ul className="nav-links"> 
                <Link to="/history">
                    <li className="title-icon" id="link-right">Order History</li>
                </Link>
                <Link to="/upcoming">
                    <li className="title-icon" id="link-right">Upcoming</li>
                </Link>
                <Link to="/cart">
                    {cart.length === 0 ? '' : <li className="title-icon" id="link-right">Cart({cart.length})</li> }
                </Link>
            </ul>
        </nav>
    )
}
