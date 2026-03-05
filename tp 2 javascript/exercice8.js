let nom = "   Fatima   ";
let age = "23";
let email = "fatima@example";
let scoreJeu = "150pts";
let estAdmin = "false";
let derniereConnexion = null;
let nombreConnexions = "0";

// Correction
let nomCorrige = nom.trim() || "Inconnu";
let ageCorrige = parseInt(age);
let ageValide = (!isNaN(ageCorrige) && ageCorrige > 0);

let emailValide = email.includes("@") && email.indexOf(".") > email.indexOf("@");

let scoreCorrige = parseInt(scoreJeu);
if (isNaN(scoreCorrige)) scoreCorrige = 0;

let estAdminCorrige = (estAdmin === "true") ? true : false;

let derniereConnexionCorrige = derniereConnexion ?? "Jamais connecté";

let nbConnexions = Number(nombreConnexions);
let nbConnexionsAffichage = (nbConnexions === 0) ? "Aucune connexion" : nbConnexions;

// Rapport
console.log("\n===== RAPPORT UTILISATEUR =====");
console.log(`nom              : "${nomCorrige}" (corrigé : espaces supprimés)`);
console.log(`age              : ${ageCorrige} (${ageValide ? "valide" : "invalide"})`);
console.log(`email            : "${email}" (${emailValide ? "valide" : "invalide : pas de point après @"})`);
console.log(`scoreJeu         : ${scoreCorrige} (extrait depuis "${scoreJeu}")`);
console.log(`estAdmin         : ${estAdminCorrige} (attention : Boolean("false") = true, conversion manuelle requise)`);
console.log(`derniereConnexion: "${derniereConnexionCorrige}" (valeur par défaut via ??)`);
console.log(`nombreConnexions : "${nbConnexionsAffichage}" (${nbConnexions === 0 ? "0 après conversion" : nbConnexions})`);
console.log("================================");