(this["webpackJsonpguestbook-frontend"]=this["webpackJsonpguestbook-frontend"]||[]).push([[0],{128:function(e,t,a){e.exports={listItem:"MessageList_listItem__3tAp-",replyMessages:"MessageList_replyMessages__wmUvm"}},197:function(e,t,a){e.exports=a(390)},202:function(e,t,a){},203:function(e,t,a){},34:function(e,t,a){e.exports={loginContainer:"Signup_loginContainer__1PE8x",signInHeader:"Signup_signInHeader__2X5et",loginForm:"Signup_loginForm__2GrOs",inputField:"Signup_inputField__2E_PP",submitButton:"Signup_submitButton__24kBL",logInLink:"Signup_logInLink__30QUv"}},390:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),o=a(3),i=a.n(o),r=(a(202),a(203),a(204),a(50)),c=a.n(r),l=a(395),u=a(397),m=a(48),p=a(49),d=a(35),g={labelCol:{span:0},wrapperCol:{span:20}},b={wrapperCol:{offset:0,span:20}};function h(e){var t=e.AuthObj,a=Object(p.g)(),n=(Object(p.h)().state||{from:{pathname:"/guestBook"}}).from;return s.a.createElement("div",{className:c.a.loginContainer},s.a.createElement("h1",{className:c.a.signInHeader}," Sign in "),s.a.createElement(l.a,Object.assign({},g,{className:c.a.loginForm,name:"basic",initialValues:{remember:!0},onFinish:function(e){t.authenticate(e.email,e.password,(function(){a.replace(n)}))},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(l.a.Item,{label:"Email address",name:"email",rules:[{required:!0,message:"Please input your email address!"}]},s.a.createElement(u.a,{placeholder:"Email Address",className:c.a.inputField})),s.a.createElement(l.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},s.a.createElement(u.a.Password,{placeholder:"Password",className:c.a.inputField})),s.a.createElement(l.a.Item,b,s.a.createElement(m.a,{className:c.a.submitButton,type:"primary",htmlType:"submit"},"Login"))),s.a.createElement(d.b,{className:c.a.signUpLink,to:"/signup"},"Sign up"))}var f=a(101),E=a(34),_=a.n(E),k=a(169),O=a.n(k);function v(){var e=localStorage.getItem("accessToken");return O.a.create({baseURL:"https://guestbook-backend-route1-application-1.apps.us-west-1.starter.openshift-online.com/api/v1",headers:{Authorization:"Bearer ".concat(e)}})}function w(e){return v().put("".concat("https://guestbook-backend-route1-application-1.apps.us-west-1.starter.openshift-online.com/api/v1","/messages"),e)}var j=a(396),F=window.localStorage,y=JSON.parse(F.getItem("isAuthenticated")),N={isAuthenticated:y&&y.value,authenticate:function(e,t,a){(function(e){return v().post("".concat("https://guestbook-backend-route1-application-1.apps.us-west-1.starter.openshift-online.com/api/v1","/login"),e)})({email:e,password:t}).then((function(e){var t=e.data.token||"";N.isAuthenticated=!0,F.setItem("isAuthenticated",JSON.stringify({value:!0})),F.setItem("accessToken",t),a()})).catch((function(){j.a.error("Invalid Email or Password")}))},signout:function(e){v().post("".concat("https://guestbook-backend-route1-application-1.apps.us-west-1.starter.openshift-online.com/api/v1","/logout")).then((function(){N.isAuthenticated=!1,F.setItem("isAuthenticated",JSON.stringify({value:!1})),F.setItem("accessToken",""),e()}))}},I={labelCol:{span:4},wrapperCol:{span:10}},S={wrapperCol:{offset:0,span:20}};function C(){var e=Object(p.g)(),t=(Object(p.h)().state||{from:{pathname:"/".concat("guestbook-frontend","/guestBook")}}).from;return s.a.createElement("div",{className:_.a.loginContainer},s.a.createElement("h1",{className:_.a.signInHeader}," Create New Account "),s.a.createElement(l.a,Object.assign({},I,{className:_.a.loginForm,name:"basic",initialValues:{remember:!0},onFinish:function(a){(function(e){return v().post("".concat("https://guestbook-backend-route1-application-1.apps.us-west-1.starter.openshift-online.com/api/v1","/users"),e)})(Object(f.a)({},a)).then((function(){N.authenticate(a.email,a.password,(function(){e.replace(t)}))}))},onFinishFailed:function(e){console.log("Failed:",e)}}),s.a.createElement(l.a.Item,{label:"First Name",name:"firstName",rules:[{required:!0,message:"Please input your first name!"}]},s.a.createElement(u.a,{placeholder:"First Name",className:_.a.inputField})),s.a.createElement(l.a.Item,{label:"Last Name",name:"lastName",rules:[{required:!0,message:"Please input your last name!"}]},s.a.createElement(u.a,{placeholder:"Last Name",className:_.a.inputField})),s.a.createElement(l.a.Item,{label:"Email address",name:"email",rules:[{required:!0,message:"Please input your email address!"}]},s.a.createElement(u.a,{placeholder:"Email Address",className:_.a.inputField})),s.a.createElement(l.a.Item,{label:"Password",name:"password",rules:[{required:!0,message:"Please input your password!"}]},s.a.createElement(u.a.Password,{placeholder:"Password",className:_.a.inputField})),s.a.createElement(l.a.Item,S,s.a.createElement(m.a,{className:_.a.submitButton,type:"primary",htmlType:"submit"},"Submit"))),s.a.createElement(d.b,{className:_.a.logInLink,to:"/login"},"Login"))}var B=a(23),A=a(76),L=a.n(A),M=a(394),P=a(393),x=a(392),T=a(128),q=a.n(T),H=a(398),U=a(399),J=a(400);function V(e){var t=e.addMessageModalVisibility,a=Object(n.useState)([]),o=Object(B.a)(a,2),i=o[0],r=o[1],c=Object(n.useState)(!1),l=Object(B.a)(c,2),p=l[0],d=l[1],g=Object(n.useState)(!1),b=Object(B.a)(g,2),h=b[0],E=b[1],_=Object(n.useState)(""),k=Object(B.a)(_,2),O=k[0],F=k[1],y=Object(n.useState)(""),N=Object(B.a)(y,2),I=N[0],S=N[1],C=Object(n.useState)({}),A=Object(B.a)(C,2),L=A[0],T=A[1],V=Object(n.useState)(!1),W=Object(B.a)(V,2),z=W[0],G=W[1];function R(){E(!0),L.replyMessages.push(O),w(L).then((function(){d(!1),E(!1)})).catch((function(){d(!1),E(!1)}))}function X(){d(!1)}function D(e){G(!z),function(e){return v().delete("".concat("https://guestbook-backend-route1-application-1.apps.us-west-1.starter.openshift-online.com/api/v1","/messages/").concat(e))}(e).then((function(){j.a.success("Message deleted successfully")})).catch((function(){j.a.error("Deletion Failed")}))}function Q(e){return s.a.createElement(x.a.Item,{key:e._id,className:q.a.listItem},s.a.createElement(u.a.Group,{compact:!0},s.a.createElement(u.a,{onChange:function(e){S(e.target.value)},placeholder:"message text",style:{width:"80%"},defaultValue:e.messageText}),s.a.createElement(m.a,{onClick:function(){!function(e){var t=Object(f.a)({},e);t.messageText=I||t.messageText,w(t).then((function(){j.a.success("Message edited successfully")})).catch((function(){j.a.error("Edit Failed")}))}(e)}},s.a.createElement(H.a,null)),s.a.createElement(m.a,{onClick:function(){T(e),d(!0)}},s.a.createElement(U.a,null)),s.a.createElement(m.a,{onClick:function(){return D(e._id)}},s.a.createElement(J.a,null))),function(e){for(var t=[],a=0;a<e.length;a++){var n=s.a.createElement(P.a.Text,{key:a,className:q.a.replyMessages},e[a]);t.push(n)}return t}(e.replyMessages))}return Object(n.useEffect)((function(){v().get("".concat("https://guestbook-backend-route1-application-1.apps.us-west-1.starter.openshift-online.com/api/v1","/messages")).then((function(e){r(e.data)}))}),[p,t,z]),s.a.createElement("div",null,s.a.createElement(x.a,{dataSource:i,renderItem:function(e){return Q(e)}}),s.a.createElement("div",null,s.a.createElement(M.a,{title:"Reply Message ",visible:p,onOk:R,confirmLoading:h,onCancel:X},s.a.createElement(u.a,{onChange:function(e){return F(e.target.value)},placeholder:"reply message"}))))}function W(e){var t=e.AuthObj,a=Object(p.g)(),o=Object(n.useState)(!1),i=Object(B.a)(o,2),r=i[0],c=i[1],l=Object(n.useState)(!1),d=Object(B.a)(l,2),g=d[0],b=d[1],h=Object(n.useState)(""),f=Object(B.a)(h,2),E=f[0],_=f[1];function k(){b(!0),function(e){return v().post("".concat("https://guestbook-backend-route1-application-1.apps.us-west-1.starter.openshift-online.com/api/v1","/messages/"),{messageText:e})}(E).then((function(){b(!1),c(!1)})).catch((function(){b(!1),c(!1)}))}function O(){c(!1)}return s.a.createElement("div",{className:L.a.bookFormContainer},s.a.createElement("div",{className:L.a.headerTitle},s.a.createElement("h1",null," Guest Book Messages"),s.a.createElement(m.a,{onClick:function(){t.signout((function(){return a.push("/")}))},className:L.a.signOutButton,type:"danger"},"Sign out")),s.a.createElement(m.a,{onClick:function(){c(!0)},className:L.a.addMessageButton,type:"primary"},"Add New Message"),s.a.createElement(V,{addMessageModalVisibility:r}),s.a.createElement("div",null,s.a.createElement(M.a,{title:"Add New Message ",visible:r,onOk:k,confirmLoading:g,onCancel:O},s.a.createElement(u.a,{onChange:function(e){return _(e.target.value)},placeholder:"message text"}))))}var z=a(193);function G(e){var t=e.children,a=Object(z.a)(e,["children"]);return s.a.createElement(p.b,Object.assign({},a,{render:function(e){var n=e.location;return a.AuthObj.isAuthenticated?t:s.a.createElement(p.a,{to:{pathname:"/login",state:{from:n}}})}}))}var R=function(){return s.a.createElement("div",{className:"App"},s.a.createElement(d.a,{basename:"guestbook-frontend"},s.a.createElement(p.d,null,s.a.createElement(p.b,{path:"/login"},s.a.createElement(h,{AuthObj:N})),s.a.createElement(p.b,{exact:!0,path:"/"},s.a.createElement(h,{AuthObj:N})),s.a.createElement(p.b,{path:"/signup"},s.a.createElement(C,null)),s.a.createElement(G,{AuthObj:N,path:"/guestBook"},s.a.createElement(W,{AuthObj:N})),s.a.createElement(p.b,null,s.a.createElement("h1",{style:{background:"white",fontSize:"100px",borderRadius:"50px",padding:"100px"}},"Not Found")))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(s.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},50:function(e,t,a){e.exports={loginContainer:"Login_loginContainer__3Scu4",signInHeader:"Login_signInHeader__XOfca",loginForm:"Login_loginForm__32H5B",inputField:"Login_inputField__2pWCd",submitButton:"Login_submitButton__sPrWP",signUpLink:"Login_signUpLink__3-Pyy"}},76:function(e,t,a){e.exports={bookFormContainer:"BookForm_bookFormContainer__3OZXD",headerTitle:"BookForm_headerTitle__3f_Mw",signOutButton:"BookForm_signOutButton__1kzce",addMessageButton:"BookForm_addMessageButton__QTq-F"}}},[[197,1,2]]]);
//# sourceMappingURL=main.3b4804e9.chunk.js.map