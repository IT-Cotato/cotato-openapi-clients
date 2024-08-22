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
 * @interface CotatoGenerationInfoResponse
 */
export interface CotatoGenerationInfoResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoGenerationInfoResponse
     */
    generationId?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoGenerationInfoResponse
     */
    generationNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoGenerationInfoResponse
     */
    sessionCount?: number;
}

/**
 * Check if a given object implements the CotatoGenerationInfoResponse interface.
 */
export function instanceOfCotatoGenerationInfoResponse(value: object): value is CotatoGenerationInfoResponse {
    return true;
}

export function CotatoGenerationInfoResponseFromJSON(json: any): CotatoGenerationInfoResponse {
    return CotatoGenerationInfoResponseFromJSONTyped(json, false);
}

export function CotatoGenerationInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoGenerationInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'generationId': json['generationId'] == null ? undefined : json['generationId'],
        'generationNumber': json['generationNumber'] == null ? undefined : json['generationNumber'],
        'sessionCount': json['sessionCount'] == null ? undefined : json['sessionCount'],
    };
}

export function CotatoGenerationInfoResponseToJSON(value?: CotatoGenerationInfoResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'generationId': value['generationId'],
        'generationNumber': value['generationNumber'],
        'sessionCount': value['sessionCount'],
    };
}

