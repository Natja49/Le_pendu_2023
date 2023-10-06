const MOTSMYSTERES = ["ESCALIER", "MAISON"];
const MOTMYSTERE = MOTSMYSTERES[0];
const LETTRESMOTMYSTERE = MOTMYSTERE.split("");
console.log("Lettres mot mystere : ", LETTRESMOTMYSTERE);
//
const divContainer = document.createElement("div");
// On créé un élément table

const divBoutons = document.createElement("div");
divBoutons.classList.add("div-boutons")
//Injecte dans la table
divContainer.append(divBoutons);

// On boucle 8 fois (nombre de lignes à injecter)
for (let numeroCaractere = 65; numeroCaractere <= 90; numeroCaractere++) {
    // On créé un élément ligne(table row)
    let btnLettre = document.createElement("button");
    //Code ASCII
    let lettreAlphabet = String.fromCharCode(numeroCaractere);
    btnLettre.textContent = lettreAlphabet;
    //class bouton
    btnLettre.classList.add("button-letters");
    divBoutons.append(btnLettre);
}


//Création d'une div-Tirets
const divTirets = document.createElement("div");
divContainer.append(divTirets);

//création de tiret
for (let index = 0; index < LETTRESMOTMYSTERE.length; index++) {
    let unTiret = document.createElement("span");
    unTiret.classList.add("tiret");
    unTiret.textContent = "-";
//Tiret un enfant de Tirets
    divTirets.append(unTiret);
    divTirets.classList.add("tirets");
}

//Création texte resultats
const divResultats = document.createElement("div");
divContainer.append(divResultats);

//creation class.divResultat
divResultats.classList.add("resultats");

//Creation d'un span pour resultats
let resultat = document.createElement("span");
resultat.classList.add("resultat");

//Ajout du texte RESULTAT
divResultats.append(resultat);
resultat.textContent="RÉSULTAT :";
//Creation d'un span essais
let essais = document.createElement("span");
essais.classList.add("essais");

//Ajout du texte ESSAIS
divResultats.append(essais);
essais.textContent="Essais";

//Creation d'un span restant
let restant = document.createElement("span");
restant.classList.add("restant");

//Ajout du texte ESSAIS
divResultats.append(restant);
restant.textContent="Restant : 8";

divContainer.append(divResultats);

document.body.appendChild(divContainer);


//avec querySelectorAll on demande un tableau avant/ puis on selectionne les elements
let btnLetters = document.querySelectorAll(".button-letters");
console.log("btnLetters : ", btnLetters);
let nbEssais = 8;
for (let i = 0; i < btnLetters.length; i++) {
    let trouve = false;
    let gagne = true;
    // ecouter les boutons
    btnLetters[i].addEventListener("click", function(detailEvenement){
    detailEvenement.target.disabled= true;
    console.log("L'utilisateur a cliqué sur la lettre : ", detailEvenement.target.innerText);
    lesTirets = document.querySelectorAll(".tiret");
    console.log("Les tirets : ", lesTirets);
    console.log("Les lettres du mot mystère : ", LETTRESMOTMYSTERE);
    let lettreCliquee = detailEvenement.target.textContent;
    console.log("Lettre cliquée : ", detailEvenement.target.textContent);
    for (let index = 0; index < LETTRESMOTMYSTERE.length; index++) {
        if (lettreCliquee == LETTRESMOTMYSTERE[index]) {
            lesTirets[index].textContent = lettreCliquee;
            trouve = true;
            document.querySelectorAll(".tiret").forEach(spanTiret => {
                if (spanTiret.textContent == "-") {
                    gagne = false;
                }
            })
            if (gagne == true) {
                document.querySelector(".div-boutons").style.visibility = "hidden";
                alert("Bravo, vous avez gagné !");
            }
        }
    }
    if (trouve == false) {
        nbEssais --;
        restant.textContent = "Restant : " + nbEssais;
    }
  });
}

let btnTirets = document.querySelectorAll(".tiret");
console.log("btnTirets : ", btnTirets);
for (let i =0; i< btnTirets.length; i++) {

  };
//   alert("Désolé, vou avez perdu !");