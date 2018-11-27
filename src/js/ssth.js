// ==UserScript==
// @name Unnamed Script 734261
// @version 1
// @grant none
// ==/UserScript==// ==UserScript==
// @name plemiona
// @namespace plemiona
// @description plemiona
// @include https://*.plemiona.pl/*
// @exclude https://*.plemiona.pl/*screen=place*
// @version 1
// @grant none
// ==/UserScript==

// allow pasting

var KEY = "-491485617";

function validation()
{
var nick = document.getElementsByClassName("menu-column-item")[23].innerHTML;
var firstFiltr = nick.split(">");
var completeFiltr = firstFiltr[1].split("<");

return completeFiltr[0];
}

function getTime(e)
{
e = (typeof e !== 'undefined') ? e : 0;

var getTimeFromServer = document.getElementById("serverTime");
var spltedTime = getTimeFromServer.innerHTML.split(":"); 
switch(e) {
case 0:
return getTimeFromServer.innerHTML;
break;
case 1:
return spltedTime[0];
break;
case 2:
return spltedTime[1];
break;
case 3:
return spltedTime[2];
break;
} 

return getTimeFromServer.innerHTML;
}

function showMenu()
{
var mainMenu = document.getElementById("header_info");
var menu = document.createElement("div");
var input = document.createElement("input");
var inputDate = document.createElement("input");
var button = document.createElement("button");
var send = document.createElement("button");
var close = document.createElement("button");
var p = document.createElement("p");

input.setAttribute("placeholder", "0");
input.setAttribute("size", 6);
input.id = "attacks";

inputDate.setAttribute("placeholder", "HH:MM:SS");
inputDate.setAttribute("size", 12);
inputDate.id = "data";

p.innerHTML = "Wprowadź ilość ataków: ";
button.innerHTML = "OK";
send.innerHTML = "Atakuj!";
close.innerHTML = "Zamknij";
menu.innerHTML = "<h1><center>Menu główne</center></h1>";

p.style.padding = "2px";

with(button.style)
{
backgroundColor = "#4CAF50";
border = "none";
color = "white";
padding = "0px";
textAlign = "center";
textDecoration = "none";
display = "inline-block";
fontSize = "11px";
float = "right";
padding = "2px";
}

with(send.style)
{
backgroundColor = "#4CAF50";
border = "none";
color = "white";
padding = "0px";
textAlign = "center";
textDecoration = "none";
display = "inline-block";
fontSize = "11px";
float = "right";
padding = "2px";
}

with(close.style)
{
backgroundColor = "#4CAF50";
border = "none";
color = "white";
padding = "0px";
textAlign = "center";
textDecoration = "none";
display = "inline-block";
fontSize = "11px";
float = "right";
padding = "2px";
}

with(menu.style)
{
width = "100%";
height = "100px";
padding = "2px";
borderStyle = "solid";
borderWidth = "2px";
}

button.onclick=function()
{ 
var n = input.value;
var pages = new Array(n);
var handle = new Array(n);

for(i = 0; i < n; i++)
pages = "/game.php?screen=place";

if(!Number.isInteger(parseInt(input.value))){
alert("Błędne dane wejściowe!");
return;
}

if(inputDate.value != ""){
var splitDate = inputDate.value.split(":");
var h = parseInt(splitDate[0]);
var m = parseInt(splitDate[1]);
var s = parseInt(splitDate[2]);

if(h < 0 || h > 23){
alert("Błędne dane wejściowe!");
return;
}

if(m < 0 || m > 59){
alert("Błędne dane wejściowe!");
return;
}

if(s < 0 || s > 59){
alert("Błędne dane wejściowe!");
return;
}
}

while(pages.length > 0){
var url = pages.shift();
var openWindow = window.open(url);
handle[pages.length] = openWindow;
}

if(inputDate.value == ""){
menu.removeChild(button);
menu.removeChild(input);
menu.removeChild(inputDate);
p.innerHTML = "Nacisnij Atakuj gdy przygotujesz ataki";

send.onclick=function()
{
if(1 == 1){
for(i = 0; i < handle.length; i++)
{
var a = handle.document.getElementById("troop_confirm_go");
a.click();
}

close.onclick=function()
{
for(i = 0; i < handle.length; i++)
handle.close();

location.reload();
}

menu.removeChild(send);
menu.appendChild(close);
p.innerHTML = "Gotowe! Zamknij otwarte karty.";

}else
{
alert("Kod autoryzacyjny nie zgadza się!");
}
}
}else{
if(1 == 1){

menu.removeChild(button);
menu.removeChild(input);
menu.removeChild(inputDate);

p.innerHTML = "Ataki dojdą ok. : " + inputDate.value;

send.onclick=function()
{
function timedCount() {
for(i = 0; i < handle.length; i++)
{
var arriveTime = handle.document.getElementsByClassName("relative_time")[0].innerHTML;
if(arriveTime.split(" ")[2] == inputDate.value)
{
handle.document.getElementById("troop_confirm_go").click();
//handle.close();
handle.splice(i, 1);

p.innerHTML = "Czekaj! Zostaw wszystkie karty otwarte <br />Zamkniemy je po ataku!<br />Pozostało: " + handle.length + " ataków do wysłania"; 
}
}
if(handle.length > 0){
setTimeout(function(){ timedCount() }, 5);
}
else
{
location.reload();
}
}

timedCount();

menu.removeChild(send);
p.innerHTML = "Czekaj! Zostaw wszystkie karty otwarte <br />Zamkniemy je po ataku!<br />Pozostało: " + handle.length + " ataków do wysłania"; 
}
}else
{
alert("Kod autoryzacyjny nie zgadza się!");
}
}
menu.appendChild(send);
} 

mainMenu.appendChild(menu);

menu.appendChild(p);
menu.appendChild(input);
menu.appendChild(inputDate);
menu.appendChild(button);
}

String.prototype.hashCode = function() {
var hash = 0, i, chr, len;
if (this.length === 0) return hash;
for (i = 0, len = this.length; i < len; i++) {
chr = this.charCodeAt(i);
hash = ((hash << 5) - hash) + chr;
hash |= 0; // Convert to 32bit integer
}
return hash;
};

showMenu();