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
import type { CotatoAttendanceMemberInfo } from './CotatoAttendanceMemberInfo.js';
import {
    CotatoAttendanceMemberInfoFromJSON,
    CotatoAttendanceMemberInfoFromJSONTyped,
    CotatoAttendanceMemberInfoToJSON,
} from './CotatoAttendanceMemberInfo.js';

/**
 * 
 * @export
 * @interface CotatoAttendanceRecordResponse
 */
export interface CotatoAttendanceRecordResponse {
    /**
     * 
     * @type {CotatoAttendanceMemberInfo}
     * @memberof CotatoAttendanceRecordResponse
     */
    memberInfo?: CotatoAttendanceMemberInfo;
    /**
     * 
     * @type {string}
     * @memberof CotatoAttendanceRecordResponse
     */
    result?: CotatoAttendanceRecordResponseResultEnum;
}


/**
 * @export
 */
export const CotatoAttendanceRecordResponseResultEnum = {
    Offline: 'OFFLINE',
    Online: 'ONLINE',
    Late: 'LATE',
    Absent: 'ABSENT'
} as const;
export type CotatoAttendanceRecordResponseResultEnum = typeof CotatoAttendanceRecordResponseResultEnum[keyof typeof CotatoAttendanceRecordResponseResultEnum];


/**
 * Check if a given object implements the CotatoAttendanceRecordResponse interface.
 */
export function instanceOfCotatoAttendanceRecordResponse(value: object): value is CotatoAttendanceRecordResponse {
    return true;
}

export function CotatoAttendanceRecordResponseFromJSON(json: any): CotatoAttendanceRecordResponse {
    return CotatoAttendanceRecordResponseFromJSONTyped(json, false);
}

export function CotatoAttendanceRecordResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAttendanceRecordResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'memberInfo': json['memberInfo'] == null ? undefined : CotatoAttendanceMemberInfoFromJSON(json['memberInfo']),
        'result': json['result'] == null ? undefined : json['result'],
    };
}

export function CotatoAttendanceRecordResponseToJSON(value?: CotatoAttendanceRecordResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memberInfo': CotatoAttendanceMemberInfoToJSON(value['memberInfo']),
        'result': value['result'],
    };
}

