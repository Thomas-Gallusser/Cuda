function selectPortfiolio(select) {
	document.getElementById("btnAll").style.backgroundColor = "black";
	document.getElementById("btnWeb").style.backgroundColor = "black";
	document.getElementById("btnApps").style.backgroundColor = "black";
	document.getElementById("btnIcons").style.backgroundColor = "black";
	
	document.getElementById("web").style.display = "inline-block";
	document.getElementById("app").style.display = "inline-block";
	document.getElementById("playersui").style.display = "inline-block";
	document.getElementById("icons").style.display = "inline-block";
	
	switch (select) {
		case 0:
      		document.getElementById("btnAll").style.backgroundColor = "white";
			break;
			
		case 1:
			document.getElementById("btnWeb").style.backgroundColor = "white";
      
			document.getElementById("app").style.display = "none";
			document.getElementById("icons").style.display = "none";
			break;
			
		case 2:
			document.getElementById("btnApps").style.backgroundColor = "white";
      
			document.getElementById("web").style.display = "none";
			document.getElementById("playersui").style.display = "none";
			document.getElementById("icons").style.display = "none";
			break;
			
		case 3:
			document.getElementById("btnIcons").style.backgroundColor = "white";
      	
			document.getElementById("web").style.display = "none";
			document.getElementById("app").style.display = "none";
			document.getElementById("playersui").style.display = "none";		
			break;
	}
}