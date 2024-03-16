'use strict';

/**
 * mileage service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::mileage.mileage');
