let darkMode = document.getElementById("dark-switch");



darkMode.addEventListener('click', function () {
    alert('psst');
})



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
    for (let i = 0; i < listItem.length; i++)
        listItem[i].remove();

}


function addListItem() {
    let todoList = document.getElementById("todo-list");
    let li = document.createElement('li');
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
    }

    //complete
    checkbox.onclick = function () {
        let div = this.parentElement;
        div.classList.toggle('checked');
    }

    //clear item
    close.onclick = function () {
        var listItem = this.parentElement;
        listItem.style.display = 'none';
    }
}




//missing dark mode
//missing count
// check style on link active
//missing drag and drop