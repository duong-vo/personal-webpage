import './index.css';
import React from 'react';

const About = (props) => {
    return (
        <body>

            <div class="about-wrapper">
                <div class="about-left">
                    <div class="about-left-content">
                        <div>
                            <div class="shadow">
                                <div class="about-img">
                                    <img src="/images/about_me.jpg" alt="about image" />
                                </div>
                            </div>

                            <h2>Duong<br />Vo</h2>
                            <h3>Miami University</h3>
                        </div>

                        <ul class="icons">
                            <li><i class="fab fa-facebook-f" src='/logo192.png'></i></li>
                            <li><i class="fab fa-twitter"></i></li>
                            <li><i class="fab fa-linkedin"></i></li>
                            <li><i class="fab fa-instagram"></i></li>
                        </ul>
                    </div>
                </div>

                <div class="about-right">
                    <h1>hi<span>!</span></h1>
                    <h2>Here's who I am & what I do</h2>
                    <div class="about-btns">
                        <button type="button" class="btn btn-pink">resume</button>
                        <button type="button" class="btn btn-white">projects</button>
                    </div>

                    <div class="about-para">
                        <p>I'm a computer science Major at Miami University.</p>
                        <p>Please check out my project, they are pretty cool!</p>
                    </div>
                </div>
            </div>


        </body>
    );
};

export default About;