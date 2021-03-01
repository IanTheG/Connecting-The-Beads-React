(this["webpackJsonpconnecting-the-beads"]=this["webpackJsonpconnecting-the-beads"]||[]).push([[0],{40:function(e,t,s){},70:function(e,t,s){"use strict";s.r(t);var c=s(1),r=s(28),a=s(8),n=(s(40),s(2)),i=function(){var e=Array.from(document.querySelectorAll(".container")),t=new IntersectionObserver((function(e){e.forEach((function(e){var t=e.target;e.intersectionRatio>=.75?t.classList.add("is-visible"):t.classList.remove("is-visible")}))}),{rootMargin:"0px",threshold:.75});e.forEach((function(e,s){var c=e.children;c&&(Array.from(c).forEach((function(e,t){e.style.setProperty("--delay","".concat(250*t,"ms"))})),t.observe(e))}))},o=s(0),l=function(){return Object(c.useEffect)((function(){var e;document.getElementById("root").style.backgroundImage="none",null===(e=document.getElementById("top-container"))||void 0===e||e.scrollIntoView(!0),i()})),Object(o.jsxs)("div",{id:"top-container",className:"container",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"title",style:{textAlign:"center"},children:"Connecting The Beads"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{className:"settings-container",children:Object(o.jsx)("div",{})}),Object(o.jsx)("p",{className:"desc desc--home",children:"This mobile\u2013friendly web app is a Rosary companion designed to help you pray and meditate with scripture and religious artwork."}),Object(o.jsx)("p",{className:"desc desc--home",children:"\u201fThe repetition in the Rosary is meant to lead one into restful and contemplative prayer related to each Mystery. The gentle repetition of the words helps us to enter into the silence of our hearts, where Christ's spirit dwells. The Rosary can be said privately or with a group.\u201d"}),Object(o.jsx)("p",{className:"desc desc--home",children:"Scroll down to advance to the next section, or scroll up to go back."})]})]})},d=s(11),h=s(16),j=s.n(h),b=["I believe in God, the Father almighty,\nCreator of heaven and earth,\nand in Jesus Christ, his only Son, our Lord,\nwho was conceived by the Holy Spirit,\nborn of the Virgin Mary,\nsuffered under Pontius Pilate,\nwas crucified, died and was buried;\nhe descended into hell;\non the third day he rose again from the dead;\nhe ascended into heaven,\nand is seated at the right hand of God the Father almighty;\nfrom there he will come to judge the living and the dead.\nI believe in the Holy Spirit,\nthe holy catholic Church,\nthe communion of saints,\nthe forgiveness of sins,\nthe resurrection of the body,\nand life everlasting.\nAmen."],m="In the name of The Father, The Son, and The Holy Spirit. Amen.",y=["Our Father, who art in heaven, hallowed be thy name; thy kingdom come; thy will be done on earth, as it is in heaven.","Give us this day our daily bread; and forgive our trespasses, as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil.","Amen."],u=["Hail Mary, full of grace; the Lord is with thee; blessed art thou among women, and blessed is the fruit of your womb, Jesus.","Holy, Mary, Mother of God, pray for us sinners, now and at the hour of our death.","Amen."],p=["Glory be to the Father, and to the Son, and to the Holy Spirit.","As it was in the beginning, is now, and ever shall be, world without end.","Amen."],O=["Hail Holy Queen, Mother of Mercy, our Life, our Sweetness, and our hope. To thee we cry, poor banished children of Eve. To thee we send up our sighs, mourning and weeping in this vale of tears.","Turn then most gracious advocate, Thine eyes of mercy toward us, and after this, our exile, show unto us, the blessed fruit of thy womb, Jesus. O clement, O loving, O sweet Virgin Mary.","Pray for us O Holy Mother of God,","That we may be made worthy of the promises of Christ."],x=["Let us pray.","O God, whose only begotten Son, by His life, death, and resurrection, has purchased for us the rewards of eternal life, grant, we beseech Thee, that meditating upon these mysteries of the Most Holy Rosary of the Blessed Virgin Mary, we may imitate what they contain and obtain what they promise, through the same Christ Our Lord.","Amen."],f=["Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil.","May God rebuke him, we humbly pray; And do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all evil spirits who prowl about the world seeking the ruin of souls.","Amen."],v=function(){var e=Object(c.useState)(!1),t=Object(d.a)(e,2),s=t[0],r=t[1],a=Object(c.useState)(!1),n=Object(d.a)(a,2),i=n[0],l=n[1],h=document.getElementById("app"),b=function(e){e?(h.style.setProperty("--theme","#6A5188"),h.style.setProperty("--theme-invert","#967db4"),h.style.setProperty("--theme-prayer-section","rgba(106, 81, 136, 0.75)")):(h.style.setProperty("--theme","#967db4"),h.style.setProperty("--theme-invert","#6A5188"),h.style.setProperty("--theme-prayer-section","rgba(150, 125, 180, 0.75)"))},m=function(e){e?(h.style.setProperty("--prayer-long","none"),h.style.setProperty("--prayer-short","block")):(h.style.setProperty("--prayer-long","block"),h.style.setProperty("--prayer-short","none"))};return Object(c.useEffect)((function(){b(h.classList.contains("dark-mode")),m(!1)}),[]),Object(o.jsxs)("div",{className:"container",style:{display:"grid",gridTemplateRows:"auto auto auto auto 1fr auto"},children:[Object(o.jsx)("h2",{className:"title",children:"About"}),Object(o.jsx)("p",{className:"desc",children:"This web app is created by Ian Goodwin, a web developer, jazz saxophonist, Catholic, and dreamer."}),Object(o.jsxs)("p",{className:"desc",children:["If you have any issues with Connecting The Beads or would like to contact me, ",Object(o.jsx)("a",{className:"desc desc--link",href:"https://www.facebook.com/profile.php?id=100013351997843",target:"_blank",rel:"noreferrer",children:"message me on Facebook."})]}),Object(o.jsx)("p",{className:"desc",children:"Note, this web app requires a modern smartphone and updated web browser (at least iOS 12.2 or Chrome 51 on Android)."}),Object(o.jsxs)("div",{className:"switch-container switch-container--top",children:[Object(o.jsxs)("label",{className:"switch-container",children:[Object(o.jsx)("span",{className:"desc desc--switch",style:{display:"flex",alignItems:"center"},children:s?Object(o.jsx)("i",{className:"far fa-moon",style:{fontSize:"1.5rem"}}):Object(o.jsx)("i",{className:"fas fa-sun",style:{fontSize:"1.5rem"}})}),Object(o.jsx)(j.a,{onChange:function(e){b(e),r(!s),h.classList.toggle("dark-mode")},checked:h.classList.contains("dark-mode"),uncheckedIcon:!1,checkedIcon:!1,className:"switch"})]}),Object(o.jsxs)("label",{className:"switch-container",children:[Object(o.jsx)("span",{className:"desc desc--switch",style:{display:"flex",alignItems:"center"},children:i?Object(o.jsx)("i",{className:"fas fa-minus",style:{fontSize:"1.5rem"}}):Object(o.jsx)("i",{className:"fas fa-bars",style:{fontSize:"1.5rem"}})}),Object(o.jsx)(j.a,{onChange:function(e){l(!i),m(e)},checked:i,uncheckedIcon:!1,checkedIcon:!1,className:"switch"})]})]}),Object(o.jsxs)("section",{className:"prayer--section",children:[Object(o.jsx)("div",{className:"prayer--short",children:Object(o.jsx)("p",{className:"prayer prayer--top",style:{fontSize:"1.2rem"},children:"Hail Mary..."})}),Object(o.jsxs)("div",{className:"prayer--long",children:[Object(o.jsx)("p",{className:"prayer prayer--top",children:u[0]}),Object(o.jsx)("p",{className:"prayer",children:u[1]}),Object(o.jsx)("p",{className:"prayer",children:"Amen."})]})]})]})},N=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Praying The Rosary"}),Object(o.jsx)("p",{className:"desc desc--tight",children:"\u201fThe Rosary is a Scripture-based prayer. It begins with the Apostles' Creed, which summarizes the great mysteries of the Catholic faith. The Our Father, which introduces each mystery, is from the Gospels. The first part of the Hail Mary is the angel's words announcing Christ's birth and Elizabeth's greeting to Mary. St. Pius V officially added the second part of the Hail Mary. The Mysteries of the Rosary center on the events of Christ's life. There are four sets of Mysteries: Joyful, Sorrowful, Glorious and\u2013\u2013added by Saint John Paul II in 2002\u2013\u2013the Luminous.\u201d"}),Object(o.jsx)("div",{className:"hero-line"}),Object(o.jsx)("p",{className:"desc desc--guide",children:Object(o.jsx)("b",{children:"This web app will guide you through every prayer in the Rosary."})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"subtitle",children:"Opening Prayers"}),Object(o.jsxs)("p",{className:"prayer prayer--top",children:["Begin by making the ",Object(o.jsx)("b",{children:"Sign of The Cross."})]}),Object(o.jsx)("p",{className:"prayer",children:m})]})]})},g=function(){return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"title title--clear",children:"The Apostle's Creed"}),Object(o.jsx)("div",{className:"hero-line"})]}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"desc",children:["Say the ",Object(o.jsx)("b",{children:"Apostle's Creed."})]}),Object(o.jsx)("p",{className:"prayer prayer--tight",children:b})]})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"title title--clear",children:"Our Father"}),Object(o.jsx)("div",{className:"hero-line"})]}),Object(o.jsx)("section",{className:"prayer--section",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"desc",children:["Say the ",Object(o.jsx)("b",{children:"Our Father."})]}),Object(o.jsx)("p",{className:"desc desc--italic",children:"For our Holy Father, Pope Francis."}),y.map((function(e,t){return Object(o.jsx)("p",{className:"prayer",children:e},t)}))]})})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"title title--clear",children:"Hail Mary"}),Object(o.jsx)("div",{className:"hero-line"})]}),Object(o.jsx)("section",{className:"prayer--section",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"desc",children:["Say three ",Object(o.jsx)("b",{children:"Hail Mary's."})]}),Object(o.jsx)("p",{className:"desc desc--italic",children:"For the increase of the virtues of Faith, Hope, and Charity."}),u.map((function(e,t){return Object(o.jsx)("p",{className:"prayer",children:e},t)}))]})})]}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"title title--clear",children:"Glory Be"}),Object(o.jsx)("div",{className:"hero-line"})]}),Object(o.jsx)("section",{className:"prayer--section",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"desc",children:["Say the ",Object(o.jsx)("b",{children:"Glory Be."})]}),p.map((function(e,t){return Object(o.jsx)("p",{className:0==t?"prayer prayer--top":"prayer",children:e},t)}))]})})]})]})},w=function(){var e=(new Date).getDay();return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Mysteries"}),Object(o.jsx)(a.b,{className:"link",to:{pathname:"/glorious",state:{decade:0}},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"mystery",children:"Glorious"}),Object(o.jsx)("p",{className:"desc desc--day ".concat(0===e?"current-day":""),children:"Sunday"}),Object(o.jsx)("p",{className:"desc desc--day ".concat(3===e?"current-day":""),children:"Wednesday"})]})}),Object(o.jsx)(a.b,{className:"link",to:{pathname:"/joyful",state:{decade:0}},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"mystery",children:"Joyful"}),Object(o.jsx)("p",{className:"desc desc--day ".concat(1===e?"current-day":""),children:"Monday"}),Object(o.jsx)("p",{className:"desc desc--day ".concat(6===e?"current-day":""),children:"Saturday"})]})}),Object(o.jsx)(a.b,{className:"link",to:{pathname:"/sorrowful",state:{decade:0}},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"mystery",children:"Sorrowful"}),Object(o.jsx)("p",{className:"desc desc--day ".concat(2===e?"current-day":""),children:"Tuesday"}),Object(o.jsx)("p",{className:"desc desc--day ".concat(5===e?"current-day":""),children:"Friday"})]})}),Object(o.jsx)(a.b,{className:"link",to:{pathname:"/luminous",state:{decade:0}},children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"mystery",children:"Luminous"}),Object(o.jsx)("p",{className:"desc desc--day ".concat(4===e?"current-day":""),children:"Thursday"})]})})]})},k=function(){return Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("h2",{className:"title",children:"Copyright"}),Object(o.jsx)("div",{}),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"subtitle",style:{marginBottom:"1rem"},children:"Links to Quotes and Copyrighted Images"}),Object(o.jsx)("a",{className:"desc",href:"https://thenounproject.com/tivilupercio/",target:"_blank",rel:"noreferrer",style:{color:"inherit"},children:"Rosary favicon by Tivi Lupercio Ordo\xf1ez"}),Object(o.jsx)("br",{}),Object(o.jsx)("a",{className:"desc",href:"https://www.usccb.org/how-to-pray-the-rosary",target:"_blank",rel:"noreferrer",style:{color:"inherit"},children:"How to Pray the Rosary from the USCCB"}),Object(o.jsx)("br",{})]}),Object(o.jsx)("p",{className:"desc",children:"Copyright Ian G 2021"})]})},S=s(10),C=s.n(S),T=s(13),I=s(19),E={id:0,name:"",number:"",image:"",fruits:"",scenes:[]},M=s(31),A=s.n(M),H=["glorious","joyful","sorrowful","luminous"],P=function(e){return H.some((function(t){return e.toLowerCase().includes(t)}))},F=function(){var e=Object(T.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!P(t)){e.next=4;break}return e.next=3,A.a.get("https://zv6e2w4wx5.execute-api.us-east-1.amazonaws.com/mysteries/".concat(t));case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),B=function(e){var t=e.scene,s=e.index;return Object(o.jsx)("div",{className:"container",children:Object(o.jsxs)("section",{className:"verse",children:[Object(o.jsx)("div",{className:"hail-mary-number",children:Object(o.jsx)("div",{className:"hail-mary-number__text",children:Object(o.jsx)("p",{children:s})})}),Object(o.jsx)("p",{className:"prayer prayer--top scene-item",children:t.verse}),Object(o.jsx)("p",{className:"prayer desc--italic scene-item",children:t.ref})]})})},L=function(e){var t=e.currentDecade;return Object(c.useEffect)((function(){var e,t=null===(e=document.getElementById("mysteryName"))||void 0===e?void 0:e.offsetHeight;document.querySelectorAll(".verse").forEach((function(e){e.style.marginTop="".concat(t,"px")})),i()})),Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{id:"mysteryName",className:"subtitle sticky--top",children:t.name}),t.scenes.map((function(e,t){return Object(o.jsx)(B,{scene:e,index:t+1},t)})),Object(o.jsxs)("section",{className:"prayer--section sticky--bottom",children:[Object(o.jsx)("div",{className:"prayer--short",children:Object(o.jsx)("p",{className:"prayer prayer--top",style:{fontSize:"1.2rem"},children:"Hail Mary..."})}),Object(o.jsxs)("div",{className:"prayer--long",children:[Object(o.jsx)("p",{className:"prayer prayer--top",children:u[0]}),Object(o.jsx)("p",{className:"prayer",children:u[1]}),Object(o.jsx)("p",{className:"prayer",children:"Amen."})]})]})]})},G=function(e){var t=e.mysteryName,s=e.currentDecade,r=Object(n.f)(),a=Object(n.g)().state;Object(c.useEffect)((function(){var e;document.getElementById("root").style.backgroundImage="url(".concat(s.image,")"),null===(e=document.getElementById("top-container"))||void 0===e||e.scrollIntoView(!0),i()}));return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"top-container",className:"container",children:[Object(o.jsxs)("section",{children:[Object(o.jsxs)("h2",{className:"subtitle",children:["The ",s.number," ",t.charAt(0).toUpperCase()+t.slice(1)," Mystery is ",s.name]}),Object(o.jsxs)("p",{className:"subtitle",style:{fontStyle:"italic",paddingTop:"0"},children:["Fruits of the mystery: ",s.fruits,"."]})]}),Object(o.jsxs)("section",{className:"prayer--section",children:[Object(o.jsx)("div",{className:"prayer--short",children:Object(o.jsx)("p",{className:"prayer prayer--top",style:{fontSize:"1.2rem"},children:"Our Father..."})}),Object(o.jsxs)("div",{className:"prayer--long",children:[Object(o.jsx)("p",{className:"prayer prayer--top",children:y[0]}),Object(o.jsx)("p",{className:"prayer",children:y[1]}),Object(o.jsx)("p",{className:"prayer",children:y[2]})]})]})]}),Object(o.jsx)(L,{currentDecade:s}),Object(o.jsxs)("div",{id:"bottom-container",className:"container",children:[Object(o.jsx)("section",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"title title--clear",children:"Glory Be"}),Object(o.jsx)("div",{className:"hero-line"}),Object(o.jsx)("p",{className:"prayer prayer--top",children:p[0]}),Object(o.jsx)("p",{className:"prayer",children:p[1]}),Object(o.jsx)("p",{className:"prayer",children:p[2]})]})}),Object(o.jsx)("section",{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{className:"title title--clear",children:"Fatima Prayer"}),Object(o.jsx)("div",{className:"hero-line"}),Object(o.jsx)("p",{className:"prayer prayer--top",children:"O my Jesus, forgive us our sins, save us from the fires of hell. Lead all souls to Heaven, especially those in most need of thy mercy."})]})}),Object(o.jsx)("div",{className:"btn--container",children:Object(o.jsx)("button",{className:"btn",onClick:function(){if(a)if(a.decade<4){var e=a.decade+1;r.push(t,{decade:e})}else r.push("/closing-prayers");else r.push(t,{decade:1})},children:"Continue"})})]})]})},R=function(){var e=Object(n.f)(),t=Object(n.g)(),s=Object(I.a)(Object(I.a)({},t),{},{state:t.state?t.state:{decade:0}}),r=Object(n.h)().mystery,a=Object(c.useState)(),l=Object(d.a)(a,2),h=l[0],j=l[1],b=Object(c.useState)(E),m=Object(d.a)(b,2),y=m[0],u=m[1];return Object(c.useEffect)((function(){i();var t=!0;return t&&function(){var t=Object(T.a)(C.a.mark((function t(){var s;return C.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,F(r);case 2:(s=t.sent)?j(s.data):e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}()(),function(){t=!1}}),[]),Object(c.useEffect)((function(){h&&u(h.decades[s.state.decade])}),[h,s.state.decade]),h?Object(o.jsx)(G,{mysteryName:r,currentDecade:y}):Object(o.jsx)(z,{mysteryName:r})},z=function(e){var t=e.mysteryName;return Object(c.useEffect)((function(){i()})),Object(o.jsxs)("div",{className:"container",style:{alignItems:"center",justifyContent:"center"},children:[Object(o.jsxs)("h2",{className:"loading",style:{textAlign:"center",margin:"1rem"},children:["Loading the ",t.charAt(0).toUpperCase()+t.slice(1)," Mysteries"]}),Object(o.jsx)("div",{className:"hero-line"})]})},J=function(){var e=Object(n.f)();return Object(c.useEffect)((function(){var e;document.getElementById("root").style.backgroundImage="none",null===(e=document.getElementById("top-container"))||void 0===e||e.scrollIntoView(!0),i()})),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{id:"top-container",className:"container",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h2",{className:"subtitle",children:"Closing Prayers"})}),Object(o.jsx)("section",{className:"prayer--section",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"title title--clear",children:"Hail, Holy Queen"}),Object(o.jsx)("div",{className:"hero-line"}),O.map((function(e,t){return Object(o.jsx)("p",{className:0==t?"prayer prayer--top":"prayer",children:e},t)}))]})})]}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)("section",{className:"prayer--section",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"title title--clear",children:"Final Prayer"}),Object(o.jsx)("div",{className:"hero-line"}),x.map((function(e,t){return Object(o.jsx)("p",{className:0==t?"prayer prayer--top":"prayer",children:e},t)}))]})})}),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)("section",{className:"prayer--section",children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{className:"title title--clear",children:"St. Michael Prayer"}),Object(o.jsx)("div",{className:"hero-line"}),f.map((function(e,t){return Object(o.jsx)("p",{className:0==t?"prayer prayer--top":"prayer",children:e},t)}))]})}),Object(o.jsx)("section",{className:"prayer--section",children:Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"desc",children:["End the Rosary by making the ",Object(o.jsx)("b",{children:"Sign of The Cross."})]}),Object(o.jsx)("p",{className:"prayer",children:m})]})}),Object(o.jsx)("div",{className:"btn--container",children:Object(o.jsx)("button",{className:"btn",onClick:function(){return e.push("/")},children:"Home"})})]})]})},D=function(){var e=function(){document.documentElement.style.setProperty("--vh","".concat(window.innerHeight/100,"px"))};return window.addEventListener("load",e),window.addEventListener("resize",e),window.addEventListener("orientationchange",e),Object(o.jsx)("main",{id:"root",className:"scroll-container",children:Object(o.jsxs)(n.c,{children:[Object(o.jsxs)(n.a,{exact:!0,path:"/",children:[Object(o.jsx)(l,{}),Object(o.jsx)(v,{}),Object(o.jsx)(N,{}),Object(o.jsx)(g,{}),Object(o.jsx)(w,{}),Object(o.jsx)(k,{})]}),Object(o.jsx)(n.a,{exact:!0,path:"/closing-prayers",children:Object(o.jsx)(J,{})}),Object(o.jsx)(n.a,{path:"/:mystery",children:Object(o.jsx)(R,{})})]})})},V=s(32),_=s(33),U=s(35),q=s(34),Q=function(e){Object(U.a)(s,e);var t=Object(q.a)(s);function s(){var e;Object(V.a)(this,s);for(var c=arguments.length,r=new Array(c),a=0;a<c;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={hasError:!1,error:void 0},e}return Object(_.a)(s,[{key:"componentDidCatch",value:function(e,t){console.error("Uncaught error: ",e,t),this.setState({hasError:!0,error:e})}},{key:"render",value:function(){var e,t,s;return this.state.hasError?Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("h2",{className:"desc",children:"Sorry.. there was an error"}),Object(o.jsx)("p",{className:"desc",children:null===(e=this.state.error)||void 0===e?void 0:e.name}),Object(o.jsx)("p",{className:"desc",children:null===(t=this.state.error)||void 0===t?void 0:t.message}),Object(o.jsx)("p",{className:"desc",children:null===(s=this.state.error)||void 0===s?void 0:s.stack})]}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),s}(c.Component),W=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{id:"portrait",children:[Object(o.jsx)("p",{className:"desc",children:"Please rotate your device to portrait mode!"}),Object(o.jsxs)("div",{children:[Object(o.jsx)("i",{className:"fas fa-mobile-alt fa-rotate-90"}),Object(o.jsx)("i",{className:"fas fa-undo"}),Object(o.jsx)("i",{className:"fas fa-mobile-alt"})]})]})})},Y=function(){return Object(c.useEffect)((function(){i()})),Object(o.jsxs)("div",{id:"desktop-view",className:"container",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{className:"title title--desktop",children:"Connecting The Beads"}),Object(o.jsx)("p",{className:"desc desc--italic desc--desktop",style:{textAlign:"center"},children:"Rediscover the Rosary with Scripture and Meditation"})]}),Object(o.jsxs)("section",{className:"section--desktop",children:[Object(o.jsx)("p",{className:"desc desc--desktop",children:"This simple and elegant web app is designed to help newcomers and daily devotees pray the Rosary by allowing them to enter a deeper meditation on the lives of Jesus and Mary using relevant scripture verses and emotive images for each Mystery."}),Object(o.jsx)("img",{alt:"GIF of Connecting The Beads in action",src:""})]}),Object(o.jsx)("p",{className:"desc desc--desktop",children:"You can view Connecting The Beads (in portrait orientation) on any smartphone or tablet running at least iOS 12.2 or Chrome 51, or shrink your desktop browser to view the app."}),Object(o.jsx)("div",{className:"hero-line"}),Object(o.jsx)("p",{className:"desc desc--desktop",children:"Copyright Ian G 2021"})]})};Object(r.render)(Object(o.jsx)(a.a,{children:Object(o.jsxs)(Q,{children:[Object(o.jsx)(D,{}),Object(o.jsx)(W,{}),Object(o.jsx)(Y,{})]})}),document.getElementById("app"))}},[[70,1,2]]]);
//# sourceMappingURL=main.6fcc8d37.chunk.js.map