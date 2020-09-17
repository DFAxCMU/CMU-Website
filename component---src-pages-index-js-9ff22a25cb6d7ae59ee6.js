webpackJsonp([35783957827783],{101:function(e,t,n){"use strict";function o(e){return e}function r(e,t,n){function r(e,t){var n=A.hasOwnProperty(t)?A[t]:null;w.hasOwnProperty(t)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function a(e,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!t(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=e.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&b.mixins(e,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var s=n[i],l=o.hasOwnProperty(i);if(r(l,i),b.hasOwnProperty(i))b[i](e,s);else{var p=A.hasOwnProperty(i),h="function"==typeof s,y=h&&!p&&!l&&n.autobind!==!1;if(y)a.push(i,s),o[i]=s;else if(l){var m=A[i];u(p&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,i),"DEFINE_MANY_MERGED"===m?o[i]=f(o[i],s):"DEFINE_MANY"===m&&(o[i]=d(o[i],s))}else o[i]=s}}}else;}function l(e,t){if(t)for(var n in t){var o=t[n];if(t.hasOwnProperty(n)){var r=n in b;u(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;if(a){var i=g.hasOwnProperty(n)?g[n]:null;return u("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(e[n]=f(e[n],o))}e[n]=o}}}function p(e,t){u(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(u(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function f(e,t){return function(){var n=e.apply(this,arguments),o=t.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function d(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function h(e,t){var n=t.bind(e);return n}function y(e){for(var t=e.__reactAutoBindPairs,n=0;n<t.length;n+=2){var o=t[n],r=t[n+1];e[o]=h(e,r)}}function m(e){var t=o(function(e,o,r){this.__reactAutoBindPairs.length&&y(this),this.props=e,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;u("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=a});t.prototype=new _,t.prototype.constructor=t,t.prototype.__reactAutoBindPairs=[],E.forEach(a.bind(null,t)),a(t,v),a(t,e),a(t,O),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),u(t.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in A)t.prototype[r]||(t.prototype[r]=null);return t}var E=[],A={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},b={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)a(e,t[n])},childContextTypes:function(e,t){e.childContextTypes=i({},e.childContextTypes,t)},contextTypes:function(e,t){e.contextTypes=i({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps?e.getDefaultProps=f(e.getDefaultProps,t):e.getDefaultProps=t},propTypes:function(e,t){e.propTypes=i({},e.propTypes,t)},statics:function(e,t){l(e,t)},autobind:function(){}},v={componentDidMount:function(){this.__isMounted=!0}},O={componentWillUnmount:function(){this.__isMounted=!1}},w={replaceState:function(e,t){this.updater.enqueueReplaceState(this,e,t)},isMounted:function(){return!!this.__isMounted}},_=function(){};return i(_.prototype,e.prototype,w),m}var a,i=n(5),s=n(34),u=n(1),c="mixins";a={},e.exports=r},159:function(e,t){"use strict";function n(e,t,p){if("string"!=typeof t){if(l){var f=c(t);f&&f!==l&&n(e,f,p)}var d=i(t);s&&(d=d.concat(s(t)));for(var h=0;h<d.length;++h){var y=d[h];if(!(o[y]||r[y]||p&&p[y])){var m=u(t,y);try{a(e,y,m)}catch(e){}}}return e}return e}var o={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},a=Object.defineProperty,i=Object.getOwnPropertyNames,s=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,l=c&&c(Object);e.exports=n},302:function(e,t){},5:function(e,t){"use strict";function n(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function o(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(t).map(function(e){return t[e]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(e){r[e]=e}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(e){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;e.exports=o()?Object.assign:function(e,t){for(var o,s,u=n(e),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var l in o)a.call(o,l)&&(u[l]=o[l]);if(r){s=r(o);for(var p=0;p<s.length;p++)i.call(o,s[p])&&(u[s[p]]=o[s[p]])}}return u}},204:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=o(s),c=n(446),l=o(c),p=n(196),f=o(p),d=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"aboutQuestion"},u.default.createElement("div",{className:"aboutTitle"},u.default.createElement("h3",null,this.props.title),u.default.createElement("img",{className:"questionMark",src:l.default,alt:""})),u.default.createElement("div",{className:"aboutContent"},u.default.createElement("div",{className:"vertLine",style:{backgroundImage:"url('"+f.default+"')"}}),u.default.createElement("div",{className:"aboutText"},this.props.children)))},t}(u.default.Component);t.default=d,e.exports=t.default},205:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=o(s),c=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement("a",{href:"https://forms.gle/6WQ7a9FkK64cTUZk9",style:{backgroundColor:"#f58042",padding:12,borderRadius:4,boxShadow:"0 2px 8px #888888",fontSize:24,color:"white",textDecoration:"none",margin:24}},"Interested in Joining?")},t}(u.default.Component);t.default=c,e.exports=t.default},207:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=o(s),c=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"member"},u.default.createElement("div",{className:"memberPicture",style:{backgroundImage:"url('"+this.props.picture+"')"}}),u.default.createElement("span",{className:"memberName"},this.props.data.name))},t}(u.default.Component);t.default=c,e.exports=t.default},208:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=o(s),c=n(75),l=o(c),p=n(207),f=o(p),d=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){var e=this.props.images.edges.reduce(function(e,t){return e[t.node.relativePath.substring(15)]=t.node.publicURL,e},{});return u.default.createElement(l.default,{id:"members",title:"Members"},u.default.createElement("div",{className:"membersContainer"},this.props.data.edges.map(function(t){return u.default.createElement(f.default,{key:t.node.name,data:t.node,picture:e[t.node.picture_file]})})))},t}(u.default.Component);t.default=d,e.exports=t.default},209:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=o(s),c=n(75),l=o(c),p=n(204),f=o(p),d=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement(l.default,{id:"mission",title:"Mission"},u.default.createElement(f.default,{title:"Who are we"},"Design For America @ CMU is a group of interdisciplinary students who are using their unique design and engineering perspectives to confront social issues in innovative ways. By collaborating in teams of students with diverse backgrounds and interests, we develop solutions for overarching social problems."),u.default.createElement(f.default,{title:"What do we do"},"Student-led teams work closely with local community organizations to identify challenging social issues. Through the process of ideating, prototyping, and iterating, we design and develop comprehensive solutions that benefit the broader community."),u.default.createElement(f.default,{title:"Why do we do it"},"We believe that CMU students are some of the brightest and most creative makers in the world. Our goal is to channel this passion and ability to attack a variety of social impact problems at the local and national level."))},t}(u.default.Component);t.default=d,e.exports=t.default},210:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=o(s),c=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"project"},u.default.createElement("h3",{className:"projectName"},this.props.data.project_name),u.default.createElement("div",{className:"projectDesc"},this.props.data.description),u.default.createElement("span",{className:"projectTeam"},u.default.createElement("b",null,"Contact: "),u.default.createElement("a",{href:this.props.data.contact_email},this.props.data.contact_email)))},t}(u.default.Component);t.default=c,e.exports=t.default},211:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=o(s),c=n(75),l=o(c),p=n(210),f=o(p),d=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement(l.default,{id:"projects",title:"Projects"},this.props.data.edges.map(function(e){return u.default.createElement(f.default,{key:e.node.name,data:e.node})}))},t}(u.default.Component);t.default=d,e.exports=t.default},75:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var s=n(2),u=o(s),c=function(e){function t(){return r(this,t),a(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return u.default.createElement("div",{id:this.props.id,className:"section"},u.default.createElement("div",{className:"sectionTitle"},u.default.createElement("h2",null,this.props.title),u.default.createElement("div",{className:"horLine"})),this.props.children)},t}(u.default.Component);t.default=c,e.exports=t.default},445:function(e,t,n){e.exports=n.p+"static/dfahome2.c65652d2.jpg"},196:function(e,t){e.exports="data:image/png;base64,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"},446:function(e,t,n){e.exports=n.p+"static/orangequestion.ac21a5f7.png"},214:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.query=void 0;var s=n(2),u=o(s),c=n(156);o(c);n(302),n(304);var l=n(445),p=(o(l),n(196)),f=(o(p),n(209)),d=o(f),h=n(211),y=o(h),m=n(208),E=(o(m),n(205)),A=o(E),g=function(e){function t(n){return r(this,t),a(this,e.call(this,n))}return i(t,e),t.prototype.render=function(){return u.default.createElement("div",{className:"index"},u.default.createElement("div",{className:"hero"},u.default.createElement("div",{className:"heroLogo"})),u.default.createElement(A.default,null),u.default.createElement(d.default,null),u.default.createElement(y.default,{data:this.props.data.projects}),u.default.createElement(A.default,null))},t}(u.default.Component);t.default=g;t.query="** extracted graphql fragment **"},304:function(e,t){}});
//# sourceMappingURL=component---src-pages-index-js-9ff22a25cb6d7ae59ee6.js.map