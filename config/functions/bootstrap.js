'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/developer-docs/latest/setup-deployment-guides/configurations.html#bootstrap
 */


module.exports = async () => {
    let technologyStackArray = await strapi.query('technology-stack').find();
    if(technologyStackArray.length == 0){
        strapi.services["technology-stack"].create({name:"NodeJs"})
        strapi.services["technology-stack"].create({name:"Python"})
        strapi.services["technology-stack"].create({name:"HTML / CSS / Javascript"})
        strapi.services["technology-stack"].create({name:"Ruby on Rails"})
    }

    let projectCategoryArray = await strapi.query('project-category').find();
    if(projectCategoryArray.length == 0){
        strapi.services['project-category'].create({name:"Open AI Model"})
        strapi.services['project-category'].create({name:"Open Content"})
        strapi.services['project-category'].create({name:"Open Source Software"})
        strapi.services['project-category'].create({name:"Open Standard"})
    }

    let sdgCategoryArray = await strapi.query('sdg-category').find();
    if(projectCategoryArray.length == 0){
        strapi.services['sdg-category'].create({name:"1: End Poverty in all its forms everywhere"})
        strapi.services['sdg-category'].create({name:"2: Zero Hunger"})
        strapi.services['sdg-category'].create({name:"3: Good Health and Well-Being"})
        strapi.services['sdg-category'].create({name:"4: Quality Education"})
        strapi.services['sdg-category'].create({name:"5: Gender Equity"})
        strapi.services['sdg-category'].create({name:"6: Clean Water and Sanitation"})
        strapi.services['sdg-category'].create({name:"7: Affordable and Clean Energy"})
        strapi.services['sdg-category'].create({name:"8: Decent Work and Economic Growth"})
        strapi.services['sdg-category'].create({name:"9: Industry, Innovation and Infrastructure"})
        strapi.services['sdg-category'].create({name:"10: Reduced Inequalities"})
        strapi.services['sdg-category'].create({name:"11: Sustainable Cities and Communities"})
        strapi.services['sdg-category'].create({name:"12: Responsible Consumption and Production"})
        strapi.services['sdg-category'].create({name:"13: Climate Action"})
        strapi.services['sdg-category'].create({name:"14: Life Below Water"})
        strapi.services['sdg-category'].create({name:"15: Life on Land"})
        strapi.services['sdg-category'].create({name:"16: Peace, Justice and Strong Institutions"})
        strapi.services['sdg-category'].create({name:"17: Partnerships for the Goals"})
    }
}
