'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity;
        let sdgCategoryArray = await strapi.query('sdg-category').find({ name_in: ctx.request.body.sdg_categories });
        let projectCategoryArray = await strapi.query('project-category').find({ name_in: ctx.request.body.project_categories })

        let body = ctx.request.body
        body.sdg_categories = sdgCategoryArray
        body.project_categories = projectCategoryArray

        if (ctx.is('multipart')) {
          //const { data, files } = parseMultipartData(ctx);
          //entity = await strapi.services.restaurant.create(data, { files });
        } else {
          entity = await strapi.services.project.create(body);
        }
        return sanitizeEntity(entity, { model: strapi.models.project });
      },
};
