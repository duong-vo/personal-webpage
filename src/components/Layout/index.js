import './index.css';
import React from 'react';
import Box from '../Box';
import About from '../About';
import Footer from '../Footer';

const Layout = (props) => {
    return (
        <div className="container">
            <About />
            <main className="main">
                <Box />
            </main>
            <Footer/>
        </div>
    );
};

export default Layout;