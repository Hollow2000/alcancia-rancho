import{a as li,b as ci}from"./chunk-YSM3R37K.js";import{c as $e,d as Ae}from"./chunk-MXUQQOC4.js";import{a as ni,c as ri}from"./chunk-2HJMF7HZ.js";import"./chunk-DMXP2EK3.js";import{b as Ee}from"./chunk-ECYNHTX5.js";import{a as De,b as Oe}from"./chunk-VUMEEQO3.js";import{b as Ye,c as ei,d as ii,e as ti,j as ai}from"./chunk-JX2PY66T.js";import{a as Je}from"./chunk-XSYE23K5.js";import{a as oi}from"./chunk-X7CUSAQD.js";import{a as Ne}from"./chunk-QR7LSM3O.js";import"./chunk-ME47AKVQ.js";import{a as ze,b as Le,c as H,d as je,e as qe,f as Re,g as Ge,h as S,i as Qe,j as He,l as We,m as Ke,o as Ue,p as Xe,r as Ze}from"./chunk-QU4YZRBN.js";import{k as Pe}from"./chunk-745PQQ5I.js";import"./chunk-DDQIBJJS.js";import{D as Me,o as Ie}from"./chunk-5HMBDGDR.js";import{Ba as Se,Da as Ve,Fa as O,Ga as Te,Ha as Be,i as fe,ja as ke,ka as ve,l as ge,n as xe,o as ye,qa as ae,r as Ce,sa as Fe,wa as we,xa as Q}from"./chunk-EIN3WIGC.js";import"./chunk-4O3FVBGX.js";import{Ab as c,Bb as a,Cb as p,Fb as me,Fc as D,Gb as X,Gc as be,Hb as Z,Jb as k,Nb as g,Ob as r,Qa as l,Rb as J,Sb as ue,Tb as z,U as re,Ub as L,V as le,Va as $,W as ce,Y as de,Yb as x,Zb as y,_ as f,_b as C,bc as Y,cc as ee,da as u,dc as ie,ea as h,ec as te,fa as M,fc as ne,gb as w,hb as se,hc as j,ic as v,kb as A,kc as he,la as E,lb as pe,mb as F,nc as q,oc as R,qc as G,ra as V,tb as U,ub as _,vb as b,wb as T,wc as _e,xb as B,yb as N,zb as s,zc as oe}from"./chunk-HJCFPXCD.js";import{e as P}from"./chunk-ACKELEN3.js";var fi=["data-p-icon","minus"],si=(()=>{class e extends Be{static \u0275fac=(()=>{let i;return function(t){return(i||(i=V(e)))(t||e)}})();static \u0275cmp=w({type:e,selectors:[["","data-p-icon","minus"]],features:[A],attrs:fi,decls:1,vars:0,consts:[["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,t){n&1&&(M(),me(0,"path",0))},encapsulation:2})}return e})();var pi=`
    .p-checkbox {
        position: relative;
        display: inline-flex;
        user-select: none;
        vertical-align: bottom;
        width: dt('checkbox.width');
        height: dt('checkbox.height');
    }

    .p-checkbox-input {
        cursor: pointer;
        appearance: none;
        position: absolute;
        inset-block-start: 0;
        inset-inline-start: 0;
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
        opacity: 0;
        z-index: 1;
        outline: 0 none;
        border: 1px solid transparent;
        border-radius: dt('checkbox.border.radius');
    }

    .p-checkbox-box {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: dt('checkbox.border.radius');
        border: 1px solid dt('checkbox.border.color');
        background: dt('checkbox.background');
        width: dt('checkbox.width');
        height: dt('checkbox.height');
        transition:
            background dt('checkbox.transition.duration'),
            color dt('checkbox.transition.duration'),
            border-color dt('checkbox.transition.duration'),
            box-shadow dt('checkbox.transition.duration'),
            outline-color dt('checkbox.transition.duration');
        outline-color: transparent;
        box-shadow: dt('checkbox.shadow');
    }

    .p-checkbox-icon {
        transition-duration: dt('checkbox.transition.duration');
        color: dt('checkbox.icon.color');
        font-size: dt('checkbox.icon.size');
        width: dt('checkbox.icon.size');
        height: dt('checkbox.icon.size');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        border-color: dt('checkbox.hover.border.color');
    }

    .p-checkbox-checked .p-checkbox-box {
        border-color: dt('checkbox.checked.border.color');
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked .p-checkbox-icon {
        color: dt('checkbox.icon.checked.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
        border-color: dt('checkbox.checked.hover.border.color');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
        color: dt('checkbox.icon.checked.hover.color');
    }

    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.focus.border.color');
        box-shadow: dt('checkbox.focus.ring.shadow');
        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');
        outline-offset: dt('checkbox.focus.ring.offset');
    }

    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
        border-color: dt('checkbox.checked.focus.border.color');
    }

    .p-checkbox.p-invalid > .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }

    .p-checkbox.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.filled.background');
    }

    .p-checkbox-checked.p-variant-filled .p-checkbox-box {
        background: dt('checkbox.checked.background');
    }

    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
        background: dt('checkbox.checked.hover.background');
    }

    .p-checkbox.p-disabled {
        opacity: 1;
    }

    .p-checkbox.p-disabled .p-checkbox-box {
        background: dt('checkbox.disabled.background');
        border-color: dt('checkbox.checked.disabled.border.color');
    }

    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
        color: dt('checkbox.icon.disabled.color');
    }

    .p-checkbox-sm,
    .p-checkbox-sm .p-checkbox-box {
        width: dt('checkbox.sm.width');
        height: dt('checkbox.sm.height');
    }

    .p-checkbox-sm .p-checkbox-icon {
        font-size: dt('checkbox.icon.sm.size');
        width: dt('checkbox.icon.sm.size');
        height: dt('checkbox.icon.sm.size');
    }

    .p-checkbox-lg,
    .p-checkbox-lg .p-checkbox-box {
        width: dt('checkbox.lg.width');
        height: dt('checkbox.lg.height');
    }

    .p-checkbox-lg .p-checkbox-icon {
        font-size: dt('checkbox.icon.lg.size');
        width: dt('checkbox.icon.lg.size');
        height: dt('checkbox.icon.lg.size');
    }
`;var gi=["icon"],xi=["input"],yi=(e,o)=>({checked:e,class:o});function Ci(e,o){if(e&1&&p(0,"span",8),e&2){let i=r(3);y(i.cx("icon")),s("ngClass",i.checkboxIcon)("pBind",i.ptm("icon"))}}function ki(e,o){if(e&1&&(M(),p(0,"svg",9)),e&2){let i=r(3);y(i.cx("icon")),s("pBind",i.ptm("icon"))}}function vi(e,o){if(e&1&&(X(0),F(1,Ci,1,4,"span",6)(2,ki,1,3,"svg",7),Z()),e&2){let i=r(2);l(),s("ngIf",i.checkboxIcon),l(),s("ngIf",!i.checkboxIcon)}}function Fi(e,o){if(e&1&&(M(),p(0,"svg",10)),e&2){let i=r(2);y(i.cx("icon")),s("pBind",i.ptm("icon"))}}function wi(e,o){if(e&1&&(X(0),F(1,vi,3,2,"ng-container",3)(2,Fi,1,3,"svg",5),Z()),e&2){let i=r();l(),s("ngIf",i.checked),l(),s("ngIf",i._indeterminate())}}function Si(e,o){}function Ii(e,o){e&1&&F(0,Si,0,0,"ng-template")}var Mi=`
    ${pi}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`,Ei={root:({instance:e})=>["p-checkbox p-component",{"p-checkbox-checked p-highlight":e.checked,"p-disabled":e.$disabled(),"p-invalid":e.invalid(),"p-variant-filled":e.$variant()==="filled","p-checkbox-sm p-inputfield-sm":e.size()==="small","p-checkbox-lg p-inputfield-lg":e.size()==="large"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},mi=(()=>{class e extends Se{name="checkbox";style=Mi;classes=Ei;static \u0275fac=(()=>{let i;return function(t){return(i||(i=V(e)))(t||e)}})();static \u0275prov=le({token:e,factory:e.\u0275fac})}return e})();var ui=new de("CHECKBOX_INSTANCE"),Vi={provide:ze,useExisting:re(()=>W),multi:!0},W=(()=>{class e extends Je{hostName="";value;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;inputStyle;styleClass;inputClass;indeterminate=!1;formControl;checkboxIcon;readonly;autofocus;trueValue=!0;falseValue=!1;variant=oe();size=oe();onChange=new $;onFocus=new $;onBlur=new $;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.modelValue()===this.trueValue:ve(this.value,this.modelValue())}_indeterminate=E(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;focused=!1;_componentStyle=f(mi);bindDirectiveInstance=f(O,{self:!0});$pcCheckbox=f(ui,{optional:!0,skipSelf:!0})??void 0;$variant=_e(()=>this.variant()||this.config.inputStyle()||this.config.inputVariant());onAfterContentInit(){this.templates?.forEach(i=>{switch(i.getType()){case"icon":this._checkboxIconTemplate=i.template;break;case"checkboxicon":this._checkboxIconTemplate=i.template;break}})}onChanges(i){i.indeterminate&&this._indeterminate.set(i.indeterminate.currentValue)}onAfterViewChecked(){this.bindDirectiveInstance.setAttrs(this.ptms(["host","root"]))}updateModel(i){let n,t=this.injector.get(je,null,{optional:!0,self:!0}),d=t&&!this.formControl?t.value:this.modelValue();this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.writeModelValue(n),this.onModelChange(n)):(this.checked||this._indeterminate()?n=d.filter(m=>!ke(m,this.value)):n=d?[...d,this.value]:[this.value],this.onModelChange(n),this.writeModelValue(n),this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:i})}handleChange(i){this.readonly||this.updateModel(i)}onInputFocus(i){this.focused=!0,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.onBlur.emit(i),this.onModelTouched()}focus(){this.inputViewChild?.nativeElement.focus()}writeControlValue(i,n){n(i),this.cd.markForCheck()}static \u0275fac=(()=>{let i;return function(t){return(i||(i=V(e)))(t||e)}})();static \u0275cmp=w({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,t,d){if(n&1&&(J(d,gi,4),J(d,we,4)),n&2){let m;z(m=L())&&(t.checkboxIconTemplate=m.first),z(m=L())&&(t.templates=m)}},viewQuery:function(n,t){if(n&1&&ue(xi,5),n&2){let d;z(d=L())&&(t.inputViewChild=d.first)}},hostVars:5,hostBindings:function(n,t){n&2&&(U("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.$disabled()),y(t.cn(t.cx("root"),t.styleClass)))},inputs:{hostName:"hostName",value:"value",binary:[2,"binary","binary",D],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",be],inputId:"inputId",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",D],formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",D],autofocus:[2,"autofocus","autofocus",D],trueValue:"trueValue",falseValue:"falseValue",variant:[1,"variant"],size:[1,"size"]},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},features:[j([Vi,mi,{provide:ui,useExisting:e},{provide:Ve,useExisting:e}]),pe([O]),A],decls:5,vars:24,consts:[["input",""],["type","checkbox",3,"focus","blur","change","checked","pBind"],[3,"pBind"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["data-p-icon","minus",3,"class","pBind",4,"ngIf"],[3,"class","ngClass","pBind",4,"ngIf"],["data-p-icon","check",3,"class","pBind",4,"ngIf"],[3,"ngClass","pBind"],["data-p-icon","check",3,"pBind"],["data-p-icon","minus",3,"pBind"]],template:function(n,t){if(n&1){let d=k();c(0,"input",1,0),g("focus",function(I){return u(d),h(t.onInputFocus(I))})("blur",function(I){return u(d),h(t.onInputBlur(I))})("change",function(I){return u(d),h(t.handleChange(I))}),a(),c(2,"div",2),F(3,wi,3,2,"ng-container",3)(4,Ii,1,0,null,4),a()}n&2&&(x(t.inputStyle),y(t.cn(t.cx("input"),t.inputClass)),s("checked",t.checked)("pBind",t.ptm("input")),U("id",t.inputId)("value",t.value)("name",t.name())("tabindex",t.tabindex)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),l(2),y(t.cx("box")),s("pBind",t.ptm("box")),l(),s("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),l(),s("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",he(21,yi,t.checked,t.cx("icon"))))},dependencies:[Ce,fe,ge,xe,Q,Ne,si,Te,O],encapsulation:2,changeDetection:0})}return e})(),hi=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=se({type:e});static \u0275inj=ce({imports:[W,Q,Q]})}return e})();var Bi=()=>({width:"25rem"}),K=()=>({width:"30px",height:"30px"}),bi=()=>({height:"100%"});function Ni(e,o){if(e&1){let i=k();c(0,"p-button",25),g("onClick",function(){u(i);let t=r(2);return t.dialogFormVisible=!0,h(t.dialogIsNew=!0)}),a()}}function Di(e,o){if(e&1){let i=k();c(0,"div",21)(1,"h3"),C(2,"Familiares registrados"),a(),_(3,Ni,1,0,"p-button",22),q(4,"async"),a(),c(5,"div",21)(6,"p-iconfield"),p(7,"p-inputicon",23),c(8,"input",24),te("ngModelChange",function(t){u(i);let d=r();return ie(d.filter,t)||(d.filter=t),h(t)}),g("input",function(){u(i);let t=r();return h(t.onFilter())}),a()()()}if(e&2){let i=r();l(3),b(R(4,2,i.isAdmin)?3:-1),l(5),ee("ngModel",i.filter)}}function Oi(e,o){if(e&1&&(c(0,"div",26)(1,"div",27),p(2,"p-skeleton",28)(3,"p-skeleton",29),a(),c(4,"div",30),p(5,"p-button",31)(6,"p-button",32),a()()),e&2){let i=r(3);l(3),s("width",i._utils.randomNumberInt(6,15).toString()+"rem"),l(2),x(v(5,K)),l(),x(v(6,K))}}function Pi(e,o){if(e&1&&B(0,Oi,7,7,"div",26,T),e&2){let i=r(2);N(i._utils.arrayOf(10))}}function $i(e,o){if(e&1&&p(0,"p-avatar",33),e&2){let i=r().$implicit;s("image",i.foto)}}function Ai(e,o){if(e&1&&p(0,"p-avatar",34),e&2){let i=r().$implicit,n=r(3);s("label",n.getIniciales(i))}}function zi(e,o){e&1&&p(0,"i",35)}function Li(e,o){if(e&1){let i=k();c(0,"div",30)(1,"p-button",36),g("onClick",function(){u(i);let t=r().$implicit,d=r(3);return h(d.openEditFamily(t))}),a(),c(2,"p-button",37),g("onClick",function(t){u(i);let d=r().$implicit,m=r(3);return h(m.confirmDelete(t,d))}),a()()}e&2&&(l(),x(v(4,K)),l(),x(v(5,K)))}function ji(e,o){if(e&1&&(c(0,"div",26)(1,"div",27),_(2,$i,1,1,"p-avatar",33)(3,Ai,1,1,"p-avatar",34),c(4,"h4"),C(5),a(),_(6,zi,1,0,"i",35),a(),_(7,Li,3,6,"div",30),q(8,"async"),a()),e&2){let i=o.$implicit,n=r(3);l(2),b(i.foto?2:3),l(3),Y("",i.nombres," ",i.apellidos),l(),b(i.admin?6:-1),l(),b(R(8,5,n.isAdmin)?7:-1)}}function qi(e,o){if(e&1&&B(0,ji,9,7,"div",26,T),e&2){let i=r().$implicit;N(i)}}function Ri(e,o){if(e&1&&_(0,Pi,2,0)(1,qi,2,0),e&2){let i=r();b(i.loading$()?0:1)}}function Gi(e,o){if(e&1&&(c(0,"p-card")(1,"div",27),p(2,"p-skeleton",28)(3,"p-skeleton",29),a(),c(4,"div",30),p(5,"p-button",40)(6,"p-button",41),a()()),e&2){let i=r(3);x(v(3,bi)),l(3),s("width",i._utils.randomNumberInt(6,15).toString()+"rem")}}function Qi(e,o){if(e&1&&B(0,Gi,7,4,"p-card",39,T),e&2){let i=r(2);N(i._utils.arrayOf(10))}}function Hi(e,o){if(e&1&&p(0,"p-avatar",33),e&2){let i=r().$implicit;s("image",i.foto)}}function Wi(e,o){if(e&1&&p(0,"p-avatar",34),e&2){let i=r().$implicit,n=r(3);s("label",n.getIniciales(i))}}function Ki(e,o){e&1&&p(0,"i",35)}function Ui(e,o){if(e&1){let i=k();c(0,"div",30)(1,"p-button",42),g("onClick",function(){u(i);let t=r().$implicit,d=r(3);return h(d.openEditFamily(t))}),a(),c(2,"p-button",43),g("onClick",function(t){u(i);let d=r().$implicit,m=r(3);return h(m.confirmDelete(t,d))}),a()()}}function Xi(e,o){if(e&1&&(c(0,"p-card")(1,"div",27),_(2,Hi,1,1,"p-avatar",33)(3,Wi,1,1,"p-avatar",34),c(4,"h4"),C(5),a(),_(6,Ki,1,0,"i",35),a(),_(7,Ui,3,0,"div",30),q(8,"async"),a()),e&2){let i=o.$implicit,n=r(3);x(v(9,bi)),l(2),b(i.foto?2:3),l(3),Y("",i.nombres," ",i.apellidos),l(),b(i.admin?6:-1),l(),b(R(8,7,n.isAdmin)?7:-1)}}function Zi(e,o){if(e&1&&B(0,Xi,9,10,"p-card",39,T),e&2){let i=r().$implicit;N(i)}}function Ji(e,o){if(e&1&&(c(0,"div",38),_(1,Qi,2,0)(2,Zi,2,0),a()),e&2){let i=r();l(),b(i.loading$()?1:2)}}function Yi(e,o){e&1&&(c(0,"small",12),C(1,"Este campo es requerido"),a())}function et(e,o){e&1&&(c(0,"small",12),C(1,"Este campo es requerido"),a())}var _i=class e{_deviceService=f(ai);_messageService=f(Fe);_familyService=f(Me);_confirmationService=f(ae);_utils=f(Ie);family$=E([]);loading$=this._familyService.loading$;filter="";subscription;layout="list";dialogFormVisible=!1;dialogIsNew=!1;isAdmin=f(Ee).isAdmin();familyFg=new Ge({id:new S(null),nombre:new S("",[H.required]),apellidos:new S("",[H.required]),admin:new S(!1,[H.required]),foto:new S(null)});ngOnInit(){return P(this,null,function*(){try{this.family$=yield this._familyService.getFamilyList()}catch(o){this._messageService.add({severity:"error",summary:"Ocurrio un error al obtener la lista de familiares.",detail:o.message,sticky:!0})}this.subscription=this._deviceService.isMobile$.subscribe(o=>{this.layout=o?"list":"grid"})})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}getIniciales(o){return o.nombres[0]+o.apellidos[0]}onFilter(){this.family$=E(this._familyService.getFamilyList()().filter(o=>o.nombres.toLowerCase().includes(this.filter.toLowerCase())||o.apellidos.toLowerCase().includes(this.filter.toLowerCase())))}openEditFamily(o){this.familyFg.patchValue({id:o.id,nombre:o.nombres,apellidos:o.apellidos,admin:o.admin,foto:o.foto}),this.dialogIsNew=!1,this.dialogFormVisible=!0}submitDialog(){return P(this,null,function*(){if(this.familyFg.markAllAsTouched(),this.familyFg.valid){if(this.dialogIsNew)try{yield this._familyService.addFamily({nombres:this.familyFg.value.nombre.trim(),apellidos:this.familyFg.value.apellidos.trim(),admin:this.familyFg.value.admin,foto:this.familyFg.value.foto,deleted:!1})}catch(o){this._messageService.add({severity:"error",summary:"Ocurrio un error al agregar el familiar.",detail:o.message,sticky:!0})}else try{yield this._familyService.updateFamily({id:this.familyFg.value.id,nombres:this.familyFg.value.nombre.trim(),apellidos:this.familyFg.value.apellidos.trim(),admin:this.familyFg.value.admin,foto:this.familyFg.value.foto,deleted:!1})}catch(o){this._messageService.add({severity:"error",summary:"Ocurrio un error al actualizar el familiar.",detail:o.message,sticky:!0})}this.familyFg.reset({nombre:"",apellidos:"",admin:!1}),this.dialogFormVisible=!1}})}deleteFamily(o){return P(this,null,function*(){try{yield this._familyService.deleteFamily(o)}catch(i){this._messageService.add({severity:"error",summary:"Ocurrio un error al eliminar el familiar.",detail:i.message,sticky:!0})}})}confirmDelete(o,i){this._confirmationService.confirm({target:o.target,message:`\xBFDesea eliminar a ${this._utils.addElipsis(i.nombres,15)}?`,icon:"pi pi-info-circle",rejectButtonProps:{label:"Cancelar",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Si, eliminar",severity:"danger"},accept:()=>{this.deleteFamily(i.id)},reject:()=>{}})}cancelDialog(){this.familyFg.reset({nombre:"",apellidos:"",admin:!1}),this.dialogFormVisible=!1}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=w({type:e,selectors:[["app-family"]],features:[j([ae])],decls:32,vars:20,consts:[["dv",""],["header",""],["list",""],["grid",""],["emptyMessage","No hay resultados para mostrar",3,"value","layout"],["closable","false",3,"visibleChange","header","modal","visible"],[1,"dialog-content",3,"formGroup"],[1,"dialog-subtitle"],[1,"dialog-input"],["for","nombre",1,"dialog-labels"],[2,"display","flex","flex-direction","column"],["pInputText","","id","nombre","autocomplete","off","formControlName","nombre"],[1,"label-error"],["for","lastname",1,"dialog-labels"],["pInputText","","id","lastname","autocomplete","off","formControlName","apellidos"],[1,"dialog-checkbox"],["for","admin",1,"dialog-labels"],["id","admin","name","admin","formControlName","admin",3,"binary"],[1,"dialog-buttons"],["label","Cancelar","severity","secondary",3,"click"],[3,"click","label","loading"],[1,"header"],["label","Nuevo familiar"],["styleClass","pi pi-search"],["type","text","pInputText","","placeholder","Buscar","pSize","small",3,"ngModelChange","input","ngModel"],["label","Nuevo familiar",3,"onClick"],[1,"border-bottom","item-list"],[1,"item-info"],["width","3rem","height","1rem","shape","circle","size","2rem"],["height","1rem",3,"width"],[1,"item-controls"],["icon","pi pi-pencil","disabled","true","rounded","true"],["icon","pi pi-trash","disabled","true","severity","danger","rounded","true"],["shape","circle",3,"image"],["shape","circle",3,"label"],[1,"pi","pi-verified",2,"color","green"],["icon","pi pi-pencil","rounded","true",3,"onClick"],["icon","pi pi-trash","severity","danger","rounded","true",3,"onClick"],[1,"grid-container"],[3,"style"],["icon","pi pi-pencil","disabled","true","label","Editar","rounded","true","size","small"],["icon","pi pi-trash","disabled","true","label","Eliminar","severity","danger","rounded","true","size","small"],["icon","pi pi-pencil","label","Editar","rounded","true","size","small",3,"onClick"],["icon","pi pi-trash","label","Eliminar","severity","danger","rounded","true","size","small",3,"onClick"]],template:function(i,n){if(i&1){let t=k();c(0,"p-dataview",4,0),F(2,Di,9,4,"ng-template",null,1,G)(4,Ri,2,1,"ng-template",null,2,G)(6,Ji,3,1,"ng-template",null,3,G),a(),c(8,"p-dialog",5),te("visibleChange",function(m){return u(t),ie(n.dialogFormVisible,m)||(n.dialogFormVisible=m),h(m)}),c(9,"form",6)(10,"span",7),C(11,"Ingresa la informaci\xF3n solicitada"),a(),c(12,"div",8)(13,"label",9),C(14,"Nombre(s)"),a(),c(15,"div",10),p(16,"input",11),_(17,Yi,2,0,"small",12),a()(),c(18,"div",8)(19,"label",13),C(20,"Apellidos"),a(),c(21,"div",10),p(22,"input",14),_(23,et,2,0,"small",12),a()(),c(24,"div",15)(25,"label",16),C(26,"\xBFEs administrador?"),a(),p(27,"p-checkbox",17),a(),c(28,"div",18)(29,"p-button",19),g("click",function(){return u(t),h(n.cancelDialog())}),a(),c(30,"p-button",20),g("click",function(){return u(t),h(n.submitDialog())}),a()()()(),p(31,"p-confirmpopup")}i&2&&(s("value",n.family$())("layout",n.layout),l(8),x(v(19,Bi)),s("header",ne(n.dialogIsNew?"Nuevo familiar":"Editar familiar"))("modal",!0),ee("visible",n.dialogFormVisible),l(),s("formGroup",n.familyFg),l(7),y(n.familyFg.controls.nombre.invalid&&n.familyFg.controls.nombre.touched?"ng-invalid ng-dirty":""),l(),b(n.familyFg.controls.nombre.getError("required")&&n.familyFg.controls.nombre.touched?17:-1),l(5),y(n.familyFg.controls.apellidos.invalid&&n.familyFg.controls.apellidos.touched?"ng-invalid ng-dirty":""),l(),b(n.familyFg.controls.apellidos.getError("required")&&n.familyFg.controls.apellidos.touched?23:-1),l(4),s("binary",!0),l(3),s("label",ne(n.dialogIsNew?"Agregar":"Modificar"))("loading",n.loading$()))},dependencies:[oi,Pe,ni,Oe,De,ei,Ye,ti,ii,ci,li,Ze,Ue,He,Le,qe,Re,Qe,Xe,We,Ke,ri,Ae,$e,hi,W,ye],styles:[".header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;align-items:center}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid var(--p-content-border-color)}h4[_ngcontent-%COMP%]{margin:0}.item-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1rem}.item-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.item-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:.5rem}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.dialog-subtitle[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.5rem}.dialog-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.dialog-checkbox[_ngcontent-%COMP%]{display:flex;gap:1rem}.dialog-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:1rem}@media(max-width:1000px){.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}}@media(min-width:1001px){.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}}"]})};export{_i as FamilyComponent};
