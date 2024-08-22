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
import type { CotatoLocalTime } from './CotatoLocalTime.js';
import {
    CotatoLocalTimeFromJSON,
    CotatoLocalTimeFromJSONTyped,
    CotatoLocalTimeToJSON,
} from './CotatoLocalTime.js';

/**
 * 
 * @export
 * @interface CotatoAttendanceTimeResponse
 */
export interface CotatoAttendanceTimeResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceTimeResponse
     */
    sessionId?: number;
    /**
     * 
     * @type {CotatoLocalTime}
     * @memberof CotatoAttendanceTimeResponse
     */
    attendanceDeadLine?: CotatoLocalTime;
    /**
     * 
     * @type {CotatoLocalTime}
     * @memberof CotatoAttendanceTimeResponse
     */
    lateDeadLine?: CotatoLocalTime;
}

/**
 * Check if a given object implements the CotatoAttendanceTimeResponse interface.
 */
export function instanceOfCotatoAttendanceTimeResponse(value: object): value is CotatoAttendanceTimeResponse {
    return true;
}

export function CotatoAttendanceTimeResponseFromJSON(json: any): CotatoAttendanceTimeResponse {
    return CotatoAttendanceTimeResponseFromJSONTyped(json, false);
}

export function CotatoAttendanceTimeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAttendanceTimeResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'sessionId': json['sessionId'] == null ? undefined : json['sessionId'],
        'attendanceDeadLine': json['attendanceDeadLine'] == null ? undefined : CotatoLocalTimeFromJSON(json['attendanceDeadLine']),
        'lateDeadLine': json['lateDeadLine'] == null ? undefined : CotatoLocalTimeFromJSON(json['lateDeadLine']),
    };
}

export function CotatoAttendanceTimeResponseToJSON(value?: CotatoAttendanceTimeResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sessionId': value['sessionId'],
        'attendanceDeadLine': CotatoLocalTimeToJSON(value['attendanceDeadLine']),
        'lateDeadLine': CotatoLocalTimeToJSON(value['lateDeadLine']),
    };
}
