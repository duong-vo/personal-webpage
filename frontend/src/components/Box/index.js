import './index.css'
import React, { useState, useEffect } from 'react';

const Box = () => {
    const [title, setTitle] = useState([]);
    // hard coded pinned ids
    const pinnedIds = [564903106, 594309823, 560730978,589031379,591131178,541322654];
    var pinnedRepos = []
    useEffect(() => {
        const fetchData = () => {
            const res = fetch(`https://api.github.com/users/duong-vo/repos`) // return a promise
                                   .then(res => { return res.json()}) // also return a promise
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
        <div>
            {title.map(item => (
                <div class="box">
                    <div class="pin-text">
                        <li key={item.id}>{item.name}</li>
                        <p>Description</p>
                    </div>
                </div>
            ))}

        </div>);
}

export default Box;