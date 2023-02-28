'use strict';

/**
 * car-reservation service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-reservation.car-reservation');
