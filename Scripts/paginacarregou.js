function carregaDados(){
	if(pegaCookie("dcc003") == ""){
		for(var materia in window.dicMaterias){
			document.cookie = materia + "=" + window.dicMaterias[materia].estado;
		}
	}
	else{
		for(var materia in window.dicMaterias){
			window.dicMaterias[materia].estado = pegaCookie(materia);
			carregou(materia);
		}
	}
  
  for(var materia in window.dicMaterias){
    var num = Math.trunc(window.dicMaterias[materia].trava.length / 6);
      
    for(var i = 0; i < num; i++){
      var bot = window.dicMaterias[materia].trava.substr(i*6+i, 6);
      bot = bot.toLowerCase();
      
      if(window.dicMaterias[bot].estado == "nok"){
        document.getElementById(bot).className = "travada";
        document.getElementById(bot).setAttribute("onclick", "");
      }
	  
	  else if(window.dicMaterias[bot].estado == "ok"){
		 document.getElementById(bot).className = "mate";
        document.getElementById(bot).setAttribute("onclick", "clicou(event, this.id)");
	  }
    }
  }
}

function pegaCookie(nomeCookie) {
    var nome = nomeCookie + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while(c.charAt(0)==' ') c = c.substring(1);
        if(c.indexOf(nome) == 0) {
            return c.substring(nome.length, c.length);
        }
    }
    return "";
}

function salvaDados(){
	for(var materia in window.dicMaterias){
		document.cookie = materia + "=" + window.dicMaterias[materia].estado;
	}
}

function carregou(bot){
	var qual = window.dicMaterias[bot].estado;
	if(qual == "nok"){
		document.getElementById(bot).style.border = "3px solid #009900";
	}
	else if(qual == "ok"){
		document.getElementById(bot).style.border = "3px solid #e5e600";
	}
	else{
		window.alert("Erro #2187 - Problemas de cookies.");
	}
}

function destrava(bot){
	var num = Math.trunc(window.dicMaterias[bot].trava.length / 6);
     
	for(var i = 0; i < num; i++){
		var tra = window.dicMaterias[bot].trava.substr(i*6+i, 6);
		tra = tra.toLowerCase();
     
		var flag = true;
     
		var req = window.dicMaterias[tra].requisitos.substring(0, 6);
		req = req.toLowerCase();
	
		if(window.dicMaterias[req].estado == "nok"){
			flag = false;
		}
	
		if(window.dicMaterias[tra].requisitos.length > 6){
			req = window.dicMaterias[tra].requisitos.substring(8);
			req = req.toLowerCase();
		
			if(window.dicMaterias[req].estado == "nok"){
				flag = false;
			}
		}
     
		if(flag){
			document.getElementById(tra).className = "mate";
			document.getElementById(tra).setAttribute("onclick", "clicou(event, this.id)");
		}
	}
}