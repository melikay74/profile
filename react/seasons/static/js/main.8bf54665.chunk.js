(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),o=a(6),c=a(4),s=a(7),l=a(0),i=a.n(l),u=a(5),m=a.n(u),d=(a(14),{summer:{text:"Let's hit the beach!",iconName:"sun",iconColor:"orange"},winter:{text:"Brrr it's cold!",iconName:"snowflake",iconColor:"blue"}}),h=function(e){var t,a,n=(t=e.lat,(a=(new Date).getMonth())>2&&a<9?t>0?"summer":"winter":t>0?"winter":"summer"),r=d[n],o=r.text,c=r.iconName,s=r.iconColor;return i.a.createElement("div",{className:"season-display ".concat(n)},i.a.createElement("i",{className:"icon-left ".concat(c," icon huge ").concat(s)}),i.a.createElement("h1",null,o),i.a.createElement("i",{className:"icon-right ".concat(c," icon huge ").concat(s)}))},g=function(e){return i.a.createElement("div",{className:"ui active dimmer"},i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("div",{className:"ui big text loader"},i.a.createElement("p",null,e.message)))};g.defaultProps={message:"Loading..."};var f=g,v=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,s=new Array(r),l=0;l<r;l++)s[l]=arguments[l];return(a=Object(o.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(s)))).state={lat:null,errorMessage:""},a}return Object(s.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition(function(t){return e.setState({lat:t.coords.latitude})},function(t){return e.setState({errorMessage:t.message})})}},{key:"renderContent",value:function(){return this.state.errorMessage&&!this.state.lat?i.a.createElement("div",null,"Error: ",this.state.errorMessage):!this.state.errorMessage&&this.state.lat?i.a.createElement(h,{lat:this.state.lat}):i.a.createElement(f,{message:"Please accept location request if asked."})}},{key:"render",value:function(){return i.a.createElement("div",null,this.renderContent())}}]),t}(i.a.Component);m.a.render(i.a.createElement(v,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8bf54665.chunk.js.map