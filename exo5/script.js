// Obtenir référence de l'input email
//https://developer.mozilla.org/fr/docs/Web/HTML/Element/input/email

const emailInput = document.getElementById("email");

// surveiller la saisie de l'input email
emailInput.addEventListener("input", function () {

  // Récupérer la valeur de l'input email
  const email = emailInput.value;

  // vérifier la présence de caractere
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

  // Vérifier si l'email est valite en utilisant l'expression régulière
  const isValid = emailRegex.test(email);
  
  // Afficher un message dans la page pour indiquer si l'email est valide ou non
  if (isValid) {
    document.getElementById("result").innerHTML = "Adresse email valide.";
  } else {
    document.getElementById("result").innerHTML = "Adresse email non valide.";
  }
});
