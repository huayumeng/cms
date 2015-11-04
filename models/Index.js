var keystone = require('keystone');
var Types = keystone.Field.Types;

/**
 * HomePage Model
 * ==========
 */

var Index = new keystone.List('Index',{map:{name:'title'}});

Index.add({
    key: {type: String, initial: true, label: '主健'},
    title: { type: String, initial: true, label:'标题', required: true, index: true },
    //imageUrl: {type: Types.Url, label:'顶通地址', initial: true},
    carousel: {type: Types.CloudinaryImages, collapse: true,  label:'轮播图'},
    ads: {type: Types.Relationship, collapse: true, many: true, label:'广告图', ref: "ImagewithLink" },
    stores: {type: Types.Relationship, collapse: true, many:true, label:'热门店铺', ref: 'ImagewithLink'},
    items: { type: Types.Relationship, collapse: true, many: true , label:'新品上市', ref: 'Item'}
});

/**
 * Registration
 */

//HomePage.defaultColumns = 'title, imageUrl , items';
Index.register();
