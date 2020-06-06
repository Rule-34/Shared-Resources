import booruList from '../booru-list.json';
import booruCompleteList from '../booru-complete-list.json';
import booruTypeList from '../booru-type-list.json';

function findBoorusWithValueByKey(
  value,
  key = 'domain',
  list = booruCompleteList
) {
  return list.filter((booru) => booru[key] === value);
}

function removeBoorusWithValuesByKey(
  valueArr,
  key = 'domain',
  list = booruCompleteList
) {
  return list.filter((booru) => !valueArr.includes(booru[key]));
}

/* --- Example presets --- */
// const booruListNSFW = findBoorusWithValueByKey(true, 'nsfw')

/* --- Example usage --- */
// console.log(booruListNSFW, booruListNSFW.length)
// console.log(findBoorusWithValueByKey('rule34.xxx', 'domain'))
// console.log(removeBoorusWithValuesByKey(['rule34.xxx', 'rule34.paheal.net'], 'domain', booruListNSFW))

export {
  booruList,
  booruCompleteList,
  booruTypeList,
  findBoorusWithValueByKey,
  removeBoorusWithValuesByKey,
};
