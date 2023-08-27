'use strict';

/**
 * address-of-stay service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::address-of-stay.address-of-stay');
