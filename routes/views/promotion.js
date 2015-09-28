var keystone = require('keystone');
//var async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	// Init locals
	locals.section = 'promotion';
	locals.filters = {
		promotion: req.params.promotion
	};
	locals.data = {
		promotion: {}
	};

	// Load the current promotion filter
	view.on('init', function(next) {
		keystone.list('Promotion').model.findOne({ _id: locals.filters.promotion }).populate('items').exec(function(err, result) {
			locals.data.promotion = result;
			next(err);
		});
	});
	// Render the view
	view.render('promotion');
};
