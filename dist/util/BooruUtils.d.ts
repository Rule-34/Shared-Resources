export declare type BooruObj = {
    domain: string;
    type: string;
    nsfw: boolean;
    config?: Record<string, unknown>;
};
export declare type BooruTypeObj = {
    type: string;
    initialPageID: number;
    posts: boolean;
    singlePost: boolean;
    tags: boolean;
    random: boolean;
};
export declare const defaultBooruList: BooruObj[];
export declare const completeBooruList: BooruObj[];
export declare const booruTypeList: BooruTypeObj[];
export declare function findBoorusWithValueByKey(value: any, key?: keyof BooruObj, list?: BooruObj[]): BooruObj[];
export declare function removeBoorusWithValuesByKey(valueArr: any, key?: keyof BooruObj, list?: BooruObj[]): BooruObj[];
