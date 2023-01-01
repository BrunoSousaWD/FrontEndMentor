let cardHolderName = document.getElementById('cardName');
let inpCardName = document.getElementById('ch-name');

let cardHolderNum = document.getElementById('cardNumb');
let inpCardNum = document.getElementById('c-number');
// console.log(cardHolderName);

let errName = document.getElementById('errorName');

inpCardName.addEventListener('input', updateCardName);
inpCardName.addEventListener('input', validate);

inpCardNum.addEventListener('input', updateCardNum);


function updateCardName(e) {
    cardHolderName.textContent = e.target.value;
}

function updateCardNum(e) {
    chn = cardHolderNum.textContent;
    chn = e.target.value;

}

//verify if is letter
function validate() {
    let regEx = /^[A-Za-z' ']+$/;

    if (cardHolderName.textContent.match(regEx)) {
        errName.style.display = 'none';
    }
    else {
        errName.style.display = 'block';
        cardHolderName.textContent = '';
    }
}


