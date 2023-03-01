let bookmarking = document.getElementById('bookmarking');
let bookmarkTab = document.getElementById('bookmark-tab');

let searching = document.getElementById('searching');
let searchTab = document.getElementById('search-tab');

let sharing = document.getElementById('sharing');
let shareTab = document.getElementById('share-tab');

bookmarking.addEventListener('click', () => {
    bookmarking.classList.add('active');
    bookmarkTab.style.display = 'flex';
    if (screen.width < 500) {
        bookmarkTab.style.display = 'block';
    }
    searching.classList.remove('active');
    searchTab.style.display = 'none';

    sharing.classList.remove('active');
    shareTab.style.display = 'none';

});

searching.addEventListener('click', () => {
    searching.classList.add('active');
    searchTab.style.display = 'flex';
    if (screen.width < 500) {
        searchTab.style.display = 'block';
    }
    bookmarking.classList.remove('active');
    bookmarkTab.style.display = 'none';

    sharing.classList.remove('active');
    shareTab.style.display = 'none';
});


sharing.addEventListener('click', () => {
    sharing.classList.add('active');
    shareTab.style.display = 'flex';
    if (screen.width < 500) {
        shareTab.style.display = 'block';
    }
    searching.classList.remove('active');
    searchTab.style.display = 'none';

    bookmarking.classList.remove('active');
    bookmarkTab.style.display = 'none';
});



// Questions

const question = document.querySelectorAll('.question');

question.forEach(quest => {
    quest.addEventListener('click', () => {
        let answer = quest.nextElementSibling;
        if (answer.style.display === 'block') {
            answer.style.display = 'none'
            quest.lastElementChild.classList.remove('close')
            if (quest.getAttribute('id') === 'question-four') {
                quest.classList.add('bd-b');
            }
        } else {
            answer.style.display = 'block'
            quest.lastElementChild.classList.add('close')
            if (quest.getAttribute('id') === 'question-four') {
                quest.classList.remove('bd-b');
            }
        }

    })
});


//  Email-form

function validateEmail(emailInput) {
    // event.preventDefault();
    let mailFormat = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if (emailInput.value.match(mailFormat)) {
        emailInput.value = '';
        document.getElementById('error').style.display = 'none';
        document.getElementById('error-icon').style.display = 'none';
    } else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('error-icon').style.display = 'block';
        return false;
    }

}
