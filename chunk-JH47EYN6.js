import{A as m,B as w,m as a,n as $,p as S,r as l,s as y,u as n,v as k,x as g,y as p,z as c}from"./chunk-EM5XZP4M.js";import{Pa as r,S as u,Y as f}from"./chunk-O2BEBOXS.js";import{e as o}from"./chunk-ACKELEN3.js";var v="ahorros",b=class d{_firestore=f(S);_collectionRef=y(this._firestore,v);_utils=f($);savings$=r([]);loading$=r(!1);mockSavings$=r(w.Savings);getSavings(t=1){if(this.loading$.set(!0),a.mockUp)switch(setTimeout(()=>{this.loading$.set(!1)},2e3),t){case 0:return this.mockSavings$;case 1:return r(this.mockSavings$().filter(s=>s.activo));case 2:return r(this.mockSavings$().filter(s=>!s.activo))}let i,e;switch(t){case 0:i=l(this._collectionRef,{idField:"id"});break;case 1:e=g(this._collectionRef,m("activo","==",!0)),i=l(e,{idField:"id"});break;case 2:e=g(this._collectionRef,m("activo","==",!1)),i=l(e,{idField:"id"});break}return i.subscribe({next:s=>{this.savings$.set(s),this.loading$.set(!1)},error:s=>{this.loading$.set(!1),console.error("Error al obtener la colecci\xF3n "+v+": ",s)}}),this.savings$}getSaving(t){return o(this,null,function*(){if(this.loading$.set(!0),a.mockUp)return yield this._utils.delay(1),this.loading$.set(!1),this.mockSavings$().find(i=>i.id===t);try{let i=(yield k(n(this._firestore,v,t))).data();return i.id=t,i}catch(i){throw i}finally{this.loading$.set(!1)}})}addSaving(t){return o(this,null,function*(){if(this.loading$.set(!0),a.mockUp){yield this._utils.delay(1),t.id=this._utils.generateId(),this.mockSavings$.set(this.mockSavings$().concat(t)),this.loading$.set(!1);return}try{yield p(n(this._collectionRef),t)}catch(i){throw i}finally{this.loading$.set(!1)}})}updateSaving(t){return o(this,null,function*(){if(this.loading$.set(!0),a.mockUp){yield this._utils.delay(1);let i=this.mockSavings$().findIndex(s=>s.id===t.id),e=this.mockSavings$();e[i]=t,this.mockSavings$.set(e),this.loading$.set(!1);return}try{yield c(n(this._collectionRef,t.id),{nombre:t.nombre,menta:t.meta})}catch(i){throw i}finally{this.loading$.set(!1)}})}save(t,i){return o(this,null,function*(){if(this.loading$.set(!0),a.mockUp){yield this._utils.delay(1);let e=this.mockSavings$().findIndex(h=>h.id===t.id),s=this.mockSavings$();s[e].cantidad+=i,this.mockSavings$.set(s),this.loading$.set(!1);return}try{yield c(n(this._collectionRef,t.id),{cantidad:t.cantidad+i})}catch(e){throw e}finally{this.loading$.set(!1)}})}withdraw(t,i){return o(this,null,function*(){if(this.loading$.set(!0),a.mockUp){yield this._utils.delay(1);let e=this.mockSavings$().findIndex(h=>h.id===t.id),s=this.mockSavings$();s[e].cantidad-=i,this.mockSavings$.set(s),this.loading$.set(!1);return}try{yield c(n(this._collectionRef,t.id),{cantidad:t.cantidad-i})}catch(e){throw e}finally{this.loading$.set(!1)}})}deleteSaving(t){return o(this,null,function*(){if(this.loading$.set(!0),a.mockUp){yield this._utils.delay(1);let i=this.mockSavings$().findIndex(s=>s.id===t),e=this.mockSavings$();e[i].activo=!1,this.mockSavings$.set(e),this.loading$.set(!1);return}try{yield c(n(this._collectionRef,t),{activo:!1})}catch(i){throw i}finally{this.loading$.set(!1)}})}static \u0275fac=function(i){return new(i||d)};static \u0275prov=u({token:d,factory:d.\u0275fac,providedIn:"root"})};export{b as a};
