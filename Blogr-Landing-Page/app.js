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


