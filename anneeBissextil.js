

function anneeBissextile(annee) {
    
    if (annee % 4 == 0 && annee % 100 != 0 || annee % 400 == 0)  return true 
    else return false;

}
console.log(anneeBissextile(2025));

// Autre manière
// function anneeBissextile(annee) {
//     return (annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0;
// }

// console.log(anneeBissextile(2025)); 

//--------------------------- Prix de ticket de cinéma---------------------
//const age = parseInt(prompt('Entrez votre age:'));

