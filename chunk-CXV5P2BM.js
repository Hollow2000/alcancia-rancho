import{a as U}from"./chunk-2DRJYYE6.js";import{c as d,d as l,f as m,g as u,i as g,j as p,k as v,l as f,m as i,n as _}from"./chunk-EM5XZP4M.js";import{S as n,Y as o,g as h}from"./chunk-O2BEBOXS.js";import{e as s}from"./chunk-ACKELEN3.js";var c=class a{concurrentReq=0;_isLoading=new h(0);isLoading=this._isLoading.asObservable();show(){this._isLoading.next(++this.concurrentReq)}hide(){this._isLoading.next(--this.concurrentReq)}static \u0275fac=function(e){return new(e||a)};static \u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"})};var y=class a{_auth=o(l);_utils=o(_);_loaderService=o(c);_familyService=o(U);mockIsLogged=i.isLogged;get authState$(){return m(this._auth)}logOut(){return s(this,null,function*(){if(this._loaderService.show(),i.mockUp)return yield this._utils.delay(2),this._loaderService.hide(),this.mockIsLogged=!1,Promise.resolve();let t=yield v(this._auth);return this._loaderService.hide(),t})}singUp(t,e){return s(this,null,function*(){if(this._loaderService.show(),i.mockUp)return yield this._utils.delay(2),this._loaderService.hide(),this.mockIsLogged=!0,Promise.resolve();yield u(this._auth,t,e).then(r=>(this._loaderService.hide(),r)).catch(r=>{throw this._loaderService.hide(),r})})}login(t,e){return s(this,null,function*(){if(this._loaderService.show(),i.mockUp)return yield this._utils.delay(2),this._loaderService.hide(),this.mockIsLogged=!0,Promise.resolve();yield g(this._auth,t,e).then(r=>(this._loaderService.hide(),r)).catch(r=>{throw this._loaderService.hide(),r})})}updateName(t){return s(this,null,function*(){this._auth.currentUser&&!i.mockUp&&f(this._auth.currentUser,{displayName:t})})}getUserName(){return i.mockUp?"Mock Up":this._auth.currentUser?.displayName}getUserImage(){return i.mockUp?void 0:this._auth.currentUser?.photoURL??void 0}signInWithGoogle(){return s(this,null,function*(){if(this._loaderService.show(),i.mockUp)return yield this._utils.delay(2),this._loaderService.hide(),this.mockIsLogged=!0,Promise.resolve();let t=yield p(this._auth,new d);debugger;if(!(yield this._familyService.getFamily(this._auth.currentUser?.uid))){let{name:r,lastname:w}=this.getNames(t.user.displayName);this._familyService.addFamily({id:i.mockUp?this._utils.generateId():this._auth.currentUser?.uid,nombres:r,apellidos:w,admin:!1,foto:t.user.photoURL??void 0})}return this._loaderService.hide(),t})}getNames(t){if(!t)return{name:"Actualiza tu nombre",lastname:""};let e=t.split(" ");switch(e.length){case 1:return{name:e[0],lastname:""};case 2:return{name:e[0],lastname:e[1]};case 3:return{name:e[0],lastname:`${e[1]} ${e[2]}`};case 4:return{name:`${e[0]} ${e[1]}`,lastname:`${e[2]} ${e[3]}`};default:return{name:e[0],lastname:`${e[1]} ${e[2]}`}}}static \u0275fac=function(e){return new(e||a)};static \u0275prov=n({token:a,factory:a.\u0275fac,providedIn:"root"})};export{c as a,y as b};
