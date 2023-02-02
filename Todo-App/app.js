let darkMode = document.getElementById("dark-switch");
let focused = document.getElementById('focus');





darkMode.addEventListener('click', function () {
    alert('psst');
})



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
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(close);
        todoList.appendChild(li);
        document.getElementById("input-value").value = "";
        addCount();
    }



    //complete
    checkbox.onclick = function () {
        let div = this.parentElement;
        if (div.classList != 'checked') {
            div.classList.add('checked');
            removeCount();
        } else {
            div.classList.remove('checked');
            addCount();
        }

    }

    //clear item
    close.onclick = function () {
        var listItem = this.parentElement;
        listItem.remove();
        removeCount();
    }


}




//missing dark mode

//missing drag and drop