function pokemon() {
	let xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function () {
		if (this.readyState == 4 && this.status == 200) {
			let answerPokemon = xmlhttp.responseText;
			document.getElementById("rightBoxText").innerHTML = answerPokemon;
		}
	};
	xmlhttp.open("GET", "ajax_info.txt", true);
	xmlhttp.send();
}
