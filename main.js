

// Hämtar in referens till listan
const listan = document.querySelector("#list");

// Hämtar in referens till knappen
const laggTillBtn = document.querySelector("#laggTillBtn");

// Här visas text om användaren inte angett något
const returInfo = document.querySelector("#info");

// Här visas antalet avklarade uppgifter
const avklarat = document.querySelector("#avklarat");
let avklaradeUppgifter = 0;

// Array där inmatade uppgifter läggs till
const todoArray = [];

// Referens till det som användaren matar in i textfältet
const nyUppgift = document.querySelector("#nyUppgift");


laggTillBtn.addEventListener("click", function(){

    // Lokal variabel för det som användaren matat in
    let nySakAttGora = nyUppgift.value;                         
    
    // Om användaren inte matat in något i textfältet
    if (nySakAttGora.length == 0){
        returInfo.innerHTML = "Vänligen ange en uppgift";
        return;
    } else {
        let sakAttGora = document.createElement('li');              // Skapar plats i listan
        let sakAttGoraLabel = document.createElement('span');       // Skapar ett span i listan
        todoArray.push(nySakAttGora);                               // Lägg till uppgiften i arrayen
        listan.appendChild(sakAttGora);                             // Lägger till en rad i listan
        sakAttGoraLabel.innerText = nySakAttGora;                   // Visar den nya uppgiften
        sakAttGora.appendChild(sakAttGoraLabel);                    // Lägger till uppgiften i listelementet

      
        // När en klickar på span/uppgift i listan
        sakAttGoraLabel.addEventListener('click', function(){
        if (sakAttGora.getAttribute('class') == 'completed') {      // Om uppgiften redan har klassen utförd
        sakAttGora.setAttribute('class', '');
        avklaradeUppgifter--;                                       // Subtrahera från avklarade uppgifter
        }
        else {
        sakAttGora.setAttribute('class', 'completed');              // Annars ge den klassen completed via css
        avklaradeUppgifter++;                                       // Addera till avklarade uppgifter

        
        }

        /*// Tillagt 29/9
        const todoObject = {};
        todoObject.todo = nyUppgift;
        //todoObject.status = "ej avklarad";
        todoArray.push(todoObject);*/

        avklarat.innerHTML = `${avklaradeUppgifter} uppgift/er avklarad/e`;     // Visar antalet avklarade uppgifter

        // Lägga till papperskorg:
        // Font Awesome?
        // Emojis, kolla w3schools: &#1F5D1 (papperskorg)
      
    });




        //Tömmer inmatningsfältet och infofältet
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