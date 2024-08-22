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
 * @interface CotatoLogoutRequest
 */
export interface CotatoLogoutRequest {
    /**
     * 
     * @type {string}
     * @memberof CotatoLogoutRequest
     */
    accessToken: string;
}

/**
 * Check if a given object implements the CotatoLogoutRequest interface.
 */
export function instanceOfCotatoLogoutRequest(value: object): value is CotatoLogoutRequest {
    if (!('accessToken' in value) || value['accessToken'] === undefined) return false;
    return true;
}

export function CotatoLogoutRequestFromJSON(json: any): CotatoLogoutRequest {
    return CotatoLogoutRequestFromJSONTyped(json, false);
}

export function CotatoLogoutRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoLogoutRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'accessToken': json['accessToken'],
    };
}

export function CotatoLogoutRequestToJSON(value?: CotatoLogoutRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'accessToken': value['accessToken'],
    };
}

