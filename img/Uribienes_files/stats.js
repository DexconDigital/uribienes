google.maps.__gjsload__('stats', function(_){var a2=function(){this.b=new _.tl},b2=function(a){var b=0,c=0;a.b.forEach(function(a){b+=a.ko;c+=a.In});return c?b/c:0},c2=function(a,b,c){var d=[];_.jk(a,function(a,c){d.push(c+b+a)});return d.join(c)},d2=function(a){var b={};_.jk(a,function(a,d){b[(0,window.encodeURIComponent)(d)]=(0,window.encodeURIComponent)(a).replace(/%7C/g,"|")});return c2(b,":",",")},e2=function(){var a=_.Nf[35]?_.N(_.zf(_.R),11):_.Ov,b=window.document;this.l=_.nj;this.f=a+"/maps/gen_204";this.j=b},f2=function(a,b,c,d){var e=
{};e.host=window.document.location&&window.document.location.host||window.location.host;e.v=a;e.r=Math.round(1/b);c&&(e.client=c);d&&(e.key=d);return e},g2=function(a,b,c,d){var e=_.L(_.R,0,1);this.m=a;this.C=b;this.l=e;this.f=c;this.j=d;this.b=new _.tl;this.A=_.Ra()},i2=function(a,b,c,d,e){var f=_.L(_.R,23,500);var g=_.L(_.R,22,2);this.D=a;this.G=b;this.H=f;this.l=g;this.C=c;this.m=d;this.A=e;this.f=new _.tl;this.b=0;this.j=_.Ra();h2(this)},h2=function(a){window.setTimeout(function(){j2(a);h2(a)},
Math.min(a.H*Math.pow(a.l,a.b),2147483647))},j2=function(a){var b=f2(a.G,a.C,a.m,a.A);b.t=a.b+"-"+(_.Ra()-a.j);a.f.forEach(function(a,d){a=a();0<a&&(b[d]=Number(a.toFixed(2))+(_.Lm()?"-if":""))});a.D.b({ev:"api_snap"},b);++a.b},k2=function(a,b,c,d,e){this.A=a;this.C=b;this.m=c;this.j=d;this.l=e;this.f={};this.b=[]},l2=function(a,b,c){var d=_.Zi;this.j=a;_.F.bind(this.j,"set_at",this,this.l);_.F.bind(this.j,"insert_at",this,this.l);this.A=b;this.C=d;this.m=c;this.f=0;this.b={};this.l()},m2=function(){this.j=
_.N(_.R,6);this.C=_.yf();this.b=new e2;_.Yi&&new l2(_.Yi,(0,_.t)(this.b.b,this.b),!!this.j);var a=_.N(new _.sf(_.R.data[3]),1);this.D=a.split(".")[1]||a;this.G={};this.A={};this.m={};this.H={};this.W=_.L(_.R,0,1);_.mj&&(this.l=new i2(this.b,this.D,this.W,this.j,this.C))};a2.prototype.f=function(a,b,c){this.b.set(_.Nc(a),{ko:b,In:c})};
e2.prototype.b=function(a,b){b=b||{};var c=_.xk().toString(36);b.src="apiv3";b.token=this.l;b.ts=c.substr(c.length-6);a.cad=d2(b);a=c2(a,"=","&");a=this.f+"?target=api&"+a;this.j.createElement("img").src=a;(b=_.gb.__gm_captureCSI)&&b(a)};
g2.prototype.D=function(a,b){b=_.p(b)?b:1;this.b.isEmpty()&&window.setTimeout((0,_.t)(function(){var a=f2(this.C,this.l,this.f,this.j);a.t=_.Ra()-this.A;var b=this.b;_.ul(b);for(var e={},f=0;f<b.b.length;f++){var g=b.b[f];e[g]=b.F[g]}_.Iz(a,e);this.b.clear();this.m.b({ev:"api_maprft"},a)},this),500);b=this.b.get(a,0)+b;this.b.set(a,b)};i2.prototype.register=function(a,b){this.f.set(a,b)};k2.prototype.D=function(a){this.f[a]||(this.f[a]=!0,this.b.push(a),2>this.b.length&&_.rA(this,this.G,500))};
k2.prototype.G=function(){for(var a=f2(this.C,this.m,this.j,this.l),b=0,c;c=this.b[b];++b)a[c]="1";a.hybrid=+_.um();this.b.length=0;this.A.b({ev:"api_mapft"},a)};l2.prototype.l=function(){for(var a;a=this.j.removeAt(0);){var b=a.ln;a=a.timestamp-this.C;++this.f;this.b[b]||(this.b[b]=0);++this.b[b];if(20<=this.f&&!(this.f%5)){var c={};c.s=b;c.sr=this.b[b];c.tr=this.f;c.te=a;c.hc=this.m?"1":"0";this.A({ev:"api_services"},c)}}};m2.prototype.Zb=function(a){a=_.Nc(a);this.G[a]||(this.G[a]=new k2(this.b,this.D,this.W,this.j,this.C));return this.G[a]};m2.prototype.ia=function(a){a=_.Nc(a);this.A[a]||(this.A[a]=new g2(this.b,this.D,this.j,this.C));return this.A[a]};m2.prototype.f=function(a){if(this.l){this.m[a]||(this.m[a]=new _.sB,this.l.register(a,function(){return b.ob()}));var b=this.m[a];return b}};
m2.prototype.ka=function(a){if(this.l){this.H[a]||(this.H[a]=new a2,this.l.register(a,function(){return b2(b)}));var b=this.H[a];return b}};var n2=new m2;_.ee("stats",n2);});
