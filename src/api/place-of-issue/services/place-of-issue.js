'use strict';

/**
 * place-of-issue service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::place-of-issue.place-of-issue');
