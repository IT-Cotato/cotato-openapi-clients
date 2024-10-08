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
import type { CotatoAttendanceStatistic } from './CotatoAttendanceStatistic.js';
import {
    CotatoAttendanceStatisticFromJSON,
    CotatoAttendanceStatisticFromJSONTyped,
    CotatoAttendanceStatisticToJSON,
} from './CotatoAttendanceStatistic.js';
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
     * @type {CotatoAttendanceStatistic}
     * @memberof CotatoAttendanceRecordResponse
     */
    statistic?: CotatoAttendanceStatistic;
}

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
        'statistic': json['statistic'] == null ? undefined : CotatoAttendanceStatisticFromJSON(json['statistic']),
    };
}

export function CotatoAttendanceRecordResponseToJSON(value?: CotatoAttendanceRecordResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memberInfo': CotatoAttendanceMemberInfoToJSON(value['memberInfo']),
        'statistic': CotatoAttendanceStatisticToJSON(value['statistic']),
    };
}

