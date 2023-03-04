function checkPassword() {
  var password = document.getElementById("password").value;
  var strength = 0;

  //+1 caractere min
  if (password.match(/[a-z]+/)) {
    strength += 1;
  }

  //+1 caractere maj
  if (password.match(/[A-Z]+/)) {
    strength += 1;

    //+1 caractere chiffre
  }
  if (password.match(/[0-9]+/)) {
    strength += 1;
  }
  //+1 caractere autre
  if (password.match(/[$@#!%^&*]+/)) {
    strength += 1;
  }
  
  if (password.length >= 8) {
    strength += 1;
  }

  //modification css
  var passwordStrengthLabel = document.getElementById("password-strength");

  switch (strength) {
      case 5:
        passwordStrengthLabel.innerHTML = "Force : Tres safe";
        passwordStrengthLabel.classList.add("safe");
        break;

      case 4:
        passwordStrengthLabel.innerHTML = "Force : Safe";
        passwordStrengthLabel.classList.add("safe");
        break;

      case 3:
        passwordStrengthLabel.innerHTML = "Force : Moyen";
        passwordStrengthLabel.classList.add("medium");
        break;

      default:
        passwordStrengthLabel.innerHTML = "Force : Dangereux";
        passwordStrengthLabel.classList.add("dangereux");
  }
  document.getElementById("password-strength").innerHTML = "Force : " + passwordStrength;
}