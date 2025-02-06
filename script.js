let currentTheme = document.querySelector("html").getAttribute("data-theme");

const themeChanger = document.getElementById("theme-container");
const themeIcon = document.querySelector(".theme-icon");

themeChanger.addEventListener("click", () => {
    if (currentTheme === "dark") {
        document.querySelector("html").setAttribute("data-theme", "light");
        themeIcon.setAttribute("src", "static/moon-solid.svg");
        currentTheme = "light";
    } else {
        document.querySelector("html").setAttribute("data-theme", "dark");
        themeIcon.setAttribute("src", "static/sun-solid.svg");
        currentTheme = "dark";
    }
})


