import{a as ii,b as ti}from"./chunk-KP75PTTL.js";import{e as $e,f as Oe}from"./chunk-3BP7LNNU.js";import{a as Xe,c as ei}from"./chunk-6C4JQE7E.js";import"./chunk-C6BMHPL2.js";import{b as we}from"./chunk-FFMQ4UJF.js";import{a as Te,b as Ee}from"./chunk-2PGQOPBO.js";import{d as He,e as Ue,f as Je,g as Ke,j as Ye}from"./chunk-2KINZDOW.js";import{a as Ze}from"./chunk-JZLADJGY.js";import{a as Ie}from"./chunk-WC4L7W2I.js";import"./chunk-DX3I3GLX.js";import{a as De,b as Ne,c as G,d as Be,e as Pe,f as ze,g as Ae,h as I,i as Le,j as qe,l as je,m as Qe,o as Re,p as Ge,q as We}from"./chunk-TWZ472ZY.js";import"./chunk-W6J27XCB.js";import{D as Fe,o as ve}from"./chunk-U7IMLVNQ.js";import{M as ge,N as xe,T as te,V as ye,Z as Ce,_ as R,ba as ke,da as Me,ga as Se,ma as Ve}from"./chunk-XEBEUHT2.js";import"./chunk-4YRY4IP2.js";import{$b as q,Ab as F,Bb as g,Cb as c,Fb as K,Hb as X,Hc as ue,Ib as de,Jb as z,Kb as A,Kc as he,Mb as x,Mc as _e,Nc as be,Pb as Z,Qb as Y,Qc as fe,Rb as ee,Sb as ie,Tb as L,Ub as S,Va as l,Vb as y,W as ne,Wb as pe,X as oe,Y as ae,ac as j,ba as C,cb as V,db as P,dc as Q,eb as se,fa as M,ga as re,hb as m,jb as k,kb as d,na as le,nb as f,oa as h,ob as v,pa as _,qa as ce,qb as b,qc as w,ra as E,rb as $,rc as me,sb as O,tb as D,ub as r,va as B,vb as a,wb as p,xb as U,yb as J}from"./chunk-UK2LV4O3.js";import{e as N}from"./chunk-ACKELEN3.js";var oi=(()=>{class e extends Se{static \u0275fac=(()=>{let i;return function(t){return(i||(i=E(e)))(t||e)}})();static \u0275cmp=M({type:e,selectors:[["MinusIcon"]],standalone:!0,features:[P,S],decls:2,vars:5,consts:[["width","14","height","14","viewBox","0 0 14 14","fill","none","xmlns","http://www.w3.org/2000/svg"],["d","M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z","fill","currentColor"]],template:function(o,t){o&1&&(ce(),r(0,"svg",0),p(1,"path",1),a()),o&2&&(v(t.getClassNames()),k("aria-label",t.ariaLabel)("aria-hidden",t.ariaHidden)("role",t.role))},encapsulation:2})}return e})();var si=({dt:e})=>`
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
`,di={root:({instance:e,props:n})=>["p-checkbox p-component",{"p-checkbox-checked":e.checked,"p-disabled":n.disabled,"p-invalid":n.invalid,"p-variant-filled":n.variant?n.variant==="filled":e.config.inputStyle==="filled"||e.config.inputVariant==="filled"}],box:"p-checkbox-box",input:"p-checkbox-input",icon:"p-checkbox-icon"},ai=(()=>{class e extends ke{name="checkbox";theme=si;classes=di;static \u0275fac=(()=>{let i;return function(t){return(i||(i=E(e)))(t||e)}})();static \u0275prov=oe({token:e,factory:e.\u0275fac})}return e})();var pi=["checkboxicon"],mi=["input"],ui=()=>({"p-checkbox-input":!0}),hi=e=>({checked:e,class:"p-checkbox-icon"});function _i(e,n){if(e&1&&p(0,"span",8),e&2){let i=c(3);d("ngClass",i.checkboxIcon),k("data-pc-section","icon")}}function bi(e,n){e&1&&p(0,"CheckIcon",9),e&2&&(d("styleClass","p-checkbox-icon"),k("data-pc-section","icon"))}function fi(e,n){if(e&1&&(U(0),m(1,_i,1,2,"span",7)(2,bi,1,2,"CheckIcon",6),J()),e&2){let i=c(2);l(),d("ngIf",i.checkboxIcon),l(),d("ngIf",!i.checkboxIcon)}}function gi(e,n){e&1&&p(0,"MinusIcon",9),e&2&&(d("styleClass","p-checkbox-icon"),k("data-pc-section","icon"))}function xi(e,n){if(e&1&&(U(0),m(1,fi,3,2,"ng-container",4)(2,gi,1,2,"MinusIcon",6),J()),e&2){let i=c();l(),d("ngIf",i.checked),l(),d("ngIf",i._indeterminate())}}function yi(e,n){}function Ci(e,n){e&1&&m(0,yi,0,0,"ng-template")}var ki={provide:De,useExisting:ne(()=>W),multi:!0},W=(()=>{class e extends Me{value;name;disabled;binary;ariaLabelledBy;ariaLabel;tabindex;inputId;style;inputStyle;styleClass;inputClass;indeterminate=!1;size;formControl;checkboxIcon;readonly;required;autofocus;trueValue=!0;falseValue=!1;variant="outlined";onChange=new B;onFocus=new B;onBlur=new B;inputViewChild;get checked(){return this._indeterminate()?!1:this.binary?this.model===this.trueValue:xe(this.value,this.model)}get containerClass(){return{"p-checkbox p-component":!0,"p-checkbox-checked p-highlight":this.checked,"p-disabled":this.disabled,"p-variant-filled":this.variant==="filled"||this.config.inputStyle()==="filled"||this.config.inputVariant()==="filled","p-checkbox-sm p-inputfield-sm":this.size==="small","p-checkbox-lg p-inputfield-lg":this.size==="large"}}_indeterminate=V(void 0);checkboxIconTemplate;templates;_checkboxIconTemplate;model;onModelChange=()=>{};onModelTouched=()=>{};focused=!1;_componentStyle=C(ai);ngAfterContentInit(){this.templates.forEach(i=>{switch(i.getType()){case"icon":this._checkboxIconTemplate=i.template;break;case"checkboxicon":this._checkboxIconTemplate=i.template;break}})}ngOnChanges(i){super.ngOnChanges(i),i.indeterminate&&this._indeterminate.set(i.indeterminate.currentValue)}updateModel(i){let o,t=this.injector.get(Be,null,{optional:!0,self:!0}),s=t&&!this.formControl?t.value:this.model;this.binary?(o=this._indeterminate()?this.trueValue:this.checked?this.falseValue:this.trueValue,this.model=o,this.onModelChange(o)):(this.checked||this._indeterminate()?o=s.filter(u=>!ge(u,this.value)):o=s?[...s,this.value]:[this.value],this.onModelChange(o),this.model=o,this.formControl&&this.formControl.setValue(o)),this._indeterminate()&&this._indeterminate.set(!1),this.onChange.emit({checked:o,originalEvent:i})}handleChange(i){this.readonly||this.updateModel(i)}onInputFocus(i){this.focused=!0,this.onFocus.emit(i)}onInputBlur(i){this.focused=!1,this.onBlur.emit(i),this.onModelTouched()}focus(){this.inputViewChild.nativeElement.focus()}writeValue(i){this.model=i,this.cd.markForCheck()}registerOnChange(i){this.onModelChange=i}registerOnTouched(i){this.onModelTouched=i}setDisabledState(i){setTimeout(()=>{this.disabled=i,this.cd.markForCheck()})}static \u0275fac=(()=>{let i;return function(t){return(i||(i=E(e)))(t||e)}})();static \u0275cmp=M({type:e,selectors:[["p-checkbox"],["p-checkBox"],["p-check-box"]],contentQueries:function(o,t,s){if(o&1&&(X(s,pi,4),X(s,Ce,4)),o&2){let u;z(u=A())&&(t.checkboxIconTemplate=u.first),z(u=A())&&(t.templates=u)}},viewQuery:function(o,t){if(o&1&&de(mi,5),o&2){let s;z(s=A())&&(t.inputViewChild=s.first)}},inputs:{value:"value",name:"name",disabled:[2,"disabled","disabled",w],binary:[2,"binary","binary",w],ariaLabelledBy:"ariaLabelledBy",ariaLabel:"ariaLabel",tabindex:[2,"tabindex","tabindex",me],inputId:"inputId",style:"style",inputStyle:"inputStyle",styleClass:"styleClass",inputClass:"inputClass",indeterminate:[2,"indeterminate","indeterminate",w],size:"size",formControl:"formControl",checkboxIcon:"checkboxIcon",readonly:[2,"readonly","readonly",w],required:[2,"required","required",w],autofocus:[2,"autofocus","autofocus",w],trueValue:"trueValue",falseValue:"falseValue",variant:"variant"},outputs:{onChange:"onChange",onFocus:"onFocus",onBlur:"onBlur"},standalone:!0,features:[L([ki,ai]),se,P,le,S],decls:6,vars:29,consts:[["input",""],[3,"ngClass"],["type","checkbox",3,"focus","blur","change","value","checked","disabled","readonly","ngClass"],[1,"p-checkbox-box"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"styleClass",4,"ngIf"],["class","p-checkbox-icon",3,"ngClass",4,"ngIf"],[1,"p-checkbox-icon",3,"ngClass"],[3,"styleClass"]],template:function(o,t){if(o&1){let s=F();r(0,"div",1)(1,"input",2,0),g("focus",function(T){return h(s),_(t.onInputFocus(T))})("blur",function(T){return h(s),_(t.onInputBlur(T))})("change",function(T){return h(s),_(t.handleChange(T))}),a(),r(3,"div",3),m(4,xi,3,2,"ng-container",4)(5,Ci,1,0,null,5),a()()}o&2&&(f(t.style),v(t.styleClass),d("ngClass",t.containerClass),k("data-p-highlight",t.checked)("data-p-checked",t.checked)("data-p-disabled",t.disabled),l(),f(t.inputStyle),v(t.inputClass),d("value",t.value)("checked",t.checked)("disabled",t.disabled)("readonly",t.readonly)("ngClass",y(26,ui)),k("id",t.inputId)("name",t.name)("tabindex",t.tabindex)("required",t.required)("aria-labelledby",t.ariaLabelledBy)("aria-label",t.ariaLabel),l(3),d("ngIf",!t.checkboxIconTemplate&&!t._checkboxIconTemplate),l(),d("ngTemplateOutlet",t.checkboxIconTemplate||t._checkboxIconTemplate)("ngTemplateOutletContext",pe(27,hi,t.checked)))},dependencies:[fe,ue,he,_e,Ie,oi,R],encapsulation:2,changeDetection:0})}return e})(),ri=(()=>{class e{static \u0275fac=function(o){return new(o||e)};static \u0275mod=re({type:e});static \u0275inj=ae({imports:[W,R,R]})}return e})();var Fi=()=>({width:"25rem"}),H=()=>({width:"30px",height:"30px"}),ci=()=>({height:"100%"});function wi(e,n){if(e&1){let i=F();r(0,"p-button",25),g("onClick",function(){h(i);let t=c(2);return t.dialogFormVisible=!0,_(t.dialogIsNew=!0)}),a()}}function Mi(e,n){if(e&1){let i=F();r(0,"div",21)(1,"h3"),x(2,"Familiares registrados"),a(),m(3,wi,1,0,"p-button",22),q(4,"async"),a(),r(5,"div",21)(6,"p-iconfield"),p(7,"p-inputicon",23),r(8,"input",24),ie("ngModelChange",function(t){h(i);let s=c();return ee(s.filter,t)||(s.filter=t),_(t)}),g("input",function(){h(i);let t=c();return _(t.onFilter())}),a()()()}if(e&2){let i=c();l(3),b(j(4,2,i.isAdmin)?3:-1),l(5),Y("ngModel",i.filter)}}function Si(e,n){if(e&1&&(r(0,"div",26)(1,"div",27),p(2,"p-skeleton",28)(3,"p-skeleton",29),a(),r(4,"div",30),p(5,"p-button",31)(6,"p-button",32),a()()),e&2){let i=c(3);l(3),d("width",i._utils.randomNumberInt(6,15).toString()+"rem"),l(2),f(y(5,H)),l(),f(y(6,H))}}function Ii(e,n){if(e&1&&O(0,Si,7,7,"div",26,$),e&2){let i=c(2);D(i._utils.arrayOf(10))}}function Ti(e,n){if(e&1&&p(0,"p-avatar",33),e&2){let i=c().$implicit;d("image",i.foto)}}function Ei(e,n){if(e&1&&p(0,"p-avatar",34),e&2){let i=c().$implicit,o=c(3);d("label",o.getIniciales(i))}}function Vi(e,n){e&1&&p(0,"i",35)}function $i(e,n){if(e&1){let i=F();r(0,"div",30)(1,"p-button",36),g("onClick",function(){h(i);let t=c().$implicit,s=c(3);return _(s.openEditFamily(t))}),a(),r(2,"p-button",37),g("onClick",function(t){h(i);let s=c().$implicit,u=c(3);return _(u.confirmDelete(t,s))}),a()()}e&2&&(l(),f(y(4,H)),l(),f(y(5,H)))}function Oi(e,n){if(e&1&&(r(0,"div",26)(1,"div",27),m(2,Ti,1,1,"p-avatar",33)(3,Ei,1,1,"p-avatar",34),r(4,"h4"),x(5),a(),m(6,Vi,1,0,"i",35),a(),m(7,$i,3,6,"div",30),q(8,"async"),a()),e&2){let i=n.$implicit,o=c(3);l(2),b(i.foto?2:3),l(3),Z("",i.nombres," ",i.apellidos,""),l(),b(i.admin?6:-1),l(),b(j(8,5,o.isAdmin)?7:-1)}}function Di(e,n){if(e&1&&O(0,Oi,9,7,"div",26,$),e&2){let i=c().$implicit;D(i)}}function Ni(e,n){if(e&1&&m(0,Ii,2,0)(1,Di,2,0),e&2){let i=c();b(i.loading$()?0:1)}}function Bi(e,n){if(e&1&&(r(0,"p-card")(1,"div",27),p(2,"p-skeleton",28)(3,"p-skeleton",29),a(),r(4,"div",30),p(5,"p-button",40)(6,"p-button",41),a()()),e&2){let i=c(3);f(y(3,ci)),l(3),d("width",i._utils.randomNumberInt(6,15).toString()+"rem")}}function Pi(e,n){if(e&1&&O(0,Bi,7,4,"p-card",39,$),e&2){let i=c(2);D(i._utils.arrayOf(10))}}function zi(e,n){if(e&1&&p(0,"p-avatar",33),e&2){let i=c().$implicit;d("image",i.foto)}}function Ai(e,n){if(e&1&&p(0,"p-avatar",34),e&2){let i=c().$implicit,o=c(3);d("label",o.getIniciales(i))}}function Li(e,n){e&1&&p(0,"i",35)}function qi(e,n){if(e&1){let i=F();r(0,"div",30)(1,"p-button",42),g("onClick",function(){h(i);let t=c().$implicit,s=c(3);return _(s.openEditFamily(t))}),a(),r(2,"p-button",43),g("onClick",function(t){h(i);let s=c().$implicit,u=c(3);return _(u.confirmDelete(t,s))}),a()()}}function ji(e,n){if(e&1&&(r(0,"p-card")(1,"div",27),m(2,zi,1,1,"p-avatar",33)(3,Ai,1,1,"p-avatar",34),r(4,"h4"),x(5),a(),m(6,Li,1,0,"i",35),a(),m(7,qi,3,0,"div",30),q(8,"async"),a()),e&2){let i=n.$implicit,o=c(3);f(y(9,ci)),l(2),b(i.foto?2:3),l(3),Z("",i.nombres," ",i.apellidos,""),l(),b(i.admin?6:-1),l(),b(j(8,7,o.isAdmin)?7:-1)}}function Qi(e,n){if(e&1&&O(0,ji,9,10,"p-card",39,$),e&2){let i=c().$implicit;D(i)}}function Ri(e,n){if(e&1&&(r(0,"div",38),m(1,Pi,2,0)(2,Qi,2,0),a()),e&2){let i=c();l(),b(i.loading$()?1:2)}}function Gi(e,n){e&1&&(r(0,"small",12),x(1,"Este campo es requerido"),a())}function Wi(e,n){e&1&&(r(0,"small",12),x(1,"Este campo es requerido"),a())}var li=class e{_deviceService=C(Ye);_messageService=C(ye);_familyService=C(Fe);_confirmationService=C(te);_utils=C(ve);family$=V([]);loading$=this._familyService.loading$;filter="";subscription;layout="list";dialogFormVisible=!1;dialogIsNew=!1;isAdmin=C(we).isAdmin();familyFg=new Ae({id:new I(null),nombre:new I("",[G.required]),apellidos:new I("",[G.required]),admin:new I(!1,[G.required]),foto:new I(null)});ngOnInit(){return N(this,null,function*(){try{this.family$=yield this._familyService.getFamilyList()}catch(n){this._messageService.add({severity:"error",summary:"Ocurrio un error al obtener la lista de familiares.",detail:n.message,sticky:!0})}this.subscription=this._deviceService.isMobile$.subscribe(n=>{this.layout=n?"list":"grid"})})}ngOnDestroy(){this.subscription&&this.subscription.unsubscribe()}getIniciales(n){return n.nombres[0]+n.apellidos[0]}onFilter(){this.family$=V(this._familyService.getFamilyList()().filter(n=>n.nombres.toLowerCase().includes(this.filter.toLowerCase())||n.apellidos.toLowerCase().includes(this.filter.toLowerCase())))}openEditFamily(n){this.familyFg.patchValue({id:n.id,nombre:n.nombres,apellidos:n.apellidos,admin:n.admin,foto:n.foto}),this.dialogIsNew=!1,this.dialogFormVisible=!0}submitDialog(){return N(this,null,function*(){if(this.familyFg.markAllAsTouched(),this.familyFg.valid){if(this.dialogIsNew)try{yield this._familyService.addFamily({nombres:this.familyFg.value.nombre.trim(),apellidos:this.familyFg.value.apellidos.trim(),admin:this.familyFg.value.admin,foto:this.familyFg.value.foto})}catch(n){this._messageService.add({severity:"error",summary:"Ocurrio un error al agregar el familiar.",detail:n.message,sticky:!0})}else try{yield this._familyService.updateFamily({id:this.familyFg.value.id,nombres:this.familyFg.value.nombre.trim(),apellidos:this.familyFg.value.apellidos.trim(),admin:this.familyFg.value.admin,foto:this.familyFg.value.foto})}catch(n){this._messageService.add({severity:"error",summary:"Ocurrio un error al actualizar el familiar.",detail:n.message,sticky:!0})}this.familyFg.reset({nombre:"",apellidos:"",admin:!1}),this.dialogFormVisible=!1}})}deleteFamily(n){return N(this,null,function*(){try{yield this._familyService.deleteFamily(n)}catch(i){this._messageService.add({severity:"error",summary:"Ocurrio un error al eliminar el familiar.",detail:i.message,sticky:!0})}})}confirmDelete(n,i){this._confirmationService.confirm({target:n.target,message:`\xBFDesea eliminar a ${this._utils.addElipsis(i.nombres,15)}?`,icon:"pi pi-info-circle",rejectButtonProps:{label:"Cancelar",severity:"secondary",outlined:!0},acceptButtonProps:{label:"Si, eliminar",severity:"danger"},accept:()=>{this.deleteFamily(i.id)},reject:()=>{}})}cancelDialog(){this.familyFg.reset({nombre:"",apellidos:"",admin:!1}),this.dialogFormVisible=!1}static \u0275fac=function(i){return new(i||e)};static \u0275cmp=M({type:e,selectors:[["app-family"]],standalone:!0,features:[L([te]),S],decls:32,vars:20,consts:[["dv",""],["header",""],["list",""],["grid",""],["emptyMessage","No hay resultados para mostrar",3,"value","layout"],["closable","false",3,"visibleChange","header","modal","visible"],[1,"dialog-content",3,"formGroup"],[1,"dialog-subtitle"],[1,"dialog-input"],["for","nombre",1,"dialog-labels"],[2,"display","flex","flex-direction","column"],["pInputText","","id","nombre","autocomplete","off","formControlName","nombre"],[1,"label-error"],["for","lastname",1,"dialog-labels"],["pInputText","","id","lastname","autocomplete","off","formControlName","apellidos"],[1,"dialog-checkbox"],["for","admin",1,"dialog-labels"],["id","admin","name","admin","formControlName","admin",3,"binary"],[1,"dialog-buttons"],["label","Cancelar","severity","secondary",3,"click"],[3,"click","label","loading"],[1,"header"],["label","Nuevo familiar"],["styleClass","pi pi-search"],["type","text","pInputText","","placeholder","Buscar","pSize","small",3,"ngModelChange","input","ngModel"],["label","Nuevo familiar",3,"onClick"],[1,"border-bottom","item-list"],[1,"item-info"],["width","3rem","height","1rem","shape","circle","size","2rem"],["height","1rem",3,"width"],[1,"item-controls"],["icon","pi pi-pencil","disabled","true","rounded","true"],["icon","pi pi-trash","disabled","true","severity","danger","rounded","true"],["shape","circle",3,"image"],["shape","circle",3,"label"],[1,"pi","pi-verified",2,"color","green"],["icon","pi pi-pencil","rounded","true",3,"onClick"],["icon","pi pi-trash","severity","danger","rounded","true",3,"onClick"],[1,"grid-container"],[3,"style"],["icon","pi pi-pencil","disabled","true","label","Editar","rounded","true","size","small"],["icon","pi pi-trash","disabled","true","label","Eliminar","severity","danger","rounded","true","size","small"],["icon","pi pi-pencil","label","Editar","rounded","true","size","small",3,"onClick"],["icon","pi pi-trash","label","Eliminar","severity","danger","rounded","true","size","small",3,"onClick"]],template:function(i,o){if(i&1){let t=F();r(0,"p-dataview",4,0),m(2,Mi,9,4,"ng-template",null,1,Q)(4,Ni,2,1,"ng-template",null,2,Q)(6,Ri,3,1,"ng-template",null,3,Q),a(),r(8,"p-dialog",5),ie("visibleChange",function(u){return h(t),ee(o.dialogFormVisible,u)||(o.dialogFormVisible=u),_(u)}),r(9,"form",6)(10,"span",7),x(11,"Ingresa la informaci\xF3n solicitada"),a(),r(12,"div",8)(13,"label",9),x(14,"Nombre(s)"),a(),r(15,"div",10),p(16,"input",11),m(17,Gi,2,0,"small",12),a()(),r(18,"div",8)(19,"label",13),x(20,"Apellidos"),a(),r(21,"div",10),p(22,"input",14),m(23,Wi,2,0,"small",12),a()(),r(24,"div",15)(25,"label",16),x(26,"\xBFEs administrador?"),a(),p(27,"p-checkbox",17),a(),r(28,"div",18)(29,"p-button",19),g("click",function(){return h(t),_(o.cancelDialog())}),a(),r(30,"p-button",20),g("click",function(){return h(t),_(o.submitDialog())}),a()()()(),p(31,"p-confirmPopup")}i&2&&(d("value",o.family$())("layout",o.layout),l(8),f(y(19,Fi)),K("header",o.dialogIsNew?"Nuevo familiar":"Editar familiar"),d("modal",!0),Y("visible",o.dialogFormVisible),l(),d("formGroup",o.familyFg),l(7),v(o.familyFg.controls.nombre.invalid&&o.familyFg.controls.nombre.touched?"ng-invalid ng-dirty":""),l(),b(o.familyFg.controls.nombre.getError("required")&&o.familyFg.controls.nombre.touched?17:-1),l(5),v(o.familyFg.controls.apellidos.invalid&&o.familyFg.controls.apellidos.touched?"ng-invalid ng-dirty":""),l(),b(o.familyFg.controls.apellidos.getError("required")&&o.familyFg.controls.apellidos.touched?23:-1),l(4),d("binary",!0),l(3),K("label",o.dialogIsNew?"Agregar":"Modificar"),d("loading",o.loading$()))},dependencies:[Ze,Ve,Xe,Ee,Te,Ue,He,Ke,Je,ti,ii,We,Re,qe,Ne,Pe,ze,Le,Ge,je,Qe,ei,Oe,$e,ri,W,be],styles:[".header[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:space-between;align-items:center}.header[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:1rem;align-items:center}.border-bottom[_ngcontent-%COMP%]{border-bottom:1px solid var(--p-content-border-color)}h4[_ngcontent-%COMP%]{margin:0}.item-list[_ngcontent-%COMP%]{display:flex;justify-content:space-between;padding:1rem}.item-info[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center;gap:.5rem}.item-controls[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;align-items:center;gap:.5rem}.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}.dialog-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.dialog-subtitle[_ngcontent-%COMP%]{font-weight:700;margin-bottom:.5rem}.dialog-input[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.dialog-checkbox[_ngcontent-%COMP%]{display:flex;gap:1rem}.dialog-buttons[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;gap:1rem}@media (max-width: 1000px){.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}}@media (min-width: 1001px){.grid-container[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:10px;grid-row-gap:10px;background-color:var(--background-color);padding:10px}}"]})};export{li as FamilyComponent};
