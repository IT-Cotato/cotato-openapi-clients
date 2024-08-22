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
 * @interface CotatoApplyMemberInfoResponse
 */
export interface CotatoApplyMemberInfoResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoApplyMemberInfoResponse
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoApplyMemberInfoResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoApplyMemberInfoResponse
     */
    backFourNumber?: string;
}

/**
 * Check if a given object implements the CotatoApplyMemberInfoResponse interface.
 */
export function instanceOfCotatoApplyMemberInfoResponse(value: object): value is CotatoApplyMemberInfoResponse {
    return true;
}

export function CotatoApplyMemberInfoResponseFromJSON(json: any): CotatoApplyMemberInfoResponse {
    return CotatoApplyMemberInfoResponseFromJSONTyped(json, false);
}

export function CotatoApplyMemberInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoApplyMemberInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'] == null ? undefined : json['name'],
        'backFourNumber': json['backFourNumber'] == null ? undefined : json['backFourNumber'],
    };
}

export function CotatoApplyMemberInfoResponseToJSON(value?: CotatoApplyMemberInfoResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'backFourNumber': value['backFourNumber'],
    };
}
