"use strict";(self.webpackChunkamr_diwan_web=self.webpackChunkamr_diwan_web||[]).push([[428],{9428:(y,d,s)=>{s.r(d),s.d(d,{HomeComponent:()=>x});var l=s(6814),m=s(95),_=s(7130),C=s(9310);const b=[{ImgSrc:"",ImgAlt:"",Title:"Years Of Experience",Number:"19+",Description:"",Link:"",TimeInterval:100},{ImgSrc:"",ImgAlt:"",Title:"Projects",Number:"17+",Description:"",Link:"",TimeInterval:70},{ImgSrc:"",ImgAlt:"",Title:"Countries",Number:"5+",Description:"",Link:"",TimeInterval:500},{ImgSrc:"",ImgAlt:"",Title:"Meters",Number:"7000+",Description:"",Link:"",TimeInterval:25},{ImgSrc:"",ImgAlt:"",Title:"Learn more",Number:">",Description:"",Link:"/"+_.s.About,TimeInterval:0}],u=[{ImgSrc:"assets/Images/Home-Projects/ALIF.webp",ImgAlt:"",Title:"ALIF STORES",Location:"Qatar",Description:"Creating a mural featuring Lionel Messi, Diego Maradon and Pel\xe9 as champions to celebrate iconic figures in football history.\nMatching the World Cup Vibes in Qatar.",Link:"alif"},{ImgSrc:"assets/Images/Home-Projects/FIFA.webp",ImgAlt:"",Title:"Fifa World Cup",Location:"Qatar",Description:"Exclusive artistry in Qatar World Cup 2022 Where passion meets art through our Graffiti at Al-thomama and Al-Janub Stadiums.\nNumber of walls: 2 walls at Al-thomama stadium 3 walls at Al-Jandub stadium.",Link:"fifa"},{ImgSrc:"assets/Images/Home-Projects/adidas.webp",ImgAlt:"",Title:"Adidas",Location:"Cairo Festival Mall - Egypt",Description:"The design incorporates the finest aspects of modern and ancient Egyptian art and architecture into a spectacular masterpiece in the center lays two main elements instantly grabing on attention diwan studios graffiti artwork and adidas trefoil centered in a perfect combination fading away the boundary between art and the everyday world.",Link:"adidas"},{ImgSrc:"assets/Images/Home-Projects/hsbc.webp",ImgAlt:"",Title:"HSBC",Location:"Cairo - Egypt",Description:'This is from the "Vision of Our City" campaign.\nThe idea of representing each location of the bank in\nthis project we worked on the headquarters in Cairo.\nIn the piece we include pixels and personalities that\ndepict the role of technology and a new female-led\ngeneration of entrepreneurs. This generation is putting\nsustainable initiatives first, represented by plants and the\nshape of the lotus; a symbol of rebirth.',Link:"hsbc"},{ImgSrc:"assets/Images/Home-Projects/money-fellows.webp",ImgAlt:"",Title:"Money Fellows",Location:"Cairo - Egypt",Description:"The graffiti drawn on the walls of their head offices in cairo took the walls to another place to keep up the positive vibes in the place.",Link:"moneyfellows"},{ImgSrc:"assets/Images/Home-Projects/AL-rayyan.webp",ImgAlt:"",Title:"Al Rayyan SC",Location:"Qatar",Description:"Graffiti work at the athlete gym of AlRayyanSC (The Lions) in Qatar and the release of the football team's new kitwith Nike football.",Link:"alrayyan"},{ImgSrc:"assets/Images/Home-Projects/meryal.webp",ImgAlt:"",Title:"Meryal Waterpark",Location:"Qatar",Description:"Our graffiti work for Meryal Waterpark. The tallest water slide in the world and the largest waterpark in Qatar.",Link:"meryal"},{ImgSrc:"assets/Images/Home-Projects/moosa.webp",ImgAlt:"",Title:"Al Moosa Rehab",Location:"Saudi Arabia",Description:"From blank walls to 1500 square meters of inspiration 30 days of creating a masterpiece for Almoosa Hospital. Every inch tells a story of hope and healing.",Link:"almoosarehab"}];var t=s(4946);const h=["videoPlayer"],v=function(r){return{clicked:r}};function f(r,P){if(1&r){const e=t.EpF();t.TgZ(0,"div",19),t.NdJ("click",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.FlipCard.onCardClick(i))}),t.TgZ(1,"label",20)(2,"input",21),t.NdJ("change",function(){const i=t.CHM(e).index,c=t.oxw();return t.KtG(c.FlipCard.onCheckboxChange(i))}),t.qZA(),t.TgZ(3,"div",22)(4,"div",23),t._UZ(5,"img",24)(6,"div",25),t.TgZ(7,"div",26)(8,"h1"),t._uU(9),t.qZA(),t.TgZ(10,"h5"),t._UZ(11,"i",27),t._uU(12),t.qZA()()(),t.TgZ(13,"div",28),t._UZ(14,"img",24)(15,"div",25),t.TgZ(16,"div",26)(17,"h4"),t._uU(18),t.qZA(),t.TgZ(19,"h5"),t._uU(20),t.qZA(),t.TgZ(21,"a",29),t._uU(22,"Learn More"),t.qZA()()()()()()}if(2&r){const e=P.$implicit,n=P.index,o=t.oxw();t.Tol("div"+(n+1)),t.Q6J("ngClass",t.VKq(13,v,n==o.CardCheckedIndex)),t.xp6(2),t.Q6J("checked",o.FlipCard.isChecked(n)),t.xp6(3),t.Q6J("src",e.ImgSrc,t.LSH)("alt",e.ImgAlt),t.xp6(4),t.Oqu(e.Title),t.xp6(3),t.hij(" ",e.Location,""),t.xp6(2),t.Q6J("src",e.ImgSrc,t.LSH)("alt",e.ImgAlt),t.xp6(4),t.Oqu(e.Title),t.xp6(2),t.Oqu(e.Description),t.xp6(1),t.Q6J("routerLink","/"+o.RoutePaths.ArtWorks+"/"+e.Link)}}let x=(()=>{class r{constructor(e){this.Router=e,this.RoutePaths=_.s,this.Stats=b,this.Projects=u,this.Animation={LandingText:()=>{const n=document.querySelector(".landing-text");n.classList.remove("landing-text-transition"),new IntersectionObserver(i=>{i.forEach(c=>{c.isIntersecting?n.classList.add("landing-text-transition"):n.classList.remove("landing-text-transition")})}).observe(n)},About:()=>{const n=document.querySelector(".about");n.classList.remove("about-transition"),new IntersectionObserver(i=>{i.forEach(c=>{c.isIntersecting?n.classList.add("about-transition"):n.classList.remove("about-transition")})}).observe(n)},Stat:()=>{const n=new IntersectionObserver(c=>{c.forEach(a=>{a.isIntersecting&&(function i(c){new Promise(a=>{const g=c.querySelector(".number"),O=parseInt(g.getAttribute("number")),j=parseInt(g.getAttribute("timeinterval"));let p=0;const M=setInterval(()=>{if(!O)return g.innerText=g.getAttribute("number"),clearInterval(M),void a();3==g.id?p+=100:p++,g.innerText=p,p>=O&&(4!=g.id&&(g.innerText+="+"),clearInterval(M),a())},j)})}(a.target),n.unobserve(a.target))})});document.querySelectorAll(".stat").forEach(c=>n.observe(c))},Projects:()=>{document.querySelectorAll(".project").forEach(o=>{o.classList.remove("project-transition"),new IntersectionObserver(c=>{c.forEach(a=>{a.isIntersecting?o.classList.add("project-transition"):o.classList.remove("project-transition")})}).observe(o)})}},this.BaseOpacity=.7,this.opacity=.7,this.FlipCard={onCheckboxChange:n=>{this.CardCheckedIndex=this.CardCheckedIndex===n?0:n},isChecked:n=>this.CardCheckedIndex===n,onCardHover:n=>{this.CardCheckedIndex=n},onCardLeave:n=>{0!==this.CardCheckedIndex&&this.CardCheckedIndex===n&&(this.CardCheckedIndex=0)},onCardClick:n=>{this.CardCheckedIndex==n?this.FlipCard.onCardLeave(n):this.FlipCard.onCardHover(n)}}}ngOnInit(){}ngAfterViewInit(){this.Animation.LandingText(),this.Animation.About(),this.Animation.Stat(),this.Animation.Projects(),this.playPauseVideo()}GotoStat(e){e&&this.Router.navigateByUrl(e)}playPauseVideo(){const e=this.videoPlayer.nativeElement;setTimeout(()=>{e.paused&&(e.muted=!0,e.play())},500)}onWindowScroll(){const e=window.scrollY||document.documentElement.scrollTop,n=window.innerHeight;this.opacity=Math.min(this.BaseOpacity+e/n/2.5,1)}static#t=this.\u0275fac=function(n){return new(n||r)(t.Y36(C.F0))};static#n=this.\u0275cmp=t.Xpm({type:r,selectors:[["ng-component"]],viewQuery:function(n,o){if(1&n&&t.Gf(h,5),2&n){let i;t.iGM(i=t.CRH())&&(o.videoPlayer=i.first)}},hostBindings:function(n,o){1&n&&t.NdJ("scroll",function(c){return o.onWindowScroll(c)},!1,t.Jf7)},standalone:!0,features:[t.jDz],decls:38,vars:3,consts:[[1,"page-inner"],[1,"page-section","video-div","p-0"],["preload","","loop","","autoplay","","muted","muted","playsinline","","type","video/mp4","src","assets/Videos/amr-cover-video.mp4",1,"video",2,"visibility","visible"],["videoPlayer",""],[1,"landing-overlay"],[1,"landing-text","text"],["src","assets/Images/amr-diwan-logo.png","alt","logo-img",2,"width","400px"],[1,""],[1,"scroll-down"],[1,"arrow1"],[1,"arrow2"],[1,"page-container"],[1,"page-section","no-min","about"],[1,"sub-title"],[1,"gold-text"],[1,"page-section","no-min","projects"],[1,"tab-content"],[1,"projects-listt"],["class","project-cover",3,"class","ngClass","click",4,"ngFor","ngForOf"],[1,"project-cover",3,"ngClass","click"],[1,"projectt"],["type","checkbox",3,"checked","change"],[1,"card"],[1,"frontCard"],[1,"img",3,"src","alt"],[1,"overlay-div"],[1,"overlay-text"],[1,"fa","fa-map-marker"],[1,"backCard"],[1,"btn","btn-primary",3,"routerLink"]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"section",1)(2,"video",2,3),t._uU(4," Your browser does not support the video tag. "),t.qZA(),t._UZ(5,"div",4),t.TgZ(6,"div",5),t._UZ(7,"img",6),t.TgZ(8,"h3",7),t._uU(9,"Graffiti and architecture design."),t.qZA(),t.TgZ(10,"h3",7),t._uU(11,"Bringing life to walls since 2004."),t.qZA()(),t.TgZ(12,"div",8),t._UZ(13,"div",9)(14,"div",10),t.qZA()(),t.TgZ(15,"div",11)(16,"section",12)(17,"div",13)(18,"h3"),t._uU(19,"About Amr Diwan"),t.qZA(),t.TgZ(20,"h4",14),t._uU(21,"Break the rules."),t.qZA(),t.TgZ(22,"p")(23,"strong"),t._uU(24,"Diwan"),t.qZA(),t._uU(25," has more than a passion for "),t.TgZ(26,"strong"),t._uU(27,"graffiti"),t.qZA(),t._uU(28,", he has a vision. With each stroke, "),t._UZ(29,"br"),t._uU(30," he adds a customized sense of personality to the final outcome. "),t._UZ(31,"br"),t.TgZ(32,"small"),t._uU(33," Whether it is his own or the vision of the brand he is currently working with. "),t.qZA()()()(),t.TgZ(34,"section",15)(35,"div",16)(36,"div",17),t.YNc(37,f,23,15,"div",18),t.qZA()()()()()),2&n&&(t.xp6(5),t.Udp("opacity",o.opacity),t.xp6(32),t.Q6J("ngForOf",o.Projects))},dependencies:[m.u5,l.ez,l.mk,l.sg,C.Bz,C.rH],styles:[".page-inner[_ngcontent-%COMP%]{background-size:cover;background-position:center;background-attachment:fixed;width:100%;top:0;left:0}.page-inner[_ngcontent-%COMP%]   .page-container[_ngcontent-%COMP%]{padding-top:50px;background-color:var(--primary-bg-color)}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch;text-align:center;padding-bottom:50px}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{text-transform:uppercase;margin:10px}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{max-width:600px;text-align:center;margin-bottom:20px;align-self:center}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%]{-webkit-text-fill-color:initial;margin-inline-start:10px;text-decoration:underline;color:var(--gold2)}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .learn-more[_ngcontent-%COMP%]:hover{color:var(--gold1)}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%]{transition:.5s;width:100%;height:100%;object-fit:cover}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,400px));grid-gap:50px 5px;justify-content:space-around;justify-items:center}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{transition:.5s}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .hoverable-img-item[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:250px;width:100%}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .hoverable-img-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.1)}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .hoverable-img-item[_ngcontent-%COMP%]:hover   .visible[_ngcontent-%COMP%]{display:block}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .hoverable-img-item[_ngcontent-%COMP%]   .visible[_ngcontent-%COMP%]{display:none;position:absolute;bottom:0;left:0;background-color:#0006;width:100%;text-align:center;padding:10px 0}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .overlay-img-item[_ngcontent-%COMP%]{position:relative;overflow:hidden;height:250px;width:100%}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .overlay-img-item[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05)}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .overlay-img-item[_ngcontent-%COMP%]   .visible[_ngcontent-%COMP%]{position:absolute;width:100%;height:100%;top:0;background-color:#00000080;display:flex;flex-direction:column;justify-content:center;align-items:center;font-size:22px}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{width:100%!important;border:none;-webkit-backdrop-filter:blur(12px) saturate(200%);backdrop-filter:blur(12px) saturate(200%);background-color:#1119286b;border-radius:12px;border:1px solid rgba(255,255,255,.125);color:var(--primary-font-color)}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{border-radius:0}.page-inner[_ngcontent-%COMP%]   .page-section[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .list[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]{text-align:start}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]{position:relative;overflow:hidden}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .video[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .landing-overlay[_ngcontent-%COMP%]{position:absolute;background-color:#040009;height:100%;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-left:50px}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .landing-text[_ngcontent-%COMP%]{text-align:start;padding-inline-start:5%;opacity:0;transform:translateY(50px);transition:all .6s ease-in}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .landing-text.landing-text-transition[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .landing-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:60px;font-weight:800}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%]{position:absolute;left:50%;bottom:0}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%]   .arrow1[_ngcontent-%COMP%]{width:1.5em;height:1.5em;background-color:transparent;z-index:80;bottom:25px;position:absolute;border-width:0 .25em .25em 0;border-style:solid;border-color:var(--gold1);animation:_ngcontent-%COMP%_scrolldown 1.2s ease-in-out infinite .15s}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%]   .arrow2[_ngcontent-%COMP%]{width:1.5em;height:1.5em;background-color:transparent;z-index:80;bottom:40px;position:absolute;border-width:0 .25em .25em 0;border-style:solid;border-color:var(--gold1);animation:_ngcontent-%COMP%_scrolldown 1.2s ease-in-out infinite}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .scroll-down[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{left:50%;transform:translateY(0) rotate(45deg);opacity:0}@keyframes _ngcontent-%COMP%_scrolldown{0%{transform:translateY(20%) rotate(45deg);opacity:.7}50%{transform:translateY(0) rotate(45deg);opacity:.2}to{transform:translateY(20%) rotate(45deg);opacity:.7}}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]{padding-top:50px;flex-direction:row;padding-left:15px;opacity:0;transform:translate(-20px);transition:all .6s ease-in}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .sub-title[_ngcontent-%COMP%]{font-size:20px;text-align:center}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]{width:100%;display:flex;flex-wrap:wrap;justify-content:space-around;padding:10px}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:10px;min-height:120px;width:50%}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat.stat-clickable[_ngcontent-%COMP%]{cursor:pointer}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%]{color:var(--gold1);font-size:60px;font-weight:600;transition:all .5s ease}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .number.meters[_ngcontent-%COMP%]{font-size:30px}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .number.bg[_ngcontent-%COMP%]{background-image:url(stat-cover-amr.bbdb4f10139663a5.png);background-size:cover;width:150px;height:150px;padding-bottom:12px;display:flex;justify-content:center;align-items:center}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{flex-grow:1;text-align:center;font-size:22px;opacity:0;transform:translateY(-50px);transition:all 1.5s ease}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .stat-title[_ngcontent-%COMP%]{font-weight:700;color:var(--primary-font-color)}.page-inner[_ngcontent-%COMP%]   .page-section.about[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]{font-size:12px;color:var(--secondary-font-color)}.page-inner[_ngcontent-%COMP%]   .page-section.about.about-transition[_ngcontent-%COMP%]{opacity:1;transform:translate(0)}.page-inner[_ngcontent-%COMP%]   .page-section.about.about-transition[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .stat-list[_ngcontent-%COMP%]   .stat[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{opacity:1;transform:translateY(0)}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(4,250px);grid-column-gap:0px;grid-row-gap:0px}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]{height:100%}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]:hover   .card[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .clicked[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{transform:rotateX(180deg)}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]{position:relative;perspective:1000px;transform-style:preserve-3d;display:block;width:100%;height:500px;overflow:hidden;cursor:pointer}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{display:none}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]{border:none;position:relative;height:100%;width:100%;transform-style:preserve-3d;transition:transform .6s}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover{transform:rotateX(180deg)}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .frontCard[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .backCard[_ngcontent-%COMP%]{height:100%;width:100%;position:absolute;text-align:center;backface-visibility:hidden;border-radius:2px;display:flex;align-items:center;justify-content:center;transform-origin:center;transform-style:preserve-3d}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .frontCard[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .frontCard[_ngcontent-%COMP%]   .overlay-div[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .backCard[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .backCard[_ngcontent-%COMP%]   .overlay-div[_ngcontent-%COMP%]{position:absolute;top:50%;left:50%;width:100%;height:150%;background:rgba(0,0,0,.5);transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);transform-style:preserve-3d}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .frontCard[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .backCard[_ngcontent-%COMP%]   .overlay-text[_ngcontent-%COMP%]{color:var(--primary-font-color);text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:70px;transform:translate(-50%,-50%) translateZ(80px) scale(.95);-webkit-transform:translate(-50%,-50%) translateZ(80px);transform-style:preserve-3d}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .project-cover[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .backCard[_ngcontent-%COMP%]{background:var(--primary-color1);color:var(--primary-font-color);transform:rotateX(180deg) translateZ(30px)}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div1[_ngcontent-%COMP%]{grid-area:1/1/2/2}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div2[_ngcontent-%COMP%]{grid-area:2/1/3/2}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div3[_ngcontent-%COMP%]{grid-area:1/2/3/3}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div4[_ngcontent-%COMP%]{grid-area:3/1/5/2}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div5[_ngcontent-%COMP%]{grid-area:3/2/4/3}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div6[_ngcontent-%COMP%]{grid-area:4/2/5/3}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div1[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div2[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div5[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%], .page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div6[_ngcontent-%COMP%]   .projectt[_ngcontent-%COMP%]{height:250px}@media (max-width: 576px){.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .landing-text[_ngcontent-%COMP%]{text-align:center;padding-inline-start:0}.page-inner[_ngcontent-%COMP%]   .page-section.video-div[_ngcontent-%COMP%]   .landing-text[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:300px!important}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]{grid-template-rows:repeat(8,250px);grid-template-columns:1fr;grid-column-gap:0px;grid-row-gap:0px}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div1[_ngcontent-%COMP%]{grid-area:1/1/2/2}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div2[_ngcontent-%COMP%]{grid-area:2/1/3/2}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div3[_ngcontent-%COMP%]{grid-area:3/1/5/2}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div4[_ngcontent-%COMP%]{grid-area:5/1/7/2}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div5[_ngcontent-%COMP%]{grid-area:7/1/8/2}.page-inner[_ngcontent-%COMP%]   .page-section.projects[_ngcontent-%COMP%]   .tab-content[_ngcontent-%COMP%]   .projects-listt[_ngcontent-%COMP%]   .div6[_ngcontent-%COMP%]{grid-area:8/1/9/2}}"]})}return r})()}}]);