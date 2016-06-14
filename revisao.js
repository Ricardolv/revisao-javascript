function exibeNome() {
				var elNome = document.getElementById('textNome');
				var strNome = elNome.value;
				var elDisplay = document.getElementById('display');
				elDisplay.innerText = strNome;

			}	

function novoContato() {
	var contatos = document.getElementById('contatos');
	
	//l<label>contato:</label>
	var inputContato = document.createElement("input");
	var labelContato = document.createElement("label");
	labelContato.innerText="contato:";

	
	//<br />
	var br = document.createElement("br");

	//<input type="button" value="-" />
	var btnExc = document.createElement("input");
	btnExc.setAttribute("type", "button");
	btnExc.setAttribute("value", "-");
	
	btnExc.onclick = function excluir() {
		contatos.removeChild(divLinha);							
	};

	//<div></div> linha
	var divLinha = document.createElement('div');
	divLinha.appendChild(labelContato);
	divLinha.appendChild(inputContato);
	divLinha.appendChild(btnExc);
	divLinha.appendChild(br);

	contatos.appendChild(divLinha);
}
