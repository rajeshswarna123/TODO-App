import{d as K,r as v,o as c,c as u,a as e,n as C,w as O,b as _,v as g,e as p,t as y,f as H,F as S,g as V,u as r,h as R,i as J,j as W,k as Y,l as D,m as T,p as b,q as x,s as A,x as M,y as G,z as Q,A as X,B as Z,C as ee}from"./vendor.9a2230e2.js";const se=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))i(a);new MutationObserver(a=>{for(const d of a)if(d.type==="childList")for(const f of d.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function o(a){const d={};return a.integrity&&(d.integrity=a.integrity),a.referrerpolicy&&(d.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?d.credentials="include":a.crossorigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function i(a){if(a.ep)return;a.ep=!0;const d=o(a);fetch(a.href,d)}};se();const te=K("tasks",{state:()=>({tasks:[{id:0,isCompleted:!1,message:"Make Bulma great again",dueDate:new Date("07-05-2021"),isOwned:2,assignedTo:1},{id:1,isCompleted:!0,message:"Add some more features",dueDate:new Date("07-26-2021"),isOwned:2,assignedTo:2},{id:2,isCompleted:!1,message:"Make a github account",dueDate:new Date("08-23-2021"),isOwned:3,assignedTo:3},{id:3,isCompleted:!0,message:"Learn how to use github",dueDate:new Date("09-10-2021"),isOwned:3,assignedTo:2},{id:4,isCompleted:!1,message:"add a .gitignore file",dueDate:new Date("07-10-2022"),isOwned:1,assignedTo:3},{id:5,isCompleted:!1,message:"Complete Midterm exam",dueDate:new Date("03-11-2022"),isOwned:1,assignedTo:1}]}),actions:{close(t){this.tasks.splice(t,1)},createTasks(t,s,o,i,a,d=!1){this.tasks.push({id:t,isCompleted:d,message:s,dueDate:new Date(o),isOwned:a,assignedTo:i})},taskAssignement(t,s){this.tasks.forEach(o=>{o.id==t&&(o.assignedTo=s)})}}}),N=[{firstName:"John",lastName:"Doe",handle:"raj",password:"password",email:"jhon@doe.com",pic:"https://randomuser.me/api/portraits/men/1.jpg",id:1},{firstName:"Vladimir",lastName:"Putin",handle:"sunny",password:"long table",email:"jhon@doe.com",pic:"https://randomuser.me/api/portraits/men/2.jpg",id:2},{firstName:"Kamala",lastName:"Harris",handle:"vp",password:"password",email:"kamala@whitehouse.org",pic:"https://randomuser.me/api/portraits/women/3.jpg",id:3}];var L=Object.freeze(Object.defineProperty({__proto__:null,list:N},Symbol.toStringTag,{value:"Module"}));const oe={class:"section"},ae={class:"container"},ne={class:"columns"},ie={class:"column"},le={class:"panel"},de={class:"tabs is-boxed"},re=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),e("span",null,"Current")],-1),ce=[re],ue=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),e("span",null,"Completed")],-1),pe=[ue],_e=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fas fa-calendar-day","aria-hidden":"true"})]),e("span",null,"Upcoming")],-1),me=[_e],ve=e("a",null,[e("span",{class:"icon is-small"},[e("i",{class:"fas fa-calendar","aria-hidden":"true"})]),e("span",null,"All")],-1),he=[ve],fe={class:"panel-block"},ge=["onSubmit"],be={class:"control has-icons-left column"},$e=e("span",{class:"icon is-left"},[e("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),we={class:"column"},ye=e("option",{disabled:"",selected:""},"Assign to",-1),ke=["value"],xe=e("button",{type:"submit",class:"button"},"Create",-1),Ce={class:"column is-three-quarter"},Ne=["onUpdate:modelValue","disabled"],Te=e("br",null,null,-1),Se={key:0,class:"select column is-one-quarter"},De=["onUpdate:modelValue"],Ue=["value"],Ve={key:1,class:"column is-one-quarter"},Le={setup(t){const s=v("All"),o=te(),i=v(),a=v(),d=v();function f($){o.createTasks(Math.max(...o.tasks.map(l=>l.id))+1,i.value,a.value,d.value,m.user.id),console.log(i)}return($,l)=>(c(),u("div",oe,[e("div",ae,[e("div",ne,[e("div",ie,[e("article",le,[e("div",de,[e("ul",null,[e("li",{class:C(["is-current",{"is-active":s.value=="Current"}]),onClick:l[0]||(l[0]=n=>s.value="Current")},ce,2),e("li",{class:C(["is-completed",{"is-active":s.value=="Completed"}]),onClick:l[1]||(l[1]=n=>s.value="Completed")},pe,2),e("li",{class:C(["is-upcoming",{"is-active":s.value=="Upcoming"}]),onClick:l[2]||(l[2]=n=>s.value="Upcoming")},me,2),e("li",{class:C(["is-all",{"is-active":s.value=="All"}]),onClick:l[3]||(l[3]=n=>s.value="All")},he,2)])]),e("div",fe,[e("form",{onSubmit:O(f,["prevent"]),class:"columns"},[e("div",be,[_(e("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":l[4]||(l[4]=n=>i.value=n)},null,512),[[g,i.value]]),p(" "+y(i.value)+" ",1),$e]),e("div",null,[_(e("input",{type:"date",class:"input","onUpdate:modelValue":l[5]||(l[5]=n=>a.value=n)},null,512),[[g,a.value]])]),e("div",we,[_(e("select",{"onUpdate:modelValue":l[6]||(l[6]=n=>d.value=n),class:"select"},[ye,(c(!0),u(S,null,V(r(L).list,n=>(c(),u("option",{value:n.id},y(n.handle),9,ke))),256))],512),[[H,d.value]])]),xe],40,ge)]),(c(!0),u(S,null,V(r(o).tasks,(n,h)=>{var E,B,F;return _((c(),u("a",{class:C(["panel-block columns",{"text-dec-line-through":n.isCompleted==!0}])},[e("div",Ce,[_(e("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":w=>n.isCompleted=w,disabled:n.assignedTo!=((E=r(m).user)==null?void 0:E.id)},null,8,Ne),[[J,n.isCompleted]]),Te,p(" "+y(r(W)(String(n.dueDate)).format("MMM-DD-YYYY")),1)]),n.isOwned==((B=r(m).user)==null?void 0:B.id)?(c(),u("div",Se,[_(e("select",{"onUpdate:modelValue":w=>n.assignedTo=w,class:"select"},[(c(!0),u(S,null,V(r(L).list,w=>(c(),u("option",{value:w.id},y(w.handle),9,Ue))),256))],8,De),[[H,n.assignedTo]])])):Y("",!0),n.isOwned!=((F=r(m).user)==null?void 0:F.id)?(c(),u("div",Ve,y(r(L).list.find(w=>w.id===n.assignedTo).handle),1)):Y("",!0)],2)),[[R,(s.value=="All"||s.value=="Upcoming"||s.value=="Current"&&!n.isCompleted||s.value=="Completed"&&n.isCompleted)&&(n.isOwned==r(m).user.id||n.assignedTo==r(m).user.id)]])}),256))])])])])]))}};var z="/assets/fingerprint.b6cb1cfb.svg";var I=(t,s)=>{const o=t.__vccOpts||t;for(const[i,a]of s)o[i]=a;return o};const q=t=>(A("data-v-8f9f88f4"),t=t(),M(),t),Oe={class:"section"},Ae={class:"page"},Me=["onSubmit"],Ie={class:"form__container"},qe=q(()=>e("div",{class:"logo"},[e("img",{class:"logo__pic",src:z,width:"45"})],-1)),Pe={class:"fieldset"},je={class:"field"},Ee={class:"field"},Be=q(()=>e("button",{class:"btn"},"Log In",-1)),Fe=q(()=>e("div",{class:"text"},[p("By creating an account, you agree and accept our "),e("a",{href:"#"},"Terms"),p(" and "),e("a",{href:"#"},"Privacy Policy"),p(".")],-1)),He={class:"form__footer"},Ye=p("Don't Have an Account? "),ze=p("Sign Up"),Ke=D({setup(t){const s=v(),o=v();function i(){_s(s.value,o.value)}return(a,d)=>{const f=T("router-link");return c(),u("div",Oe,[e("div",Ae,[e("form",{class:"form",onSubmit:O(i,["prevent"])},[e("div",Ie,[qe,e("div",Pe,[e("div",je,[_(e("input",{class:"input",type:"text",placeholder:"User Name",required:"","onUpdate:modelValue":d[0]||(d[0]=$=>s.value=$)},null,512),[[g,s.value]])]),e("div",Ee,[_(e("input",{class:"input",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":d[1]||(d[1]=$=>o.value=$)},null,512),[[g,o.value]])])]),Be,Fe]),e("div",He,[Ye,b(f,{to:"/signup"},{default:x(()=>[ze]),_:1})])],40,Me)])])}}});var Re=I(Ke,[["__scopeId","data-v-8f9f88f4"]]);const P=t=>(A("data-v-e23cb4ba"),t=t(),M(),t),Je={class:"section"},We={class:"page"},Ge=["onSubmit"],Qe={class:"form__container"},Xe=P(()=>e("div",{class:"logo"},[e("img",{class:"logo__pic",src:z,width:"45"})],-1)),Ze={class:"fieldset"},es={class:"field"},ss={class:"field"},ts={class:"field"},os={class:"field"},as={class:"field"},ns=P(()=>e("button",{class:"btn"},"Sign Up",-1)),is=P(()=>e("div",{class:"text"},[p("Can\u2019t remember your password? "),e("a",{href:"#"},"Recover it"),p(".")],-1)),ls={class:"form__footer"},ds=p("Already have an account? "),rs=p("Log In"),cs=D({setup(t){const s=v(),o=v(),i=v(),a=v(),d=v();function f(){const $={firstName:s.value,lastName:o.value,handle:i.value,password:a.value,email:d.value,id:0,pic:""};ms($)}return($,l)=>{const n=T("router-link");return c(),u("div",Je,[e("div",We,[e("form",{class:"form",onSubmit:O(f,["prevent"])},[e("div",Qe,[Xe,e("div",Ze,[e("div",es,[_(e("input",{class:"input",type:"text",placeholder:"First Name",required:"","onUpdate:modelValue":l[0]||(l[0]=h=>s.value=h)},null,512),[[g,s.value]])]),e("div",ss,[_(e("input",{class:"input",type:"text",placeholder:"Last Name",required:"","onUpdate:modelValue":l[1]||(l[1]=h=>o.value=h)},null,512),[[g,o.value]])]),e("div",ts,[_(e("input",{class:"input",type:"text",placeholder:"User Name",required:"","onUpdate:modelValue":l[2]||(l[2]=h=>i.value=h)},null,512),[[g,i.value]])]),e("div",os,[_(e("input",{class:"input",type:"text",placeholder:"Email",required:"","onUpdate:modelValue":l[3]||(l[3]=h=>d.value=h)},null,512),[[g,d.value]])]),e("div",as,[_(e("input",{class:"input",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":l[4]||(l[4]=h=>a.value=h)},null,512),[[g,a.value]])])]),ns,is]),e("div",ls,[ds,b(n,{to:"/signup"},{default:x(()=>[rs]),_:1})])],40,Ge)])])}}});var us=I(cs,[["__scopeId","data-v-e23cb4ba"]]);const ps=[{path:"/tasks",component:Le},{path:"/signup",component:us},{path:"/login",component:Re}],k=G({history:Q(),routes:ps,linkActiveClass:"is-active"});k.beforeEach((t,s)=>{["/tasks","/"].includes(t.path)?m.user||k.push("/login"):["/login","/signup"].includes(t.path)&&m.user&&k.push("/tasks")});const U=X({user:null});async function _s(t,s){const o=N.find(i=>i.handle===t);if(!o)throw{message:"User not found"};if(o.password!==s)throw{message:"Incorrect password"};U.user=o,k.push("/home")}async function ms(t){const s=Math.max(...N.map(o=>o.id))+1;N.push({email:t.email,firstName:t.firstName,lastName:t.lastName,password:t.password,handle:t.handle,id:s,pic:""}),U.user=N.find(o=>o.id==s)||null,k.push("/tasks")}function vs(){U.user=null,k.push("/login")}var m=U;const j=t=>(A("data-v-12cee408"),t=t(),M(),t),hs={key:0,class:"buttons"},fs=j(()=>e("strong",null,"Sign up",-1)),gs=p(" Log in "),bs={key:1,class:"buttons"},$s={class:"avatar"},ws=["src"],ys=p(),ks=j(()=>e("br",null,null,-1)),xs=j(()=>e("strong",null,"Log out",-1)),Cs=[xs],Ns=D({setup(t){return(s,o)=>{const i=T("router-link");return r(m).user?(c(),u("div",bs,[e("div",$s,[e("img",{src:r(m).user.pic},null,8,ws),e("div",null,[e("strong",null,y(r(m).user.firstName)+" "+y(r(m).user.lastName),1),ys,ks,e("i",null,y(r(m).user.email),1)])]),e("a",{class:"button is-primary",onClick:o[0]||(o[0]=a=>r(vs)())},Cs)])):(c(),u("div",hs,[b(i,{class:"button is-danger",to:"/signup"},{default:x(()=>[fs]),_:1}),b(i,{class:"button is-success",to:"/login"},{default:x(()=>[gs]),_:1})]))}}});var Ts=I(Ns,[["__scopeId","data-v-12cee408"]]);const Ss={class:"navbar is-dark"},Ds=e("div",{class:"navbar-brand"},[e("div",{class:"navbar-burger","data-target":"navbarExampleTransparentExample"},[e("span"),e("span"),e("span")])],-1),Us={id:"navbarExampleTransparentExample",class:"navbar-menu"},Vs={class:"navbar-start"},Ls=p(" Home "),Os=p(" Tasks "),As={class:"navbar-end"},Ms={class:"navbar-item"},Is=D({setup(t){return(s,o)=>{const i=T("router-link");return c(),u("nav",Ss,[Ds,e("div",Us,[e("div",Vs,[b(i,{class:"navbar-item",to:"/"},{default:x(()=>[Ls]),_:1}),b(i,{class:"navbar-item",to:"/tasks"},{default:x(()=>[Os]),_:1})]),e("div",As,[e("div",Ms,[b(Ts)])])])])}}}),qs={class:"container"},Ps={setup(t){return(s,o)=>{const i=T("router-view");return c(),u(S,null,[b(Is),e("div",qs,[b(i)])],64)}}};Z(Ps).use(k).use(ee()).mount("#app");
