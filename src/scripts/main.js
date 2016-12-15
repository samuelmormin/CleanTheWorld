var clicker = {};
clicker.ressources = {};
clicker.global_var = {};

//Ressources
clicker.ressources.planet_current = document.querySelector(".planet"); // planet
clicker.ressources.planet_images = document.querySelectorAll(".planet div");
clicker.ressources.detritus_result = document.querySelector(".counter"); // counter of detritus
clicker.ressources.money = document.querySelector(".incrementingCoin"); //counter of money
clicker.ressources.gauge = document.querySelector(".ratio2"); //gauge of purification
clicker.ressources.gauge_pourcent = document.querySelector(".percentage"); //current percentage
clicker.ressources.energie_total = document.querySelector(".incrementingEnergie"); // counter of energie
clicker.ressources.shop = document.querySelector('.clicker_shop_block ul'); //shop element
clicker.ressources.shop_items = document.querySelector('.clicker_shop_block ul li'); //shop's items elements
clicker.ressources.inventory = document.querySelector(".inventory ul"); //inventory element
clicker.ressources.inventory_items = document.querySelectorAll(".inventory ul li"); //inventory items elements

//Global variables
clicker.global_var.current_level = 1; // start level
clicker.global_var.coeficient_price = 2; // coefficient for price
clicker.global_var.coefficient_purification = 4; // coefficient of purification for each level
clicker.global_var.current_image = 5; //current planet state
clicker.global_var.generat_per_sec = false; //permit to active only once the function generate per sec
clicker.global_var.detritus = 0; //number of detritus collected
clicker.global_var.detritus_click_result = 1; //number of detritus collected per click
clicker.global_var.money_convert_detritus = 10; //detritus convertor rate
clicker.global_var.money = 0; //Indicator of your money
clicker.global_var.money_total = 0 //total money collected
clicker.global_var.purification = 500; // purification level 1
clicker.global_var.purification_current = 0; //our purification currently
clicker.global_var.purification_current_percentage = 0
//clicker.global_var.energie = clicker.ressources.energie_click.value;
clicker.global_var.energie_total = 0; //number of energie total
clicker.global_var.energie_per_sec = 0; //energie per second
clicker.global_var.purify_per_sec = 0; //purification per second
clicker.global_var.detritus_per_sec = 0; //detritus per second
clicker.global_var.next_display_item = 0; //item to display in the shop
clicker.global_var.ressources = [
	{ 
		name: "gants",
		value: 2,
		price: 5,
		available: 0,
		typeItem: "click aids",
		url: "src/img/gloveIcon.png",
		show: 0},
	{
		name: "bonzaï",
		value_purification: 30,
		value_energie: 2.5,
		price: 10,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/bonzaiIcon.png",
		show: 0},
	{
		name: "arbuste",
		value_purification: 50,
		value_energie: 5,
		price: 20,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/littletreeIcon.png",
		show: 0},
	{
		name: "eolienne",
		value_purification: 10,
		value_energie: 80,
		price: 60,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/windturbineIcon.png",
		show: 0},
	{
		name: "pince",//dfjffdfffffffffffffffffff
		value: 5,
		price: 65,
		available: 0,
		typeItem: "click aids",
		url: "src/img/pawIcon.png",
		show: 0},
	{
		name: "buisson",
		value_purification: 70,
		value_energie: 10,
		price: 80,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/shrubIcon.png",
		show: 0},
	{
		name: "bénévole écolo",
		value: 5,
		price: 100,
		available: 0,
		typeItem: "detritus auto",
		url: "src/img/volunteerIcon.png",
		show: 0},
	{
		name: "arbre fruitier",
		value_purification: 100,
		value_energie: 20,
		price: 200,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/fruittreeIcon.png",
		show: 0},
	{
		name: "ouvrier",
		value: 10,
		price: 210,
		available: 0,
		typeItem: "detritus auto",
		url: "src/img/workerIcon.png",
		show: 0},
	{
		name: "barrage",
		value_purification: 20,
		value_energie: 100,
		price: 250,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/hydraulicbamIcon.png",
		show: 0},
	{
		name: "pelle",
		value: 30,
		price: 320,
		available: 0,
		typeItem: "click aids",
		url: "src/img/spadeIcon.png",
		show: 0},
	{
		name: "ouvrier spécialisé",
		value: 25,
		price: 430,
		available: 0,
		typeItem: "detritus auto",
		url: "src/img/specialworkerIcon.png",
		show: 0},
	{
		name: "brouette",
		value: 40,
		price: 470,
		available: 0,
		typeItem: "click aids",
		url: "src/img/wheelbarrowIcon.png",
		show: 0},
	{
		name: "walee",
		value: 60,
		price: 700,
		available: 0,
		typeItem: "detritus auto",
		url: "src/img/walleIcon.png",
		show: 0},
	{
		name: "panneau solaire",//dfjffdfffffffffffffffffff
		value_purification: 30,
		value_energie: 160,
		price: 780,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/solarpanelIcon.png",
		show: 0},
	{
		name: "hevea", //dfjffdfffffffffffffffffff
		value_purification: 300,
		value_energie: 40,
		price: 900,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/heveaIcon.png",
		show: 0},
	{
		name: "pelleteuse",
		value: 100,
		price: 1000,
		available: 0,
		typeItem: "click aids",
		url: "src/img/diggerIcon.png",
		show: 0},
	{
		name: "super robot",
		value: 100,
		price: 1200,
		available: 0,
		typeItem: "detritus auto",
		url: "src/img/superrobotIcon.png",
		show: 0},
	{
		name: "centrale à fusion",//dfjffdfffffffffffffffffff
		value_purification: 40,
		value_energie: 320,
		price: 1300,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/powerstationIcon.png",
		show: 0},
	{
		name: "arbre alienne",
		value_purification: 700,
		value_energie: 60,
		price: 2100,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/alientree.png",
		show: 0},
	{
		name: "régiment alienne",//dfjffdfffffffffffffffffff
		value: 200,
		price: 2200,
		available: 0,
		typeItem: "detritus auto",
		url: "src/img/alienIcon.png",
		show: 0},
	{
		name: "méga centrale",
		value_purification: 50,
		value_energie: 780,
		price: 2500,
		available: 0,
		typeItem: "energie tools",
		url: "src/img/megacentralIcon.png",
		show: 0},
	{
		name: "camion benne",
		value: 500,
		price: 3000,
		available: 0,
		typeItem: "click aids",
		url: "src/img/truckIcon.png",
		show: 0},
	{ 																															
		name: "bataillon intergalactic", //dfjffdfffffffffffffffffff
		value: 500,
		price: 3500,
		available: 0,
		typeItem: "detritus auto",
		url: "src/img/flagIcon.png",
		show: 0},
	{
		name: "T 282B",//dfjffdfffffffffffffffffff
		value: 1000,
		price: 7600,
		available: 0,
		typeItem: "click aids",
		url: "src/img/t282bIcon.png",
		show: 0},
	{
		name: "l'armée des écolos intergalactic",
		value: 1000,
		price: 10000,
		available: 0,
		typeItem: "detritus auto",
		url: "src/img/ecoarmyIcon.png",
		show: 0},
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

	setTimeout(function() {
		requestAnimationFrame(get_ressources);
	}, 1000);
}

