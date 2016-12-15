var clicker = {};
clicker.ressources = {};
clicker.global_var = {};

//Ressources
clicker.ressources.planet_current = document.querySelector(".planet"); // planet
clicker.ressources.planet_images = document.querySelectorAll(".planet div");
clicker.ressources.detritus_result = document.querySelector(".counter"); // counter of detritus
// clicker.ressources.detritus_click = document.querySelector(".counter");
// clicker.ressources.detritus_button = document.querySelector(".ditritus-value");
clicker.ressources.money = document.querySelector(".incrementingCoin");
clicker.ressources.gauge = document.querySelector(".ratio2");
clicker.ressources.gauge_pourcent = document.querySelector(".percentage");
// clicker.ressources.energie_click = document.querySelector(".click-energie-value");
// clicker.ressources.energie_button = document.querySelector(".energie-value");
clicker.ressources.energie_total = document.querySelector(".incrementingEnergie");
// clicker.ressources.detritus_auto = document.querySelector(".ditritus-auto");
// clicker.ressources.detritus_auto_value = document.querySelector(".click-detritus-auto-value");
clicker.ressources.shop = document.querySelector('.clicker_shop_block ul');
clicker.ressources.shop_items = document.querySelector('.clicker_shop_block ul li');

//Global variables
clicker.global_var.current_level = 1; // start level
clicker.global_var.coeficient_price = 2; // coefficient for price
clicker.global_var.coefficient_purification = 1.2; // coefficient of purification for each level
clicker.global_var.current_image = 5;
clicker.global_var.detritus = 0; //number of detritus collected
clicker.global_var.detritus_click_result = 10; //number of detritus collected per click
clicker.global_var.money_convert_detritus = 10; //detritus convertor rate
clicker.global_var.money = 0; //Indicator of your money
clicker.global_var.purification = 500; // purification level 1
clicker.global_var.purification_current = 0; //our purification currently
clicker.global_var.purification_current_percentage = 0
//clicker.global_var.energie = clicker.ressources.energie_click.value;
clicker.global_var.energie_total = 0; //number of energie total
clicker.global_var.energie_per_sec = 0; //energie per second
clicker.global_var.purify_per_sec = 0; //purification per second
clicker.global_var.detritus_per_sec = 0; //detritus per second
clicker.global_var.next_display_item = 0;
clicker.global_var.ressources = [
	{ 
		name: "gants",
		value: 2,
		price: 5,
		level: 0,
		type: "click aids"},
	{
		name: "banzaï",
		value_purification: 30,
		value_energie: 2.5,
		price: 10,
		available: 0,
		type: "energie tools"},
	{
		name: "arbus",
		value_purification: 50,
		value_energie: 5,
		price: 20,
		available: 0,
		type: "energie tools"},
	{
		name: "eolienne",
		value_purification: 10,
		value_energie: 80,
		price: 60,
		available: 0,
		type: "energie tools"},
	{
		name: "pince",
		value: 5,
		price: 60,
		level: 0,
		type: "click aids"},
	{
		name: "arbre de vie",
		value_purification: 70,
		value_energie: 10,
		price: 80,
		available: 0,
		type: "energie tools"},
	{
		name: "bénévole écolo",
		value: 5,
		price: 100,
		available: 0,
		type: "detritus auto"},
	{
		name: "sac poubelle",
		value: 10,
		price: 150,
		level: 0,
		type: "click aids"},
	{
		name: "arbre fruitié",
		value_purification: 100,
		value_energie: 20,
		price: 200,
		available: 0,
		type: "energie tools"},
	{
		name: "ouvrier",
		value: 10,
		price: 210,
		available: 0,
		type: "detritus auto"},
	{
		name: "barrage",
		value_purification: 20,
		value_energie: 100,
		price: 250,
		available: 0,
		type: "energie tools"},
	{
		name: "pelle",
		value: 30,
		price: 320,
		level: 0,
		type: "click aids"},
	{
		name: "ouvrier spécialisé",
		value: 25,
		price: 430,
		available: 0,
		type: "detritus auto"},
	{
		name: "brouette",
		value: 40,
		price: 470,
		level: 0,
		type: "click aids"},
	{
		name: "walee",
		value: 60,
		price: 700,
		available: 0,
		type: "detritus auto"},
	{
		name: "panneau solaire",
		value_purification: 30,
		value_energie: 160,
		price: 780,
		available: 0,
		type: "energie tools"},
	{
		name: "hevea",
		value_purification: 300,
		value_energie: 40,
		price: 900,
		available: 0,
		type: "energie tools"},
	{
		name: "pelleteuse",
		value: 100,
		price: 1000,
		level: 0,
		type: "click aids"},
	{
		name: "super walee",
		value: 100,
		price: 1200,
		available: 0,
		type: "detritus auto"},
	{
		name: "centrale à fusion",
		value_purification: 40,
		value_energie: 320,
		price: 1300,
		available: 0,
		type: "energie tools"},
	{
		name: "arbre alienne",
		value_purification: 700,
		value_energie: 60,
		price: 2100,
		available: 0,
		type: "energie tools"},
	{
		name: "régiment alienne",
		value: 200,
		price: 2200,
		available: 0,
		type: "detritus auto"},
	{
		name: "méga centrale",
		value_purification: 50,
		value_energie: 780,
		price: 2500,
		available: 0,
		type: "energie tools"},
	{
		name: "camion benne",
		value: 500,
		price: 3000,
		level: 0,
		type: "click aids"},
	{ 																															
		name: "bataillon intergalactic",
		value: 500,
		price: 3500,
		available: 0,
		type: "detritus auto"},
	{
		name: "T 282B",
		value: 1000,
		price: 7600,
		level: 0,
		type: "click aids"},
	{
		name: "l'armée des écolos intergalactic",
		value: 1000,
		price: 10000,
		available: 0,
		type: "detritus auto"},
];


