'use strict';

/**
 * type-of-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::type-of-service.type-of-service');
