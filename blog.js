function selectPortfiolio(select) {
	switch (select) {
		case 0:
			document.getElementById("btnAll").style.backgroundImage = "url('images/select.png')";
			document.getElementById("btnWeb").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnApps").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnIcons").style.backgroundImage = "url('images/unselect.png')";
      		document.getElementById("web").style.display = "inline-block";
      		document.getElementById("app").style.display = "inline-block";
      		document.getElementById("playersui").style.display = "inline-block";
      		document.getElementById("icons").style.display = "inline-block";
			break;
		case 1:
			document.getElementById("btnAll").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnWeb").style.backgroundImage = "url('images/select.png')";
			document.getElementById("btnApps").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnIcons").style.backgroundImage = "url('images/unselect.png')";
      
      		document.getElementById("web").style.display = "inline-block";
      		document.getElementById("app").style.display = "none";
      		document.getElementById("playersui").style.display = "inline-block";
      		document.getElementById("icons").style.display = "none";
			break;
		case 2:
			document.getElementById("btnAll").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnWeb").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnApps").style.backgroundImage = "url('images/select.png')";
			document.getElementById("btnIcons").style.backgroundImage = "url('images/unselect.png')";
      
      		document.getElementById("web").style.display = "none";
      		document.getElementById("app").style.display = "inline-block";
      		document.getElementById("playersui").style.display = "none";
      		document.getElementById("icons").style.display = "none";
      		
			break;
		case 3:
			document.getElementById("btnAll").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnWeb").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnApps").style.backgroundImage = "url('images/unselect.png')";
			document.getElementById("btnIcons").style.backgroundImage = "url('images/select.png')";
      
      		document.getElementById("web").style.display = "none";
      		document.getElementById("app").style.display = "none";
      		document.getElementById("playersui").style.display = "none";
      		document.getElementById("icons").style.display = "inline-block";  		
			break;
	}
}