(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(22)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=n(7),i=n(10),s=n(6),u=n(1),m=n(2),d=n(4),f=n(3),b=n(5),h=function(e){var t=e.toDo,n=e.done;return o.a.createElement("div",null,o.a.createElement("h1",null,"My Todo List"),o.a.createElement("h2",null,"".concat(t," more to do, ").concat(n," done")))},g=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={term:""},n.onSearchChange=function(e){var t=e.target.value;n.setState({term:t}),n.props.searchItem(t)},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("input",{type:"text",className:"form-control search-input",placeholder:"type to search",value:this.state.term,onChange:this.onSearchChange})}}]),t}(a.Component),p=n(11),v=(n(18),function(e){var t=e.label,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=e.important,l="todo-list-item";return e.done&&(l+=" done"),c&&(l+=" important"),o.a.createElement("span",{className:l},o.a.createElement("span",{onClick:r,className:"todo-list-item"},t),o.a.createElement("button",{type:"button",onClick:n,className:"btn btn-outline-danger btn-sm"},o.a.createElement("i",{className:"fa fa-trash-o"})),o.a.createElement("button",{type:"button",onClick:a,className:"btn btn-outline-success btn-sm"},o.a.createElement("i",{className:"fa fa-exclamation"})))}),y=(n(19),function(e){var t=e.todos,n=e.onDeleted,a=e.onToggleImportant,r=e.onToggleDone,c=t.map(function(e){var t=e.id,c=Object(p.a)(e,["id"]);return o.a.createElement("li",{key:t,className:"list-group-item"},o.a.createElement(v,Object.assign({},c,{onDeleted:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleDone:function(){return r(t)}})))});return o.a.createElement("ul",{className:"list-group todo-list"},c)}),O=(n(20),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={label:""},n.onLabelChange=function(e){n.setState({label:e.target.value})},n.onSubmit=function(e){e.preventDefault(),n.props.onItemAdded(n.state.label),n.setState({label:""})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"item-add-form",onSubmit:this.onSubmit},o.a.createElement("input",{type:"text",className:"form-control",onChange:this.onLabelChange,value:this.state.label,placeholder:"waths to bee done"}),o.a.createElement("button",{className:"btn btn-outline-secondary",onClick:this.onSubmit},"Add Item"))}}]),t}(a.Component)),j=function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props,t=e.filter,n=e.onFilterChange,a=this.buttons.map(function(e){var a=e.name,r=e.label,c=t===a?"btn-info":"btn-outline-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(c),onClick:function(){return n(a)},key:a},r)});return o.a.createElement("div",{className:"btn-group"},a)}}]),t}(a.Component),I=(n(21),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(d.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).maxId=0,n.state={todoData:[n.createTodoItem("Drink Coffee"),n.createTodoItem("Make Avesome"),n.createTodoItem("Okey Lets go")],term:"",filter:"all"},n.deleteItem=function(e){n.setState(function(t){var n=t.todoData,a=n.findIndex(function(t){return t.id===e});return{todoData:[].concat(Object(s.a)(n.slice(0,a)),Object(s.a)(n.slice(a+1)))}})},n.addItem=function(e){var t=n.createTodoItem(e);n.setState(function(e){var n=e.todoData;return{todoData:[].concat(Object(s.a)(n),[t])}})},n.onToggleImportant=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"important")}})},n.onToggleDone=function(e){n.setState(function(t){var a=t.todoData;return{todoData:n.toggleProperty(a,e,"done")}})},n.search=function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})},n.searchItem=function(e){n.setState({term:e})},n.filter=function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!e.done});case"done":return e.filter(function(e){return e.done});default:return e}},n.onFilterChange=function(e){n.setState({filter:e})},n}return Object(b.a)(t,e),Object(m.a)(t,[{key:"createTodoItem",value:function(e){return{label:e,important:!1,done:!1,id:this.maxId++}}},{key:"toggleProperty",value:function(e,t,n){var a=e.findIndex(function(e){return e.id===t}),o=e[a],r=Object(i.a)({},o,Object(l.a)({},n,!o[n]));return[].concat(Object(s.a)(e.slice(0,a)),[r],Object(s.a)(e.slice(a+1)))}},{key:"render",value:function(){var e=this.state,t=e.todoData,n=e.term,a=e.filter,r=this.filter(this.search(t,n),a),c=t.filter(function(e){return e.done}).length,l=t.length-c;return o.a.createElement("div",{className:"main"},o.a.createElement(h,{toDo:l,done:c}),o.a.createElement(g,{searchItem:this.searchItem}),o.a.createElement(j,{filter:a,onFilterChange:this.onFilterChange}),o.a.createElement(y,{todos:r,onDeleted:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleDone:this.onToggleDone}),o.a.createElement(O,{onItemAdded:this.addItem}))}}]),t}(a.Component));c.a.render(o.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.3e12fbf0.chunk.js.map