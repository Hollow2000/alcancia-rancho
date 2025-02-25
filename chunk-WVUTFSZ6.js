import{a as Le,n as Me}from"./chunk-XPPZ5LMI.js";import{a as xe}from"./chunk-KEDTMOP6.js";import{b as Ee}from"./chunk-PMN55GJU.js";import{c as be,d as Y,f as J,h as X}from"./chunk-4YRY4IP2.js";import{M as j}from"./chunk-5MJUYKAR.js";import{$ as Se,J as Te,M as ke,P as Ie,Q as P,R as D,T as Q,V as N,Y as Z,h as ve,i as we,j as ye,x as Ce}from"./chunk-OYKZXE7R.js";import{Bb as R,Cb as k,Db as de,Eb as K,Fa as a,Fb as ce,Jb as B,Lb as H,Nb as ue,Pa as C,Qa as ie,R as te,S as V,T as W,Ta as f,Va as c,Wa as r,Y as F,Ya as q,Zb as L,_a as x,_b as he,aa as y,ba as U,da as ne,eb as u,fb as d,gb as S,hb as E,ib as M,ja as h,jb as $,ka as m,kb as _,la as z,lb as b,ma as g,mb as s,nb as ae,nc as me,ob as oe,pb as T,pc as fe,qa as O,qb as re,qc as ge,rb as v,rc as _e,sb as w,tb as le,ub as se,vb as pe,vc as A,xc as G}from"./chunk-ZBDPCDAU.js";var $e=({dt:e})=>`
.p-floatlabel {
    display: block;
    position: relative;
}

.p-floatlabel label {
    position: absolute;
    pointer-events: none;
    top: 50%;
    transform: translateY(-50%);
    transition-property: all;
    transition-timing-function: ease;
    line-height: 1;
    font-weight: ${e("floatlabel.font.weight")};
    inset-inline-start: ${e("floatlabel.position.x")};
    color: ${e("floatlabel.color")};
    transition-duration: ${e("floatlabel.transition.duration")};
}

.p-floatlabel:has(.p-textarea) label {
    top: ${e("floatlabel.position.y")};
    transform: translateY(0);
}

.p-floatlabel:has(.p-inputicon:first-child) label {
    inset-inline-start: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

.p-floatlabel:has(.ng-invalid.ng-dirty) label {
    color: ${e("floatlabel.invalid.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-focus) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.over.active.top")};
    transform: translateY(0);
    font-size: ${e("floatlabel.active.font.size")};
    font-weight: ${e("floatlabel.label.active.font.weight")};
}

.p-floatlabel:has(input.p-filled) label,
.p-floatlabel:has(textarea.p-filled) label,
.p-floatlabel:has(.p-inputwrapper-filled) label {
    color: ${e("floatlabel.active.color")};
}

.p-floatlabel:has(input:focus) label,
.p-floatlabel:has(input:-webkit-autofill) label,
.p-floatlabel:has(textarea:focus) label,
.p-floatlabel:has(.p-inputwrapper-focus) label {
    color: ${e("floatlabel.focus.color")};
}

.p-floatlabel-in .p-inputtext,
.p-floatlabel-in .p-textarea,
.p-floatlabel-in .p-select-label,
.p-floatlabel-in .p-multiselect-label-container,
.p-floatlabel-in .p-autocomplete-input-multiple,
.p-floatlabel-in .p-cascadeselect-label,
.p-floatlabel-in .p-treeselect-label {
    padding-top: ${e("floatlabel.in.input.padding.top")};
}

.p-floatlabel-in:has(input:focus) label,
.p-floatlabel-in:has(input.p-filled) label,
.p-floatlabel-in:has(input:-webkit-autofill) label,
.p-floatlabel-in:has(textarea:focus) label,
.p-floatlabel-in:has(textarea.p-filled) label,
.p-floatlabel-in:has(.p-inputwrapper-focus) label,
.p-floatlabel-in:has(.p-inputwrapper-filled) label {
    top: ${e("floatlabel.in.active.top")};
}

.p-floatlabel-on:has(input:focus) label,
.p-floatlabel-on:has(input.p-filled) label,
.p-floatlabel-on:has(input:-webkit-autofill) label,
.p-floatlabel-on:has(textarea:focus) label,
.p-floatlabel-on:has(textarea.p-filled) label,
.p-floatlabel-on:has(.p-inputwrapper-focus) label,
.p-floatlabel-on:has(.p-inputwrapper-filled) label {
    top: 0;
    transform: translateY(-50%);
    border-radius: ${e("floatlabel.on.border.radius")};
    background: ${e("floatlabel.on.active.background")};
    padding: ${e("floatlabel.on.active.padding")};
}
`,Re={root:({instance:e,props:o})=>["p-floatlabel",{"p-floatlabel-over":o.variant==="over","p-floatlabel-on":o.variant==="on","p-floatlabel-in":o.variant==="in"}]},Pe=(()=>{class e extends Q{name="floatlabel";theme=$e;classes=Re;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var Be=["*"],Vt=(()=>{class e extends N{_componentStyle=F(Pe);variant="over";static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-floatlabel"],["p-floatLabel"],["p-float-label"]],hostVars:8,hostBindings:function(i,n){i&2&&q("p-floatlabel",!0)("p-floatlabel-over",n.variant==="over")("p-floatlabel-on",n.variant==="on")("p-floatlabel-in",n.variant==="in")},inputs:{variant:"variant"},standalone:!0,features:[R([Pe]),C,k],ngContentSelectors:Be,decls:1,vars:0,template:function(i,n){i&1&&(ae(),oe(0))},dependencies:[A,P],encapsulation:2,changeDetection:0})}return e})();var Fe=(()=>{class e extends Z{static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["EyeIcon"]],standalone:!0,features:[C,k],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M0.0535499 7.25213C0.208567 7.59162 2.40413 12.4 7 12.4C11.5959 12.4 13.7914 7.59162 13.9465 7.25213C13.9487 7.2471 13.9506 7.24304 13.952 7.24001C13.9837 7.16396 14 7.08239 14 7.00001C14 6.91762 13.9837 6.83605 13.952 6.76001C13.9506 6.75697 13.9487 6.75292 13.9465 6.74788C13.7914 6.4084 11.5959 1.60001 7 1.60001C2.40413 1.60001 0.208567 6.40839 0.0535499 6.74788C0.0512519 6.75292 0.0494023 6.75697 0.048 6.76001C0.0163137 6.83605 0 6.91762 0 7.00001C0 7.08239 0.0163137 7.16396 0.048 7.24001C0.0494023 7.24304 0.0512519 7.2471 0.0535499 7.25213ZM7 11.2C3.664 11.2 1.736 7.92001 1.264 7.00001C1.736 6.08001 3.664 2.80001 7 2.80001C10.336 2.80001 12.264 6.08001 12.736 7.00001C12.264 7.92001 10.336 11.2 7 11.2ZM5.55551 9.16182C5.98308 9.44751 6.48576 9.6 7 9.6C7.68891 9.59789 8.349 9.32328 8.83614 8.83614C9.32328 8.349 9.59789 7.68891 9.59999 7C9.59999 6.48576 9.44751 5.98308 9.16182 5.55551C8.87612 5.12794 8.47006 4.7947 7.99497 4.59791C7.51988 4.40112 6.99711 4.34963 6.49276 4.44995C5.98841 4.55027 5.52513 4.7979 5.16152 5.16152C4.7979 5.52513 4.55027 5.98841 4.44995 6.49276C4.34963 6.99711 4.40112 7.51988 4.59791 7.99497C4.7947 8.47006 5.12794 8.87612 5.55551 9.16182ZM6.2222 5.83594C6.45243 5.6821 6.7231 5.6 7 5.6C7.37065 5.6021 7.72553 5.75027 7.98762 6.01237C8.24972 6.27446 8.39789 6.62934 8.4 7C8.4 7.27689 8.31789 7.54756 8.16405 7.77779C8.01022 8.00802 7.79157 8.18746 7.53575 8.29343C7.27994 8.39939 6.99844 8.42711 6.72687 8.37309C6.4553 8.31908 6.20584 8.18574 6.01005 7.98994C5.81425 7.79415 5.68091 7.54469 5.6269 7.27312C5.57288 7.00155 5.6006 6.72006 5.70656 6.46424C5.81253 6.20842 5.99197 5.98977 6.2222 5.83594Z","fill","currentColor"]],template:function(i,n){i&1&&(z(),u(0,"svg",0),S(1,"path",1),d()),i&2&&(x(n.getClassNames()),c("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role))},encapsulation:2})}return e})();var De=(()=>{class e extends Z{pathId;ngOnInit(){this.pathId="url(#"+Te()+")"}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["EyeSlashIcon"]],standalone:!0,features:[C,k],decls:6,vars:7,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["fill-rule","evenodd","clip-rule","evenodd","d","M13.9414 6.74792C13.9437 6.75295 13.9455 6.757 13.9469 6.76003C13.982 6.8394 14.0001 6.9252 14.0001 7.01195C14.0001 7.0987 13.982 7.1845 13.9469 7.26386C13.6004 8.00059 13.1711 8.69549 12.6674 9.33515C12.6115 9.4071 12.54 9.46538 12.4582 9.50556C12.3765 9.54574 12.2866 9.56678 12.1955 9.56707C12.0834 9.56671 11.9737 9.53496 11.8788 9.47541C11.7838 9.41586 11.7074 9.3309 11.6583 9.23015C11.6092 9.12941 11.5893 9.01691 11.6008 8.90543C11.6124 8.79394 11.6549 8.68793 11.7237 8.5994C12.1065 8.09726 12.4437 7.56199 12.7313 6.99995C12.2595 6.08027 10.3402 2.8014 6.99732 2.8014C6.63723 2.80218 6.27816 2.83969 5.92569 2.91336C5.77666 2.93304 5.62568 2.89606 5.50263 2.80972C5.37958 2.72337 5.29344 2.59398 5.26125 2.44714C5.22907 2.30031 5.2532 2.14674 5.32885 2.01685C5.40451 1.88696 5.52618 1.79021 5.66978 1.74576C6.10574 1.64961 6.55089 1.60134 6.99732 1.60181C11.5916 1.60181 13.7864 6.40856 13.9414 6.74792ZM2.20333 1.61685C2.35871 1.61411 2.5091 1.67179 2.6228 1.77774L12.2195 11.3744C12.3318 11.4869 12.3949 11.6393 12.3949 11.7983C12.3949 11.9572 12.3318 12.1097 12.2195 12.2221C12.107 12.3345 11.9546 12.3976 11.7956 12.3976C11.6367 12.3976 11.4842 12.3345 11.3718 12.2221L10.5081 11.3584C9.46549 12.0426 8.24432 12.4042 6.99729 12.3981C2.403 12.3981 0.208197 7.59135 0.0532336 7.25198C0.0509364 7.24694 0.0490875 7.2429 0.0476856 7.23986C0.0162332 7.16518 3.05176e-05 7.08497 3.05176e-05 7.00394C3.05176e-05 6.92291 0.0162332 6.8427 0.0476856 6.76802C0.631261 5.47831 1.46902 4.31959 2.51084 3.36119L1.77509 2.62545C1.66914 2.51175 1.61146 2.36136 1.61421 2.20597C1.61695 2.05059 1.6799 1.90233 1.78979 1.79244C1.89968 1.68254 2.04794 1.6196 2.20333 1.61685ZM7.45314 8.35147L5.68574 6.57609V6.5361C5.5872 6.78938 5.56498 7.06597 5.62183 7.33173C5.67868 7.59749 5.8121 7.84078 6.00563 8.03158C6.19567 8.21043 6.43052 8.33458 6.68533 8.39089C6.94014 8.44721 7.20543 8.43359 7.45314 8.35147ZM1.26327 6.99994C1.7351 7.91163 3.64645 11.1985 6.99729 11.1985C7.9267 11.2048 8.8408 10.9618 9.64438 10.4947L8.35682 9.20718C7.86027 9.51441 7.27449 9.64491 6.69448 9.57752C6.11446 9.51014 5.57421 9.24881 5.16131 8.83592C4.74842 8.42303 4.4871 7.88277 4.41971 7.30276C4.35232 6.72274 4.48282 6.13697 4.79005 5.64041L3.35855 4.2089C2.4954 5.00336 1.78523 5.94935 1.26327 6.99994Z","fill","currentColor"],[3,"id"],["width","14","height","14","fill","white"]],template:function(i,n){i&1&&(z(),u(0,"svg",0)(1,"g"),S(2,"path",1),d(),u(3,"defs")(4,"clipPath",2),S(5,"rect",3),d()()()),i&2&&(x(n.getClassNames()),c("aria-label",n.ariaLabel)("aria-hidden",n.ariaHidden)("role",n.role),a(),c("clip-path",n.pathId),a(3),r("id",n.pathId))},encapsulation:2})}return e})();var He=({dt:e})=>`
.p-password {
    display: inline-flex;
    position: relative;
}

.p-password .p-password-overlay {
    min-width: 100%;
}

.p-password-meter {
    height: ${e("password.meter.height")};
    background: ${e("password.meter.background")};
    border-radius: ${e("password.meter.border.radius")};
}

.p-password-meter-label {
    height: 100%;
    width: 0;
    transition: width 1s ease-in-out;
    border-radius: ${e("password.meter.border.radius")};
}

.p-password-meter-weak {
    background: ${e("password.strength.weak.background")};
}

.p-password-meter-medium {
    background: ${e("password.strength.medium.background")};
}

.p-password-meter-strong {
    background: ${e("password.strength.strong.background")};
}

.p-password-fluid {
    display: flex;
}

.p-password-fluid .p-password-input {
    width: 100%;
}

.p-password-input::-ms-reveal,
.p-password-input::-ms-clear {
    display: none;
}

.p-password-overlay {
    position: absolute;
    padding: ${e("password.overlay.padding")};
    background: ${e("password.overlay.background")};
    color: ${e("password.overlay.color")};
    border: 1px solid ${e("password.overlay.border.color")};
    box-shadow: ${e("password.overlay.shadow")};
    border-radius: ${e("password.overlay.border.radius")};
}

.p-password-content {
    display: flex;
    flex-direction: column;
    gap: ${e("password.content.gap")};
}

.p-password-toggle-mask-icon {
    inset-inline-end: ${e("form.field.padding.x")};
    color: ${e("password.icon.color")};
    position: absolute;
    top: 50%;
    margin-top: calc(-1 * calc(${e("icon.size")} / 2));
    width: ${e("icon.size")};
    height: ${e("icon.size")};
}

.p-password:has(.p-password-toggle-mask-icon) .p-password-input {
    padding-inline-end: calc((${e("form.field.padding.x")} * 2) + ${e("icon.size")});
}

/* For PrimeNG */
p-password.ng-invalid.ng-dirty .p-inputtext {
    border-color: ${e("inputtext.invalid.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext:enabled:focus {
    border-color: ${e("inputtext.focus.border.color")};
}

p-password.ng-invalid.ng-dirty .p-inputtext::placeholder {
    color: ${e("inputtext.invalid.placeholder.color")};
}

.p-password-clear-icon {
    position: absolute;
    top: 50%;
    margin-top: -0.5rem;
    cursor: pointer;
    inset-inline-end: ${e("form.field.padding.x")};
    color: ${e("form.field.icon.color")};
}

.p-password-fluid-directive {
    width:100%
}
`,Ae={root:({instance:e})=>({position:e.appendTo==="self"?"relative":void 0})},Qe={root:({instance:e})=>({"p-password p-component p-inputwrapper":!0,"p-inputwrapper-filled":e.filled(),"p-inputwrapper-focus":e.focused,"p-password-fluid":e.hasFluid}),pcInput:"p-password-input",maskIcon:"p-password-toggle-mask-icon p-password-mask-icon",unmaskIcon:"p-password-toggle-mask-icon p-password-unmask-icon",overlay:"p-password-overlay p-component",content:"p-password-content",meter:"p-password-meter",meterLabel:({instance:e})=>`p-password-meter-label ${e.meter?"p-password-meter-"+e.meter.strength:""}`,meterText:"p-password-meter-text"},Ve=(()=>{class e extends Q{name="password";theme=He;classes=Qe;inlineStyles=Ae;static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275prov=V({token:e,factory:e.\u0275fac})}return e})();var Ne=["content"],Ze=["footer"],je=["header"],We=["clearicon"],Ue=["headericon"],qe=["showicon"],Ke=["input"],Ge=()=>({class:"p-password-toggle-mask-icon p-password-mask-icon"}),Ye=(e,o)=>({showTransitionParams:e,hideTransitionParams:o}),Je=e=>({value:"visible",params:e}),Xe=e=>({width:e});function et(e,o){if(e&1){let t=_();u(0,"TimesIcon",8),b("click",function(){h(t);let n=s(2);return m(n.clear())}),d()}e&2&&c("data-pc-section","clearIcon")}function tt(e,o){}function nt(e,o){e&1&&f(0,tt,0,0,"ng-template")}function it(e,o){if(e&1){let t=_();E(0),f(1,et,1,1,"TimesIcon",7),u(2,"span",8),b("click",function(){h(t);let n=s();return m(n.clear())}),f(3,nt,1,0,null,9),d(),M()}if(e&2){let t=s();a(),r("ngIf",!t.clearIconTemplate&&!t._clearIconTemplate),a(),c("data-pc-section","clearIcon"),a(),r("ngTemplateOutlet",t.clearIconTemplate||t._clearIconTemplate)}}function at(e,o){if(e&1){let t=_();u(0,"EyeSlashIcon",12),b("click",function(){h(t);let n=s(3);return m(n.onMaskToggle())}),d()}e&2&&c("data-pc-section","hideIcon")}function ot(e,o){}function rt(e,o){e&1&&f(0,ot,0,0,"ng-template")}function lt(e,o){if(e&1){let t=_();u(0,"span",13),b("click",function(){h(t);let n=s(3);return m(n.onMaskToggle())}),f(1,rt,1,0,null,14),d()}if(e&2){let t=s(3);a(),r("ngTemplateOutlet",t.hideIconTemplate||t._hideIconTemplate)("ngTemplateOutletContext",de(2,Ge))}}function st(e,o){if(e&1&&(E(0),f(1,at,1,1,"EyeSlashIcon",10)(2,lt,2,3,"span",11),M()),e&2){let t=s(2);a(),r("ngIf",!t.hideIconTemplate&&!t._hideIconTemplate),a(),r("ngIf",t.hideIconTemplate||t._hideIconTemplate)}}function pt(e,o){if(e&1){let t=_();u(0,"EyeIcon",12),b("click",function(){h(t);let n=s(3);return m(n.onMaskToggle())}),d()}e&2&&c("data-pc-section","showIcon")}function dt(e,o){}function ct(e,o){e&1&&f(0,dt,0,0,"ng-template")}function ut(e,o){if(e&1){let t=_();u(0,"span",13),b("click",function(){h(t);let n=s(3);return m(n.onMaskToggle())}),f(1,ct,1,0,null,9),d()}if(e&2){let t=s(3);a(),r("ngTemplateOutlet",t.showIconTemplate||t._showIconTemplate)}}function ht(e,o){if(e&1&&(E(0),f(1,pt,1,1,"EyeIcon",10)(2,ut,2,1,"span",11),M()),e&2){let t=s(2);a(),r("ngIf",!t.showIconTemplate&&!t._showIconTemplate),a(),r("ngIf",t.showIconTemplate||t._showIconTemplate)}}function mt(e,o){if(e&1&&(E(0),f(1,st,3,2,"ng-container",5)(2,ht,3,2,"ng-container",5),M()),e&2){let t=s();a(),r("ngIf",t.unmasked),a(),r("ngIf",!t.unmasked)}}function ft(e,o){e&1&&$(0)}function gt(e,o){e&1&&$(0)}function _t(e,o){if(e&1&&(E(0),f(1,gt,1,0,"ng-container",9),M()),e&2){let t=s(2);a(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)}}function bt(e,o){if(e&1&&(u(0,"div",17)(1,"div",18),S(2,"div",3),B(3,"mapper"),d(),u(4,"div",19),se(5),d()()),e&2){let t=s(2);a(),c("data-pc-section","meter"),a(),r("ngClass",H(3,6,t.meter,t.strengthClass))("ngStyle",K(9,Xe,t.meter?t.meter.width:"")),c("data-pc-section","meterLabel"),a(2),c("data-pc-section","info"),a(),pe(t.infoText)}}function vt(e,o){e&1&&$(0)}function wt(e,o){if(e&1){let t=_();u(0,"div",15,1),b("click",function(n){h(t);let l=s();return m(l.onOverlayClick(n))})("@overlayAnimation.start",function(n){h(t);let l=s();return m(l.onAnimationStart(n))})("@overlayAnimation.done",function(n){h(t);let l=s();return m(l.onAnimationEnd(n))}),f(2,ft,1,0,"ng-container",9)(3,_t,2,1,"ng-container",16)(4,bt,6,11,"ng-template",null,2,ue)(6,vt,1,0,"ng-container",9),d()}if(e&2){let t=le(5),i=s();r("@overlayAnimation",K(9,Je,ce(6,Ye,i.showTransitionOptions,i.hideTransitionOptions))),c("data-pc-section","panel"),a(2),r("ngTemplateOutlet",i.headerTemplate||i._headerTemplate),a(),r("ngIf",i.contentTemplate||i._contentTemplate)("ngIfElse",t),a(3),r("ngTemplateOutlet",i.footerTemplate||i._footerTemplate)}}var yt=(()=>{class e{transform(t,i,...n){return i(t,...n)}static \u0275fac=function(i){return new(i||e)};static \u0275pipe=ne({name:"mapper",type:e,pure:!0,standalone:!0})}return e})(),Ct={provide:Le,useExisting:te(()=>ze),multi:!0},ze=(()=>{class e extends N{ariaLabel;fluid;ariaLabelledBy;label;disabled;promptLabel;mediumRegex="^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})";strongRegex="^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})";weakLabel;mediumLabel;maxLength;strongLabel;inputId;feedback=!0;appendTo;toggleMask;size;inputStyleClass;styleClass;style;inputStyle;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";autocomplete;placeholder;showClear=!1;autofocus;variant="outlined";onFocus=new O;onBlur=new O;onClear=new O;input;contentTemplate;footerTemplate;headerTemplate;clearIconTemplate;hideIconTemplate;showIconTemplate;templates;_contentTemplate;_footerTemplate;_headerTemplate;_clearIconTemplate;_hideIconTemplate;_showIconTemplate;overlayVisible=!1;meter;infoText;focused=!1;unmasked=!1;mediumCheckRegExp;strongCheckRegExp;resizeListener;scrollHandler;overlay;value=null;onModelChange=()=>{};onModelTouched=()=>{};translationSubscription;_componentStyle=F(Ve);get hasFluid(){let i=this.el.nativeElement.closest("p-fluid");return this.fluid||!!i}overlayService=F(ke);ngOnInit(){super.ngOnInit(),this.infoText=this.promptText(),this.mediumCheckRegExp=new RegExp(this.mediumRegex),this.strongCheckRegExp=new RegExp(this.strongRegex),this.translationSubscription=this.config.translationObserver.subscribe(()=>{this.updateUI(this.value||"")})}ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"header":this._headerTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;case"clearicon":this._clearIconTemplate=t.template;break;case"hideicon":this._hideIconTemplate=t.template;break;case"showicon":this._showIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onAnimationStart(t){switch(t.toState){case"visible":this.overlay=t.element,j.set("overlay",this.overlay,this.config.zIndex.overlay),this.appendContainer(),this.alignOverlay(),this.bindScrollListener(),this.bindResizeListener();break;case"void":this.unbindScrollListener(),this.unbindResizeListener(),this.overlay=null;break}}onAnimationEnd(t){switch(t.toState){case"void":j.clear(t.element);break}}appendContainer(){this.appendTo&&(this.appendTo==="body"?this.renderer.appendChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).appendChild(this.overlay))}alignOverlay(){this.appendTo?(this.overlay.style.minWidth=we(this.input.nativeElement)+"px",ve(this.overlay,this.input.nativeElement)):ye(this.overlay,this.input.nativeElement)}onInput(t){this.value=t.target.value,this.onModelChange(this.value)}onInputFocus(t){this.focused=!0,this.feedback&&(this.overlayVisible=!0),this.onFocus.emit(t)}onInputBlur(t){this.focused=!1,this.feedback&&(this.overlayVisible=!1),this.onModelTouched(),this.onBlur.emit(t)}onKeyUp(t){if(this.feedback){let i=t.target.value;if(this.updateUI(i),t.code==="Escape"){this.overlayVisible&&(this.overlayVisible=!1);return}this.overlayVisible||(this.overlayVisible=!0)}}updateUI(t){let i=null,n=null;switch(this.testStrength(t)){case 1:i=this.weakText(),n={strength:"weak",width:"33.33%"};break;case 2:i=this.mediumText(),n={strength:"medium",width:"66.66%"};break;case 3:i=this.strongText(),n={strength:"strong",width:"100%"};break;default:i=this.promptText(),n=null;break}this.meter=n,this.infoText=i}onMaskToggle(){this.unmasked=!this.unmasked}onOverlayClick(t){this.overlayService.add({originalEvent:t,target:this.el.nativeElement})}testStrength(t){let i=0;return this.strongCheckRegExp.test(t)?i=3:this.mediumCheckRegExp.test(t)?i=2:t.length&&(i=1),i}writeValue(t){t===void 0?this.value=null:this.value=t,this.feedback&&this.updateUI(this.value||""),this.cd.markForCheck()}registerOnChange(t){this.onModelChange=t}registerOnTouched(t){this.onModelTouched=t}setDisabledState(t){this.disabled=t,this.cd.markForCheck()}bindScrollListener(){G(this.platformId)&&(this.scrollHandler||(this.scrollHandler=new Se(this.input.nativeElement,()=>{this.overlayVisible&&(this.overlayVisible=!1)})),this.scrollHandler.bindScrollListener())}bindResizeListener(){if(G(this.platformId)&&!this.resizeListener){let t=this.document.defaultView;this.resizeListener=this.renderer.listen(t,"resize",()=>{this.overlayVisible&&!Ce()&&(this.overlayVisible=!1)})}}unbindScrollListener(){this.scrollHandler&&this.scrollHandler.unbindScrollListener()}unbindResizeListener(){this.resizeListener&&(this.resizeListener(),this.resizeListener=null)}containerClass(t){return{"p-password p-component p-inputwrapper":!0,"p-input-icon-right":t}}get rootClass(){return this._componentStyle.classes.root({instance:this})}inputFieldClass(t){return{"p-password-input":!0,"p-disabled":t}}strengthClass(t){return`p-password-meter-label p-password-meter${t?.strength?`-${t.strength}`:""}`}filled(){return this.value!=null&&this.value.toString().length>0}promptText(){return this.promptLabel||this.getTranslation(D.PASSWORD_PROMPT)}weakText(){return this.weakLabel||this.getTranslation(D.WEAK)}mediumText(){return this.mediumLabel||this.getTranslation(D.MEDIUM)}strongText(){return this.strongLabel||this.getTranslation(D.STRONG)}restoreAppend(){this.overlay&&this.appendTo&&(this.appendTo==="body"?this.renderer.removeChild(this.document.body,this.overlay):this.document.getElementById(this.appendTo).removeChild(this.overlay))}inputType(t){return t?"text":"password"}getTranslation(t){return this.config.getTranslation(t)}clear(){this.value=null,this.onModelChange(this.value),this.writeValue(this.value),this.onClear.emit()}ngOnDestroy(){this.overlay&&(j.clear(this.overlay),this.overlay=null),this.restoreAppend(),this.unbindResizeListener(),this.scrollHandler&&(this.scrollHandler.destroy(),this.scrollHandler=null),this.translationSubscription&&this.translationSubscription.unsubscribe(),super.ngOnDestroy()}static \u0275fac=(()=>{let t;return function(n){return(t||(t=g(e)))(n||e)}})();static \u0275cmp=y({type:e,selectors:[["p-password"]],contentQueries:function(i,n,l){if(i&1&&(T(l,Ne,4),T(l,Ze,4),T(l,je,4),T(l,We,4),T(l,Ue,4),T(l,qe,4),T(l,Ie,4)),i&2){let p;v(p=w())&&(n.contentTemplate=p.first),v(p=w())&&(n.footerTemplate=p.first),v(p=w())&&(n.headerTemplate=p.first),v(p=w())&&(n.clearIconTemplate=p.first),v(p=w())&&(n.hideIconTemplate=p.first),v(p=w())&&(n.showIconTemplate=p.first),v(p=w())&&(n.templates=p)}},viewQuery:function(i,n){if(i&1&&re(Ke,5),i&2){let l;v(l=w())&&(n.input=l.first)}},inputs:{ariaLabel:"ariaLabel",fluid:[2,"fluid","fluid",L],ariaLabelledBy:"ariaLabelledBy",label:"label",disabled:[2,"disabled","disabled",L],promptLabel:"promptLabel",mediumRegex:"mediumRegex",strongRegex:"strongRegex",weakLabel:"weakLabel",mediumLabel:"mediumLabel",maxLength:[2,"maxLength","maxLength",he],strongLabel:"strongLabel",inputId:"inputId",feedback:[2,"feedback","feedback",L],appendTo:"appendTo",toggleMask:[2,"toggleMask","toggleMask",L],size:"size",inputStyleClass:"inputStyleClass",styleClass:"styleClass",style:"style",inputStyle:"inputStyle",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",autocomplete:"autocomplete",placeholder:"placeholder",showClear:[2,"showClear","showClear",L],autofocus:[2,"autofocus","autofocus",L],variant:"variant"},outputs:{onFocus:"onFocus",onBlur:"onBlur",onClear:"onClear"},standalone:!0,features:[R([Ct,Ve]),ie,C,k],decls:8,vars:33,consts:[["input",""],["overlay",""],["content",""],[3,"ngClass","ngStyle"],["pInputText","",3,"input","focus","blur","keyup","disabled","pSize","ngClass","ngStyle","value","variant","pAutoFocus"],[4,"ngIf"],["class","p-password-overlay p-component",3,"click",4,"ngIf"],["class","p-password-clear-icon",3,"click",4,"ngIf"],[1,"p-password-clear-icon",3,"click"],[4,"ngTemplateOutlet"],["class","p-password-toggle-mask-icon p-password-mask-icon",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],[1,"p-password-toggle-mask-icon","p-password-mask-icon",3,"click"],[3,"click"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[1,"p-password-overlay","p-component",3,"click"],[4,"ngIf","ngIfElse"],[1,"p-password-content"],[1,"p-password-meter"],[1,"p-password-meter-text"]],template:function(i,n){if(i&1){let l=_();u(0,"div",3)(1,"input",4,0),B(3,"mapper"),B(4,"mapper"),b("input",function(I){return h(l),m(n.onInput(I))})("focus",function(I){return h(l),m(n.onInputFocus(I))})("blur",function(I){return h(l),m(n.onInputBlur(I))})("keyup",function(I){return h(l),m(n.onKeyUp(I))}),d(),f(5,it,4,3,"ng-container",5)(6,mt,3,2,"ng-container",5)(7,wt,7,11,"div",6),d()}i&2&&(x(n.styleClass),r("ngClass",n.rootClass)("ngStyle",n.style),c("data-pc-name","password")("data-pc-section","root"),a(),x(n.inputStyleClass),r("disabled",n.disabled)("pSize",n.size)("ngClass",H(3,27,n.disabled,n.inputFieldClass))("ngStyle",n.inputStyle)("value",n.value)("variant",n.variant)("pAutoFocus",n.autofocus),c("label",n.label)("aria-label",n.ariaLabel)("aria-labelledBy",n.ariaLabelledBy)("id",n.inputId)("type",H(4,30,n.unmasked,n.inputType))("placeholder",n.placeholder)("autocomplete",n.autocomplete)("maxlength",n.maxLength)("data-pc-section","input"),a(4),r("ngIf",n.showClear&&n.value!=null),a(),r("ngIf",n.toggleMask),a(),r("ngIf",n.overlayVisible))},dependencies:[A,me,fe,_e,ge,Me,Ee,xe,De,Fe,yt,P],encapsulation:2,data:{animation:[be("overlayAnimation",[X(":enter",[J({opacity:0,transform:"scaleY(0.8)"}),Y("{{showTransitionParams}}")]),X(":leave",[Y("{{hideTransitionParams}}",J({opacity:0}))])])]},changeDetection:0})}return e})(),Tn=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=U({type:e});static \u0275inj=W({imports:[ze,P,P]})}return e})();export{Vt as a,ze as b,Tn as c};
