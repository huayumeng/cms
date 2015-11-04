var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * ImagewithLink Model
 * ==========
 */

var ImagewithLink = new keystone.List('ImagewithLink',{map:{name:'title'}});

ImagewithLink.add({
    title: {type: String, label: '标题'},
    image: {type: Types.CloudinaryImage, label:'图片'},
    link: {type: Types.Url, collapse: true,  label:'链接地址'},
    alt: {type: String, collapse: true, label:'提示信息' },
    author: { type: Types.Relationship, collapse: true , label:'作者', ref: 'User'}
});

/**
 * Registration
 */

ImagewithLink.register();
