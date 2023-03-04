function calculerPrime() {
    // Récupérer les données du client à partir des inputs
    const age = document.getElementById("age").value;
    const permisDepuis = document.getElementById("permisDepuis").value;
    const nbAccidents = document.getElementById("nbAccidents").value;
    const anciennete = document.getElementById("anciennete").value;
    let prime = "Tarif bleu";

    if (age < 25 && permisDepuis < 2) {
        if (nbAccidents === 0) {
            prime = "Tarif rouge";
        } else {
            prime = "Refusé";
        }
    } else if (age < 25 || (age >= 25 && permisDepuis < 2)) {
        if (nbAccidents === 0) {
            prime = "Tarif orange";
        } else if (nbAccidents === 1) {
            prime = "Tarif rouge";
        } else {
            prime = "Refusé";
        }
    } else if (age >= 25 && permisDepuis >= 2) {
        if (nbAccidents === 0) {
            prime = "Tarif vert";
        } else if (nbAccidents === 1) {
            prime = "Tarif orange";
        } else if (nbAccidents === 2) {
            prime = "Tarif rouge";
        } else {
            prime = "Refusé";
        }
    }

    if (anciennete >= 1 && prime !== "Refusé") {
        if (prime === "Tarif rouge") {
            prime = "Tarif orange";
        } else if (prime === "Tarif orange") {
            prime = "Tarif vert";
        }
    }
    // Afficher la prime dans la page
    document.getElementById("result").innerHTML = "Votre prime d'assurance est : " + prime;
}
