(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},16:function(e,t,n){},17:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),s=n.n(i),r=(n(16),n(6)),p=n(9),l=n(1),c=n(2),u=n(4),m=n(3),h=n(5),f=(n(17),function(e){function t(){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"show",value:function(e,t,n){var a="note ".concat(t," ").concat(n);return o.a.createElement("div",{className:a},o.a.createElement("p",{className:"text-notif"},e))}},{key:"render",value:function(){return console.log(this.props),this.props.isOpen?this.show(this.props.message,this.props.position,this.props.type):""}}]),t}(o.a.Component)),d=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).noteArray=void 0,n.noteCounter=void 0,n.noteArray=[],n.state={noteToShow:[]},n.noteCounter=0,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.isOpen!==this.props.isOpen&&this.props.isOpen&&this.addNote(this.props.message,this.props.type,this.props.position)}},{key:"addNote",value:function(e,t,n){var a={message:e,position:n,type:t,key:String(this.noteCounter)};this.updateNoteList(a)}},{key:"updateNoteList",value:function(e){var t=this;this.noteCounter++,this.noteArray.push(e),this.setState({noteToShow:this.noteArray}),setTimeout(function(){console.log("removed: "+e),t.noteArray.shift()},3e3)}},{key:"render",value:function(){var e=this;return o.a.createElement("section",{id:"all-notes"},["topLeft","topRight","bottomLeft","bottomRight"].map(function(t,n){return o.a.createElement("div",{className:"notification-area",id:t,key:n},(e.state.noteToShow||[]).map(function(n){return t===n.position?o.a.createElement(f,{message:n.message,position:n.position,type:n.type,key:n.key,isOpen:e.props.isOpen}):""}))}))}}]),t}(a.Component),b=function(e){function t(e){return Object(l.a)(this,t),Object(u.a)(this,Object(m.a)(t).call(this,e))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",null,o.a.createElement("label",{htmlFor:"message"},"Message:",o.a.createElement("input",{type:"text",value:this.props.info.message,onChange:this.props.onChange,id:"message",name:"message"})),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"position"},"Position:",o.a.createElement("select",{value:this.props.info.position,onChange:this.props.onChange,id:"position",name:"position"},o.a.createElement("option",{value:"topLeft"},"Top-left"),o.a.createElement("option",{value:"topRight"},"Top-right"),o.a.createElement("option",{value:"bottomLeft"},"Bottom-left"),o.a.createElement("option",{value:"bottomRight"},"Bottom-right"))),o.a.createElement("br",null),o.a.createElement("label",{htmlFor:"type"},"Type:",o.a.createElement("select",{value:this.props.info.type,onChange:this.props.onChange,id:"type",name:"type"},o.a.createElement("option",{value:"alert"},"Alert"),o.a.createElement("option",{value:"info"},"Info"),o.a.createElement("option",{value:"warning"},"Warning"))),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",id:"submit",onClick:this.props.onSubmit},"Send Message")))}}]),t}(o.a.Component),g=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={isOpen:!1,formData:{message:"",type:"alert",position:"topLeft"}},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"addNote",value:function(e){var t=this;e.preventDefault(),this.state.formData.message?(this.setState({isOpen:!0}),setTimeout(function(){t.setState({isOpen:!1})},3e3)):alert("Enter a message fool!")}},{key:"handleChange",value:function(e){var t=e.target,n=t.name,a=t.value;this.setState(function(e){return{formData:Object(p.a)({},e.formData,Object(r.a)({},n,a))}})}},{key:"render",value:function(){return a.createElement("section",{role:"main"},a.createElement(d,{isOpen:this.state.isOpen,message:this.state.formData.message,type:this.state.formData.type,position:this.state.formData.position}),a.createElement("h1",null,"Note Maker 3000"),a.createElement(b,{onChange:this.handleChange.bind(this),onSubmit:this.addNote.bind(this),info:this.state.formData}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.31bfeca4.chunk.js.map