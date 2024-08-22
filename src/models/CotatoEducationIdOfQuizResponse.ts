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
 * @interface CotatoEducationIdOfQuizResponse
 */
export interface CotatoEducationIdOfQuizResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoEducationIdOfQuizResponse
     */
    educationId?: number;
}

/**
 * Check if a given object implements the CotatoEducationIdOfQuizResponse interface.
 */
export function instanceOfCotatoEducationIdOfQuizResponse(value: object): value is CotatoEducationIdOfQuizResponse {
    return true;
}

export function CotatoEducationIdOfQuizResponseFromJSON(json: any): CotatoEducationIdOfQuizResponse {
    return CotatoEducationIdOfQuizResponseFromJSONTyped(json, false);
}

export function CotatoEducationIdOfQuizResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoEducationIdOfQuizResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'educationId': json['educationId'] == null ? undefined : json['educationId'],
    };
}

export function CotatoEducationIdOfQuizResponseToJSON(value?: CotatoEducationIdOfQuizResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'educationId': value['educationId'],
    };
}

