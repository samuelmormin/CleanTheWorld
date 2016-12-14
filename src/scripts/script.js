var body                 = document.querySelector("body");
var planetEarth          = document.querySelector(".planet");
var mouseDiv             = document.querySelector("div.mouseClickEffect");
var mouse                = { x : 0, y : 0 };
var mouseDivPosition      = { x : 0, y : 0 };

console.log(body);

planetEarth.addEventListener('click', function()
{
    planetEarth.classList.add('clickEffect1')
});

planetEarth.addEventListener('animationend', function()
{
    planetEarth.classList.remove('clickEffect1');
    mouseDiv.removeChild(mouseDiv.firstChild);
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

planetEarth.addEventListener('click', function(){
    mouseDiv.innerHTML = "<p>+1</p>";
});
