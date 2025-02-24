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
/**
 * 
 * @export
 * @interface CotatoRandomQuizReplyResponse
 */
export interface CotatoRandomQuizReplyResponse {
    /**
     * 
     * @type {boolean}
     * @memberof CotatoRandomQuizReplyResponse
     */
    result: boolean;
}

/**
 * Check if a given object implements the CotatoRandomQuizReplyResponse interface.
 */
export function instanceOfCotatoRandomQuizReplyResponse(value: object): value is CotatoRandomQuizReplyResponse {
    if (!('result' in value) || value['result'] === undefined) return false;
    return true;
}

export function CotatoRandomQuizReplyResponseFromJSON(json: any): CotatoRandomQuizReplyResponse {
    return CotatoRandomQuizReplyResponseFromJSONTyped(json, false);
}

export function CotatoRandomQuizReplyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoRandomQuizReplyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'],
    };
}

export function CotatoRandomQuizReplyResponseToJSON(value?: CotatoRandomQuizReplyResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': value['result'],
    };
}

