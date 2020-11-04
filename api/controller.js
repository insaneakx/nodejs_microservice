'use strict';

const properties = require('../package.json');
const distance = require('../service/distance');
const statetozip = require('../service/statetozip');

const controllers = {
    home: (req, res) => {
        const info = {
            msg: 'You are on homepage'
        }

        res.json(info);
    },

    about: (req, res) => {
        const aboutInfo = {
            name: properties.name,
            version: properties.version
        }

        res.json(aboutInfo);
    },
    
    getDistance: (req, res) => {
        distance.find(req, res, (err, dist) => {
            if (err) {
                res.send(err);
            }

            res.json(dist);
        });
    },

    getStateToZip: (req, res)  => {
        statetozip.get(req, res, (err, state) => {
            if (err) {
                res.send(err);
            }

            res.json(res);
        });
    }
};

module.exports = controllers;