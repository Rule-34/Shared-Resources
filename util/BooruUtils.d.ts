type BooruObj = {
  domain: string;
  type: string;
  nsfw: boolean;
  config: any | null;
};

type BooruTypeObj = {
  type: string;
  initialPageID: 0 | 1;
  posts: boolean;
  singlePost: boolean;
  tags: boolean;
  random: boolean;
};

export declare const booruList: BooruObj[];
export declare const booruTypeList: BooruTypeObj[];

/**
 * Filters a booru list to find the expected values
 */
export declare function findBoorusWithValueByKey<T>(
  value: T,
  key?: keyof BooruObj,
  list?: BooruObj[]
): BooruObj[];

/**
 * Removes an Array of boorus from a list
 */
export declare function removeBoorusWithValuesByKey<T>(
  value: T[],
  key?: keyof BooruObj,
  list?: BooruObj[]
): BooruObj[];
