function calculerMonnaieRendue() {
    // Lire les valeurs des champs de formulaire
let montant = document.getElementById("montant").value;
let donne = document.getElementById("donne").value;

   // Calculer la monnaie à rendre
   let monnaie = donne - montant;
   let billet10 = 0;
   let billet5 = 0;
   let piece1 = 0;

   while (monnaie >= 10) {
     monnaie -= 10;
     billet10++;
   }
   while (monnaie >= 5) {
     monnaie -= 5;
     billet5++;
   }
   piece1 = monnaie;

   // Afficher le résultat dans la page
   document.getElementById("result").innerHTML = `La monnaie à rendre est de : <br\/>${billet10} billets de 10€  <br\/>${billet5} billets de 5€  <br\/>${piece1} pièces de 1€`;
   
}
