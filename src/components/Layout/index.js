import './index.css';
import React from 'react';
import Box from '../Box';
import About from '../About';

const Layout = (props) => {
    return (
        <div className="container">
            <About />
            <header>
                <h1>My Portfolio</h1>
            </header>
            <nav>
                {/* Navigation component goes here */}
            </nav>
            <main className="main">
                <Box />
                <Box />
                <Box />
                <Box />
            </main>
            <footer>
                <p>Copyright © {new Date().getFullYear()} Duong Vo</p>
            </footer>
        </div>
    );
};

export default Layout;