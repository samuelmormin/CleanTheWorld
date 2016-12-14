var body = document.querySelector('body');
var clicker_shop_block = document.querySelector('.clicker_shop_block ul');
var clicker_shop_li = ('.clicker_shop_block ul li');

body.addEventListener('click', function () {
    clicker_shop_block.innerHTML += '<li data-key="37"><img class ="iconStore" src="src/img/gloves.png" alt="ShopItem"><p> Gants </p> <img class="coinIcon" src="src/img/coin50.png" alt="shopCoin"></li>';
});

clicker_shop_li.addEventListener('click', function () {

});
console.log();