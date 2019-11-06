(window.webpackJsonpmeetup=window.webpackJsonpmeetup||[]).push([[0],{177:function(e,t,n){e.exports=n(377)},182:function(e,t,n){},183:function(e,t,n){},377:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),i=n(54),s=n.n(i),o=(n(182),n(8)),c=n(13),u=n(10),l=n(9),h=n(11),d=(n(183),n(142)),p=n.n(d),m=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={showDetails:!1},n.handleShowDetails=function(){!1===n.state.showDetails?n.setState({showDetails:!0}):n.setState({showDetails:!1})},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.state.showDetails;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("p",{className:"event__Overview--name"},this.props.event.name),r.a.createElement("p",{className:"event__Overview--localDate"},this.props.event.local_date),r.a.createElement("button",{className:"details-btn",onClick:function(){return e.handleShowDetails()}},"show details")),t&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("p",{className:"event__Details--description"},this.props.event.description)))}}]),t}(a.Component),f=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",{className:"EventList"},this.props.events.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(m,{event:e}))}))}}]),t}(a.Component),v=n(23),g=n.n(v),b=n(57),w=n(58),y=n.n(w),E={city:{id:1007700,city:"M\xfcnchen",lat:48.14,lon:11.58,state:"",country:"de",zip:"meetup3",member_count:1257},events:[{created:1563825339e3,duration:9e6,id:"263370107",name:"Microservices mit dem MicroProfile 3.x",rsvp_limit:80,date_in_series_pattern:!1,status:"upcoming",time:15669252e5,local_date:"2019-08-27",local_time:"19:00",updated:1563825339e3,utc_offset:72e5,waitlist_count:79,yes_rsvp_count:80,venue:{id:26266792,name:"adesso AG",lat:53.54524230957031,lon:9.950983047485352,repinned:!1,address_1:"Gro\xdfe Elbstra\xdfe 36",city:"Hamburg",country:"de",localized_country_name:"Deutschland"},group:{created:1387402147e3,name:"Java User Group Hamburg",id:11500362,join_mode:"open",lat:53.54999923706055,lon:10,urlname:"jug-hamburg",who:"Mitglieder",localized_location:"Hamburg, Deutschland",state:"",country:"de",region:"de_DE",timezone:"Europe/Berlin"},link:"https://www.meetup.com/de-DE/jug-hamburg/events/263370107/",description:"<p>Wer Microservices in Java entwickeln m\xf6chte, muss nicht zwangsl\xe4ufig zu Spring Boot greifen. Es lohnt ein Blick auf alternative Frameworks, die in zunehmender Anzahl verf\xfcgbar sind und bez\xfcglich ihrer Funktionalit\xe4t stark aufholen. So schreitet auch die Entwicklung des MicroProfiles weiter voran. In beeindruckender Geschwindigkeit wurden zahlreiche APIs entwickelt, die (nicht nur) f\xfcr die Entwicklung von Microservices sehr hilfreich sind.<br/>Hierzu z\xe4hlen die Unterst\xfctzung von Metriken, Health Checks, Fault Tolerance und JSON Web Tokens. F\xfcr den Einsatz im Projekt kann aus unterschiedlichen Implementierungen wie TomEE, Thorntail oder OpenLiberty gew\xe4hlt werden. In dieser Live-Coding-Session wird der praktische Einsatz von MicroProfile anhand eines Praxisbeispiels demonstriert.<br/> <br/> <br/>Referent:<br/>Thilo Frotscher arbeitet als freiberuflicher Softwarearchitekt und Trainer. Als Experte f\xfcr Enterprise Java und Systemintegration unterst\xfctzt er seine Kunden \xfcberwiegend durch Entwicklung, Reviews oder die Durchf\xfchrung von Schulungen. Thilo ist (Co-)Autor mehrerer B\xfccher in den Bereichen Java EE, (Web) Services und Systemintegration, hat zahlreiche Fachartikel verfasst und spricht regelm\xe4\xdfig auf Fachkonferenzen und Schulungsveranstaltungen oder bei Java User Groups.</p> ",visibility:"public",member_pay_fee:!1}]};function k(){return(k=Object(b.a)(g.a.mark(function e(t){var n,a,r,i;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",[{city:"Munich",country:"de",localized_country_name:"Germany",name_string:"Munich, Germany",zip:"meetup3",lat:48.14,lon:11.58},{city:"Munich",country:"us",localized_country_name:"USA",state:"ND",name_string:"Munich, North Dakota, USA",zip:"58352",lat:48.66,lon:-98.85}]);case 2:return e.next=4,j();case 4:if(!(n=e.sent)){e.next=13;break}return a="https://api.meetup.com/find/locations?&sign=true&photo-host=public&query="+t+"&access_token="+n,e.next=9,y.a.get(a);case 9:return r=e.sent,(i=r.data.events).length&&localStorage.setItem("lastEvents",JSON.stringify(i)),e.abrupt("return",i);case 13:return e.abrupt("return",[]);case 14:case"end":return e.stop()}},e)}))).apply(this,arguments)}function _(e,t,n){return O.apply(this,arguments)}function O(){return(O=Object(b.a)(g.a.mark(function e(t,n,a){var r,i,s,o,c;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.href.startsWith("http://localhost")){e.next=2;break}return e.abrupt("return",E.events);case 2:if(navigator.onLine){e.next=5;break}return r=localStorage.getItem("lastEvents"),e.abrupt("return",JSON.parse(r));case 5:return e.next=7,j();case 7:if(!(i=e.sent)){e.next=18;break}return s="https://api.meetup.com/find/upcoming_events?&sign=true&photo-host=public&access_token="+i,t&&n&&(s+="&lat="+t+"&lon="+n),a&&(s+="&page="+a),t&&n&&a&&(s+="&lat="+t+"&lon="+n+"&page="+a),e.next=15,y.a.get(s);case 15:return o=e.sent,c=o.data.events,e.abrupt("return",c);case 18:case"end":return e.stop()}},e)}))).apply(this,arguments)}function j(){var e=localStorage.getItem("access_token");if(!e){var t=new URLSearchParams(window.location.search).get("code");return t?S("get",t):(window.location.href="https://secure.meetup.com/oauth2/authorize?client_id=jr2bsub23bropmv7e9cn3v9mvp&response_type=code&redirect_uri=https://cilvin.github.io/meetup/",null)}var n=localStorage.getItem("last_saved_time");return e&&Date.now()-n<36e5?e:S("renew",localStorage.getItem("refresh_token"))}function S(e,t){return x.apply(this,arguments)}function x(){return(x=Object(b.a)(g.a.mark(function e(t,n){var a,r;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return"get"===t?a="https://a1yi0t3eah.execute-api.us-west-2.amazonaws.com/dev/api/token/"+n:"renew"===t&&(a="https://a1yi0t3eah.execute-api.us-west-2.amazonaws.com/dev/api/refreshtoken"+n),e.next=3,y.a.get(a);case 3:return r=e.sent,localStorage.setItem("access_token",r.data.access_token),localStorage.setItem("refresh_token",r.data.refresh_token),localStorage.setItem("last_saved_time",Date.now()),e.abrupt("return",r.data.access_token);case 8:case"end":return e.stop()}},e)}))).apply(this,arguments)}var D=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).getStyle=function(){return{color:n.color}},n.color=null,n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),t}(a.Component),C=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="blue",n}return Object(h.a)(t,e),t}(D),z=function(e){function t(e){var n;return Object(o.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).color="red",n}return Object(h.a)(t,e),t}(D),N=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={query:"",suggestions:[],infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({query:t}),function(e){return k.apply(this,arguments)}(t).then(function(e){n.setState({suggestions:e}),t&&0===e.length?n.setState({infoText:"We can not find the city you are looking for. Please try another city"}):n.setState({infoText:""})})},n.handleItemClicked=function(e,t,a){n.setState({query:e,suggestions:[]}),n.props.updateEvents(t,a)},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"CitySearch"},r.a.createElement(C,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged,placeholder:"Your City of Choice"}),r.a.createElement("ul",{className:"suggestions"},this.state.suggestions.map(function(t){return r.a.createElement("li",{key:t.name_string,onClick:function(){return e.handleItemClicked(t.name_string,t.lat,t.lon)}},t.name_string)})))}}]),t}(a.Component),A=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={numberOfEvents:32,infoText:""},n.handleInputChanged=function(e){var t=e.target.value;n.setState({numberOfEvents:t}),t<1?n.setState({infoText:"Number must be 1 or greater"}):(n.setState({infoText:""}),n.props.updateEvents(null,null,t))},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:this.state.numberOfEvents,onChange:this.handleInputChanged}),r.a.createElement(z,{text:this.state.infoText}))}}]),t}(a.Component),I=n(24),T=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(r)))).state={events:[],page:null,defaultCity:"",lat:null,lon:null},n.updateEvents=function(e,t,a){e&&t?_(e,t,n.state.page).then(function(a){return n.setState({events:a,lat:e,lon:t})}):a?_(n.state.lat,n.state.lon,a).then(function(e){return n.setState({events:e,page:a})}):_(n.state.lat,n.state.lon,n.state.page).then(function(e){return n.setState({events:e})})},n.countEventsOnADate=function(e){for(var t=0,a=0;a<n.state.events.length;a+=1)n.state.events[a].local_date===e&&(t+=1);return t},n.getData=function(){for(var e=[],t=p()(),a=0;a<7;a+=1){t.add(1,"days");var r=t.format("YYYY-MM-DD"),i=n.countEventsOnADate(r);e.push({date:r,number:i})}return e},n}return Object(h.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;_().then(function(t){return e.setState({events:t})})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(N,{updateEvents:this.updateEvents}),r.a.createElement(A,{updateEvents:this.updateEvents,numberOfEvents:this.state.events.length,lat:this.state.lat,lon:this.state.lon}),r.a.createElement(I.c,{width:400,height:400,margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(I.a,null),r.a.createElement(I.e,{type:"category",dataKey:"date",name:"date"}),r.a.createElement(I.f,{type:"number",dataKey:"number",name:"number of events"}),r.a.createElement(I.d,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(I.b,{data:this.getData(),fill:"#8884d8"})),r.a.createElement(f,{events:this.state.events}))}}]),t}(a.Component),M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function W(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var J=n(151);s.a.render(r.a.createElement(T,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meetup",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/meetup","/service-worker.js");M?(!function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):W(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):W(t,e)})}}(),J.config("b331bcbee8684f28a326700eba8c3063").install()}},[[177,1,2]]]);
//# sourceMappingURL=main.5ce1fedf.chunk.js.map