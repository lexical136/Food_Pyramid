	/* Var a to f are the values that will be used in the counter. L1H to L6H are the values to be used for the height */
	var a =0;
	var L1H= 21;
	var b =0;
	var L2H= 15;
	var c =0;
	var L3H= 15;
	var d =0;
	var L4H= 15;
	var e =0;
	var L5H= 15;
	var f =0;
	var L6H= 15;

	/*Demografic to be targed*/
	var dem=0;
	
	/* takes input from a text box and then applys */
	function Outputdate(day,month,year){

		if(day<=31 && day>0 && month<=12 && month>0 && year<2100 && year>=2021 && day%1==0 && month%1==0 && year%1==0)
		{
			/*var tex = document.getElementById("textbox1").value;*/
			document.getElementById("datetext").innerHTML = day+"/"+month+"/"+year;
		}
		else
		{
			document.getElementById("datetext").innerHTML = "Invaild Date Used";
		}
	
	}
	
	/* Num=the HTML counter; Lnum=the button; Lx...=the numbers to be added to level height; Ca...=Values to be added to the counter */
	function Ladd(num, Lnum, Lx, La, Lb, Lc, Ld, Le, Ca, Cb, Cc, Cd, Ce, Cf){
		
		
		
		a = a+Ca;
		b = b+Cb;
		c = c+Cc;
		d = d+Cd;
		e = e+Ce;
		f = f+Cf;
		
		L1H = L1H+Lx;
		L2H = L2H+La;
		L3H = L3H+Lb;
		L4H = L4H+Lc;
		L5H = L5H+Ld;
		L6H = L6H+Le;
		
		/* These ifs stop - numbers */
		if(a==-1){
			a = 0;
			L1H = L1H+(Lx*-1);
			L2H = L2H+(La*-1);
			L3H = L3H+(Lb*-1);
			L4H = L4H+(Lc*-1);
			L5H = L5H+(Ld*-1);
			L6H = L6H+(Le*-1);
		}
		else if(b==-1){
			b= 0;
			L1H = L1H+(Lx*-1);
			L2H = L2H+(La*-1);
			L3H = L3H+(Lb*-1);
			L4H = L4H+(Lc*-1);
			L5H = L5H+(Ld*-1);
			L6H = L6H+(Le*-1);
		}
		else if(c==-1){
			c=0;
			L1H = L1H+(Lx*-1);
			L2H = L2H+(La*-1);
			L3H = L3H+(Lb*-1);
			L4H = L4H+(Lc*-1);
			L5H = L5H+(Ld*-1);
			L6H = L6H+(Le*-1);
		}
		else if(d==-1){
			d=0;
			L1H = L1H+(Lx*-1);
			L2H = L2H+(La*-1);
			L3H = L3H+(Lb*-1);
			L4H = L4H+(Lc*-1);
			L5H = L5H+(Ld*-1);
			L6H = L6H+(Le*-1);
		}
		else if(e==-1){
			e=0;
			L1H = L1H+(Lx*-1);
			L2H = L2H+(La*-1);
			L3H = L3H+(Lb*-1);
			L4H = L4H+(Lc*-1);
			L5H = L5H+(Ld*-1);
			L6H = L6H+(Le*-1);
		}
		else if(f==-1){
			f=0;
			L1H = L1H+(Lx*-1);
			L2H = L2H+(La*-1);
			L3H = L3H+(Lb*-1);
			L4H = L4H+(Lc*-1);
			L5H = L5H+(Ld*-1);
			L6H = L6H+(Le*-1);
		}
		
		
		/* Applys the new height and counter values */
		document.getElementById("L1").style.height =  L1H+"%" ;
		document.getElementById("num1").innerHTML =  a ;
		
		document.getElementById("L2").style.height =  L2H+"%" ;
		document.getElementById("num2").innerHTML =  b ;
		
		document.getElementById("L3").style.height =  L3H+"%" ;
		document.getElementById("num3").innerHTML =  c ;
		
		document.getElementById("L4").style.height =  L4H+"%" ;
		document.getElementById("num4").innerHTML =  d ;
		
		document.getElementById("L5").style.height =  L5H+"%" ;
		document.getElementById("num5").innerHTML =  e ;
		
		document.getElementById("L6").style.height =  L6H+"%" ;
		document.getElementById("num6").innerHTML =  f ;
		
		if(dem==0) /* -----------------------Adults------------------- */
		{

		if(a>0){
			L1num.style.background = "red";
		}
		if(a==0){
			L1num.style.background = "green";
		}
		if(a<0){
			document.getElementById("L1num").style.background = "gray";
		}

		
		if(b>1){
			document.getElementById("L2num").style.background = "red";
		}
		if(b==1){
			document.getElementById("L2num").style.background = "green";
		}
		if(b<1){
			document.getElementById("L2num").style.background = "gray";
		}

		
		if(c>2){
			document.getElementById("L3num").style.background = "red";
		}
		if(c==2){
			document.getElementById("L3num").style.background = "green";
		}
		if(c<2){
			document.getElementById("L3num").style.background = "gray";
		}

		
		if(d>3){
			document.getElementById("L4num").style.background = "red";
		}
		if(d==3){
			document.getElementById("L4num").style.background = "green";
		}
		if(d<3){
			document.getElementById("L4num").style.background = "gray";
		}

		
		if(e>5){
			document.getElementById("L5num").style.background = "red";
		}
		if(e>2 && e<=7){
			document.getElementById("L5num").style.background = "green";
		}
		if(e<3){
			document.getElementById("L5num").style.background = "gray";
		}

		
		if(f>7){
			document.getElementById("L6num").style.background = "red";
		}
		if(f>4 && f<8){
			document.getElementById("L6num").style.background = "green";
		}
		if(f<5){
			document.getElementById("L6num").style.background = "gray";
		}

		}

		if(dem==1) /* -----------------------Children------------------- */
		{

		if(a>0){
			L1num.style.background = "red";
		}
		if(a==0){
			L1num.style.background = "green";
		}
		if(a<0){
			document.getElementById("L1num").style.background = "gray";
		}

		
		if(b>1){
			document.getElementById("L2num").style.background = "red";
		}
		if(b==1){
			document.getElementById("L2num").style.background = "green";
		}
		if(b<1){
			document.getElementById("L2num").style.background = "gray";
		}

		
		if(c>4){
			document.getElementById("L3num").style.background = "red";
		}
		if(c>=2 && c<=4){
			document.getElementById("L3num").style.background = "green";
		}
		if(c<2){
			document.getElementById("L3num").style.background = "gray";
		}

		
		if(d>3){
			document.getElementById("L4num").style.background = "red";
		}
		if(d==3){
			document.getElementById("L4num").style.background = "green";
		}
		if(d<3){
			document.getElementById("L4num").style.background = "gray";
		}

		
		if(e>6){
			document.getElementById("L5num").style.background = "red";
		}
		if(e>3 && e<=6){
			document.getElementById("L5num").style.background = "green";
		}
		if(e<3){
			document.getElementById("L5num").style.background = "gray";
		}

		
		if(f>5){
			document.getElementById("L6num").style.background = "red";
		}
		if(f>=2 && f<=5){
			document.getElementById("L6num").style.background = "green";
		}
		if(f<2){
			document.getElementById("L6num").style.background = "gray";
		}

		}
	}
	
	/* Make + and - visable */
	function Lvis(L1p, L1m){
		L1p.style.visibility = "visible";
		L1m.style.visibility = "visible";
	}
	/* Hides + and - */
	function Lhid(L1p, L1m){
		L1p.style.visibility = "hidden";
		L1m.style.visibility = "hidden";
	}
	
	/* makes the + and -'s hidden by default */
	document.getElementById("L1p").style.visibility = "hidden";
	document.getElementById("L1m").style.visibility = "hidden";
	
	
	document.getElementById("L2p").style.visibility = "hidden";
	document.getElementById("L2m").style.visibility = "hidden";


	document.getElementById("L3p").style.visibility = "hidden";
	document.getElementById("L3m").style.visibility = "hidden";
	

	document.getElementById("L4p").style.visibility = "hidden";
	document.getElementById("L4m").style.visibility = "hidden";
	
	
	document.getElementById("L5p").style.visibility = "hidden";
	document.getElementById("L5m").style.visibility = "hidden";
	
	
	document.getElementById("L6p").style.visibility = "hidden";
	document.getElementById("L6m").style.visibility = "hidden";

	/* function for changing demographic */
	function changingDem(cdem)
	{
		dem=cdem;
		if(cdem==0)
		{
			document.getElementById("recSelect").innerHTML="Adult, Teen and Child(5 to 12)";
		}

		if(cdem==1)
		{
			document.getElementById("recSelect").innerHTML="Child(1 to 4)";
		}
		/* refreshes the number background colouring  */
		Ladd(num5, L5num, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0)
	}