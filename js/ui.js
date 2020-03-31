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
    
    // Print the result of the conversion
    printResult(response, coin, crypto) {

        // In case there's a previous result
        const previousResult = document.querySelector('#resultado > div');

        if (previousResult) {
            previousResult.remove();
        }
        
        const coinData = response[crypto][coin];
        console.log(coinData);

        // // Reduce decimal numbers to 2 digits
        let price = coinData.PRICE.toFixed(2),
            percentage = coinData.CHANGEPCTDAY.toFixed(2),
            // Format UNIX timestamp to date
            updateDate = new Date(coinData.LASTUPDATE * 1000).toLocaleDateString('es-ES');
        // Create template
        let templateHTML = `
            <div class="card bg-success">
                <div class="card-body text-light">
                    <h2 class="card-title">Result:</h2>
                    <p>The value of 1 ${coinData.FROMSYMBOL} converted to ${coinData.TOSYMBOL} is ${price} </p>
                    <p>Last day variation: ${percentage}</p>
                    <p>Last update: ${updateDate}</p>
                </div>
            </div>
        `
        this.displayHideSpinner('block');
        // Simulate loading time (3s) to show the spinner
        setTimeout(() => {
            document.querySelector('#resultado').innerHTML = templateHTML;
            this.displayHideSpinner('none');
        }, 3000);
    }

    // Display spinner
    displayHideSpinner(view) {
        const spinner = document.querySelector('.contenido-spinner');
        spinner.style.display = view;
    }

}
