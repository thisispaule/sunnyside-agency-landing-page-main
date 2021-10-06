const toggle = document.querySelector(".toggle");
const nav = document.querySelector(".navigation");
const creative = document.querySelector(".creative");
const contact = document.querySelector(".contacts");
const arrow = document.querySelector(".arrow");




toggle.addEventListener("click", () =>
{
    toggle.classList.toggle("active");
    nav.classList.toggle("active");
    creative.classList.toggle("active");
    contact.classList.toggle("active");
    arrow.classList.toggle("active");


});
