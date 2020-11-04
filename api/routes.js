'use strict';

const controller = require('./controller');

module.exports = (app) => {
    app.route('/')
        .get(controller.home);
    app.route('/about')
        .get(controller.about);
    app.route('/distance/:zipcode1/:zipcode2')
        .get(controller.getDistance);
    app.route('/statetozip/:state')
        .get(controller.getStateToZip);
};