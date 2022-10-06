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

laggTillBtn.addEventListener("click", function () {
  // Lokal variabel för det som användaren matat in
  let nySakAttGora = nyUppgift.value;
  let papperskorg = ["Ta bort"]; // Här vill jag ha en bild


  /*let papperskorg = [];
  papperskorg[0] = "trash.png";*/

  // Om användaren inte matat in något i textfältet
  if (nySakAttGora.length == 0) {
    returInfo.innerHTML = "Vänligen ange en uppgift att lägga till";
    return;
  } else {
    let sakAttGora = document.createElement("li"); // Skapar plats i listan
    let sakAttGoraLabel = document.createElement("span"); // Skapar ett span i listan

    // Hur skapar jag ett tomrum mellan uppgiften och ta bort?
    let tomrumLabel = document.createElement("span");
    tomrumLabel.innerHTML = ":    :    :";

    let taBortLabel = document.createElement("span");
    taBortLabel.innerHTML = papperskorg[0];

    

    listan.appendChild(sakAttGora); // Lägger till element/rad i listan
    sakAttGoraLabel.innerText = nySakAttGora; // Sätter det som användaren matat in
    sakAttGora.appendChild(sakAttGoraLabel); // Lägger till uppgiften i listelementet +++++ ett till span
    sakAttGora.appendChild(tomrumLabel);
    sakAttGora.appendChild(taBortLabel);

    todoArray.push(nySakAttGora); // Lägg till uppgiften i arrayen

    // När en klickar på span/uppgift i listan
    sakAttGoraLabel.addEventListener("click", function () {
      if (sakAttGoraLabel.getAttribute("class") == "completed") {
        // Om uppgiften redan har klassen utförd
        sakAttGoraLabel.setAttribute("class", "");
        avklaradeUppgifter--; // Subtrahera från avklarade uppgifter
      } else {
        sakAttGoraLabel.setAttribute("class", "completed"); // Annars ge den klassen completed via css
        avklaradeUppgifter++; // Addera till avklarade uppgifter
      }

      /*// Tillagt 29/9
        const todoObject = {};
        todoObject.todo = nyUppgift;
        //todoObject.status = "ej avklarad";
        todoArray.push(todoObject);*/

     

      avklarat.innerHTML = `${avklaradeUppgifter} uppgift/er avklarad/e`; // Visar antalet avklarade uppgifter

      // Lägga till papperskorg:
      // Font Awesome?
      // Emojis, kolla w3schools: &#1F5D1 (papperskorg)
    });

    taBortLabel.addEventListener("click", function () {
      // Om klassen är completed ska avklaradeUppgifter räknas ned
      if (sakAttGoraLabel.getAttribute("class") == "completed") {
        avklaradeUppgifter--; // Subtrahera från avklarade uppgifter
      }
      sakAttGora.remove(sakAttGora);
      avklarat.innerHTML = `${avklaradeUppgifter} uppgift/er avklarad/e`;
    });

    //avklarat.innerHTML = `${avklaradeUppgifter} uppgift/er avklarad/e`; // Visar antalet avklarade uppgifter

    
    //Tömmer inmatningsfältet och infofältet
    nyUppgift.value = "";
    returInfo.innerHTML = "";
  }
});


