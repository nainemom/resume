!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(t.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(i,r,function(n){return e[n]}.bind(null,r));return i},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n),function(e){t(2);e.utils=t(7).default,e.templates=t(8).default,e.me=t(9).default;var n=document.getElementById("app");n.innerHTML+=t(10),n.innerHTML+=t(11),n.innerHTML+=t(12),n.innerHTML+=t(13),n.innerHTML+=t(14),n.innerHTML=utils.applyEvals(n.innerHTML),setTimeout(function(){document.dispatchEvent(new Event("prerender-ready"))})}.call(this,t(1))},function(e,n){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"==typeof window&&(t=window)}e.exports=t},function(e,n,t){var i=t(3);"string"==typeof i&&(i=[[e.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t(5)(i,r);i.locals&&(e.exports=i.locals)},function(e,n,t){(e.exports=t(4)(!1)).push([e.i,"* {\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  background: #fff;\n  font-size: 15px;\n  line-height: 1.7;\n  padding: 15px;\n  font-family: 'Noto Sans', sans-serif;\n}\n\n#app {\n  max-width: 960px;\n  margin: 0 auto;\n  text-align: justify;\n}\n\n.inline-block {\n  display: inline-block;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.text-justify {\n  text-align: justify;\n}\n\n.text-start {\n  text-align: left;\n}\n\n.text-end {\n  text-align: right;\n}\n\n.list-section {\n  border-left: solid 3px #000;\n}\n\n.padding {\n  padding: 15px;\n}\n\n.padding-v {\n  padding-top: 15px;\n  padding-bottom: 15px;\n}\n\n.padding-h {\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.padding-l {\n  padding-left: 15px;\n}\n\n.margin-v {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n\n.margin-t {\n  margin-top: 15px;\n}\n\n.flex {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex.row {\n  flex-direction: row;\n}\n\n.flex.col {\n  flex-direction: column;\n}\n\n.flex.wrap {\n  flex-wrap: wrap;\n}\n\n.flex > .grow {\n  flex-grow: 1;\n}\n\n.section-title {\n  background: #000;\n  color: #fff;\n  padding: 3px 10px;\n  display: inline-block;\n}",""])},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=(a=i,s=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),o=i.sources.map(function(e){return"/*# sourceURL=".concat(i.sourceRoot).concat(e," */")});return[t].concat(o).concat([r]).join("\n")}var a,s,c;return[t].join("\n")}(n,e);return n[2]?"@media ".concat(n[2],"{").concat(t,"}"):t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(i[o]=!0)}for(var a=0;a<e.length;a++){var s=e[a];null!=s[0]&&i[s[0]]||(t&&!s[2]?s[2]=t:t&&(s[2]="(".concat(s[2],") and (").concat(t,")")),n.push(s))}},n}},function(e,n,t){var i,r,o={},a=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=i.apply(this,arguments)),r}),s=function(e){var n={};return function(e,t){if("function"==typeof e)return e();if(void 0===n[e]){var i=function(e,n){return n?n.querySelector(e):document.querySelector(e)}.call(this,e,t);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(e){i=null}n[e]=i}return n[e]}}(),c=null,l=0,p=[],u=t(6);function d(e,n){for(var t=0;t<e.length;t++){var i=e[t],r=o[i.id];if(r){r.refs++;for(var a=0;a<r.parts.length;a++)r.parts[a](i.parts[a]);for(;a<i.parts.length;a++)r.parts.push(g(i.parts[a],n))}else{var s=[];for(a=0;a<i.parts.length;a++)s.push(g(i.parts[a],n));o[i.id]={id:i.id,refs:1,parts:s}}}}function f(e,n){for(var t=[],i={},r=0;r<e.length;r++){var o=e[r],a=n.base?o[0]+n.base:o[0],s={css:o[1],media:o[2],sourceMap:o[3]};i[a]?i[a].parts.push(s):t.push(i[a]={id:a,parts:[s]})}return t}function m(e,n){var t=s(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=p[p.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),p.push(n);else if("bottom"===e.insertAt)t.appendChild(n);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,t);t.insertBefore(n,r)}}function h(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var n=p.indexOf(e);n>=0&&p.splice(n,1)}function b(e){var n=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var i=function(){0;return t.nc}();i&&(e.attrs.nonce=i)}return v(n,e.attrs),m(e,n),n}function v(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function g(e,n){var t,i,r,o;if(n.transform&&e.css){if(!(o="function"==typeof n.transform?n.transform(e.css):n.transform.default(e.css)))return function(){};e.css=o}if(n.singleton){var a=l++;t=c||(c=b(n)),i=k.bind(null,t,a,!1),r=k.bind(null,t,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",v(n,e.attrs),m(e,n),n}(n),i=function(e,n,t){var i=t.css,r=t.sourceMap,o=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||o)&&(i=u(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),r=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=b(n),i=function(e,n){var t=n.css,i=n.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){h(t)});return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=a()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var t=f(e,n);return d(t,n),function(e){for(var i=[],r=0;r<t.length;r++){var a=t[r];(s=o[a.id]).refs--,i.push(s)}e&&d(f(e,n),n);for(r=0;r<i.length;r++){var s;if(0===(s=i[r]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete o[s.id]}}}};var y,w=(y=[],function(e,n){return y[e]=n,y.filter(Boolean).join("\n")});function k(e,n,t,i){var r=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=w(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}},function(e,n){e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,i=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r,o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_exports__.default={replaceAll:function(e,n,t){return e.split(n).join(t)},applyEvals:function applyEvals(markup){var _this=this,res=markup,expersions=markup.match(/{{[^}]*\}}/g),evals=expersions.map(function(e){return e.substr(2,e.length-4)});return expersions.forEach(function(pos,index){res=_this.replaceAll(res,pos,eval(evals[index]))}),res}}},function(e,n,t){"use strict";t.r(n);var i={workExpTag:function(e){var n=new Date(e.from).getTime(),t=(("present"===e.to?Date.now():new Date(e.to).getTime())-n)/864e5,r=Math.round(t/30);return'\n      <div class="list-section margin-v padding-h">\n        <div>\n          <h3 class="inline-block"> '.concat(e.title," </h3> - <i> ").concat(i.dateFormat(e.from)," to ").concat(i.dateFormat(e.to)," (~").concat(r," Months)</i>\n        </div>\n        <h4> ").concat(e.position," </h4>\n        <p> ").concat(e.info||e.description," </p>\n      </div>\n    ")},headerLinksTag:function(e){var n='<a href="mailto:'.concat(e.mail,'" title="').concat(e.mail,'">').concat(e.mail.replace("@","[at]"),'</a> | <a href="callto:').concat(e.phone,'" title="').concat(e.phone,'">').concat(e.phone,"</a> | ");return e.links.forEach(function(t,i){n+='<a href="'.concat(t.link,'" target="_blank">').concat(t.title,"</a>"),i+1!==e.links.length&&(n+=" | ")}),n},openSourceProjectTag:function(e){return'\n      <div class="list-section margin-v padding-h">\n        <div>\n          <h3 class="inline-block"> '.concat(e.title," </h3> - <i> as ").concat(0===e.as?"Creator - Maintainer":"Contributer","  </i> ").concat(e.accessLink&&' - <a href="'.concat(e.accessLink,'" target="_blank">Access Link</a>'),' - <a href="').concat(e.githubLink,'" target="_blank">Github Link</a>\n        </div>\n        <p> ').concat(e.description," </p>\n      </div>\n    ")},dateFormat:function(e){return"present"===e?"Present":"".concat(["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][e.getMonth()]," ").concat(e.getFullYear())}};n.default=i},function(e,n,t){"use strict";t.r(n),n.default={careerStart:"2013-04-30T19:30:00.000Z",experience:function(){var e=new Date(this.careerStart).getTime(),n=(new Date).getTime();return"~".concat(Math.round((n-e)/31536e6))},name:"Amir Momenian",mail:"nainemom@gmail.com",phone:"+989365586015",github:"https://github.com/nainemom",linkedin:"https://www.linkedin.com/in/amir-momenian-58073780",workExpriences:[{title:"Cafe Bazaar",info:"Cafe Bazaar is the most popular Android AppStore for Persian users with +46 million user.",from:new Date("18 July 2020"),to:"present",type:1,position:"Frontend Developer (Full-Time Job)"},{title:"Snapp",info:"Snapp is the largest ride-hailing application in the Middle East with ~40 million user and ~2 million rides per day.",from:new Date("10 May 2019"),to:new Date("15 July 2020"),type:1,position:"Frontend Developer (Full-Time Job)"},{title:"Paygear Tunisia",from:new Date("10 November 2018"),to:new Date("10 April 2019"),type:0,position:"Frontend Developer (Part-Time Job)",description:"I worked on arabic/english version of Paygear backoffice panel to lunch in Tunisia."},{title:"HotelOneClick",from:new Date("10 March 2018"),to:new Date("10 April 2019"),type:0,position:"Frontend Developer - Platform Designer (Part-Time Job)",description:"Helped to design whole platform and specifically worked on Persian/English versions of Website/Backoffice."},{title:"Paygear",info:"Paygear is a subset of Parsian Bank providing Mobile-Banking/Online-Wallet mobile application.",from:new Date("10 April 2017"),to:new Date("10 April 2019"),type:1,position:"Frontend Developer (Full-Time Job)",description:"Works on Paygear backoffice panel and create Paygear push notification service."},{title:"Mahna",info:"Mahna is a multi-functions company launched at 2009 to provide B2B like softwares including Telecommunications, GIS, and VoIP services to customers.",from:new Date("10 May 2013"),to:new Date("10 April 2017"),type:1,position:"Full-stack Developer (Full-Time Job)"}],openSourceProjects:[{title:"Framevuerk",as:0,description:"Multi language/direction UI framework based on VueJS including most usable components like Datepicker and Dropdown.",accessLink:"https://framevuerk.com",githubLink:"https://github.com/framevuerk/framevuerk"},{title:"Viska",as:0,description:"An Anonymous Chat Service.",accessLink:"https://viska.chat",githubLink:"https://github.com/nainemom/viska"},{title:"Hazy",as:0,description:"Secure service to send and receive anonymous messages.",accessLink:"https://hazyapp.com",githubLink:"https://github.com/hazy-app/webapp"},{title:"IDate",as:0,description:"Iranian Date constractor for Javascript, Just like native javascript Date.",accessLink:"https://github.com/nainemom/idate"},{title:"Nemojy",as:0,description:"A minimal desktop app to browsing and using emojies.",accessLink:"https://github.com/nainemom/nemojy"}]}},function(e,n){e.exports='<div id="header" class="text-center">\n  <div class="info">\n    <h1> {{ me.name }} </h1>\n    <div>\n      <b>Location:</b> Tehran, Iran<span class="padding-l"></span><b>Mail:</b> {{me.mail.replace(\'@\', \'[at]\')}}<span class="padding-l"></span><b>Phone:</b> {{me.phone}}\n    </div>\n    <div>\n      <a href="{{me.github}}" target="__blank">Github</a> - <a href="{{me.linkedin}}" target="__blank">Linkedin</a>\n    </div>\n  </div>\n</div>'},function(e,n){e.exports='<p class="padding-v" id="objective">\n    Accomplished various projects as frontend developer with {{ me.experience() }} years of experience. Contributed to some of the open-source projects such as Nuxt and Stringz and developed some other open-source projects including Framevuerk, iDate, Modela, and Viska.\n</p>'},function(e,n){e.exports='<div class="padding-v text-left" id="skills">\n    <h2 class="section-title">SKILLS</h2>\n    <div class="margin-v list-section padding-h">\n        <h3>Client-Side</h3>\n        <p>\n            I mostly work as a frontend developer. I know how <b>Javascript</b> works, plus frameworks such as <b>Vue (advanced)</b>, <b>Nuxt (advanced)</b>, <b>React</b>, and <b>Angular-1.x</b> and also basics of <b>Typescript</b>.\n            I\'ve created various projects including <b>PWA</b>, Desktop Apps (using <b>Electron</b>), and Mobile Apps (using <b>Cordova</b>) and Tizen/WebOS apps (using web tecknologies).\n            I understand how a Web-Project creates, maintains and finnaly works, so I just mention some other tools that I\'m familier with:\n            <b>Webpack</b>, <b>Rollup</b>, <b>CSS-Modules</b>, <b>Esling</b>, <b>SSR libs</b>, <b>Pre-render libs</b>, <b>Cordova</b>, and more.\n        </p>\n    </div>\n    <div class="margin-v list-section padding-h">\n        <h3>Server-Side</h3>\n        <p>\n            In my career there were a lot of times that I faced to server jobs as an <b>Amateur</b> developer. I understand <b>GNU/Linux</b> basics, also I can write a server-side code with <b>NodeJS</b>, connect it to DBs like <b>MySQL</b> and <b>MongoDB</b>, handle queues with <b>RabbitMQ</b> and finnaly manage images/containers/services via <b>Docker</b> and <b>Kubernetees</b>.\n        </p>\n    </div>\n</div>\n'},function(e,n){e.exports='<div class="padding-v text-left" id="work-exprience" style="page-break-after: always">\n    <h2 class="section-title">WORK EXPRIENCES</h2>\n    <div>\n        {{me.workExpriences.map(templates.workExpTag).join(\'\')}}\n    </div>\n</div>\n    '},function(e,n){e.exports='<div class="padding-v text-left" id="work-exprience">\n    <h2 class="section-title">OPEN-SOURCE PROJECTS</h2>\n    <p class="margin-t"> I like to create things. I spend almost all of my free time to problem-solver stuff. In this section, I just mention some of the open-source projects made by me:</p>\n    <div>\n        {{me.openSourceProjects.map(templates.openSourceProjectTag).join(\'\')}}\n    </div>\n</div>\n    '}]);