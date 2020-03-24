class Interface {

    constructor() {
        this.init();
    }
    init() {
        this.createSelect();
    }

    createSelect() {
        converter.getApiCryptoCoins()
            .then(coins => {
                // Create select options dynamically
                const select = document.querySelector('#criptomoneda');
                for( const [key, value] of Object.entries(coins.coins.Data)) {
                    // Create option
                    const option = document.createElement('option');
                    // Give Symbol value to the option
                    option.value = value.Symbol;
                    // Give CoinName as text content
                    option.appendChild(document.createTextNode(value.CoinName));
                    // Add option to the select
                    select.appendChild(option);
                }
            })
    }

    showMsg(msg, classes) {
        const div = document.createElement('div');
        div.className = classes;
        div.appendChild(document.createTextNode(msg));

        // Add msg to the div
        const msgDiv = document.querySelector('.mensajes');
        msgDiv.appendChild(div);
        
        // time out for the alert
        setTimeout( () => {
            document.querySelector('.mensajes div').remove();
        }, 3000);
    }   
}
