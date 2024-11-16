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
 * @interface CotatoEducationOpenRequest
 */
export interface CotatoEducationOpenRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoEducationOpenRequest
     */
    educationId: number;
}

/**
 * Check if a given object implements the CotatoEducationOpenRequest interface.
 */
export function instanceOfCotatoEducationOpenRequest(value: object): value is CotatoEducationOpenRequest {
    if (!('educationId' in value) || value['educationId'] === undefined) return false;
    return true;
}

export function CotatoEducationOpenRequestFromJSON(json: any): CotatoEducationOpenRequest {
    return CotatoEducationOpenRequestFromJSONTyped(json, false);
}

export function CotatoEducationOpenRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoEducationOpenRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'educationId': json['educationId'],
    };
}

export function CotatoEducationOpenRequestToJSON(value?: CotatoEducationOpenRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'educationId': value['educationId'],
    };
}

