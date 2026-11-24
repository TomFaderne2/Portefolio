const liste = document.querySelector("#loisirs");

const loisirs = ["Jeux vidéo", "Programmation", "Football"];
for (const loisir of loisirs) {
    const li = document.createElement("li");
    li.textContent = loisir;
    liste.append(li);
}

function saluer(heure) {
    if (heure  < 12) {
        return "Bonjour";
    } else if (heure < 18) {
        return "Bon après-midi";
    } else {
        return "Bonsoir";
    }
}

const accueil = document.querySelector("#accueil");
accueil.textContent = saluer(10) + ", bienvenue sur mon portfolio.";
accueil.classList.add("accueil");