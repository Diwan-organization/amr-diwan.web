"use strict";(self.webpackChunkamr_diwan_web=self.webpackChunkamr_diwan_web||[]).push([[349],{9349:(Z,C,r)=>{r.r(C),r.d(C,{InnerContainerModule:()=>T});var d=r(6814),M=r(95),l=r(9310),n=r(4946),i=r(7130);const v=["NavbarCollapse"],_=["navbar"],P=["dropdownMenu"];function O(t,g){if(1&t&&(n.TgZ(0,"span")(1,"a",31),n._uU(2),n.qZA()()),2&t){const o=g.$implicit;n.xp6(1),n.Q6J("routerLink",o.Link+"/"+o.Title.toLocaleLowerCase()),n.xp6(1),n.hij(" ",o.Title,"")}}function m(t,g){if(1&t&&(n.TgZ(0,"div",27)(1,"span",28)(2,"a",29),n._uU(3),n.qZA(),n.YNc(4,O,3,2,"span",30),n.qZA()()),2&t){const o=g.$implicit;n.xp6(3),n.Oqu(o.Title),n.xp6(1),n.Q6J("ngForOf",o.Links)}}function b(t,g){if(1&t){const o=n.EpF();n.TgZ(0,"a",37),n.NdJ("click",function(){n.CHM(o);const a=n.oxw(3);return n.KtG(a.closeNavbar())}),n._uU(1),n.qZA()}if(2&t){const o=n.oxw().$implicit;n.Q6J("routerLink",o.Link+"/"+o.Title.toLocaleLowerCase()),n.xp6(1),n.hij(" ",o.Title,"")}}function u(t,g){if(1&t&&(n.TgZ(0,"div"),n.YNc(1,b,2,2,"a",36),n.qZA()),2&t){const o=g.index;n.xp6(1),n.Q6J("ngIf",o<4)}}const s=function(t){return[t]};function h(t,g){if(1&t){const o=n.EpF();n.TgZ(0,"div",32)(1,"span",18)(2,"a",33),n.NdJ("click",function(){n.CHM(o);const a=n.oxw();return n.KtG(a.closeNavbar())}),n._uU(3),n.qZA(),n.TgZ(4,"span",34),n._UZ(5,"i",20)(6,"i",21),n.qZA(),n.TgZ(7,"div",35),n.YNc(8,u,2,1,"div",30),n.qZA()()()}if(2&t){const o=g.$implicit,e=g.index,a=n.oxw();n.xp6(2),n.Q6J("routerLink",n.VKq(5,s,a.RoutePaths.ArtWorks)),n.xp6(1),n.hij(" ",o.Title," "),n.xp6(1),n.MGl("id","dropdownMenu",e,""),n.xp6(3),n.Q2q("aria-labelledby","dropdownMenu",e,""),n.xp6(1),n.Q6J("ngForOf",o.Links)}}const f=function(){return["home"]};let w=(()=>{class t{constructor(o){this.Router=o,this.wasSmallScreen=window.innerWidth<=576,this.RoutePaths=i.s,this.ArtCategories=[{Title:"Qatar Projects",ImgAlt:"",Links:[{Title:"Meryal",Link:`${i.s.ArtWorks}`},{Title:"FIFA",Link:`${i.s.ArtWorks}`},{Title:"ALRAYYAN",Link:`${i.s.ArtWorks}`},{Title:"ALIF",Link:`${i.s.ArtWorks}`},{Title:"EAA",Link:`${i.s.ArtWorks}`}]},{Title:"EGYPT Projects",ImgAlt:"",Links:[{Title:"HSBC",Link:`${i.s.ArtWorks}`},{Title:"PUBG",Link:`${i.s.ArtWorks}`},{Title:"ADIDAS",Link:`${i.s.ArtWorks}`},{Title:"MONEY FELLOWS",Link:`${i.s.ArtWorks}`}]},{Title:"KSA Projects",ImgAlt:"",Links:[{Title:"AL MOOSA",Link:`${i.s.ArtWorks}`}]}],this.artflag=!0}ngOnInit(){this.ScrollChanges()}goToProfile(){}goToSettings(){}ScrollChanges(){window.addEventListener("scroll",()=>{this.toggleNavbarScrolled(!1),this.toggleBackgroundScrolled()})}toggleNavbarScrolled(o){const e=document.querySelector(".navbar");window.scrollY>1||o?e?.classList.add("navbar-scrolled"):e?.classList.remove("navbar-scrolled")}toggleBackgroundScrolled(){document.querySelector("body").style.backgroundColor=window.scrollY>1?"var(--primary-color1)":""}toggleDropdown(o){const e=this.dropdownMenu.nativeElement;"block"===e.style.display?(e.style.display="none",document.getElementById("dropdownMenuLink")?.classList.remove("show")):(e.style.display="block",document.getElementById("dropdownMenuLink")?.classList.add("show")),o.stopPropagation()}closeNavbar(){this.navbar.nativeElement.classList.remove("show")}onResize(o){const a=o.target.innerWidth<=576;!a&&this.wasSmallScreen&&this.closeNavbar(),this.wasSmallScreen=a}static#n=this.\u0275fac=function(e){return new(e||t)(n.Y36(l.F0))};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-header"]],viewQuery:function(e,a){if(1&e&&(n.Gf(v,5),n.Gf(_,5),n.Gf(P,5)),2&e){let c;n.iGM(c=n.CRH())&&(a.NavbarCollapse=c.first),n.iGM(c=n.CRH())&&(a.navbar=c.first),n.iGM(c=n.CRH())&&(a.dropdownMenu=c.first)}},hostBindings:function(e,a){1&e&&n.NdJ("resize",function(p){return a.onResize(p)},!1,n.Jf7)},decls:38,vars:20,consts:[[1,"navbar","navbar-expand-sm","navbar-dark","bg-dark","fixed-top"],[1,"container-fluid"],[1,"logo",3,"routerLink"],["src","assets/Images/amr-diwan-logo.png","alt","logo-img",1,"logo-img"],["type","button","data-bs-toggle","collapse","data-bs-target","#navbarNavDropdown","aria-controls","navbarNavDropdown","aria-expanded","false","aria-label","Toggle navigation",1,"navbar-toggler"],[1,"navbar-toggler-icon"],["id","navbarNavDropdown",1,"collapse","navbar-collapse","flex-row-reverse","justify-content-center"],["navbar",""],[1,"navbar-nav"],[1,"nav-item"],["aria-current","page","routerLinkActive","active","data-bs-toggle","collapse","data-bs-target",".navbar-collapse.show",1,"nav-link",3,"routerLink"],["routerLinkActive","active","data-bs-toggle","collapse","data-bs-target",".navbar-collapse.show",1,"nav-link",3,"routerLink"],[1,"nav-item","art",3,"mouseenter","mouseleave"],[1,"fa","fa-chevron-down","down"],[1,"fa","fa-chevron-up","up"],[1,"art-categories"],["class","art-inner-categories",4,"ngFor","ngForOf"],[1,"nav-item","small-screen"],[1,"dropdown"],["href","#","role","button","id","dropdownMenuLink","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","parent-dropdown",3,"click"],[1,"fa","fa-chevron-down"],[1,"fa","fa-chevron-up"],["aria-labelledby","dropdownMenuLink",1,"art-categories","dropdown-menu"],["dropdownMenu",""],["class","art-inner-categories dropdown-item",4,"ngFor","ngForOf"],[1,"art-inner-categories","dropdown-item",2,"height","80px","display","flex","align-items","center"],["data-bs-toggle","collapse",1,"nav-link","d-inline",2,"padding","0",3,"routerLink","click"],[1,"art-inner-categories"],[1,"art-links"],[1,"title","gold-text"],[4,"ngFor","ngForOf"],[3,"routerLink"],[1,"art-inner-categories","dropdown-item"],["data-bs-toggle","collapse",1,"nav-link","d-inline",3,"routerLink","click"],["href","#","role","button","data-bs-toggle","dropdown","aria-expanded","false",1,"dropdown-toggle","child-dropdown",3,"id"],[1,"art-categories","dropdown-menu","child-menu"],["class","nav-link",3,"routerLink","click",4,"ngIf"],[1,"nav-link",3,"routerLink","click"]],template:function(e,a){1&e&&(n.TgZ(0,"nav",0)(1,"div",1)(2,"a",2),n._UZ(3,"img",3),n.qZA(),n.TgZ(4,"button",4),n._UZ(5,"span",5),n.qZA(),n.TgZ(6,"div",6,7)(8,"ul",8)(9,"li",9)(10,"a",10),n._uU(11," Home "),n.qZA()(),n.TgZ(12,"li",9)(13,"a",11),n._uU(14," About "),n.qZA()(),n.TgZ(15,"li",12),n.NdJ("mouseenter",function(){return a.toggleNavbarScrolled(!0)})("mouseleave",function(){return a.toggleNavbarScrolled(!1)}),n.TgZ(16,"a",11),n._uU(17," Art Works "),n._UZ(18,"i",13)(19,"i",14),n.qZA(),n.TgZ(20,"div",15),n.YNc(21,m,5,2,"div",16),n.qZA()(),n.TgZ(22,"li",17)(23,"a",11),n._uU(24," Art Works "),n.qZA(),n.TgZ(25,"span",18)(26,"span",19),n.NdJ("click",function(p){return a.toggleDropdown(p)}),n._UZ(27,"i",20)(28,"i",21),n.qZA(),n.TgZ(29,"div",22,23),n.YNc(31,h,9,7,"div",24),n.TgZ(32,"div",25)(33,"a",26),n.NdJ("click",function(){return a.closeNavbar()}),n._uU(34," More Projects By Diwan Studios "),n.qZA()()()()(),n.TgZ(35,"li",9)(36,"a",11),n._uU(37," Contact "),n.qZA()()()()()()),2&e&&(n.xp6(2),n.Q6J("routerLink",n.DdM(9,f)),n.xp6(8),n.Q6J("routerLink",n.VKq(10,s,a.RoutePaths.Home)),n.xp6(3),n.Q6J("routerLink",n.VKq(12,s,a.RoutePaths.About)),n.xp6(3),n.Q6J("routerLink",n.VKq(14,s,a.RoutePaths.ArtWorks)),n.xp6(5),n.Q6J("ngForOf",a.ArtCategories),n.xp6(2),n.Q6J("routerLink",n.VKq(16,s,a.RoutePaths.ArtWorks)),n.xp6(8),n.Q6J("ngForOf",a.ArtCategories),n.xp6(2),n.Q6J("routerLink",a.RoutePaths.ArtWorks+"/moreprojects"),n.xp6(3),n.Q6J("routerLink",n.VKq(18,s,a.RoutePaths.Contact)))},dependencies:[d.sg,d.O5,l.rH,l.Od],styles:[".navbar[_ngcontent-%COMP%]{background-color:#04000966!important;transition:all .3s ease}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{margin-left:-100px}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .small-screen[_ngcontent-%COMP%]{display:none}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]{max-height:59vh;overflow-y:scroll;padding-left:20px;background-color:var(--primary-bg-color)!important}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]{background:transparent;border-bottom:1px solid #a6823a;padding:15px 5px!important}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:hover{cursor:pointer}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{padding-left:15px;font-size:13px}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .show[_ngcontent-%COMP%]{background-color:#8b7d5b4d}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:150px}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]:after{display:none}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .parent-dropdown[_ngcontent-%COMP%]{transform:translate(85vw,-40px)}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .parent-dropdown[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]{display:block}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .parent-dropdown[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]{display:none}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .child-dropdown[_ngcontent-%COMP%]{transform:translateY(-6px)}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .child-dropdown[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]{display:block}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .child-dropdown[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]{display:none}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .child-menu[_ngcontent-%COMP%]{padding-left:0}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .dropdown-toggle[_ngcontent-%COMP%]{padding:10px;border-radius:50%;display:inline;position:absolute;color:var(--gold2)}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .parent-dropdown.show[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]{display:block}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .parent-dropdown.show[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]{display:none}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .child-dropdown.show[_ngcontent-%COMP%]   .fa-chevron-up[_ngcontent-%COMP%]{display:block}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .dropdown[_ngcontent-%COMP%]   .child-dropdown.show[_ngcontent-%COMP%]   .fa-chevron-down[_ngcontent-%COMP%]{display:none}.navbar[_ngcontent-%COMP%]:has(.show), .navbar[_ngcontent-%COMP%]:has(.collapsing){box-shadow:0 0 15px 1000px #040009cc!important;background-color:var(--primary-bg-color)!important}.navbar[_ngcontent-%COMP%]:has(.show)   .container-fluid[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]:has(.collapsing)   .container-fluid[_ngcontent-%COMP%]{background-color:var(--primary-bg-color)}.navbar[_ngcontent-%COMP%]:has(.show)   .container-fluid[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]:has(.collapsing)   .container-fluid[_ngcontent-%COMP%]   .navbar-collapse[_ngcontent-%COMP%]{padding-top:10px}.navbar[_ngcontent-%COMP%]   .logo-img[_ngcontent-%COMP%]{height:40px}.navbar[_ngcontent-%COMP%]   .white-logo-img[_ngcontent-%COMP%]{height:40px;display:none}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--gold2)!important;font-weight:700;margin:0 5px;padding-right:5px;padding-left:5px;border-radius:5px}.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover.nav-link, .navbar[_ngcontent-%COMP%]   a.active.nav-link[_ngcontent-%COMP%]{color:var(--gold1)!important}.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{border-color:var(--gold1);border-width:3px;padding:0 3px;border:none}.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]:focus{box-shadow:0 0}.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(166, 130, 58, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")}.navbar.navbar-scrolled[_ngcontent-%COMP%]{background-color:var(--primary-bg-color)!important;box-shadow:0 0 15px 10px #0006}.navbar.navbar-scrolled[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{color:var(--gold1)}.navbar.navbar-scrolled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--gold2)!important;margin:0 5px;padding-right:5px;padding-left:5px;border-radius:5px}.navbar.navbar-scrolled[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover.nav-link, .navbar.navbar-scrolled[_ngcontent-%COMP%]   a.active.nav-link[_ngcontent-%COMP%]{color:var(--gold1)!important}.navbar.navbar-scrolled[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]:has(.show), .navbar.navbar-scrolled[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]:has(.collapsing){background-color:inherit}.navbar.navbar-scrolled[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{border-color:var(--gold1)}.navbar.navbar-scrolled[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .navbar-toggler-icon[_ngcontent-%COMP%]{background-image:url(\"data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(166, 130, 58, 0.8)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E\")}@media (max-width: 576px){.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]{margin-left:0}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]{display:none}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .small-screen[_ngcontent-%COMP%]{display:inline}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .small-screen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;height:50px}.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]{order:2}.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{order:1}.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .profile-pic[_ngcontent-%COMP%]{order:3}.navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]:has(.show)   .navbar-collapse[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]:has(.collapsing)   .navbar-collapse[_ngcontent-%COMP%]{order:4}}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .up[_ngcontent-%COMP%]{display:none;font-size:12px}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .down[_ngcontent-%COMP%]{display:inline;font-size:12px}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .art-categories[_ngcontent-%COMP%]{position:absolute;background-color:var(--primary-bg-color)!important;width:100%;left:0;padding:20px 0;display:none;gap:10px;justify-content:center}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .art-categories[_ngcontent-%COMP%]   .art-inner-categories[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:0 20px}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .art-categories[_ngcontent-%COMP%]   .art-inner-categories[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{object-fit:cover;width:150px;height:100px}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .art-categories[_ngcontent-%COMP%]   .art-inner-categories[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{border-bottom:1px solid #a6823a;font-weight:700}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .art-categories[_ngcontent-%COMP%]   .art-inner-categories[_ngcontent-%COMP%]   .art-links[_ngcontent-%COMP%]{font-weight:200;display:flex;flex-direction:column;text-align:left!important}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .art-categories[_ngcontent-%COMP%]   .art-inner-categories[_ngcontent-%COMP%]   .art-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{cursor:pointer;text-decoration:none;color:var(--gold2)!important;font-weight:200;margin:0}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]   .art-categories[_ngcontent-%COMP%]   .art-inner-categories[_ngcontent-%COMP%]   .art-links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--gold1)!important}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]:hover   .art-categories[_ngcontent-%COMP%]{display:flex}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]:hover   .up[_ngcontent-%COMP%]{display:inline}.navbar[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .art[_ngcontent-%COMP%]:hover   .down[_ngcontent-%COMP%]{display:none}"]})}return t})(),x=(()=>{class t{static#n=this.PasswordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[0-9a-zA-Z=!@#$%^&*_+)(-]{8,}$/;static#t=this.EmailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;static#o=this.PhonePattern=/^(?:(?:\+|00)([1-9]\d{0,2}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?$/;static#e=this.NumericPattern=/^[0-9]\d*$/;static#a=this.DateFormat="mediumDate";static#r=this.DateTimeFormat="MMM d, y h:mm a";static#i=this.WeekDateFormat="EEEE, MMM d, y";static#c=this.TimeFormat="h:mm a";static#g=this.Genders=[{Id:"M",Name:"Male"},{Id:"F",Name:"Female"}];static#l=this.Months=[{Id:0,Name:"January"},{Id:1,Name:"February"},{Id:2,Name:"March"},{Id:3,Name:"April"},{Id:4,Name:"May"},{Id:5,Name:"June"},{Id:6,Name:"July"},{Id:7,Name:"August"},{Id:8,Name:"September"},{Id:9,Name:"October"},{Id:10,Name:"November"},{Id:11,Name:"December"}];static#s=this.Years=function(){let o=[],e=(new Date).getFullYear();for(let a=e;a>=e-100;a--)o.push({Id:a,Name:a});return o};static#d=this.Days=function(){let o=[];for(let e=1;e<=31;e++)o.push({Id:e,Name:e});return o};static GetInitialName(o,e){let a="";return o&&(a=o.charAt(0).toUpperCase(),a+=e?e.charAt(0).toUpperCase():o.charAt(1).toLowerCase()),a}static GetYear(){return(new Date).getFullYear()}}return t})(),k=(()=>{class t{constructor(){this.Year=x.GetYear(),this.RoutePaths=i.s,this.version="1.0.0"}ngOnInit(){}static#n=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-footer"]],decls:27,vars:4,consts:[[1,"intro"],["src","assets/Images/amr-diwan-logo.png","alt","logo-img",1,"white-logo-img"],[1,"line"],[1,"main"],[1,"phrase","gold-text"],[1,"roww"],[1,"social"],["target","_blank","href","https://www.facebook.com/amr.diwan/"],[1,"fa","fa-facebook-square"],["target","_blank","href","https://www.instagram.com/amrdiwan1/"],[1,"fa","fa-instagram"],["target","_blank","href","https://www.linkedin.com/in/amr-diwan-414191161"],[1,"fa","fa-linkedin"],[1,"copyright","gold-text"],["href","mailto:amr.diwan@diwanstudio.com"],[1,"powered-by"],["href","mailto:techwizzjoes@gmail.com"]],template:function(e,a){1&e&&(n.TgZ(0,"footer")(1,"div",0),n._UZ(2,"img",1)(3,"div",2),n.qZA(),n.TgZ(4,"div",3)(5,"div",4),n._uU(6,"Amr diwan is all about breaking the rules of standard to send a message that people can feel and remember"),n.qZA(),n.TgZ(7,"div",5)(8,"div",6)(9,"a",7),n._UZ(10,"i",8),n.qZA(),n.TgZ(11,"a",9),n._UZ(12,"i",10),n.qZA(),n.TgZ(13,"a",11),n._UZ(14,"i",12),n.qZA()()()(),n.TgZ(15,"div",13)(16,"div"),n._uU(17),n.TgZ(18,"a",14),n._uU(19),n.qZA(),n._uU(20,". All Rights Reserved."),n.qZA(),n.TgZ(21,"div",15)(22,"small"),n._uU(23),n.TgZ(24,"a",16),n._uU(25),n.qZA(),n._uU(26,". "),n.qZA()()()()),2&e&&(n.xp6(17),n.hij("\xa9 ",a.Year," Amr Diwan, "),n.xp6(2),n.Oqu("info@diwanstudio.com"),n.xp6(4),n.hij("Version ",a.version," Powered By: "),n.xp6(2),n.Oqu("techwizzjoes"))},styles:["footer[_ngcontent-%COMP%]{padding:20px 0;background-color:var(--primary-color1);color:var(--primary-font-color)}footer[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]{display:flex;align-items:center;padding:0 10%}footer[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{height:30px}footer[_ngcontent-%COMP%]   .intro[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{width:100%;height:2px;background:var(--gold-gradient);margin-inline-start:20px}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .phrase[_ngcontent-%COMP%]{font-size:14px;text-align:center}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:space-around;margin:10px 0}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{list-style:none;text-align:center;font-size:18px;line-height:1.6;margin-bottom:0}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--gold2)}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--gold1)}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{text-align:center}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{padding:0 10px;color:var(--gold2)}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:24px}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   .roww[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--gold1)}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{text-align:center;display:flex;flex-direction:column;justify-content:center;font-size:14px;text-transform:uppercase}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-transform:none;-webkit-text-fill-color:initial;color:var(--gold2)}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--gold1)}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   .powered-by[_ngcontent-%COMP%]{color:var(--gold1);-webkit-text-fill-color:initial;text-transform:none}@media (max-width: 576px){footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]{flex-direction:column}footer[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100px;object-fit:cover;margin:auto}footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]{flex-direction:column}}"]})}return t})();const y=[{path:"",component:(()=>{class t{constructor(){}ngOnInit(){}static#n=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275cmp=n.Xpm({type:t,selectors:[["inner-container"]],decls:5,vars:0,consts:[[1,"min-vh-100","inner-container"],[1,"page-master"]],template:function(e,a){1&e&&(n.TgZ(0,"main",0)(1,"div",1),n._UZ(2,"app-header")(3,"router-outlet")(4,"app-footer"),n.qZA()())},dependencies:[l.lC,w,k],encapsulation:2})}return t})(),children:[{path:"home",loadComponent:()=>r.e(428).then(r.bind(r,9428)).then(t=>t.HomeComponent)},{path:"about",loadComponent:()=>r.e(787).then(r.bind(r,9787)).then(t=>t.AboutComponent)},{path:"contactus",loadComponent:()=>r.e(949).then(r.bind(r,5949)).then(t=>t.ContactComponent)},{path:"artworks",loadComponent:()=>r.e(732).then(r.bind(r,2732)).then(t=>t.ArtComponent)},{path:"artworks/:project",loadComponent:()=>r.e(732).then(r.bind(r,2732)).then(t=>t.ArtComponent)},{path:"**",redirectTo:i.s.Default}]}];let A=(()=>{class t{static#n=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275mod=n.oAB({type:t});static#o=this.\u0275inj=n.cJS({imports:[l.Bz.forChild(y),l.Bz]})}return t})(),T=(()=>{class t{static#n=this.\u0275fac=function(e){return new(e||t)};static#t=this.\u0275mod=n.oAB({type:t});static#o=this.\u0275inj=n.cJS({imports:[d.ez,M.u5,A,l.Bz]})}return t})()}}]);