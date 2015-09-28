var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Item Model
 * ==========
 */

 var Item = new keystone.List('Item',{
   map:{name: 'title'}
 });

 Item.add({
 	title: { type: String, initial: true, label: '商品描述', required: true },
 	imageUrl: { type: Types.Url, initial: true, label: '图片地址', required: true },
  linkUrl: { type: Types.Url, initial: true, label: '购买链接', required: true },
 	price: { type: Types.Money, initial: true, label:'现价', currency: 'chs', required: true },
  unitPrice: { type: Types.Money, label: '原价', initial: true, currency: 'chs'  }
 });

 Item.defaultColumns = 'title, imageUrl, linkUrl, price, unitPrice';
 Item.register();
