import './index.css'
import React, { useState, useEffect } from 'react';

const Box = () => {
    const [title, setTitle] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch(`https://api.github.com/users/duong-vo/repos`)
                .then(response => response.json())
                .then(repositories => {
                    const pinnedRepos = repositories.filter(repo => repo.isPinned);
                    console.log(pinnedRepos);
                })
                .catch(error => console.error(error));
            const json = await res.json();
            setTitle(json);
        };
        fetchData();
    }, []);

    return (
        <div class="box">
            <div class="pin-text">
                {title.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
                <p>Description</p>
            </div>
        </div>
    );
}

export default Box;