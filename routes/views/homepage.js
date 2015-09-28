var keystone = require('keystone');
//var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'homepage';
	locals.filters = {
		id: req.params.id
	};
	locals.data = {
		homepage: {}
	};

	// Load the current homepage filter
	view.on('init', function(next) {
		keystone.list('HomePage').model.findOne({ _id: locals.filters.id }).populate('items carousel ads stores').exec(function(err, result) {
			locals.data.homepage = result;
			next(err);
		});
	});
	// Render the view
	view.render('homepage');
};
