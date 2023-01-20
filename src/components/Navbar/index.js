import './index.css'
import React from 'react';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li>
                    <div >Home</div>
                </li>
                <li>
                    <div to="/about">About</div>
                </li>
                <li>
                    <div to="/contact">Contact</div>
                </li>
            </ul>
        </nav>

    );
};

export default Navigation;