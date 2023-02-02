import './index.css';
import React from 'react';

const About = (props) => {
    return (
        <html>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
            </head>
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
                                <li><a href="https://www.github.com/duong-vo/"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/duonghvo/"><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="https://www.facebook.com/profile.php?id=100041889491894"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a><i class="fab fa-instagram"></i></a></li>
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
        </html>
    );
};

export default About;