function add_money(addCoeff, type){
	if(type == "detritus"){
		clicker.global_var.money = clicker.global_var.money + parseFloat(addCoeff/10);
		//		console.log(parseFloat(addCoeff/10))
		clicker.global_var.money_total += parseFloat(addCoeff/10);
		updateShop();
	} else if(type == "energie"){
		clicker.global_var.money = clicker.global_var.money + parseFloat(addCoeff/5);
		clicker.global_var.money_total += parseFloat(addCoeff/10);
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
		clicker.global_var.current_available++;
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

function updateLiFonction(thisLi){
	thisLi--;
	clicker.ressources.shop_items = document.querySelectorAll('.clicker_shop_block ul li');
	clicker.ressources.shop_items[thisLi].addEventListener("click", updateItemShop);
}

function planetImagesChange(){
	if ((clicker.global_var.purification_current_percentage > 17)&&(clicker.global_var.current_image == 5)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].classList.add("planetOpacity");
		clicker.global_var.current_image--;
	}else if ((clicker.global_var.purification_current_percentage > 34)&&(clicker.global_var.current_image == 4)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].classList.add("planetOpacity");
		clicker.global_var.current_image--;
	}else if ((clicker.global_var.purification_current_percentage > 51)&&(clicker.global_var.current_image == 3)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].classList.add("planetOpacity");
		clicker.global_var.current_image--;
	}else if ((clicker.global_var.purification_current_percentage > 68)&&(clicker.global_var.current_image == 2)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].classList.add("planetOpacity");
		clicker.global_var.current_image--;
	}else if ((clicker.global_var.purification_current_percentage > 85)&&(clicker.global_var.current_image == 1)) {
		clicker.ressources.planet_images[clicker.global_var.current_image].classList.add("planetOpacity");
		clicker.global_var.current_image--;
	}
}

