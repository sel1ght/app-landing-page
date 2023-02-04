/* NAV */
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction() {
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))



/* Swiper initialization */
var testimonials__swiper = new Swiper(".testimonials__swiper", {
    slidesPerView: "auto",
    centeredSlides: true,
    loop: true,
    spaceBetween: 32,
});

/* FAQ ACCORDION */
let accordion = document.querySelector('.accordion__content');
let header = document.querySelectorAll('.accordion__header');
let item = document.querySelectorAll('.accordion__item');
header.forEach(headers =>
    headers.addEventListener("click", toggleAccordion));

function toggleAccordion() {
    thisItem = this.parentNode;
    item.forEach(items => {
        if (thisItem == items) {
            thisItem.classList.toggle('collapsed');
            return;
        }
        items.classList.remove('collapsed');
    })
}

const sections = document.querySelectorAll("section[id]")

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id")
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)