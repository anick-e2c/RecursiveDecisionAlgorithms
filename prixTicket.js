function prixTicketCinema(age) {
    if (age <= 12) return `Le prix du ticket est de : 10 Euro`;
    if (age <= 13  || age <= 17) return `Le prix du ticket est de : 15 Euro`;
    else return `Le prix du ticket est de : 20 Euro`;
}

console.log(prixTicketCinema(15));