function initialisePlanetImage(){
	var lengthTab = clicker.ressources.planet_images.length;
	for (var i = 0; i < lengthTab; i++) {
		clicker.ressources.planet_images[i].classList.remove("planetOpacity");
	}
	clicker.global_var.current_image = 5;
	clicker.ressources.planet_images = document.querySelectorAll(".planet div");
}

function updateShop(){
	if(clicker.global_var.next_display_item < clicker.global_var.ressources.length){
		var next_item = clicker.global_var.ressources[clicker.global_var.next_display_item].price;
		if(next_item <= clicker.global_var.money_total){
			var newItem = document.createElement("LI");
			newItem.setAttribute("data-key", clicker.global_var.next_display_item);

			var newIcon = document.createElement("IMG");
			newIcon.setAttribute("src", clicker.global_var.ressources[clicker.global_var.next_display_item].url);
			newIcon.setAttribute("alt", clicker.global_var.ressources[clicker.global_var.next_display_item].name);

			var newName = document.createElement("P");
			var textNewName = document.createTextNode(clicker.global_var.ressources[clicker.global_var.next_display_item].name);
			newName.classList.add("name");
			newName.appendChild(textNewName);

			var newPrice = document.createElement("P");
			var textNewPrice = document.createTextNode(clicker.global_var.ressources[clicker.global_var.next_display_item].price + ' pièces');
			newPrice.classList.add("price-item");
			newPrice.appendChild(textNewPrice);

			newItem.appendChild(newIcon);
			newItem.appendChild(newName);
			newItem.appendChild(newPrice);

			clicker.ressources.shop.appendChild(newItem);
			clicker.global_var.next_display_item++;
			updateLiFonction(clicker.global_var.next_display_item);
		}
	}
}


function updateItemShop(){
	var thisItem = parseInt(this.getAttribute("data-key"));
	if(clicker.global_var.ressources[thisItem].typeItem == "click aids") buyDetritusTool(thisItem);
	else if(clicker.global_var.ressources[thisItem].typeItem == "detritus auto") buyDetritusAids(thisItem);
	else if(clicker.global_var.ressources[thisItem].typeItem == "energie tools") buyEnergieItem(thisItem);
}

function updateInventory(thisItem){
	if(clicker.global_var.ressources[thisItem].show == 0){
		clicker.global_var.ressources[thisItem].show = 1;
		var newItem = document.createElement("LI");
		newItem.setAttribute("data-key", thisItem);

		var newIcon = document.createElement("IMG");
		newIcon.setAttribute("src", clicker.global_var.ressources[thisItem].url);
		newIcon.setAttribute("alt", clicker.global_var.ressources[thisItem].name);

		var newDiv = document.createElement("DIV");
		newDiv.classList.add("inventory_number");

		var newDivNumber = document.createElement("P");
		var number = document.createTextNode(clicker.global_var.ressources[thisItem].available);
		newDivNumber.classList.add("item_number");
		newDivNumber.setAttribute("data-key", thisItem);

		newDivNumber.appendChild(number);
		newDiv.appendChild(newDivNumber);

		newItem.appendChild(newIcon);
		newItem.appendChild(newDiv);

		clicker.ressources.inventory.appendChild(newItem);

	} else{
		clicker.ressources.inventory_items = document.querySelectorAll(".item_number");
		var inventoryLenght = clicker.ressources.inventory_items.length;
		for(var i = 0; i < inventoryLenght; i++){
			var dataKey = parseInt(clicker.ressources.inventory_items[i].getAttribute("data-key"));
			if(dataKey == thisItem) clicker.ressources.inventory_items[i].innerHTML = clicker.global_var.ressources[thisItem].available;
		}
	}
}

