"use strict";
/*Compiled using Cheerp (R) by Leaning Technologies Ltd*/
var __imul=Math.imul;
var __fround=Math.fround;
var oSlot=0;var nullArray=[null];var nullObj={d:nullArray,o:0};
function __ZN18NormalDistribution8generateEv(Lthis){
	var Ldist=null;
	Ldist=Lthis.a2;
	return +__ZNSt19normal_distributionIdEclISt23mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEEEdRT_RKNS0_10param_typeE(Ldist,Lthis,Ldist);
}
function __ZNSt19normal_distributionIdEclISt23mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEEEdRT_RKNS0_10param_typeE(Lthis,L__g,L__p){
	var Ladd$pi$pi=-0.,Lcall3$pi$pi20=-0.,Ladd=-0.;
	if((Lthis.i3&255)!==0){
		Lthis.i3=0;
		Lcall3$pi$pi20=+Lthis.d2;
	}else{
		while(1){
			Lcall3$pi$pi20=+__ZSt18generate_canonicalIdLj53ESt23mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEET_RT1_(L__g);
			Lcall3$pi$pi20=Lcall3$pi$pi20*2+ -1;
			Ladd$pi$pi= +__ZSt18generate_canonicalIdLj53ESt23mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEET_RT1_(L__g)*2+ -1;
			Ladd=Lcall3$pi$pi20*Lcall3$pi$pi20+Ladd$pi$pi*Ladd$pi$pi;
			if(Ladd>1)continue;
			if(Ladd===0)continue;
			break;
		}
		Ladd=+Math.sqrt( +Math.log(Ladd)* -2/Ladd);
		Lthis.d2=Ladd$pi$pi*Ladd;
		Lthis.i3=1;
		Lcall3$pi$pi20*=Ladd;
	}
	return Lcall3$pi$pi20* +L__p.d1+ +L__p.d0;
}
function __ZSt18generate_canonicalIdLj53ESt23mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEET_RT1_(L__g){
	var Lcall2=0;
	Lcall2=__ZNSt23mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEclEv(L__g)|0;
	return ((+((__ZNSt23mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEclEv(L__g)|0)>>>0))*4294967296+(+(Lcall2>>>0)))*5.4210108624275222E-20;
}
function __ZNSt23mersenne_twister_engineIjLj32ELj624ELj397ELj31ELj2567483615ELj11ELj4294967295ELj7ELj2636928640ELj15ELj4022730752ELj18ELj1812433253EEclEv(Lthis){
	var Lthis$poptgep$poptgep$poptgepsqueezed=null,Lrem=0,tmp2=0,Lxor23=0;
	Lxor23=Lthis.i1|0;
	Lthis$poptgep$poptgep$poptgepsqueezed=Lthis.a0;
	Lrem=(Lxor23+1>>>0)%624|0;
	tmp2=Lthis$poptgep$poptgep$poptgepsqueezed[Lrem]|0;
	Lthis$poptgep$poptgep$poptgepsqueezed[Lxor23]=-(tmp2&1)& -1727483681^(Lthis$poptgep$poptgep$poptgepsqueezed[(Lxor23+397>>>0)%624|0]|0)^(tmp2&2147483646|Lthis$poptgep$poptgep$poptgepsqueezed[Lxor23]& -2147483648)>>>1;
	Lxor23=Lthis$poptgep$poptgep$poptgepsqueezed[Lthis.i1|0]|0;
	Lxor23^=(Lxor23>>>11);
	Lthis.i1=Lrem;
	Lxor23^=(Lxor23<<7& -1658038656);
	Lxor23^=(Lxor23<<15& -272236544);
	return Lxor23>>>18^Lxor23|0;
}
function __ZN18NormalDistributionC1Ev(Lthis){
	var Lcall=0,L$poptgep$poptgep$poptgepsqueezed=null,L__i$p09$pi$pi=0;
	Lcall=__Z7getSeedv()|0;
	L$poptgep$poptgep$poptgepsqueezed=Lthis.a0;
	L$poptgep$poptgep$poptgepsqueezed[0]=Lcall;
	L__i$p09$pi$pi=1;
	while(1){
		Lcall=(__imul(Lcall>>>30^Lcall,1812433253)|0)+L__i$p09$pi$pi|0;
		L$poptgep$poptgep$poptgepsqueezed[L__i$p09$pi$pi]=Lcall;
		L__i$p09$pi$pi=L__i$p09$pi$pi+1|0;
		if((L__i$p09$pi$pi|0)!==624)continue;
		break;
	}
	Lthis.i1=0;
	L$poptgep$poptgep$poptgepsqueezed=Lthis.a2;
	L$poptgep$poptgep$poptgepsqueezed.d0=0;
	L$poptgep$poptgep$poptgepsqueezed.d1=1;
	L$poptgep$poptgep$poptgepsqueezed.i3=0;
}
function __Z7getSeedv(){
	var Lref$ptmp=null,tmp1=null,Lgeptoindexphi=0,L$pidx$pi=0;
	Lref$ptmp={i0:0,i1:0,a2:nullArray};
	tmp1=new Uint8Array(16);
	Lref$ptmp.a2=tmp1;
	Lref$ptmp.i0=17;
	Lref$ptmp.i1=12;
	L$pidx$pi=0;
	Lgeptoindexphi=0;
	while(1){
		tmp1[L$pidx$pi]=_$pstr$p82$p433[0+Lgeptoindexphi|0]|0;
		L$pidx$pi=L$pidx$pi+1|0;
		if((L$pidx$pi|0)===12){
			tmp1[12]=0;
			__ZNSt13random_deviceC2ERKSs(Lref$ptmp);
			return ~~( +Math.random()*4294967296)|0;
		}
		Lgeptoindexphi=Lgeptoindexphi+1|0;
		continue;
	}
}
function __ZNSt13random_deviceC2ERKSs(L__token){
	var tmp0=0,tmp1=null,tmp2=null,Ladd$pi=0,L$psroa$pspeculated21$pi$pi=0,Lref$ptmp=null,Lgeptoindexphi2=0;
	tmp0=L__token.i1|0;
	L$psroa$pspeculated21$pi$pi=tmp0>>>0>12?12|0:tmp0|0;
	a:{
		if((L$psroa$pspeculated21$pi$pi|0)!==0){
			Lref$ptmp=L__token.a2;
			L$psroa$pspeculated21$pi$pi=(_memcmp(Lref$ptmp,0,L$psroa$pspeculated21$pi$pi)|0|0)!==0?1:0;
			if((tmp0>>>0>12?1:0)^(tmp0>>>0>11?1:0))if(!(L$psroa$pspeculated21$pi$pi))break a;
		}else if((tmp0>>>0>12?1:0)^(tmp0>>>0>11?1:0))break a;
		Lref$ptmp={i0:0,i1:0,a2:nullArray};
		L$psroa$pspeculated21$pi$pi=tmp0+44& -16;
		tmp1=new Uint8Array(L$psroa$pspeculated21$pi$pi/1|0);
		Lref$ptmp.a2=tmp1;
		Lref$ptmp.i0=L$psroa$pspeculated21$pi$pi|1;
		Lref$ptmp.i1=28;
		tmp1[0]=114;
		tmp1[1]=97;
		tmp1[2]=110;
		tmp1[3]=100;
		tmp1[4]=111;
		tmp1[5]=109;
		tmp1[6]=32;
		tmp1[7]=100;
		tmp1[8]=101;
		tmp1[9]=118;
		tmp1[10]=105;
		tmp1[11]=99;
		tmp1[12]=101;
		tmp1[13]=32;
		tmp1[14]=110;
		tmp1[15]=111;
		tmp1[16]=116;
		tmp1[17]=32;
		tmp1[18]=115;
		tmp1[19]=117;
		tmp1[20]=112;
		tmp1[21]=112;
		tmp1[22]=111;
		tmp1[23]=114;
		tmp1[24]=116;
		tmp1[25]=101;
		tmp1[26]=100;
		tmp1[27]=32;
		tmp1[28]=0;
		tmp2=L__token.a2;
		L$psroa$pspeculated21$pi$pi=(L$psroa$pspeculated21$pi$pi|0)!==0?L$psroa$pspeculated21$pi$pi-1|0:0|0;
		Ladd$pi=tmp0+28|0;
		if(L$psroa$pspeculated21$pi$pi-28>>>0<tmp0>>>0)__ZNSs21__grow_by_and_replaceEjjjjjjPKc(Lref$ptmp,L$psroa$pspeculated21$pi$pi,Ladd$pi-L$psroa$pspeculated21$pi$pi|0,28,28,tmp0,tmp2,0);
		else if((tmp0|0)!==0){
			Lgeptoindexphi2=28;
			L$psroa$pspeculated21$pi$pi=0;
			while(1){
				tmp1[Lgeptoindexphi2]=tmp2[L$psroa$pspeculated21$pi$pi]|0;
				Lgeptoindexphi2=Lgeptoindexphi2+1|0;
				if(tmp1!==tmp1||((0+28|0)+tmp0|0)!==(0+Lgeptoindexphi2|0)){
					L$psroa$pspeculated21$pi$pi=L$psroa$pspeculated21$pi$pi+1|0;
					continue;
				}
				break;
			}
			Lref$ptmp.i1=Ladd$pi;
			tmp1[Ladd$pi]=0;
		}
	}
}
function __ZNSs21__grow_by_and_replaceEjjjjjjPKc(Lthis,L__old_cap,L__delta_cap,L__old_sz,L__n_copy,L__n_add,L__p_new_stuff,M__p_new_stuff){
	var tmp0=null,tmp1=null,Lgeptoindexphi=0,Lmul=0,Ladd=0,Lgeptoindex3=0,Lgeptoindexphi2=0;
	tmp0=Lthis.a2;
	if(L__old_cap>>>0<2147483623){
		Lmul=L__old_cap<<1;
		Ladd=L__delta_cap+L__old_cap|0;
		Lmul=(Ladd>>>0<Lmul>>>0?Lmul|0:Ladd|0)+16& -16;
	}else{
		Lmul=-17;
	}
	tmp1=new Uint8Array(Lmul/1|0);
	if((L__n_copy|0)!==0){
		Lgeptoindex3=0;
		Ladd=0;
		while(1){
			tmp1[Lgeptoindex3]=tmp0[Ladd]|0;
			Lgeptoindex3=Lgeptoindex3+1|0;
			if(tmp1!==tmp1||(0+L__n_copy|0)!==(0+Lgeptoindex3|0)){
				Ladd=Ladd+1|0;
				continue;
			}
			break;
		}
	}
	if((L__n_add|0)!==0){
		Lgeptoindex3=L__n_copy;
		Ladd=0;
		while(1){
			tmp1[Lgeptoindex3]=L__p_new_stuff[M__p_new_stuff+Ladd|0]|0;
			Lgeptoindex3=Lgeptoindex3+1|0;
			if(tmp1!==tmp1||((0+L__n_copy|0)+L__n_add|0)!==(0+Lgeptoindex3|0)){
				Ladd=Ladd+1|0;
				continue;
			}
			break;
		}
	}
	Ladd=L__old_sz-L__n_copy|0;
	if((Ladd|0)!==0){
		Lgeptoindex3=L__n_copy+L__n_add|0;
		Lgeptoindexphi2=Lgeptoindex3;
		Lgeptoindexphi=L__n_copy;
		while(1){
			tmp1[Lgeptoindexphi2]=tmp0[Lgeptoindexphi]|0;
			Lgeptoindexphi2=Lgeptoindexphi2+1|0;
			if(tmp1!==tmp1||((0+Lgeptoindex3|0)+Ladd|0)!==(0+Lgeptoindexphi2|0)){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				continue;
			}
			break;
		}
	}
	Lthis.a2=tmp1;
	Lthis.i0=Lmul|1;
	Lmul=L__n_add+L__old_sz|0;
	Lthis.i1=Lmul;
	tmp1[Lmul]=0;
}
function _memcmp(Lm1,Mm1,Ln){
	var Lgeptoindexphi=0,Lgeptoindexphi2=0,tmp2=0,tmp3=0,Ldec6$pin=0;
	if((Ln|0)===0)return 0|0;
	Lgeptoindexphi2=0;
	Lgeptoindexphi=0;
	Ldec6$pin=Ln;
	while(1){
		tmp2=Lm1[Mm1+Lgeptoindexphi2|0]|0;
		tmp3=_$pstr$p82$p433[0+Lgeptoindexphi|0]|0;
		if((tmp2&255)===(tmp3&255)){
			Ldec6$pin=Ldec6$pin-1|0;
			if((Ldec6$pin|0)!==0){
				Lgeptoindexphi=Lgeptoindexphi+1|0;
				Lgeptoindexphi2=Lgeptoindexphi2+1|0;
				continue;
			}
			return 0|0;
		}
		break;
	}
	return (tmp2&255)-(tmp3&255)|0;
}
function __Z7shuffleRN6client5ArrayE(Larray){
	var Lrng=null,Lrem$pi$pi$pi=0;
	Lrng=[0];
	Lrem$pi$pi$pi=((__Z7getSeedv()|0)>>>0)%2147483647|0;
	Lrng[0]=(Lrem$pi$pi$pi|0)!==0?Lrem$pi$pi$pi|0:1|0;
	__ZSt7shuffleIPPN6client6ObjectERSt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEEvT_S7_OT0_(Larray,0,Larray,0+(Larray.length)|0,Lrng);
}
function __ZSt7shuffleIPPN6client6ObjectERSt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEEvT_S7_OT0_(L__first,M__first,L__last,M__last,L__g){
	var Lref$ptmp=null,Lcall2=0,tmp2=null,Lsub$pptr$psub=0,Lgeptoindexphi=0;
	Lsub$pptr$psub=(Math.imul(M__last,4))-(Math.imul(M__first,4))|0;
	if((Lsub$pptr$psub|0)>4)if((M__last+ -1|0)>M__first){
		Lref$ptmp={i0:0,i1:0};
		Lsub$pptr$psub>>>=2;
		Lgeptoindexphi=0;
		while(1){
			Lref$ptmp.i0=0;
			Lsub$pptr$psub=Lsub$pptr$psub-1|0;
			Lref$ptmp.i1=Lsub$pptr$psub;
			Lcall2=__ZNSt24uniform_int_distributionIlEclISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEEElRT_RKNS0_10param_typeE(L__g,Lref$ptmp)|0;
			if((Lcall2|0)!==0){
				tmp2=L__first[M__first+Lgeptoindexphi|0];
				L__first[M__first+Lgeptoindexphi|0]=L__first[(M__first+Lgeptoindexphi|0)+Lcall2|0];
				L__first[(M__first+Lgeptoindexphi|0)+Lcall2|0]=tmp2;
			}
			Lgeptoindexphi=Lgeptoindexphi+1|0;
			if((M__first+Lgeptoindexphi|0)<(M__last+ -1|0))continue;
			break;
		}
	}
}
function __ZNSt24uniform_int_distributionIlEclISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEEElRT_RKNS0_10param_typeE(L__g,L__p){
	var Ltmp=null,Ladd=0,Lsub=0;
	Ladd=L__p.i0|0;
	Lsub=(L__p.i1|0)-Ladd|0;
	Ltmp=new constructor_class$p_ZSt25__independent_bits_engineISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEjE();
	switch(Lsub|0){
		case 0:
		return Ladd|0;
		case -1:
		Ltmp.a0=L__g;
		Ltmp.i1=32;
		Ltmp.i3=2;
		Ltmp.i2=16;
		Ltmp.i5=2147418112;
		Ltmp.i4=2;
		Ltmp.i6=2147352576;
		Ltmp.i7=65535;
		Ltmp.i8=131071;
		return __ZNSt25__independent_bits_engineISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEjE6__evalESt17integral_constantIbLb1EE(Ltmp)|0|0;
		default:
		Ladd=Lsub+1|0;
		Lsub=Math.clz32(Ladd);
		Lsub=32-Lsub|0;
		__ZNSt25__independent_bits_engineISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEjEC2ERS1_j(Ltmp,L__g,Lsub+((( -1>>>(33-Lsub|0)&Ladd|0)===0?1:0)<<31>>31)|0);
		while(1){
			Lsub=__ZNSt25__independent_bits_engineISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEjE6__evalESt17integral_constantIbLb1EE(Ltmp)|0;
			if(Lsub>>>0>=Ladd>>>0)continue;
			break;
		}
		Ladd=L__p.i0|0;
		return Ladd+Lsub|0;
	}
}
function __ZNSt25__independent_bits_engineISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEjEC2ERS1_j(Lthis,L__e,L__w){
	var Lshl$psink=0,Ldiv=0,Ladd=0;
	Lthis.a0=L__e;
	Lthis.i1=L__w;
	Ldiv=(L__w>>>0)/30|0;
	Ladd=Ldiv+((__imul(Ldiv,-30)|0)!==(-L__w|0)?1:0)|0;
	Lthis.i3=Ladd;
	Ldiv=(L__w>>>0)/(Ladd>>>0)|0;
	Lthis.i2=Ldiv;
	if(Ldiv>>>0<32){
		Lshl$psink=2147483646>>>Ldiv<<Ldiv;
	}else{
		Lshl$psink=0;
	}
	Lthis.i5=Lshl$psink;
	a:{
		if(2147483646-Lshl$psink>>>0>(Lshl$psink>>>0)/(Ladd>>>0)>>>0){
			Ladd=Ladd+1|0;
			Lthis.i3=Ladd;
			Ldiv=(L__w>>>0)/(Ladd>>>0)|0;
			Lthis.i2=Ldiv;
			if(Ldiv>>>0>=32){
				Lthis.i5=0;
				Lthis.i4=(Ladd-L__w|0)+(__imul(Ldiv,Ladd)|0)|0;
				break a;
			}
			Lthis.i5=2147483646>>>Ldiv<<Ldiv;
		}
		Lthis.i4=Ladd-((L__w>>>0)%(Ladd>>>0)|0)|0;
		if(Ldiv>>>0<31){
			Ladd=Ldiv+1|0;
			Lthis.i6=2147483646>>>Ladd<<Ladd;
			if((Ldiv|0)!==0){
				Ladd= -1>>>(32-Ldiv|0);
			}else{
				Ladd=0;
			}
			Lthis.i7=Ladd;
			Lthis.i8= -1>>>(31-Ldiv|0);
			return;
		}
	}
	Lthis.i6=0;
	Lthis.i7= -1>>>(32-Ldiv|0);
	Lthis.i8=-1;
}
function __ZNSt25__independent_bits_engineISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEjE6__evalESt17integral_constantIbLb1EE(Lthis){
	var L$plcssa=0,tmp1=null,tmp2=0,tmp3=0,Lcmp22=0,Lcmp4=0,Ladd25=0,L_Sp$p0$plcssa=0,L__k$p051=0,Ldiv$pi$pi=0;
	L$plcssa=Lthis.i4|0;
	if((L$plcssa|0)!==0){
		tmp1=Lthis.a0;
		tmp2=Lthis.i5|0;
		tmp3=Lthis.i2|0;
		Lcmp22=Lthis.i7|0;
		Lcmp4=tmp3>>>0<32?1:0;
		Ladd25=tmp1[0]|0;
		L__k$p051=0;
		L_Sp$p0$plcssa=0;
		while(1){
			Ldiv$pi$pi=(Ladd25>>>0)/44488|0;
			Ladd25=__imul((__imul(Ldiv$pi$pi,-44488)|0)+Ladd25|0,48271)|0;
			Ldiv$pi$pi=__imul(Ldiv$pi$pi,3399)|0;
			Ladd25=(Ladd25>>>0<Ldiv$pi$pi>>>0?2147483647|0:0|0)+(Ladd25-Ldiv$pi$pi|0)|0;
			Ldiv$pi$pi=Ladd25-1|0;
			if(Ldiv$pi$pi>>>0>=tmp2>>>0)continue;
			L_Sp$p0$plcssa=(Ldiv$pi$pi&Lcmp22)+(Lcmp4?L_Sp$p0$plcssa<<tmp3|0:0|0)|0;
			L__k$p051=L__k$p051+1|0;
			if((L__k$p051|0)!==(L$plcssa|0))continue;
			break;
		}
		tmp1[0]=Ladd25;
	}else{
		L$plcssa=0;
		L_Sp$p0$plcssa=0;
	}
	tmp2=Lthis.i3|0;
	if(L$plcssa>>>0>=tmp2>>>0)return L_Sp$p0$plcssa|0;
	tmp1=Lthis.a0;
	tmp3=Lthis.i6|0;
	Lcmp22=Lthis.i2|0;
	Lcmp4=Lthis.i8|0;
	Ladd25=Lcmp22+1|0;
	Lcmp22=Lcmp22>>>0<31?1:0;
	L__k$p051=tmp1[0]|0;
	while(1){
		Ldiv$pi$pi=(L__k$p051>>>0)/44488|0;
		L__k$p051=__imul((__imul(Ldiv$pi$pi,-44488)|0)+L__k$p051|0,48271)|0;
		Ldiv$pi$pi=__imul(Ldiv$pi$pi,3399)|0;
		L__k$p051=(L__k$p051>>>0<Ldiv$pi$pi>>>0?2147483647|0:0|0)+(L__k$p051-Ldiv$pi$pi|0)|0;
		Ldiv$pi$pi=L__k$p051-1|0;
		if(Ldiv$pi$pi>>>0>=tmp3>>>0)continue;
		L_Sp$p0$plcssa=(Ldiv$pi$pi&Lcmp4)+(Lcmp22?L_Sp$p0$plcssa<<Ladd25|0:0|0)|0;
		L$plcssa=L$plcssa+1|0;
		if((L$plcssa|0)!==(tmp2|0))continue;
		break;
	}
	tmp1[0]=L__k$p051;
	return L_Sp$p0$plcssa|0;
}
function __Z3gcdii(La,Lb){
	var Lb$paddr$p02=0,La$paddr$p03=0,tmp2=0;
	if((Lb|0)===0)return La|0;
	Lb$paddr$p02=Lb;
	La$paddr$p03=La;
	while(1){
		La$paddr$p03=(La$paddr$p03|0)%(Lb$paddr$p02|0)|0;
		if((La$paddr$p03|0)!==0){
			tmp2=La$paddr$p03;
			La$paddr$p03=Lb$paddr$p02;
			Lb$paddr$p02=tmp2;
			continue;
		}
		break;
	}
	return Lb$paddr$p02|0;
}
var _$pstr$p82$p433=new Uint8Array([47,100,101,118,47,117,114,97,110,100,111,109,0]);
function constructor_class$p_ZSt25__independent_bits_engineISt26linear_congruential_engineIjLj48271ELj0ELj2147483647EEjE(){
	this.a0=nullArray;
	this.i1=0;
	this.i2=0;
	this.i3=0;
	this.i4=0;
	this.i5=0;
	this.i6=0;
	this.i7=0;
	this.i8=0;
}
var gcd=__Z3gcdii;
var shuffle=__Z7shuffleRN6client5ArrayE;
function NormalDistribution(){
	this.a0=new Int32Array(624);
	this.i1=0;
	this.a2={d0:-0.,d1:-0.,d2:-0.,i3:0};
	;
	this.d=[this];
	if (arguments.length===1&&arguments[0]===undefined){
		return;
	}
	__ZN18NormalDistributionC1Ev(this);
};
NormalDistribution.prototype.generate=function (){
	return __ZN18NormalDistribution8generateEv(this);
};
NormalDistribution.promise=
gcd.promise=
shuffle.promise=
Promise.resolve();
