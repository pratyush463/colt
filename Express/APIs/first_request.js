//const request = require("request");
const rp = require('request-promise');
rp("https://jsonplaceholder.typicode.com/users/1")
    .then((body) => {
        const parseData = JSON.parse(body);
        console.log("${parseData.name} lives in ${parseData.address.city}");
    })
    .catch((err) => {
        console.log("error", err);
    });


