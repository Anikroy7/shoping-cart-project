// function updateInputValue(button, input,) {
//     debugger;
//     let buttonId = document.getElementById(button);
//     buttonId.addEventListener('click', function () {

//         let inputIdName = document.getElementById(input);
//         let inputValue = parseInt(inputIdName.value);
//         if (buttonId === 'phone-plus') {
//             let updateInputValue = inputValue + 1;
//             inputIdName.value = updateInputValue;

//         }

//     });
// }
// updateInputValue('phone-plus', 'phone-input');
// updateInputValue('case-plus', 'case-input');


function getInputValue(inputId, isAdd, amountId, price) {

    let inputIdName = document.getElementById(inputId);
    let inputValue = parseInt(inputIdName.value);
    if (isAdd == true) {
        inputValue = inputValue + 1;
        inputIdName.value = inputValue;
    }
    else {
        if (inputValue > 0) {

            inputValue = inputValue - 1;
            inputIdName.value = inputValue;
        }

    }

    // update total
    let totalAmount = document.getElementById(amountId);
    let amountValue = inputValue * price;
    totalAmount.innerText = amountValue;

    // update main total
    getMainPrice();
}

let plusButton = document.getElementById('phone-plus');
plusButton.addEventListener('click', function () {
    getInputValue('phone-input', true, 'phone-price', 1219);
});
let minusButton = document.getElementById('phone-minius');
minusButton.addEventListener('click', function () {
    getInputValue('phone-input', false, 'phone-price', 1219);
});

document.getElementById('case-plus').addEventListener('click', function () {
    getInputValue('case-input', true, 'case-price', 59);
});
document.getElementById('case-minius').addEventListener('click', function () {
    getInputValue('case-input', false, 'case-price', 59);
});

function getMainPrice() {
    let phonePrice = parseInt(document.getElementById('phone-price').innerText)
    let casePrice = parseInt(document.getElementById('case-price').innerText)
    let subTotalPrice = phonePrice + casePrice;
    let tax = (subTotalPrice * 20) / 100;
    let mainTotal = subTotalPrice + tax;

    document.getElementById('subtotal').innerText = subTotalPrice;
    document.getElementById('tax').innerText = tax;
    document.getElementById('main-price').innerText = mainTotal;
}

