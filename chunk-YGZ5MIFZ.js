import{e as Je,f as Ke,g as Xe,h as Ze}from"./chunk-IZWEFOTV.js";import{a as Re,c as Ue}from"./chunk-JWBDBPTO.js";import"./chunk-RJULDXP5.js";import{a as we,b as Me}from"./chunk-JY7MDKZD.js";import{a as ke}from"./chunk-Z2WEJKII.js";import{d as qe,e as je,f as Ae,g as Qe,j as We}from"./chunk-L6TBZT6T.js";import{a as Se,b as Ie,c as Q,d as Te,e as Ee,f as Ve,g as $e,h as I,i as Oe,j as De,k as Ne,l as Be,n as Pe,o as ze,p as Le}from"./chunk-2UWYRXKY.js";import{a as Ge}from"./chunk-76W2CUH6.js";import{a as Fe}from"./chunk-PVZCQTHS.js";import"./chunk-QFK7VPNF.js";import{c as He}from"./chunk-5674PVL2.js";import"./chunk-4YRY4IP2.js";import"./chunk-73SRZ5W2.js";import{n as ye}from"./chunk-EM5XZP4M.js";import{M as be,N as fe,T as ee,V as ge,Z as _e,_ as A,ba as xe,da as Ce,ga as ve}from"./chunk-CK7WZHKF.js";import{$a as v,Ab as K,Ac as he,Bb as X,Cb as Z,Db as Y,Eb as q,Fb as S,Ga as l,Gb as x,Hb as se,Pa as V,Qa as P,Qb as j,R as ie,Ra as le,S as te,T as oe,Ua as b,Wa as C,Xa as d,Y as k,_a as f,aa as M,ac as w,ba as ne,bb as y,bc as de,cb as $,db as O,eb as D,fb as a,gb as r,hb as p,ia as ae,ib as W,ja as u,jb as H,ka as h,la as re,lb as F,ma as E,mb as g,nb as s,qa as B,qb as U,rc as pe,sb as J,tb as ce,ub as z,uc as me,vb as L,wc as ue,xb as _}from"./chunk-O2BEBOXS.js";import{e as N}from"./chunk-ACKELEN3.js";var ei=(()=>{class e extends ve{static \u0275fac=(()=>{let i;return function(t){return(i||(i=E(e)))(t||e)}})();static \u0275cmp=M({type:e,selectors:[["MinusIcon"]],standalone:!0,features:[P,S],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(n,t){n&1&&(re(),a(0,"svg",0),p(1,"path",1),r()),n&2&&(v(t.getClassNames()),C("aria-label",t.ariaLabel)("aria-hidden",t.ariaHidden)("role",t.role))},encapsulation:2})}return e})();var ai=({dt:e})=>`
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
`,ri={root:({instance:e,props:o})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":o.disabled,"p-invalid":o.invalid,"p-variant-filled":o.variant?o.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ii=(()=>{class e extends xe{name="checkbox";theme=ai;classes=ri;static \u0275fac=(()=>{let i;return function(t){return(i||(i=E(e)))(t||e)}})();static \u0275prov=te({token:e,factory:e.\u0275fac})}return e})();var li=["checkboxicon"],ci=["input"],si=()=>({"p-checkbox-input":!0}),di=e=>({checked:e,class:"p-checkbox-icon"});function pi(e,o){if(e&1&&p(0,"span",8),e&2){let i=s(3);d("ngClass",i.checkboxIcon),C("data-pc-section","icon")}}function mi(e,o){e&1&&p(0,"CheckIcon",9),e&2&&(d("styleClass","p-checkbox-icon"),C("data-pc-section","icon"))}function ui(e,o){if(e&1&&(W(0),b(1,pi,1,2,"span",7)(2,mi,1,2,"CheckIcon",6),H()),e&2){let i=s(2);l(),d("ngIf",i.checkboxIcon),l(),d("ngIf",!i.checkboxIcon)}}function hi(e,o){e&1&&p(0,"MinusIcon",9),e&2&&(d("styleClass","p-checkbox-icon"),C("data-pc-section","icon"))}function bi(e,o){if(e&1&&(W(0),b(1,ui,3,2,"ng-container",4)(2,hi,1,2,"MinusIcon",6),H()),e&2){let i=s();l(),d("ngIf",i.checked),l(),d("ngIf",i._indeterminate())}}function fi(e,o){}function gi(e,o){e&1&&b(0,fi,0,0,"ng-template")}var _i={provide:Se,useExisting:ie(()=>R),multi:!0},R=(()=>{class e extends Ce{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new B;onFocus=new B;onBlur=new B;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:fe(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=V(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=k(ii);ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"icon":this._checkboxIconTemplate=i.template;break;case"checkboxicon":this._checkboxIconTemplate=i.template;break}})}ngOnChanges(i){super.ngOnChanges(i),i.indeterminate&&this._indeterminate.set(i.indeterminate.currentValue)}updateModel(i){let n,t=this.injector.get(Te,null,{optional:!0,self:!0}),c=t&&!this.formControl?t.value:this.model;this.binary?(n=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=n,this.onModelChange(n)):(this.checked||this._indeterminate()?n=c.filter(m=>!be(m,this.value)):n=c?[...c,this.value]:[this.value],this.onModelChange(n),this.model=n,this.formControl&&this.formControl.setValue(n)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:n,originalEvent:i})}handleChange(i){this.readonly||this.updateModel(i)}onInputFocus(i){this.focused=!0,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.onBlur.emit(i),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(i){this.model=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){setTimeout(()=>{this.disabled=i,this.cd.markForCheck()})}static \u0275fac=(()=>{let i;return function(t){return(i||(i=E(e)))(t||e)}})();static \u0275cmp=M({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(n,t,c){if(n&1&&(J(c,li,4),J(c,_e,4)),n&2){let m;z(m=L())&&(t.checkboxIconTemplate=m.first),z(m=L())&&(t.templates=m)}},viewQuery:function(n,t){if(n&1&&ce(ci,5),n&2){let c;z(c=L())&&(t.inputViewChild=c.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",w],binary:[2,"binary","binary",w],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",de],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",w],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",w],required:[2,"required","required",w],autofocus:[2,"autofocus","autofocus",w],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[q([_i,ii]),le,P,ae,S],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(n,t){if(n&1){let c=F();a(0,"div",1)(1,"input",2,0),g("focus",function(T){return u(c),h(t.onInputFocus(T))})("blur",function(T){return u(c),h(t.onInputBlur(T))})("change",function(T){return u(c),h(t.handleChange(T))}),r(),a(3,"div",3),b(4,bi,3,2,"ng-container",4)(5,gi,1,0,null,5),r()()}n&2&&(f(t.style),v(t.styleClass),d("ngClass",t.containerClass),C("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.disabled),l(),f(t.inputStyle),v(t.inputClass),d("value",t.value)("checked",t.checked)("disabled",t.disabled)("readonly",t.readonly)("ngClass",x(26,si)),C("id",t.inputId)("name",t.name)("tabindex",t.tabindex)("required",t.required)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),l(3),d("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),l(),d("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",se(27,di,t.checked)))},dependencies:[he,pe,me,ue,Fe,ei,A],encapsulation:2,changeDetection:0})}return e})(),ti=(()=>{class e{static \u0275fac=function(n){return new(n||e)};static \u0275mod=ne({type:e});static \u0275inj=oe({imports:[R,A,A]})}return e})();var yi=()=>({width:"25rem"}),G=()=>({width:"30px",height:"30px"}),ni=()=>({height:"100%"});function ki(e,o){if(e&1){let i=F();a(0,"div",21)(1,"h3"),_(2,"Familiares registrados"),r(),a(3,"p-button",22),g("onClick",function(){u(i);let t=s();return t.dialogFormVisible=!0,h(t.dialogIsNew=!0)}),r()(),a(4,"div",21)(5,"p-iconfield"),p(6,"p-inputicon",23),a(7,"input",24),Y("ngModelChange",function(t){u(i);let c=s();return Z(c.filter,t)||(c.filter=t),h(t)}),g("input",function(){u(i);let t=s();return h(t.onFilter())}),r()()()}if(e&2){let i=s();l(7),X("ngModel",i.filter)}}function Ci(e,o){if(e&1&&(a(0,"div",25)(1,"div",26),p(2,"p-skeleton",27)(3,"p-skeleton",28),r(),a(4,"div",29),p(5,"p-button",30)(6,"p-button",31),r()()),e&2){let i=s(3);l(3),d("width",i._utils.randomNumberInt(6,15).toString()+"rem"),l(2),f(x(5,G)),l(),f(x(6,G))}}function vi(e,o){if(e&1&&O(0,Ci,7,7,"div",25,$),e&2){let i=s(2);D(i._utils.arrayOf(10))}}function Fi(e,o){if(e&1&&p(0,"p-avatar",32),e&2){let i=s().$implicit;d("image",i.foto)}}function wi(e,o){if(e&1&&p(0,"p-avatar",33),e&2){let i=s().$implicit,n=s(3);d("label",n.getIniciales(i))}}function Mi(e,o){e&1&&p(0,"i",34)}function Si(e,o){if(e&1){let i=F();a(0,"div",25)(1,"div",26),b(2,Fi,1,1,"p-avatar",32)(3,wi,1,1,"p-avatar",33),a(4,"h4"),_(5),r(),b(6,Mi,1,0,"i",34),r(),a(7,"div",29)(8,"p-button",35),g("onClick",function(){let t=u(i).$implicit,c=s(3);return h(c.openEditFamily(t))}),r(),a(9,"p-button",36),g("onClick",function(t){let c=u(i).$implicit,m=s(3);return h(m.confirmDelete(t,c))}),r()()()}if(e&2){let i=o.$implicit;l(2),y(i.foto?2:3),l(3),K("",i.nombres," ",i.apellidos,""),l(),y(i.admin?6:-1),l(2),f(x(8,G)),l(),f(x(9,G))}}function Ii(e,o){if(e&1&&O(0,Si,10,10,"div",25,$),e&2){let i=s().$implicit;D(i)}}function Ti(e,o){if(e&1&&b(0,vi,2,0)(1,Ii,2,0),e&2){let i=s();y(i.loading$()?0:1)}}function Ei(e,o){if(e&1&&(a(0,"p-card")(1,"div",26),p(2,"p-skeleton",27)(3,"p-skeleton",28),r(),a(4,"div",29),p(5,"p-button",39)(6,"p-button",40),r()()),e&2){let i=s(3);f(x(3,ni)),l(3),d("width",i._utils.randomNumberInt(6,15).toString()+"rem")}}function Vi(e,o){if(e&1&&O(0,Ei,7,4,"p-card",38,$),e&2){let i=s(2);D(i._utils.arrayOf(10))}}function $i(e,o){if(e&1&&p(0,"p-avatar",32),e&2){let i=s().$implicit;d("image",i.foto)}}function Oi(e,o){if(e&1&&p(0,"p-avatar",33),e&2){let i=s().$implicit,n=s(3);d("label",n.getIniciales(i))}}function Di(e,o){e&1&&p(0,"i",34)}function Ni(e,o){if(e&1){let i=F();a(0,"p-card")(1,"div",26),b(2,$i,1,1,"p-avatar",32)(3,Oi,1,1,"p-avatar",33),a(4,"h4"),_(5),r(),b(6,Di,1,0,"i",34),r(),a(7,"div",29)(8,"p-button",41),g("onClick",function(){let t=u(i).$implicit,c=s(3);return h(c.openEditFamily(t))}),r(),a(9,"p-button",42),g("onClick",function(t){let c=u(i).$implicit,m=s(3);return h(m.confirmDelete(t,c))}),r()()()}if(e&2){let i=o.$implicit;f(x(6,ni)),l(2),y(i.foto?2:3),l(3),K("",i.nombres," ",i.apellidos,""),l(),y(i.admin?6:-1)}}function Bi(e,o){if(e&1&&O(0,Ni,10,7,"p-card",38,$),e&2){let i=s().$implicit;D(i)}}function Pi(e,o){if(e&1&&(a(0,"div",37),b(1,Vi,2,0)(2,Bi,2,0),r()),e&2){let i=s();l(),y(i.loading$()?1:2)}}function zi(e,o){e&1&&(a(0,"small",12),_(1,"Este campo es requerido"),r())}function Li(e,o){e&1&&(a(0,"small",12),_(1,"Este campo es requerido"),r())}var oi=class e{_deviceService=k(We);_messageService=k(ge);_familyService=k(ke);_confirmationService=k(ee);_utils=k(ye);family$=V([]);loading$=this._familyService.loading$;filter="";subscription;layout="list";dialogFormVisible=!1;dialogIsNew=!1;familyFg=new $e({id:new I(null),nombre:new I("",[Q.required]),apellidos:new I("",[Q.required]),admin:new I(!1,[Q.required]),foto:new I(null)});ngOnInit(){return N(this,null,function*(){try{this.family$=yield this._familyService.getFamilyList()}catch(o){this._messageService.add({severity:"error",summary:"Ocurrio un error al obtener la lista de familiares.",detail:o.message,sticky:!0})}this.subscription=this._deviceService.isMobile$.subscribe(o=>{this.layout=o?"list":"grid"})})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}getIniciales(o){return o.nombres[0]+o.apellidos[0]}onFilter(){this.family$=V(this._familyService.getFamilyList()().filter(o=>o.nombres.toLowerCase().includes(this.filter.toLowerCase())||o.apellidos.toLowerCase().includes(this.filter.toLowerCase())))}openEditFamily(o){this.familyFg.patchValue({id:o.id,nombre:o.nombres,apellidos:o.apellidos,admin:o.admin,foto:o.foto}),this.dialogIsNew=!1,this.dialogFormVisible=!0}submitDialog(){return N(this,null,function*(){if(this.familyFg.markAllAsTouched(),this.familyFg.valid){if(this.dialogIsNew)try{yield this._familyService.addFamily({nombres:this.familyFg.value.nombre.trim(),apellidos:this.familyFg.value.apellidos.trim(),admin:this.familyFg.value.admin,foto:this.familyFg.value.foto})}catch(o){this._messageService.add({severity:"error",summary:"Ocurrio un error al agregar el familiar.",detail:o.message,sticky:!0})}else try{yield this._familyService.updateFamily({id:this.familyFg.value.id,nombres:this.familyFg.value.nombre.trim(),apellidos:this.familyFg.value.apellidos.trim(),admin:this.familyFg.value.admin,foto:this.familyFg.value.foto})}catch(o){this._messageService.add({severity:"error",summary:"Ocurrio un error al actualizar el familiar.",detail:o.message,sticky:!0})}this.familyFg.reset({nombre:"",apellidos:"",admin:!1}),this.dialogFormVisible=!1}})}deleteFamily(o){return N(this,null,function*(){try{yield this._familyService.deleteFamily(o)}catch(i){this._messageService.add({severity:"error",summary:"Ocurrio un error al eliminar el familiar.",detail:i.message,sticky:!0})}})}confirmDelete(o,i){this._confirmationService.confirm({target:o.target,message:`\xBFDesea eliminar a ${this._utils.addElipsis(i.nombres,15)}?`,icon:"pi pi-info-circle",rejectButtonProps:{label:"Cancelar",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Si, eliminar",severity:"danger"},accept:()=>{this.deleteFamily(i.id)},reject:()=>{}})}cancelDialog(){this.familyFg.reset({nombre:"",apellidos:"",admin:!1}),this.dialogFormVisible=!1}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=M({type:e,selectors:[["app-family"]],standalone:!0,features:[q([ee]),S],decls:32,vars:20,consts:[["dv",""],["header",""],["list",""],["grid",""],["emptyMessage","No hay resultados para mostrar",3,"value","layout"],["closable","false",3,"visibleChange","header","modal","visible"],[1,"dialog-content",3,"formGroup"],[1,"dialog-subtitle"],[1,"dialog-input"],["for","nombre",1,"dialog-labels"],[2,"display","flex","flex-direction","column"],["pInputText","","id","nombre","autocomplete","off","formControlName","nombre"],[1,"label-error"],["for","lastname",1,"dialog-labels"],["pInputText","","id","lastname","autocomplete","off","formControlName","apellidos"],[1,"dialog-checkbox"],["for","admin",1,"dialog-labels"],["id","admin","name","admin","formControlName","admin",3,"binary"],[1,"dialog-buttons"],["label","Cancelar","severity","secondary",3,"click"],[3,"click","label","loading"],[1,"header"],["label","Nuevo familiar",3,"onClick"],["styleClass","pi pi-search"],["type","text","pInputText","","placeholder","Buscar","pSize","small",3,"ngModelChange","input","ngModel"],[1,"border-bottom","item-list"],[1,"item-info"],["width","3rem","height","1rem","shape","circle","size","2rem"],["height","1rem",3,"width"],[1,"item-controls"],["icon","pi pi-pencil","disabled","true","rounded","true"],["icon","pi pi-trash","disabled","true","severity","danger","rounded","true"],["shape","circle",3,"image"],["shape","circle",3,"label"],[1,"pi","pi-verified",2,"color","green"],["icon","pi pi-pencil","rounded","true",3,"onClick"],["icon","pi pi-trash","severity","danger","rounded","true",3,"onClick"],[1,"grid-container"],[3,"style"],["icon","pi pi-pencil","disabled","true","label","Editar","rounded","true","size","small"],["icon","pi pi-trash","disabled","true","label","Eliminar","severity","danger","rounded","true","size","small"],["icon","pi pi-pencil","label","Editar","rounded","true","size","small",3,"onClick"],["icon","pi pi-trash","label","Eliminar","severity","danger","rounded","true","size","small",3,"onClick"]],template:function(i,n){if(i&1){let t=F();a(0,"p-dataview",4,0),b(2,ki,8,1,"ng-template",null,1,j)(4,Ti,2,1,"ng-template",null,2,j)(6,Pi,3,1,"ng-template",null,3,j),r(),a(8,"p-dialog",5),Y("visibleChange",function(m){return u(t),Z(n.dialogFormVisible,m)||(n.dialogFormVisible=m),h(m)}),a(9,"form",6)(10,"span",7),_(11,"Ingresa la informaci\xF3n solicitada"),r(),a(12,"div",8)(13,"label",9),_(14,"Nombre(s)"),r(),a(15,"div",10),p(16,"input",11),b(17,zi,2,0,"small",12),r()(),a(18,"div",8)(19,"label",13),_(20,"Apellidos"),r(),a(21,"div",10),p(22,"input",14),b(23,Li,2,0,"small",12),r()(),a(24,"div",15)(25,"label",16),_(26,"\xBFEs administrador?"),r(),p(27,"p-checkbox",17),r(),a(28,"div",18)(29,"p-button",19),g("click",function(){return u(t),h(n.cancelDialog())}),r(),a(30,"p-button",20),g("click",function(){return u(t),h(n.submitDialog())}),r()()()(),p(31,"p-confirmPopup")}i&2&&(d("value",n.family$())("layout",n.layout),l(8),f(x(19,yi)),U("header",n.dialogIsNew?"Nuevo familiar":"Editar familiar"),d("modal",!0),X("visible",n.dialogFormVisible),l(),d("formGroup",n.familyFg),l(7),v(n.familyFg.controls.nombre.invalid&&n.familyFg.controls.nombre.touched?"ng-invalid ng-dirty":""),l(),y(n.familyFg.controls.nombre.getError("required")&&n.familyFg.controls.nombre.touched?17:-1),l(5),v(n.familyFg.controls.apellidos.invalid&&n.familyFg.controls.apellidos.touched?"ng-invalid ng-dirty":""),l(),y(n.familyFg.controls.apellidos.getError("required")&&n.familyFg.controls.apellidos.touched?23:-1),l(4),d("binary",!0),l(3),U("label",n.dialogIsNew?"Agregar":"Modificar"),d("loading",n.loading$()))},dependencies:[Ge,He,Re,Me,we,je,qe,Qe,Ae,Ze,Xe,Le,Pe,De,Ie,Ee,Ve,Oe,ze,Ne,Be,Ue,Ke,Je,ti,R],styles:[".header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;align-items:center}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid var(--p-content-border-color)}h4[_ngcontent-%COMP%]{margin:0}.item-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1rem}.item-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.item-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:.5rem}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.dialog-subtitle[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.5rem}.dialog-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.dialog-checkbox[_ngcontent-%COMP%]{display:flex;gap:1rem}.dialog-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:1rem}@media (max-width: 1000px){.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}}@media (min-width: 1001px){.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}}"]})};export{oi as FamilyComponent};
