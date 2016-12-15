var store = document.querySelector('.store');
var clicker_shop_block = document.querySelector('.clicker_shop_block ul');
var clicker_shop_block_li = document.querySelector('.clicker_shop_block ul li');
var inventory_ul = document.querySelector('.inventory ul');

var anecdote = document.querySelector('.anecdote');
var anecdotes_p = document.querySelector('.anecdote p');

clicker.global_var.anecdotes = [
	{
		number: 1,
		text: "Chaque seconde, plus de 9 kilos de déchets sont éliminés par les rats dans les égouts de Paris.",
	},
	{
		number: 2,
		text: "La fourmie de trottoir (Tetramorium) est capable d’ingurgiter 60 000 hot-dogs par an.",
	},
	{
		number: 3,
		text: "Chaque année, les Français jettent 81.000 tonnes de déchets sauvages sur le bord de l'autoroute, les plages et la montagne.",
	},
	{
		number: 4,
		text: "Difficile à estimer, le nombre de déchets dans le monde varie de 80 à 126 tonnes de déchets générés chaque seconde !",
	},
	{
		number: 5,
		text: "Chaque jour, l'activité humaine produit environ plus de 10 milliards de kilos de déchets.",
	},
	{
		number: 6,
		text: "Une ville de 1 million d'habitants produit quotidiennement environ 1600 t de déchets solides",
	},
	{
		number: 7,
		text: "53 milliards de kilos de déchets dangereux sont produits en Europe soit 1680 kilos par seconde…",
	},
	{
		number: 8,
		text: "La perte de terres arables dû à la salinisation des sols dans le monde représente 500 m2 par seconde. Cette perte est souvent irrémédiable.",
	},
	{
		number: 9,
		text: "Chaque année dans le monde les industries minières déversent 180 000 millions de tonnes de déchets toxiques dans les océans et rivières.",
	},
	{
		number: 10,
		text: "Selon un rapport de l'OMS, 3,2 millions de personnes meurent prématurément à cause d'une forme de pollution.",
	},
	{
		number: 11,
		text: "158 500 litres d'eau polluée sont déversées chaque seconde dans la mer par des bateaux indélicats ou par les usines de dessalement.",
	},
	{
		number: 12,
		text: "200 000 tonnes d'hydrocarbures sont dispersés dans les airs et retombent dans l'océan avec la pluie chaque année.",
	},
	{
		number: 13,
		text: "Les forêts hébergent plus de 80% de la biodiversité terrestre et représentent l'un des derniers refuges pour de très nombreuses espèces animales et végétales.",
	},
	{
		number: 14,
		text: "Chaque seconde, 100 tonnes de déchets (sur les 4 milliards produites annuellement) finissent en mer.",
	},
	{
		number: 15,
		text: "La pollution atmosphérique entraine une baisse de la fertilité et à une augmentation de la mortalité infantile.",
	},
	{
		number: 16,
		text: "Dans le monde, plus de deux milliards de personnes n’ont pas accès à l’eau potable.",
	},

];

function showAnecdotes(){
	var anecdotes_number = Math.floor(Math.random()*(clicker.global_var.anecdotes.length-1));
	anecdotes_p.innerHTML =  clicker.global_var.anecdotes[anecdotes_number].text;
	if(anecdote.classList.contains('anecdoteAnim')){
		anecdote.classList.remove('anecdoteAnim');
	}else{
		anecdote.classList.add('anecdoteAnim');
	};
	setTimeout(function() {
		requestAnimationFrame(showAnecdotes);
	}, 10000);
}

setTimeout(function() {
		requestAnimationFrame(showAnecdotes);
	}, 10000);