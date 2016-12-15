var store = document.querySelector('.store');
var clicker_shop_block = document.querySelector('.clicker_shop_block ul');
var clicker_shop_block_li = document.querySelector('.clicker_shop_block ul li');
var inventory_ul = document.querySelector('.inventory ul');

clicker_shop_block.addEventListener('click', function(){
    var test = document.querySelector('.clicker_shop_block ul li').firstChild;
    inventory_ul.innerHTML += '<li>'+test+'</li>';
});


