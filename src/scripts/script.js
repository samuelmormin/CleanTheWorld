var body                 = document.querySelector("body");
var planetEarth          = document.querySelector(".planet");
var mouseDiv             = document.querySelector("div.mouseClickEffect");
var mouse                = { x : 0, y : 0 };
var mouseDivPosition     = { x : 0, y : 0 };
var mouseDivChild        =  document.querySelector("div.mouseDiv p");
console.log(body);

planetEarth.addEventListener('click', function()
{
    planetEarth.classList.add('clickEffect1')
});

planetEarth.addEventListener('animationend', function()
{
    planetEarth.classList.remove('clickEffect1');

});

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
    mouseDiv.innerHTML = "<p>+ " + clicker.global_var.detritus_click_result + "</p>";
    mouseDiv.firstChild.style.animation = "plusOneAnim 0.6s ease";
});

mouseDiv.addEventListener('animationend', function(){
    mouseDiv.firstChild.style.animation = "";
    mouseDiv.removeChild(mouseDiv.firstChild);
});
