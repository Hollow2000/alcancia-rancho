import{a as wt}from"./chunk-2UXHURU3.js";import{h as It,k as jt,l as Et}from"./chunk-B7U773ZU.js";import{c as H}from"./chunk-B6JE4TAF.js";import{$ as ht,Ba as Ct,Da as xt,Ea as Tt,Fa as T,G as _t,Q as M,W as V,aa as bt,l as st,m as lt,n as ut,qa as gt,r as mt,ta as vt,wa as yt,xa as P,y as dt,ya as N}from"./chunk-2D4RJNAO.js";import{c as ft,d as F,f as z,g as D,h as A}from"./chunk-4O3FVBGX.js";import{$a as m,$b as it,Ab as f,Bb as d,Bc as ct,Cb as j,Fc as pt,Gb as S,Gc as at,Hb as R,Ib as L,Jb as E,Nb as x,Ob as c,Pa as W,Qa as l,Rb as g,Tb as v,Ub as y,V as Z,Va as k,Vb as O,W as q,Y as $,Zb as u,_ as I,_a as J,_b as nt,da as h,ea as b,gb as G,ha as U,hb as X,hc as ot,jc as w,kb as tt,kc as rt,lb as et,mb as s,qc as _,ra as K,ta as Y,tb as B,zb as o}from"./chunk-4K3SSWLO.js";var Pt=`
    .p-confirmpopup {
        position: absolute;
        margin-top: dt('confirmpopup.gutter');
        top: 0;
        left: 0;
        background: dt('confirmpopup.background');
        color: dt('confirmpopup.color');
        border: 1px solid dt('confirmpopup.border.color');
        border-radius: dt('confirmpopup.border.radius');
        box-shadow: dt('confirmpopup.shadow');
    }

    .p-confirmpopup-content {
        display: flex;
        align-items: center;
        padding: dt('confirmpopup.content.padding');
        gap: dt('confirmpopup.content.gap');
    }

    .p-confirmpopup-icon {
        font-size: dt('confirmpopup.icon.size');
        width: dt('confirmpopup.icon.size');
        height: dt('confirmpopup.icon.size');
        color: dt('confirmpopup.icon.color');
    }

    .p-confirmpopup-footer {
        display: flex;
        justify-content: flex-end;
        gap: dt('confirmpopup.footer.gap');
        padding: dt('confirmpopup.footer.padding');
    }

    .p-confirmpopup-footer button {
        width: auto;
    }

    .p-confirmpopup-footer button:last-child {
        margin: 0;
    }

    .p-confirmpopup-flipped {
        margin-block-start: calc(dt('confirmpopup.gutter') * -1);
        margin-block-end: dt('confirmpopup.gutter');
    }

    .p-confirmpopup-enter-from {
        opacity: 0;
        transform: scaleY(0.8);
    }

    .p-confirmpopup-leave-to {
        opacity: 0;
    }

    .p-confirmpopup-enter-active {
        transition:
            transform 0.12s cubic-bezier(0, 0, 0.2, 1),
            opacity 0.12s cubic-bezier(0, 0, 0.2, 1);
    }

    .p-confirmpopup-leave-active {
        transition: opacity 0.1s linear;
    }

    .p-confirmpopup:after,
    .p-confirmpopup:before {
        bottom: 100%;
        left: calc(dt('confirmpopup.arrow.offset') + dt('confirmpopup.arrow.left'));
        content: ' ';
        height: 0;
        width: 0;
        position: absolute;
        pointer-events: none;
    }

    .p-confirmpopup:after {
        border-width: calc(dt('confirmpopup.gutter') - 2px);
        margin-left: calc(-1 * (dt('confirmpopup.gutter') - 2px));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.background');
    }

    .p-confirmpopup:before {
        border-width: dt('confirmpopup.gutter');
        margin-left: calc(-1 * dt('confirmpopup.gutter'));
        border-style: solid;
        border-color: transparent;
        border-bottom-color: dt('confirmpopup.border.color');
    }

    .p-confirmpopup-flipped:after,
    .p-confirmpopup-flipped:before {
        bottom: auto;
        top: 100%;
    }

    .p-confirmpopup-flipped:after {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.background');
    }

    .p-confirmpopup-flipped:before {
        border-bottom-color: transparent;
        border-top-color: dt('confirmpopup.border.color');
    }
`;var Lt=["content"],Ot=["accepticon"],Ft=["rejecticon"],zt=["headless"],Dt=(e,r)=>({showTransitionParams:e,hideTransitionParams:r}),At=e=>({value:"open",params:e}),St=e=>({$implicit:e});function Mt(e,r){e&1&&L(0)}function Vt(e,r){if(e&1&&(S(0),s(1,Mt,1,0,"ng-container",9),R()),e&2){let t=c(2);l(),o("ngTemplateOutlet",t.headlessTemplate||t._headlessTemplate)("ngTemplateOutletContext",w(2,St,t.confirmation))}}function Nt(e,r){e&1&&L(0)}function Ht(e,r){if(e&1&&(S(0),s(1,Nt,1,0,"ng-container",9),R()),e&2){let t=c(3);l(),o("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)("ngTemplateOutletContext",w(2,St,t.confirmation))}}function Qt(e,r){if(e&1&&j(0,"i",10),e&2){let t=c(4);u(t.cx("icon")),o("pBind",t.ptm("icon"))}}function Zt(e,r){if(e&1&&(s(0,Qt,1,3,"i",13),f(1,"span",10),nt(2),d()),e&2){let t=c(3);o("ngIf",t.confirmation==null?null:t.confirmation.icon),l(),u(t.cx("message")),o("pBind",t.ptm("message")),l(),it(t.confirmation==null?null:t.confirmation.message)}}function qt(e,r){if(e&1&&j(0,"i"),e&2){let t=c(5);u(t.confirmation==null?null:t.confirmation.rejectIcon)}}function $t(e,r){}function Ut(e,r){e&1&&s(0,$t,0,0,"ng-template",null,4,_)}function Kt(e,r){if(e&1&&s(0,qt,1,2,"i",15)(1,Ut,2,0,null,16),e&2){let t=c(4);o("ngIf",t.confirmation==null?null:t.confirmation.rejectIcon)("ngIfElse",t.rejecticon),l(),o("ngTemplateOutlet",t.rejectIconTemplate||t._rejectIconTemplate)}}function Yt(e,r){if(e&1){let t=E();f(0,"p-button",14),x("onClick",function(){h(t);let i=c(3);return b(i.onReject())}),s(1,Kt,2,3,"ng-template",null,3,_),d()}if(e&2){let t=c(3);u(t.cx("pcRejectButton")),o("label",t.rejectButtonLabel)("pt",t.ptm("pcRejectButton"))("styleClass",t.confirmation==null?null:t.confirmation.rejectButtonStyleClass)("size",(t.confirmation==null||t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.size)||"small")("text",(t.confirmation==null||t.confirmation.rejectButtonProps==null?null:t.confirmation.rejectButtonProps.text)||!1)("buttonProps",t.getRejectButtonProps())("autofocus",t.autoFocusReject),B("aria-label",t.rejectButtonLabel)}}function Wt(e,r){if(e&1&&j(0,"i"),e&2){let t=c(5);u(t.confirmation==null?null:t.confirmation.acceptIcon)}}function Jt(e,r){}function Gt(e,r){e&1&&s(0,Jt,0,0,"ng-template",null,5,_)}function Xt(e,r){if(e&1&&s(0,Wt,1,2,"i",15)(1,Gt,2,0,null,16),e&2){let t=c(4);o("ngIf",t.confirmation==null?null:t.confirmation.acceptIcon)("ngIfElse",t.accepticontemplate),l(),o("ngTemplateOutlet",t.acceptIconTemplate||t._acceptIconTemplate)}}function te(e,r){if(e&1){let t=E();f(0,"p-button",17),x("onClick",function(){h(t);let i=c(3);return b(i.onAccept())}),s(1,Xt,2,3,"ng-template",null,3,_),d()}if(e&2){let t=c(3);u(t.cx("pcAcceptButton")),o("label",t.acceptButtonLabel)("pt",t.ptm("pcAcceptButton"))("styleClass",t.confirmation==null?null:t.confirmation.acceptButtonStyleClass)("size",(t.confirmation==null||t.confirmation.acceptButtonProps==null?null:t.confirmation.acceptButtonProps.size)||"small")("buttonProps",t.getAcceptButtonProps())("autofocus",t.autoFocusAccept),B("aria-label",t.acceptButtonLabel)}}function ee(e,r){if(e&1&&(f(0,"div",10,1),s(2,Ht,2,4,"ng-container",8)(3,Zt,3,5,"ng-template",null,2,_),d(),f(5,"div",10),s(6,Yt,3,10,"p-button",11)(7,te,3,9,"p-button",12),d()),e&2){let t=O(4),n=c(2);u(n.cx("content")),o("pBind",n.ptm("content")),l(2),o("ngIf",n.contentTemplate||n._contentTemplate)("ngIfElse",t),l(3),u(n.cx("footer")),o("pBind",n.ptm("footer")),l(),o("ngIf",(n.confirmation==null?null:n.confirmation.rejectVisible)!==!1),l(),o("ngIf",(n.confirmation==null?null:n.confirmation.acceptVisible)!==!1)}}function ne(e,r){if(e&1){let t=E();f(0,"div",7),x("click",function(i){h(t);let p=c();return b(p.onOverlayClick(i))})("@animation.start",function(i){h(t);let p=c();return b(p.onAnimationStart(i))})("@animation.done",function(i){h(t);let p=c();return b(p.onAnimationEnd(i))}),s(1,Vt,2,4,"ng-container",8)(2,ee,8,10,"ng-template",null,0,_),d()}if(e&2){let t=O(3),n=c();u(n.cn(n.cx("root"),n.styleClass)),o("pBind",n.ptm("root"))("ngStyle",n.style)("@animation",w(10,At,rt(7,Dt,n.showTransitionOptions,n.hideTransitionOptions))),l(),o("ngIf",n.headlessTemplate||n._headlessTemplate)("ngIfElse",t)}}var ie={root:()=>["p-confirmpopup p-component"],content:"p-confirmpopup-content",icon:({instance:e})=>["p-confirmpopup-icon",e.confirmation?.icon],message:"p-confirmpopup-message",footer:"p-confirmpopup-footer",pcRejectButton:"p-confirmpopup-reject-button",pcAcceptButton:"p-confirmpopup-accept-button"},kt=(()=>{class e extends Ct{name="confirmpopup";style=Pt;classes=ie;static \u0275fac=(()=>{let t;return function(i){return(t||(t=K(e)))(i||e)}})();static \u0275prov=Z({token:e,factory:e.\u0275fac})}return e})();var Bt=new $("CONFIRMPOPUP_INSTANCE"),oe=(()=>{class e extends Tt{el;confirmationService;renderer;cd;overlayService;document;$pcConfirmPopup=I(Bt,{optional:!0,skipSelf:!0})??void 0;bindDirectiveInstance=I(T,{self:!0});onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptm("host"))}key;defaultFocus="accept";showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autoZIndex=!0;baseZIndex=0;style;styleClass;get visible(){return this._visible}set visible(t){this._visible=t,this.cd.markForCheck()}container;subscription;confirmation;autoFocusAccept=!1;autoFocusReject=!1;contentTemplate;acceptIconTemplate;rejectIconTemplate;headlessTemplate;_contentTemplate;_acceptIconTemplate;_rejectIconTemplate;_headlessTemplate;_visible;documentClickListener;documentResizeListener;scrollHandler;window;_componentStyle=I(kt);constructor(t,n,i,p,a,Rt){super(),this.el=t,this.confirmationService=n,this.renderer=i,this.cd=p,this.overlayService=a,this.document=Rt,this.window=this.document.defaultView,this.subscription=this.confirmationService.requireConfirmation$.subscribe(C=>{if(!C){this.hide();return}C.key===this.key&&(this.confirmation=C,Object.keys(C).forEach(Q=>{this[Q]=C[Q]}),this.confirmation.accept&&(this.confirmation.acceptEvent=new k,this.confirmation.acceptEvent.subscribe(this.confirmation.accept)),this.confirmation.reject&&(this.confirmation.rejectEvent=new k,this.confirmation.rejectEvent.subscribe(this.confirmation.reject)),this.visible=!0)})}templates;onAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"rejecticon":this._rejectIconTemplate=t.template;break;case"accepticon":this._acceptIconTemplate=t.template;break;case"headless":this._headlessTemplate=t.template;break}})}option(t,n){let i=this;if(i.hasOwnProperty(t))return n?i[n]:i[t]}onEscapeKeydown(t){this.confirmation&&this.confirmation.closeOnEscape!==!1&&this.onReject()}onAnimationStart(t){t.toState==="open"&&(this.container=t.element,this.renderer.appendChild(this.document.body,this.container),this.align(),this.bindListeners(),this.autoFocusAccept=this.defaultFocus===void 0||this.defaultFocus==="accept",this.autoFocusReject=this.defaultFocus==="reject")}onAnimationEnd(t){t.toState==="void"&&this.onContainerDestroy()}getAcceptButtonProps(){return this.option("acceptButtonProps")}getRejectButtonProps(){return this.option("rejectButtonProps")}align(){if(this.autoZIndex&&H.set("overlay",this.container,this.config.zIndex.overlay),!this.confirmation||!this.confirmation.target)return;_t(this.container,this.confirmation?.target,!1);let t=V(this.container),n=V(this.confirmation?.target),i=0;t&&n&&t.left<n.left&&(i=n.left-t.left),this.container&&this.container.style.setProperty("--p-confirmpopup-arrow-left",`${i}px`),t&&n&&t.top<n.top&&dt(this.container,"p-confirm-popup-flipped")}hide(){this.visible=!1}onAccept(){this.confirmation?.acceptEvent&&this.confirmation.acceptEvent.emit(),this.hide(),M(this.confirmation?.target)}onReject(){this.confirmation?.rejectEvent&&this.confirmation.rejectEvent.emit(),this.hide(),M(this.confirmation?.target)}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}bindListeners(){setTimeout(()=>{this.bindDocumentClickListener(),this.bindDocumentResizeListener(),this.bindScrollListener()})}unbindListeners(){this.unbindDocumentClickListener(),this.unbindDocumentResizeListener(),this.unbindScrollListener()}bindDocumentClickListener(){if(!this.documentClickListener){let t=ht()?"touchstart":"click",n=this.el?this.el.nativeElement.ownerDocument:this.document;this.documentClickListener=this.renderer.listen(n,t,i=>{if(this.confirmation&&this.confirmation.dismissableMask!==!1){let p=this.confirmation.target;this.container!==i.target&&!this.container?.contains(i.target)&&p!==i.target&&!p.contains(i.target)&&this.hide()}})}}unbindDocumentClickListener(){this.documentClickListener&&(this.documentClickListener(),this.documentClickListener=null)}onWindowResize(){this.visible&&!bt()&&this.hide()}bindDocumentResizeListener(){this.documentResizeListener||(this.documentResizeListener=this.renderer.listen(this.window,"resize",this.onWindowResize.bind(this)))}unbindDocumentResizeListener(){this.documentResizeListener&&(this.documentResizeListener(),this.documentResizeListener=null)}bindScrollListener(){this.scrollHandler||(this.scrollHandler=new It(this.confirmation?.target,()=>{this.visible&&this.hide()})),this.scrollHandler.bindScrollListener()}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unsubscribeConfirmationSubscriptions(){this.confirmation&&(this.confirmation.acceptEvent&&this.confirmation.acceptEvent.unsubscribe(),this.confirmation.rejectEvent&&this.confirmation.rejectEvent.unsubscribe())}onContainerDestroy(){this.unbindListeners(),this.unsubscribeConfirmationSubscriptions(),this.autoZIndex&&H.clear(this.container),this.confirmation=null,this.container=null}restoreAppend(){this.container&&this.renderer.removeChild(this.document.body,this.container),this.onContainerDestroy()}get acceptButtonLabel(){return this.confirmation?.acceptLabel||this.config.getTranslation(N.ACCEPT)}get rejectButtonLabel(){return this.confirmation?.rejectLabel||this.config.getTranslation(N.REJECT)}onDestroy(){this.restoreAppend(),this.subscription&&this.subscription.unsubscribe()}static \u0275fac=function(n){return new(n||e)(m(Y),m(gt),m(J),m(ct),m(vt),m(U))};static \u0275cmp=G({type:e,selectors:[["p-confirmpopup"]],contentQueries:function(n,i,p){if(n&1&&(g(p,Lt,4),g(p,Ot,4),g(p,Ft,4),g(p,zt,4),g(p,yt,4)),n&2){let a;v(a=y())&&(i.contentTemplate=a.first),v(a=y())&&(i.acceptIconTemplate=a.first),v(a=y())&&(i.rejectIconTemplate=a.first),v(a=y())&&(i.headlessTemplate=a.first),v(a=y())&&(i.templates=a)}},hostBindings:function(n,i){n&1&&x("keydown.Escape",function(a){return i.onEscapeKeydown(a)},W)},inputs:{key:"key",defaultFocus:"defaultFocus",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autoZIndex:[2,"autoZIndex","autoZIndex",pt],baseZIndex:[2,"baseZIndex","baseZIndex",at],style:"style",styleClass:"styleClass",visible:"visible"},features:[ot([kt,{provide:Bt,useExisting:e},{provide:xt,useExisting:e}]),et([T]),tt],decls:1,vars:1,consts:[["notHeadless",""],["content",""],["withoutContentTemplate",""],["icon",""],["rejecticon",""],["accepticontemplate",""],["pFocusTrap","","role","alertdialog",3,"pBind","class","ngStyle","click",4,"ngIf"],["pFocusTrap","","role","alertdialog",3,"click","pBind","ngStyle"],[4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"pBind"],["type","button",3,"label","pt","class","styleClass","size","text","buttonProps","autofocus","onClick",4,"ngIf"],["type","button",3,"label","pt","class","styleClass","size","buttonProps","autofocus","onClick",4,"ngIf"],[3,"pBind","class",4,"ngIf"],["type","button",3,"onClick","label","pt","styleClass","size","text","buttonProps","autofocus"],[3,"class",4,"ngIf","ngIfElse"],[4,"ngTemplateOutlet"],["type","button",3,"onClick","label","pt","styleClass","size","buttonProps","autofocus"]],template:function(n,i){n&1&&s(0,ne,4,12,"div",6),n&2&&o("ngIf",i.visible)},dependencies:[mt,st,ut,lt,P,Et,jt,wt,T],encapsulation:2,data:{animation:[ft("animation",[D("void",z({transform:"scaleY(0.8)",opacity:0})),D("open",z({transform:"translateY(0)",opacity:1})),A("void => open",F("{{showTransitionParams}}")),A("open => void",F("{{hideTransitionParams}}"))])]},changeDetection:0})}return e})(),Fe=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=X({type:e});static \u0275inj=q({imports:[oe,P,P]})}return e})();export{oe as a,Fe as b};
