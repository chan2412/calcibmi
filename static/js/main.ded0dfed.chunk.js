(this.webpackJsonpbmichan=this.webpackJsonpbmichan||[]).push([[0],{41:function(e,t,a){e.exports=a(51)},46:function(e,t,a){},47:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(8),i=a.n(r),c=(a(46),a(31)),o=a(32),s=a(35),u=a(34),m=a(81),b=a(87),h=a(85),d=a(86),v=(a(47),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).hm=function(e){var t=e.target.value;n.setState({h:t})},n.hn=function(e){var t=e.target.value;n.setState({w:t});var a=n.state.h/100,l=t/(a*a);l<18.5?n.setState({val:"underWeight"}):l>=18.5&&l<=24.9?n.setState({val:"NormalWeight"}):l>=25&&l<=29.9?n.setState({val:"OverWeight"}):l>=30&&n.setState({val:"Obese"}),n.setState({bmi:l})},n.hand=function(){n.setState({bmi:0,h:0,w:0})},n.state={h:0,w:0,bmi:0,val:""},n}return Object(o.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(m.a,{variant:"contained",color:"secondary",style:{background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)"}},l.a.createElement("h2",null,"BMI CALCULATOR")),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(h.a,{fixed:!0,style:{background:"linear-gradient(45deg, #06beb6 60%, #48b1bf 70%)",position:"absolute",border:"solid",paddingTop:"50px",paddingLeft:"50px",paddingRight:"100px",width:"320px"}},l.a.createElement("p",null,"BMI is ",this.state.bmi),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("p",null,this.state.val),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,{label:"Height(in Cms)",variant:"outlined",type:"number",max:"250",value:this.state.h,onChange:this.hm}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(d.a,{label:"Weight(in Kgs)",variant:"outlined",type:"number",max:"400",value:this.state.w,onChange:this.hn}),l.a.createElement("br",null),l.a.createElement("br",null)," ",l.a.createElement(b.a,{onClick:this.hand,variant:"contained",color:"primary"},"Reset"),l.a.createElement("br",null),l.a.createElement("br",null)))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[41,1,2]]]);
//# sourceMappingURL=main.ded0dfed.chunk.js.map