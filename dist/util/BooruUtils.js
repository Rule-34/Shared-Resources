"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeBoorusWithValuesByKey = exports.findBoorusWithValueByKey = exports.booruTypeList = exports.completeBooruList = exports.defaultBooruList = void 0;
const default_booru_list_json_1 = __importDefault(require("../default-booru-list.json"));
const supported_booru_list_json_1 = __importDefault(require("../supported-booru-list.json"));
const booru_type_list_json_1 = __importDefault(require("../booru-type-list.json"));
exports.defaultBooruList = default_booru_list_json_1.default;
exports.completeBooruList = supported_booru_list_json_1.default;
exports.booruTypeList = booru_type_list_json_1.default;
function findBoorusWithValueByKey(value, key = 'domain', list = exports.defaultBooruList) {
    return list.filter((booru) => booru[key] === value);
}
exports.findBoorusWithValueByKey = findBoorusWithValueByKey;
function removeBoorusWithValuesByKey(valueArr, key = 'domain', list = exports.defaultBooruList) {
    return list.filter((booru) => !valueArr.includes(booru[key]));
}
exports.removeBoorusWithValuesByKey = removeBoorusWithValuesByKey;
/* --- Example presets --- */
// const booruListNSFW = findBoorusWithValueByKey(true, 'nsfw')
/* --- Example usage --- */
// console.log(booruListNSFW, booruListNSFW.length)
// console.log(findBoorusWithValueByKey('rule34.xxx', 'domain'))
// console.log(removeBoorusWithValuesByKey(['rule34.xxx', 'rule34.paheal.net'], 'domain', booruListNSFW))
