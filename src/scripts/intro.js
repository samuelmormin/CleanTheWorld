var sitations = ["Une catastrophe s’est produite dans notre galaxie.", "Les planètes sont toutes devenues polluées et invivables.", "Aide-nous à les purifier en ramassant tous les déchets !"];
var afficheMessage;
var show_text;
var introText = document.querySelector(".intro");

var chain = sitations[0];
var nb_car = chain.length;
var array = chain.split("");
var text = new Array;
var txt = '';
var nb_msg = nb_car - 1;
var text_max_lenght = sitations.length;
var current_text = 0;

for (i=0; i < nb_car; i++) {
	text[i] = txt+array[i];
	var txt = text[i];
}

actual_text = 0;

function changeMessage() {
	introText.innerHTML = text[actual_text];
	actual_text++;
	if(actual_text >= text.length)
	{
		actual_text = nb_msg;
		clearInterval(afficheMessage);
		if(current_text < sitations.length) {
			setTimeout(function() {
				requestAnimationFrame(textAnime);
			}, 1000);
		}
	}
}

function randSitation(){
	chain = sitations[current_text];
	nb_car = chain.length;
	array = chain.split("");
	text = new Array;
	txt = '';
	nb_msg = nb_car - 1;

	for (i=0; i < nb_car; i++) {
		text[i] = txt+array[i];
		txt = text[i];
	}


	actual_text = 0;

	afficheMessage = setInterval("changeMessage()",100);

}

function textAnime(){
	randSitation();
	current_text++;
}

textAnime();
