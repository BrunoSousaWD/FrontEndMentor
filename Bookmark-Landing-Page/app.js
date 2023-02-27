let bookmarking = document.getElementById('bookmarking');
let bookmarkTab = document.getElementById('bookmark-tab');

let searching = document.getElementById('searching');
let searchTab = document.getElementById('search-tab');

let sharing = document.getElementById('sharing');
let shareTab = document.getElementById('share-tab');

bookmarking.addEventListener('click', () => {
    bookmarking.classList.add('active');
    bookmarkTab.style.display = 'flex';

    searching.classList.remove('active');
    searchTab.style.display = 'none';

    sharing.classList.remove('active');
    shareTab.style.display = 'none';
});

searching.addEventListener('click', () => {
    searching.classList.add('active');
    searchTab.style.display = 'flex';

    bookmarking.classList.remove('active');
    bookmarkTab.style.display = 'none';

    sharing.classList.remove('active');
    shareTab.style.display = 'none';
});


sharing.addEventListener('click', () => {
    sharing.classList.add('active');
    shareTab.style.display = 'flex';

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
        } else {
            answer.style.display = 'block'
        }
    })
});