// incrementation of detritus
clicker.ressources.planet_current.addEventListener("click", function(){
	clicker.global_var.detritus += clicker.global_var.detritus_click_result;
	add_money(clicker.global_var.detritus_click_result, "detritus");
	clicker.global_var.purification_current = clicker.global_var.purification_current + parseFloat(clicker.global_var.detritus_click_result/2);//10 detritus for 1 purification
	clicker.ressources.detritus_result.innerHTML = clicker.global_var.detritus;
	clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
	purificationChecker();
});

/*generate ressources per second*/
function get_ressources(){
	clicker.global_var.energie_total += clicker.global_var.energie_per_sec;
	clicker.ressources.energie_total.innerHTML = clicker.global_var.energie_total;
	add_money(clicker.global_var.energie_per_sec, "energie")
	clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);

	clicker.global_var.detritus = parseFloat(clicker.global_var.detritus + clicker.global_var.detritus_per_sec);
	add_money(clicker.global_var.detritus_per_sec, "detritus");
	clicker.global_var.purification_current = clicker.global_var.purification_current + parseFloat(clicker.global_var.detritus_per_sec/2);//10 detritus for 1 purification
	clicker.ressources.detritus_result.innerHTML = clicker.global_var.detritus;

	clicker.global_var.purification_current += parseFloat(clicker.global_var.purify_per_sec/4);
	purificationChecker();
}

//var sec_generator = setInterval(get_ressources, 1000);

function add_money(addCoeff, type){
	if(type == "detritus"){
		clicker.global_var.money = clicker.global_var.money + parseFloat(addCoeff/10);
		//		console.log(clicker.global_var.money);
		updateShop();
	} else if(type == "energie"){
		clicker.global_var.money = clicker.global_var.money + parseFloat(addCoeff/5);
		updateShop();
	}
}

/*Gauge of purification checker*/
function purificationChecker(){
	clicker.global_var.purification_current_percentage = parseInt(parseFloat(clicker.global_var.purification_current/clicker.global_var.purification*100));
	clicker.ressources.gauge_pourcent.innerHTML = clicker.global_var.purification_current_percentage + " %";
	clicker.ressources.gauge.style = "transform: scaleX(" + (clicker.global_var.purification_current/clicker.global_var.purification*100)/100 + ")";
	planetImagesChange();
	if(clicker.global_var.purification_current >= clicker.global_var.purification){
		clicker.global_var.current_level++;
		alert("vous avez réussit le " + (clicker.global_var.current_level - 1) + " !!!! Aller au niveau " + clicker.global_var.current_level);
		// clicker.ressources.clicker_level.innerHTML = clicker.global_var.current_level;
		clicker.global_var.purification *= clicker.global_var.coefficient_purification;
		clicker.global_var.purification_current = 0;
		clicker.global_var.purification_current_percentage = 0;
		clicker.ressources.gauge_pourcent.innerHTML = clicker.global_var.purification_current_percentage + " %";
		clicker.ressources.gauge.style = "transform: scaleX(0)";
		initialisePlanetImage();
	}
}

function updateLiFonction(){
	clicker.ressources.shop_items = document.querySelectorAll('.clicker_shop_block ul li');
	for(var i = 0; i < clicker.ressources.shop_items.length; i++){
		clicker.ressources.shop_items[i].addEventListener("click", updateItemShop);
	}

	//	console.log(clicker.ressources.shop_items[clicker.global_var.next_display_item-1].getAttribute("data-key"));
}

