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
 * @interface CotatoAttendanceWithSessionResponse
 */
export interface CotatoAttendanceWithSessionResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceWithSessionResponse
     */
    sessionId: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendanceWithSessionResponse
     */
    attendanceId: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoAttendanceWithSessionResponse
     */
    sessionTitle?: string;
    /**
     * 
     * @type {Date}
     * @memberof CotatoAttendanceWithSessionResponse
     */
    sessionDateTime?: Date;
    /**
     * 
     * @type {string}
     * @memberof CotatoAttendanceWithSessionResponse
     */
    sessionType: CotatoAttendanceWithSessionResponseSessionTypeEnum;
}


/**
 * @export
 */
export const CotatoAttendanceWithSessionResponseSessionTypeEnum = {
    NoAttend: 'NO_ATTEND',
    Online: 'ONLINE',
    Offline: 'OFFLINE',
    All: 'ALL'
} as const;
export type CotatoAttendanceWithSessionResponseSessionTypeEnum = typeof CotatoAttendanceWithSessionResponseSessionTypeEnum[keyof typeof CotatoAttendanceWithSessionResponseSessionTypeEnum];


/**
 * Check if a given object implements the CotatoAttendanceWithSessionResponse interface.
 */
export function instanceOfCotatoAttendanceWithSessionResponse(value: object): value is CotatoAttendanceWithSessionResponse {
    if (!('sessionId' in value) || value['sessionId'] === undefined) return false;
    if (!('attendanceId' in value) || value['attendanceId'] === undefined) return false;
    if (!('sessionType' in value) || value['sessionType'] === undefined) return false;
    return true;
}

export function CotatoAttendanceWithSessionResponseFromJSON(json: any): CotatoAttendanceWithSessionResponse {
    return CotatoAttendanceWithSessionResponseFromJSONTyped(json, false);
}

export function CotatoAttendanceWithSessionResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAttendanceWithSessionResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'sessionId': json['sessionId'],
        'attendanceId': json['attendanceId'],
        'sessionTitle': json['sessionTitle'] == null ? undefined : json['sessionTitle'],
        'sessionDateTime': json['sessionDateTime'] == null ? undefined : (new Date(json['sessionDateTime'])),
        'sessionType': json['sessionType'],
    };
}

export function CotatoAttendanceWithSessionResponseToJSON(value?: CotatoAttendanceWithSessionResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sessionId': value['sessionId'],
        'attendanceId': value['attendanceId'],
        'sessionTitle': value['sessionTitle'],
        'sessionDateTime': value['sessionDateTime'] == null ? undefined : ((value['sessionDateTime']).toISOString()),
        'sessionType': value['sessionType'],
    };
}

