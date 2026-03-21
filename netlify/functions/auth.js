const { createAuthHandler } = require("netlify-cms-auth");

exports.handler = createAuthHandler({
  site_id: "classy-jelly-03b905.netlify.app",
});