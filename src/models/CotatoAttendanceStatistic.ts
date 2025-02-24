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
 * @interface CotatoAttendanceStatistic
 */
export interface CotatoAttendanceStatistic {
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceStatistic
     */
    online?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceStatistic
     */
    offline?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceStatistic
     */
    late?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceStatistic
     */
    absent?: number;
}

/**
 * Check if a given object implements the CotatoAttendanceStatistic interface.
 */
export function instanceOfCotatoAttendanceStatistic(value: object): value is CotatoAttendanceStatistic {
    return true;
}

export function CotatoAttendanceStatisticFromJSON(json: any): CotatoAttendanceStatistic {
    return CotatoAttendanceStatisticFromJSONTyped(json, false);
}

export function CotatoAttendanceStatisticFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAttendanceStatistic {
    if (json == null) {
        return json;
    }
    return {
        
        'online': json['online'] == null ? undefined : json['online'],
        'offline': json['offline'] == null ? undefined : json['offline'],
        'late': json['late'] == null ? undefined : json['late'],
        'absent': json['absent'] == null ? undefined : json['absent'],
    };
}

export function CotatoAttendanceStatisticToJSON(value?: CotatoAttendanceStatistic | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'online': value['online'],
        'offline': value['offline'],
        'late': value['late'],
        'absent': value['absent'],
    };
}

