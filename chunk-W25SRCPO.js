import{a as K,b as L,c as D}from"./chunk-WVUTFSZ6.js";import{b as w}from"./chunk-EMDHCRVI.js";import{e as b,f as S}from"./chunk-IQPFT2FH.js";import{b as M,c,e as k,f as x,h as F,i as N,j as P,k as T,m as A,n as O,o as I}from"./chunk-XPPZ5LMI.js";import{a as R}from"./chunk-FECFFWDS.js";import"./chunk-KEDTMOP6.js";import{c as G,d as B}from"./chunk-PMN55GJU.js";import"./chunk-4YRY4IP2.js";import"./chunk-5MJUYKAR.js";import{L as E}from"./chunk-OYKZXE7R.js";import{Cb as _,Fa as r,Ta as p,Wa as m,Y as g,_a as u,aa as C,ab as s,eb as t,fb as i,gb as l,lb as h,ub as o}from"./chunk-ZBDPCDAU.js";import{e as v}from"./chunk-ACKELEN3.js";function q(n,a){n&1&&(t(0,"small",9),o(1,"Este campo es obligatorio"),i())}function z(n,a){n&1&&(t(0,"small",9),o(1,"Este campo es obligatorio"),i())}function j(n,a){n&1&&(t(0,"small",9),o(1,"Este campo es obligatorio"),i())}function U(n,a){n&1&&(t(0,"small",9),o(1,"Introduce un correo electronico valido"),i())}function V(n,a){n&1&&(t(0,"small",9),o(1,"Este campo es obligatorio"),i())}function W(n,a){n&1&&(t(0,"small",9),o(1,"Este campo es obligatorio"),i())}var y=class n{_fb=g(T);_messageService=g(E);_authService=g(w);router=g(b);form=this._fb.group({name:this._fb.control("",[c.required]),lastName:this._fb.control("",[c.required]),email:this._fb.control("",[c.required,c.email]),password:this._fb.control("",[c.required]),secretKey:this._fb.control("",[c.required])});submit(){return v(this,null,function*(){this.form.markAllAsTouched(),this.form.valid?this.form.value.secretKey==="123456"?yield this.createAccount():this._messageService.add({severity:"error",summary:"Error",detail:"La clave secreta no es correcta",life:3e3}):this._messageService.add({severity:"error",summary:"Error",detail:"Por favor, revisa los campos marcados",life:3e3})})}signInWithGoogle(){return v(this,null,function*(){yield this._authService.signInWithGoogle().then(()=>{this._messageService.add({severity:"success",summary:"Registro exitoso",detail:"\xA1Bienvenido a la Alcancia del Rancho!",life:3e3}),this.router.navigateByUrl("")}).catch(a=>{this._messageService.add({severity:"error",summary:"Error al crear cuenta",detail:"Por favor comunicate con el desarrollador Code:"+a.code,life:3e3})})})}createAccount(){return v(this,null,function*(){let{name:a,email:d,password:e}=this.form.value;yield this._authService.singUp(d,e).then(()=>{this._authService.updateName(a).then(()=>{this._messageService.add({severity:"success",summary:"Registro exitoso",detail:"\xA1Bienvenido a la Alcancia del Rancho!",life:3e3})}).catch(f=>{this._messageService.add({severity:"error",summary:"Error al crear cuenta",detail:"Por favor comunicate con el desarrollador Code:"+f.code,life:3e3})}),this.router.navigateByUrl("")}).catch(f=>{this._messageService.add({severity:"error",summary:"Error al crear cuenta",detail:"Por favor comunicate con el desarrollador Code:"+f.code,life:3e3})})})}static \u0275fac=function(d){return new(d||n)};static \u0275cmp=C({type:n,selectors:[["app-singup"]],standalone:!0,features:[_],decls:51,vars:28,consts:[[1,"wrapper"],[1,"card"],[1,"container"],[3,"formGroup"],["label","Inicia sesi\xF3n","routerLink","/auth/login",3,"link"],[1,"input-group"],["variant","in"],["formControlName","name","id","name","type","text","pInputText","","fluid","true","pSize","small"],["for","name"],[1,"label-error"],["formControlName","lastName","id","lastName","type","text","pInputText","","fluid","true","pSize","small"],["for","lastName"],["formControlName","email","id","email","type","email","pInputText","","fluid","true","pSize","small"],["for","email"],["formControlName","password","id","password","promptLabel","Crea una contrase\xF1a","weakLabel","Muy simple","mediumLabel","Dificultad media","strongLabel","Dificultad alta","fluid","true","pSize","small",3,"toggleMask"],["for","password"],["formControlName","secretKey","id","secret-key","fluid","true","pSize","small",3,"feedback","toggleMask"],["for","secret-key"],[1,"button-container"],["label","Crear cuenta","severity","success",3,"onClick","rounded"],[3,"onClick","outlined"],["width","24","height","24","src","https://img.icons8.com/color/48/google-logo.png","alt","google-logo"]],template:function(d,e){d&1&&(t(0,"div",0)(1,"p-card",1)(2,"div",2)(3,"h2"),o(4,"Crear una cuenta"),i(),t(5,"span"),o(6,"\xA1Bienvenido a la Alcancia del Rancho!"),i(),t(7,"form",3)(8,"small"),o(9,"Ya tienes una cuenta? "),l(10,"p-button",4),i(),t(11,"div",5)(12,"div")(13,"p-floatlabel",6),l(14,"input",7),t(15,"label",8),o(16,"Nombre"),i()(),p(17,q,2,0,"small",9),i(),t(18,"div")(19,"p-floatlabel",6),l(20,"input",10),t(21,"label",11),o(22,"Apellidos"),i()(),p(23,z,2,0,"small",9),i(),t(24,"div")(25,"p-floatlabel",6),l(26,"input",12),t(27,"label",13),o(28,"Correo electronico"),i()(),p(29,j,2,0,"small",9)(30,U,2,0,"small",9),i(),t(31,"div")(32,"p-floatlabel",6),l(33,"p-password",14),t(34,"label",15),o(35,"Crea una contrase\xF1a"),i()(),p(36,V,2,0,"small",9),i(),t(37,"div")(38,"p-floatlabel",6),l(39,"p-password",16),t(40,"label",17),o(41,"Clave secreta"),i()(),p(42,W,2,0,"small",9),i()(),t(43,"div",18)(44,"p-button",19),h("onClick",function(){return e.submit()}),i(),t(45,"span"),o(46,"o"),i(),t(47,"p-button",20),h("onClick",function(){return e.signInWithGoogle()}),l(48,"img",21),t(49,"span"),o(50,"Acceder con Google"),i()()()()()()()),d&2&&(r(7),m("formGroup",e.form),r(3),m("link",!0),r(4),u(e.form.controls.name.invalid&&e.form.controls.name.touched?"ng-invalid ng-dirty":""),r(3),s(e.form.controls.name.invalid&&e.form.controls.name.touched?17:-1),r(3),u(e.form.controls.lastName.invalid&&e.form.controls.lastName.touched?"ng-invalid ng-dirty":""),r(3),s(e.form.controls.name.invalid&&e.form.controls.name.touched?23:-1),r(3),u(e.form.controls.email.invalid&&e.form.controls.email.touched?"ng-invalid ng-dirty":""),r(3),s(e.form.controls.email.getError("required")&&e.form.controls.email.touched?29:-1),r(),s(e.form.controls.email.getError("email")&&e.form.controls.email.touched?30:-1),r(3),u(e.form.controls.password.invalid&&e.form.controls.password.touched?"ng-invalid ng-dirty":""),m("toggleMask",!0),r(3),s(e.form.controls.password.invalid&&e.form.controls.password.touched?36:-1),r(3),u(e.form.controls.secretKey.invalid&&e.form.controls.secretKey.touched?"ng-invalid ng-dirty":""),m("feedback",!1)("toggleMask",!0),r(3),s(e.form.controls.secretKey.invalid&&e.form.controls.secretKey.touched?42:-1),r(2),m("rounded",!0),r(3),m("outlined",!0))},dependencies:[R,K,D,L,B,G,I,O,A,F,M,k,x,N,P,S],styles:['[_nghost-%COMP%]{display:flex;gap:1rem;height:100%;background-image:url("./media/bg-rancho-AR2NZEUE.jpeg");background-color:#f5f5f5;background-size:cover;background-position:center;background-repeat:no-repeat}.wrapper[_ngcontent-%COMP%]{width:100%;display:flex;gap:1rem;background-color:#00000094}.card[_ngcontent-%COMP%]{margin:0 auto}.container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}form[_ngcontent-%COMP%]{width:100%}.input-group[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;gap:.5rem}.button-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:1rem;gap:10px}small[_ngcontent-%COMP%]{display:block}h2[_ngcontent-%COMP%]{margin:.5rem 0}.flex-row[_ngcontent-%COMP%]{display:flex;flex-direction:row;justify-content:center;gap:2rem}@media (min-width: 750px){.wrapper[_ngcontent-%COMP%]{flex-direction:row;align-items:center;justify-content:center}.card[_ngcontent-%COMP%]{margin:0}}@media (max-width: 749px){.wrapper[_ngcontent-%COMP%]{flex-direction:column;justify-content:center}}']})};export{y as default};
