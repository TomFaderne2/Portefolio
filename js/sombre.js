const theme = document.querySelector("#theme");
theme.addEventListener("click", () => {
    document.body.classList.toggle("sombre");
    if (document.body.classList.contains("sombre")) {
        theme.textContent = "Mode clair";
    } else {
        theme.textContent = "Mode sombre";
    }
});