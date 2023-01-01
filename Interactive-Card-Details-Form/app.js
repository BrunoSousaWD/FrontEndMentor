let cardHolderName = document.getElementById('cardName');
let inpCardName = document.getElementById('ch-name');

let cardHolderNum = document.getElementById('cardNumb');
let inpCardNum = document.getElementById('c-number');
// console.log(cardHolderName);

inpCardName.addEventListener('input', updateCardName);
inpCardName.addEventListener('input', validate);

inpCardNum.addEventListener('input', updateCardNum);


function updateCardName(e) {
    cardHolderName.textContent = e.target.value;
}

function updateCardNum(e) {
    cardHolderNum.textContent = e.target.value;
}




let errName = document.getElementById('errorName');
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




//set max num length
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if (input.value.length > input.maxLength)
            input.value = input.value.slice(0, input.maxLength);
    };
});

