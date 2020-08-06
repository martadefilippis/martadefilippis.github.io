(
function () {
    var schermo = document.getElementById("schermo");
	schermo.style.backgroundColor = "white";
    schermo.style.height ="600px";
    schermo.style.width = "500px";

    var blackBox = document.getElementById("blackBox");
//    var compiler = document.createElement("div"); 
//    var style = compiler.style;
//    style.backgroundSize = "100%";
   blackBox.style.height= "200px";
   blackBox.style.width= "200px";
   blackBox.style.backgroundColor = "rgb(40,40,40)";
   blackBox.style.position = "absolute";
   blackBox.style.top = "0px";
   blackBox.style.left = "300px";
//   style.backgroundImage = "url(../assets/img/leaningtech/cheerp_symbol.png)";
//    style.height ="132px";
//    style.width = "120px";
//	    style.zIndex = "200";
	    blackBox.style.zIndex = "198";
//    style.position = "relative";
//    style.left = "20%";
//    style.top = "18%";

    var SinkX = 400;
    var SinkY = 100;

    var canvas = document.createElement("canvas");
   canvas.height= 200;
   canvas.width= 200;
   canvas.style.position= "absolute";
   canvas.style.top= "0%";
   canvas.style.left= "0%";
    canvas.style.zIndex = "199";
//    blackBox.appendChild(compiler);
    blackBox.appendChild(canvas);
    var ctx = canvas.getContext("2d");
ctx.fillStyle = "rgb(255,255,255)";
ctx.beginPath();
ctx.rect(10, 10, 180, 180);
ctx.fill();
/*
   ctx.fillStyle = "rgb(0,0,0)";
ctx.beginPath();
ctx.rect(20, 20, 160, 160);
ctx.fill();
*/
/*
  ctx.beginPath();
ctx.rect(10, 10, 20, 20);
ctx.fill();
ctx.beginPath();
ctx.rect(10, 170, 20, 20);
ctx.fill();
ctx.fill();
ctx.beginPath();
ctx.rect(170, 10, 20, 20);
ctx.fill();
ctx.beginPath();
ctx.rect(170, 170, 20, 20);
ctx.fill();
*/
var SIDE = 9;
var full = ctx.getImageData(0,0,SIDE,SIDE);
var empty = ctx.getImageData(10,10,SIDE,SIDE);
var xxxx = 10;
var yyyy = 10;

var angle = 0;
function rotateRotors()
{
	return;
	var A  =document.getElementById("rotor1");
	A.setAttribute("trasform", "rotate("+angle+", 20,20)");
	angle += 0.1;

}

var conveyorBelt = ctx.getImageData(30, 10, 140, 10);
var conveyorBelt2 = ctx.getImageData(30, 180, 140, 10);
var conveyorBelt3 = ctx.getImageData(10, 30, 10, 140);
var conveyorBelt4 = ctx.getImageData(180, 30, 10, 140);
var A=0;
var C = -100;
var STARTED = 0;
function moveConveyor()
{
	if (C++ < 0)
		return;
	if (C == 1 && STARTED == 0)
	{
		STARTED = 1;
		document.getElementById("rotor1").beginElement();
		document.getElementById("rotor3").beginElement();
		document.getElementById("rotor4").beginElement();
		document.getElementById("rotor2").beginElement();
	}
	ctx.putImageData(((Math.random() < 0.5  && phase == 0)? full : empty), xxxx, yyyy);
	yyyy += SIDE;
	if (yyyy === 190)
	{
		yyyy = 10;
		xxxx += SIDE;
		if (xxxx === 190)
		{
			xxxx = 10;
			C = -10;
		}
	}
		if (phase != 0 && Math.random() < 0.1)
			C = -1;
	return;

	for (var i = 0; i<140; i++)
		for (var j = 0; j<10; j++)
		{
			var o = j*140 + i;
			var color = (16 + A - i%16)%16;
			if (color > 7)
				color = 16 - color;
			var color2 = (16+16 - A - i%16)%16;
			if (color2 > 7)
				color2 = 16 - color2;
			var buffo = (color <= j);
			var buffo2 = (color2 > j);
			conveyorBelt.data[o*4+0] = buffo?0: 255;
			conveyorBelt.data[o*4+1] = conveyorBelt.data[o*4+0];
			conveyorBelt.data[o*4+2] = conveyorBelt.data[o*4+0];
			conveyorBelt2.data[o*4+0] = buffo2?0: 255;
			conveyorBelt2.data[o*4+1] = conveyorBelt2.data[o*4+0];
			conveyorBelt2.data[o*4+2] = conveyorBelt2.data[o*4+0];
		}

	ctx.putImageData(conveyorBelt, 30, 10);
	ctx.putImageData(conveyorBelt2, 30, 180);
	for (var j = 0; j<10; j++)
		for (var i = 0; i<140; i++)
		{
			var o = i*10 + j;
			var color = (16 + 15- A - (i%16))%16;
			if (color > 7)
				color = 16 - color;
			var color2 = (16+16 - (15-A) - (i%16))%16;
			if (color2 > 7)
				color2 = 16 - color2;
			var buffo = (color <= j);
			var buffo2 = (color2 > j);
			conveyorBelt3.data[o*4+0] = buffo?0: 255;
			conveyorBelt3.data[o*4+1] = conveyorBelt3.data[o*4+0];
			conveyorBelt3.data[o*4+2] = conveyorBelt3.data[o*4+0];
			conveyorBelt4.data[o*4+0] = buffo2?0: 255;
			conveyorBelt4.data[o*4+1] = conveyorBelt4.data[o*4+0];
			conveyorBelt4.data[o*4+2] = conveyorBelt4.data[o*4+0];
		}

	ctx.putImageData(conveyorBelt3, 10, 30);
	ctx.putImageData(conveyorBelt4, 180, 30);
	A++;
	if (A == 16)
		A = 0;
}




    var files = new Array(10);
    var files2 = new Array(300);
    var N = 0;
    var N1 = 0;
    var M = 0;
    var M1 = 0;
    var z = 1;


    function addFile()
    {
	    var file = document.createElement("div");
	    var style = file.style;
	    style.backgroundSize = "100%";
	    style.backgroundImage = "url(../assets/svg/icons-Yaru/page.svg)";
	    style.position = "absolute";
	    style.zIndex = "" + z++;
	    style.left = "5%";
	    style.top = "10%";

    		schermo.appendChild(file);
		var time = 200;
	    files[N] = file;
	    files[N].x = 10 + Math.random()*30;
	    files[N].y = 10 + Math.random()*100;
	    files[N].velx = (SinkX - files[N].x) / time;
	    files[N].vely = (SinkY - files[N].y) / time;
	    files[N].h = 100;
	    files[N].w = 100;
	    files[N].velh = -files[N].h/time;
	    files[N].velw = -files[N].w/time;
	    N++;
    }
    var xxStart = 15.0;
    var xx = xxStart;
    var yy = 100;
    var velBoxes =3 ;
    var dimBoxes = 16;
    var wBoxes = 13;

	var JS = "fetchBuffer('file.wasm')\n.then(f=>WebAssembly.instantiate(f,{i:{g0:_asm_g0,aI:aI,dn:dn,ug:ug,}}),console.log)\n.then(f=>{var i=f.instance;\na=new Uint8Array(i.exports.ui.buffer);\nb=new Uint16Array(i.exports.ui.buffer);\nc=new Int32Array(i.exports.ui.buffer);\nd=new Float32Array(i.exports.ui.buffer);\ne=new Float64Array(i.exports.ui.buffer);\n__asm=i.exports;\n__heap=i.exports.ui.buffer;\n__asm.ey();__asm.eK();i.exports.g8();},console.log,console.log);";
    var pipps = document.createElement("div");
    pipps.style.textAlign = "left";
    pipps.style.fontSize = "10px";
    pipps.style.width = "450px";
    pipps.style.height = "230px";
   // pipps.classList.add("btn-secondary");
//    pipps.style.backgroundColor = "rgb(210,210,210)";
    pipps.style.backgroundColor = "rgb(255,255,255)";
    pipps.style.position = "absolute";
    pipps.style.top = "30%";
//    pipps.innerHTML=JS;
	schermo.appendChild(pipps);

    function addBox(text, W)
    {
	    var file = document.createElement("div");
	    var style = file.style;
	    style.position = "absolute";
	    style.zIndex = "" + z;
	    var inner = text;
	    file.innerHTML = inner;
	    style.textAlign ="center";
	    style.fontSize = "10px";
	    style.fontFamily = "monospace";
		style.font = "monospace";
	style.width = "" + (W*wBoxes-1) +"px";
	file.classList.add("btn-primary");


    		pipps.appendChild(file);
		var time = 200;
	    if (xx +wBoxes*W >= 445.0)
	    {
		    xx = xxStart;
		    yy += dimBoxes;
	    }
	    files2[M] = file;
	    files2[M].inner = inner;
	    files2[M].destX = xx;
	    files2[M].destY = yy;
	    xx += wBoxes*W ;
	    files2[M].x = 500.0;
	    files2[M].y = -150.0;
	    files2[M].style.left = "" + files2[M].x + "px";
	    files2[M].style.top = "" + files2[M].y + "px";
	    files2[M].velx = 0;
	    files2[M].vely = velBoxes;
	    files2[M].valid = 1;
	    files2[M].choice1 = M+1;
	    files2[M].choice2 = M+1;
if (M == 121)
{
files2[2].choice2 = 121;
files2[10].choice2 = 65;	//????//(
files2[64].choice2 = 120;
files2[64].choice1 = 120;
files2[14].choice2 = 121;
files2[23].choice2 = 56;
files2[51].choice2 = 26;
files2[63].choice2 = 17;	//(
files2[69].choice2 = 121;
files2[106].choice2 = 81;	//????//(
files2[118].choice2 = 72;
files2[78].choice2 = 111;
}
	    M++;
    }


var c = 0;
var degree = 0;
var phase = 0;
var rows = Array(30);
var R = 0;
/*
var piffero = "




































h> 2
LOAD 3
( 1				-------
h> 2
LOAD 3
256 2
& 1
h> 2
LOAD 3
>k 2
( 1				-------
k> 2
0 1
L 1
?1 2
0 1
>l 2
[ 1				--------
a> 2
LOAD 3
>m> 2
0 1
G 1
( 1
0 1
>k 2
[ 1				--------
k> 2
2 1
W 1
a> 2
LOAD 3
+ 1
LOAD 3
136 2
* 1
a> 2
LOAD 3
+ 1
>n> 2
LOAD 3
n> 2
LOAD 3
n> 2
#123 2
k> 2
1 1
+ 1
>k> 2
m> 2
L 1
?0 2
] 1
h> 2
LOAD 3
>k 2
) 1
l> 2
1 1
+ 1
>l> 2
k> 2
L 1
?0 2
] 1
V 1
k> 2
0 1
L 1
?1 2
0 1
>l 2
[ 1	--------
a> 2
LOAD 3
>m> 2
0 1
G 1
( 1
0 1
>k 2
[ 1	--------
k> 2
2 1
W 1
a> 2
LOAD 3
+ 1
LOAD 3
136 2
* 1
a> 2
LOAD 3
+ 1
>n> 2
LOAD 3
n> 2
LOAD 3
n> 2
#123 2
k> 2
1 1
+ 1
>k> 2
m> 2
L 1
?0 2
] 1
h> 2
LOAD 3
>k 2
) 1
l> 2
1 1
+ 1
>l> 2
k> 2
L 1
?0 2
] 1
) 1
) 1
*/
var piffero = "h> 2 LOAD 3 ( 1 h> 2 LOAD 3 256 2 & 1 h> 2 LOAD 3 >k 2 ( 1 k> 2 0 1 L 1 ?1 2 0 1 >l 2 [ 1 a> 2 LOAD 3 >m> 2 0 1 G 1 ( 1 0 1 >k 2 [ 1 k> 2 2 1 W 1 a> 2 LOAD 3 + 1 LOAD 3 136 2 * 1 a> 2 LOAD 3 + 1 >n> 2 LOAD 3 n> 2 LOAD 3 n> 2 #123 2 k> 2 1 1 + 1 >k> 2 m> 2 L 1 ?0 2 ] 1 h> 2 LOAD 3 >k 2 ) 1 l> 2 1 1 + 1 >l> 2 k> 2 L 1 ?0 2 ] 1 V 1 k> 2 0 1 L 1 ?1 2 0 1 >l 2 [ 1 a> 2 LOAD 3 >m> 2 0 1 G 1 ( 1 0 1 >k 2 [ 1 k> 2 2 1 W 1 a> 2 LOAD 3 + 1 LOAD 3 136 2 * 1 a> 2 LOAD 3 + 1 >n> 2 LOAD 3 n> 2 LOAD 3 n> 2 #123 2 k> 2 1 1 + 1 >k> 2 m> 2 L 1 ?0 2 ] 1 h> 2 LOAD 3 >k 2 ) 1 l> 2 1 1 + 1 >l> 2 k> 2 L 1 ?0 2 ] 1 ) 1 ) 1";
	var splitted = piffero.split(" ");
	var xxx = 0;
var next_executed = 0;
var total_executed = 0;
var B = 0;
var built = false;
var stackBalls = Array(20);
var stackBalls1 = Array(20);
var stackBalls2 = Array(20);
var STACK = document.createElement("div");
STACK.style.position = "absolute";
STACK.style.height = "80px";
STACK.style.width = "20px";
STACK.style.top = "500px";
STACK.style.left = "70px";
schermo.appendChild(STACK);
var STACK1 = document.createElement("div");
STACK1.style.position = "absolute";
STACK1.style.height = "80px";
STACK1.style.width = "20px";
STACK1.style.top = "480px";
STACK1.style.left = "240px";
schermo.appendChild(STACK1);
var STACK2 = document.createElement("div");
STACK2.style.position = "absolute";
STACK2.style.height = "80px";
STACK2.style.width = "20px";
STACK2.style.top = "500px";
STACK2.style.left = "410px";
schermo.appendChild(STACK2);

var topConnector = 310;
var heightConnector = 115;
var widthConnector = 10;
var Connector1 = document.createElement("div");
Connector1.style.backgroundColor="rgb(234,30,105)";
Connector1.style.position = "absolute";
Connector1.style.bottom = ""+heightConnector+"px";
Connector1.style.width = "10px";
Connector1.style.top = "310px";
Connector1.style.left = "30px";
var Connector2 = document.createElement("div");
Connector2.style.backgroundColor="rgb(234,30,105)";
Connector2.style.position = "absolute";
Connector2.style.height = "10px";
Connector2.style.width = "10px";
Connector2.style.top = "465px";
Connector2.style.left = "30px";
var ConnectorAdded = 0;
var velSlide = 5;
var slide = -velSlide;
var distanceSlide = 170;
var tablet = document.createElement("div");
var computer = document.createElement("div");
var phone = document.createElement("div");
function slideDevices()
{
	slide+=velSlide;
	if (slide == 0)
	{
	    var style = tablet.style;
	    style.backgroundSize = "100%";
	   style.backgroundImage = "url(../assets/svg/icons-Yaru/tablet.svg)";
	    style.height ="100px";
	    style.width = "100px";
	    style.position = "absolute";
	    style.top = "" + (480) + "px";
	    style.left = "" + slide + "px";
	    schermo.appendChild(tablet);
	}
	if (slide == distanceSlide)
	{
	    var style = computer.style;
	    style.backgroundSize = "100%";
	   style.backgroundImage = "url(../assets/svg/icons-Yaru/computer.svg)";
	    style.height ="100px";
	    style.width = "100px";
	    style.position = "absolute";
	    style.top = "" + 480 + "px";
	    style.left = "" + slide -distanceSlide + "px";
	schermo.appendChild(computer);
	}
	if (slide == 2*distanceSlide)
	{
	    var style = phone.style;
	    style.backgroundSize = "100%";
	   style.backgroundImage = "url(../assets/svg/icons-Yaru/phone.svg)";
	    style.height ="100px";
	    style.width = "100px";
	    style.position = "absolute";
	    style.top = "" + 480 + "px";
	    style.left = "" + slide -2*distanceSlide + "px";
	schermo.appendChild(phone);
	}
	if (slide == 370)
		return;
	if (slide == 750)
		return;
	if (slide == 400)
	{
		schermo.removeChild(tablet);
	}
	else if (slide > 0)
	{
		tablet.style.left = "" + slide + "px";
	}
	if (slide == 400+distanceSlide)
	{
		schermo.removeChild(computer);
	}
	else if (slide > distanceSlide)
	{
		computer.style.left = "" + (slide-distanceSlide) + "px";
	}
	if (slide == 400+2*distanceSlide)
	{
		schermo.removeChild(phone);
		schermo.removeChild(pipps);
	}
	else if (slide > 2*distanceSlide)
	{
		phone.style.left = "" + (slide-2*distanceSlide) + "px";
	}
}

function addConnectors()
{
	if (ConnectorAdded == 0)
	{
		ConnectorAdded = 1;
		schermo.appendChild(Connector1);
		return;
	}
	if (heightConnector < 165 && topConnector===310)
	{
		heightConnector+=5;
		Connector1.style.height = ""+heightConnector+"px";
		return;
	}
	if (ConnectorAdded == 1)
	{
		ConnectorAdded = 2;
		schermo.appendChild(Connector2);
		return;
	}
	if (heightConnector > 15)
	{
		topConnector+=5;
		Connector1.style.top = ""+topConnector+"px";
		heightConnector-=5;
		Connector1.style.height = ""+heightConnector+"px";
	}
	else if (heightConnector == 15)
	{
		heightConnector-=5;
		schermo.removeChild(Connector1);
	}
if (ConnectorAdded == 2)
{
	widthConnector+=5;
	
	if (widthConnector == 25)
	{
	    var computer = document.createElement("div");
	    var style = computer.style;
	    style.backgroundSize = "100%";
	   style.backgroundImage = "url(../assets/svg/tablet.svg)";
	    style.height ="100px";
	    style.width = "100px";
	    style.position = "absolute";
	    style.top = "" + (480) + "px";
	    style.left = "" + (widthConnector + 30 - 20) + "px";
	schermo.appendChild(computer);
	}
	if (widthConnector == 195)
	{
	    var computer = document.createElement("div");
	    var style = computer.style;
	    style.backgroundSize = "100%";
	   style.backgroundImage = "url(../assets/svg/computer.svg)";
	    style.height ="100px";
	    style.width = "100px";
	    style.position = "absolute";
	    style.top = "" + 480 + "px";
	    style.left = "" + (widthConnector + 30) + "px";
	schermo.appendChild(computer);
	}
	if (widthConnector == 385)
	{
	    var computer = document.createElement("div");
	    var style = computer.style;
	    style.backgroundSize = "100%";
	   style.backgroundImage = "url(../assets/svg/phone.svg)";
	    style.height ="100px";
	    style.width = "100px";
	    style.position = "absolute";
	    style.top = "" + 480 + "px";
	    style.left = "" + (widthConnector + 30) + "px";
	schermo.appendChild(computer);
	}


	if (widthConnector < 215)
	{
		Connector2.style.width = ""+widthConnector+"px";
	}
	else
	{
		Connector2.style.left = ""+(widthConnector+30-215)+"px";
		var distTo500 = 500 - (widthConnector+30-215);
		if (distTo500 === 0)
		{
			ConnectorAdded = 3;
			schermo.removeChild(Connector2);
		}
		else if (distTo500 < 215)
			Connector2.style.width = ""+distTo500+"px";
	}
}
}

function renderStack(total, touched)
{
	if (!built)
	{

		for (var i = 0; i<5; i++)
		{
			stackBalls[i] = document.createElement("div");
			var s = stackBalls[i].style;
			s.position = "relative";
			s.width = "9px";
			s.height = "9px";
			s.backgroundColor = "rgb(200,30,70)";
			STACK.appendChild(stackBalls[i]);
		}
		for (var i = 0; i<5; i++)
		{
			stackBalls1[i] = document.createElement("div");
			var s = stackBalls1[i].style;
			s.position = "relative";
			s.width = "9px";
			s.height = "9px";
			s.backgroundColor = "rgb(200,30,70)";
			STACK1.appendChild(stackBalls1[i]);
		}
		for (var i = 0; i<5; i++)
		{
			stackBalls2[i] = document.createElement("div");
			var s = stackBalls2[i].style;
			s.position = "relative";
			s.width = "9px";
			s.height = "9px";
			s.backgroundColor = "rgb(200,30,70)";
			STACK2.appendChild(stackBalls2[i]);
		}
		built = true;
	}
	for (var i = 0; i<total; i++)
	{
		stackBalls[4-i].style.backgroundColor = "rgb(240,120,150)";
		stackBalls1[4-i].style.backgroundColor = "rgb(240,120,150)";
		stackBalls2[4-i].style.backgroundColor = "rgb(240,120,150)";
	}
	for (var i = total; i<total+touched; i++)
	{
		stackBalls[4-i].style.backgroundColor = "rgb(200,30,70)";
		stackBalls1[4-i].style.backgroundColor = "rgb(200,30,70)";
		stackBalls2[4-i].style.backgroundColor = "rgb(200,30,70)";
	}
	for (var i = total+touched; i<5; i++)
	{
		stackBalls[4-i].style.backgroundColor = "rgb(255,255,255)";
		stackBalls1[4-i].style.backgroundColor = "rgb(255,255,255)";
		stackBalls2[4-i].style.backgroundColor = "rgb(255,255,255)";
	}
}
var STACKtotal = 0;
var INCOMING = 0;
var OUTCOMING = 0;

function principale()
{
	for (var n = N1; n<N; n++)
	{
		files[n].x += files[n].velx;
		files[n].y += files[n].vely;
	    files[n].style.left = "" + files[n].x + "px";
	    files[n].style.top = "" + files[n].y + "px";
		files[n].h += files[n].velh;
		files[n].w += files[n].velw;
	    files[n].style.height = "" + files[n].h + "px";
	    files[n].style.width = "" + files[n].w + "px";
		if (files[n].h < 0.1)
		{
			schermo.removeChild(files[n]);
			N1++;
		}
	}
	for (var n = M1; n<M; n++) if (files2[n].valid)
	{
		files2[n].x += files2[n].velx;
		files2[n].y += files2[n].vely;
		if (files2[n].y >= files2[n].destY && files2[n].vely > 0)
		{
			files2[n].y = files2[n].destY;
			files2[n].velx = - files2[n].vely * 3;
			files2[n].vely = 0;
		}
	    files2[n].style.left = "" + files2[n].x + "px";
	    files2[n].style.top = "" + files2[n].y + "px";
		if (files2[n].x <= files2[n].destX)
		{
			files2[n].velx = 0;
			files2[n].x = files2[n].destX;
		}
	}
	if (phase == 0)
	{
		rotateRotors();
		moveConveyor();
		if (N < 7 && c++ %50 ==0 )
			addFile();
		if (N1 == N)
			phase = 2;
	}
	if (phase == 1)
	{
		moveConveyor();
		degree += 2;
		compiler.style.transform  = "rotateZ(" + degree + "deg)";
		if (degree >= 360)
			phase = 2;
	}
	if (phase == 2)
	{
		rotateRotors();
		moveConveyor();
		if (splitted.length >= xxx+2 && c++%4== 0)
		{
			addBox(splitted[xxx], (splitted[xxx+1]=="1"?1:(splitted[xxx+1]=="2"?2:3)));
			xxx= xxx+2;
		}
		if (splitted.length < xxx + 2)
		{
			c=-60;
			phase =3;
		}
	}
	var step = 10;
	if (phase == 4)
	{
	while (A != 0)
	{
		moveConveyor();
	}
		if (c == 0)
		{
			files2[next_executed].style.backgroundColor = "rgb(160,20,70)";
			INCOMING = 0;
			OUTCOMING = 0;
			var K = files2[next_executed].inner;
			if (K.length == 2 && K[1] == '>')
			{
				OUTCOMING = 1;
			}
			else if (K.length == 2 && K[0] == '>')
			{
				INCOMING = 1;
			}
			else if (K.length == 3 && K[0] == '>' && K[2] == '>')
			{
				INCOMING = 1;
				OUTCOMING = 1;
			}
			else if (K  === "LOAD")
			{
				INCOMING = 1;
				OUTCOMING = 1;
			}
			else if (K  === "STORE")
			{
				INCOMING = 2;
			}
			else if (K  === "(" || (K.length == 2 && K[0] == '?'))
			{
				INCOMING = 1;
			}
			else if (K === ")" || K==="|" || K === "{" || K === "}" || K==="[" || K==="]" || K==="V")
			{
			}
			else if (K === "&" || K==="L" || K === "+" || K==="*" || K==="G" || K==="M" || K==="W")
			{
				INCOMING = 2;
				OUTCOMING = 1;
			}
			else if (K[0] == '#')
			{
				INCOMING = 3;
				OUTCOMING = 0;
			}
			else
			{
				OUTCOMING = 1;
			}
		}
		if (c == 1)
		{
			STACKtotal -= INCOMING;
			renderStack(STACKtotal,INCOMING);
		}
		if (c == step - 4)
		{
			renderStack(STACKtotal,OUTCOMING);
			STACKtotal += OUTCOMING;
		}
		if (c == step - 3)
		{
			total_executed++;
			files2[next_executed].style.backgroundColor = "rgb(234,30,105)";
			if (Math.random() < 0.5)
				next_executed = files2[next_executed].choice2;
			else
				next_executed = files2[next_executed].choice1;
			if (next_executed == 122)
			{
				c = -20;
				next_executed = 0;
				if (total_executed > 50)
				{
					phase = 5;
					c=-1;
				}
			}
		}
		c++;
		if (c == step) c = 0;
	}
	if (phase == 3)
	{
		slideDevices();
		if (slide == 370)
			phase = 4;
	}
	if (phase == 5)
	{
    var ok0 = document.createElement("div"); 
    var style = ok0.style;
    style.backgroundSize = "100%";
   style.backgroundImage = "url(../assets/svg/icons-Yaru/ok-primary.svg)";
    style.height ="50px";
    style.width = "50px";
    style.position = "relative";
    style.left = "25%";
    style.top = "17%";
    style.zIndex = 250;
    computer.appendChild(ok0);
    var ok1 = document.createElement("div"); 
    var style = ok1.style;
    style.backgroundSize = "100%";
   style.backgroundImage = "url(../assets/svg/icons-Yaru/ok-primary.svg)";
    style.height ="50px";
    style.width = "50px";
    style.position = "relative";
    style.left = "25%";
    style.top = "25%";
    style.zIndex = 250;
    tablet.appendChild(ok1);
    var ok2 = document.createElement("div"); 
    var style = ok2.style;
    style.backgroundSize = "100%";
   style.backgroundImage = "url(../assets/svg/icons-Yaru/ok-primary.svg)";
    style.height ="50px";
    style.width = "50px";
    style.position = "relative";
    style.left = "25%";
    style.top = "25%";
    style.zIndex = 250;
    phone.appendChild(ok2);
		phase = 6; 
	}
	if (phase == 6)
	{
		if (c++==40)
			phase = 8;
	}
	if (phase == 7)
	{
		slideDevices();
		if (slide == 750)
			phase = 8;
	}
/*	if (phase == 5)
	{
		addConnectors();
		if (c < 122)
			pipps.removeChild(files2[c]);
		c++;
		if (c < 122)
			pipps.removeChild(files2[c]);
		c++;
	}
*/
	requestAnimationFrame(principale);
}
	requestAnimationFrame(principale);
})();
