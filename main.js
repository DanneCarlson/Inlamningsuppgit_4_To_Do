/*
Info från Andreas för To-do-list
H1
p - vad som är klart
label med id- input
input type id och namn
knapp med id
<small> där jag kan ange lite mer info
<ul> som är tom från början

enkel css:
bakgrund
.completed {
    text.decoration: line-through;
    color:
}

JavaScript:
const för alla element som jag ska komma åt från HTML
innerHTML

Hämta värde från vår input:
const input = document.querySelector('input');
Använd appendChild för att lägga till i ul

Kolla "span"! (Andreas presentation)
*/

const nyUppgift = document.querySelector("#nyUppgift");
const laggTillBtn = document.querySelector("#laggTillBtn");
const newListElement = document.querySelector("#list");


laggTillBtn.addEventListener("click", function(){

    list.appendChild(nyUppgift);
  });










/*function addToList (){
    
    let nyUppgift = document.getElementById("nyUppgift");
    let newListElement = document.getElementById("list");
    
    newListElement.addToList = nyUppgift;
    newListElement.innerHTML = newListElement;

    //newListElement = document.createElement(nyUppgift);
    //li.appendChild(document.createTextNode("Element 4"));

    
    //document.getElementById("list").innerHTML = "Fakk";
    

}*/