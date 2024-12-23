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
 * @interface CotatoChangeGenerationPeriodRequest
 */
export interface CotatoChangeGenerationPeriodRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoChangeGenerationPeriodRequest
     */
    generationId: number;
    /**
     * 
     * @type {Date}
     * @memberof CotatoChangeGenerationPeriodRequest
     */
    startDate: Date;
    /**
     * 
     * @type {Date}
     * @memberof CotatoChangeGenerationPeriodRequest
     */
    endDate: Date;
}

/**
 * Check if a given object implements the CotatoChangeGenerationPeriodRequest interface.
 */
export function instanceOfCotatoChangeGenerationPeriodRequest(value: object): value is CotatoChangeGenerationPeriodRequest {
    if (!('generationId' in value) || value['generationId'] === undefined) return false;
    if (!('startDate' in value) || value['startDate'] === undefined) return false;
    if (!('endDate' in value) || value['endDate'] === undefined) return false;
    return true;
}

export function CotatoChangeGenerationPeriodRequestFromJSON(json: any): CotatoChangeGenerationPeriodRequest {
    return CotatoChangeGenerationPeriodRequestFromJSONTyped(json, false);
}

export function CotatoChangeGenerationPeriodRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoChangeGenerationPeriodRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'generationId': json['generationId'],
        'startDate': (new Date(json['startDate'])),
        'endDate': (new Date(json['endDate'])),
    };
}

export function CotatoChangeGenerationPeriodRequestToJSON(value?: CotatoChangeGenerationPeriodRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'generationId': value['generationId'],
        'startDate': ((value['startDate']).toISOString().substring(0,10)),
        'endDate': ((value['endDate']).toISOString().substring(0,10)),
    };
}

