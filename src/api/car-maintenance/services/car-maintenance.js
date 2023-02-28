'use strict';

/**
 * car-maintenance service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::car-maintenance.car-maintenance');
