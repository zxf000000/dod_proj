(function(){var st=document&&document.currentScript&&document.currentScript.src;(window.webpackJsonpruntime=window.webpackJsonpruntime||[]).push([[4],{DI7c:function(nt,C,c){"use strict";c.r(C),c.d(C,"init",function(){return tt}),c.d(C,"insert",function(){return D}),c.d(C,"clean",function(){return et}),c.d(C,"getCurrentGallery",function(){return it}),c.d(C,"initGallery",function(){return at});var H=c("yXPU"),V=c.n(H),z=c("UB5X"),W=c.n(z),j=c("DzJC"),J=c.n(j);class T{constructor(r){this.images=void 0,this.gallery=void 0,this.wrapImage=e=>{const a=e.find(">");return a.is(".thumbnailInnerWrapper")||a.wrapAll('<div class="thumbnailInnerWrapper" style="opacity:0"/>'),e},this.add=(e,a)=>{const i=a?0:this.images.length;return this.images.splice(i,0,this.wrapImage(e)),this.images},this.get=()=>this.images,this.getAsJQuery=()=>{const e=this.get();return $(e).map(function(){return this.toArray()})},this.clear=()=>{this.images=[]},this.swap=(e,a)=>{const i=this.images[a];return this.images.splice(a,1),this.images.splice(e,0,i),this.images},this.remove=e=>(this.images=this.images.filter(a=>a.attr("id")!==e),this.images),this.getImageAt=e=>e<this.images.length?this.images[e]:null,this.getNextImage=e=>{const a=e.attr("id"),i=Array.from(this.images).findIndex(s=>s.attr("id")===a);return i<0||i===this.images.length-1?null:this.images[i+1]},this.gallery=r;let l=Array.from(this.gallery.find("li.photoGalleryThumbs"));l.length&&l[0].hasAttribute("data-index")&&(l=l.sort((e,a)=>{const i=Number(e.dataset.index),s=Number(a.dataset.index);return(i||-1)>(s||-1)?1:-1})),this.images=l.map(e=>this.wrapImage($(e)))}}T.displayName="ImagesStack";var y=c("NO3N"),p=c("foIZ"),F=c("289u");const{SQUARE:P,VERTICAL:Q,PINTEREST:E,PANORAMIC:k,ASYMETRIC:Y,ASYMETRIC2:S,ASYMETRIC3:v,CLASSIC_ROUNDED:X,CLASSIC_DROPS:Z,PINTEREST_ROUNDED:R,VERTICAL_ROUNDED:K}=y.f;class O{constructor(r,l){this.device=void 0,this.layout=void 0,this.gallery=void 0,this.textLayout=void 0,this.imagesStack=void 0,this.layoutContainer=void 0,this.viewAll=void 0,this.galleryHolder=void 0,this.updateCaptionAlignment=()=>"captionAlignment-"+this.gallery.attr(`data-${this.device}-caption-alignment`)||!1,this.updateTextLayout=()=>{let t=this.gallery.attr(`data-${this.device}-text-layout`);return t||this.gallery.hasClass("upgradedGallery")&&(t=this.gallery.attr("data-text-layout")),t||y.g.BOTTOM},this.getNumberOfRow=(t,e)=>{const a=this.layout.numberOfImagesPerColumn,i=Math.floor(e/a);return t===1?i:Math.floor(i/t)},this.setLayout=t=>{t&&(this.gallery.attr("data-"+this.device+"-layout",t),this.layout=t)},this.get=()=>this.layout,this.getTextLayout=()=>this.textLayout,this.generateRow=(t,e="")=>$(`<div class='photogallery-row ${e}' data-index='${t}'/>`),this.generateColumn=(t,e="")=>$(`<div class='photogallery-column ${e}' data-index='${t}'/>`),this.generateImage=(t,e,a)=>(t.removeClass().addClass("photoGalleryThumbs "+(a||"")),t.attr("data-index",e),t),this.appendColumnsToRow=(t,e,a="")=>{for(let i=0;i<e;i++)t.append(this.generateColumn(i,`${a} column-${e}`))},this.getMaxHeight=t=>{let e=0;return t.each((a,i)=>{const s=$(i).height();s>e&&(e=s)}),e},this.generateLayoutContainer=()=>$('<div class="layout-container '+this.layout+'" />'),this.clearCaptionInlineHeight=t=>{this.getRows(t).find(".photogallery-column .caption-container").css("height","")},this.getRows=t=>t?t.closest(".photogallery-row"):this.gallery.find(".photogallery-row"),this.equalCaptionsHeight=t=>{const e=this.getRows(t);if(this.textLayout===y.g.OVER)e.find(".photogallery-column .caption-container").css("height","100%");else if(this.textLayout===y.g.FIXED)e.find(".photogallery-column .caption-container").css("height","auto");else switch(this.layout){case E:case R:e.each((a,i)=>{const s=$(i).find(".photogallery-column >:first-child .caption-container");s.css("height",""),s.height(this.getMaxHeight(s));const n=$(i).find(".photogallery-column >:last-child .caption-container");n.height(this.getMaxHeight(n))});break;case S:case v:e.each((a,i)=>{const s=$(i).find(".caption-container");s.css("height","");let n=0;s.each((o,h)=>{const g=$(h).height();g>n&&(n=g)}),s.height(n),$(i).find(".asymetric-big-image .caption-container").height(n*2)});break;default:e.each((a,i)=>{const s=$(i).find(".photogallery-column .caption-container");s.css("height",""),s.height(this.getMaxHeight(s))});break}},this.isEven=t=>t%2==0,this.findColumnByIndex=(t,e)=>t.find('.photogallery-column[data-index="'+e+'"]'),this.drawSquare=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns();let a;for(let i=0;i<t.length;i++){const s=this.generateImage(t[i],i);i%e==0&&(a=this.generateRow(Math.floor(i/e)),this.layoutContainer.append(a),this.appendColumnsToRow(a,e));const n=i%e;this.findColumnByIndex(a,n).append(s)}},this.calculateImageHeight=t=>{const e=t.find("img"),a=e.attr("data-src");let i=t.attr("data-ratio");if(i)this.updateImageHeightByRatio(i,t);else{const s=e.attr("irh"),n=e.attr("irw");if(s&&n)i=s/n,this.updateImageHeightByRatio(i,t);else{const o=new Image;o.onload=()=>{const h=o.naturalHeight,g=o.naturalWidth;i=h/g,this.updateImageHeightByRatio(i,t)},o.src=a}}},this.updateImageHeightByRatio=(t,e)=>{const a=e.find("a");a.css("padding","inherit"),a.css("height",t*e.width())},this.drawPinterest=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns()*1;let a,i,s,n=0;const o=this.isEven(e)===0,h=e===1?e:e*2;for(let g=0;g<t.length;g++){g%h==0&&(i=Math.floor(g/e),a=this.generateRow(i),this.layoutContainer.append(a),this.appendColumnsToRow(a,e)),n=g%e,s=this.findColumnByIndex(a,n);let u;this.isEven(g)&&this.isEven(n)&&s.children().length===0||(!this.isEven(g)||!o)&&!this.isEven(n)&&s.children().length===1?u=this.generateImage(t[g],g,"pinterest-low"):u=this.generateImage(t[g],g,"pinterest-high"),s.append(u)}},this.drawPanoramic=()=>{const t=this.imagesStack.get();let e;for(let a=0;a<t.length;a++){const i=this.generateImage(t[a],a,"panoramic-height");e=this.generateRow(Math.floor(a)),this.layoutContainer.append(e),e.append(this.generateColumn(0,"column-1")),e.find(".photogallery-column").append(i)}},this.drawVertical=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns();let a;for(let i=0;i<t.length;i++){const s=this.generateImage(t[i],i,"vertical-height");i%e==0&&(a=this.generateRow(Math.floor(i/e)),this.layoutContainer.append(a),this.appendColumnsToRow(a,e));const n=i%e;this.findColumnByIndex(a,n).append(s)}},this.calculateAsymetricsColumns=()=>{const t=this.getNumberOfColumns()*1;if(t===1||!(this.layout===S||this.layout===v))return;const e=this.layout===v?2:1.5;let a;const i=100/t,s=Math.ceil(t/2),n=Math.floor(t/2),o=40/n,h=60/s,g=this.gallery.find(".photogallery-column"),u=g.eq(0).find("li").css("padding")||"0px";g.each((I,m)=>{const f=$(m),G=f.find(".image-container a");f.hasClass("row-direction")?(f.css("width",h+"%"),a=i/h*100+"%",G.css("padding-top",a),this.layout===v&&f.find(".asymetric3-long-image .image-container a").css("padding-top",i/h*50+"%")):(f.css("width",o+"%"),a=`calc(${i/o*100}% + ${u.replace("px","")*e}px)`,G.css("padding-top",a))})},this.drawAsymetric2=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns();let a=0,i=this.generateRow(a),s=0,n=0,o=this.isEven(a),h;for(let g=0;g<t.length;g++){if(n===0){s===e*1&&(a++,i=this.generateRow(a),o=this.isEven(a),s=0),o=!o,n=o?1:4;const m=(o?"":"row-direction ")+"column-"+e;h=this.generateColumn(s,m),i.append(h),this.layoutContainer.append(i),s++}const u=o?"asymetric-big-image":"flex column width-50",I=this.generateImage(t[g],g,u);h.append(I),n--}},this.drawAsymetric3=()=>{const t=this.imagesStack.get(),e=this.getNumberOfColumns();let a=0,i=this.generateRow(a),s=0,n=0,o=!this.isEven(a),h;for(let g=0;g<t.length;g++){if(n===0){s===e*1&&(a++,i=this.generateRow(a),o=!this.isEven(a),s=0),o=!o,n=o?1:3;const m=(o?"":"row-direction ")+"column-"+e;h=this.generateColumn(s,m),i.append(h),this.layoutContainer.append(i),s++}let u;o?u="asymetric-big-image":n===1?u="flex column asymetric3-long-image":u="flex column width-50";const I=this.generateImage(t[g],g,u);h.append(I),n--}},this.getNumberOfColumns=({ignoreAutoAdjust:t}={})=>{let e=this.gallery.attr("data-"+this.device+"-columns");const a=this.gallery.attr("data-auto-adjust-columns")==="true";if(this.device===y.b.MOBILE&&(this.layout===S||this.layout===v))return"1";if(!e)if(this.device===y.b.DESKTOP)e="4";else if(this.device===y.b.TABLET)e=this.gallery.attr("data-desktop-columns")||"4";else{const s=(this.gallery.attr("data-desktop-columns")||4)*1;e=Math.min(2,s).toString()}const i=t||this.layout===S||this.layout===v||this.layout===k;if(a&&!i){const s=this.imagesStack.images.length,n=parseInt(e,10);return""+this.getAutoAdjustedNumberOfColumns(s,n)}return e},this.getAutoAdjustedNumberOfColumns=(t,e)=>{if(t<=e)return t;if(t%e===0)return e;let i=1;for(i=1;i<3;i++){if(e-i>1&&t%(e-i)==0)return e-i;if(t%(e+i)==0)return e+i}return e},this.draw=()=>{var t;this.layoutContainer&&this.layoutContainer.remove(),this.layoutContainer=this.generateLayoutContainer();const e=this.imagesStack.getAsJQuery();switch(e.css("background-image",""),e.find("a").attr("style",""),this.layout){case P:case X:case Z:case Y:this.drawSquare();break;case E:case R:this.drawPinterest();break;case k:this.drawPanoramic();break;case Q:case K:this.drawVertical();break;case S:this.drawAsymetric2();break;case v:this.drawAsymetric3();break}this.viewAll.length?this.layoutContainer.insertBefore(this.viewAll):this.layoutContainer.insertAfter(this.galleryHolder),this.calculateAsymetricsColumns();const a=Object(F.a)(this.gallery);a==null||(t=a.classList)===null||t===void 0||t.forEach(i=>{i.startsWith("text-layout-")&&this.gallery.removeClass(i)}),this.gallery.removeClass(this.captionAlignment),this.textLayout=this.updateTextLayout(),this.captionAlignment=this.updateCaptionAlignment(),this.gallery.addClass("text-layout-"+this.textLayout),this.gallery.addClass(this.captionAlignment),this.gallery.addClass("photo-gallery-done"),this.layoutContainer.find(".photogallery-row").addClass("photogallery-hidden-row")},this.isCaptionElementVisible=(t,e)=>{const a=t.find(".caption-inner"),i=t.find(".caption-container");return a.length>0?a.css("display")==="none"||i.css("display")==="none"?!1:t.find(e).css("display")!=="none":!1},this.gallery=r,this.device=p.b.getCurrentLayoutDevice(),this.layout=this.gallery.attr("data-"+this.device+"-layout")||this.gallery.attr("data-desktop-layout")||P,this.textLayout=this.updateTextLayout(),this.captionAlignment=this.updateCaptionAlignment(),this.imagesStack=l,this.viewAll=this.gallery.find(".photoGalleryViewAll"),this.galleryHolder=this.gallery.find(".dmPhotoGalleryHolder"),this.gallery.find(".layout-container").length&&this.gallery.find(".layout-container").remove()}}O.displayName="LayoutProvider";var N=c("cU+2"),M=c("LyWx"),B=c("Z0cf"),U=c("ddYX"),b=c("9iID");const{inEditorMode:A,inPreviewMode:x,inRuntimeMode:q}=p.b,_=500;class L{constructor(r){var l=this;this.layoutProvider=void 0,this.device=void 0,this.imagesStack=void 0,this.gallery=void 0,this.galleryType=void 0,this.galleryId=void 0,this.rowsToShow=void 0,this.rows=void 0,this.imagesToUnveil=void 0,this.viewImagesButton=void 0,this.animationDelay=0,this.enableLazyLoading=void 0,this.unveilThreshold=void 0,this.init=t=>{this.getElementDimensions=this.getElementDimensions.bind(this),this.gallery=t,this.galleryId=this.gallery.attr("id"),this.galleryType=this.gallery.attr("data-link-gallery")&&this.gallery.attr("data-link-gallery")==="true"?"link":"photoSwipe",this.device=p.b.getCurrentLayoutDevice(),this.rowsToShow=this.getRowsToShow(),this.enableLazyLoading=this.getLazyLoading(),this.viewImagesButton=this.gallery.find(".photoGalleryViewAll"),this.imagesStack=new T(this.gallery),this.imagesToUnveil=[],this.animation=this.gallery.attr("data-image-animation")||"none",this.layoutProvider=new O(this.gallery,this.imagesStack),this.initLayout()},this.initLayout=(t,e)=>{this.unveilThreshold=this.animation?0:_,this.cleanAnchors(),this.layoutProvider.setLayout(t),this.layoutProvider.draw(),this.rows=this.gallery.find(".photogallery-row"),this.manageRowsVisibility(),this.initUnveilImages({skipAnimation:e}),this.addEvents(e),this.initLinks()},this.getLazyLoading=()=>{const t=this.gallery.attr("data-enable-lazy-loading");return!t||t==="true"},this.initLinks=()=>{this.imagesStack.get().forEach(t=>{const e=$(t).find(".image-container a"),a=e.find("img"),i=e.attr("href")||"",s=a.attr("data-src")||"";i&&s===i&&i.length&&e.attr("href","")})},this.changeRowsToShow=t=>{const e=this.isInstagramConnected()?"data-"+this.device+"-rows-to-show":"data-rows-to-show";this.gallery.attr(e,t),this.rowsToShow=t,this.initLayout()},this.getRowsToShow=()=>this.isInstagramConnected()?this.gallery.attr("data-"+this.device+"-rows-to-show"):this.gallery.attr("data-rows-to-show")||"4",this.manageRowsVisibility=()=>{let t;const e=this.gallery.attr(M.c.VIEW_MORE_VISIBILITY_ATTRIBUTE);this.rowsToShow==="100"?t=this.rows:(this.viewImagesButton.attr("data-mode")||"all")==="all"?(t=this.rows.slice(0,this.rowsToShow),this.viewImagesButton.text(this.viewImagesButton.attr("data-viewall"))):(t=this.rows,this.viewImagesButton.text(this.viewImagesButton.attr("data-viewless"))),e!=="false"&&this.rows.length>this.rowsToShow?this.viewImagesButton.show():this.viewImagesButton.hide(),t.removeClass("photogallery-hidden-row")},this.handleViewMoreVisibleChange=t=>{t==="false"&&this.viewImagesButton.attr("data-mode","all"),this.initLayout()},this.onUnveil=t=>{if(!this.enableLazyLoading){this.imagesToUnveil=[],this.revealElements(this.imagesStack.getAsJQuery(),t);return}if(!N.a.isElementInViewport(this.gallery[0],this.unveilThreshold))return;const e=this.imagesToUnveil.filter((a,i)=>N.a.isElementInViewport(i,this.unveilThreshold));e.length&&(this.imagesToUnveil=this.imagesToUnveil.not(e),this.revealElements(this.isInPopup()?this.imagesStack.getAsJQuery():e,t))},this.initUnveilImages=(t={})=>{const e=p.b.getSiteLayout(this.device),a=e===8||e===7?$("#iscrollBody"):$(window);this.imagesToUnveil=this.imagesStack.getAsJQuery();const i=`touchmove.unveil-${this.galleryId}
        scroll.unveil-${this.galleryId}
        resize.unveil-${this.galleryId}
        lookup.unveil-${this.galleryId} `;return a.off(i).on(i,J()(()=>this.onUnveil(t.skipAnimation),500)),this.onUnveil(t.skipAnimation),this},this.getImagePhotoswipeObject=t=>{if(!t.length)return null;const e=t.find("img"),a=t.find(".caption-title"),i=e.attr("data-src");let s="";this.layoutProvider.isCaptionElementVisible(t,".caption-text")&&t.find(".caption-text").contents().filter(o=>o.nodeType!==3).each((o,h)=>{s+=h.textContent.trim()+" "});const n=new Image;return n.src=i,{w:n.width,h:n.height,src:i,el:t,author:a.length?a.text().trim():"",title:s||""}},this.getImagesAsPhotoswipeItems=t=>t.map(e=>this.getImagePhotoswipeObject($(e))),this.initPhotoSwipeFromDOM=t=>{this.imagesStack.getAsJQuery().off("click.photoSwipe").on("click.photoSwipe",e=>{e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation();const a=e.target||e.srcElement,i=$(a).closest("li"),s=i.attr("data-index");this.openPhotoSwipe(s,i)})},this.openPhotoSwipe=(t,e)=>{const a=document.querySelectorAll(".pswp")[0],i={galleryUID:this.galleryId,index:t*1,shareEl:!this.gallery.attr("data-hide-share")},s=this.getImagesAsPhotoswipeItems(this.imagesStack.get());this.photoSwipeGallery=new window.PhotoSwipe(a,window.PhotoSwipeUI_Default,s,i),this.photoSwipeGallery.listen("gettingData",(n,o)=>{if(o.w<1||o.h<1){const h=new Image,g=this.photoSwipeGallery;h.onload=function(){o.w=this.width,o.h=this.height,o.needsUpdate=!0,g.updateSize(!0)},h.src=o.src}}),this.photoSwipeGallery.init()},this.revealElements=(t,e)=>{let a=100;Array.from(t).filter(i=>i.querySelector("[data-src]")).forEach(function(){var i=V()(function*(s){const n=$(s);if(l.animation&&(s.style.setProperty("animation-delay",`${a}ms`),a+=100),!s.querySelector("[data-src]").getAttribute("data-src"))return;const h=s.querySelector(".image-container");h.querySelectorAll("a").forEach(u=>{const I=u.querySelector("[data-src]").getAttribute("data-src");if(!I)return;const m=l.getSourceByDevice(I,n);if(b.a.get("feature.flag.photo.gallery.lazy"))requestAnimationFrame(()=>{u.style.setProperty("background-image",`url('${m}')`)});else{const f=new window.Image;f.onload=()=>{u.style.setProperty("background-image",`url('${m}')`)},b.a.get("feature.flag.logPhotoGalleryErrors")&&l.isInstagramConnected()&&(f.onerror=()=>{U.b({logLevel:U.a.WARN,dataString:{type:"IG image failed to load",eventType:"photo gallery",image:m,href:window.location.href}})}),f.src=m}}),yield p.a.loadImage($(h),{background:!0}),h.classList.add("revealed"),l.layoutProvider.get()===y.f.ASYMETRIC&&l.oldLayoutFix({thumb:n})&&(yield l.waitForTransition(h)),h.closest(".thumbnailInnerWrapper").style.setProperty("opacity","1")});return function(s){return i.apply(this,arguments)}}()),this.layoutProvider.getTextLayout()===y.g.BOTTOM?this.layoutProvider.equalCaptionsHeight(t):this.layoutProvider.clearCaptionInlineHeight(t),e||(t.removeClass("animated "+this.animation),t.addClass("animated "+this.animation))},this.getSourceByDevice=(t,e)=>{if(A()&&!x())return t;{if(this.isSignedUrl(t))return t;const{width:a,height:i}=this.getElementDimensions(e);if(b.a.get("feature.flag.photo.gallery.exact.size")){const n=a>=i,o=n?i/4:a/4,h=(n?a:i)+o;return this.replaceSourcePath(t,h)}else return a>=i?a<=160&&i<=90?this.replaceSourcePath(t,"thumbnail"):a<=640?this.replaceSourcePath(t,"mobile"):a<=1280?this.replaceSourcePath(t,"tablet"):t:a<=160&&i<=90?this.replaceSourcePath(t,"thumbnail"):this.device==="mobile"?this.replaceSourcePath(t,"mobile"):a<=1280?this.replaceSourcePath(t,"tablet"):t}},this.updateLazyLoading=t=>{this.enableLazyLoading=t},this.changeTextLayout=t=>{this.gallery.attr("data-desktop-text-layout",t),this.initLayout()},this.changeNumberOfColumns=t=>{this.gallery.attr("data-desktop-columns",this.numberOfColumns),this.initLayout()},this.onViewImagesClicked=t=>{t.preventDefault(),t.stopPropagation();const e=this.viewImagesButton.attr("data-mode")||"all";this.viewImagesButton.attr("data-mode",e==="all"?"less":"all"),this.initLayout()},this.cleanAnchors=()=>{this.imagesStack.getAsJQuery().find(".image-container a").css("background-image","")},this.addEvents=t=>{const e=this.gallery.find(".caption-button");if(this.viewImagesButton.off("click.viewallbutton").on("click.viewallbutton",this.onViewImagesClicked),x()||q()){const a=this.gallery.find(".image-container > a");if(a.off("click.photogallery").on("click.photogallery",function(i){(!this.getAttribute("href")||this.getAttribute("href")===this.getAttribute("data-image-url"))&&i.preventDefault()}),x()?p.d.bindLinks(e):e.on("click",i=>{i.stopPropagation()}),this.galleryType==="photoSwipe"){if(A()&&!x()){this.imagesStack.getAsJQuery().off("click.photoSwipe");return}this.initPhotoSwipeFromDOM()}else this.imagesStack.getAsJQuery().off("click.photoSwipe");p.d.initRuntimeLinks(a),p.d.initRuntimeLinks(e)}if(A()){const a=setInterval(()=>{var i,s,n;const o=(i=window)===null||i===void 0||(s=i.parent)===null||s===void 0||(n=s.$)===null||n===void 0?void 0:n.dmx;if(o)clearInterval(a),o.events&&(window.parent.$.dmx.events.on("siteHeightChange",()=>{this.onUnveil(t)}),window.parent.$.dmx.events.on("previewMobileOrientationRotated.photogallery-"+this.galleryId,()=>{this.initLayout()},!0,{scope:"page"}),window.parent.$.dmx.events.off("onePreviewToggle.photogallery-"+this.galleryId).on("onePreviewToggle.photogallery-"+this.galleryId,h=>{this.photoSwipeGallery&&this.photoSwipeGallery.close(),h&&h.preview?this.initLayout():this.imagesStack.getAsJQuery().off("click.photoSwipe")}));else return},300)}},this.getNumberOfColumns=()=>this.layoutProvider.getNumberOfColumns(),this.equalCaptionsHeight=t=>{this.layoutProvider.equalCaptionsHeight(t)},this.setLinkGallery=t=>{t?(this.galleryType="link",this.imagesStack.get().forEach(e=>{const a=$(e).find(".image-container a"),i=a.attr("data-link-url")||"";a.attr("href",i)})):(this.imagesStack.get().forEach(e=>{const a=$(e).find(".image-container a"),i=a.attr("href");a.attr("data-link-url",i)}),this.galleryType="photoSwipe"),this.initLayout()},this.initAnimation=(t,e)=>{this.gallery.find("li.photoGalleryThumbs").removeClass("animated "+e).addClass("animated "+t).css("animation-name",""),this.gallery.attr("data-image-animation",t),this.animation=t,this.initLayout()},this.getNextImage=t=>this.imagesStack.getNextImage(t),this.getId=()=>this.gallery[0].id,this.swapImages=(t,e)=>{this.imagesStack.swap(t,e),this.initLayout()},this.getImages=()=>this.imagesStack.get(),this.addImage=(t,e)=>{this.imagesStack.add($(t),e),this.initLayout()},this.removeImage=t=>{this.imagesStack.remove(t)},this.isInPopup=()=>this.gallery.closest("#dmPopup"),this.init(r)}get animation(){return this._animation}set animation(r){if(this._animation!==r){if(r==="none"){this._animation=null;return}this._animation=r}}isInstagramConnected(){return this.gallery.attr(M.c.INSTAGRAM_USERNAME_ATTRIBUTE)}oldLayoutFix({thumb:r}){this.layoutProvider.calculateImageHeight(r);const l=this.gallery.attr("data-image-hover-effect");return this.animation&&l&&l!=="false"&&l!=="none"}waitForTransition(r){return new Promise(l=>{$(r).one("transitionend",l)})}getElementDimensions(r){const l=r.length?r[0]:r;try{const t=l.getBoundingClientRect();return{width:t.width,height:t.height}}catch(t){return{width:0,height:0}}}isSignedUrl(r){if(!r)return!1;try{const l=new URL(r);return l&&l.pathname&&l.pathname.startsWith("/s/")}catch(l){return!1}}replaceSourcePath(r,l){return B.c(r)||W()(l)?B.a(r,l):r.replace(/\/multi\/(?:desktop\/|tablet\/|thumbnail\/|mobile\/)?/gi,`/multi/${l}/`)}}L.displayName="PhotoGallery";let w=[];function tt(d={}){const r=$(".dmPhotoGallery"),l=r.length;w=[],$.dmrt.components.photogallery={load(){},default:{ready(){},load(){}}},$.dmrt.components.photogallery.oldComponent=Object.assign({},$.dmrt.photogallery.oldComponent);for(let t=0;t<l;t++)D(r.eq(t),d)}function D(d,r={}){let l;d.hasClass("newPhotoGallery")?(d.data("initialized")&&!r.force?l=d.data("initialized"):(r.disableLazyLoading&&d.attr("data-enable-lazy-loading","false"),r.disableAnimation&&d.removeAttr("data-image-animation"),l=new L(d),d.data("initialized",l)),w.push(l)):$.dmrt.components.photogallery.oldComponent.default.ready()}function et(){}function it(d){for(let r=0;r<w.length;r++)if(w[r].getId()===d)return w[r];return null}function at(d){w||(w=[]);const r=new L(d);d.data("initialized",r),w.push(r)}}}])})();