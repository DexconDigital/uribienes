define([],function(a,b){"use strict";var c=a("zmail.Core.Namespaces"),d=c.create("zmComponent"),e=function(a){var b=a.length;if(0===b)return document.createTextNode("");var c=a[0];return b<=2&&"text"!==c&&"text:html"!==c&&"string"==typeof c?e.createNode(a):e.createChildNodes(a)};return e.createNode=function(a){var b,c=a[0],d=a[1];if("text"===c||"text:html"===c){b=document.createDocumentFragment();var f=d;"text:html"===c?b=e.appendHTML(b,f):(f=e.replaceHtmlEntity(f),b.appendChild(document.createTextNode(f)))}else if(b=document.createElement(c),d){var g=d.attrs,h=d.child;if(g)for(var i in g)"undefined"!=typeof g[i]&&b.setAttribute(i,g[i]);if(h){var j=e.createChildNodes(h);j.childNodes.length&&b.appendChild(j)}}return b},e.createChildNodes=function(a){for(var b=document.createDocumentFragment(),c=0,d=a.length;c<d;c++){var f=a[c];f&&f.length>0&&b.appendChild(e.createNode(f))}return b},e.text2html=function(a){var b=document.createElement("span");return b.innerHTML=a,b},e.replaceHtmlEntity=function(a){var b=function(){var b=document.createElement("textarea");return b.innerHTML=a,b.value};return/&(?:[a-z\d]+|#\d+|#x[a-f\d]+);/gi.test(a)?b(a):a},e.appendHTML=function(a,b){for(var c=e.text2html(b);c.childNodes.length>0;)a.appendChild(c.childNodes[0]);return a},e.toString=function(b){var c=document.createElement("span");return c.appendChild(a("_zm").getDOM(b)),c.innerHTML},d.htmlizer=function(a){return a.nodeName?a:e(a)},d}),define([],function(a){"use strict";var b=a("zmail.Core.Namespaces"),c=b.create("zmComponent");return c.bind=function(a){a=a||{};var b=a.elm,c=a.ev,d=a.fn,e=a.args,f=a.capture||!1,g=Boolean(a.useJquery),h=function(a){var b=this||window,c=e?[].concat(e):[];c.push(a),d.apply(b,c)};g?$(b).on(c,h):b.addEventListener?b.addEventListener(c,h,f):b.attachEvent&&b.attachEvent(c,h)},c.unbind=function(a){a=a||{};var b=a.elm,c=a.ev,d=a.fn,e=a.capture||!1,f=Boolean(a.useJquery);f?$(b).off(c,d):b.removeEventListener?b.removeEventListener(c,d,e):b.attachEvent&&b.detachEvent(c,d)},c}),define([],function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p=a("zmComponent"),q=a("document"),r=a("setTimeout"),s=a("zmText"),t=s.get("preComponents"),u="folder",v="folder-path",w="sub-folder",x="label",y="groups",z="#cceeff",A="check",B="uncheck",C={TAB:9,ENTER:13,ESC:27,LEFT_ARROW:37,UP_ARROW:38,RIGHT_ARROW:39,DOWN_ARROW:40},D=["#e5e5e5","#f9baab","#f9d3a2","#fef86a","#d7f3b0","#c8e5fb","#e0ceef","#f6d0e6","#c4c4c4","#e07861","#ecb772","#f6e565","#badf88","#96ccf5","#b99fce","#e099c2","#808080","#ce232c","#dd902f","#d0c04b","#90ca40","#70abec","#a97ac6","#c26a9d","#000000","#9d1812","#a56016","#a69646","#5b8828","#4c76a2","#8343a0","#ba3682"];b=function(a){return n.process(a)};var E=function(a,b){if(a&&b){var c="",d=b.toLowerCase().indexOf(a.toLowerCase());return d>0&&(c+=b.substring(0,d)),c}},F=function(){var a=Math.ceil(0),b=Math.floor(D.length-1),c=Math.floor(Math.random()*(b-a+1))+a;return c>=0&&c<=D.length-1?D[c]:D[0]},G=function(){var a=[];return D.forEach(function(b){a.push(["DIV",{attrs:{title:b,style:String("background-color: "+b+";"),"data-clrcode":b}}])}),a};return h={create:t.folderLabel.create+" "},i={base:function(a){var b=["DIV",{attrs:{"class":"SC_dd SC_ddFil"},child:[]}];return d&&b[1].child.push(["DIV",{attrs:{"data-disableshortcuts":"true"},child:[["SPAN",{child:[["INPUT",{attrs:{type:"text",placeholder:f}}]]}]]}]),b[1].child.push(["DIV",{attrs:{"class":"scrlldiv",style:"min-height:100px"},child:[["UL"]]}]),y===a&&b[1].child[1][1].child[0].push({attrs:{"class":"SC_Pr"}}),b},listItem:function(a,b){var c=["LI"];switch(a){case u:break;case v:break;case w:break;case x:c=["LI",{child:[["I",{attrs:{style:"vertical-align: middle; margin-right: 5px;"}}]]}],e&&c[1].child.push(["DIV",{attrs:{"class":"SClbl"}}]);break;case y:var d=b.count?["B",{child:[["text",b.name]]}]:["text",b.name],f=b.count?["B",{child:[["text",b.count]]}]:["text",b.count];c=["LI",{child:[["DIV",{child:[d]}],["IMG",{attrs:{src:b.logo}}],["SPAN",{attrs:{style:"position: absolute;top: 4px;right: 10px;font-size: 80%;"},child:[f]}]]}]}return c},pathTextWrapper:["DIV",{attrs:{"class":"greyText"}}],displayTextWrapper:["DIV",{attrs:{"class":"SC_text",style:"display: inline-block;"}}],addNewRow:["LI",{child:[["FONT",{attrs:{"class":"SC_link"},child:[["text",h.create]]}],["FONT"]]}],addNewLabelRow:[["LI",{child:[["FONT",{attrs:{"class":"SC_link"},child:[["text",h.create]]}],["FONT"]]}],["DIV",{attrs:{"data-id":"clrPal"},child:[["UL",{attrs:{"class":"SC_cp",style:"width: auto; margin: 0 !important;"},child:[["LI",{child:G()}]]}]]}]]},j={check:"msi-check",uncheck:"msi-uncheck",partial:"msi-partcheck"},l={init:function(a){return p.htmlizer(i.base(a))},listItem:function(a,b){return p.htmlizer(i.listItem(a,b))},pathTextWrapper:function(){return p.htmlizer(i.pathTextWrapper)},displayTextWrapper:function(){return p.htmlizer(i.displayTextWrapper)},addNewRow:function(){return p.htmlizer(i.addNewRow)},addNewLabelRow:function(){return p.htmlizer(i.addNewLabelRow)},clrBxWrapper:function(){var a=["DIV",{attrs:{"class":"SClbl",style:String("background-color: "+c+";")}}];return p.htmlizer(a)},addSubFolderButton:function(){var a=["I",{attrs:{"class":"msi-plus zmDDrcIcon"}}];return p.htmlizer(a)},subFolderInputElement:function(){var a=["INPUT",{attrs:{type:"text","class":"zmDDInput"}}];return p.htmlizer(a)},folderPathElement:function(){var a=["DIV",{attrs:{"class":"greyText"}}];return p.htmlizer(a)}},n=function(){var b,h,i,n,s,D,G,H,I,J,K,L,M=u,N=!0,O=!1,P=!0,Q="name",R=[],S={mouseActions:function(){var a=function(){var a=S.getListHolder(),b=$(this).data("zmsData")||{};"nohr"!==b.type&&($(a).find("li.sel").removeClass("sel"),$(this).addClass("sel"))},b=function(){$(this).removeClass("sel")},c=function(a){a&&"function"==typeof a.stopPropagation&&a.stopPropagation()},d=function(){var d=S.getListHolder();$(d).on("mouseenter","li",a),$(d).on("mouseleave","li",b),$(d).on("mouseenter","div",c),$(d).on("mouseleave","div",c)},e=function(){var d=S.getListHolder();$(d).off("mouseenter","li",a),$(d).off("mouseleave","li",b),$(d).off("mouseenter","div",c),$(d).off("mouseleave","div",c)},f=function(){var a=S.getListHolder();$(a).on("mousemove",d)},g=function(){var a=S.getListHolder();e(),$(a).off("mousemove",e)};return{bind:f,unbind:g}}(),init:function(j){var k=a("_zm");return M=j.type,Q=j.search,h=j.display,i=j.liAttr,G=j.data,s=j.onSelect,D=j.onTab,c=void 0,b=j.hasOwnProperty("emptyMsg")?j.emptyMsg:b,N=j.hasOwnProperty("showCheckbox")?j.showCheckbox:N,O=j.hasOwnProperty("showTooltip")?j.showTooltip:O,P=j.hasOwnProperty("showCreate")?j.showCreate:P,d=k.getProperty(j,"ui.search"),e=k.getProperty(j,"ui.label.color"),f=k.getProperty(j,"ui.searchFieldPlaceholder"),g=k.getProperty(j,"ui.showUnreadCount"),d="undefined"==typeof d||d,e="undefined"==typeof e||e,f="undefined"==typeof f?"":f,g="undefined"==typeof g||g,H=[],I=[],J=[],K=[],L=[],n=l.init(M),o.init(n,j.addNew),S.data(),q.body.appendChild(n),S.mouseActions.bind(),d&&r(function(){n.getElementsByTagName("INPUT")[0].focus()},100),n},getListHolder:function(){return n.getElementsByClassName("scrlldiv")[0].getElementsByTagName("ul")[0]},data:function(){S.indexData.init(),S.populateList(),S.goToFirstElement()},indexData:{init:function(){var a,b=G.length;for(a=0;a<b;a++){var c=G[a];(M===v||M===w)&&c.tooltip&&c.tooltip.indexOf("/")>=0&&(c.isRootFolder=1===c.tooltip.match(/\//g).length),H.push(c[h]||""),M===x&&S.indexData.labelGroup(c)}M===x&&S.indexData.groupLabelData()},labelGroup:function(a){var b=a.type;b===A?J.push(a):b===B?K.push(a):L.push(a)},groupLabelData:function(){I=J.concat(L).concat(K)}},match:function(a){var b=[],d=Q;if(a=a.trim(),S.clearList(),c=c||F(),R=[],a&&"string"==typeof a&&a.length>0){var e,f,g=G.length,i=!1;for(e=0;e<g;e++){var j=!1,k=G[e];M!==v&&M!==w||(d=a.indexOf("/")>=0?"tooltip":"name"),f=k[d]||k.tooltip||k.name||k.display_text||"";var m=k[h]||k.display_text||k.name||k.tooltip||"",n="",o="",r="";if(f.toLowerCase()===a.toLowerCase()||(M===v||M===w)&&"/"===f.charAt(f.length-1)&&f.substring(0,f.length-1)===a.toLowerCase())i=!0,j=!0,o=f;else{var s=f.toLowerCase(),t=a.toLowerCase(),u=s.indexOf(t);if(u>=0){j=!0;var y,z;m.toLowerCase().indexOf(t)>=0?(y=m.toLowerCase().indexOf(t),z=y+t.length,n=m.substring(0,y),o=m.substring(y,z),r=m.substring(z,m.length),M===v&&(k.highlightPath=void 0)):(n=m,o="",r="",M===v&&(k.highlightPath=a))}}if(j){var A=[];n&&A.push(["text",n]),A.push(["FONT",{attrs:{"class":"afHgl"},child:[["text",o]]}]),r&&A.push(["text",r]),k.highlightedDom=p.htmlizer(A),S.addnewlistItem(S.listItem(k,!0))}}if(!i&&P)if(M===x){var B=l.addNewLabelRow(),C=l.clrBxWrapper(),D=B.querySelector('[data-clrcode="'+c+'"]'),E=B.querySelector('[data-id="clrPal"]');D&&$(D).addClass("sel"),$(E).on("click",function(a){a.stopPropagation();var b=a.target||a.srcElement;c=$(b).attr("data-clrcode"),$(E).find(".sel").removeClass("sel").removeClass("black"),$(b).addClass("sel"),"#000000"===c&&$(b).addClass("black"),$(C).attr("data-clrcode",c).css("background-color",c)}),B.childNodes[0].insertBefore(C,B.childNodes[0].childNodes[1]),B.childNodes[0].lastElementChild.appendChild(q.createTextNode(a)),S.addnewlistItem(B,!0,a)}else{var H=l.addNewRow();H.childNodes[1].appendChild(q.createTextNode(a)),S.addnewlistItem(H,!0,a)}}else S.populateList();return S.goToFirstElement(),b},goToFirstElement:function(){var a=S.getListHolder().firstElementChild||S.getListHolder().firstChild;a&&a.scrollIntoView(!1)},clearList:function(){var a=S.getListHolder();R="",a.innerHTML=""},populateList:function(){var a=M!==x?G:I;R=[];var c,d,e=a.length;if(M===x&&0===a.length)S.addPlaceHolderLabelItem();else if(0===a.length&&b)S.addEmptyMessageItem(b);else for(c=0;c<e;c++)d=a[c],S.addnewlistItem(S.listItem(d))},addPlaceHolderLabelItem:function(){var a=S.getListHolder(),b=p.htmlizer(["LI",{attrs:{"class":"nohr"},child:[["EM",{child:[["text",t.folderLabel.createLabelText]]}]]}]);$(b).data("zmsData",{type:"nohr"}),a.appendChild(b)},addEmptyMessageItem:function(a){var b=S.getListHolder(),c=p.htmlizer(["LI",{attrs:{"class":"nohr"},child:[["EM",{child:[["text",a]]}]]}]);$(c).data("zmsData",{type:"nohr"}),b.appendChild(c)},addnewlistItem:function(a,b,c,d){var e=S.getListHolder(),f=11===a.nodeType||"#document-fragment"===a.nodeName?a.firstElementChild||a.childNodes[0]:a;e.appendChild(a),a=f,R.push(a),b?o.addnew(a,c):o.listItem(a,M)},listItem:function(b,c){var d,f,j=a("_zm"),k=c?b.highlightedDom:q.createTextNode(b[h]);if(M===y){d={},d.name=b.name,d.logo=b.photo;var n="";g&&(n=b.scount,n>99?n="99+":n<1&&(n="")),d.count=n}var o=l.listItem(M,d);if(b.elm=o,j.setAttr(o,i),M===x&&(e&&(j(".","SClbl",o)[0].style.backgroundColor=b.color||z),N&&S.updateLabelCheckbox(b,b.type),b.chkboxState=S.updateLabelCheckbox),O&&b.tooltip&&S.setTooltip(o,b.tooltip),M!==y&&o.appendChild(k),(M===v||M===w)&&!b.isRootFolder){f=E(b.name,b.tooltip)||"";var r=l.pathTextWrapper();if("undefined"!=typeof b.highlightPath&&f.toLowerCase().indexOf(b.highlightPath.toLowerCase())>=0){var t=f.toLowerCase().indexOf(b.highlightPath.toLowerCase()),u=t+b.highlightPath.length,A=f.substring(0,t),B=f.substring(t,u),C=f.substring(u,f.length),D=[];A&&D.push(["text",A]),D.push(["FONT",{attrs:{"class":"afHgl"},child:[["text",B]]}]),C&&D.push(["text",C]),$(r).append(p.htmlizer(D)),b.highlightPath=""}else $(r).text(f);o.appendChild(r)}if(M===w&&!b.disableAddBtn){var F=l.addSubFolderButton();p.bind({elm:F,ev:"click",fn:m.init,args:[F,o,b]}),$(o).append(F)}return $(b.elm).data("zmsData",b),p.bind({elm:o,ev:"click",fn:s,args:[b]}),o},updateLabelCheckbox:function(b,c){var d=a("_zm");c=c||B,b.type=c;var e=b.elm.childNodes[0];e.className="",d.addClass(e,j[c])},setTooltip:function(b,c){var d=a("_zm");d.setAttr(b,{title:c})}};return m=function(){var a="",b="",c="",d="",e={},f="",g=function(){b&&$(b)[0]&&$(b).removeClass("nohr"),c&&$(c)[0]&&($(c).remove(),c=""),d&&$(d)[0]&&$(b).prepend(d),f&&$(f)[0]&&(e.isRootFolder?$(f).remove():$(f).text(E(e.name,e.tooltip)||String(e.name+"/")).show()),a&&$(a)[0]&&$(a).show()},h=function(){b&&$(b)[0]&&$(b).addClass("nohr"),c&&$(c)[0]&&($.contains(b,c)||$(d).before(c),$(c).show(),$(c)[0].focus()),d&&$(d)[0]&&$(d).remove(),f&&$(f)[0]&&(!$(b).find(".greyText").eq(0)[0]&&a&&$(a)[0]&&$(a).before(f),$(f).text(e.isRootFolder?String(e.name+"/"):e.tooltip),$(f).show()),a&&$(a)[0]&&$(a).hide()},i=function(){var a=arguments[3],d=arguments[2],f=a.keyCode,h=e.id,i="/"===e.tooltip.charAt(0)?e.tooltip:String("/"+e.tooltip),j=c.value;switch(f){case C.ENTER:if("keyup"===d)break;o.addnewfn(b,j,{folderPath:i,parentId:h});break;case C.ESC:if("keyup"===d)break;g();break;default:"keydown"===d&&a.stopPropagation()}},j=function(){$(c).off("click").on("click",function(a){a&&a.stopPropagation()}),p.bind({elm:c,ev:"keydown",fn:i,args:[c,b,"keydown"]})},k=function(i,k,m,n){if(n){n.preventDefault(),n.stopPropagation(),g(),c=c||l.subFolderInputElement(),a=i,b=k,e=m||{};for(var o=$(k)[0].childNodes,p=0;p<o.length;++p)if("#text"===o[p].nodeName){d=o[p];break}f=$(k).find(".greyText").eq(0)[0]||l.folderPathElement(),j(),h()}};return{init:k}}(),k={CLASS_NAME:"sel",PAGE_KEYS_LIMIT:5,getCurrentSelectedEl:function(){return $(S.getListHolder()).find("."+k.CLASS_NAME).eq(0)[0]},chooseListItem:function(a){if($(a)[0]){S.mouseActions.unbind();var b=k.getCurrentSelectedEl(),c=$(a).data("zmsData")||{};"nohr"!==c.type&&(b&&$(b).removeClass(k.CLASS_NAME),$(a).addClass(k.CLASS_NAME),a.scrollIntoView(!1)),S.mouseActions.bind()}},getChildNumber:function(a,b){b=$(b)[0],a=$(a)[0];for(var c=b.children,d=0;d<c.length;++d)if(a===c[d])return d},upArrowKeyHandler:function(){var a=k.getCurrentSelectedEl();a&&($(a).is(a.parentNode.firstElementChild)?$(S.getListHolder()).find(".sel").removeClass("sel"):a.previousSibling&&k.chooseListItem(a.previousSibling))},enterKeyHandler:function(){var a=k.getCurrentSelectedEl();if(a){var b=$(a).data("zmsData")||"";"undefined"!=typeof s&&"object"==typeof b&&(b.type&&"addnew"===b.type&&"function"==typeof o.addnewfn?o.addnewfn(b.elm,b.txt):s(b))}},downArrowKeyHandler:function(){var a=k.getCurrentSelectedEl();a&&a.nextSibling?k.chooseListItem(a.nextSibling):k.chooseListItem(S.getListHolder().firstElementChild)},escKeyHandler:function(){var b=a("zmUtil");$("#zm_flpopup").remove(),b.hideMenu("true")},tabKeyHandler:function(){"function"==typeof D&&D()}},{process:S.init,match:S.match,escKeyHandler:k.escKeyHandler,upArrowKeyHandler:k.upArrowKeyHandler,downArrowKeyHandler:k.downArrowKeyHandler,enterKeyHandler:k.enterKeyHandler,tabKeyHandler:k.tabKeyHandler}}(),o={addnewfn:void 0,init:function(a,b){var e=a.children;if(this.addnewfn=function(a,d,e){"undefined"!=typeof b&&(e=e&&(e.target||e.which||e.srcElement)?{}:e,e=$.extend({},e,{clrCode:c}),b(a,d,e))},d){var f=e[0].getElementsByTagName("INPUT")[0],g=e[1];this.autofill(f,g)}},autofill:function(a){var b=function(){var a=arguments[0],b=arguments[1],c=arguments[2],d=a.value,e=!0;switch(c.keyCode){case C.TAB:if("keyup"===b)break;c.preventDefault(),n.tabKeyHandler();break;case C.ENTER:if("keyup"===b)break;n.enterKeyHandler();break;case C.ESC:if("keyup"===b)break;n.escKeyHandler();break;case C.LEFT_ARROW:break;case C.UP_ARROW:if("keyup"===b)break;c.preventDefault(),n.upArrowKeyHandler();break;case C.RIGHT_ARROW:break;case C.DOWN_ARROW:if("keyup"===b)break;c.preventDefault(),n.downArrowKeyHandler();break;default:if("keydown"===b){e=!1;break}n.match(d)}e&&c.stopPropagation()};p.bind({elm:a,ev:"keyup",fn:b,useJquery:!0,args:[a,"keyup"]}),p.bind({elm:a,ev:"keydown",fn:b,useJquery:!0,args:[a,"keydown"]})},listItem:function(){},addnew:function(a,b){$(a).data("zmsData",{type:"addnew",elm:a,txt:b}),p.bind({elm:a,ev:"click",fn:this.addnewfn,args:[a,b]})}},p.folderLabel=b,p.folderLabel}),define([],function(a){"use strict";var b=a("zmComponent"),c={listing:["DIV",{attrs:{"class":"SC_ldr"},child:[["DIV",{attrs:{"class":"SC_ldsld"},child:[["DIV",{attrs:{"class":"SC_llne"}}],["DIV",{attrs:{"class":"SC_lbrk SC_ldt1"}}],["DIV",{attrs:{"class":"SC_lbrk SC_ldt2"}}],["DIV",{attrs:{"class":"SC_lbrk SC_ldt3"}}]]}]]}],pagination:["DIV",{attrs:{"class":"SC_sld"},child:[["DIV",{attrs:{"class":"SC_sldt SC_sldt1"}}],["DIV",{attrs:{"class":"SC_sldt SC_sldt2"}}],["DIV",{attrs:{"class":"SC_sldt SC_sldt3"}}],["DIV",{attrs:{"class":"SC_sldt SC_sldt4"}}]]}]},d=function(d){if(d||d.container){var e=d.type||"listing",f=b.htmlizer(c[e]||c.listing),g=d.container;return"listing"!==e||d.notToSetInnerHTML||(g.innerHTML=""),d.addAtFirst&&g.firstChild?g.insertBefore(f,g.firstChild):g.appendChild(f),function(){a("_zm").removeElement(f)}}};return b.loadingBand=function(a){return d(a)},b}),define([],function(a){"use strict";var b,c=a("zmComponent"),d=!1,e=['<div ref="wrapper" class="SC_Pop SC_SetPopMax wht">','<h1 class="maskTitle">','<div class="maskTitleDiv" ref="contentWrapper">','<span ref="contentDOM" style="position:relative; top:-4px;">',"</span>","</div>","</h1>","</div>"].join(""),f=['<div class="SC_sld">','<div class="SC_sldt SC_sldt1"></div>','<div class="SC_sldt SC_sldt2"></div>','<div class="SC_sldt SC_sldt3"></div>','<div class="SC_sldt SC_sldt4"></div>',"<div>"].join(""),g=function(c){if(c=c||{},!d||c.overwrite){b=a("_zm").getDOMReferenceMap(e,!0);var g=c.maskText||"Loading";return $(b.contentDOM).text(g),c.avoidLoadingAnim||$(b.contentWrapper).append(f),$("body").append(b.wrapper),d=!0,{remove:function(){d=!1,$(b.wrapper).remove()},$el:b.wrapper}}};return c.loadingMasks=function(a){return g(a)},c}),define([],function(a){"use strict";var b,c,d,e,f,g,h,i,j,k,l=a("zmComponent"),m=window.navigator.userAgent.toLowerCase().indexOf("mac")!==-1,n={},o={},p={},q={},r={},s="",t=3,u=0,v=[500,900],w={allowDefaultScope:!0},x=["INPUT","TEXTAREA"],y=function(a){return r[a]||w};b={8:"backspace",9:"tab",13:"enter",27:"esc",32:"space",37:"leftArrow",38:"upArrow",39:"rightArrow",40:"downArrow",46:"delete",186:"semiColon",188:"comma",187:"equalTo",189:"minus",190:"period",191:"forwardSlash",192:"backtick",219:"openBracket",220:"backSlash",221:"closeBracket",222:"singleQuote"},c={8:"delete"},d=function(a){return a=a||window.event,a.keyCode||a.which},e=function(a){var e=d(a);return m&&c[e]||b[e]||String.fromCharCode(e)},g=function(){window.console.log(f(arguments).join(" : "))},f=function(a){return[].slice.call(a)};var z=function(a,b){a in q||(q[a]={});var c=q[a],d="/",e=b.split(d);e.forEach(function(a,b){var f=e.slice(0,b+1);f.reduce(function(a,b){a.push(b);var e=a.join(d);return e in c?c[e]+=1:c[e]=1,a},[])})},A=function(a){a=a||{};var b="";b+=a.ctrlKey?"ctrl":"",a.shiftKey&&(b+=b?"+shift":"shift"),a.altKey&&(b+=b?"+alt":"alt"),a.metaKey&&(b+=b?"+metaKey":"metaKey");var c=[16,17,18,91,93];return c.indexOf(d(a))<0?(b+=b?"+"+e(a):e(a),u+=1):b="",b},B=function(a){var b=a.srcElement||a.originalTarget;if("true"===b.getAttribute("data-disableShortcuts"))return!0;var c="true"===b.getAttribute("data-enableShortcuts"),d=x.indexOf(b.tagName.toUpperCase())>-1||"true"===b.getAttribute("contentEditable");return d&&!c},C=function(a,b){b=b||h;var c=p.getScope(b);return c&&c[a]||!1},D=function(){s="",u=0,i&&window.clearTimeout(i),i=null},E=function(a,b){var c=C(s,b);if(c){if(!c.includeHandling&&B(a))return!0;for(var d=c.actions,e=0,f=d.length;e<f;e++)d[e](c.uid,c.group,a);c.preventDefault&&a.preventDefault()}D()};return p.add=function(a){var b=a.scope,c=a.keyStr;return o[b]||(o[b]={}),o[b][c]?void g(["error : keyStr already exists",b,c]):(z(b,c),void(o[b][c]=a))},p.remove=function(a,b){o[a]&&o[a][b]&&delete o[a][b]},p.getScope=function(a){return o[a]},p.dropScope=function(a){h=h===a?void 0:h,j=j===a?void 0:j,delete o[a],delete q[a],delete r[a]},n.handleEvent=function(a){var b,c,d,e,f,g,j,k=q[h]||{},l=q["default"];return a=arguments[arguments.length-1],!!B(a)||(b=A(a),s+=s?"/"+b:b,g=y(h).allowDefaultScope,d=g&&l[s]||0,e=k[s]||0,f=d+e,void(f?(j=e?h:"default",f>1&&u<t?(i&&window.clearTimeout(i),i=window.setTimeout(function(){E(a,j)},v[u-1]),c=C(s,j),c&&c.preventDefault&&a.preventDefault()):E(a,j)):D()))},n.register=function(a,b,c,d,e,f,g){var h={scope:a,uid:b,keyStr:c,actions:d,includeHandling:e,preventDefault:f,group:g||"default"};p.add(h)},n.registerAll=function(a){var b,c,d=a.shortcuts,e=d.length,f=a.scope,g=a.allowDefaultScope,h=a.isSuperScope,i=a.parentScope;if(h&&i)return void window.console.error("Super scope should not have its parentscope");for(g=void 0===g||g,r[f]={scope:f,allowDefaultScope:void 0===g||g,isSuperScope:h,parentScope:i},c=0;c<e;c++)b=d[c],b.scope=f||b.scope,p.add(b)},n.deregister=function(a,b){p.remove(a,b)},n.setScope=function(a){var b=y(a),c=b.isSuperScope,d=b.parentScope,e=void 0===j?void 0:j===d;return c&&j&&a!==j?void window.console.error("Already a super scope is there, remove that scope to set new super scope"):void(c?h=j=a:void 0===e&&void 0===d?h=k=a:e===!1?k=a:j&&(h=a))},n.getScope=function(){return h},n.getCurrentSuperScope=function(){return j},n.getCurrentNormalScope=function(){return k},n.dropScope=function(a){p.dropScope(a)},n.handlers={},n.handlers.add=function(a,b,c){p.getScope(h)[b].actions.push(c)},n.handlers.remove=function(a,b,c){var d=p.getScope(h)[b].actions,e=d.indexOf(c);e>-1&&(d.splice(e,1),p.getScope(h)[b].actions=d)},n.listener=function(){var a=function(a){l.bind({ev:"keydown",fn:n.handleEvent,elm:a,capture:!0})},b=function(a){l.unbind({ev:"keydown",fn:n.handleEvent,elm:a})};return{add:a,remove:b}}(),n.keyLog=q,n.scopeInfos=r,n.listener.add(window),l.keybindings=n,l.keybindings}),define([],function(a){"use strict";var b,c,d,e,f,g,h,i,j,k=a("zmComponent");return b=function(a){d(a)},k.removeTooltip=function(a){k.unbind({elm:a.elm,ev:"mouseover.tooltip",useJquery:!0}),k.unbind({elm:a.elm,ev:"mouseout.tooltip",useJquery:!0}),k.unbind({elm:a.elm,ev:"click.tooltip",useJquery:!0})},d=function(a){k.bind({elm:a.elm,ev:"mouseover.tooltip",fn:i,args:a,useJquery:!0}),k.bind({elm:a.elm,ev:"mouseout.tooltip",fn:j,args:a,useJquery:!0}),k.bind({elm:a.elm,ev:"click.tooltip",fn:j,args:a,useJquery:!0})},i=function(a){g(a)},j=function(b){a("_zm").addClass(b.tooltip,"hd"),delete b.tooltip},e=function(){f||(f=k.htmlizer(["DIV"]),document.body.appendChild(f))},c=function(a,b,c){var d=a?["TABLE",{child:[["TR",{child:[["TH",{child:[["text",a]]}]]}],["TR",{child:[["TD",{child:[["text",b]]}]]}]]}]:["text",b];return k.htmlizer(["DIV",{attrs:{"class":"SC_tip hd "+c},child:[d]}])},g=function(b){e();var d,g,i,j,k,l;j=b.text,i=b.title,k=b.arrow,l={left:"lt",right:"rt",top:"tp"},l=l[k]||"",d=b.elm,g=c(i,j,l),b.tooltip=g,f.innerHTML="",f.appendChild(g),h(d,g,k),a("_zm").removeClass(g,"hd")},h=function(a,b,c){var d=a.getBoundingClientRect(),e=b.getBoundingClientRect(),f=d.top,g=d.left,h=d.height,i=d.width,j=f,k=g,l=b.getBoundingClientRect().height||0,m=7;"left"===c?k=g+i+m:"right"===c?k=g-(e.width+m):"top"===c?(j=f+h+m,k=g+i/2-e.width/2):"bottom"===c&&(j=f-h-m-l,k=g+i/2-e.width/2),b.style.top=j+"px",b.style.left=k+"px"},k.tooltip=function(a){b(a)},k}),define([],function(a){"use strict";var b,c=a("zmComponent"),d={};d.dataAttr={},d.length=0;var e=function(a,b,d){var e=a?["TABLE",{child:[["TR",{child:[["TH",{child:[["text",a]]}]]}],["TR",{child:[["TD",{child:[["text",b]]}]]}]]}]:["text",b];return c.htmlizer(["DIV",{attrs:{"class":"SC_tip hd "+d},child:[e]}])},f=function(a,b){var c=$('<div class = "SC_tip hd '+b+'">');return c.append(a)[0]},g=function(a){b||(b=c.htmlizer(["DIV"]),document.body.appendChild(b))};c.removeTooltip=function(a){var b,c=a.elm;b=c.getAttribute("data-tooltip"),b&&d.dataAttr[b].elm&&(d.dataAttr[b].elm.removeAttribute("data-tooltip"),delete d.dataAttr[b])},c.changeTooltip=function(a){var b,c,e,f;b=a.elm,e=d.dataAttr,f=b.getAttribute("data-tooltip"),f&&d.dataAttr[f].elm&&(a.title&&(e[c].title=a.title),a.text&&(e[c].text=a.text),a.arrow&&(e[c].arrow=a.arrow))};var h=function(a){c.unbind({elm:a.elm,ev:"mouseout.tooltip",useJquery:!0}),c.unbind({elm:a.elm,ev:"click.tooltip",useJquery:!0}),c.unbind({elm:a.elm,ev:"mouseover.tooltip",useJquery:!0}),c.unbind({elm:window,ev:"keydown.tooltip",useJquery:!0})},i=function(b){a("_zm").addClass(b.tooltip,"hd"),delete b.tooltip,h(b)},j=function(b){a("_zm").addClass(b.tooltip,"hd"),delete b.tooltip,h(b)},k=function(a){c.bind({elm:a.elm,ev:"mouseout.tooltip",fn:j,args:a,useJquery:!0}),c.bind({elm:a.elm,ev:"click.tooltip",fn:j,args:a,useJquery:!0}),c.bind({elm:window,ev:"keydown.tooltip",fn:i,args:a,useJquery:!0})},l=function(a,b,c){var d=a.getBoundingClientRect(),e=b.getBoundingClientRect(),f=d.top,g=d.left,h=d.height,i=d.width,j=f,k=g,l=7;"left"===c?k=g+i+l:"right"===c?k=g-(e.width+l):"top"===c&&(j=f+h+l,k=g+i/2-e.width/2),b.style.top=j+"px",b.style.left=k+"px"},m=function(c){g(c);var h,i,j,m,n,o,p,q,r;if(p=d.dataAttr[c.elm.getAttribute("data-tooltip")],m=p.text,j=p.title,q=p.dom,r=p.style,n=p.arrow,o={left:"lt",right:"rt",top:"tp"},o=o[n]||"",h=c.elm,i=q?f(q,o,r):e(j,m,o),c.tooltip=i,r&&Object.keys(r).length>0)for(var s=Object.keys(r).length,t=0;t<s;t++){var u=r[t].split(":");i.style[u[0]]=u[1]}b.innerHTML="",b.appendChild(i),l(h,i,n),k(c),a("_zm").removeClass(i,"hd")};c.setInitialAction=function(a){var b=a.target;if($(b).closest("[data-tooltip]")[0]){b=$(b).closest("[data-tooltip]")[0];var e=b.getAttribute("data-tooltip");if(null!==e){var f=d.dataAttr[e];"undefined"!=typeof f&&(m(f),c.bind({elm:f.elm,ev:"mouseover.tooltip",fn:m,args:f,useJquery:!0}))}}};var n=function(a){var b=d.length;void 0!==a.elm&&(d.dataAttr[b]=a,a.elm.setAttribute("data-tooltip",b),d.length++)};return zmail.trialUsers&&(c.tooltip=n),c}),define([],function(a){"use strict";var b=a("zmail.Core.Namespaces"),c=b.create("zmsTemplates"),d=function(a,b){var c,d,e,f,g;return c=document.createElement("div"),"center"===b?c.className="SC_cnt":c.className="SC_flt",a.chkBox&&(d=document.createElement("i"),d.className="msi-uncheck",a.chkClick&&$(d).click(a.chkClick),c.appendChild(d)),f=a.leftHTML||a.centerHTML,f||(g=a.leftText),(f||g)&&(e=document.createElement("span"),e.className="SC_mtb",f?e.innerHTML=f:e.textContent=g,a.clk&&$(e).click(a.clk),a.centerAlign&&$(e).addClass("SC_Tcen"),c.appendChild(e)),c},e=function(b,c){var d,e,f,g,h,i,j,k,l,m,n="SC_flt";for(j=b.length,l=document.createDocumentFragment(),m=document.createElement("div"),"right"===c&&(n="SC_frt"),m.className=n,d=0;d<j;d++){for(f=document.createElement("span"),f.className="SC_mtb",b[d].tooltip&&a("zmComponent").tooltip({elm:f,text:b[d].tooltip,arrow:"top"}),i=b[d].iconList,k=i.length,e=0;e<k;e++)g=document.createElement("i"),g.className=i[e],f.appendChild(g);b[d].hasDrop&&(h=document.createElement("div"),h.className="SC_hd",f.appendChild(h)),b[d].data&&$(f).data("data-event",b[d].data),m.appendChild(f)}return l.appendChild(m),l},f={appendToLeft:function(a){$("#leftScroll").html(a.left)},appendToCenter:function(a){$("#zm_centerHolder").append(a)},appendToRight:function(a){$(".SCr_parent").append(a)},constructActionListIcons:function(b,c){var d,e,f,g,h,i,j,k,l,m,n,o;for(c=c||{},m=document.createElement("ul"),f=b.length,c.hideGroup&&(m.style.display="none"),d=0;d<f;d++){for(k=document.createElement("li"),g=document.createElement("b"),b[d].hideIcon&&(k.style.display="none"),b[d].data&&k.setAttribute("data-event",b[d].data),n=document.createElement("span"),b[d].tooltip&&a("zmComponent").tooltip({elm:g,text:b[d].tooltip,arrow:"top"}),b[d].separator&&(k.className+=" SC_lbr"),$(k).click(b[d].clk),h=b[d].iconList,l=h.length,e=0;e<l;e++)b[d].text?(m.className+="SCtxt",n.innerHTML=h[e]):"string"==typeof h[e]?(i=document.createElement("i"),i.className=h[e],n.appendChild(i)):"object"==typeof h[e]&&h[e].txt&&(o=document.createElement("span"),o.innerHTML=h[e].txt,n.appendChild(o),$(k).addClass("SCtxt"),h[e].hide_txt&&$(k).addClass("SC_op3 SC_nopntr"));(b[d].dropAction||b[d].separator)&&(j=document.createElement("div"),j.className="SC_hd",g.appendChild(j)),"right"===b[d].align&&$(m).addClass("SC_frt"),b[d].customClass&&$(k).addClass(b[d].customClass),g.appendChild(n),k.appendChild(g),m.appendChild(k)}return m},constructHeader:function(a){var b;return b=document.createDocumentFragment(),a.left&&b.appendChild(d(a.left,"left")),a.center&&b.appendChild(d(a.center,"center")),a.right&&b.appendChild(e(a.right,"right")),$(b)},constructTagListHTML:function(a,b,c,d){a=a||[];var e,f,g=c||a.length,h=zmail.labInfo||{},i=0,j=[];for("default"===d&&(h=zmail.zohoAccLabInfo||{});i<g;i++)if(e=h[a[i]]){if(f=$("<p>"),f.attr("data-mid",e.id),f.attr("title",e.dispName),f.append('<font style="background-color:'+e.color+'";></font>'),b){var k=$("<i>");k.text(e.dispName),f.append(k)}j.push(f[0].outerHTML)}return j.join("")}};return $.extend(!0,c,f)}),define([],function(a){"use strict";var b,c,d=a("zmail.Core.Namespaces"),e=d.create("zmComponent"),f={0:["Sunday","SUN"],1:["Monday","MON"],2:["Tuesday","TUE"],3:["Wednesday","WED"],4:["Thursday","THU"],5:["Friday","FRI"],6:["Saturday","SAT"]},g={"short":["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"],"long":["January","February","March","April","May","June","July","August","September","October","November","December"]},h=1e3,i=60*h,j=60*i,k=24*j,l=7*k,m=1;return b=function(a,b){var d,e,f,g,m,n;if(d=Date.now(),a=Number(a),f=d-a,g=new Date(a),m=c(g,"hr:min"),n=g.getDate()+1===new Date(d).getDate(),f>l)e=c(g,b);else if(n||f>k){var o=Math.round(f/k);e=o>1?c(g,"mm dd at hr:min",!1):"yesterday at "+m}else if(f>j){var p=Math.round(f/j);e=p<4?1===p?"1 hour ago":p+" hours ago":m}else if(f>i){var q=Math.round(f/i);e=q<5?"few minutes ago":q+" minutes ago"}else e=f>h?"few seconds ago":"just now";return e},c=function(a,b,c){if(!b)return a.toString();var d=a.getDate(),e=a.getMonth(),h=a.getFullYear(),i=a.getHours(),j=a.getMinutes(),k=a.getSeconds(),l=a.getDay(),n="",o=/min|sec|hr/.test(b);return c||(n=i>=12?"pm":"am",i%=12,i=i?i:12),l=f[l][m],e=g["short"][e],d=d<10?"0"+d:d,i=i<10?"0"+i:i,j=j<10?"0"+j:j,b=b.replace(/dd/,d),b=b.replace(/mm/,e),b=b.replace(/yyyy/,h),b=b.replace(/day/,l),b=b.replace(/hr/,i),b=b.replace(/min/,j),b=b.replace(/sec/,k),o&&!c&&(b+=" "+n),b},e.dateTimeUtil={format:c,relativeTime:b},e});