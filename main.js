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

/* 28/9 från Andreas:


*/



// Hämtar in referens till listan
const listan = document.querySelector("#list");

const laggTillBtn = document.querySelector("#laggTillBtn");
//const labelInput = document.querySelector("#labelInput");

const returInfo = document.querySelector("#info");

const avklarat = document.querySelector("#avklarat");
let avklaradeUppgifter = 0;

// Kika på det där med array, både lägga till och ta bort
const todoArray = [];


laggTillBtn.addEventListener("click", function(){

   
    let nyUppgift = document.querySelector("#nyUppgift");
    let nySakAttGora = nyUppgift.value;                         // Tar in det som matats in i fältet
    //todoArray.push(nySakAttGora);
    
    if (nySakAttGora.length == 0){
        returInfo.innerHTML = "Vänligen ange en uppgift, mothertrucker :)";
        return;
    } else {
        let sakAttGora = document.createElement('li');
        const sakAttGoraLabel = document.createElement('span');
    
        listan.appendChild(sakAttGora);                             // Lägger till en rad i listan
        sakAttGoraLabel.innerText = nySakAttGora; 
        sakAttGora.appendChild(sakAttGoraLabel);


        
        sakAttGoraLabel.addEventListener('click', function(){
        if (sakAttGora.getAttribute('class') == 'completed') {
        sakAttGora.setAttribute('class', '');
        avklaradeUppgifter--;
        }
        else {
        sakAttGora.setAttribute('class', 'completed');
        avklaradeUppgifter++;

        //Hur gör jag överstrykning här?
        //sakAttGoraLabel.innerHTML.strike;
        
        }

        avklarat.innerHTML = `${avklaradeUppgifter} uppgift/er avklarad/e`;
        

        
    });




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