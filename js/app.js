// Instantiate interface class
const ui = new Interface();


// Read form
const form = document.querySelector('#formulario');

// Eventlistener
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Read coin
    const selectCoin = document.querySelector('#moneda');
    const selectedCoin = selectCoin.options[selectCoin.selectedIndex].value;

    // Read crypto coin
    const selectCrypto = document.querySelector('#criptomoneda');
    const selectedCrypto = selectCrypto.options[selectCrypto.selectedIndex].value;
    console.log(selectedCrypto);

    // Check both fields are not empty
    if (selectedCoin === '' || selectedCrypto === '') {
        ui.showMsg('Both fields have to be filled', 'alert bg-danger text-center');
    }else {
        console.log('tot be');
    }

});