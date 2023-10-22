/*Množstevní slevy
Napište program, který spočítá cenu objednávky triček s potiskem.
Firma nabízející trička s potiskem poskytuje množstevní slevy podle počtu objednaný kusů. Při objednávce pod 50 kusů stojí 
jedno tričko 300 Kč. Pokud si objednáme alespoň 50 kusů, je cena 250 Kč za kus. Při objednávce nad 200 kusů je cena 200 Kč 
za tričko. Nad 500 kusů zaplatíme 150 Kč za tričko a nad 1000 kusů zaplatíme 120 korun za tričko.

Napište stránku, která od uživatele obdrží počet kusů, které si chce objednat, a program odpoví celkovou ceny objednávky výpisem 
do stránky.
*/

const pocetTricek = Number(prompt("Zadejte pozadovane mnozstvi tricek, vypocitame vam celkovou cenu objednavky"))


if(pocetTricek < 50) {
    document.body.innerHTML += `Celkova cena vasi objednavky je: ` + (pocetTricek*300) + "Kč" + "<br>"
}    
if(pocetTricek >= 50 && pocetTricek <= 200) {
    document.body.innerHTML += `Celkova cena vasi objednavky je: ` + (pocetTricek*250) + "Kč" + "<br>"
}   
if(pocetTricek > 200 && pocetTricek <= 500) {
    document.body.innerHTML += `Celkova cena vasi objednavky je: ` + (pocetTricek*200) + "Kč" + "<br>"
} 
if(pocetTricek > 500 && pocetTricek <= 1000) {
    document.body.innerHTML += `Celkova cena vasi objednavky je: ` + (pocetTricek*150) + "Kč" + "<br>"
}   
if(pocetTricek > 1000) {
        document.body.innerHTML += `Celkova cena vasi objednavky je: ` + (pocetTricek*120) + "Kč" + "<br>"
}

