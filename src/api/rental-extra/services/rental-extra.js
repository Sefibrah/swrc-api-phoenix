'use strict';

/**
 * rental-extra service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::rental-extra.rental-extra');
