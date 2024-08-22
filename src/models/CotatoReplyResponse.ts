/* tslint:disable */
/* eslint-disable */
/**
 * CS-QUIZ 프로젝트 API 명세서
 * quiz api 명세서
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
 * @interface CotatoReplyResponse
 */
export interface CotatoReplyResponse {
    /**
     * 
     * @type {string}
     * @memberof CotatoReplyResponse
     */
    result?: string;
}

/**
 * Check if a given object implements the CotatoReplyResponse interface.
 */
export function instanceOfCotatoReplyResponse(value: object): value is CotatoReplyResponse {
    return true;
}

export function CotatoReplyResponseFromJSON(json: any): CotatoReplyResponse {
    return CotatoReplyResponseFromJSONTyped(json, false);
}

export function CotatoReplyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoReplyResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : json['result'],
    };
}

export function CotatoReplyResponseToJSON(value?: CotatoReplyResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': value['result'],
    };
}

