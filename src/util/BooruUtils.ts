import _defaultBooruList from '../default-booru-list.json'
import _supportedBooruList from '../supported-booru-list.json'
import _booruTypeList from '../booru-type-list.json'

export type BooruObj = {
  domain: string
  type: string
  nsfw: boolean
  config: Record<string, unknown> | null
}

export type BooruTypeObj = {
  type: string
  initialPageID: number
  posts: boolean
  singlePost: boolean
  tags: boolean
  random: boolean
}

export const defaultBooruList: BooruObj[] = _defaultBooruList
export const completeBooruList: BooruObj[] = _supportedBooruList

export const booruTypeList: BooruTypeObj[] = _booruTypeList

export function findBoorusWithValueByKey(
  value: any,
  key: keyof BooruObj = 'domain',
  list: BooruObj[] = defaultBooruList,
): BooruObj[] {
  return list.filter((booru) => booru[key] === value)
}

export function removeBoorusWithValuesByKey(
  valueArr: any,
  key: keyof BooruObj = 'domain',
  list: BooruObj[] = defaultBooruList,
): BooruObj[] {
  return list.filter((booru) => !valueArr.includes(booru[key]))
}

/* --- Example presets --- */
// const booruListNSFW = findBoorusWithValueByKey(true, 'nsfw')

/* --- Example usage --- */
// console.log(booruListNSFW, booruListNSFW.length)
// console.log(findBoorusWithValueByKey('rule34.xxx', 'domain'))
// console.log(removeBoorusWithValuesByKey(['rule34.xxx', 'rule34.paheal.net'], 'domain', booruListNSFW))
