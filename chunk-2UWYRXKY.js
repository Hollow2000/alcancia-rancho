import{I as Ve,ba as De,da as be}from"./chunk-CK7WZHKF.js";import{Eb as m,Ha as o,Ma as Q,Pa as E,Q as k,Qa as c,R as A,Ra as _e,S as G,T as y,Ub as ye,V as g,Y,Za as F,_b as Ce,ac as j,ba as C,ca as u,cc as x,dc as h,f as pe,hc as ee,ia as T,ma as R,mb as w,n as ge,qa as V,s as me,ua as K,y as ve}from"./chunk-O2BEBOXS.js";import{a as l,b as d}from"./chunk-ACKELEN3.js";var Oe=(()=>{class i{constructor(t,n){this._renderer=t,this._elementRef=n,this.onChange=r=>{},this.onTouched=()=>{}}setProperty(t,n){this._renderer.setProperty(this._elementRef.nativeElement,t,n)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}static{this.\u0275fac=function(n){return new(n||i)(o(Q),o(K))}}static{this.\u0275dir=u({type:i})}}return i})(),st=(()=>{class i extends Oe{static{this.\u0275fac=(()=>{let t;return function(r){return(t||(t=R(i)))(r||i)}})()}static{this.\u0275dir=u({type:i,features:[c]})}}return i})(),ae=new g("");var ot={provide:ae,useExisting:A(()=>Pe),multi:!0};function at(){let i=ee()?ee().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var lt=new g(""),Pe=(()=>{class i extends Oe{constructor(t,n,r){super(t,n),this._compositionMode=r,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!at())}writeValue(t){let n=t??"";this.setProperty("value",n)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}static{this.\u0275fac=function(n){return new(n||i)(o(Q),o(K),o(lt,8))}}static{this.\u0275dir=u({type:i,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(n,r){n&1&&w("input",function(a){return r._handleInput(a.target.value)})("blur",function(){return r.onTouched()})("compositionstart",function(){return r._compositionStart()})("compositionend",function(a){return r._compositionEnd(a.target.value)})},features:[m([ot]),c]})}}return i})();function f(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function ke(i){return i!=null&&typeof i.length=="number"}var le=new g(""),ue=new g(""),ut=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,Me=class{static min(e){return dt(e)}static max(e){return ct(e)}static required(e){return ht(e)}static requiredTrue(e){return ft(e)}static email(e){return pt(e)}static minLength(e){return gt(e)}static maxLength(e){return mt(e)}static pattern(e){return vt(e)}static nullValidator(e){return Ge(e)}static compose(e){return $e(e)}static composeAsync(e){return Le(e)}};function dt(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t<i?{min:{min:i,actual:e.value}}:null}}function ct(i){return e=>{if(f(e.value)||f(i))return null;let t=parseFloat(e.value);return!isNaN(t)&&t>i?{max:{max:i,actual:e.value}}:null}}function ht(i){return f(i.value)?{required:!0}:null}function ft(i){return i.value===!0?null:{required:!0}}function pt(i){return f(i.value)||ut.test(i.value)?null:{email:!0}}function gt(i){return e=>f(e.value)||!ke(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function mt(i){return e=>ke(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function vt(i){if(!i)return Ge;let e,t;return typeof i=="string"?(t="",i.charAt(0)!=="^"&&(t+="^"),t+=i,i.charAt(i.length-1)!=="$"&&(t+="$"),e=new RegExp(t)):(t=i.toString(),e=i),n=>{if(f(n.value))return null;let r=n.value;return e.test(r)?null:{pattern:{requiredPattern:t,actualValue:r}}}}function Ge(i){return null}function Te(i){return i!=null}function Re(i){return ye(i)?ge(i):i}function je(i){let e={};return i.forEach(t=>{e=t!=null?l(l({},e),t):e}),Object.keys(e).length===0?null:e}function Be(i,e){return e.map(t=>t(i))}function _t(i){return!i.validate}function Ue(i){return i.map(e=>_t(e)?e:t=>e.validate(t))}function $e(i){if(!i)return null;let e=i.filter(Te);return e.length==0?null:function(t){return je(Be(t,e))}}function He(i){return i!=null?$e(Ue(i)):null}function Le(i){if(!i)return null;let e=i.filter(Te);return e.length==0?null:function(t){let n=Be(t,e).map(Re);return ve(n).pipe(me(je))}}function We(i){return i!=null?Le(Ue(i)):null}function Ae(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ze(i){return i._rawValidators}function qe(i){return i._rawAsyncValidators}function te(i){return i?Array.isArray(i)?i:[i]:[]}function U(i,e){return Array.isArray(i)?i.includes(e):i===e}function Ee(i,e){let t=te(e);return te(i).forEach(r=>{U(t,r)||t.push(r)}),t}function Fe(i,e){return te(e).filter(t=>!U(i,t))}var $=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=He(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=We(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,t){return this.control?this.control.hasError(e,t):!1}getError(e,t){return this.control?this.control.getError(e,t):null}},v=class extends ${get formDirective(){return null}get path(){return null}},_=class extends ${constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},H=class{constructor(e){this._cd=e}get isTouched(){return this._cd?.control?._touched?.(),!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return this._cd?.control?._pristine?.(),!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return this._cd?.control?._status?.(),!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return this._cd?._submitted?.(),!!this._cd?.submitted}},yt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ri=d(l({},yt),{"[class.ng-submitted]":"isSubmitted"}),si=(()=>{class i extends H{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(_,2))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(n,r){n&2&&F("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)},features:[c]})}}return i})(),oi=(()=>{class i extends H{constructor(t){super(t)}static{this.\u0275fac=function(n){return new(n||i)(o(v,10))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(n,r){n&2&&F("ng-untouched",r.isUntouched)("ng-touched",r.isTouched)("ng-pristine",r.isPristine)("ng-dirty",r.isDirty)("ng-valid",r.isValid)("ng-invalid",r.isInvalid)("ng-pending",r.isPending)("ng-submitted",r.isSubmitted)},features:[c]})}}return i})();var I="VALID",B="INVALID",D="PENDING",S="DISABLED",p=class{},L=class extends p{constructor(e,t){super(),this.value=e,this.source=t}},N=class extends p{constructor(e,t){super(),this.pristine=e,this.source=t}},O=class extends p{constructor(e,t){super(),this.touched=e,this.source=t}},b=class extends p{constructor(e,t){super(),this.status=e,this.source=t}},ie=class extends p{constructor(e){super(),this.source=e}},ne=class extends p{constructor(e){super(),this.source=e}};function de(i){return(Z(i)?i.validators:i)||null}function Ct(i){return Array.isArray(i)?He(i):i||null}function ce(i,e){return(Z(e)?e.asyncValidators:i)||null}function Vt(i){return Array.isArray(i)?We(i):i||null}function Z(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function Ze(i,e,t){let n=i.controls;if(!(e?Object.keys(n):n).length)throw new k(1e3,"");if(!n[t])throw new k(1001,"")}function Je(i,e,t){i._forEachChild((n,r)=>{if(t[r]===void 0)throw new k(1002,"")})}var M=class{constructor(e,t){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=null,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this._status=x(()=>this.statusReactive()),this.statusReactive=E(void 0),this._pristine=x(()=>this.pristineReactive()),this.pristineReactive=E(!0),this._touched=x(()=>this.touchedReactive()),this.touchedReactive=E(!1),this._events=new pe,this.events=this._events.asObservable(),this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(t)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get status(){return h(this.statusReactive)}set status(e){h(()=>this.statusReactive.set(e))}get valid(){return this.status===I}get invalid(){return this.status===B}get pending(){return this.status==D}get disabled(){return this.status===S}get enabled(){return this.status!==S}get pristine(){return h(this.pristineReactive)}set pristine(e){h(()=>this.pristineReactive.set(e))}get dirty(){return!this.pristine}get touched(){return h(this.touchedReactive)}set touched(e){h(()=>this.touchedReactive.set(e))}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(Ee(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(Ee(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Fe(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Fe(e,this._rawAsyncValidators))}hasValidator(e){return U(this._rawValidators,e)}hasAsyncValidator(e){return U(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){let t=this.touched===!1;this.touched=!0;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsTouched(d(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new O(!0,n))}markAllAsTouched(e={}){this.markAsTouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:this}),this._forEachChild(t=>t.markAllAsTouched(e))}markAsUntouched(e={}){let t=this.touched===!0;this.touched=!1,this._pendingTouched=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsUntouched({onlySelf:!0,emitEvent:e.emitEvent,sourceControl:n})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,n),t&&e.emitEvent!==!1&&this._events.next(new O(!1,n))}markAsDirty(e={}){let t=this.pristine===!0;this.pristine=!1;let n=e.sourceControl??this;this._parent&&!e.onlySelf&&this._parent.markAsDirty(d(l({},e),{sourceControl:n})),t&&e.emitEvent!==!1&&this._events.next(new N(!1,n))}markAsPristine(e={}){let t=this.pristine===!1;this.pristine=!0,this._pendingDirty=!1;let n=e.sourceControl??this;this._forEachChild(r=>{r.markAsPristine({onlySelf:!0,emitEvent:e.emitEvent})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e,n),t&&e.emitEvent!==!1&&this._events.next(new N(!0,n))}markAsPending(e={}){this.status=D;let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new b(this.status,t)),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.markAsPending(d(l({},e),{sourceControl:t}))}disable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=S,this.errors=null,this._forEachChild(r=>{r.disable(d(l({},e),{onlySelf:!0}))}),this._updateValue();let n=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L(this.value,n)),this._events.next(new b(this.status,n)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(r=>r(!0))}enable(e={}){let t=this._parentMarkedDirty(e.onlySelf);this.status=I,this._forEachChild(n=>{n.enable(d(l({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(d(l({},e),{skipPristineCheck:t}),this),this._onDisabledChange.forEach(n=>n(!1))}_updateAncestors(e,t){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine({},t),this._parent._updateTouched({},t))}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){if(this._setInitialStatus(),this._updateValue(),this.enabled){let n=this._cancelExistingSubscription();this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===I||this.status===D)&&this._runAsyncValidator(n,e.emitEvent)}let t=e.sourceControl??this;e.emitEvent!==!1&&(this._events.next(new L(this.value,t)),this._events.next(new b(this.status,t)),this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(d(l({},e),{sourceControl:t}))}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(t=>t._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?S:I}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e,t){if(this.asyncValidator){this.status=D,this._hasOwnPendingAsyncValidator={emitEvent:t!==!1};let n=Re(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(r=>{this._hasOwnPendingAsyncValidator=null,this.setErrors(r,{emitEvent:t,shouldHaveEmitted:e})})}}_cancelExistingSubscription(){if(this._asyncValidationSubscription){this._asyncValidationSubscription.unsubscribe();let e=this._hasOwnPendingAsyncValidator?.emitEvent??!1;return this._hasOwnPendingAsyncValidator=null,e}return!1}setErrors(e,t={}){this.errors=e,this._updateControlsErrors(t.emitEvent!==!1,this,t.shouldHaveEmitted)}get(e){let t=e;return t==null||(Array.isArray(t)||(t=t.split(".")),t.length===0)?null:t.reduce((n,r)=>n&&n._find(r),this)}getError(e,t){let n=t?this.get(t):this;return n&&n.errors?n.errors[e]:null}hasError(e,t){return!!this.getError(e,t)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e,t,n){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),(e||n)&&this._events.next(new b(this.status,t)),this._parent&&this._parent._updateControlsErrors(e,t,n)}_initObservables(){this.valueChanges=new V,this.statusChanges=new V}_calculateStatus(){return this._allControlsDisabled()?S:this.errors?B:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(D)?D:this._anyControlsHaveStatus(B)?B:I}_anyControlsHaveStatus(e){return this._anyControls(t=>t.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e,t){let n=!this._anyControlsDirty(),r=this.pristine!==n;this.pristine=n,this._parent&&!e.onlySelf&&this._parent._updatePristine(e,t),r&&this._events.next(new N(this.pristine,t))}_updateTouched(e={},t){this.touched=this._anyControlsTouched(),this._events.next(new O(this.touched,t)),this._parent&&!e.onlySelf&&this._parent._updateTouched(e,t)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){Z(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let t=this._parent&&this._parent.dirty;return!e&&!!t&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ct(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Vt(this._rawAsyncValidators)}},W=class extends M{constructor(e,t,n){super(de(t),ce(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,t){return this.controls[e]?this.controls[e]:(this.controls[e]=t,t.setParent(this),t._registerOnCollectionChange(this._onCollectionChange),t)}addControl(e,t,n={}){this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}removeControl(e,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}setControl(e,t,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],t&&this.registerControl(e,t),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,t={}){Je(this,!0,e),Object.keys(e).forEach(n=>{Ze(this,!0,n),this.controls[n].setValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(Object.keys(e).forEach(n=>{let r=this.controls[n];r&&r.patchValue(e[n],{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e={},t={}){this._forEachChild((n,r)=>{n.reset(e?e[r]:null,{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this._reduceChildren({},(e,t,n)=>(e[n]=t.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(t,n)=>n._syncPendingControls()?!0:t);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(t=>{let n=this.controls[t];n&&e(n,t)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[t,n]of Object.entries(this.controls))if(this.contains(t)&&e(n))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(t,n,r)=>((n.enabled||this.disabled)&&(t[r]=n.value),t))}_reduceChildren(e,t){let n=e;return this._forEachChild((r,s)=>{n=t(n,r,s)}),n}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var re=class extends W{};var J=new g("CallSetDisabledState",{providedIn:"root",factory:()=>X}),X="always";function Xe(i,e){return[...e.path,i]}function se(i,e,t=X){he(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||t==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),bt(i,e),At(i,e),Mt(i,e),Dt(i,e)}function we(i,e,t=!0){let n=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(n),e.valueAccessor.registerOnTouched(n)),q(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function z(i,e){i.forEach(t=>{t.registerOnValidatorChange&&t.registerOnValidatorChange(e)})}function Dt(i,e){if(e.valueAccessor.setDisabledState){let t=n=>{e.valueAccessor.setDisabledState(n)};i.registerOnDisabledChange(t),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(t)})}}function he(i,e){let t=ze(i);e.validator!==null?i.setValidators(Ae(t,e.validator)):typeof t=="function"&&i.setValidators([t]);let n=qe(i);e.asyncValidator!==null?i.setAsyncValidators(Ae(n,e.asyncValidator)):typeof n=="function"&&i.setAsyncValidators([n]);let r=()=>i.updateValueAndValidity();z(e._rawValidators,r),z(e._rawAsyncValidators,r)}function q(i,e){let t=!1;if(i!==null){if(e.validator!==null){let r=ze(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.validator);s.length!==r.length&&(t=!0,i.setValidators(s))}}if(e.asyncValidator!==null){let r=qe(i);if(Array.isArray(r)&&r.length>0){let s=r.filter(a=>a!==e.asyncValidator);s.length!==r.length&&(t=!0,i.setAsyncValidators(s))}}}let n=()=>{};return z(e._rawValidators,n),z(e._rawAsyncValidators,n),t}function bt(i,e){e.valueAccessor.registerOnChange(t=>{i._pendingValue=t,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&Ye(i,e)})}function Mt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&Ye(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function Ye(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function At(i,e){let t=(n,r)=>{e.valueAccessor.writeValue(n),r&&e.viewToModelUpdate(n)};i.registerOnChange(t),e._registerOnDestroy(()=>{i._unregisterOnChange(t)})}function Et(i,e){i==null,he(i,e)}function Ft(i,e){return q(i,e)}function Ke(i,e){if(!i.hasOwnProperty("model"))return!1;let t=i.model;return t.isFirstChange()?!0:!Object.is(e,t.currentValue)}function wt(i){return Object.getPrototypeOf(i.constructor)===st}function xt(i,e){i._syncPendingControls(),e.forEach(t=>{let n=t.control;n.updateOn==="submit"&&n._pendingChange&&(t.viewToModelUpdate(n._pendingValue),n._pendingChange=!1)})}function Qe(i,e){if(!e)return null;Array.isArray(e);let t,n,r;return e.forEach(s=>{s.constructor===Pe?t=s:wt(s)?n=s:r=s}),r||n||t||null}function It(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function xe(i,e){let t=i.indexOf(e);t>-1&&i.splice(t,1)}function Ie(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var P=class extends M{constructor(e=null,t,n){super(de(t),ce(n,t)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(t),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),Z(t)&&(t.nonNullable||t.initialValueIsDefault)&&(Ie(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,t={}){this.value=this._pendingValue=e,this._onChange.length&&t.emitModelToViewChange!==!1&&this._onChange.forEach(n=>n(this.value,t.emitViewToModelChange!==!1)),this.updateValueAndValidity(t)}patchValue(e,t={}){this.setValue(e,t)}reset(e=this.defaultValue,t={}){this._applyFormState(e),this.markAsPristine(t),this.markAsUntouched(t),this.setValue(this.value,t),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){xe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){xe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){Ie(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var St=i=>i instanceof P;var Nt={provide:_,useExisting:A(()=>fe)},Se=Promise.resolve(),fe=(()=>{class i extends _{constructor(t,n,r,s,a,nt){super(),this._changeDetectorRef=a,this.callSetDisabledState=nt,this.control=new P,this._registered=!1,this.name="",this.update=new V,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Qe(this,s)}ngOnChanges(t){if(this._checkForErrors(),!this._registered||"name"in t){if(this._registered&&(this._checkName(),this.formDirective)){let n=t.name.previousValue;this.formDirective.removeControl({name:n,path:this._getPath(n)})}this._setUpControl()}"isDisabled"in t&&this._updateDisabled(t),Ke(t,this.viewModel)&&(this._updateValue(this.model),this.viewModel=this.model)}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}get path(){return this._getPath(this.name)}get formDirective(){return this._parent?this._parent.formDirective:null}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}_setUpControl(){this._setUpdateStrategy(),this._isStandalone()?this._setUpStandalone():this.formDirective.addControl(this),this._registered=!0}_setUpdateStrategy(){this.options&&this.options.updateOn!=null&&(this.control._updateOn=this.options.updateOn)}_isStandalone(){return!this._parent||!!(this.options&&this.options.standalone)}_setUpStandalone(){se(this.control,this,this.callSetDisabledState),this.control.updateValueAndValidity({emitEvent:!1})}_checkForErrors(){this._isStandalone()||this._checkParentType(),this._checkName()}_checkParentType(){}_checkName(){this.options&&this.options.name&&(this.name=this.options.name),!this._isStandalone()&&this.name}_updateValue(t){Se.then(()=>{this.control.setValue(t,{emitViewToModelChange:!1}),this._changeDetectorRef?.markForCheck()})}_updateDisabled(t){let n=t.isDisabled.currentValue,r=n!==0&&j(n);Se.then(()=>{r&&!this.control.disabled?this.control.disable():!r&&this.control.disabled&&this.control.enable(),this._changeDetectorRef?.markForCheck()})}_getPath(t){return this._parent?Xe(t,this._parent):[t]}static{this.\u0275fac=function(n){return new(n||i)(o(v,9),o(le,10),o(ue,10),o(ae,10),o(Ce,8),o(J,8))}}static{this.\u0275dir=u({type:i,selectors:[["","ngModel","",3,"formControlName","",3,"formControl",""]],inputs:{name:"name",isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"],options:[0,"ngModelOptions","options"]},outputs:{update:"ngModelChange"},exportAs:["ngModel"],features:[m([Nt]),c,T]})}}return i})(),li=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275dir=u({type:i,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]})}}return i})();var et=new g("");var Ot={provide:v,useExisting:A(()=>Pt)},Pt=(()=>{class i extends v{get submitted(){return h(this._submittedReactive)}set submitted(t){this._submittedReactive.set(t)}constructor(t,n,r){super(),this.callSetDisabledState=r,this._submitted=x(()=>this._submittedReactive()),this._submittedReactive=E(!1),this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new V,this._setValidators(t),this._setAsyncValidators(n)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(q(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let n=this.form.get(t.path);return se(n,t,this.callSetDisabledState),n.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),n}getControl(t){return this.form.get(t.path)}removeControl(t){we(t.control||null,t,!1),It(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,n){this.form.get(t.path).setValue(n)}onSubmit(t){return this._submittedReactive.set(!0),xt(this.form,this.directives),this.ngSubmit.emit(t),this.form._events.next(new ie(this.control)),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this._submittedReactive.set(!1),this.form._events.next(new ne(this.form))}_updateDomValue(){this.directives.forEach(t=>{let n=t.control,r=this.form.get(t.path);n!==r&&(we(n||null,t),St(r)&&(se(r,t,this.callSetDisabledState),t.control=r))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let n=this.form.get(t.path);Et(n,t),n.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let n=this.form.get(t.path);n&&Ft(n,t)&&n.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){he(this.form,this),this._oldForm&&q(this._oldForm,this)}_checkFormPresent(){this.form}static{this.\u0275fac=function(n){return new(n||i)(o(le,10),o(ue,10),o(J,8))}}static{this.\u0275dir=u({type:i,selectors:[["","formGroup",""]],hostBindings:function(n,r){n&1&&w("submit",function(a){return r.onSubmit(a)})("reset",function(){return r.onReset()})},inputs:{form:[0,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[m([Ot]),c,T]})}}return i})();var kt={provide:_,useExisting:A(()=>Gt)},Gt=(()=>{class i extends _{set isDisabled(t){}static{this._ngModelWarningSentOnce=!1}constructor(t,n,r,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new V,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(n),this._setAsyncValidators(r),this.valueAccessor=Qe(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Ke(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return Xe(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}static{this.\u0275fac=function(n){return new(n||i)(o(v,13),o(le,10),o(ue,10),o(ae,10),o(et,8))}}static{this.\u0275dir=u({type:i,selectors:[["","formControlName",""]],inputs:{name:[0,"formControlName","name"],isDisabled:[0,"disabled","isDisabled"],model:[0,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[m([kt]),c,T]})}}return i})();var tt=(()=>{class i{static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=C({type:i})}static{this.\u0275inj=y({})}}return i})(),oe=class extends M{constructor(e,t,n){super(de(t),ce(n,t)),this.controls=e,this._initObservables(),this._setUpdateStrategy(t),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,t={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}insert(e,t,n={}){this.controls.splice(e,0,t),this._registerControl(t),this.updateValueAndValidity({emitEvent:n.emitEvent})}removeAt(e,t={}){let n=this._adjustIndex(e);n<0&&(n=0),this.controls[n]&&this.controls[n]._registerOnCollectionChange(()=>{}),this.controls.splice(n,1),this.updateValueAndValidity({emitEvent:t.emitEvent})}setControl(e,t,n={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),t&&(this.controls.splice(r,0,t),this._registerControl(t)),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,t={}){Je(this,!1,e),e.forEach((n,r)=>{Ze(this,!1,r),this.at(r).setValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t)}patchValue(e,t={}){e!=null&&(e.forEach((n,r)=>{this.at(r)&&this.at(r).patchValue(n,{onlySelf:!0,emitEvent:t.emitEvent})}),this.updateValueAndValidity(t))}reset(e=[],t={}){this._forEachChild((n,r)=>{n.reset(e[r],{onlySelf:!0,emitEvent:t.emitEvent})}),this._updatePristine(t,this),this._updateTouched(t,this),this.updateValueAndValidity(t)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(t=>t._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((t,n)=>n._syncPendingControls()?!0:t,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((t,n)=>{e(t,n)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(t=>t.enabled&&e(t))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Ne(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var ui=(()=>{class i{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new i;return t.useNonNullable=!0,t}group(t,n=null){let r=this._reduceControls(t),s={};return Ne(n)?s=n:n!==null&&(s.validators=n.validator,s.asyncValidators=n.asyncValidator),new W(r,s)}record(t,n=null){let r=this._reduceControls(t);return new re(r,n)}control(t,n,r){let s={};return this.useNonNullable?(Ne(n)?s=n:(s.validators=n,s.asyncValidators=r),new P(t,d(l({},s),{nonNullable:!0}))):new P(t,n,r)}array(t,n,r){let s=t.map(a=>this._createControl(a));return new oe(s,n,r)}_reduceControls(t){let n={};return Object.keys(t).forEach(r=>{n[r]=this._createControl(t[r])}),n}_createControl(t){if(t instanceof P)return t;if(t instanceof M)return t;if(Array.isArray(t)){let n=t[0],r=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(n,r,s)}else return this.control(t)}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275prov=G({token:i,factory:i.\u0275fac,providedIn:"root"})}}return i})();var di=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:J,useValue:t.callSetDisabledState??X}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=C({type:i})}static{this.\u0275inj=y({imports:[tt]})}}return i})(),ci=(()=>{class i{static withConfig(t){return{ngModule:i,providers:[{provide:et,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:J,useValue:t.callSetDisabledState??X}]}}static{this.\u0275fac=function(n){return new(n||i)}}static{this.\u0275mod=C({type:i})}static{this.\u0275inj=y({imports:[tt]})}}return i})();var Rt=({dt:i})=>`
.p-inputtext {
    font-family: inherit;
    font-feature-settings: inherit;
    font-size: 1rem;
    color: ${i("inputtext.color")};
    background: ${i("inputtext.background")};
    padding-block: ${i("inputtext.padding.y")};
    padding-inline: ${i("inputtext.padding.x")};
    border: 1px solid ${i("inputtext.border.color")};
    transition: background ${i("inputtext.transition.duration")}, color ${i("inputtext.transition.duration")}, border-color ${i("inputtext.transition.duration")}, outline-color ${i("inputtext.transition.duration")}, box-shadow ${i("inputtext.transition.duration")};
    appearance: none;
    border-radius: ${i("inputtext.border.radius")};
    outline-color: transparent;
    box-shadow: ${i("inputtext.shadow")};
}

.p-inputtext.ng-invalid.ng-dirty {
    border-color: ${i("inputtext.invalid.border.color")};
}

.p-inputtext:enabled:hover {
    border-color: ${i("inputtext.hover.border.color")};
}

.p-inputtext:enabled:focus {
    border-color: ${i("inputtext.focus.border.color")};
    box-shadow: ${i("inputtext.focus.ring.shadow")};
    outline: ${i("inputtext.focus.ring.width")} ${i("inputtext.focus.ring.style")} ${i("inputtext.focus.ring.color")};
    outline-offset: ${i("inputtext.focus.ring.offset")};
}

.p-inputtext.p-invalid {
    border-color: ${i("inputtext.invalid.border.color")};
}

.p-inputtext.p-variant-filled {
    background: ${i("inputtext.filled.background")};
}

.p-inputtext.p-variant-filled:enabled:focus {
    background: ${i("inputtext.filled.focus.background")};
}

.p-inputtext:disabled {
    opacity: 1;
    background: ${i("inputtext.disabled.background")};
    color: ${i("inputtext.disabled.color")};
}

.p-inputtext::placeholder {
    color: ${i("inputtext.placeholder.color")};
}

.p-inputtext.ng-invalid.ng-dirty::placeholder {
    color: ${i("inputtext.invalid.placeholder.color")};
}

.p-inputtext-sm {
    font-size: ${i("inputtext.sm.font.size")};
    padding-block: ${i("inputtext.sm.padding.y")};
    padding-inline: ${i("inputtext.sm.padding.x")};
}

.p-inputtext-lg {
    font-size: ${i("inputtext.lg.font.size")};
    padding-block: ${i("inputtext.lg.padding.y")};
    padding-inline: ${i("inputtext.lg.padding.x")};
}

.p-inputtext-fluid {
    width: 100%;
}
`,jt={root:({instance:i,props:e})=>["p-inputtext p-component",{"p-filled":i.filled,"p-inputtext-sm":e.size==="small","p-inputtext-lg":e.size==="large","p-invalid":e.invalid,"p-variant-filled":e.variant==="filled","p-inputtext-fluid":e.fluid}]},it=(()=>{class i extends De{name="inputtext";theme=Rt;classes=jt;static \u0275fac=(()=>{let t;return function(r){return(t||(t=R(i)))(r||i)}})();static \u0275prov=G({token:i,factory:i.\u0275fac})}return i})();var Mi=(()=>{class i extends be{ngModel;variant="outlined";fluid;pSize;filled;_componentStyle=Y(it);get hasFluid(){let n=this.el.nativeElement.closest("p-fluid");return Ve(this.fluid)?!!n:this.fluid}constructor(t){super(),this.ngModel=t}ngAfterViewInit(){super.ngAfterViewInit(),this.updateFilledState(),this.cd.detectChanges()}ngDoCheck(){this.updateFilledState()}onInput(){this.updateFilledState()}updateFilledState(){this.filled=this.el.nativeElement.value&&this.el.nativeElement.value.length||this.ngModel&&this.ngModel.model}static \u0275fac=function(n){return new(n||i)(o(fe,8))};static \u0275dir=u({type:i,selectors:[["","pInputText",""]],hostAttrs:[1,"p-inputtext","p-component"],hostVars:14,hostBindings:function(n,r){n&1&&w("input",function(a){return r.onInput(a)}),n&2&&F("p-filled",r.filled)("p-variant-filled",r.variant==="filled"||r.config.inputStyle()==="filled"||r.config.inputVariant()==="filled")("p-inputtext-fluid",r.hasFluid)("p-inputtext-sm",r.pSize==="small")("p-inputfield-sm",r.pSize==="small")("p-inputtext-lg",r.pSize==="large")("p-inputfield-lg",r.pSize==="large")},inputs:{variant:"variant",fluid:[2,"fluid","fluid",j],pSize:"pSize"},standalone:!0,features:[m([it]),_e,c]})}return i})(),Ai=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=C({type:i});static \u0275inj=y({})}return i})();export{ae as a,Pe as b,Me as c,_ as d,si as e,oi as f,W as g,P as h,fe as i,li as j,Pt as k,Gt as l,ui as m,di as n,ci as o,Mi as p,Ai as q};
