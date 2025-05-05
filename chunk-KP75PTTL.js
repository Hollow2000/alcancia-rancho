import{c as A}from"./chunk-W6J27XCB.js";import{$ as F,D as ht,E as gt,T as bt,W as Ct,Z as vt,_ as w,b as dt,ba as yt,da as xt,i as _t,ka as Tt,ma as It,na as jt,q as $,x as M}from"./chunk-XEBEUHT2.js";import{c as ft,d as R,f as O,g as z,h as D}from"./chunk-4YRY4IP2.js";import{$a as U,Ab as I,Ac as pt,Bb as y,Cb as p,Hb as h,Hc as at,Jb as g,Kb as b,Kc as st,Lb as B,Lc as lt,Mb as X,Mc as ut,Nb as tt,Qc as mt,Ta as Y,Tb as et,Ub as nt,Va as s,Wa as u,Wb as j,X as H,Xb as it,Y as Q,ba as Z,db as W,dc as x,eb as G,fa as N,ga as q,hb as l,jb as E,kb as c,oa as d,ob as v,oc as ot,pa as _,qc as rt,ra as J,rc as ct,ub as m,va as P,vb as f,wb as T,xb as k,yb as S,za as K,zb as L}from"./chunk-UK2LV4O3.js";var kt=({dt:e})=>`
.p-confirmpopup {
    position: absolute;
    margin-top: ${e("confirmpopup.gutter")};
    top: 0;
    left: 0;
    background: ${e("confirmpopup.background")};
    color: ${e("confirmpopup.color")};
    border: 1px solid ${e("confirmpopup.border.color")};
    border-radius: ${e("confirmpopup.border.radius")};
    box-shadow: ${e("confirmpopup.shadow")};
}

.p-confirmpopup-content {
    display: flex;
    align-items: center;
    padding: ${e("confirmpopup.content.padding")};
    gap: ${e("confirmpopup.content.gap")};
}

.p-confirmpopup-icon {
    font-size: ${e("confirmpopup.icon.size")};
    width: ${e("confirmpopup.icon.size")};
    height: ${e("confirmpopup.icon.size")};
    color: ${e("confirmpopup.icon.color")};
}

.p-confirmpopup-footer {
    display: flex;
    justify-content: flex-end;
    gap: ${e("confirmpopup.footer.gap")};
    padding: ${e("confirmpopup.footer.padding")};
}

.p-confirmpopup-footer button {
    width: auto;
}

.p-confirmpopup-footer button:last-child {
    margin: 0;
}

.p-confirmpopup-flipped {
    margin-top: calc(${e("confirmpopup.gutter")} * -1);
    margin-bottom: ${e("confirmpopup.gutter")};
}

.p-confirmpopup-enter-from {
    opacity: 0;
    transform: scaleY(0.8);
}

.p-confirmpopup-leave-to {
    opacity: 0;
}

.p-confirmpopup-enter-active {
    transition: transform 0.12s cubic-bezier(0, 0, 0.2, 1), opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
}

.p-confirmpopup-leave-active {
    transition: opacity 0.1s linear;
}

.p-confirmpopup:after,
.p-confirmpopup:before {
    bottom: 100%;
    left: ${e("confirmpopup.arrow.offset")};
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
}

.p-confirmpopup:after {
    border-width: calc(${e("confirmpopup.gutter")} - 2px);
    margin-left: calc(-1 * (${e("confirmpopup.gutter")} - 2px));
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("confirmpopup.background")};
}

.p-confirmpopup:before {
    border-width: ${e("confirmpopup.gutter")};
    margin-left: calc(-1 * ${e("confirmpopup.gutter")});
    border-style: solid;
    border-color: transparent;
    border-bottom-color: ${e("confirmpopup.border.color")};
}

.p-confirmpopup-flipped:after,
.p-confirmpopup-flipped:before {
    bottom: auto;
    top: 100%;
}

.p-confirmpopup-flipped:after {
    border-bottom-color: transparent;
    border-top-color: ${e("confirmpopup.background")};
}

.p-confirmpopup-flipped:before {
    border-bottom-color: transparent;
    border-top-color: ${e("confirmpopup.border.color")};
}
`,St={root:"p-confirmpopup p-component",content:"p-confirmpopup-content",icon:"p-confirmpopup-icon",message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},wt=(()=>{class e extends yt{name="confirmpopup";theme=kt;classes=St;static \u0275fac=(()=>{let t;return function(i){return(t||(t=J(e)))(i||e)}})();static \u0275prov=H({token:e,factory:e.\u0275fac})}return e})();var Lt=["content"],Bt=["accepticon"],Rt=["rejecticon"],Ot=["headless"],zt=(e,o)=>({showTransitionParams:e,hideTransitionParams:o}),Dt=e=>({value:"open",params:e}),Pt=e=>({$implicit:e});function $t(e,o){e&1&&L(0)}function Mt(e,o){if(e&1&&(k(0),l(1,$t,1,0,"ng-container",8),S()),e&2){let t=p(2);s(),c("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)("ngTemplateOutletContext",j(2,Pt,t.confirmation))}}function Ft(e,o){e&1&&L(0)}function At(e,o){if(e&1&&(k(0),l(1,Ft,1,0,"ng-container",8),S()),e&2){let t=p(3);s(),c("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",j(2,Pt,t.confirmation))}}function Vt(e,o){if(e&1&&T(0,"i",15),e&2){let t=p(4);v(t.confirmation==null?null:t.confirmation.icon),c("ngClass","p-confirmpopup-icon")}}function Ht(e,o){if(e&1&&(l(0,Vt,1,3,"i",13),m(1,"span",14),X(2),f()),e&2){let t=p(3);c("ngIf",t.confirmation==null?null:t.confirmation.icon),s(2),tt(t.confirmation==null?null:t.confirmation.message)}}function Qt(e,o){if(e&1&&T(0,"i"),e&2){let t=p(4);v(t.confirmation==null?null:t.confirmation.rejectIcon)}}function Zt(e,o){}function Nt(e,o){e&1&&l(0,Zt,0,0,"ng-template",null,3,x)}function qt(e,o){if(e&1){let t=I();m(0,"p-button",16),y("onClick",function(){d(t);let i=p(3);return _(i.onReject())}),l(1,Qt,1,2,"i",17)(2,Nt,2,0,null,18),f()}if(e&2){let t=p(3);c("label",t.rejectButtonLabel)("ngClass","p-confirmpopup-reject-button")("styleClass",t.confirmation==null?null:t.confirmation.rejectButtonStyleClass)("size",(t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.size)||"small")("text",(t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.text)||!1)("buttonProps",t.getRejectButtonProps()),E("aria-label",t.rejectButtonLabel),s(),c("ngIf",t.confirmation==null?null:t.confirmation.rejectIcon)("ngIfElse",t.rejecticon),s(),c("ngTemplateOutlet",t.rejectIconTemplate||t._rejectIconTemplate)}}function Jt(e,o){if(e&1&&T(0,"i"),e&2){let t=p(4);v(t.confirmation==null?null:t.confirmation.acceptIcon)}}function Kt(e,o){}function Yt(e,o){e&1&&l(0,Kt,0,0,"ng-template",null,4,x)}function Ut(e,o){if(e&1){let t=I();m(0,"p-button",19),y("onClick",function(){d(t);let i=p(3);return _(i.onAccept())}),l(1,Jt,1,2,"i",17)(2,Yt,2,0,null,18),f()}if(e&2){let t=p(3);c("label",t.acceptButtonLabel)("ngClass","p-confirmpopup-accept-button")("styleClass",t.confirmation==null?null:t.confirmation.acceptButtonStyleClass)("size",(t.confirmation.acceptButtonProps==null?null:t.confirmation.acceptButtonProps.size)||"small")("buttonProps",t.getAcceptButtonProps()),E("aria-label",t.acceptButtonLabel),s(),c("ngIf",t.confirmation==null?null:t.confirmation.acceptIcon)("ngIfElse",t.accepticontemplate),s(),c("ngTemplateOutlet",t.acceptIconTemplate||t._acceptIconTemplate)}}function Wt(e,o){if(e&1&&(m(0,"div",9,1),l(2,At,2,4,"ng-container",7)(3,Ht,3,2,"ng-template",null,2,x),f(),m(5,"div",10),l(6,qt,3,10,"p-button",11)(7,Ut,3,9,"p-button",12),f()),e&2){let t=B(4),n=p(2);s(2),c("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",t),s(4),c("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),s(),c("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function Gt(e,o){if(e&1){let t=I();m(0,"div",6),y("click",function(i){d(t);let r=p();return _(r.onOverlayClick(i))})("@animation.start",function(i){d(t);let r=p();return _(r.onAnimationStart(i))})("@animation.done",function(i){d(t);let r=p();return _(r.onAnimationEnd(i))}),l(1,Mt,2,4,"ng-container",7)(2,Wt,8,4,"ng-template",null,0,x),f()}if(e&2){let t=B(3),n=p();v(n.styleClass),c("ngClass","p-confirmpopup p-component")("ngStyle",n.style)("@animation",j(10,Dt,it(7,zt,n.showTransitionOptions,n.hideTransitionOptions))),s(),c("ngIf",n.headlessTemplate||n._headlessTemplate)("ngIfElse",t)}}var Xt=(()=>{class e extends xt{el;confirmationService;renderer;cd;overlayService;document;key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(t){this._visible=t,this.cd.markForCheck()}container;subscription;confirmation;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=Z(wt);constructor(t,n,i,r,a,Et){super(),this.el=t,this.confirmationService=n,this.renderer=i,this.cd=r,this.overlayService=a,this.document=Et,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(C=>{if(!C){this.hide();return}C.key===this.key&&(this.confirmation=C,Object.keys(C).forEach(V=>{this[V]=C[V]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new P,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new P,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"rejecticon":this._rejectIconTemplate=t.template;break;case"accepticon":this._acceptIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break}})}option(t,n){let i=this||this;if(i.hasOwnProperty(t))return n?i[n]:i[t]}onEscapeKeydown(t){this.confirmation&&this.confirmation.closeOnEscape&&this.onReject()}onAnimationStart(t){if(t.toState==="open"){this.container=t.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners();let n=this.getElementToFocus();n&&n.focus()}}onAnimationEnd(t){switch(t.toState){case"void":this.onContainerDestroy();break}}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}getElementToFocus(){switch(this.defaultFocus){case"accept":return $(this.container,".p-confirm-popup-accept");case"reject":return $(this.container,".p-confirm-popup-reject");case"none":return null}}align(){if(this.autoZIndex&&A.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation)return;_t(this.container,this.confirmation?.target,!1);let t=M(this.container),n=M(this.confirmation?.target),i=0;t.left<n.left&&(i=n.left-t.left),this.container.style.setProperty("--overlayArrowLeft",`${i}px`),t.top<n.top&&dt(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide()}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide()}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let t=ht()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,t,i=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let r=this.confirmation.target;this.container!==i.target&&!this.container?.contains(i.target)&&r!==i.target&&!r.contains(i.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!gt()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new Tt(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&A.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(F.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(F.REJECT)}ngOnDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||e)(u(K),u(bt),u(U),u(ot),u(Ct),u(pt))};static \u0275cmp=N({type:e,selectors:[["p-confirmPopup"],["p-confirmpopup"],["p-confirm-popup"]],contentQueries:function(n,i,r){if(n&1&&(h(r,Lt,4),h(r,Bt,4),h(r,Rt,4),h(r,Ot,4),h(r,vt,4)),n&2){let a;g(a=b())&&(i.contentTemplate=a.first),g(a=b())&&(i.acceptIconTemplate=a.first),g(a=b())&&(i.rejectIconTemplate=a.first),g(a=b())&&(i.headlessTemplate=a.first),g(a=b())&&(i.templates=a)}},hostBindings:function(n,i){n&1&&y("keydown.escape",function(a){return i.onEscapeKeydown(a)},!1,Y)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",rt],baseZIndex:[2,"baseZIndex","baseZIndex",ct],style:"style",styleClass:"styleClass",visible:"visible"},standalone:!0,features:[et([wt]),G,W,nt],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["rejecticon",""],["accepticontemplate",""],["role","alertdialog",3,"ngClass","ngStyle","class","click",4,"ngIf"],["role","alertdialog",3,"click","ngClass","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-confirmpopup-content"],[1,"p-confirmpopup-footer"],["type","button",3,"label","ngClass","styleClass","size","text","buttonProps","onClick",4,"ngIf"],["type","button",3,"label","ngClass","styleClass","size","buttonProps","onClick",4,"ngIf"],[3,"ngClass","class",4,"ngIf"],[1,"p-confirmpopup-message"],[3,"ngClass"],["type","button",3,"onClick","label","ngClass","styleClass","size","text","buttonProps"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","ngClass","styleClass","size","buttonProps"]],template:function(n,i){n&1&&l(0,Gt,4,12,"div",5),n&2&&c("ngIf",i.visible)},dependencies:[mt,at,st,ut,lt,w,jt,It],encapsulation:2,data:{animation:[ft("animation",[z("void",O({transform:"scaleY(0.8)",opacity:0})),z("open",O({transform:"translateY(0)",opacity:1})),D("void => open",R("{{showTransitionParams}}")),D("open => void",R("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),we=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=q({type:e});static \u0275inj=Q({imports:[Xt,w,w]})}return e})();export{Xt as a,we as b};
