import * as _defaultBooruList from '../default-booru-list.json'
import * as _supportedBooruList from '../supported-booru-list.json'
import * as _booruTypeList from '../booru-type-list.json'

export const defaultBooruList = _defaultBooruList
export const completeBooruList = _supportedBooruList

export const booruTypeList = _booruTypeList

export function findBoorusWithValueByKey(
  value,
  key = 'domain',
  list = defaultBooruList
) {
  return list.filter((booru) => booru[key] === value)
}

export function removeBoorusWithValuesByKey(
  valueArr,
  key = 'domain',
  list = defaultBooruList
) {
  return list.filter((booru) => !valueArr.includes(booru[key]))
}

/* --- Example presets --- */
// const booruListNSFW = findBoorusWithValueByKey(true, 'nsfw')

/* --- Example usage --- */
// console.log(booruListNSFW, booruListNSFW.length)
// console.log(findBoorusWithValueByKey('rule34.xxx', 'domain'))
// console.log(removeBoorusWithValuesByKey(['rule34.xxx', 'rule34.paheal.net'], 'domain', booruListNSFW))
