'use strict';

var contentful = require('contentful-management'),
	util = require('util'),
	formidable = require('formidable'),
	config = require('../config/config');

var client = contentful.createClient({
  accessToken: 'c36fac3c00573d99b232e58af3f31214a4ce068cb334950794e3382050cf743c',
  secure: true
});
var log = console.log.bind(console);
var space = 'c0jrauxvndyp';

exports.create = function(req, res) {
	var form = new formidable.IncomingForm();
	form.uploadDir = config.root + "/app/user/assets";
	form.hash = 'md5';
	form.parse(req, function(err, fields, files) {
		var path = require('path');
		var filepath = files.file.path.replace(form.uploadDir, '');
		var t = 'http://' + req.headers.host + '/user/assets' + filepath;
		res.json( {url: t, file: files.file});
	});
};
