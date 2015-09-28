var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HomePage Model
 * ==========
 */

var HomePage = new keystone.List('HomePage',{map:{name:'title'}});

HomePage.add({
	title: { type: String, initial: true, label:'标题', required: true, index: true },
  imageUrl: {type: Types.Url, label:'顶通地址', initial: true},
  carousel: {type: Types.Relationship, collapse: true, many: true, label:'轮播图', ref: 'ImageLink'},
  ads: {type: Types.Relationship, collapse: true, many: true, label:'广告图', ref: 'ImageLink'},
  stores: {type: Types.Relationship, collapse: true, many: true, label:'热门店铺', ref: 'ImageLink'},
	items: { type: Types.Relationship, collapse: true, many: true , label:'新品上市', ref: 'Item'}
});

/**
 * Registration
 */

//HomePage.defaultColumns = 'title, imageUrl , items';
HomePage.register();
