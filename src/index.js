/**
 * core/querystring
 * @author ydr.me
 * @create 2016-04-09 16:35
 */



'use strict';

var querystring = require('blear.utils.querystring');


/**
 * 获取当前的 querystring
 * @type {Function}
 * @returns {String}
 */
var toString = exports.toString = function () {
    // 去除“?”
    return location.search.slice(1);
};


/**
 * 解析 querystring
 * @type {Function}
 * @param string {string}
 */
var parse = exports.parse = function () {
    return querystring.parse(toString());
};


/**
 * 根据键名获取 query
 * @param [key] {string} 查询键名
 * @returns {String|Array|object}
 */
exports.get = function (key) {
    var ret = parse();

    if (!key) {
        return ret;
    }

    return ret[key];
};


/**
 * 根据键值设置查询
 * @param key {string} 查询键名
 * @param val {string} 查询键值
 * @returns {String}
 */
var setQuery = exports.set = function (key, val) {
    var query = parse();

    query[key] = val;

    return querystring.stringify(query);
};


/**
 * 根据键值删除
 * @param key {string} 查询键名
 * @returns {String}
 */
exports.remove = function (key) {
    return setQuery(key, null);
};
