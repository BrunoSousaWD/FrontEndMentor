// var drop = document.querySelector("#nav-item");
// var dropMenu = document.querySelector(".drop-content");
// var arrow = document.querySelector(".drop-arrow");

// var dropCompany = document.querySelector("#nav-item-company");
// var dropMenuCompany = document.querySelector(".drop-content-company");
// var arrowCompany = document.querySelector(".drop-arrow-company");

// var dropConnect = document.querySelector("#nav-item-connect");
// var dropMenuConnect = document.querySelector(".drop-content-connect");
// var arrowConnect = document.querySelector(".drop-arrow-connect");



// drop.addEventListener("click", () => {
//     drop.classList.toggle('light-font');
//     dropMenu.classList.toggle('active');
//     arrow.classList.toggle('up-arrow');

// });

// dropCompany.addEventListener("click", () => {

//     dropCompany.classList.toggle('light-font');
//     dropMenuCompany.classList.toggle('active');
//     arrowCompany.classList.toggle('up-arrow');
// });

// dropConnect.addEventListener("click", () => {
//     dropConnect.classList.toggle('light-font');
//     dropMenuConnect.classList.toggle('active');
//     arrowConnect.classList.toggle('up-arrow');
// });

document.querySelectorAll('.dropbtn').forEach(dropDownFunc);

//dropdown open and close

function dropDownFunc(dropDown) {

    if (dropDown.classList.contains('click-menu') === true) {
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.nextElementSibling.classList.contains('active') === true) {
                // Close the clicked dropdown
                this.firstElementChild.classList.remove('up-arrow');
                this.nextElementSibling.classList.remove('active');

            } else {
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.firstElementChild.classList.add('up-arrow');
                this.nextElementSibling.classList.add('active');
            }
        });
    }
};

function closeDropdown() {
    console.log('run');

    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.drop-content').forEach(function (container) {
        container.classList.remove('active');
    });

    document.querySelectorAll('.drop-arrow').forEach(function (menu) {
        menu.classList.remove('up-arrow');
    });
}


/** close menu if click outside**/
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropMenu = document.getElementsByClassName("drop-content");
        var arrow = document.getElementsByClassName("drop-arrow");
        var i;
        for (i = 0; i < dropMenu.length; i++) {
            var openDropdown = dropMenu[i];
            if (openDropdown.classList.contains('active')) {
                openDropdown.classList.remove('active');

            }
        }
        for (k = 0; k < arrow.length; k++) {
            var downArrow = arrow[k];
            if (downArrow.classList.contains('up-arrow')) {
                downArrow.classList.remove('up-arrow');
            }
        }
    }

}






var hamburger = document.querySelector(".hamb");
var navList = document.querySelector(".nav-items");

var isImg1 = true;
var isImg2 = false
hamburger.addEventListener('click', () => {
    navList.classList.toggle('active');
    if (isImg1 == true) {
        hamburger.style.backgroundImage = "url(images/icon-close.svg)";
        isImg1 = false;
        isImg2 = true;
    } else if (isImg2 == true) {
        hamburger.style.backgroundImage = "url(images/icon-hamburger.svg)";
        isImg1 = true;
        isImg2 = false;
    }
})



// var drop = document.querySelectorAll('.dropbtn');
// var dropMenu = document.querySelector('.drop-content');

// drop.forEach(item => {
//     item.addEventListener('click', e => {
//         dropMenu.classList.toggle('active')
//     });
// })