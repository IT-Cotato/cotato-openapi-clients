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
 * @interface CotatoUpdateAttendanceRecordRequest
 */
export interface CotatoUpdateAttendanceRecordRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoUpdateAttendanceRecordRequest
     */
    memberId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoUpdateAttendanceRecordRequest
     */
    attendanceResult?: CotatoUpdateAttendanceRecordRequestAttendanceResultEnum;
}


/**
 * @export
 */
export const CotatoUpdateAttendanceRecordRequestAttendanceResultEnum = {
    Offline: 'OFFLINE',
    Online: 'ONLINE',
    Late: 'LATE',
    Absent: 'ABSENT'
} as const;
export type CotatoUpdateAttendanceRecordRequestAttendanceResultEnum = typeof CotatoUpdateAttendanceRecordRequestAttendanceResultEnum[keyof typeof CotatoUpdateAttendanceRecordRequestAttendanceResultEnum];


/**
 * Check if a given object implements the CotatoUpdateAttendanceRecordRequest interface.
 */
export function instanceOfCotatoUpdateAttendanceRecordRequest(value: object): value is CotatoUpdateAttendanceRecordRequest {
    return true;
}

export function CotatoUpdateAttendanceRecordRequestFromJSON(json: any): CotatoUpdateAttendanceRecordRequest {
    return CotatoUpdateAttendanceRecordRequestFromJSONTyped(json, false);
}

export function CotatoUpdateAttendanceRecordRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoUpdateAttendanceRecordRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'memberId': json['memberId'] == null ? undefined : json['memberId'],
        'attendanceResult': json['attendanceResult'] == null ? undefined : json['attendanceResult'],
    };
}

export function CotatoUpdateAttendanceRecordRequestToJSON(value?: CotatoUpdateAttendanceRecordRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memberId': value['memberId'],
        'attendanceResult': value['attendanceResult'],
    };
}

