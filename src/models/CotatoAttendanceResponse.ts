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
 * @interface CotatoAttendanceResponse
 */
export interface CotatoAttendanceResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceResponse
     */
    sessionId?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceResponse
     */
    attendanceId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoAttendanceResponse
     */
    sessionTitle?: string;
    /**
     * 
     * @type {Date}
     * @memberof CotatoAttendanceResponse
     */
    sessionDate?: Date;
    /**
     * 
     * @type {string}
     * @memberof CotatoAttendanceResponse
     */
    openStatus?: CotatoAttendanceResponseOpenStatusEnum;
}


/**
 * @export
 */
export const CotatoAttendanceResponseOpenStatusEnum = {
    Closed: 'CLOSED',
    Open: 'OPEN',
    Late: 'LATE',
    Absent: 'ABSENT',
    Before: 'BEFORE'
} as const;
export type CotatoAttendanceResponseOpenStatusEnum = typeof CotatoAttendanceResponseOpenStatusEnum[keyof typeof CotatoAttendanceResponseOpenStatusEnum];


/**
 * Check if a given object implements the CotatoAttendanceResponse interface.
 */
export function instanceOfCotatoAttendanceResponse(value: object): value is CotatoAttendanceResponse {
    return true;
}

export function CotatoAttendanceResponseFromJSON(json: any): CotatoAttendanceResponse {
    return CotatoAttendanceResponseFromJSONTyped(json, false);
}

export function CotatoAttendanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAttendanceResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'sessionId': json['sessionId'] == null ? undefined : json['sessionId'],
        'attendanceId': json['attendanceId'] == null ? undefined : json['attendanceId'],
        'sessionTitle': json['sessionTitle'] == null ? undefined : json['sessionTitle'],
        'sessionDate': json['sessionDate'] == null ? undefined : (new Date(json['sessionDate'])),
        'openStatus': json['openStatus'] == null ? undefined : json['openStatus'],
    };
}

export function CotatoAttendanceResponseToJSON(value?: CotatoAttendanceResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sessionId': value['sessionId'],
        'attendanceId': value['attendanceId'],
        'sessionTitle': value['sessionTitle'],
        'sessionDate': value['sessionDate'] == null ? undefined : ((value['sessionDate']).toISOString().substring(0,10)),
        'openStatus': value['openStatus'],
    };
}

