const axios = require('axios');
let service = {};

service.getByCountry = (country) => {
    return axios({
        method: "GET",
        url: "https://covid-193.p.rapidapi.com/statistics",
        headers: {
            "content-type": "application/octet-stream",
            "x-rapidapi-host": "covid-193.p.rapidapi.com",
            "x-rapidapi-key": "236a9a776amshd1ea8e2886a67ecp106ddejsn3eee18912094"
        },
        params: {
            country: country
        }
    });
}

module.exports = service;