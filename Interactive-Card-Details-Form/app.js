let cardHolderName = document.getElementById('cardName');
let inpCardName = document.getElementById('ch-name');

let cardHolderNum = document.getElementById('cardNumb');
let inpCardNum = document.getElementById('c-number');
// console.log(cardHolderName);

inpCardName.addEventListener('input', updateCardName);
inpCardName.addEventListener('input', validate);

inpCardNum.addEventListener('input', updateCardNum);
inpCardNum.addEventListener('input', validateNum);

function updateCardName(e) {
    cardHolderName.textContent = e.target.value;
}

function updateCardNum(e) {
    cardHolderNum.textContent = e.target.value;
    console.log(cardHolderNum.textContent[0]);
    console.log(cardHolderNum.textContent[1]);
    console.log(cardHolderNum.textContent[2]);
    console.log(cardHolderNum.textContent[3]);
    console.log(cardHolderNum.textContent[4]);
    console.log(cardHolderNum.textContent[5]);
    console.log(cardHolderNum.textContent[6]);
    console.log(cardHolderNum.textContent[7]);
}




//ERRORs
let errName = document.getElementById('errorName');
let errNum = document.getElementById('errorNum');
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
//verify if numb or space
function validateNum() {
    let num = /^[0-9' ']+$/;

    if (cardHolderNum.textContent.match(num)) {
        errNum.style.display = 'none';
    }
    else {
        errNum.style.display = 'block';
        cardHolderNum.textContent = '';
    }

}


//set max number


//set max num length
document.querySelectorAll('input[type="number"]').forEach(input => {
    input.oninput = () => {
        if (input.value.length > input.maxLength)
            input.value = input.value.slice(0, input.maxLength);
    };
});

