'use strict';
const { sanitizeEntity } = require('strapi-utils');
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    async create(ctx) {
        let entity;
        console.log("THe body ",ctx.request.body)
        let sdgCategoryArray = await strapi.query('sdg-category').find({ name_in: ctx.request.body.sdg_categories ? ctx.request.body.sdg_categories : [] });
        let projectCategoryArray = await strapi.query('project-category').find({ name_in: ctx.request.body.project_categories ? ctx.request.body.project_categories : [] })

        let body = ctx.request.body
        body.sdg_categories = sdgCategoryArray
        body.project_categories = projectCategoryArray

        if (ctx.is('multipart')) {
          //const { data, files } = parseMultipartData(ctx);
          //entity = await strapi.services.restaurant.create(data, { files });
        } else {
          entity = await strapi.services.project.create(body);
        }
        return entity;
        
      },

    async getTechnicalResources(ctx){
        let projectId = ctx.params.id
        let project = await strapi.services.project.findOne({id: projectId});
        let projectTechnologyStackArray = [] 
        project.technology_stacks.forEach(stack => {
            return projectTechnologyStackArray.push(stack.id);
        });
        console.log(projectTechnologyStackArray)
        let technicalResourceArray = await strapi.query('technical-resource').find({ technology_stacks_in: projectTechnologyStackArray ? projectTechnologyStackArray : [] });
        
        return technicalResourceArray.map(entity => sanitizeEntity(entity, { model: strapi.models["technical-resource"] }));
    }
};
