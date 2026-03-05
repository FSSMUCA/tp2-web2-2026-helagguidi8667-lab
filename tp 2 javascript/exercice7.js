// Déclaration
let nomProduit = "Clavier mécanique";
let prix = 89.99;
let quantite = 3;
let codePromo = null;
let reductionPourcentage = 10;
let estMembre = true;
let soldeCompte = 250;

// Calcul sous-total
let sousTotal = prix * quantite;
console.log("Sous-total :", sousTotal.toFixed(2), "MAD");

// Calcul réduction
let reduction = (codePromo !== null && estMembre) ? sousTotal * (reductionPourcentage / 100) : 0;
console.log("Réduction :", reduction.toFixed(3), "MAD");

// Total final
let total = sousTotal - reduction;
console.log("Total final :", total.toFixed(3), "MAD");

// Vérification solde
let statut = (soldeCompte >= total) ? "Paiement accepté" : "Solde insuffisant";
console.log("Statut :", statut);

// Nouveau solde si paiement accepté
let nouveauSolde = (statut === "Paiement accepté") ? soldeCompte - total : soldeCompte;
if(statut === "Paiement accepté") {
    console.log("Nouveau solde :", nouveauSolde.toFixed(3), "MAD");
}

// Récapitulatif
console.log("\n===== RÉCAPITULATIF =====");
console.log("Produit   :", nomProduit);
console.log("Quantité  :", quantite);
console.log("Prix unit.:", prix, "MAD");
console.log("Sous-total:", sousTotal.toFixed(2), "MAD");
console.log("Réduction :", reduction.toFixed(3), "MAD");
console.log("Total     :", total.toFixed(3), "MAD");
console.log("Statut    :", statut);
console.log("Solde     :", nouveauSolde.toFixed(3), "MAD");
console.log("=========================");