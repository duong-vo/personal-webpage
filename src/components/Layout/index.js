import React from 'react';

const Layout = (props) => {
    return (
        <div className="container">
            <header>
                <h1>My Portfolio</h1>
            </header>
            <nav>
                {/* Navigation component goes here */}
            </nav>
            <main>
                {props.children}
            </main>
            <footer>
                <p>Copyright © {new Date().getFullYear()} My Name</p>
            </footer>
        </div>
    );
};

export default Layout;