/* tslint:disable */
/* eslint-disable */
/**
 * COTATO 프로젝트 API 명세서
 * api 명세서
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { CotatoMultipleQuizResponse } from './CotatoMultipleQuizResponse.js';
import {
    CotatoMultipleQuizResponseFromJSON,
    CotatoMultipleQuizResponseFromJSONTyped,
    CotatoMultipleQuizResponseToJSON,
} from './CotatoMultipleQuizResponse.js';
import type { CotatoShortQuizResponse } from './CotatoShortQuizResponse.js';
import {
    CotatoShortQuizResponseFromJSON,
    CotatoShortQuizResponseFromJSONTyped,
    CotatoShortQuizResponseToJSON,
} from './CotatoShortQuizResponse.js';

/**
 * 
 * @export
 * @interface CotatoAllQuizzesResponse
 */
export interface CotatoAllQuizzesResponse {
    /**
     * 
     * @type {Array<CotatoMultipleQuizResponse>}
     * @memberof CotatoAllQuizzesResponse
     */
    multiples?: Array<CotatoMultipleQuizResponse>;
    /**
     * 
     * @type {Array<CotatoShortQuizResponse>}
     * @memberof CotatoAllQuizzesResponse
     */
    shortQuizzes?: Array<CotatoShortQuizResponse>;
}

/**
 * Check if a given object implements the CotatoAllQuizzesResponse interface.
 */
export function instanceOfCotatoAllQuizzesResponse(value: object): value is CotatoAllQuizzesResponse {
    return true;
}

export function CotatoAllQuizzesResponseFromJSON(json: any): CotatoAllQuizzesResponse {
    return CotatoAllQuizzesResponseFromJSONTyped(json, false);
}

export function CotatoAllQuizzesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAllQuizzesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'multiples': json['multiples'] == null ? undefined : ((json['multiples'] as Array<any>).map(CotatoMultipleQuizResponseFromJSON)),
        'shortQuizzes': json['shortQuizzes'] == null ? undefined : ((json['shortQuizzes'] as Array<any>).map(CotatoShortQuizResponseFromJSON)),
    };
}

export function CotatoAllQuizzesResponseToJSON(value?: CotatoAllQuizzesResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'multiples': value['multiples'] == null ? undefined : ((value['multiples'] as Array<any>).map(CotatoMultipleQuizResponseToJSON)),
        'shortQuizzes': value['shortQuizzes'] == null ? undefined : ((value['shortQuizzes'] as Array<any>).map(CotatoShortQuizResponseToJSON)),
    };
}

