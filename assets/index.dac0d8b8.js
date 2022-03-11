import{d as I,r as m,o as c,c as u,a as s,n as C,w as O,b as p,v as g,e as v,t as x,f as j,F as T,g as V,u as r,h as F,i as q,j as Y,k as E,l as D,m as S,p as b,q as k,s as H,x as z,y as K,z as R,A as J,B as W,C as G,D as Q}from"./vendor.4a073015.js";const X=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function t(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(a){if(a.ep)return;a.ep=!0;const d=t(a);fetch(a.href,d)}};X();const Z=I("tasks",{state:()=>({tasks:[{id:0,isCompleted:!1,message:"Make Bulma great again",dueDate:new Date("07-05-2021"),isOwned:2,assignedTo:1},{id:1,isCompleted:!0,message:"Add some more features",dueDate:new Date("07-26-2021"),isOwned:2,assignedTo:2},{id:2,isCompleted:!1,message:"Make a github account",dueDate:new Date("08-23-2021"),isOwned:3,assignedTo:3},{id:3,isCompleted:!0,message:"Learn how to use github",dueDate:new Date("09-10-2021"),isOwned:3,assignedTo:2},{id:4,isCompleted:!1,message:"add a .gitignore file",dueDate:new Date("07-10-2022"),isOwned:1,assignedTo:3},{id:5,isCompleted:!1,message:"Complete Midterm exam",dueDate:new Date("03-11-2022"),isOwned:1,assignedTo:1}]}),actions:{close(o){this.tasks.splice(o,1)},createTasks(o,e,t,i,a,d=!1){this.tasks.push({id:o,isCompleted:d,message:e,dueDate:new Date(t),isOwned:a,assignedTo:i})},taskAssignement(o,e){this.tasks.forEach(t=>{t.id==o&&(t.assignedTo=e)})}}}),N=[{firstName:"John",lastName:"Doe",handle:"raj",password:"password",email:"jhon@doe.com",pic:"https://randomuser.me/api/portraits/men/1.jpg",id:1},{firstName:"Vladimir",lastName:"Putin",handle:"sunny",password:"long table",email:"jhon@doe.com",pic:"https://randomuser.me/api/portraits/men/2.jpg",id:2},{firstName:"Kamala",lastName:"Harris",handle:"vp",password:"password",email:"kamala@whitehouse.org",pic:"https://randomuser.me/api/portraits/women/3.jpg",id:3}];var L=Object.freeze(Object.defineProperty({__proto__:null,list:N},Symbol.toStringTag,{value:"Module"}));const ss={class:"section"},es={class:"container"},ts={class:"columns"},os={class:"column"},as={class:"panel"},ns={class:"tabs is-boxed"},is=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),s("span",null,"Current")],-1),ls=[is],ds=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),s("span",null,"Completed")],-1),rs=[ds],cs=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-day","aria-hidden":"true"})]),s("span",null,"Upcoming")],-1),us=[cs],ps=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar","aria-hidden":"true"})]),s("span",null,"All")],-1),_s=[ps],ms={class:"panel-block"},hs=["onSubmit"],vs={class:"control has-icons-left column"},fs=s("span",{class:"icon is-left"},[s("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),gs={class:"column"},bs=s("option",{disabled:"",selected:""},"Assign to",-1),$s=["value"],ws=s("button",{type:"submit",class:"button"},"Create",-1),xs={class:"column is-three-quarter"},ys=["onUpdate:modelValue","disabled"],ks=s("br",null,null,-1),Cs={key:0,class:"select column is-one-quarter"},Ns=["onUpdate:modelValue"],Ss=["value"],Ts={key:1,class:"column is-one-quarter"},Ds={setup(o){const e=m("All"),t=Z(),i=m(),a=m(),d=m();function f($){t.createTasks(Math.max(...t.tasks.map(l=>l.id))+1,i.value,a.value,d.value,_.user.id),console.log(i)}return($,l)=>(c(),u("div",ss,[s("div",es,[s("div",ts,[s("div",os,[s("article",as,[s("div",ns,[s("ul",null,[s("li",{class:C(["is-current",{"is-active":e.value=="Current"}]),onClick:l[0]||(l[0]=n=>e.value="Current")},ls,2),s("li",{class:C(["is-completed",{"is-active":e.value=="Completed"}]),onClick:l[1]||(l[1]=n=>e.value="Completed")},rs,2),s("li",{class:C(["is-upcoming",{"is-active":e.value=="Upcoming"}]),onClick:l[2]||(l[2]=n=>e.value="Upcoming")},us,2),s("li",{class:C(["is-all",{"is-active":e.value=="All"}]),onClick:l[3]||(l[3]=n=>e.value="All")},_s,2)])]),s("div",ms,[s("form",{onSubmit:O(f,["prevent"]),class:"columns"},[s("div",vs,[p(s("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":l[4]||(l[4]=n=>i.value=n)},null,512),[[g,i.value]]),v(" "+x(i.value)+" ",1),fs]),s("div",null,[p(s("input",{type:"date",class:"input","onUpdate:modelValue":l[5]||(l[5]=n=>a.value=n)},null,512),[[g,a.value]])]),s("div",gs,[p(s("select",{"onUpdate:modelValue":l[6]||(l[6]=n=>d.value=n),class:"select"},[bs,(c(!0),u(T,null,V(r(L).list,n=>(c(),u("option",{value:n.id},x(n.handle),9,$s))),256))],512),[[j,d.value]])]),ws],40,hs)]),(c(!0),u(T,null,V(r(t).tasks,(n,h)=>{var M,P,B;return p((c(),u("a",{class:C(["panel-block columns",{"text-dec-line-through":n.isCompleted==!0}])},[s("div",xs,[p(s("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":w=>n.isCompleted=w,disabled:n.assignedTo!=((M=r(_).user)==null?void 0:M.id)},null,8,ys),[[q,n.isCompleted]]),ks,v(" "+x(r(Y)(String(n.dueDate)).format("MMM-DD-YYYY")),1)]),n.isOwned==((P=r(_).user)==null?void 0:P.id)?(c(),u("div",Cs,[p(s("select",{"onUpdate:modelValue":w=>n.assignedTo=w,class:"select"},[(c(!0),u(T,null,V(r(L).list,w=>(c(),u("option",{value:w.id},x(w.handle),9,Ss))),256))],8,Ns),[[j,n.assignedTo]])])):E("",!0),n.isOwned!=((B=r(_).user)==null?void 0:B.id)?(c(),u("div",Ts,x(r(L).list.find(w=>w.id===n.assignedTo).handle),1)):E("",!0)],2)),[[F,(e.value=="All"||e.value=="Upcoming"||e.value=="Current"&&!n.isCompleted||e.value=="Completed"&&n.isCompleted)&&(n.isOwned==r(_).user.id||n.assignedTo==r(_).user.id)]])}),256))])])])])]))}},Us={class:"section"},Vs={class:"hero-body"},Ls={class:"container has-text-centered"},Os={class:"column is-4 is-offset-4"},As=s("h3",{class:"title has-text-black"},"Login",-1),Ms=s("hr",{class:"login-hr"},null,-1),Ps=s("p",{class:"subtitle has-text-black"},"Please login to proceed.",-1),Bs={class:"box"},js=["onSubmit"],Es={class:"field"},Is={class:"control"},Fs={class:"field"},qs={class:"control"},Ys=H('<div class="field"><label class="checkbox"><input type="checkbox"> Remember me </label></div><button class="button is-block is-info is-large is-fullwidth">Login <i class="fa fa-sign-in" aria-hidden="true"></i></button>',2),Hs={class:"has-text-grey"},zs=v("Sign Up"),Ks=v(" \xA0\xB7\xA0 "),Rs=s("a",{href:"../"},"Forgot Password",-1),Js=v(" \xA0\xB7\xA0 "),Ws=s("a",{href:"../"},"Need Help?",-1),Gs=D({setup(o){const e=m(),t=m();function i(){we(e.value,t.value)}return(a,d)=>{const f=S("router-link");return c(),u("div",Us,[s("div",Vs,[s("div",Ls,[s("div",Os,[As,Ms,Ps,s("div",Bs,[s("form",{onSubmit:O(i,["prevent"])},[s("div",Es,[s("div",Is,[p(s("input",{class:"input is-large",placeholder:"User Name","onUpdate:modelValue":d[0]||(d[0]=$=>e.value=$)},null,512),[[g,e.value]])])]),s("div",Fs,[s("div",qs,[p(s("input",{class:"input is-large",type:"password",placeholder:"Your Password","onUpdate:modelValue":d[1]||(d[1]=$=>t.value=$)},null,512),[[g,t.value]])])]),Ys],40,js)]),s("p",Hs,[b(f,{to:"/signup"},{default:k(()=>[zs]),_:1}),Ks,Rs,Js,Ws])])])])])}}}),Qs={class:"section"},Xs={class:"hero-body"},Zs={class:"container has-text-centered"},se={class:"column is-4 is-offset-4"},ee=s("h3",{class:"title has-text-black"},"Signup",-1),te=s("hr",{class:"login-hr"},null,-1),oe=s("p",{class:"subtitle has-text-black"},"Please Signup to proceed.",-1),ae={class:"box"},ne=["onSubmit"],ie={class:"field"},le={class:"control"},de={class:"field"},re={class:"control"},ce={class:"field"},ue={class:"control"},pe={class:"field"},_e={class:"control"},me={class:"field"},he={class:"control"},ve=s("button",{class:"button is-block is-info is-large is-fullwidth"},[v("Sign Up "),s("i",{class:"fa fa-sign-in","aria-hidden":"true"})],-1),fe={class:"has-text-grey"},ge=v("Log In"),be=D({setup(o){const e=m(),t=m(),i=m(),a=m(),d=m();function f(){const $={firstName:e.value,lastName:t.value,handle:i.value,password:a.value,email:d.value,id:0,pic:""};xe($)}return($,l)=>{const n=S("router-link");return c(),u("div",Qs,[s("div",Xs,[s("div",Zs,[s("div",se,[ee,te,oe,s("div",ae,[s("form",{onSubmit:O(f,["prevent"])},[s("div",ie,[s("div",le,[p(s("input",{class:"input is-large",placeholder:"First Name","onUpdate:modelValue":l[0]||(l[0]=h=>e.value=h)},null,512),[[g,e.value]])])]),s("div",de,[s("div",re,[p(s("input",{class:"input is-large",placeholder:"Last Name","onUpdate:modelValue":l[1]||(l[1]=h=>t.value=h)},null,512),[[g,t.value]])])]),s("div",ce,[s("div",ue,[p(s("input",{class:"input is-large",placeholder:"User Name","onUpdate:modelValue":l[2]||(l[2]=h=>i.value=h)},null,512),[[g,i.value]])])]),s("div",pe,[s("div",_e,[p(s("input",{class:"input is-large",placeholder:"Email","onUpdate:modelValue":l[3]||(l[3]=h=>d.value=h)},null,512),[[g,d.value]])])]),s("div",me,[s("div",he,[p(s("input",{class:"input is-large",type:"password",placeholder:"Password","onUpdate:modelValue":l[4]||(l[4]=h=>a.value=h)},null,512),[[g,a.value]])])]),ve],40,ne)]),s("p",fe,[b(n,{to:"/login"},{default:k(()=>[ge]),_:1})])])])])])}}}),$e=[{path:"/home",component:Ds},{path:"/signup",component:be},{path:"/login",component:Gs}],y=z({history:K(),routes:$e,linkActiveClass:"is-active"});y.beforeEach((o,e)=>{["/home"].includes(o.path)?_.user||y.push("/login"):["/login","/signup"].includes(o.path)&&_.user&&y.push("/home")});const U=R({user:null});async function we(o,e){const t=N.find(i=>i.handle===o);if(!t)throw{message:"User not found"};if(t.password!==e)throw{message:"Incorrect password"};U.user=t,y.push("/home")}async function xe(o){const e=Math.max(...N.map(t=>t.id))+1;N.push({email:o.email,firstName:o.firstName,lastName:o.lastName,password:o.password,handle:o.handle,id:e,pic:""}),U.user=N.find(t=>t.id==e)||null,y.push("/home")}function ye(){U.user=null,y.push("/login")}var _=U;var ke=(o,e)=>{const t=o.__vccOpts||o;for(const[i,a]of e)t[i]=a;return t};const A=o=>(J("data-v-01d4ffbc"),o=o(),W(),o),Ce={key:0,class:"buttons"},Ne=A(()=>s("strong",null,"Sign up",-1)),Se=v(" Log in "),Te={key:1,class:"buttons"},De={class:"avatar"},Ue=["src"],Ve=v(),Le=A(()=>s("br",null,null,-1)),Oe=A(()=>s("strong",null,"Log out",-1)),Ae=[Oe],Me=D({setup(o){return(e,t)=>{const i=S("router-link");return r(_).user?(c(),u("div",Te,[s("div",De,[s("img",{src:r(_).user.pic},null,8,Ue),s("div",null,[s("strong",null,x(r(_).user.firstName)+" "+x(r(_).user.lastName),1),Ve,Le,s("i",null,x(r(_).user.email),1)])]),s("a",{class:"button is-primary",onClick:t[0]||(t[0]=a=>r(ye)())},Ae)])):(c(),u("div",Ce,[b(i,{class:"button is-primary",to:"/signup"},{default:k(()=>[Ne]),_:1}),b(i,{class:"button is-light",to:"/login"},{default:k(()=>[Se]),_:1})]))}}});var Pe=ke(Me,[["__scopeId","data-v-01d4ffbc"]]);const Be={class:"navbar is-primary"},je={class:"navbar-brand"},Ee=s("img",{src:"https://bulma.io/images/bulma-logo-white.png",alt:"Bulma: a modern CSS framework based on Flexbox",width:"112",height:"28"},null,-1),Ie=s("div",{class:"navbar-burger","data-target":"navbarExampleTransparentExample"},[s("span"),s("span"),s("span")],-1),Fe={id:"navbarExampleTransparentExample",class:"navbar-menu"},qe={class:"navbar-start"},Ye=v(" Home "),He={class:"navbar-end"},ze={class:"navbar-item"},Ke=D({setup(o){return(e,t)=>{const i=S("router-link");return c(),u("nav",Be,[s("div",je,[b(i,{class:"navbar-item",to:"/"},{default:k(()=>[Ee]),_:1}),Ie]),s("div",Fe,[s("div",qe,[b(i,{class:"navbar-item",to:"/home"},{default:k(()=>[Ye]),_:1})]),s("div",He,[s("div",ze,[b(Pe)])])])])}}}),Re={class:"container"},Je={setup(o){return(e,t)=>{const i=S("router-view");return c(),u(T,null,[b(Ke),s("div",Re,[b(i)])],64)}}};G(Je).use(y).use(Q()).mount("#app");