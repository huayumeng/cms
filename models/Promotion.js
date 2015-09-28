var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Promotion Model
 * ==========
 */

var Promotion = new keystone.List('Promotion');

Promotion.add({
	title: { type: String, initial: true, label:'标题', required: true, index: true },
  imageUrl: {type: Types.Url, required: true, label:'顶通地址', initial: true},
	items: { type: Types.Relationship, collapse: true, many: true , label:'商品', ref: 'Item'}
});

/**
 * Registration
 */

Promotion.defaultColumns = 'title, images, items';
Promotion.register();
