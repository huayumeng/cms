var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * Item Model
 * ==========
 */

 var ImageLink = new keystone.List('ImageLink',{
   map:{name: 'title'}
 });

 ImageLink.add({
 	title: { type: String, initial: true, label: '描述', required: true },
 	imageUrl: { type: Types.Url, initial: true, label: '图片地址', required: true },
  linkUrl: { type: Types.Url, initial: true, label: '链接地址', required: true },
  alt: {type: String, initial: true, label: '提示信息'}
 });

 ImageLink.defaultColumns = 'title, imageUrl, linkUrl, alt';
 ImageLink.register();
