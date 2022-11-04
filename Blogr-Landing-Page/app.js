var drop = document.querySelector("#nav-item");
var dropMenu = document.querySelector(".drop-content");
var arrow = document.querySelector(".drop-arrow");

var dropCompany = document.querySelector("#nav-item-company");
var dropMenuCompany = document.querySelector(".drop-content-company");
var arrowCompany = document.querySelector(".drop-arrow-company");

var dropConnect = document.querySelector("#nav-item-connect");
var dropMenuConnect = document.querySelector(".drop-content-connect");
var arrowConnect = document.querySelector(".drop-arrow-connect");



drop.addEventListener("click", () => {
    dropMenu.classList.toggle('active');
    arrow.classList.toggle('up-arrow');
});

dropCompany.addEventListener("click", () => {
    dropMenuCompany.classList.toggle('active');
    arrowCompany.classList.toggle('up-arrow');
});

dropConnect.addEventListener("click", () => {
    dropMenuConnect.classList.toggle('active');
    arrowConnect.classList.toggle('up-arrow');
});


