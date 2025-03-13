

// Palindrome ou reverse word
function isPalindrome(s) {
    // Nettoyer la chaîne : ignorer les espaces, la ponctuation et les majuscules
    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Cas de base : une chaîne vide ou un seul caractère est un palindrome
    if (s.length <= 1) {
        return true;
    }
    // Vérifier si le premier et le dernier caractère sont identiques
    if (s[0] !== s[s.length - 1]) {
        return false;
    }
    // Appel récursif sur la sous-chaîne
    return isPalindrome(s.slice(1, -1));
}

// Exemple d'utilisation
const chaine = "kaka";
if (isPalindrome(chaine)) {
    console.log(`'${chaine}' est un palindrome.`);
} else {
    console.log(`'${chaine}' n'est pas un palindrome.`);
}
