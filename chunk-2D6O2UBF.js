import{e as He,f as Ue,g as Je,h as Ke}from"./chunk-6I3R464X.js";import{a as Ae,c as We}from"./chunk-7GXYQXEN.js";import"./chunk-RJULDXP5.js";import{a as Xe}from"./chunk-RCOMDH3B.js";import{a as ve,b as Fe}from"./chunk-JY7MDKZD.js";import{d as ze,e as Le,f as qe,g as je,j as Re}from"./chunk-3WJ5JSSG.js";import{a as we,b as Me,c as A,d as Ie,e as Se,f as Te,g as Ve,h as S,i as $e,j as Ee,k as Oe,l as De,n as Ne,o as Be,p as Pe}from"./chunk-2UWYRXKY.js";import{a as Qe}from"./chunk-76W2CUH6.js";import{a as Ce}from"./chunk-F3QCDJXU.js";import"./chunk-QFK7VPNF.js";import{c as Ge}from"./chunk-5674PVL2.js";import"./chunk-4YRY4IP2.js";import"./chunk-HIT6EUP3.js";import{K as xe}from"./chunk-5CKZWRBR.js";import{M as be,N as fe,T as ee,Z as _e,_ as j,ba as ge,da as ye,ga as ke}from"./chunk-CK7WZHKF.js";import{$a as C,Ab as K,Ac as he,Bb as X,Cb as Z,Db as Y,Eb as L,Fb as I,Ga as r,Gb as x,Hb as se,Pa as N,Qa as B,Qb as q,R as ie,Ra as re,S as te,T as ne,Ua as b,Wa as k,Xa as p,Y as v,_a as f,aa as M,ac as w,ba as oe,bb as y,bc as pe,cb as $,db as E,eb as O,fb as a,gb as l,hb as d,ia as ae,ib as W,ja as u,jb as H,ka as h,la as le,lb as F,ma as V,mb as _,nb as s,qa as D,qb as U,rc as de,sb as J,tb as ce,ub as P,uc as me,vb as z,wc as ue,xb as g}from"./chunk-O2BEBOXS.js";import{e as G}from"./chunk-ACKELEN3.js";var Ye=(()=>{class e extends ke{static \u0275fac=(()=>{let i;return function(t){return(i||(i=V(e)))(t||e)}})();static \u0275cmp=M({type:e,selectors:[["MinusIcon"]],standalone:!0,features:[B,I],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,t){n&1&&(le(),a(0,"svg",0),d(1,"path",1),l()),n&2&&(C(t.getClassNames()),k("aria-label",t.ariaLabel)("aria-hidden",t.ariaHidden)("role",t.role))},encapsulation:2})}return e})();var oi=({dt:e})=>`
.p-checkbox {
    position: relative;
    display: inline-flex;
    user-select: none;
    vertical-align: bottom;
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
}

.p-checkbox-input {
    cursor: pointer;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: 1;
    outline: 0 none;
    border: 1px solid transparent;
    border-radius: ${e("checkbox.border.radius")};
}

.p-checkbox-box {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: ${e("checkbox.border.radius")};
    border: 1px solid ${e("checkbox.border.color")};
    background: ${e("checkbox.background")};
    width: ${e("checkbox.width")};
    height: ${e("checkbox.height")};
    transition: background ${e("checkbox.transition.duration")}, color ${e("checkbox.transition.duration")}, border-color ${e("checkbox.transition.duration")}, box-shadow ${e("checkbox.transition.duration")}, outline-color ${e("checkbox.transition.duration")};
    outline-color: transparent;
    box-shadow: ${e("checkbox.shadow")};
}

.p-checkbox-icon {
    transition-duration: ${e("checkbox.transition.duration")};
    color: ${e("checkbox.icon.color")};
    font-size: ${e("checkbox.icon.size")};
    width: ${e("checkbox.icon.size")};
    height: ${e("checkbox.icon.size")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    border-color: ${e("checkbox.hover.border.color")};
}

.p-checkbox-checked .p-checkbox-box {
    border-color: ${e("checkbox.checked.border.color")};
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
    border-color: ${e("checkbox.checked.hover.border.color")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {
    color: ${e("checkbox.icon.checked.hover.color")};
}

.p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.focus.border.color")};
    box-shadow: ${e("checkbox.focus.ring.shadow")};
    outline: ${e("checkbox.focus.ring.width")} ${e("checkbox.focus.ring.style")} ${e("checkbox.focus.ring.color")};
    outline-offset: ${e("checkbox.focus.ring.offset")};
}

.p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {
    border-color: ${e("checkbox.checked.focus.border.color")};
}

.p-checkbox.ng-invalid.ng-dirty > .p-checkbox-box {
    border-color: ${e("checkbox.invalid.border.color")};
}

.p-checkbox.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.filled.background")};
}

.p-checkbox-checked.p-variant-filled .p-checkbox-box {
    background: ${e("checkbox.checked.background")};
}

.p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {
    background: ${e("checkbox.checked.hover.background")};
}

.p-checkbox.p-disabled {
    opacity: 1;
}

.p-checkbox.p-disabled .p-checkbox-box {
    background: ${e("checkbox.disabled.background")};
    border-color: ${e("checkbox.checked.disabled.border.color")};
}

.p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {
    color: ${e("checkbox.icon.disabled.color")};
}

.p-checkbox-sm,
.p-checkbox-sm .p-checkbox-box {
    width: ${e("checkbox.sm.width")};
    height: ${e("checkbox.sm.height")};
}

.p-checkbox-sm .p-checkbox-icon {
    font-size: ${e("checkbox.icon.sm.size")};
    width: ${e("checkbox.icon.sm.size")};
    height: ${e("checkbox.icon.sm.size")};
}

.p-checkbox-lg,
.p-checkbox-lg .p-checkbox-box {
    width: ${e("checkbox.lg.width")};
    height: ${e("checkbox.lg.height")};
}

.p-checkbox-lg .p-checkbox-icon {
    font-size: ${e("checkbox.icon.lg.size")};
    width: ${e("checkbox.icon.lg.size")};
    height: ${e("checkbox.icon.lg.size")};
}
`,ai={root:({instance:e,props:o})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":o.disabled,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ei=(()=>{class e extends ge{name="checkbox";theme=oi;classes=ai;static \u0275fac=(()=>{let i;return function(t){return(i||(i=V(e)))(t||e)}})();static \u0275prov=te({token:e,factory:e.\u0275fac})}return e})();var li=["checkboxicon"],ri=["input"],ci=()=>({"p-checkbox-input":!0}),si=e=>({checked:e,class:"p-checkbox-icon"});function pi(e,o){if(e&1&&d(0,"span",8),e&2){let i=s(3);p("ngClass",i.checkboxIcon),k("data-pc-section","icon")}}function di(e,o){e&1&&d(0,"CheckIcon",9),e&2&&(p("styleClass","p-checkbox-icon"),k("data-pc-section","icon"))}function mi(e,o){if(e&1&&(W(0),b(1,pi,1,2,"span",7)(2,di,1,2,"CheckIcon",6),H()),e&2){let i=s(2);r(),p("ngIf",i.checkboxIcon),r(),p("ngIf",!i.checkboxIcon)}}function ui(e,o){e&1&&d(0,"MinusIcon",9),e&2&&(p("styleClass","p-checkbox-icon"),k("data-pc-section","icon"))}function hi(e,o){if(e&1&&(W(0),b(1,mi,3,2,"ng-container",4)(2,ui,1,2,"MinusIcon",6),H()),e&2){let i=s();r(),p("ngIf",i.checked),r(),p("ngIf",i._indeterminate())}}function bi(e,o){}function fi(e,o){e&1&&b(0,bi,0,0,"ng-template")}var _i={provide:we,useExisting:ie(()=>Q),multi:!0},Q=(()=>{class e extends ye{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new D;onFocus=new D;onBlur=new D;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:fe(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=N(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=v(ei);ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"icon":this._checkboxIconTemplate=i.template;break;case"checkboxicon":this._checkboxIconTemplate=i.template;break}})}ngOnChanges(i){super.ngOnChanges(i),i.indeterminate&&this._indeterminate.set(i.indeterminate.currentValue)}updateModel(i){let n,t=this.injector.get(Ie,null,{optional:!0,self:!0}),c=t&&!this.formControl?t.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=c.filter(m=>!be(m,this.value)):n=c?[...c,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:i})}handleChange(i){this.readonly||this.updateModel(i)}onInputFocus(i){this.focused=!0,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.onBlur.emit(i),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(i){this.model=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){setTimeout(()=>{this.disabled=i,this.cd.markForCheck()})}static \u0275fac=(()=>{let i;return function(t){return(i||(i=V(e)))(t||e)}})();static \u0275cmp=M({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,t,c){if(n&1&&(J(c,li,4),J(c,_e,4)),n&2){let m;P(m=z())&&(t.checkboxIconTemplate=m.first),P(m=z())&&(t.templates=m)}},viewQuery:function(n,t){if(n&1&&ce(ri,5),n&2){let c;P(c=z())&&(t.inputViewChild=c.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",w],binary:[2,"binary","binary",w],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",pe],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",w],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",w],required:[2,"required","required",w],autofocus:[2,"autofocus","autofocus",w],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[L([_i,ei]),re,B,ae,I],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,t){if(n&1){let c=F();a(0,"div",1)(1,"input",2,0),_("focus",function(T){return u(c),h(t.onInputFocus(T))})("blur",function(T){return u(c),h(t.onInputBlur(T))})("change",function(T){return u(c),h(t.handleChange(T))}),l(),a(3,"div",3),b(4,hi,3,2,"ng-container",4)(5,fi,1,0,null,5),l()()}n&2&&(f(t.style),C(t.styleClass),p("ngClass",t.containerClass),k("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.disabled),r(),f(t.inputStyle),C(t.inputClass),p("value",t.value)("checked",t.checked)("disabled",t.disabled)("readonly",t.readonly)("ngClass",x(26,ci)),k("id",t.inputId)("name",t.name)("tabindex",t.tabindex)("required",t.required)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),r(3),p("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),r(),p("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",se(27,si,t.checked)))},dependencies:[he,de,me,ue,Ce,Ye,j],encapsulation:2,changeDetection:0})}return e})(),ii=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=oe({type:e});static \u0275inj=ne({imports:[Q,j,j]})}return e})();var xi=()=>({width:"25rem"}),R=()=>({width:"30px",height:"30px"}),ni=()=>({height:"100%"});function yi(e,o){if(e&1){let i=F();a(0,"div",21)(1,"h3"),g(2,"Familiares registrados"),l(),a(3,"p-button",22),_("onClick",function(){u(i);let t=s();return t.dialogFormVisible=!0,h(t.dialogIsNew=!0)}),l()(),a(4,"div",21)(5,"p-iconfield"),d(6,"p-inputicon",23),a(7,"input",24),Y("ngModelChange",function(t){u(i);let c=s();return Z(c.filter,t)||(c.filter=t),h(t)}),_("input",function(){u(i);let t=s();return h(t.onFilter())}),l()()()}if(e&2){let i=s();r(7),X("ngModel",i.filter)}}function ki(e,o){if(e&1&&(a(0,"div",25)(1,"div",26),d(2,"p-skeleton",27)(3,"p-skeleton",28),l(),a(4,"div",29),d(5,"p-button",30)(6,"p-button",31),l()()),e&2){let i=s(3);r(3),p("width",i._utils.randomNumberInt(6,15).toString()+"rem"),r(2),f(x(5,R)),r(),f(x(6,R))}}function Ci(e,o){if(e&1&&E(0,ki,7,7,"div",25,$),e&2){let i=s(2);O(i._utils.arrayOf(10))}}function vi(e,o){if(e&1&&d(0,"p-avatar",32),e&2){let i=s().$implicit;p("image",i.foto)}}function Fi(e,o){if(e&1&&d(0,"p-avatar",33),e&2){let i=s().$implicit,n=s(3);p("label",n.getIniciales(i))}}function wi(e,o){e&1&&d(0,"i",34)}function Mi(e,o){if(e&1){let i=F();a(0,"div",25)(1,"div",26),b(2,vi,1,1,"p-avatar",32)(3,Fi,1,1,"p-avatar",33),a(4,"h4"),g(5),l(),b(6,wi,1,0,"i",34),l(),a(7,"div",29)(8,"p-button",35),_("onClick",function(){let t=u(i).$implicit,c=s(3);return h(c.openEditFamily(t))}),l(),a(9,"p-button",36),_("onClick",function(t){let c=u(i).$implicit,m=s(3);return h(m.confirmDelete(t,c))}),l()()()}if(e&2){let i=o.$implicit;r(2),y(i.foto?2:3),r(3),K("",i.nombres," ",i.apellidos,""),r(),y(i.admin?6:-1),r(2),f(x(8,R)),r(),f(x(9,R))}}function Ii(e,o){if(e&1&&E(0,Mi,10,10,"div",25,$),e&2){let i=s().$implicit;O(i)}}function Si(e,o){if(e&1&&b(0,Ci,2,0)(1,Ii,2,0),e&2){let i=s();y(i.loading$()?0:1)}}function Ti(e,o){if(e&1&&(a(0,"p-card")(1,"div",26),d(2,"p-skeleton",27)(3,"p-skeleton",28),l(),a(4,"div",29),d(5,"p-button",39)(6,"p-button",40),l()()),e&2){let i=s(3);f(x(3,ni)),r(3),p("width",i._utils.randomNumberInt(6,15).toString()+"rem")}}function Vi(e,o){if(e&1&&E(0,Ti,7,4,"p-card",38,$),e&2){let i=s(2);O(i._utils.arrayOf(10))}}function $i(e,o){if(e&1&&d(0,"p-avatar",32),e&2){let i=s().$implicit;p("image",i.foto)}}function Ei(e,o){if(e&1&&d(0,"p-avatar",33),e&2){let i=s().$implicit,n=s(3);p("label",n.getIniciales(i))}}function Oi(e,o){e&1&&d(0,"i",34)}function Di(e,o){if(e&1){let i=F();a(0,"p-card")(1,"div",26),b(2,$i,1,1,"p-avatar",32)(3,Ei,1,1,"p-avatar",33),a(4,"h4"),g(5),l(),b(6,Oi,1,0,"i",34),l(),a(7,"div",29)(8,"p-button",41),_("onClick",function(){let t=u(i).$implicit,c=s(3);return h(c.openEditFamily(t))}),l(),a(9,"p-button",42),_("onClick",function(t){let c=u(i).$implicit,m=s(3);return h(m.confirmDelete(t,c))}),l()()()}if(e&2){let i=o.$implicit;f(x(6,ni)),r(2),y(i.foto?2:3),r(3),K("",i.nombres," ",i.apellidos,""),r(),y(i.admin?6:-1)}}function Ni(e,o){if(e&1&&E(0,Di,10,7,"p-card",38,$),e&2){let i=s().$implicit;O(i)}}function Bi(e,o){if(e&1&&(a(0,"div",37),b(1,Vi,2,0)(2,Ni,2,0),l()),e&2){let i=s();r(),y(i.loading$()?1:2)}}function Pi(e,o){e&1&&(a(0,"small",12),g(1,"Este campo es requerido"),l())}function zi(e,o){e&1&&(a(0,"small",12),g(1,"Este campo es requerido"),l())}var ti=class e{_deviceService=v(Re);_familyService=v(Xe);_confirmationService=v(ee);_utils=v(xe);family$=this._familyService.getFamilyList();loading$=this._familyService.loading$;filter="";subscription;layout="list";dialogFormVisible=!1;dialogIsNew=!1;familyFg=new Ve({id:new S(null),nombre:new S("",[A.required]),apellidos:new S("",[A.required]),admin:new S(!1,[A.required]),foto:new S(null)});ngOnInit(){this.subscription=this._deviceService.isMobile$.subscribe(o=>{this.layout=o?"list":"grid"})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}getIniciales(o){return o.nombres[0]+o.apellidos[0]}onFilter(){this.family$=N(this._familyService.getFamilyList()().filter(o=>o.nombres.toLowerCase().includes(this.filter.toLowerCase())||o.apellidos.toLowerCase().includes(this.filter.toLowerCase())))}openEditFamily(o){this.familyFg.patchValue({id:o.id,nombre:o.nombres,apellidos:o.apellidos,admin:o.admin,foto:o.foto}),this.dialogIsNew=!1,this.dialogFormVisible=!0}submitDialog(){return G(this,null,function*(){this.familyFg.markAllAsTouched(),this.familyFg.valid&&(this.dialogIsNew?yield this._familyService.addFamily({nombres:this.familyFg.value.nombre.trim(),apellidos:this.familyFg.value.apellidos.trim(),admin:this.familyFg.value.admin,foto:this.familyFg.value.foto}):yield this._familyService.updateFamily({id:this.familyFg.value.id,nombres:this.familyFg.value.nombre.trim(),apellidos:this.familyFg.value.apellidos.trim(),admin:this.familyFg.value.admin,foto:this.familyFg.value.foto}),this.familyFg.reset({nombre:"",apellidos:"",admin:!1}),this.dialogFormVisible=!1)})}deleteFamily(o){return G(this,null,function*(){yield this._familyService.deleteFamily(o)})}confirmDelete(o,i){this._confirmationService.confirm({target:o.target,message:`\xBFDesea eliminar a ${this._utils.addElipsis(i.nombres,15)}?`,icon:"pi pi-info-circle",rejectButtonProps:{label:"Cancelar",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Si, eliminar",severity:"danger"},accept:()=>{this.deleteFamily(i.id)},reject:()=>{}})}cancelDialog(){this.familyFg.reset({nombre:"",apellidos:"",admin:!1}),this.dialogFormVisible=!1}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=M({type:e,selectors:[["app-family"]],standalone:!0,features:[L([ee]),I],decls:32,vars:20,consts:[["dv",""],["header",""],["list",""],["grid",""],["emptyMessage","No hay resultados para mostrar",3,"value","layout"],["closable","false",3,"visibleChange","header","modal","visible"],[1,"dialog-content",3,"formGroup"],[1,"dialog-subtitle"],[1,"dialog-input"],["for","nombre",1,"dialog-labels"],[2,"display","flex","flex-direction","column"],["pInputText","","id","nombre","autocomplete","off","formControlName","nombre"],[1,"label-error"],["for","lastname",1,"dialog-labels"],["pInputText","","id","lastname","autocomplete","off","formControlName","apellidos"],[1,"dialog-checkbox"],["for","admin",1,"dialog-labels"],["id","admin","name","admin","formControlName","admin",3,"binary"],[1,"dialog-buttons"],["label","Cancelar","severity","secondary",3,"click"],[3,"click","label","loading"],[1,"header"],["label","Nuevo familiar",3,"onClick"],["styleClass","pi pi-search"],["type","text","pInputText","","placeholder","Buscar","pSize","small",3,"ngModelChange","input","ngModel"],[1,"border-bottom","item-list"],[1,"item-info"],["width","3rem","height","1rem","shape","circle","size","2rem"],["height","1rem",3,"width"],[1,"item-controls"],["icon","pi pi-pencil","disabled","true","rounded","true"],["icon","pi pi-trash","disabled","true","severity","danger","rounded","true"],["shape","circle",3,"image"],["shape","circle",3,"label"],[1,"pi","pi-verified",2,"color","green"],["icon","pi pi-pencil","rounded","true",3,"onClick"],["icon","pi pi-trash","severity","danger","rounded","true",3,"onClick"],[1,"grid-container"],[3,"style"],["icon","pi pi-pencil","disabled","true","label","Editar","rounded","true","size","small"],["icon","pi pi-trash","disabled","true","label","Eliminar","severity","danger","rounded","true","size","small"],["icon","pi pi-pencil","label","Editar","rounded","true","size","small",3,"onClick"],["icon","pi pi-trash","label","Eliminar","severity","danger","rounded","true","size","small",3,"onClick"]],template:function(i,n){if(i&1){let t=F();a(0,"p-dataview",4,0),b(2,yi,8,1,"ng-template",null,1,q)(4,Si,2,1,"ng-template",null,2,q)(6,Bi,3,1,"ng-template",null,3,q),l(),a(8,"p-dialog",5),Y("visibleChange",function(m){return u(t),Z(n.dialogFormVisible,m)||(n.dialogFormVisible=m),h(m)}),a(9,"form",6)(10,"span",7),g(11,"Ingresa la informaci\xF3n solicitada"),l(),a(12,"div",8)(13,"label",9),g(14,"Nombre(s)"),l(),a(15,"div",10),d(16,"input",11),b(17,Pi,2,0,"small",12),l()(),a(18,"div",8)(19,"label",13),g(20,"Apellidos"),l(),a(21,"div",10),d(22,"input",14),b(23,zi,2,0,"small",12),l()(),a(24,"div",15)(25,"label",16),g(26,"\xBFEs administrador?"),l(),d(27,"p-checkbox",17),l(),a(28,"div",18)(29,"p-button",19),_("click",function(){return u(t),h(n.cancelDialog())}),l(),a(30,"p-button",20),_("click",function(){return u(t),h(n.submitDialog())}),l()()()(),d(31,"p-confirmPopup")}i&2&&(p("value",n.family$())("layout",n.layout),r(8),f(x(19,xi)),U("header",n.dialogIsNew?"Nuevo familiar":"Editar familiar"),p("modal",!0),X("visible",n.dialogFormVisible),r(),p("formGroup",n.familyFg),r(7),C(n.familyFg.controls.nombre.invalid&&n.familyFg.controls.nombre.touched?"ng-invalid ng-dirty":""),r(),y(n.familyFg.controls.nombre.getError("required")&&n.familyFg.controls.nombre.touched?17:-1),r(5),C(n.familyFg.controls.apellidos.invalid&&n.familyFg.controls.apellidos.touched?"ng-invalid ng-dirty":""),r(),y(n.familyFg.controls.apellidos.getError("required")&&n.familyFg.controls.apellidos.touched?23:-1),r(4),p("binary",!0),r(3),U("label",n.dialogIsNew?"Agregar":"Modificar"),p("loading",n.loading$()))},dependencies:[Qe,Ge,Ae,Fe,ve,Le,ze,je,qe,Ke,Je,Pe,Ne,Ee,Me,Se,Te,$e,Be,Oe,De,We,Ue,He,ii,Q],styles:[".header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;align-items:center}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid var(--p-content-border-color)}h4[_ngcontent-%COMP%]{margin:0}.item-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1rem}.item-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.item-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:.5rem}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.dialog-subtitle[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.5rem}.dialog-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.dialog-checkbox[_ngcontent-%COMP%]{display:flex;gap:1rem}.dialog-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:1rem}@media (max-width: 1000px){.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}}@media (min-width: 1001px){.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}}"]})};export{ti as FamilyComponent};
