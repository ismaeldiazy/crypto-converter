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
    
        console.log(coins);
        return {
            coins
        }
    }
}