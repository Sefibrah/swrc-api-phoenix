'use strict';

/**
 * flight-number controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::flight-number.flight-number');
