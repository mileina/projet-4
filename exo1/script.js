const ageInput = document.getElementById('age-input');
const genderInput = document.getElementById('gender-input');
const submitButton = document.getElementById('submit-button');
const resultContainer = document.getElementById('result-container');

submitButton.addEventListener('click', () => {
  const age = parseInt(ageInput.value);
  const gender = genderInput.value;

  if (gender === 'm' && age >= 20) {
    resultContainer.innerHTML = 'Vous etes imposable';
  } else if (gender === 'f' && age >= 18 && age <= 35) {
    resultContainer.innerHTML = 'Vous etes imposable';
  } else {
    resultContainer.innerHTML = 'Vous etes non imposable!';
  }
});