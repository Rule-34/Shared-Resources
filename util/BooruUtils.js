// Load boorus from JSON
import booruList from '../booru-list.json';
import booruTypeList from '../booru-type-list.json';

/**
 * Returns an Array of filtered results
 * @param {boolean | string} value Value to compare
 * @param {string} key Key of the object
 * @param {array} list Array to compare results
 */
function findBoorusWithValueByKey(value, key = 'domain', list = booruList) {
  return list.filter((booru) => booru[key] === value);
}

/**
 * Returns an Array of multiple filtered results
 * @param {boolean | string} valueArray Array of values to compare
 * @param {string} key Key of the object
 * @param {array} list Array to compare results
 */
function removeBoorusWithValuesByKey(
  valueArray,
  key = 'domain',
  list = booruList
) {
  return list.filter((booru) => !valueArray.includes(booru[key]));
}

// Exported values
export {
  booruList,
  booruTypeList,
  findBoorusWithValueByKey,
  removeBoorusWithValuesByKey,
};

// Example presets
// const booruListNSFW = findBoorusWithValueByKey(true, 'nsfw')

// Example usage
// console.log(booruListNSFW, booruListNSFW.length)
// console.log(findBoorusWithValueByKey('rule34.xxx', 'domain'))
// console.log(removeBoorusWithValuesByKey(['rule34.xxx', 'rule34.paheal.net'], 'domain', booruListNSFW))
