// Show and Hide The Menu:
document.querySelector(".menu-icon").onclick = function() {
    const list = document.getElementById("links-menu");
    if (list.style.display !== "none") {
        list.style.display = "none";
    }
    else {
        list.style.display = "block";
    };
};

// Scrolling:
function smoothScroll(event) {
    event.preventDefault();
    const target_id = event.currentTarget.getAttribute("href");
    window.scrollTo({
        top: target_id === "#home" ? 0 : document.querySelector(target_id).offsetTop,
        behavior: "smooth"
    });
};

var header_links = document.querySelectorAll("header a");
header_links.forEach( elem => elem.addEventListener("click", linkClick));
function linkClick(event) {
    smoothScroll(event);
};

// Scroll To Top Button
var scroll_to_top = document.querySelector(".scroll-to-top");
window.onscroll = function() {
    this.scrollY >= 620 ? scroll_to_top.classList.add("show") : scroll_to_top.classList.remove("show");
};
scroll_to_top.onclick = function (event) {
    smoothScroll(event)
};