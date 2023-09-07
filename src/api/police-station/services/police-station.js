'use strict';

/**
 * police-station service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::police-station.police-station');
