(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{RXBc:function(t,e,r){"use strict";r.r(e),r.d(e,"pageQuery",(function(){return p}));r("gu/5"),r("eoYm");var a=r("q1tI"),n=r.n(a),o=r("Wbzz"),l=r("6Gk8"),c=r("Bl7J"),i=r("vrFN"),u=r("p3AD");r("zGhK");var s=function(t){var e,r;function a(e){var r;return(r=t.call(this,e)||this).state={category:"blog"},r}r=t,(e=a).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var s=a.prototype;return s.selectCategory=function(t){this.setState({category:t})},s.render=function(){var t=this,e=this.props.data,r=e.site.siteMetadata.title,a=e.allMarkdownRemark.edges;return n.a.createElement(c.a,{location:this.props.location,title:r},n.a.createElement(i.a,{title:"Bryant Khoo"}),n.a.createElement(l.a,null),n.a.createElement("div",{class:"pure-button-group",role:"group","aria-label":"..."},n.a.createElement("button",{class:"pure-button",onClick:function(){return t.selectCategory("blog")}},"Blog"),n.a.createElement("button",{class:"pure-button",onClick:function(){return t.selectCategory("coding")}},"Coding"),n.a.createElement("button",{class:"pure-button",onClick:function(){return t.selectCategory("tutorial")}},"Tutorial")),a.map((function(e){var r=e.node,a=r.frontmatter.title||r.fields.slug;if(r.frontmatter.tags.includes(t.state.category))return n.a.createElement("div",{key:r.fields.slug},n.a.createElement("h3",{style:{marginBottom:Object(u.a)(1/4)}},n.a.createElement(o.Link,{style:{boxShadow:"none"},to:r.fields.slug},a)),n.a.createElement("small",null,r.frontmatter.date),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:r.frontmatter.description||r.excerpt}}))})))},a}(n.a.Component);e.default=s;var p="3493448931"},zGhK:function(t,e,r){}}]);
//# sourceMappingURL=component---src-pages-index-js-ae39cf437ee9a6f6a153.js.map