var K=Object.defineProperty;var R=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,X=Object.prototype.propertyIsEnumerable;var j=(e,t,n)=>t in e?K(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Y=(e,t)=>{for(var n in t||(t={}))Q.call(t,n)&&j(e,n,t[n]);if(R)for(var n of R(t))X.call(t,n)&&j(e,n,t[n]);return e};import{d as P,a as w,r as d,o as p,c as h,b as s,w as f,v as g,e as W,F as S,f as A,t as b,g as E,h as x,i as O,j as Z,k as $,l as C,m as k,u as m,n as ss,p as I,q as y,s as B,x as L,y as D,z as es,A as ts,B as ns,C as as}from"./vendor.0d39b0e1.js";const ls=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))l(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerpolicy&&(i.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?i.credentials="include":a.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}};ls();const os="modulepreload",z={},is="/TODO-App/",rs=function(t,n){return!n||n.length===0?t():Promise.all(n.map(l=>{if(l=`${is}${l}`,l in z)return;z[l]=!0;const a=l.endsWith(".css"),i=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${i}`))return;const c=document.createElement("link");if(c.rel=a?"stylesheet":os,a||(c.as="script",c.crossOrigin=""),c.href=l,document.head.appendChild(c),a)return new Promise((u,o)=>{c.addEventListener("load",u),c.addEventListener("error",()=>o(new Error(`Unable to preload CSS for ${l}`)))})})).then(()=>t())},U=P("tasks",{state:()=>({tasks:[],aTasks:[],cTasks:[],session:T()}),actions:{close(e){this.tasks.splice(e,1)},async createTasks(e,t,n,l,a,i=!1){const c=await this.session.api("tasks",{isCompleted:i,title:t,dueDate:new Date(n),isOwned:a,assignedTo:l});this.tasks.push(c)},async updateTask(e,t){return t==null||delete t._id,t==null||delete t.isOwned,await this.session.api("tasks/"+e,t,"PATCH")},async getTasks(){const e=await this.session.api("tasks/currentUserTasks");this.tasks=e},async assignedTasks(){const e=await this.session.api("tasks/assignedtasks");this.aTasks=e},async createdTasks(){const e=await this.session.api("tasks/createdtasks");this.cTasks=e}}}),cs=["onSubmit"],us={class:"control has-icons-left column"},ds=s("span",{class:"icon is-left"},[s("i",{class:"fas fa-calendar-plus","aria-hidden":"true"})],-1),_s={class:"column"},vs=s("option",{disabled:"",selected:""},"Assign to",-1),ps=["value"],hs=s("button",{type:"submit",class:"button"},"Create",-1),ms=w({setup(e){const t=T(),n=U(),l=d(),a=d(),i=d(),c=d();t.userHandles?c.value=t.userHandles:t.GetUserHandles().then(()=>{c.value=t.userHandles});function u(){n.createTasks(Math.max(...n.tasks.map(o=>o.id))+1,l.value,a.value,i.value,t.user._id,!1)}return(o,r)=>(p(),h("form",{onSubmit:E(u,["prevent"]),class:"columns"},[s("div",us,[f(s("input",{class:"input is-primary",type:"text",placeholder:"New Task","onUpdate:modelValue":r[0]||(r[0]=_=>l.value=_)},null,512),[[g,l.value]]),ds]),s("div",null,[f(s("input",{type:"date",class:"input","onUpdate:modelValue":r[1]||(r[1]=_=>a.value=_)},null,512),[[g,a.value]])]),s("div",_s,[f(s("select",{"onUpdate:modelValue":r[2]||(r[2]=_=>i.value=_),class:"select"},[vs,(p(!0),h(S,null,A(c.value,_=>(p(),h("option",{value:_._id},b(_.handle),9,ps))),256))],512),[[W,i.value]])]),hs],40,cs))}}),fs=["disabled"],ks={key:0},$s={key:1},gs={key:2},bs=["value"],ys={key:1},Ts={key:3},q=w({props:{task:null,user:null,userHandles:null,currentTab:null},setup(e){let t=d(!1);return U(),(n,l)=>{var i,c,u,o,r,_;const a=x("router-link");return f((p(),h("tr",{class:y({"text-dec-line-through":e.task.isCompleted==!0})},[s("td",null,[f(s("input",{type:"checkbox",class:"checkbox","onUpdate:modelValue":l[0]||(l[0]=v=>e.task.isCompleted=v),disabled:e.task.assignedTo!=((i=e.user)==null?void 0:i._id)},null,8,fs),[[Z,e.task.isCompleted]])]),f(s("th",null,[$(a,{class:"navbar-item",to:"/task/"+e.task._id},{default:C(()=>[k(b(e.task.title),1)]),_:1},8,["to"])],512),[[O,!m(t)]]),f(s("th",null,[f(s("input",{class:"input",type:"input","onUpdate:modelValue":l[1]||(l[1]=v=>e.task.title=v)},null,512),[[g,e.task.title]])],512),[[O,m(t)]]),m(t)?(p(),h("td",$s,[f(s("input",{type:"",class:"input","onUpdate:modelValue":l[2]||(l[2]=v=>e.task.dueDate=v)},null,512),[[g,e.task.dueDate]])])):(p(),h("td",ks,b(m(ss)(String(e.task.dueDate)).format("MMM-DD-YYYY")),1)),e.task.isOwned==((c=e.user)==null?void 0:c._id)?(p(),h("td",gs,[m(t)?f((p(),h("select",{key:0,"onUpdate:modelValue":l[3]||(l[3]=v=>e.task.assignedTo=v),class:"select"},[(p(!0),h(S,null,A(e.userHandles,v=>(p(),h("option",{value:v==null?void 0:v._id},b(v.handle),9,bs))),256))],512)),[[W,e.task.assignedTo]]):(p(),h("span",ys,b((u=e.userHandles.find(v=>v._id===e.task.assignedTo))==null?void 0:u.handle),1))])):I("",!0),e.task.isOwned!=((o=e.user)==null?void 0:o._id)?(p(),h("td",Ts,b((r=e.userHandles.find(v=>v._id===e.task.assignedTo))==null?void 0:r.handle),1)):I("",!0),s("td",null,b((_=e.userHandles.find(v=>v._id===e.task.isOwned))==null?void 0:_.handle),1)],2)),[[O,e.currentTab=="All"||e.currentTab=="Current"&&!e.task.isCompleted||e.currentTab=="Completed"&&e.task.isCompleted]])}}}),Cs={class:"section"},ws={class:"container"},xs={class:"columns"},Hs={class:"column"},Ss={class:"panel"},As={class:"tabs is-boxed"},Us=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),s("span",null,"Current")],-1),Ls=[Us],Ds=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),s("span",null,"Completed")],-1),Ns=[Ds],Os=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar","aria-hidden":"true"})]),s("span",null,"All")],-1),Vs=[Os],Is={class:"panel-block"},Ps={class:"table"},Es=s("th",null,null,-1),Bs=s("th",null,"Assigned to",-1),qs=s("th",null,"Owner",-1),Ms={setup(e){const t=T(),n=d("All");d(),d(),d();const l=d(!1),a=d([]);!t.userHandles||t.userHandles.length===0?t.GetUserHandles().then(()=>{a.value=t.userHandles}):a.value=t.userHandles;const i=U();i.getTasks();function c(u){l.value?this.tasks.tasks.sort((o,r)=>o[u]<r[u]?-1:1):this.tasks.tasks.sort((o,r)=>o[u]>r[u]?-1:1),l.value=!l.value}return(u,o)=>(p(),h("div",Cs,[s("div",ws,[s("div",xs,[s("div",Hs,[s("article",Ss,[s("div",As,[s("ul",null,[s("li",{class:y(["is-current",{"is-active":n.value=="Current"}]),onClick:o[0]||(o[0]=r=>n.value="Current")},Ls,2),s("li",{class:y(["is-completed",{"is-active":n.value=="Completed"}]),onClick:o[1]||(o[1]=r=>n.value="Completed")},Ns,2),s("li",{class:y(["is-all",{"is-active":n.value=="All"}]),onClick:o[2]||(o[2]=r=>n.value="All")},Vs,2)])]),s("div",Is,[$(ms)]),s("table",Ps,[s("thead",null,[s("tr",null,[Es,s("th",{onClick:o[3]||(o[3]=r=>c("message",l.value))},"Title"),s("th",{onClick:o[4]||(o[4]=r=>c("dueDate",l.value))},"Due date"),Bs,qs])]),s("tbody",null,[(p(!0),h(S,null,A(m(i).tasks,r=>(p(),B(q,{key:r._id,task:r,user:m(t).user,userHandles:a.value,currentTab:n.value},null,8,["task","user","userHandles","currentTab"]))),128))])])])])])])]))}},Fs={class:"section"},Gs={class:"container"},Rs={class:"columns"},js={class:"column"},Ys={class:"panel"},zs={class:"tabs is-boxed"},Ws=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),s("span",null,"Current")],-1),Js=[Ws],Ks=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),s("span",null,"Completed")],-1),Qs=[Ks],Xs=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar","aria-hidden":"true"})]),s("span",null,"All")],-1),Zs=[Xs],se={class:"panel-block"},ee={class:"table"},te=s("th",null,null,-1),ne=s("th",null,"Assigned to",-1),ae=s("th",null,"Owner",-1),le=w({setup(e){const t=d("All"),n=T(),l=U();l.createdTasks();const a=d([]);!n.userHandles||n.userHandles.length===0?n.GetUserHandles().then(()=>{a.value=n.userHandles}):a.value=n.userHandles,d(),d(),d();const i=d(!1);function c(u){i.value?this.tasks.cTasks.sort((o,r)=>o[u]<r[u]?-1:1):this.tasks.cTasks.sort((o,r)=>o[u]>r[u]?-1:1),i.value=!i.value}return(u,o)=>{const r=x("create-task");return p(),h("div",Fs,[s("div",Gs,[s("div",Rs,[s("div",js,[s("article",Ys,[s("div",zs,[s("ul",null,[s("li",{class:y(["is-current",{"is-active":t.value=="Current"}]),onClick:o[0]||(o[0]=_=>t.value="Current")},Js,2),s("li",{class:y(["is-completed",{"is-active":t.value=="Completed"}]),onClick:o[1]||(o[1]=_=>t.value="Completed")},Qs,2),s("li",{class:y(["is-all",{"is-active":t.value=="All"}]),onClick:o[2]||(o[2]=_=>t.value="All")},Zs,2)])]),s("div",se,[$(r)]),s("table",ee,[s("thead",null,[s("tr",null,[te,s("th",{onClick:o[3]||(o[3]=_=>c("message"))},"Title"),s("th",{onClick:o[4]||(o[4]=_=>c("dueDate"))},"Due date"),ne,ae])]),s("tbody",null,[(p(!0),h(S,null,A(m(l).cTasks,_=>(p(),B(q,{key:_._id,task:_,user:m(n).user,userHandles:a.value,currentTab:t.value},null,8,["task","user","userHandles","currentTab"]))),128))])])])])])])])}}}),oe={class:"section"},ie={class:"container"},re={class:"columns"},ce={class:"column"},ue={class:"panel"},de={class:"tabs is-boxed"},_e=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-clipboard-list","aria-hidden":"true"})]),s("span",null,"Current")],-1),ve=[_e],pe=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar-times","aria-hidden":"true"})]),s("span",null,"Completed")],-1),he=[pe],me=s("a",null,[s("span",{class:"icon is-small"},[s("i",{class:"fas fa-calendar","aria-hidden":"true"})]),s("span",null,"All")],-1),fe=[me],ke={class:"panel-block"},$e={class:"table"},ge=s("th",null,null,-1),be=s("th",null,"Assigned to",-1),ye=s("th",null,"Owner",-1),Te=w({setup(e){const t=T(),n=d("All"),l=d([]);!t.userHandles||t.userHandles.length===0?t.GetUserHandles().then(()=>{l.value=t.userHandles}):l.value=t.userHandles;const a=U();a.assignedTasks(),d(),d(),d();const i=d(!1);function c(u){i.value?this.tasks.aTasks.sort((o,r)=>o[u]<r[u]?-1:1):this.tasks.aTasks.sort((o,r)=>o[u]>r[u]?-1:1),i.value=!i.value}return(u,o)=>{const r=x("create-task");return p(),h("div",oe,[s("div",ie,[s("div",re,[s("div",ce,[s("article",ue,[s("div",de,[s("ul",null,[s("li",{class:y(["is-current",{"is-active":n.value=="Current"}]),onClick:o[0]||(o[0]=_=>n.value="Current")},ve,2),s("li",{class:y(["is-completed",{"is-active":n.value=="Completed"}]),onClick:o[1]||(o[1]=_=>n.value="Completed")},he,2),s("li",{class:y(["is-all",{"is-active":n.value=="All"}]),onClick:o[2]||(o[2]=_=>n.value="All")},fe,2)])]),s("div",ke,[$(r)]),s("table",$e,[s("thead",null,[s("tr",null,[ge,s("th",{onClick:o[3]||(o[3]=_=>c("message"))},"Title"),s("th",{onClick:o[4]||(o[4]=_=>c("dueDate"))},"Due date"),be,ye])]),s("tbody",null,[(p(!0),h(S,null,A(m(a).aTasks,_=>(p(),B(q,{key:_._id,task:_,user:m(t).user,userHandles:l.value,currentTab:n.value},null,8,["task","user","userHandles","currentTab"]))),128))])])])])])])])}}});var J="/TODO-App/assets/fingerprint.b6cb1cfb.svg";var N=(e,t)=>{const n=e.__vccOpts||e;for(const[l,a]of t)n[l]=a;return n};const M=e=>(L("data-v-ff06bdc2"),e=e(),D(),e),Ce={class:"section"},we={class:"page"},xe=["onSubmit"],He={class:"form__container"},Se=M(()=>s("div",{class:"logo"},[s("img",{class:"logo__pic",src:J,width:"45"})],-1)),Ae={class:"fieldset"},Ue={class:"field"},Le={class:"field"},De=M(()=>s("button",{class:"btn"},"Log In",-1)),Ne=M(()=>s("div",{class:"text"},[k("By creating an account, you agree and accept our "),s("a",{href:"#"},"Terms"),k(" and "),s("a",{href:"#"},"Privacy Policy"),k(".")],-1)),Oe={class:"form__footer"},Ve=k("Don't Have an Account? "),Ie=k("Sign Up"),Pe=w({setup(e){const t=T(),n=d(),l=d();function a(){t.Login(n.value,l.value)}return(i,c)=>{const u=x("router-link");return p(),h("div",Ce,[s("div",we,[s("form",{class:"form",onSubmit:E(a,["prevent"])},[s("div",He,[Se,s("div",Ae,[s("div",Ue,[f(s("input",{class:"input",type:"text",placeholder:"User Name",required:"","onUpdate:modelValue":c[0]||(c[0]=o=>n.value=o)},null,512),[[g,n.value]])]),s("div",Le,[f(s("input",{class:"input",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":c[1]||(c[1]=o=>l.value=o)},null,512),[[g,l.value]])])]),De,Ne]),s("div",Oe,[Ve,$(u,{to:"/signup"},{default:C(()=>[Ie]),_:1})])],40,xe)])])}}});var Ee=N(Pe,[["__scopeId","data-v-ff06bdc2"]]);const F=e=>(L("data-v-2e64cb36"),e=e(),D(),e),Be={class:"section"},qe={class:"page"},Me=["onSubmit"],Fe={class:"form__container"},Ge=F(()=>s("div",{class:"logo"},[s("img",{class:"logo__pic",src:J,width:"45"})],-1)),Re={class:"fieldset"},je={class:"field"},Ye={class:"field"},ze={class:"field"},We={class:"field"},Je={class:"field"},Ke=F(()=>s("button",{class:"btn"},"Sign Up",-1)),Qe=F(()=>s("div",{class:"text"},[k("Can\u2019t remember your password? "),s("a",{href:"#"},"Recover it"),k(".")],-1)),Xe={class:"form__footer"},Ze=k("Already have an account? "),st=k("Log In"),et=w({setup(e){const t=d(),n=d(),l=d(),a=d(),i=d(),c=T();function u(){const o={firstName:t.value,lastName:n.value,handle:l.value,password:a.value,email:i.value};c.Signup(o).then(()=>{c.Login(o.email,o.password)})}return(o,r)=>{const _=x("router-link");return p(),h("div",Be,[s("div",qe,[s("form",{class:"form",onSubmit:E(u,["prevent"])},[s("div",Fe,[Ge,s("div",Re,[s("div",je,[f(s("input",{class:"input",type:"text",placeholder:"First Name",required:"","onUpdate:modelValue":r[0]||(r[0]=v=>t.value=v)},null,512),[[g,t.value]])]),s("div",Ye,[f(s("input",{class:"input",type:"text",placeholder:"Last Name",required:"","onUpdate:modelValue":r[1]||(r[1]=v=>n.value=v)},null,512),[[g,n.value]])]),s("div",ze,[f(s("input",{class:"input",type:"text",placeholder:"User Name",required:"","onUpdate:modelValue":r[2]||(r[2]=v=>l.value=v)},null,512),[[g,l.value]])]),s("div",We,[f(s("input",{class:"input",type:"text",placeholder:"Email",required:"","onUpdate:modelValue":r[3]||(r[3]=v=>i.value=v)},null,512),[[g,i.value]])]),s("div",Je,[f(s("input",{class:"input",type:"password",placeholder:"Password",required:"","onUpdate:modelValue":r[4]||(r[4]=v=>a.value=v)},null,512),[[g,a.value]])])]),Ke,Qe]),s("div",Xe,[Ze,$(_,{to:"/signup"},{default:C(()=>[st]),_:1})])],40,Me)])])}}});var tt=N(et,[["__scopeId","data-v-2e64cb36"]]);const nt=[{path:"/tasks",component:Ms},{path:"/signup",component:tt},{path:"/login",component:Ee},{path:"/created-tasks",component:le},{path:"/assigned-tasks",component:Te},{path:"/task/:id?",component:()=>rs(()=>import("./TaskDetails.524ba9f8.js"),["assets/TaskDetails.524ba9f8.js","assets/vendor.0d39b0e1.js"])}],H=es({history:ts(),routes:nt,linkActiveClass:"is-active"});H.beforeEach((e,t)=>{const n=T();["/tasks","/","/created-tasks","/assigned-tasks"].includes(e.path)?(!n.user||!n.user._id)&&H.push("/login"):["/login","/signup"].includes(e.path)&&n.user&&n.user._id&&H.push("/tasks")});const V=P("messages",{state:()=>({notifications:[]}),actions:{close(e){this.notifications.splice(e,1)}}}),at="http://localhost:3001/api/";function lt(e,t,n,l){let a={headers:l};return t&&(a={method:n!=null?n:"POST",cache:"no-cache",headers:Y({"Content-Type":"application/json"},l),body:JSON.stringify(t)}),fetch(at+e,a).then(i=>i.json())}const T=P("session",{state:()=>({user:{},destinationUrl:null,userHandles:[]}),actions:{async Login(e,t){var l;const n=V();try{const a=await this.api("users/login",{email:e,password:t});a&&(n.notifications.push({type:"success",message:`Welcome back ${a.firstName}!`}),this.user=a,H.push((l=this.destinationUrl)!=null?l:"/tasks"))}catch(a){n.notifications.push({type:"danger",message:a.message}),console.table(n.notifications)}},async Signup(e){return await this.api("users/",e)},Logout(){this.user=null,H.push("/login")},async GetUserHandles(){const e=V();try{const t=await this.api("users/handles");t&&(this.userHandles=t)}catch(t){e.notifications.push({type:"danger",message:t.message}),console.table(e.notifications)}},async api(e,t,n,l={}){var i,c;const a=V();(i=this.user)!=null&&i.token&&(l.Authorization=`Bearer ${this.user.token}`);try{const u=await lt(e,t,n,l);if((c=u.errors)!=null&&c.length)throw{message:u.errors.join(", ")};return await u.data}catch(u){a.notifications.push({type:"danger",message:u.message})}}}});const G=e=>(L("data-v-6bcd7fb9"),e=e(),D(),e),ot={key:0,class:"buttons"},it=G(()=>s("strong",null,"Sign up",-1)),rt=k(" Log in "),ct={key:1,class:"buttons"},ut={class:"avatar"},dt=["src"],_t=k(),vt=G(()=>s("br",null,null,-1)),pt=G(()=>s("strong",null,"Log out",-1)),ht=[pt],mt=w({setup(e){const t=T();return(n,l)=>{const a=x("router-link");return!m(t).user||!m(t).user._id?(p(),h("div",ot,[$(a,{class:"button is-danger",to:"/signup"},{default:C(()=>[it]),_:1}),$(a,{class:"button is-success",to:"/login"},{default:C(()=>[rt]),_:1})])):(p(),h("div",ct,[s("div",ut,[s("img",{src:m(t).user.pic},null,8,dt),s("div",null,[s("strong",null,b(m(t).user.firstName)+" "+b(m(t).user.lastName),1),_t,vt,s("i",null,b(m(t).user.email),1)])]),s("a",{class:"button is-primary",onClick:l[0]||(l[0]=i=>m(t).Logout())},ht)]))}}});var ft=N(mt,[["__scopeId","data-v-6bcd7fb9"]]);const kt=e=>(L("data-v-c1bd02a6"),e=e(),D(),e),$t={class:"navbar is-dark"},gt=kt(()=>s("div",{class:"navbar-brand"},[s("div",{class:"navbar-burger","data-target":"navbarExampleTransparentExample"},[s("span"),s("span"),s("span")])],-1)),bt={id:"navbarExampleTransparentExample",class:"navbar-menu"},yt={key:0,class:"navbar-start"},Tt=k(" Tasks "),Ct=k(" Created Tasks "),wt=k(" Assigned Tasks "),xt={class:"navbar-end"},Ht={class:"navbar-item"},St=w({setup(e){const t=T();return(n,l)=>{const a=x("router-link");return p(),h("nav",$t,[gt,s("div",bt,[m(t).user&&m(t).user._id?(p(),h("div",yt,[$(a,{class:"navbar-item",to:"/tasks"},{default:C(()=>[Tt]),_:1}),$(a,{class:"navbar-item",to:"/created-tasks"},{default:C(()=>[Ct]),_:1}),$(a,{class:"navbar-item",to:"/assigned-tasks"},{default:C(()=>[wt]),_:1})])):I("",!0),s("div",xt,[s("div",Ht,[$(ft)])])])])}}});var At=N(St,[["__scopeId","data-v-c1bd02a6"]]);const Ut={class:"container"},Lt={setup(e){return(t,n)=>{const l=x("router-view");return p(),h(S,null,[$(At),s("div",Ut,[$(l)])],64)}}};ns(Lt).use(H).use(as()).mount("#app");export{U as a,H as r,T as u};
