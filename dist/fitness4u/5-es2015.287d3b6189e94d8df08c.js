(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{CKRj:function(t,e,n){"use strict";n.r(e),n.d(e,"TrainingModule",function(){return Z});var a=n("l7P3"),c=n("PCNd"),i=n("tyNb"),r=n("vQgB"),s=n("fXoL"),o=n("ofXK"),b=n("wZkO"),l=(n("4XzM"),n("a318")),m=n("vEl1"),u=n("XiUz"),d=n("3Pt+"),p=n("Wp6s"),f=n("kmnG"),g=n("d3UM"),h=n("FKr1"),y=n("Xa2L"),U=n("bTqV");function V(t,e){if(1&t&&(s.Vb(0,"mat-option",9),s.Ac(1),s.Ub()),2&t){const t=e.$implicit;s.mc("value",t.id),s.Eb(1),s.Cc(" ",t.name," ")}}function v(t,e){if(1&t&&(s.Vb(0,"mat-form-field"),s.Vb(1,"mat-select",7),s.zc(2,V,2,2,"mat-option",8),s.ic(3,"async"),s.Ub(),s.Ub()),2&t){const t=s.hc();s.Eb(2),s.mc("ngForOf",s.jc(3,1,t.exercises$))}}function S(t,e){1&t&&s.Qb(0,"mat-spinner")}function w(t,e){if(1&t&&(s.Vb(0,"button",12),s.Ac(1,"Start"),s.Ub()),2&t){s.hc(2);const t=s.rc(2);s.mc("disabled",t.invalid)}}function x(t,e){if(1&t){const t=s.Wb();s.Vb(0,"button",13),s.dc("click",function(){return s.tc(t),s.hc(2).fetchTraining()}),s.Ac(1,"Try Again"),s.Ub()}}function C(t,e){if(1&t&&(s.Vb(0,"mat-card-actions",4),s.zc(1,w,2,1,"button",10),s.ic(2,"async"),s.zc(3,x,2,0,"button",11),s.ic(4,"async"),s.Ub()),2&t){const t=s.hc();s.Eb(1),s.mc("ngIf",s.jc(2,2,t.exercises$)),s.Eb(2),s.mc("ngIf",!s.jc(4,4,t.exercises$))}}let E=(()=>{class t{constructor(t,e){this.trainingService=t,this.store=e}ngOnInit(){this.isLoading$=this.store.select(l.b),this.exercises$=this.store.select(r.c),this.fetchTraining()}fetchTraining(){this.trainingService.fetchAvailableExercises()}onStartTraining(t){this.trainingService.startExercise(t.value.exercise)}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(m.a),s.Pb(a.a))},t.\u0275cmp=s.Jb({type:t,selectors:[["app-new-training"]],decls:14,vars:11,consts:[["fxLayout","","fxLayoutAlign","center",1,"new-training"],[3,"ngSubmit"],["f","ngForm"],["fxFlex.xs","100%","fxFlex","400px"],["fxLayoutAlign","center"],[4,"ngIf"],["fxLayoutAlign","center",4,"ngIf"],["placeholder","Choose Exercise","ngModel","","name","exercise","required",""],[3,"value",4,"ngFor","ngForOf"],[3,"value"],["type","submit","mat-raised-button","","color","primary","mat-button","",3,"disabled",4,"ngIf"],["type","button","mat-raised-button","","color","primary","mat-button","",3,"click",4,"ngIf"],["type","submit","mat-raised-button","","color","primary","mat-button","",3,"disabled"],["type","button","mat-raised-button","","color","primary","mat-button","",3,"click"]],template:function(t,e){if(1&t){const t=s.Wb();s.Vb(0,"section",0),s.Vb(1,"form",1,2),s.dc("ngSubmit",function(){s.tc(t);const n=s.rc(2);return e.onStartTraining(n)}),s.Vb(3,"mat-card",3),s.Vb(4,"mat-card-title",4),s.Ac(5,"Time to start workout!"),s.Ub(),s.Vb(6,"mat-card-content",4),s.zc(7,v,4,3,"mat-form-field",5),s.ic(8,"async"),s.ic(9,"async"),s.zc(10,S,1,0,"mat-spinner",5),s.ic(11,"async"),s.Ub(),s.zc(12,C,5,6,"mat-card-actions",6),s.ic(13,"async"),s.Ub(),s.Ub(),s.Ub()}2&t&&(s.Eb(7),s.mc("ngIf",!s.jc(8,3,e.isLoading$)&&s.jc(9,5,e.exercises$)),s.Eb(3),s.mc("ngIf",s.jc(11,7,e.isLoading$)),s.Eb(2),s.mc("ngIf",!s.jc(13,9,e.isLoading$)))},directives:[u.c,u.b,d.u,d.o,d.p,p.a,u.a,p.e,p.c,o.m,f.c,g.a,d.n,d.q,d.s,o.l,h.m,y.c,p.b,U.a],pipes:[o.b],styles:[".new-training[_ngcontent-%COMP%]{padding:30px}"]}),t})();var A=n("M9IT"),z=n("Dh3D"),I=n("+0xr"),D=n("qFsG");function T(t,e){1&t&&(s.Vb(0,"mat-header-cell",14),s.Ac(1," Date "),s.Ub())}function $(t,e){if(1&t&&(s.Vb(0,"mat-cell"),s.Ac(1),s.ic(2,"date"),s.Ub()),2&t){const t=e.$implicit;s.Eb(1),s.Cc(" ",s.jc(2,1,t.date.toDate())," ")}}function j(t,e){1&t&&(s.Vb(0,"mat-header-cell",14),s.Ac(1," Name "),s.Ub())}function O(t,e){if(1&t&&(s.Vb(0,"mat-cell"),s.Ac(1),s.Ub()),2&t){const t=e.$implicit;s.Eb(1),s.Cc(" ",t.name," ")}}function P(t,e){1&t&&(s.Vb(0,"mat-header-cell",14),s.Ac(1," Calories "),s.Ub())}function k(t,e){if(1&t&&(s.Vb(0,"mat-cell"),s.Ac(1),s.ic(2,"number"),s.Ub()),2&t){const t=e.$implicit;s.Eb(1),s.Cc(" ",s.jc(2,1,t.calories)," ")}}function L(t,e){1&t&&(s.Vb(0,"mat-header-cell",14),s.Ac(1," Duration "),s.Ub())}function F(t,e){if(1&t&&(s.Vb(0,"mat-cell"),s.Ac(1),s.ic(2,"number"),s.Ub()),2&t){const t=e.$implicit;s.Eb(1),s.Cc(" ",s.jc(2,1,t.duration)," ")}}function M(t,e){1&t&&(s.Vb(0,"mat-header-cell",14),s.Ac(1," State "),s.Ub())}function Q(t,e){if(1&t&&(s.Vb(0,"mat-cell"),s.Ac(1),s.Ub()),2&t){const t=e.$implicit;s.Eb(1),s.Cc(" ",t.state," ")}}function R(t,e){1&t&&s.Qb(0,"mat-header-row")}function q(t,e){1&t&&s.Qb(0,"mat-row")}const J=function(){return[5,10,20]};let N=(()=>{class t{constructor(t,e){this.trainingService=t,this.store=e,this.displayedColumns=["date","name","duration","calories","state"],this.dataSource=new I.k}ngOnInit(){this.store.select(r.d).subscribe(t=>{this.dataSource.data=t}),this.trainingService.fetchCompletedOrCancelledExercises()}ngAfterViewInit(){this.dataSource.sort=this.sort,this.dataSource.paginator=this.paginator}doFilter(t){this.dataSource.filter=t.trim().toLowerCase()}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(m.a),s.Pb(a.a))},t.\u0275cmp=s.Jb({type:t,selectors:[["app-past-trainings"]],viewQuery:function(t,e){if(1&t&&(s.Dc(z.a,1),s.Dc(A.a,1)),2&t){let t;s.qc(t=s.ec())&&(e.sort=t.first),s.qc(t=s.ec())&&(e.paginator=t.first)}},decls:23,vars:8,consts:[[1,"filter"],["matInput","","type","text","placeholder","Filter",3,"keyup"],["matSort","",3,"dataSource","hidden"],["matColumnDef","date"],["mat-sort-header","",4,"matHeaderCellDef"],[4,"matCellDef"],["matColumnDef","name"],["matColumnDef","calories"],["matColumnDef","duration"],["matColumnDef","state"],[4,"matHeaderRowDef"],[4,"matRowDef","matRowDefColumns"],["showFirstLastButtons","",3,"hidden","pageSize","pageSizeOptions"],["paginator",""],["mat-sort-header",""]],template:function(t,e){1&t&&(s.Vb(0,"div",0),s.Vb(1,"mat-form-field"),s.Vb(2,"input",1),s.dc("keyup",function(t){return e.doFilter(t.target.value)}),s.Ub(),s.Ub(),s.Ub(),s.Vb(3,"mat-table",2),s.Tb(4,3),s.zc(5,T,2,0,"mat-header-cell",4),s.zc(6,$,3,3,"mat-cell",5),s.Sb(),s.Tb(7,6),s.zc(8,j,2,0,"mat-header-cell",4),s.zc(9,O,2,1,"mat-cell",5),s.Sb(),s.Tb(10,7),s.zc(11,P,2,0,"mat-header-cell",4),s.zc(12,k,3,3,"mat-cell",5),s.Sb(),s.Tb(13,8),s.zc(14,L,2,0,"mat-header-cell",4),s.zc(15,F,3,3,"mat-cell",5),s.Sb(),s.Tb(16,9),s.zc(17,M,2,0,"mat-header-cell",4),s.zc(18,Q,2,1,"mat-cell",5),s.Sb(),s.zc(19,R,1,0,"mat-header-row",10),s.zc(20,q,1,0,"mat-row",11),s.Ub(),s.Qb(21,"mat-paginator",12,13)),2&t&&(s.Eb(3),s.mc("dataSource",e.dataSource)("hidden",0===e.dataSource.data.length),s.Eb(16),s.mc("matHeaderRowDef",e.displayedColumns),s.Eb(1),s.mc("matRowDefColumns",e.displayedColumns),s.Eb(1),s.mc("hidden",0===e.dataSource.data.length)("pageSize",5)("pageSizeOptions",s.nc(7,J)))},directives:[f.c,D.b,I.j,z.a,I.c,I.e,I.b,I.g,I.i,A.a,I.d,z.b,I.a,I.f,I.h],pipes:[o.e,o.f],styles:[".filter[_ngcontent-%COMP%]{margin-left:20px}"]}),t})();var X=n("IzEk"),K=n("0IaG");let G=(()=>{class t{constructor(t){this.passedData=t}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(K.a))},t.\u0275cmp=s.Jb({type:t,selectors:[["app-stop-training"]],decls:10,vars:3,consts:[["mat-dialog-title",""],["mat-button","",3,"mat-dialog-close"]],template:function(t,e){1&t&&(s.Vb(0,"h1",0),s.Ac(1,"Are you sure you want to quit?"),s.Ub(),s.Vb(2,"mat-dialog-content"),s.Vb(3,"p"),s.Ac(4),s.Ub(),s.Ub(),s.Vb(5,"mat-dialog-actions"),s.Vb(6,"button",1),s.Ac(7,"Yes"),s.Ub(),s.Vb(8,"button",1),s.Ac(9,"No"),s.Ub(),s.Ub()),2&t&&(s.Eb(4),s.Cc("You already got ",e.passedData.progress,"% "),s.Eb(2),s.mc("mat-dialog-close",!0),s.Eb(2),s.mc("mat-dialog-close",!1))},directives:[K.g,K.e,K.c,U.a,K.d],encapsulation:2}),t})(),H=(()=>{class t{constructor(t,e,n){this.dialog=t,this.trainingService=e,this.store=n,this.progress=0}ngOnInit(){this.startOrResumetimer()}startOrResumetimer(){this.store.select(r.b).pipe(Object(X.a)(1)).subscribe(t=>{this.timer=setInterval(()=>{this.progress+=1,this.progress>=100&&(this.trainingService.completeExercise(),clearInterval(this.timer))},t.duration/100*1e3)})}onStop(){clearInterval(this.timer),this.dialog.open(G,{data:{progress:this.progress}}).afterClosed().subscribe(t=>{t?this.trainingService.cancelExercise(this.progress):this.startOrResumetimer()})}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(K.b),s.Pb(m.a),s.Pb(a.a))},t.\u0275cmp=s.Jb({type:t,selectors:[["app-current-training"]],decls:8,vars:2,consts:[["fxLayout","column","fxLayoutAlign","center center",1,"current-training"],["mode","determinate",3,"value"],["mat-raised-button","","color","warn",3,"click"]],template:function(t,e){1&t&&(s.Vb(0,"section",0),s.Qb(1,"mat-progress-spinner",1),s.Vb(2,"h1"),s.Ac(3),s.Ub(),s.Vb(4,"p"),s.Ac(5,"Keep on going, you can do it!"),s.Ub(),s.Vb(6,"button",2),s.dc("click",function(){return e.onStop()}),s.Ac(7,"Stop"),s.Ub(),s.Ub()),2&t&&(s.Eb(1),s.mc("value",e.progress),s.Eb(2),s.Cc("",e.progress,"%"))},directives:[u.c,u.b,y.a,U.a],styles:[".current-training[_ngcontent-%COMP%]{padding:30px}"]}),t})();function W(t,e){1&t&&(s.Vb(0,"mat-tab-group"),s.Vb(1,"mat-tab",1),s.Qb(2,"app-new-training"),s.Ub(),s.Vb(3,"mat-tab",2),s.Qb(4,"app-past-trainings"),s.Ub(),s.Ub())}function _(t,e){1&t&&s.Qb(0,"app-current-training")}const B=[{path:"",component:(()=>{class t{constructor(t){this.store=t}ngOnInit(){this.ongoingTraining$=this.store.select(r.e)}}return t.\u0275fac=function(e){return new(e||t)(s.Pb(a.a))},t.\u0275cmp=s.Jb({type:t,selectors:[["app-training"]],decls:4,vars:6,consts:[[4,"ngIf"],["label","New Exercise"],["label","Past Exercises"]],template:function(t,e){1&t&&(s.zc(0,W,5,0,"mat-tab-group",0),s.ic(1,"async"),s.zc(2,_,1,0,"app-current-training",0),s.ic(3,"async")),2&t&&(s.mc("ngIf",!s.jc(1,2,e.ongoingTraining$)),s.Eb(2),s.mc("ngIf",s.jc(3,4,e.ongoingTraining$)))},directives:[o.m,b.b,b.a,E,N,H],pipes:[o.b],styles:[""]}),t})()}];let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[[i.c.forChild(B)],i.c]}),t})(),Z=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=s.Nb({type:t}),t.\u0275inj=s.Mb({imports:[[c.a,Y,a.b.forFeature("training",r.a)]]}),t})()}}]);