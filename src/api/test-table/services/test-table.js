'use strict';

/**
 * test-table service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::test-table.test-table');
