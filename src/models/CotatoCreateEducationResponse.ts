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
 * @interface CotatoCreateEducationResponse
 */
export interface CotatoCreateEducationResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoCreateEducationResponse
     */
    educationId?: number;
}

/**
 * Check if a given object implements the CotatoCreateEducationResponse interface.
 */
export function instanceOfCotatoCreateEducationResponse(value: object): value is CotatoCreateEducationResponse {
    return true;
}

export function CotatoCreateEducationResponseFromJSON(json: any): CotatoCreateEducationResponse {
    return CotatoCreateEducationResponseFromJSONTyped(json, false);
}

export function CotatoCreateEducationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoCreateEducationResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'educationId': json['educationId'] == null ? undefined : json['educationId'],
    };
}

export function CotatoCreateEducationResponseToJSON(value?: CotatoCreateEducationResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'educationId': value['educationId'],
    };
}

