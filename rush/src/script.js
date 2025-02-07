document.addEventListener("DOMContentLoaded", function () {
    let backToTopBtn = document.getElementById("backToTopBtn");

    window.onscroll = function () {
        if (document.documentElement.scrollTop > 200) {
            backToTopBtn.style.opacity = "1";
        } else {
            backToTopBtn.style.opacity = "0";
        }
    };

    backToTopBtn.onclick = function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
});
