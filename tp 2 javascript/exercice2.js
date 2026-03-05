let valeurs = [0, 1, "", "0", null, undefined, NaN, false, [], {}];

for (let i = 0; i < valeurs.length; i++) {
    let v = valeurs[i];
    let etat = v ? "truthy" : "falsy";
    console.log(String(v) + " -> " + etat);
}