'use strict';

var api = require('./controllers/api'),
    index = require('./controllers'),
    asset = require('./controllers/asset'),
    entry = require('./controllers/entry');

/**
 * Application routes
 */
module.exports = function(app) {

  // Server API Routes
  app.route('/api/awesomeThings')
    .get(api.awesomeThings);
  

  // Project API
  app.route('/api/entries/all')
		.get(entry.getEntrys);
  app.route('/api/asset')
		.post(asset.create);

  // All undefined api routes should return a 404
  app.route('/api/*')
    .get(function(req, res) {
      res.send(404);
    });

  // All other routes to use Angular routing in app/scripts/app.js
  app.route('/partials/*')
    .get(index.partials);
  app.route('/*')
    .get( index.index);
};
