var k = document.getElementById("yes");
var y = document.getElementById("no");
var img = document.getElementById("im");
document.getElementById("aud1").style.display="none";

img.style.height="300px";
img.style.width="300px";
var c=0;
if(!c){
setTimeout(function() {if(!c) {alert("Why So Much Time");} }, 10000);
}
function accha()
{
    c=1;
    alert("Good Decision!!");
    img.src="couldbeus.png";
    aud.src="reelaudio.mp3";
    document.getElementById("aud1").style.display="block";
}
img.style.zIndex = 0;
y.style.zIndex = 9999;

function jump() {
    var a = Math.random() * 200;
    var b = Math.random() * 200 ;

    console.log(a, b);
    y.style.left = `${a}px`;
    y.style.top = `${b}px`;
}