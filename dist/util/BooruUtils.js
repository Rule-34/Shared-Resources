"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBoorusWithValuesByKey = exports.findBoorusWithValueByKey = exports.booruTypeList = exports.completeBooruList = exports.defaultBooruList = void 0;
const _defaultBooruList = require("../default-booru-list.json");
const _supportedBooruList = require("../supported-booru-list.json");
const _booruTypeList = require("../booru-type-list.json");
exports.defaultBooruList = _defaultBooruList;
exports.completeBooruList = _supportedBooruList;
exports.booruTypeList = _booruTypeList;
function findBoorusWithValueByKey(value, key = 'domain', list = exports.defaultBooruList) {
    return list.filter((booru) => booru[key] === value);
}
exports.findBoorusWithValueByKey = findBoorusWithValueByKey;
function removeBoorusWithValuesByKey(valueArr, key = 'domain', list = exports.defaultBooruList) {
    return list.filter((booru) => !valueArr.includes(booru[key]));
}
exports.removeBoorusWithValuesByKey = removeBoorusWithValuesByKey;
