function calculateBill() {
    const copies = document.getElementById("copies").value;
    let total = 0;
  
    if (copies <= 10) {
      total = copies * 0.1;
    } else if (copies <= 30) {
      total = 10 * 0.1 + (copies - 10) * 0.09;
    } else {
      total = 10 * 0.1 + 20 * 0.09 + (copies - 30) * 0.08;
    }
    document.getElementById("result").innerHTML = `La facture totale est de ${total} \u20AC`;
  }