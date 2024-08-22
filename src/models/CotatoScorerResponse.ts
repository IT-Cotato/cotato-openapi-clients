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
 * @interface CotatoScorerResponse
 */
export interface CotatoScorerResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoScorerResponse
     */
    scorerId?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoScorerResponse
     */
    memberId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoScorerResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoScorerResponse
     */
    backFourNumber?: string;
}

/**
 * Check if a given object implements the CotatoScorerResponse interface.
 */
export function instanceOfCotatoScorerResponse(value: object): value is CotatoScorerResponse {
    return true;
}

export function CotatoScorerResponseFromJSON(json: any): CotatoScorerResponse {
    return CotatoScorerResponseFromJSONTyped(json, false);
}

export function CotatoScorerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoScorerResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'scorerId': json['scorerId'] == null ? undefined : json['scorerId'],
        'memberId': json['memberId'] == null ? undefined : json['memberId'],
        'name': json['name'] == null ? undefined : json['name'],
        'backFourNumber': json['backFourNumber'] == null ? undefined : json['backFourNumber'],
    };
}

export function CotatoScorerResponseToJSON(value?: CotatoScorerResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'scorerId': value['scorerId'],
        'memberId': value['memberId'],
        'name': value['name'],
        'backFourNumber': value['backFourNumber'],
    };
}

