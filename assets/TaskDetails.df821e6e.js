import{a as M,D as V,r as h,n as Y,o as i,c as d,b as s,w as u,v as p,u as a,e as B,F as x,f as T,g as D,t as v}from"./vendor.0d39b0e1.js";import{u as C,a as E,r as g}from"./index.5396938e.js";const H=C();async function F(r){return await H.api("comments/task/"+r)}async function A(r){return await H.api("comments/",r)}const L={class:"my-3 py-3 d-flex justify-content-between align-items-center"},$=s("h3",null,"Task Details",-1),j=s("i",{class:"fas fa-trash",style:{color:"red"}},null,-1),N=[j],R=["onSubmit"],q={class:"field"},z={class:"control is-medium"},J={class:"form-floating"},K=s("label",{for:"floatingInputGrid"},"Task Title",-1),O={class:"field"},P={class:"control is-medium"},Q={class:"form-floating"},W=s("label",{for:"floatingInputGrid"},"Due Date",-1),X={class:"field"},Z={class:"control is-medium"},ss={class:"form-floating"},ts=["value"],es=s("label",{for:"floatingSelectGrid"},"Assign to",-1),os=s("button",{class:"button is-primary btn-success"},"Update Task",-1),ns=s("hr",null,null,-1),as=s("div",{class:"my-3 py-3"},[s("h3",null,"Comments")],-1),ls={class:"my-3 py-3"},is={class:"card"},ds={class:"card-header"},rs={class:"card-header-title"},cs=s("div",{class:"card-header-icon"},[s("span",{class:"icon"},[s("i",{class:"fas fa-user"})])],-1),us={class:"card-content"},ms={class:"content"},_s={class:"field form-floating"},fs=s("label",{for:"floatingTextarea2"},"Comment",-1),hs=s("button",{class:"button is-primary is-light is-outlined"},"Add Comment",-1),gs=M({setup(r){const S=V(),m=E(),l=C();let o;const _=h([]);let k;const f=h(""),b=S.params.id;m.tasks.forEach(n=>{n._id===b&&(n.dueDate=Y(n.dueDate).format("YYYY-MM-DD"),o=n,console.log(o))});const c=h();!l.userHandles||l.userHandles.length===0?l.GetUserHandles().then(()=>{c.value=l.userHandles}):c.value=l.userHandles,F(b).then(n=>{_.value=n,_.value.forEach(e=>{var t,y;e.userHandel=(y=(t=c.value)==null?void 0:t.find(U=>U._id===e.userId))==null?void 0:y.handle})});function G(){m.updateTask(o._id,o).then(()=>{g.push({path:"/tasks"})})}function I(n){k={taskId:o._id,text:f.value,isReply:n},A(k).then(e=>{g.push({path:"/tasks"})})}function w(){m.deleteTask(o._id).then(()=>{g.push({path:"/tasks"})})}return(n,e)=>(i(),d("div",null,[s("div",L,[$,s("span",{class:"icon",role:"button",onClick:e[0]||(e[0]=t=>w())},N)]),s("form",{class:"form",onSubmit:D(G,["prevent"])},[s("div",q,[s("div",z,[s("div",J,[u(s("input",{type:"text",class:"form-control",id:"floatingInputGrid","onUpdate:modelValue":e[1]||(e[1]=t=>a(o).title=t)},null,512),[[p,a(o).title]]),K])])]),s("div",O,[s("div",P,[s("div",Q,[u(s("input",{class:"form-control",id:"floatingInputGrid",type:"date","onUpdate:modelValue":e[2]||(e[2]=t=>a(o).dueDate=t)},null,512),[[p,a(o).dueDate]]),W])])]),s("div",X,[s("div",Z,[s("div",ss,[u(s("select",{"onUpdate:modelValue":e[3]||(e[3]=t=>a(o).assignedTo=t),class:"form-select",id:"floatingSelectGrid","aria-label":"Floating label select example"},[(i(!0),d(x,null,T(c.value,t=>(i(),d("option",{value:t==null?void 0:t._id},v(t==null?void 0:t.handle),9,ts))),256))],512),[[B,a(o).assignedTo]]),es])])]),os],40,R),ns,as,(i(!0),d(x,null,T(_.value,t=>(i(),d("div",ls,[s("div",is,[s("div",ds,[s("div",rs,v(t==null?void 0:t.userHandel),1),cs]),s("div",us,[s("div",ms,v(t==null?void 0:t.text),1)])])]))),256)),s("form",{class:"form my-3",onSubmit:e[5]||(e[5]=D(t=>I(!1),["prevent"]))},[s("div",_s,[u(s("textarea",{class:"form-control",placeholder:"Leave a comment here",id:"floatingTextarea2",style:{height:"100px"},"onUpdate:modelValue":e[4]||(e[4]=t=>f.value=t)},null,512),[[p,f.value]]),fs]),hs],32)]))}});export{gs as default};