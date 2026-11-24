const form = document.querySelector("#form");
const champ = document.querySelector("#msg");
const erreur = document.querySelector("#erreurs");
const compteur = document.querySelector("#compteur");

champ.addEventListener("input", () => {
    const nombre = champ.value.length;

    if (nombre <= 1) {
        compteur.textContent = `${nombre} caractère`;
    } else {
        compteur.textContent = `${nombre} caractères`;
    }
});

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (champ.value.trim().length < 10) {
        erreur.textContent =
            "Le message doit contenir au moins 10 caractères.";
        champ.classList.add("invalide");
    } else {
        erreur.textContent = "";
        champ.classList.remove("invalide");
    }
});
