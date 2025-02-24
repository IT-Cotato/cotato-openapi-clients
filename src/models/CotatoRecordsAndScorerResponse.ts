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
import type { CotatoScorerResponse } from './CotatoScorerResponse.js';
import {
    CotatoScorerResponseFromJSON,
    CotatoScorerResponseFromJSONTyped,
    CotatoScorerResponseToJSON,
} from './CotatoScorerResponse.js';
import type { CotatoRecordResponse } from './CotatoRecordResponse.js';
import {
    CotatoRecordResponseFromJSON,
    CotatoRecordResponseFromJSONTyped,
    CotatoRecordResponseToJSON,
} from './CotatoRecordResponse.js';

/**
 * 
 * @export
 * @interface CotatoRecordsAndScorerResponse
 */
export interface CotatoRecordsAndScorerResponse {
    /**
     * 
     * @type {Array<CotatoRecordResponse>}
     * @memberof CotatoRecordsAndScorerResponse
     */
    records?: Array<CotatoRecordResponse>;
    /**
     * 
     * @type {CotatoScorerResponse}
     * @memberof CotatoRecordsAndScorerResponse
     */
    scorer?: CotatoScorerResponse;
}

/**
 * Check if a given object implements the CotatoRecordsAndScorerResponse interface.
 */
export function instanceOfCotatoRecordsAndScorerResponse(value: object): value is CotatoRecordsAndScorerResponse {
    return true;
}

export function CotatoRecordsAndScorerResponseFromJSON(json: any): CotatoRecordsAndScorerResponse {
    return CotatoRecordsAndScorerResponseFromJSONTyped(json, false);
}

export function CotatoRecordsAndScorerResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoRecordsAndScorerResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'records': json['records'] == null ? undefined : ((json['records'] as Array<any>).map(CotatoRecordResponseFromJSON)),
        'scorer': json['scorer'] == null ? undefined : CotatoScorerResponseFromJSON(json['scorer']),
    };
}

export function CotatoRecordsAndScorerResponseToJSON(value?: CotatoRecordsAndScorerResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'records': value['records'] == null ? undefined : ((value['records'] as Array<any>).map(CotatoRecordResponseToJSON)),
        'scorer': CotatoScorerResponseToJSON(value['scorer']),
    };
}

