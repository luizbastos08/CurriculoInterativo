function passou(eve, bot){
	var popup = document.createElement("div");
  
	popup.innerHTML = window.dicMaterias[bot].nome + "<i>Pré-requisitos: " + window.dicMaterias[bot].requisitos + "</i><BR><BR>" + window.dicMaterias[bot].ementa;
	popup.id = "DESC" + bot;
	popup.style.width = "400px";
	popup.style.zIndex = "1";
	popup.style.position = "absolute";
	popup.style.left = eve.pageX + 10 + "px";
	popup.style.top = eve.pageY + 10 + "px";
	popup.style.color = "white";
	popup.style.borderStyle = "solid";
	popup.style.borderColor = "black";
	popup.style.borderWidth = "4px";
	popup.style.backgroundColor = "#666666";
	popup.style.opacity = "0.85";
	popup.style.filter = "alpha(opacity=85)";
	popup.style.textAlign = "justify";
	popup.style.fontSize = "0.9em";
  
	document.getElementById("corpo").appendChild(popup);
	
	if(window.dicMaterias[bot].requisitos != ""){
		var req = window.dicMaterias[bot].requisitos.substr(0, 6);
		req = req.toLowerCase();
		
		document.getElementById(req).style.backgroundColor = "#708090";
		document.getElementById(req).style.border = "3px solid #708090";
		document.getElementById(req).style.color = "white";
		
		if(window.dicMaterias[bot].requisitos.length > 6){
			req = window.dicMaterias[bot].requisitos.substr(8, 6);
			req = req.toLowerCase();
			
			document.getElementById(req).style.backgroundColor = "#708090";
			document.getElementById(req).style.border = "3px solid #708090";
			document.getElementById(req).style.color = "white";
		}
	}
}

function mexeu(eve, bot){
	var popup = document.getElementById("DESC" + bot);
	
	popup.style.left = eve.pageX + 10 + "px";
	popup.style.top = eve.pageY + 10 + "px";
}

function saiu(bot){
	var filho = document.getElementById("DESC" + bot);
  
	document.getElementById("corpo").removeChild(filho);
	
	if(window.dicMaterias[bot].requisitos != ""){
		var req = window.dicMaterias[bot].requisitos.substring(0, 6);
		req = req.toLowerCase();
		
		if(window.dicMaterias[req].estado == "nok")
		{
			document.getElementById(req).style.backgroundColor = "#48D1CC";
			document.getElementById(req).style.border = "3px solid #48D1CC";
			document.getElementById(req).style.color = "black";
		}
		else
		{
			document.getElementById(req).style.border = "3px solid #4169E1";
			document.getElementById(req).style.backgroundColor = "#1E90FF";
			document.getElementById(req).style.color = "white";
		}
		
		
		if(window.dicMaterias[bot].requisitos.length > 6){
			req = window.dicMaterias[bot].requisitos.substring(8);
			req = req.toLowerCase();
			
			if(window.dicMaterias[req].estado == "nok")
			{
				document.getElementById(req).style.backgroundColor = "#48D1CC";
				document.getElementById(req).style.border = "3px solid #48D1CC";
				document.getElementById(req).style.color = "black";
			}
			else
			{
				document.getElementById(req).style.border = "3px solid #4169E1";
				document.getElementById(req).style.backgroundColor = "#1E90FF";
				document.getElementById(req).style.color = "white";
			}
		}
	}
}