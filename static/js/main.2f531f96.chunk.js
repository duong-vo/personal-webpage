(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(45)},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){},31:function(e,t,a){},43:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),s=(a(25),a(27),a(16)),o=(a(29),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],r=[564903106,594309823,560730978,589031379,591131178,541322654],o=[];return Object(n.useEffect)(function(){fetch("https://api.github.com/users/duong-vo/repos").then(function(e){return e.json()}).then(function(e){o=[];for(var t=0;t<e.length;t++)console.log(e[t]),-1!=r.indexOf(e[t].id)&&o.push(e[t]);console.log(o),c(o)})},[]),l.a.createElement("div",{className:"box-container"},a.map(function(e){return l.a.createElement("a",{href:e.html_url,style:{textDecoration:"none"}},l.a.createElement("div",{class:"github-pinned-repo"},l.a.createElement("div",{class:"github-pinned-repo-left"},l.a.createElement("img",{src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",alt:"Github logo"})),l.a.createElement("div",{class:"github-pinned-repo-right"},l.a.createElement("h3",null,e.name),l.a.createElement("div",{class:"github-pinned-repo-details"},l.a.createElement("span",{class:"language"},e.language),l.a.createElement("span",{class:"stars"},"\u2605 ",e.stargazers_count)),l.a.createElement("p",null,e.description))))}))}),i=(a(31),a(15)),m=function(e){var t=Object(n.useRef)(null);return l.a.createElement("html",null,l.a.createElement("head",null,l.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css",integrity:"sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==",crossorigin:"anonymous"})),l.a.createElement("body",null,l.a.createElement("div",{class:"about-wrapper"},l.a.createElement("div",{class:"about-left"},l.a.createElement("div",{class:"about-left-content"},l.a.createElement("div",null,l.a.createElement("div",{class:"shadow"},l.a.createElement("div",{class:"about-img"},l.a.createElement("a",{href:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"},l.a.createElement("img",{src:"images/about_me.jpg",alt:"about image"})))),l.a.createElement("h2",null,"Duong",l.a.createElement("br",null),"Vo"),l.a.createElement("h3",null,"Miami University")),l.a.createElement("ul",{class:"icons"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.github.com/duong-vo/"},l.a.createElement("i",{class:"fab fa-github"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/duonghvo/"},l.a.createElement("i",{class:"fab fa-linkedin"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.facebook.com/profile.php?id=100041889491894"},l.a.createElement("i",{class:"fab fa-facebook-f"}))),l.a.createElement("li",null,l.a.createElement("a",null,l.a.createElement("i",{class:"fab fa-instagram"})))))),l.a.createElement("div",{class:"about-right"},l.a.createElement("h1",null,"\ud83d\udc4bHI",l.a.createElement("span",null,"!")),l.a.createElement("h2",null,"Great to see you"),l.a.createElement("div",{class:"about-btns"},l.a.createElement("a",{href:"mailto:duong.kej@gmail.com"},l.a.createElement("button",{type:"button",class:"btn btn-pink"},"contact")),l.a.createElement("button",{type:"button",class:"btn btn-white",onClick:function(){t.current.scrollIntoView({behavior:"smooth",block:"start"})}},"projects"),l.a.createElement(i.Element,{name:"Box"},l.a.createElement("div",{ref:t}))),l.a.createElement("div",{class:"about-para"},l.a.createElement("p",null,"I'm a computer science Major at Miami University and an aspiring software engineer who loves to explore the software world."),l.a.createElement("p",null,"Please check out my projects, I hope you find it interesting!"))))))},u=(a(43),function(){return l.a.createElement("div",{className:"footer"},l.a.createElement("p",{className:"footer-text"},"\xa9 ",(new Date).getFullYear()," Duong Vo | All rights reserved"))}),E=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement(m,null),l.a.createElement("main",{className:"main"},l.a.createElement(o,null)),l.a.createElement(u,null))},f=function(){return l.a.createElement("body",null,l.a.createElement(E,null))};r.a.render(l.a.createElement(f,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.2f531f96.chunk.js.map