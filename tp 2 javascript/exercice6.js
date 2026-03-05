// Déclaration
let nom = null;
let age = 0;
let ville = "";
let score = undefined;
let actif = false;

let variables = { nom, age, ville, score, actif };

// Partie A - ?? 
console.log("=== Partie A (??) ===");
for (let key in variables) {
    console.log(`${key} ?? "valeur par défaut" -> ${variables[key] ?? "valeur par défaut"}`);
}

// Partie B - || 
console.log("\n=== Partie B (||) ===");
for (let key in variables) {
    console.log(`${key} || "valeur par défaut" -> ${variables[key] || "valeur par défaut"}`);
}

// Partie C - comparaison ?? vs ||
console.log("\n=== Partie C (comparaison ?? vs ||) ===");
for (let key in variables) {
    let resDoubleQuestion = variables[key] ?? "valeur par défaut";
    let resOr = variables[key] || "valeur par défaut";
    let comparaison = resDoubleQuestion === resOr ? "même résultat" : "résultat différent";
    console.log(`${key} : ?? et || -> ${comparaison}`);
}