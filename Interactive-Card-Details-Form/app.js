let cardHolderName = document.getElementById('cardName');
let inpCardName = document.getElementById('ch-name');
let errName = document.getElementById('errorName');


let cardHolderNum = document.getElementById('cardNum');
let inpCardNum = document.getElementById('c-number');
// console.log(cardHolderName);


inpCardName.addEventListener('input', updateCardName);
inpCardName.addEventListener('input', validate);
inpCardNum.addEventListener('input', updateCardNum);


function updateCardName(e) {

    cardHolderName.textContent = e.target.value;
    return cardHolderName.textContent;
}

function updateCardNum(c) {
    cardHolderNum.textContent = c.target.value;
}

function validate() {
    let regEx = /^[A-Za-z]+$/;
    let match = cardHolderName.textContent.match(regEx);

    if (cardHolderName.textContent !== match || cardHolderName.textContent == '') {
        errName.style.display = 'block';
    }
    else if (cardHolderName.textContent == match) {
        errName.style.display = 'none';
    }
}


// function lettersOnlyCheck(name) {
//     var regEx = /^[A-Za-z]+$/;
//     if (name.value.match(regEx)) {
//         return true;
//     }
//     else {
//         alert("Please enter letters only.");
//         return false;
//     }
// }
// function validate() {
//     if (inpCardName.value == "") {
//         errName.style.display = 'block';
//         inpCardName.focus()
//         return false;
//     } else if (!/^[a-zA-Z]*$/g.test(inpCardName.value)) {
//         alert("Invalid characters");
//         inpCardName.focus();
//         return false;
//     }
// }