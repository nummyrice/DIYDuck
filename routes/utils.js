const csrf = require('csurf');
const csrfProtection = csrf({cookie: true});
const asyncHandler = require('express-async-handler')


module.exports = {
    csrfProtection,
    asyncHandler
};
