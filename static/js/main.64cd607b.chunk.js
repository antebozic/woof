(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(4),i=t.n(c),o=(t(15),t(2)),s=t(5),d=t(6),l=t(8),u=t(7),m=t(9),g=t(1),b=(t(17),function(e){var a=e.onNewGame,t=e.isFin,n=e.attempts,c=e.duration;return t?r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement("a",null,r.a.createElement("span",{className:"results2"},n)," attempts in ",r.a.createElement("span",{className:"results2"},c)," sec, Woof",r.a.createElement("span",{className:"results1"},"!"))),r.a.createElement("nav",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:a,className:"btn",id:"slide"},"New Game")))):r.a.createElement("header",null,r.a.createElement("h2",null,r.a.createElement("a",null,"Woof Woof Memory Game")),r.a.createElement("nav",null,r.a.createElement("li",null,r.a.createElement("a",{onClick:a,className:"btn",id:"slide"},"New Game"))))}),k=(t(19),function(e){var a={};return e.showing&&(a.backgroundImage="url(".concat(e.backgroundImage,")")),e.opacity&&(a.filter="grayscale(100%)",a.border=".18rem solid #000",a.opacity=".9"),r.a.createElement("div",{onClick:e.onClick,className:"card-container",style:a})}),h=(t(21),function(e){return r.a.createElement("div",{className:"bg"},r.a.createElement("div",{id:"dog"},r.a.createElement("div",{className:"head"},r.a.createElement("div",{className:"mask mask-head"},r.a.createElement("div",{className:"nose"}),r.a.createElement("div",{className:"eye"})),r.a.createElement("div",{className:"ear"})),r.a.createElement("div",{className:"body"},r.a.createElement("div",{className:"shirt"}),r.a.createElement("div",{className:"mask-body"},r.a.createElement("div",{className:"leg"})),r.a.createElement("div",{className:"foot"})),r.a.createElement("div",{className:"back-body"},r.a.createElement("div",{className:"mask-back-body"})),r.a.createElement("div",{className:"mask-tail"})),r.a.createElement("div",{className:"spinner"},r.a.createElement("div",{className:"bounce1"}),r.a.createElement("div",{className:"bounce2"}),r.a.createElement("div",{className:"bounce3"})))}),I=(t(23),{HIDDING:0,SHOWING:1,MATCHING:2}),f=function(e){function a(e){var t;Object(s.a)(this,a),t=Object(l.a)(this,Object(u.a)(a).call(this,e));var n=[{id:0,cardState:I.HIDING,backgroundColor:"red",backgroundImage:""},{id:1,cardState:I.HIDING,backgroundColor:"red",backgroundImage:""},{id:2,cardState:I.HIDING,backgroundColor:"navy",backgroundImage:""},{id:3,cardState:I.HIDING,backgroundColor:"navy",backgroundImage:""},{id:4,cardState:I.HIDING,backgroundColor:"yellow",backgroundImage:""},{id:5,cardState:I.HIDING,backgroundColor:"yellow",backgroundImage:""},{id:6,cardState:I.HIDING,backgroundColor:"green",backgroundImage:""},{id:7,cardState:I.HIDING,backgroundColor:"green",backgroundImage:""},{id:8,cardState:I.HIDING,backgroundColor:"black",backgroundImage:""},{id:9,cardState:I.HIDING,backgroundColor:"black",backgroundImage:""},{id:10,cardState:I.HIDING,backgroundColor:"purple",backgroundImage:""},{id:11,cardState:I.HIDING,backgroundColor:"purple",backgroundImage:""},{id:12,cardState:I.HIDING,backgroundColor:"pink",backgroundImage:""},{id:13,cardState:I.HIDING,backgroundColor:"pink",backgroundImage:""},{id:14,cardState:I.HIDING,backgroundColor:"lightsky",backgroundImage:""},{id:15,cardState:I.HIDING,backgroundColor:"lightsky",backgroundImage:""},{id:16,cardState:I.HIDING,backgroundColor:"brown",backgroundImage:""},{id:17,cardState:I.HIDING,backgroundColor:"brown",backgroundImage:""},{id:18,cardState:I.HIDING,backgroundColor:"white",backgroundImage:""},{id:19,cardState:I.HIDING,backgroundColor:"white",backgroundImage:""}];return n=t.shuffle(n),t.state={cards:n,noClick:!1,isVis:!0,isFin:!1,width:0,timestart:void 0,attempts:void 0,duration:void 0,click:0,isMob:!1},t.handleClick=t.handleClick.bind(Object(g.a)(Object(g.a)(t))),t.handleNewGame=t.handleNewGame.bind(Object(g.a)(Object(g.a)(t))),t.getAllDogs=t.getAllDogs.bind(Object(g.a)(Object(g.a)(t))),t.shuffle=t.shuffle.bind(Object(g.a)(Object(g.a)(t))),t.updatedWindowDimensions=t.updatedWindowDimensions.bind(Object(g.a)(Object(g.a)(t))),t.mobileCheck=t.mobileCheck.bind(Object(g.a)(Object(g.a)(t))),t}return Object(m.a)(a,e),Object(d.a)(a,[{key:"mobileCheck",value:function(){"undefined"!==typeof window.orientation&&this.setState({isMob:!0})}},{key:"updatedWindowDimensions",value:function(){if(window.innerWidth<520){var e=this.state.cards.filter(function(e){return"white"!==e.backgroundColor});this.setState({cards:e,width:window.innerWidth})}else if(window.innerWidth>520&&20!==this.state.cards.length){var a=this.state.cards;a.push({id:18,cardState:I.HIDING,backgroundColor:"white",backgroundImage:""},{id:19,cardState:I.HIDING,backgroundColor:"white",backgroundImage:""}),this.setState({cards:a,width:window.innerWidth})}}},{key:"shuffle",value:function(e){var a,t,n;for(a=e.length-1;a>0;a--)t=Math.floor(Math.random()*(a+1)),n=e[a],e[a]=e[t],e[t]=n;return e}},{key:"getAllDogs",value:function(){for(var e=this,a=[],t=0;t<10;t++)fetch("https://dog.ceo/api/breeds/image/random").then(function(e){return e.json()}).then(function(e){return a.push(e.message)});setTimeout(function(){var t=e.state.cards.map(function(e){switch(e.backgroundColor){case"red":return Object(o.a)({},e,{backgroundImage:a[0]});case"navy":return Object(o.a)({},e,{backgroundImage:a[1]});case"yellow":return Object(o.a)({},e,{backgroundImage:a[2]});case"green":return Object(o.a)({},e,{backgroundImage:a[3]});case"black":return Object(o.a)({},e,{backgroundImage:a[4]});case"purple":return Object(o.a)({},e,{backgroundImage:a[5]});case"pink":return Object(o.a)({},e,{backgroundImage:a[6]});case"lightsky":return Object(o.a)({},e,{backgroundImage:a[7]});case"brown":return Object(o.a)({},e,{backgroundImage:a[8]});case"white":return Object(o.a)({},e,{backgroundImage:a[9]});default:return e}});e.setState({cards:t,isVis:!1})},3e3)}},{key:"componentDidMount",value:function(){this.mobileCheck(),this.getAllDogs(),this.updatedWindowDimensions(),window.addEventListener("resize",this.updatedWindowDimensions)}},{key:"handleNewGame",value:function(){var e=this;this.setState({isVis:!0}),setTimeout(function(){e.setState({isVis:!1})},3e3);var a=this.state.cards.map(function(e){return Object(o.a)({},e,{cardState:I.HIDING})});a=this.shuffle(a),this.setState({cards:a,timestart:void 0,isFin:!1,duration:void 0,attempts:void 0,click:0}),this.getAllDogs()}},{key:"handleClick",value:function(e){var a=this;this.setState(function(e,a){return{click:e.click+1}}),1===this.state.click&&this.setState({timestart:Math.round((new Date).getTime()/1e3)});var t=function(e,a,t){return e.map(function(e){return a.includes(e.id)?Object(o.a)({},e,{cardState:t}):e})},n=this.state.cards.find(function(a){return a.id===e});if(!this.state.noClick&&n.cardState===I.HIDING){var r=!1,c=t(this.state.cards,[e],I.SHOWING),i=c.filter(function(e){return e.cardState===I.SHOWING}),s=i.map(function(e){return e.id});if(2===i.length&&i[0].backgroundColor===i[1].backgroundColor)c=t(this.state.cards,s,I.MATCHING);else if(2===i.length){var d=t(this.state.cards,s,I.HIDING);r=!0,this.setState({cards:c,noClick:r},function(){setTimeout(function(){a.setState({cards:d,noClick:!1})},1200)})}if(c.filter(function(e){return e.cardState===I.MATCHING}).length===c.length){var l=Math.round((new Date).getTime()/1e3)-this.state.timestart,u=Math.round(this.state.click/2);this.setState({duration:l,attempts:u,isFin:!0},function(){console.log(a.state.duration),console.log(a.state.attempts)})}this.setState({cards:c,noClick:r})}}},{key:"render",value:function(){var e=this,a=t(25),n=a("load",{hide:!this.state.isVis,show:this.state.isVis}),c=a({hideWar:!this.state.isMob,showWar:this.state.isMob}),i=this.state.cards.map(function(a){return r.a.createElement(k,{key:a.id,opacity:a.cardState===I.MATCHING,showing:a.cardState!==I.HIDING,backgroundColor:a.backgroundColor,backgroundImage:a.backgroundImage,onClick:function(){return e.handleClick(a.id)}})}),o={};return this.state.isVis?this.state.isVis&&(o.display="none"):o.display="grid",r.a.createElement("div",{className:"container"},r.a.createElement(b,{onNewGame:this.handleNewGame,isFin:this.state.isFin,duration:this.state.duration,attempts:this.state.attempts}),r.a.createElement("div",{className:"content"},r.a.createElement("div",{className:"cardsContainer",style:o},i)),r.a.createElement("div",{className:n},r.a.createElement(h,null)),r.a.createElement("div",{className:c},r.a.createElement("h2",null,"Turn device in portrait mode! Woof!")))}}]),a}(n.Component);i.a.render(r.a.createElement(f,null),document.getElementById("root"))}],[[10,2,1]]]);
//# sourceMappingURL=main.64cd607b.chunk.js.map