(self.webpackChunkcc_libraries_api=self.webpackChunkcc_libraries_api||[]).push([[714],{6561:function(i,e,t){"use strict";t.d(e,{a:function(){return z}});var n=t(9756),a=t(5007),s=t(4922),r=t(2905),o=t(7087),m=t(2390);var l={2:0,3:0,4:0},d=["margin-left: 0;","margin-right: 0;"],c=function(i){var e=i.icons,t=i.isCentered;return e?(0,a.cloneElement)(e,{css:(0,s.iv)("list-style:none;padding:0;margin-bottom:var(--spectrum-global-dimension-size-400)!important;display:flex;justify-content:",t?"center":"flex-start",";& li{display:flex;border-right:1px solid var(--spectrum-global-color-gray-300);height:var(--spectrum-global-dimension-size-600);margin-right:var(--spectrum-global-dimension-size-150);}& li:last-of-type{padding-right:0;border-right:none;}.gatsby-resp-image-wrapper{position:relative;width:var(--spectrum-global-dimension-size-800)!important;}.gatsby-resp-image-image{position:absolute;top:0;left:0;height:100%;object-fit:contain;}","")}):null},p=function(i){var e=i.texts;return Object.keys(e).filter((function(i){return i.startsWith("text")})).map((function(i){return e[i]}))},g=function(i){var e=i.links,t=i.isCentered;return e?(0,a.cloneElement)(e,{css:(0,s.iv)("list-style:none;padding:0;display:flex;justify-content:",t?"center":"flex-start",";margin-top:",t?"var(--spectrum-global-dimension-size-200) !important;":"var(--spectrum-global-dimension-size-600) !important;",";@media screen and (max-width: ",m.LU,"){flex-direction:column;align-items:",t?"center":"left",";li{margin-top:var(--spectrum-global-dimension-size-100);}}& li{display:flex;align-items:center;height:var(--spectrum-global-dimension-size-400);}& li a{white-space:nowrap;margin-right:var(--spectrum-global-dimension-size-600);}& li:last-of-type a{margin-right:0;}.gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-wrapper{width:var(--spectrum-global-dimension-size-400)!important;margin-left:0!important;margin-right:var(--spectrum-global-dimension-size-150)!important;}.gatsby-resp-image-image{object-fit:contain;}","")}):null},u=function(i){var e=i.video,t=null;if(e){var n=(0,m.QK)(e),a=new URL(n.props.href);if(a.hostname.startsWith("youtube.com")||a.hostname.startsWith("www.youtube.com"))t=new URLSearchParams(a.search).get("v");else a.hostname.startsWith("youtu.be")&&(t=a.pathname.slice(1))}return t?(0,s.tZ)("div",{css:(0,s.iv)("&{display:inline;width:",(0,m.MY)(6),";box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);@media screen and (max-width: ",m.LU,"){display:block;width:100%;}}","")},(0,s.tZ)(o._F,{youTubeId:t})):null},h={name:"1p8rch3",styles:"margin-top:var(--spectrum-global-dimension-size-200)"},b={name:"1idn6nd",styles:"margin-top:0!important;margin-bottom:var(--spectrum-global-dimension-size-200)!important;&+p{margin-top:0!important;}"},v={name:"k0oqwy",styles:"width:100%;background:var(--spectrum-global-color-gray-100)"},f={name:"1kivh4z",styles:"margin-top:var(--spectrum-global-dimension-size-400)"},w={name:"1fdqnat",styles:"margin-top:var(--spectrum-global-dimension-size-150);margin-bottom:var(--spectrum-global-dimension-size-150);justify-content:center"},y={name:"1ykcbnq",styles:"margin-bottom:var(--spectrum-global-dimension-size-200)!important;&~p{margin-top:0;margin-bottom:0!important;}"},x={name:"1vixyln",styles:"height:var(--spectrum-global-dimension-size-1000);margin-top:0;margin-bottom:var(--spectrum-global-dimension-size-300);.gatsby-resp-image-wrapper{position:relative;max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{position:absolute;top:0;left:0;height:100%;object-fit:contain;}"},z=function(i){var e=i.heading,t=i.links,o=i.buttons,z=i.icons,Z=i.image,k=i.video,j=i.theme,C=void 0===j?"lightest":j,L=i.width,U=void 0===L?"100%":L,F=i.isCentered,W=void 0!==F&&F,E=(0,n.Z)(i,["heading","links","buttons","icons","image","video","theme","width","isCentered"]),_=100/parseFloat(U);if("33%"===U&&(U=(100/3).toFixed(2)+"%",_=3),(0,a.useEffect)((function(){return function(){void 0!==l[_]&&l[_]--}})),W){var H="",M="";return void 0!==l[_]&&l[_]++,1===_?H="max-width: "+(0,m.MY)(6)+";":_>3?H="max-width: var(--spectrum-global-dimension-size-3600);":(H="max-width: var(--spectrum-global-dimension-size-4600);",M=d[l[_]%_]),(0,s.tZ)(a.default.Fragment,null,(0,s.tZ)("section",{className:"spectrum--"+C,css:(0,s.iv)("display:table-cell;width:",U.replace("%","vw"),";background:var(--spectrum-global-color-gray-100);padding:var(--spectrum-global-dimension-size-1000) 0;@media screen and (max-width: ",m.LU,"){display:block;width:100%;}","")},(0,s.tZ)("div",{css:(0,s.iv)(H," padding:0 var(--spectrum-global-dimension-size-400);margin:auto;",M,"@media screen and (max-width: ",m.LU,"){max-width:none;margin:auto;}","")},(0,s.tZ)(c,{icons:z,isCentered:W}),Z&&(0,a.cloneElement)(Z,{css:x}),e&&(0,s.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeM",css:y},e.props.children),(0,s.tZ)(p,{texts:E}),(0,s.tZ)(r.F5,{buttons:o,css:w}),(0,s.tZ)(g,{links:t,isCentered:W}),k&&(0,s.tZ)("div",{css:f},(0,s.tZ)(u,{video:k})))),void 0!==l[_]&&l[_]%_==0?(0,s.tZ)("div",{"aria-hidden":"true"}):null)}var N=E.slots.endsWith("image")||E.slots.endsWith("video");return(0,s.tZ)("section",{className:"spectrum--"+C,css:v},(0,s.tZ)("div",{css:(0,s.iv)("width:",m.Av,";box-sizing:border-box;margin:auto;padding:var(--spectrum-global-dimension-size-1000) 0;@media screen and (max-width: ",m.Av,"){width:100%;&>div{flex-direction:column!important;}}","")},(0,s.tZ)("div",{css:(0,s.iv)("display:flex;align-items:center;flex-direction:",N?"row-reverse":"row",";@media screen and (max-width: ",m.LU,"){flex-direction:column;}","")},Z&&(0,a.cloneElement)(Z,{css:(0,s.iv)("display:flex;align-items:center;justify-content:center;width:50%;height:calc(var(--spectrum-global-dimension-size-4600) - var(--spectrum-global-dimension-size-225));box-sizing:border-box;padding:var(--spectrum-global-dimension-size-200);margin-top:0;@media screen and (max-width: ",m.LU,"){width:100%;}.gatsby-resp-image-wrapper{max-width:none!important;width:100%!important;height:100%!important;}.gatsby-resp-image-image{object-fit:contain;}","")}),(0,s.tZ)(u,{video:k}),(0,s.tZ)("div",{css:(0,s.iv)("width:50%;display:flex;flex-direction:column;justify-content:center;text-align:left;box-sizing:border-box;padding:0 var(--spectrum-global-dimension-size-400);@media screen and (max-width: ",m.LU,"){width:100%;margin:var(--spectrum-global-dimension-size-400) 0;}","")},(0,s.tZ)(c,{icons:z,isCentered:W}),e&&(0,s.tZ)("h3",{className:"spectrum-Heading spectrum-Heading--sizeM",css:b},e.props.children),(0,s.tZ)(p,{texts:E}),(0,s.tZ)(r.F5,{buttons:o,css:h}),(0,s.tZ)(g,{links:t,isCentered:W})))))}}}]);
//# sourceMappingURL=8b61fb39-8e72c407787897e61bc8.js.map