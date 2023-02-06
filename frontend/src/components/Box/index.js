import './index.css'
import React, { useState, useEffect } from 'react';

const Box = () => {
    const [title, setTitle] = useState([]);
    // hard coded pinned ids
    const pinnedIds = [564903106, 594309823, 560730978, 589031379, 591131178, 541322654];
    var pinnedRepos = []
    useEffect(() => {
        const fetchData = () => {
            const res = fetch(`https://api.github.com/users/duong-vo/repos`) // return a promise
                .then(res => { return res.json() }) // also return a promise
                .then(repos => {
                    pinnedRepos = [];
                    for (let i = 0; i < repos.length; i++) {
                        console.log(repos[i]);
                        if (pinnedIds.indexOf(repos[i].id) != -1) {
                            pinnedRepos.push(repos[i]);
                        }
                    }
                    console.log(pinnedRepos);
                    setTitle(pinnedRepos);
                })
            // const json = res.json();
            // setTitle(json);
        };
        fetchData();
    }, []);

    return (
        <div className="box-container">
            {title.map(item => (
            <div class="github-pinned-repo">
                <div class="github-pinned-repo-left">
                    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="Github logo" />
                </div>
                <div class="github-pinned-repo-right">
                    <h3>{item.name}</h3>
                    <div class="github-pinned-repo-details">
                        <span class="language">JavaScript</span>
                        <span class="stars">★ 123</span>
                    </div>
                    <p>A brief description of my pinned repository</p>
                </div>
            </div>
           ))}
        </div>
        // <div className="box-container">
        //     {title.map(item => (
        //         <div class="box">
        //             <div class="pin-text">
        //                 <h3 key={item.id}>{item.name}</h3>
        //                 <p>Description</p>
        //             </div>
        //         </div>
        //     ))}

        // </div>);
    );
}

export default Box;