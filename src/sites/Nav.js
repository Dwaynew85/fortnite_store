import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.css'

export default function Nav({cart}) {
    return (
        <nav id="nav">
            <Link to="/store">
                <h2>Fortnite Store</h2>
            </Link>
            <ul className="nav-links"> 
                <Link to="/upcoming">
                    <li>Upcoming</li>
                </Link>
                <Link to="/cart">
                    {cart.length === 0 ? '' : <li>Cart({cart.length})</li> }
                </Link>
                <Link to="/history">
                    <li>Order History</li>
                </Link>
            </ul>
        </nav>
    )
}
