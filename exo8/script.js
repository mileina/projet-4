// Tableau d'objets
      var objects = [
        { name: "Voiture", image: "voiture.jpg" },
        { name: "Ordinateur portable", image: "Ordinateur portable.jpg" },
        { name: "Guitare \u00e9lectrique", image: "Guitare.jpg" },
        { name: "V\u00e9lo", image: "V\u00e9lo.jpg" },
        { name: "Table \u00e0 manger", image: "Table.jpg" }
      ];

      // Objet choisi aléatoirement
var chosenObject = objects[Math.floor(Math.random() * objects.length)];

// Prix choisi aléatoirement
var chosenPrice = Math.floor(Math.random() * 100) + 1;

// Nombre de tentatives restantes
var remainingGuesses = 10;

// Affiche le nom et l'image de l'objet choisi
document.getElementById("object-name").innerHTML = chosenObject.name;
document.getElementById("object-image").src = chosenObject.image;

function guess() {
    // Récupère le prix deviné
    var guess = document.getElementById("guess-input").value;

    // Vérifie si le prix deviné est correct
    if (guess == chosenPrice) {
        document.getElementById("message").innerHTML = "F\u00e9licitations! vous avez trouv\u00e9 le juste prix!";
        document.getElementById("message").classList.add("success");
        document.getElementById("guess-input").setAttribute('disabled', 'disabled');
        document.getElementsByTagName("button")[0].setAttribute('disabled', 'disabled');
        } else {
        remainingGuesses--;
        if (remainingGuesses > 0) {
        if(guess < chosenPrice) {
        document.getElementById("message").innerHTML = "D\u00e9sol\u00e9, le juste prix est plus \u00e9lev\u00e9. Il vous reste " + remainingGuesses + " tentatives.";
        } else {
        document.getElementById("message").innerHTML = "D\u00e9sol\u00e9, le juste prix est plus bas. Il vous reste " + remainingGuesses + " tentatives.";
        }
        document.getElementById("message").classList.add("failure");
        } else {
        document.getElementById("message").innerHTML = "D\u00e9sol\u00e9, vous n'avez plus de tentatives. Le juste prix \u00e9tait " + chosenPrice + " \u20ac.";
        document.getElementById("message").classList.add("failure");
        document.getElementById("guess-input").setAttribute('disabled', 'disabled');
        document.getElementsByTagName("button")[0].setAttribute('disabled', 'disabled');
        }
        }
        }