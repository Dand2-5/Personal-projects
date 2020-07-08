const navslide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector(".nav-links");
    const navlinks = document.querySelectorAll(".nav-links li");

    burger.onclick = function () {
        // Toggle nav
        nav.classList.toggle("nav-active");
        // Navlinks
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navlinkfade .5s ease forwards ${
                    index / 7 + 0.5
                }s`;
            }
        });
        // Burger animation
        burger.classList.toggle("toggle");
    };
};
navslide();
