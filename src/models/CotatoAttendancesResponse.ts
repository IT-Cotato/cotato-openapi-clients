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
import type { CotatoAttendanceResponse } from './CotatoAttendanceResponse.js';
import {
    CotatoAttendanceResponseFromJSON,
    CotatoAttendanceResponseFromJSONTyped,
    CotatoAttendanceResponseToJSON,
} from './CotatoAttendanceResponse.js';

/**
 * 
 * @export
 * @interface CotatoAttendancesResponse
 */
export interface CotatoAttendancesResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendancesResponse
     */
    generationId?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendancesResponse
     */
    generationNumber?: number;
    /**
     * 
     * @type {Array<CotatoAttendanceResponse>}
     * @memberof CotatoAttendancesResponse
     */
    attendances?: Array<CotatoAttendanceResponse>;
}

/**
 * Check if a given object implements the CotatoAttendancesResponse interface.
 */
export function instanceOfCotatoAttendancesResponse(value: object): value is CotatoAttendancesResponse {
    return true;
}

export function CotatoAttendancesResponseFromJSON(json: any): CotatoAttendancesResponse {
    return CotatoAttendancesResponseFromJSONTyped(json, false);
}

export function CotatoAttendancesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAttendancesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'generationId': json['generationId'] == null ? undefined : json['generationId'],
        'generationNumber': json['generationNumber'] == null ? undefined : json['generationNumber'],
        'attendances': json['attendances'] == null ? undefined : ((json['attendances'] as Array<any>).map(CotatoAttendanceResponseFromJSON)),
    };
}

export function CotatoAttendancesResponseToJSON(value?: CotatoAttendancesResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'generationId': value['generationId'],
        'generationNumber': value['generationNumber'],
        'attendances': value['attendances'] == null ? undefined : ((value['attendances'] as Array<any>).map(CotatoAttendanceResponseToJSON)),
    };
}

