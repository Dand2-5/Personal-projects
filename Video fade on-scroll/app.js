var videofade = () => {
    var video = document.getElementById("vid");
    document.addEventListener("scroll", function () {
        var value = scrollY;
        video.style.opacity = 1 + value / -600;
    });
};
videofade();
