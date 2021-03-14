'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity;
        console.log("THe body ",ctx.request.body)
        let technologyStackArray = await strapi.query('technology-stack').find({ name_in: ctx.request.body.technology_stacks ? ctx.request.body.technology_stacks : [] });

        let body = ctx.request.body
        body.technology_stacks = technologyStackArray

        if (ctx.is('multipart')) {
          //const { data, files } = parseMultipartData(ctx);
          //entity = await strapi.services.restaurant.create(data, { files });
        } else {
          entity = await strapi.services["technical-resource"].create(body);
        }
        return entity;
      },
};
