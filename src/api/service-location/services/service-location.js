'use strict';

/**
 * service-location service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::service-location.service-location');
