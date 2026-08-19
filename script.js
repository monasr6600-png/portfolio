console.log("Mohamed Omar Portfolio Loaded Successfully!");

const links = document.querySelectorAll("nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        console.log("Navigation:", link.textContent);
    });
});
