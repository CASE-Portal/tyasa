"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4508],{4508:(k,m,r)=>{r.r(m),r.d(m,{BuzonPageModule:()=>j});var h=r(9808),s=r(4182),n=r(7181),d=r(9800),l=r(655);class f{deserialize(i){return Object.assign(this,i),this}}class v{constructor(){this.toString=()=>`**Tipo: ** ${this.tipo}\n**Sede: ** ${this.sede}\n\n\n---\n\n>${this.multilineFormated(this.mensaje)}`,this.multilineFormated=i=>i.replaceAll(/\n\n/gi,"\n\n>")}deserialize(i){return Object.assign(this,i),this}}const p=t=>t.toString().padStart(2,"0");var g=r(2340),e=r(2096);let y=(()=>{class t{constructor(o,a){this.alertController=o,this.router=a}successTicket(o,a){return(0,l.mG)(this,void 0,void 0,function*(){this.alert=yield this.alertController.create({header:"Registro exitoso",message:`Su ticket ha sido registrado correctamente con el folio<br><br><center><strong>${o}</strong></center>`,mode:"ios",buttons:[{text:"Nuevo Reporte",handler:()=>a.reset()},{text:"Finalizar",handler:()=>this.router.navigate(["/"])}]}),yield this.alert.present()})}errorTicket(){return(0,l.mG)(this,void 0,void 0,function*(){this.alert=yield this.alertController.create({header:"Ha ocurrido un error",message:"Su ticket no ha sido registrado, por favor vuelva a intentarlo<br><br>Si el problema persiste contacte al administrador del portal",mode:"ios",buttons:["Aceptar"]}),yield this.alert.present()})}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(n.Br),e.LFG(d.F0))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var Z=r(4220);let S=(()=>{class t{constructor(o){this.cardRepository=o}save(o){return this.cardRepository.save(o)}}return t.\u0275fac=function(o){return new(o||t)(e.LFG(Z.Q))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var F=r(8704),T=r(2039);const C=g.N.idList.buzonQueja,A=g.N.idList.buzonSugerencia,B=[{path:"",component:(()=>{class t{constructor(o,a,c,u){this.alert=o,this.card=a,this.loadingController=c,this.formBuilder=u}ngOnInit(){return(0,l.mG)(this,void 0,void 0,function*(){this.ticketForm=this.formBuilder.group({sede:["",s.kI.required],tipo:["",s.kI.required],mensaje:["",s.kI.required]})})}ionViewWillEnter(){this.ticketForm.reset()}onClickSubmit(){return(0,l.mG)(this,void 0,void 0,function*(){const o=((t=new Date)=>`${t.getFullYear().toString().slice(-2)}${p(t.getMonth()+1)}${p(t.getDate())}-${Date.now().toString().slice(-3)}`)(),a=(new v).deserialize(this.ticketForm.value),c=(new f).deserialize({idList:"Queja"===a.tipo?C:A,name:o,pos:"top",desc:a.toString()}),u=yield this.loadingController.create({message:"Generando ticket..."});yield u.present(),setTimeout(()=>(0,l.mG)(this,void 0,void 0,function*(){return yield this.card.save(c).then(()=>this.alert.successTicket(o,this.ticketForm)).catch(()=>this.alert.errorTicket()).finally(()=>u.dismiss())}))})}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(y),e.Y36(S),e.Y36(n.HT),e.Y36(s.qu))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-buzon"]],decls:33,vars:2,consts:[["no-border",""],[1,"cs-container-footer"],["fixed","",1,"ion-padding"],[1,"ion-padding"],["novalidate","",1,"dataForm",3,"formGroup","ngSubmit"],["color","primary",1,"ion-text-left","ion-no-padding"],["position","floating"],["type","text","formControlName","sede"],["okText","Aceptar","cancelText","Cancelar","formControlName","tipo","mode","ios"],["value","Queja"],["value","Sugerencia"],["rows","7","formControlName","mensaje"],["expand","block","color","primary","type","submit","mode","ios",1,"ion-margin",3,"disabled"]],template:function(o,a){1&o&&(e.TgZ(0,"ion-header",0),e._UZ(1,"app-header"),e.qZA(),e.TgZ(2,"ion-content")(3,"div",1)(4,"ion-grid",2)(5,"ion-list",3)(6,"form",4),e.NdJ("ngSubmit",function(){return a.onClickSubmit()}),e.TgZ(7,"ion-label",5)(8,"h1")(9,"strong"),e._uU(10,"Buz\xf3n de quejas y sugerencias"),e.qZA()(),e.TgZ(11,"p"),e._uU(12,"Todos somos parte del equipo, y por ello, la opini\xf3n de todos es importante, utiliza este espacio siempre que lo necesites para expresarte libremente y de manera an\xf3nima, com\xe9ntanos como podemos mejorar como equipo. "),e.qZA()(),e._UZ(13,"br"),e.TgZ(14,"ion-item")(15,"ion-label",6),e._uU(16,"Sede"),e.qZA(),e._UZ(17,"ion-input",7),e.qZA(),e.TgZ(18,"ion-item")(19,"ion-label",6),e._uU(20,"Tipo de reporte"),e.qZA(),e.TgZ(21,"ion-select",8)(22,"ion-select-option",9),e._uU(23,"Queja"),e.qZA(),e.TgZ(24,"ion-select-option",10),e._uU(25,"Sugerencia"),e.qZA()()(),e.TgZ(26,"ion-item")(27,"ion-label",6),e._uU(28,"Mensaje"),e.qZA(),e._UZ(29,"ion-textarea",11),e.qZA(),e.TgZ(30,"ion-button",12),e._uU(31," Enviar "),e.qZA()()()(),e._UZ(32,"app-footer"),e.qZA()()),2&o&&(e.xp6(6),e.Q6J("formGroup",a.ticketForm),e.xp6(24),e.Q6J("disabled",a.ticketForm.invalid))},directives:[n.Gu,F.G,n.W2,n.jY,n.q_,s._Y,s.JL,s.sg,n.Q$,n.Ie,n.pK,n.j9,s.JJ,s.u,n.t9,n.QI,n.n0,n.g2,n.YG,T.c],styles:[".dataForm[_ngcontent-%COMP%]{max-width:768px;margin:24px auto auto}"]}),t})()}];let b=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[d.Bz.forChild(B)],d.Bz]}),t})();var U=r(6616);let j=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[h.ez,s.u5,n.Pc,b,s.UX,U.K]]}),t})()}}]);