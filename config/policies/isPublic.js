'use strict';

/**
 * `isPublic` policy.
 */

module.exports = async (ctx, next) => {
  // Add your own logic here.
  if (!ctx.state.user) {
    // Go to next policy or will reach the controller's action.
    return await next();
  }
  await next();
};
