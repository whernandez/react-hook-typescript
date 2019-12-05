// /**
//  * Async Types
//  * @type {{PENDING: string, SUCCESS: string, ERROR: string}}
//  */
// export enum helperTypes {
//     PROCESSING = 'PROCESSING',
//     SUCCESS = 'SUCCESS',
//     ERROR = 'ERROR',
//     REDIRECT = 'REDIRECT',
//     WATCHER = 'WATCHER',
// }

interface Object {
    PROCESSING: 'PROCESSING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    REDIRECT: 'REDIRECT',
    WATCHER: 'WATCHER',
}

/**
 * Async Types
 * @type {{PENDING: string, SUCCESS: string, ERROR: string}}
 */
export const helperTypes : Object = {
    PROCESSING: 'PROCESSING',
    SUCCESS: 'SUCCESS',
    ERROR: 'ERROR',
    REDIRECT: 'REDIRECT',
    WATCHER: 'WATCHER',
};

/**
 * Create all types app
 * @param typeString
 * @return {any}
 */
export const createTypes = (typeString : string) : Object => {
    return Object.values(helperTypes).reduce((accumulator : any, currentValue : any) => {
        accumulator[currentValue] = `${typeString}_${currentValue}`;
        return accumulator
    }, {});
};


