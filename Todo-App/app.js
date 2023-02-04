let darkMode = document.getElementById("dark-switch");
let lightMode = document.getElementById("light-switch");
let focused = document.getElementById('focus');




// switch active links
let active = document.getElementById('nav');
if (active) {
    let linkItem = document.querySelectorAll('a');
    for (let i = 0; i < linkItem.length; i++) {
        linkItem[i].addEventListener('click', function () {
            if (!this.classList.contains('selected')) {
                if (linkItem) {
                    for (i = 0; i < linkItem.length; i++) {
                        linkItem[i].classList.remove('selected');
                    }
                }
                this.classList.toggle('selected');
            }
        })
    }
}


//show All
function showAll() {
    let listItem = document.querySelectorAll('li');
    for (let i = 0; i < listItem.length; i++)
        listItem[i].style.display = 'grid';
}

//show Active
function showActive() {
    let listItem = document.querySelectorAll('li');
    for (let i = 0; i < listItem.length; i++)
        if (listItem[i].classList.contains('checked')) {
            listItem[i].style.display = 'none';
        } else {
            listItem[i].style.display = 'grid';
        }
}

//show completed
function showComplete() {
    let listItem = document.querySelectorAll('li');
    for (let i = 0; i < listItem.length; i++)
        if (listItem[i].classList.contains('checked')) {
            listItem[i].style.display = 'grid';
        } else {
            listItem[i].style.display = 'none';
        }
}


//clear completed
function clearCompleted() {
    let listItem = document.querySelectorAll('.checked');
    for (let i = 0; i < listItem.length; i++) {
        listItem[i].remove();
    }
}

//add count
let count = 0;
function addCount() {
    count += 1;

    document.getElementById('items-count').innerHTML = count;
}
//remove count
function removeCount() {
    count -= 1;
    document.getElementById('items-count').innerHTML = count;
}

//append to list
function addListItem() {
    let todoList = document.getElementById("todo-list");
    let li = document.createElement('li');
    li.setAttribute('draggable', true);

    let inputValue = document.getElementById('input-value').value;
    let text = document.createTextNode(inputValue);

    //set checkbox
    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');

    // set close div
    let close = document.createElement('div');
    let img = document.createElement('img');
    img.setAttribute("src", "images/icon-cross.svg");
    close.appendChild(img);

    // add item
    if (inputValue === '') {
        let error = document.getElementById('error')
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
        if (document.body.classList == 'darkmode') {
            li.classList.add('darkmode');
        }
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(close);
        todoList.appendChild(li);
        document.getElementById("input-value").value = "";
        addCount();
    }

    //complete
    checkbox.addEventListener('click', function () {
        let div = this.parentElement;

        if (!div.classList.contains('checked')) {
            div.classList.add('checked');
            removeCount();

        } else {
            div.classList.remove('checked');
            addCount();
        }
    })

    //clear item
    close.onclick = function () {
        var listItem = this.parentElement;
        listItem.remove();
        removeCount();
    }
}



darkMode.addEventListener('click', function () {
    document.body.classList.add('darkmode');
    document.getElementById('light-bg').style.display = 'none';
    document.getElementById('dark-bg').style.display = 'block';
    document.getElementById('dark-switch').style.display = 'none';
    document.getElementById('light-switch').style.display = 'block';

    document.getElementById('todo-input').classList.add('darkmode');
    document.getElementById('add-input').classList.add('darkmode');

    let li = document.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++) {
        li[i].classList.add('darkmode');
    }

    document.querySelector('footer').classList.add('darkmode');
})


lightMode.addEventListener('click', function () {
    document.body.classList.remove('darkmode');
    document.getElementById('light-bg').style.display = 'block';
    document.getElementById('dark-bg').style.display = 'none';
    document.getElementById('dark-switch').style.display = 'block';
    document.getElementById('light-switch').style.display = 'none';

    document.getElementById('todo-input').classList.remove('darkmode');
    document.getElementById('add-input').classList.remove('darkmode');

    let li = document.getElementsByTagName("li");
    for (let i = 0; i < li.length; i++)
        li[i].classList.remove('darkmode');

    document.querySelector('footer').classList.remove('darkmode');
})



//missing drag and drop