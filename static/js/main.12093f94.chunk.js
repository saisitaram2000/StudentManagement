(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{18:function(e,t,a){},37:function(e,t,a){e.exports=a(67)},42:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(34),c=a.n(r),u=(a(42),a(15)),s=a(1),m=a(35),i=a(7),o=a(8),h=a(14),d=a(10),E=a(9),p=(a(18),a(19).default);a(21).config();var b=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).handleInputChange=function(e){var t=e.target.name,a=e.target.value;n.setState(Object(m.a)({},t,a))},n.handleSubmit=function(e){e.preventDefault(),p.post("https://studentdatamanagement.herokuapp.com/users/",{fullname:n.state.fullname,tenth_grade:n.state.tenth_grade,intermarks:n.state.intermarks,mains:n.state.mains,advance:n.state.advance,contact:n.state.contact}).then((function(e){console.log(e)})).catch((function(e){console.log(e)})),n.setState({fullname:"",tenth_grade:"",intermarks:"",mains:"",advance:"",contact:""})},n.state={fullname:"",tenth_grade:"",intermarks:"",mains:"",advance:"",contact:""},n.handleInputChange=n.handleInputChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("center",null,l.a.createElement("h1",null,"Enter the Data fields below")),l.a.createElement("form",null,l.a.createElement("h2",null,"STUDENT FORM"),l.a.createElement("label",null,"FullName:",l.a.createElement("input",{name:"fullname",type:"text",value:this.state.fullname,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"Tenth_Grade:",l.a.createElement("input",{name:"tenth_grade",type:"number",step:"any",value:this.state.tenth_grade,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"IntermediateMarks:",l.a.createElement("input",{name:"intermarks",type:"number",value:this.state.intermarks,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"MainsRank:",l.a.createElement("input",{name:"mains",type:"number",value:this.state.mains,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"JEEAdvanceRank:",l.a.createElement("input",{name:"advance",type:"number",value:this.state.advance,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("label",null,"ContactNo:",l.a.createElement("input",{name:"contact",type:"text",value:this.state.contact,onChange:this.handleInputChange})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",className:"submit",onClick:this.handleSubmit})))}}]),a}(n.Component),f=a(12),v=a.n(f),g=a(16),k=a(19).default;a(21).config();var N=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:{}},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark((function e(){var t,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=window.location.pathname.substring(1),setTimeout(function(){this.setState({render:!0})}.bind(this),1e3),e.next=4,k.get("https://studentdatamanagement.herokuapp.com/users/"+t);case 4:a=e.sent,this.setState({data:a.data[0]});case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"flex-container"},l.a.createElement("div",{className:"flex-item"},l.a.createElement("h2",null,"STUDENT DETAILS")),l.a.createElement("div",{className:"flex-item"},l.a.createElement("label",null,"FullName :"),l.a.createElement("p",null," ",this.state.data.FullName)),l.a.createElement("div",{className:"flex-item"},l.a.createElement("label",null,"10th_Grade :"),l.a.createElement("p",null,this.state.data.Tenth_Grade)),l.a.createElement("div",{className:"flex-item"},l.a.createElement("label",null,"IntermediateMarks :"),l.a.createElement("p",null,this.state.data.IntermediateMarks)),l.a.createElement("div",{className:"flex-item"},l.a.createElement("label",null,"MainsRank :"),l.a.createElement("p",null,this.state.data.MainsRank)),l.a.createElement("div",{className:"flex-item"},l.a.createElement("label",null,"JEEAdvanceRank :"),l.a.createElement("p",null,this.state.data.JEEAdvanceRank)),l.a.createElement("div",{className:"flex-item"},l.a.createElement("label",null,"ContactNo :"),l.a.createElement("p",null,this.state.data.ContactNo)))}}]),a}(n.Component),C=a(19).default;a(21).config();var j=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={data:[]},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=Object(g.a)(v.a.mark((function e(){var t;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return setTimeout(function(){this.setState({render:!0})}.bind(this),1e3),e.next=3,C.get("".concat("https://studentdatamanagement.herokuapp.com","/users"));case 3:return t=e.sent,e.next=6,t.data;case 6:this.state.data=e.sent;case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.data.map((function(e){return l.a.createElement("div",{className:"studentlist",key:e.StudentID},l.a.createElement("a",{href:"http://localhost:3000/"+e.StudentID,className:"studentlistitem"},e.StudentID+". "+e.FullName))}))}}]),a}(n.Component),y=function(e){Object(d.a)(a,e);var t=Object(E.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).greetUser=function(e){return l.a.createElement("center",null,l.a.createElement("h1",null,"Welcome Mr. ",e.name," , here ur project is ready"))},e}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(this.greetUser,{name:"SITA RAM"}))}}]),a}(n.Component),O=function(){return l.a.createElement("h1",null,"404-page not found")};var S=function(){return l.a.createElement(u.a,null,l.a.createElement("div",null,l.a.createElement("h1",null,"STUDENT DATA MANAGEMENT SYSTEM"),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(u.b,{to:""},"Home")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"add"},"AddStudent")),l.a.createElement("li",null,l.a.createElement(u.b,{to:"student"},"List all Students"))),l.a.createElement("hr",null),l.a.createElement(s.c,null,l.a.createElement(s.a,{exact:!0,path:"",component:y}),l.a.createElement(s.a,{exact:!0,path:"add",component:b}),l.a.createElement(s.a,{exact:!0,path:"student",component:j}),l.a.createElement(s.a,{exact:!0,path:":studentid",component:N}),l.a.createElement(s.a,{path:"*",component:O}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.12093f94.chunk.js.map