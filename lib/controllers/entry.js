'use strict';

var contentful = require('contentful-management');
var client = contentful.createClient({
  accessToken: 'c36fac3c00573d99b232e58af3f31214a4ce068cb334950794e3382050cf743c',
  secure: true
});
var log = console.log.bind(console);
var space = 'c0jrauxvndyp';


// API Methods
exports.getEntrys = function(req, res) {	
	client.getSpace(space).then(function(space) {
		return space.getEntries({'content_type': '7AcgzdhB1SKW00SAYEaw4m'});
	}).then(function(entries) {
		res.json(entries);
	});
};


exports.createAsset = function(req, res) {	
	var ewjj = 1;
	return 1;
	//var newAsset =  Asset.parse(client, o);
};
