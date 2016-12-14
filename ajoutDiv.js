var store = document.querySelector('.store');
var clicker_shop_block = document.querySelector('.clicker_shop_block ul');
var clicker_shop_block_li = document.querySelector('.clicker_shop_block ul li');
var inventory_ul = document.querySelector('.inventory ul');

store.addEventListener('click', function () {
    clicker_shop_block.innerHTML += '<li data-key="37"><img class ="iconStore" src="src/img/gloves.png" alt="ShopItem"><p> Gants </p> <img class="coinIcon" src="src/img/coin50.png" alt="shopCoin"></li>';
});

clicker_shop_block.addEventListener('click', function(){
    var test = document.querySelector('.clicker_shop_block ul li').firstChild;
    console.log(test);
    inventory_ul.innerHTML += '<li>'+test+'</li>';
});


