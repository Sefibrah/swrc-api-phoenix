'use strict';

/**
 * flight-number service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::flight-number.flight-number');
