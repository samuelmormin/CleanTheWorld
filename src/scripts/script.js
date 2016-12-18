var body                 = document.querySelector("body");                      //récupération du body
var planetEarth          = document.querySelector(".planet");                   //récupération de l'élément qui à la classe .planet
var mouseDiv             = document.querySelector("div.mouseClickEffect");      //récupération de la div avec l'animation oneAnim
var mouse                = { x : 0, y : 0 };                                    //Position du corseur de la souris
var mouseDivPosition     = { x : 0, y : 0 };                                    //Position de la div pour l'animation
var mouseDivChild        =  document.querySelector("div.mouseDiv p");           //Enfant de la div pour oneAnim
var muteSound            =  document.querySelector(".control .muteSound");
var audio                =  document.querySelector("audio");

//ANIMATION ON CLICK PLANETS
planetEarth.addEventListener('click', function()
{
    planetEarth.classList.add('clickEffect1')
});

planetEarth.addEventListener('animationend', function()
{
    planetEarth.classList.remove('clickEffect1');
});

//ANIMATION oneAnimActive
body.addEventListener('mousemove', function(event)
{
    mouse.x                 = event.clientX;
    mouse.y                 = event.clientY;
    mouseDivPosition.x      = mouse.x + 10;
    mouseDivPosition.y      = mouse.y - 10;
    mouseDiv.style.left     = mouseDivPosition.x + "px";
    mouseDiv.style.top      = mouseDivPosition.y + "px";
});

planetEarth.addEventListener('click', function()
{
    var node = document.createElement("P");
    var textnode = document.createTextNode("+" + clicker.global_var.detritus_click_result);
    node.appendChild(textnode);
    node.classList.add('oneAnimActive');
    mouseDiv.appendChild(node);

    node.addEventListener('animationend', function()
    {
        node.remove(node.selectedIndex);
    });
});



//MUTESOUND
muteSound.addEventListener('click', function()
{
    if (audio.paused)
    {
        audio.play();
    }
    else
    {
        audio.pause();
    }
});
