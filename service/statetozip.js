const request = require('request');


const zipCodeURL = 'https://www.zipcodeapi.com/rest/';
const apiKey = process.env.ZIPCODE_API_KEY || "vDCbBzuJawOjWxcEb2kypY6EmcH3OrIqtMoYIuunfPyfBp3ILWwcIlVEyLANHJNS";

const distance = {
    get: (req, res, next) => {
        request(`${zipCodeURL}${apiKey}/state-zips.json/${req.params.state}`,
            (error, response, body) => {
                if (!error && response.statusCode == 200) {
                    response = JSON.parse(body);
                    res.send(response);
                } else {
                    console.log(response.statusCode + response.body);
                    res.send({ state: -1 });
                }
            });
    }
};

module.exports = distance;