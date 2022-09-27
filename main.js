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
//const nyUppgift = document.getElementById('nyUppgift');



// Hämtar in referens till listan
const listan = document.querySelector("#list");

const laggTillBtn = document.querySelector("#laggTillBtn");
//const labelInput = document.querySelector("#labelInput");

const returInfo = document.querySelector("#info");

laggTillBtn.addEventListener("click", function(){

    let nyUppgift = document.querySelector("#nyUppgift");
    let nySakAttGora = nyUppgift.value;                         // Tar in det som matats in i fältet
    
    if (nySakAttGora.length == 0){
        returInfo.innerHTML = "Vänligen ange en uppgift, mothertrucker :)";
        return;
    } else {
        let sakAttGora = document.createElement('li');
        let sakAttGoraLabel = document.createElement('span');
    
        listan.appendChild(sakAttGora);                             // Lägger till en rad i listan
        sakAttGoraLabel.innerText = nySakAttGora; 
        sakAttGora.appendChild(sakAttGoraLabel);

        //Tömmer inmatningsfältet
        nyUppgift.value = "";
        returInfo.innerHTML = "";
    }

    

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