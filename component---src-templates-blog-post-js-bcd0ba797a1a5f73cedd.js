(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("3nLz");var r=a("lXOL"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s),l=a("p3AD"),d=a("N8DM");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(l.a)(2.5)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(l.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,"Bryant")," is a Software Engineer based in Singapore."," ",n.a.createElement(d.ThemeToggler,null,(function(e){var t=e.theme,a=e.toggleTheme;return n.a.createElement("label",{class:"toggle-switch"},n.a.createElement("input",{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),n.a.createElement("span",{class:"toggle-slider"}))})),n.a.createElement("br",null),n.a.createElement("a",{href:"https://instagram.com/"+i.instagram},"Follow him on Instagram")))}},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("XEEL")),s=r(a("v06X")),o=r(a("uDP2")),l=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},A=Object.create({}),p=function(e){var t=u(e),a=f(t);return A[a]||!1},g="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,m=h&&window.IntersectionObserver,b=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),t.concat(a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function v(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(b.has(e.target)){var t=b.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),b.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),b.set(e,t)),function(){a.unobserve(e),b.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?w(e,!0):"")+w(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},B=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(I,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},I=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},A,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));I.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var O=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.addNoScript=!(t.critical&&!t.fadeIn),a.useIOSupport=!g&&m&&!t.critical&&!a.seenBefore;var r=t.critical||h&&(g||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),A[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,g=e.fixed,h=e.backgroundColor,m=e.durationFadeIn,b=e.Tag,y=e.itemProp,w=e.loading,L=e.draggable,O=!1===this.state.fadeIn||this.state.imgLoaded,R=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,l.default)({opacity:O?1:0,transition:R?"opacity "+m+"ms":"none"},o),C="boolean"==typeof h?"lightgray":h,Q={transitionDelay:m+"ms"},k=(0,l.default)({opacity:this.state.imgLoaded?0:1},R&&Q,o,f),N={title:t,alt:this.state.isVisible?"":a,style:k,className:A};if(p){var T=p,M=T[0];return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(b,{style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},R&&Q)}),M.base64&&d.default.createElement(B,{src:M.base64,spreadProps:N,imageVariants:T,generateSources:v}),M.tracedSVG&&d.default.createElement(B,{src:M.tracedSVG,spreadProps:N,imageVariants:T,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(I,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:w},M,{imageVariants:T}))}}))}if(g){var z=g,V=z[0],D=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:V.width,height:V.height},n);return"inherit"===n.display&&delete D.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:D,ref:this.handleRef,key:"fixed-"+JSON.stringify(V.srcSet)},C&&d.default.createElement(b,{title:t,style:(0,l.default)({backgroundColor:C,width:V.width,opacity:this.state.imgLoaded?0:1,height:V.height},R&&Q)}),V.base64&&d.default.createElement(B,{src:V.base64,spreadProps:N,imageVariants:z,generateSources:v}),V.tracedSVG&&d.default.createElement(B,{src:V.tracedSVG,spreadProps:N,imageVariants:z,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,E(z),d.default.createElement(I,{alt:a,title:t,width:V.width,height:V.height,sizes:V.sizes,src:V.src,crossOrigin:this.props.crossOrigin,srcSet:V.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,l.default)({alt:a,title:t,loading:w},V,{imageVariants:z}))}}))}return null},t}(d.default.Component);O.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});O.propTypes={resolutions:R,sizes:x,fixed:c.default.oneOfType([R,c.default.arrayOf(R)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var C=O;t.default=C},N8DM:function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0;var i=r(a("QL1J"));t.ThemeToggler=i.default},QL1J:function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i=r(a("v06X")),n=r(a("XEEL")),s=r(a("0jh0")),o=r(a("q1tI")),l=r(a("17x9")),d=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r))||this,(0,s.default)((0,i.default)(t),"state",{theme:null}),t}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return o.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(o.default.Component);d.propTypes={children:l.default.func.isRequired};var c=d;t.default=c},lXOL:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAUJmtbORlkXPZGdf/8QAGxAAAQUBAQAAAAAAAAAAAAAAAQACAxESEyH/2gAIAQEAAQUCwKiDdSat8530Ck8LjbEY2lf/xAAXEQEAAwAAAAAAAAAAAAAAAAABABAR/9oACAEDAQE/AWOX/8QAFhEAAwAAAAAAAAAAAAAAAAAAABAh/9oACAECAQE/ASv/xAAdEAACAQQDAAAAAAAAAAAAAAABEQACICEiMTJh/9oACAEBAAY/Ai+wMqy5oRkSrCc1CfkGx4s//8QAGxABAAIDAQEAAAAAAAAAAAAAAQARIUFRMcH/2gAIAQEAAT8hophQHUB5F6jBQAOZZTO2XKqOpca54IyL2fJlW5//2gAMAwEAAgADAAAAEK/4fP/EABcRAQEBAQAAAAAAAAAAAAAAAAERABD/2gAIAQMBAT8QAxuFvf/EABkRAAIDAQAAAAAAAAAAAAAAAAABESExof/aAAgBAgEBPxBVqFJU+CJP/8QAIhABAAMAAAQHAAAAAAAAAAAAAQARITFhkcFBcYGhsdHw/9oACAEBAAE/EHAUr4qM8tl7HG2316EazwKrdV2JblxTgrDrLorVIMFM+ZkCUKpQ2naIxubOSfcuw/OMQLynJr2n/9k=","width":50,"height":50,"src":"/static/843d2ced10f1de46f43bfa4ac7c601f3/9b664/profile-pic.jpg","srcSet":"/static/843d2ced10f1de46f43bfa4ac7c601f3/9b664/profile-pic.jpg 1x,\\n/static/843d2ced10f1de46f43bfa4ac7c601f3/06a10/profile-pic.jpg 1.5x,\\n/static/843d2ced10f1de46f43bfa4ac7c601f3/f1b5a/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Bryant Khoo","social":{"twitter":"bryantkhoo","instagram":"bryantscrabbles"}}}}}')},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},yZlL:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a("E5k/");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("6Gk8"),o=a("Bl7J"),l=a("vrFN"),d=a("p3AD");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,c=a.next;return i.a.createElement(o.a,{location:this.props.location,title:t},i.a.createElement(l.a,{title:e.frontmatter.title,description:e.frontmatter.description||e.excerpt}),i.a.createElement("h1",{style:{marginTop:Object(d.a)(1),marginBottom:0}},e.frontmatter.title),i.a.createElement("p",{style:Object.assign({},Object(d.b)(-.2),{display:"block",marginBottom:Object(d.a)(1)})},e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("hr",{style:{marginBottom:Object(d.a)(1)}}),i.a.createElement(s.a,null),i.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},i.a.createElement("li",null,r&&i.a.createElement(n.a,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),i.a.createElement("li",null,c&&i.a.createElement(n.a,{to:c.fields.slug,rel:"next"},c.frontmatter.title," →"))))},r}(i.a.Component);t.default=c;var u="3654438753"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-bcd0ba797a1a5f73cedd.js.map