function planetImagesChange(){
	if ((clicker.global_var.purification_current_percentage > 17)&&(clicker.global_var.current_image == 5)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].style = "opacity: 0";
		clicker.global_var.current_image--;
	}else if ((clicker.global_var.purification_current_percentage > 34)&&(clicker.global_var.current_image == 4)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].style = "opacity: 0";
		clicker.global_var.current_image--;
	}else if ((clicker.global_var.purification_current_percentage > 51)&&(clicker.global_var.current_image == 3)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].style = "opacity: 0";
		clicker.global_var.current_image--;
	}else if ((clicker.global_var.purification_current_percentage > 68)&&(clicker.global_var.current_image == 2)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].style = "opacity: 0";
		clicker.global_var.current_image--;
	}else if ((clicker.global_var.purification_current_percentage > 85)&&(clicker.global_var.current_image == 1)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].style = "opacity: 0";
		clicker.global_var.current_image--;
	}
}

function initialisePlanetImage(){
	var lengthTab = clicker.ressources.planet_images.length;
	for (var i = 0; i < lengthTab; i++) {
		clicker.ressources.planet_images[i].style = "opacity:1";
	}
	clicker.global_var.current_image = 5;
	clicker.ressources.planet_images = document.querySelectorAll(".planet div");
}

function updateShop(){
	if(clicker.global_var.next_display_item < clicker.global_var.ressources.length){
		var next_item = clicker.global_var.ressources[clicker.global_var.next_display_item].price;
		if((next_item == clicker.global_var.money)){
			var newItem = '<li data-key="'+
					clicker.global_var.next_display_item + '"> ' +
					'<img class ="iconStore" src="src/img/gloves.png" alt="ShopItem"><p class="name"> ' +
					clicker.global_var.ressources[clicker.global_var.next_display_item].name + ' </p> ' +
					'<p class="price-item"> ' + clicker.global_var.ressources[clicker.global_var.next_display_item].price + 
					' pièces</p></li>';
			clicker.ressources.shop.innerHTML += newItem;
			clicker.global_var.next_display_item++;
			updateLiFonction();
		}
	}
}


function updateItemShop(){
	var thisItem = this.getAttribute("data-key");
	console.log(thisItem);
}



//SHOP ITEM

//buy tool to get more detritus per click
function buyDetritusTool(){
	clicker.ressources.detritus_click = document.querySelector(".click-detritus-value");
	if(clicker.ressources.detritus_click.value != "null"){
		var select_value = parseInt(clicker.ressources.detritus_click.value);
		if(clicker.global_var.click_aids[select_value].price <= clicker.global_var.money){
			clicker.global_var.money -= clicker.global_var.click_aids[select_value].price;
			clicker.global_var.click_aids[select_value].level++;
			clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
			clicker.global_var.click_aids[select_value].price = parseFloat(clicker.global_var.click_aids[select_value].price * 1.2);
			clicker.global_var.detritus_click_result += clicker.global_var.click_aids[select_value].value; 
			console.log(clicker.global_var.click_aids[select_value].name + " : " + clicker.global_var.click_aids[select_value].level + " : " + clicker.global_var.click_aids[select_value].price + " pièce");
		}
	}
}

//item to have more detritus per sec
function buyDetritusAids(){
	clicker.ressources.detritus_auto_value = document.querySelector(".click-detritus-auto-value");
	console.log(clicker.ressources.detritus_auto_value);
	if(clicker.ressources.detritus_auto_value.value != "null"){
		var select_value = parseInt(clicker.ressources.detritus_auto_value.value);
		if(clicker.global_var.detritus_auto[select_value].price <= clicker.global_var.money){
			clicker.global_var.money -= clicker.global_var.detritus_auto[select_value].price;
			clicker.global_var.detritus_per_sec += clicker.global_var.detritus_auto[select_value].value;
			clicker.global_var.detritus_auto[select_value].available++;
			clicker.global_var.detritus_auto[select_value].price = parseFloat(clicker.global_var.detritus_auto[select_value].price * 1.2);
			clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
			console.log(clicker.global_var.detritus_per_sec);
		}
	}
}
/*
	Add energie
*/
//if energie tool's price is less than the amount of money we possess we can buy this tool
function buyEnergieItem(){
	clicker.ressources.energie_click = document.querySelector(".click-energie-value");
	if(clicker.ressources.energie_click.value != "null"){
		var select_value = parseInt(clicker.ressources.energie_click.value);
		if(clicker.global_var.energie_tool[select_value].price <= clicker.global_var.money){ 
			clicker.global_var.money -= clicker.global_var.energie_tool[select_value].price;
			clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
			clicker.global_var.energie_per_sec = parseFloat(clicker.global_var.energie_per_sec + clicker.global_var.energie_tool[select_value].value_energie/40);
			clicker.global_var.purify_per_sec = parseFloat(clicker.global_var.purify_per_sec + clicker.global_var.energie_tool[select_value].value_purification/20);
			clicker.global_var.energie_tool[select_value].available++;
			clicker.global_var.energie_tool[select_value].price = parseFloat(clicker.global_var.energie_tool[select_value].price * 1.2);
			console.log(clicker.global_var.energie_tool[select_value].name + " : " + clicker.global_var.energie_tool[select_value].available + " : " + clicker.global_var.energie_tool[select_value].price + " pièce");
		}
	}
}