//SHOP ITEM

//buy tool to get more detritus per click
function buyDetritusTool(item){
	if(clicker.global_var.ressources[item].price <= clicker.global_var.money){
		clicker.global_var.money -= clicker.global_var.ressources[item].price;
		clicker.global_var.ressources[item].available++;
		clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
		clicker.global_var.ressources[item].price = parseFloat(clicker.global_var.ressources[item].price * clicker.global_var.coeficient_price);
		clicker.global_var.detritus_click_result += clicker.global_var.ressources[item].value; 
		clicker.ressources.shop_items[item].querySelector(".price-item").innerHTML = clicker.global_var.ressources[item].price + " pièce";
		updateInventory(item);
	}
}

//item to have more detritus per sec
function buyDetritusAids(item){
	if(clicker.global_var.ressources[item].price <= clicker.global_var.money){
		clicker.global_var.money -= clicker.global_var.ressources[item].price;
		clicker.global_var.detritus_per_sec += clicker.global_var.ressources[item].value;
		clicker.global_var.ressources[item].available++;
		clicker.global_var.ressources[item].price = parseFloat(clicker.global_var.ressources[item].price * 1.2);
		clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
		clicker.ressources.shop_items[item].querySelector(".price-item").innerHTML = clicker.global_var.ressources[item].price + " pièce";
		if(clicker.global_var.generat_per_sec != true){
			clicker.global_var.generat_per_sec = false;
			get_ressources();
			updateInventory(item);
		}
	}
}

//item to get energie
function buyEnergieItem(item){
	if(clicker.global_var.ressources[item].price <= clicker.global_var.money){ 
		clicker.global_var.money -= clicker.global_var.ressources[item].price;
		clicker.ressources.money.innerHTML = parseInt(clicker.global_var.money);
		clicker.global_var.energie_per_sec = parseFloat(clicker.global_var.energie_per_sec + clicker.global_var.ressources[item].value_energie/40);
		clicker.global_var.purify_per_sec = parseFloat(clicker.global_var.purify_per_sec + clicker.global_var.ressources[item].value_purification/20);
		clicker.global_var.ressources[item].available++;
		clicker.global_var.ressources[item].price = parseFloat(clicker.global_var.ressources[item].price * clicker.global_var.coeficient_price);
		clicker.ressources.shop_items[item].querySelector(".price-item").innerHTML = clicker.global_var.ressources[item].price + " pièce";
		if(clicker.global_var.generat_per_sec != true){
			clicker.global_var.generat_per_sec = false;
			get_ressources();
			updateInventory(item);
		}
	}
}

function initialiseShop(){
	for(i = 0; i < 3; i++){
		var newItem = document.createElement("LI");
		newItem.setAttribute("data-key", clicker.global_var.next_display_item);

		var newIcon = document.createElement("IMG");
		newIcon.setAttribute("src", clicker.global_var.ressources[clicker.global_var.next_display_item].url);
		newIcon.setAttribute("alt", clicker.global_var.ressources[clicker.global_var.next_display_item].name);

		var newName = document.createElement("P");
		var textNewName = document.createTextNode(clicker.global_var.ressources[clicker.global_var.next_display_item].name);
		newName.classList.add("name");
		newName.appendChild(textNewName);

		var newPrice = document.createElement("P");
		var textNewPrice = document.createTextNode(clicker.global_var.ressources[clicker.global_var.next_display_item].price + ' pièces');
		newPrice.classList.add("price-item");
		newPrice.appendChild(textNewPrice);

		newItem.appendChild(newIcon);
		newItem.appendChild(newName);
		newItem.appendChild(newPrice);

		clicker.ressources.shop.appendChild(newItem);
		clicker.global_var.next_display_item++;
		updateLiFonction(clicker.global_var.next_display_item);
	}

}

initialiseShop();