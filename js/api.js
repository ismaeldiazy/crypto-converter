class API {
    constructor(apikey) {
        this.apikey = apikey;
    }
    // Get all the crypto coins
    async getApiCryptoCoins() {
        const url = `https://min-api.cryptocompare.com/data/all/coinlist?api_key=${this.apikey}`;

        // Fetch to API
        const getCoinsUrl =  await fetch(url);

        // Json response
        const coins = await getCoinsUrl.json();
    
        return {
            coins
        }
    }

    async getValues(coin, crytpoCoin) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crytpoCoin}&tsyms=${coin}&api_key=${this.apikey}`;

        // Consult REST API
        const urlConvert = await fetch(url);
        // API response into json
        const response = await urlConvert.json();

        return {
            response
        }
    }
}