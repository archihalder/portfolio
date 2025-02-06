// for mobile screen
// change the pill contents to view only the current section

const sections = document.querySelectorAll("section");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar li");

function updateNavbar() {
    if (window.innerWidth < 600) {
        let currentSection = "";
        let lastVisibleSection = "";

        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();

            // check if section is at least partially visible
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                currentSection = section.getAttribute("data-title");
            }

            // store the last visible section as a fallback
            if (rect.top < window.innerHeight / 2) {
                lastVisibleSection = section.getAttribute("data-title");
            }
        });

        // if no section is clearly visible, use the last seen one
        if (!currentSection) {
            currentSection = lastVisibleSection;
        }

        navLinks.forEach((navLink) => {
            const link = navLink.querySelector("a");
            if (link.textContent === currentSection) {
                navLink.style.display = "block";
            } else {
                navLink.style.display = "none";
            }
        })
    } else {
        navLinks.forEach((navLink) => {
            navLink.style.display = "block";
        })
    }
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", updateNavbar);
updateNavbar();


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
