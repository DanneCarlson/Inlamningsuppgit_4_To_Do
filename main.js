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



let papperskorg = '<i class="fa-regular fa-trash-can"></i>';

let img = '<img src="trash.png">';


laggTillBtn.addEventListener("click", function () {
  // Lokal variabel för det som användaren matat in
  let nySakAttGora = nyUppgift.value;

  // Om användaren inte matat in något i textfältet
  if (nySakAttGora.length == 0) {
    returInfo.innerHTML = "Vänligen ange en uppgift att lägga till";
    return;
  } else {
    let sakAttGora = document.createElement("li"); // Skapar plats i listan
    let sakAttGoraLabel = document.createElement("span"); // Skapar ett span i listan
    let taBortLabel = document.createElement("span");
    taBortLabel.innerHTML = papperskorg;

    listan.appendChild(sakAttGora); // Lägger till element/rad i listan
    sakAttGoraLabel.innerText = nySakAttGora; // Sätter det som användaren matat in
    sakAttGora.appendChild(sakAttGoraLabel); // Lägger till uppgiften i listelementet 
    //sakAttGora.appendChild(tomrumLabel);
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

      avklarat.innerHTML = `${avklaradeUppgifter} uppgift/er avklarad/e`; // Visar antalet avklarade uppgifter
    });

    taBortLabel.addEventListener("click", function () {
      // Om klassen är completed ska avklaradeUppgifter räknas ned
      if (sakAttGoraLabel.getAttribute("class") == "completed") {
        avklaradeUppgifter--; // Subtrahera från avklarade uppgifter
      }
      sakAttGora.remove(sakAttGora);
      
      avklarat.innerHTML = `${avklaradeUppgifter} uppgift/er avklarad/e`;
    });

    //Tömmer inmatningsfältet och infofältet
    nyUppgift.value = "";
    returInfo.innerHTML = "";
  }
});


