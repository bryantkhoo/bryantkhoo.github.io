(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6Gk8":function(e,t,a){"use strict";a("3nLz");var r=a("lXOL"),i=a("q1tI"),n=a.n(i),s=a("9eSz"),o=a.n(s),d=a("p3AD"),l=a("N8DM");t.a=function(){var e=r.data,t=e.site.siteMetadata,a=t.author,i=t.social;return n.a.createElement("div",{style:{display:"flex",marginBottom:Object(d.a)(.2)}},n.a.createElement(o.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(d.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),n.a.createElement("p",null,n.a.createElement("strong",null,"Bryant")," is a Software Engineer based in Singapore."," ",n.a.createElement(l.ThemeToggler,null,(function(e){var t=e.theme,a=e.toggleTheme;return n.a.createElement("label",{class:"toggle-switch"},n.a.createElement("input",{type:"checkbox",onChange:function(e){return a(e.target.checked?"dark":"light")},checked:"dark"===t}),n.a.createElement("span",{class:"toggle-slider"}))})),n.a.createElement("br",null),n.a.createElement("a",{href:"https://instagram.com/"+i.instagram},"Follow him on Instagram")))}},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),d=r(a("j8BX")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(E&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(E&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},p=Object.create({}),h=function(e){var t=u(e),a=A(t);return p[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,E="undefined"!=typeof window,b=E&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function B(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},j=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},C=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=e.ariaHidden,s=l.default.createElement(R,(0,d.default)({src:t},i,{ariaHidden:n}));return a.length>1?l.default.createElement("picture",null,r(a),s):s},R=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));R.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var N=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=E&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||E&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=A(t),p[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,A=e.placeholderClassName,p=e.fluid,h=e.fixed,m=e.backgroundColor,E=e.durationFadeIn,b=e.Tag,y=e.itemProp,S=e.loading,L=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:I?1:0,transition:N?"opacity "+E+"ms":"none"},o),z="boolean"==typeof m?"lightgray":m,Q={transitionDelay:E+"ms"},T=(0,d.default)({opacity:this.state.imgLoaded?0:1},N&&Q,{},o,{},f),x={title:t,alt:this.state.isVisible?"":a,style:T,className:A,itemProp:y};if(p){var k=p,M=g(p);return l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},l.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),z&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&Q)}),M.base64&&l.default.createElement(C,{ariaHidden:!0,src:M.base64,spreadProps:x,imageVariants:k,generateSources:B}),M.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:M.tracedSVG,spreadProps:x,imageVariants:k,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(k),l.default.createElement(R,{alt:a,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:a,title:t,loading:S},M,{imageVariants:k}))}}))}if(h){var P=h,D=g(h),V=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete V.display,l.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:V,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},z&&l.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},N&&Q)}),D.base64&&l.default.createElement(C,{ariaHidden:!0,src:D.base64,spreadProps:x,imageVariants:P,generateSources:B}),D.tracedSVG&&l.default.createElement(C,{ariaHidden:!0,src:D.tracedSVG,spreadProps:x,imageVariants:P,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,v(P),l.default.createElement(R,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:y,loading:S,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:j((0,d.default)({alt:a,title:t,loading:S},D,{imageVariants:P}))}}))}return null},t}(l.default.Component);N.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),z=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});N.propTypes={resolutions:O,sizes:z,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([z,c.default.arrayOf(z)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var Q=N;t.default=Q},N8DM:function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0;var i=r(a("QL1J"));t.ThemeToggler=i.default},QL1J:function(e,t,a){"use strict";var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i=r(a("v06X")),n=r(a("XEEL")),s=r(a("0jh0")),o=r(a("q1tI")),d=r(a("17x9")),l=function(e){function t(){for(var t,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t=e.call.apply(e,[this].concat(r))||this,(0,s.default)((0,i.default)(t),"state",{theme:null}),t}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this;this.setState({theme:window.__theme}),window.__onThemeChange=function(){e.setState({theme:window.__theme})}},a.toggleTheme=function(e){window.__setPreferredTheme(e)},a.render=function(){return o.default.createElement(this.props.children,{theme:this.state.theme,toggleTheme:this.toggleTheme})},t}(o.default.Component);l.propTypes={children:d.default.func.isRequired};var c=l;t.default=c},RXBc:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));a("gu/5"),a("eoYm");var r=a("q1tI"),i=a.n(r),n=a("Wbzz"),s=a("6Gk8"),o=a("Bl7J"),d=a("vrFN"),l=a("p3AD");var c=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={category:"blog"},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=r.prototype;return c.selectCategory=function(e){this.setState({category:e})},c.render=function(){var e=this,t=this.props.data,a=t.site.siteMetadata.title,r=t.allMarkdownRemark.edges;return i.a.createElement(o.a,{location:this.props.location,title:a},i.a.createElement(d.a,{title:"Bryant Khoo"}),i.a.createElement(s.a,null),i.a.createElement("button",{onClick:function(){return e.selectCategory("blog")}},"Blog"),i.a.createElement("button",{onClick:function(){return e.selectCategory("coding")}},"Coding"),r.map((function(t){var a=t.node,r=a.frontmatter.title||a.fields.slug;if(a.frontmatter.tags.includes(e.state.category))return i.a.createElement("div",{key:a.fields.slug},i.a.createElement("h3",{style:{marginBottom:Object(l.a)(.25)}},i.a.createElement(n.Link,{style:{boxShadow:"none"},to:a.fields.slug},r)),i.a.createElement("small",null,a.frontmatter.date),i.a.createElement("p",{dangerouslySetInnerHTML:{__html:a.frontmatter.description||a.excerpt}}))})))},r}(i.a.Component);t.default=c;var u="3493448931"},lXOL:function(e){e.exports=JSON.parse('{"data":{"avatar":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAMEBf/EABYBAQEBAAAAAAAAAAAAAAAAAAEAAv/aAAwDAQACEAMQAAABQmTWziyyNHZGL//EABsQAAIDAQEBAAAAAAAAAAAAAAECAAMSERMh/9oACAEBAAEFAsDlQXVmtPed+glnwsepDWpn/8QAFxEBAAMAAAAAAAAAAAAAAAAAAQAQEf/aAAgBAwEBPwFjl//EABYRAAMAAAAAAAAAAAAAAAAAAAAQIf/aAAgBAgEBPwEr/8QAHRAAAgEEAwAAAAAAAAAAAAAAAREAAiAhIjEyYf/aAAgBAQAGPwIvsDKsuaEZEqwnNQn5BseLP//EABsQAQACAwEBAAAAAAAAAAAAAAEAESFBUTHB/9oACAEBAAE/IaKYUB1AeReowEADmWUztlyqjqXGseCMi9nyZVuf/9oADAMBAAIAAwAAABCv+L3/xAAZEQEAAgMAAAAAAAAAAAAAAAABABEQIUH/2gAIAQMBAT8QA7uCzOY//8QAGREBAAIDAAAAAAAAAAAAAAAAAQAhEBEx/9oACAECAQE/ECukNimGP//EACEQAQADAAAFBQAAAAAAAAAAAAEAESExYXGRwUGhsdHw/9oACAEBAAE/EHAUr6qM6bL2ONtvV7EbTwKrfDwS3LinBWHeXRWqQYKZ8zKEoVShtPERjc2ck+5dh+cYgXlOWe0//9k=","width":50,"height":50,"src":"/static/843d2ced10f1de46f43bfa4ac7c601f3/99438/profile-pic.jpg","srcSet":"/static/843d2ced10f1de46f43bfa4ac7c601f3/99438/profile-pic.jpg 1x,\\n/static/843d2ced10f1de46f43bfa4ac7c601f3/aba1d/profile-pic.jpg 1.5x,\\n/static/843d2ced10f1de46f43bfa4ac7c601f3/b315d/profile-pic.jpg 2x"}}},"site":{"siteMetadata":{"author":"Bryant Khoo","social":{"twitter":"bryantkhoo","instagram":"bryantscrabbles"}}}}}')},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var r=a("P8UN"),i=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),r(r.P+r.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-pages-index-js-eacf3d5eab8972727d8a.js.map