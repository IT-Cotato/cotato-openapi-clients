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
 * @interface CotatoMemberAttendResponse
 */
export interface CotatoMemberAttendResponse {
    /**
     * 세션 PK
     * @type {number}
     * @memberof CotatoMemberAttendResponse
     */
    sessionId: number;
    /**
     * 출석 PK
     * @type {number}
     * @memberof CotatoMemberAttendResponse
     */
    attendanceId: number;
    /**
     * 멤버 PK
     * @type {number}
     * @memberof CotatoMemberAttendResponse
     */
    memberId: number;
    /**
     * 세션 타이틀
     * @type {string}
     * @memberof CotatoMemberAttendResponse
     */
    sessionTitle?: string;
    /**
     * 세션 날짜
     * @type {Date}
     * @memberof CotatoMemberAttendResponse
     */
    sessionDateTime?: Date;
    /**
     * 출결 진행 여부
     * @type {string}
     * @memberof CotatoMemberAttendResponse
     */
    openStatus?: CotatoMemberAttendResponseOpenStatusEnum;
    /**
     * 출결 형식
     * @type {string}
     * @memberof CotatoMemberAttendResponse
     */
    attendanceType?: CotatoMemberAttendResponseAttendanceTypeEnum;
    /**
     * 마감된 출석에 대한 출결 결과
     * @type {string}
     * @memberof CotatoMemberAttendResponse
     */
    result?: CotatoMemberAttendResponseResultEnum;
}


/**
 * @export
 */
export const CotatoMemberAttendResponseOpenStatusEnum = {
    Closed: 'CLOSED',
    Open: 'OPEN',
    Late: 'LATE',
    Absent: 'ABSENT',
    Before: 'BEFORE'
} as const;
export type CotatoMemberAttendResponseOpenStatusEnum = typeof CotatoMemberAttendResponseOpenStatusEnum[keyof typeof CotatoMemberAttendResponseOpenStatusEnum];

/**
 * @export
 */
export const CotatoMemberAttendResponseAttendanceTypeEnum = {
    Offline: 'OFFLINE',
    Online: 'ONLINE',
    NoAttend: 'NO_ATTEND'
} as const;
export type CotatoMemberAttendResponseAttendanceTypeEnum = typeof CotatoMemberAttendResponseAttendanceTypeEnum[keyof typeof CotatoMemberAttendResponseAttendanceTypeEnum];

/**
 * @export
 */
export const CotatoMemberAttendResponseResultEnum = {
    Online: 'ONLINE',
    Offline: 'OFFLINE',
    Late: 'LATE',
    Absent: 'ABSENT'
} as const;
export type CotatoMemberAttendResponseResultEnum = typeof CotatoMemberAttendResponseResultEnum[keyof typeof CotatoMemberAttendResponseResultEnum];


/**
 * Check if a given object implements the CotatoMemberAttendResponse interface.
 */
export function instanceOfCotatoMemberAttendResponse(value: object): value is CotatoMemberAttendResponse {
    if (!('sessionId' in value) || value['sessionId'] === undefined) return false;
    if (!('attendanceId' in value) || value['attendanceId'] === undefined) return false;
    if (!('memberId' in value) || value['memberId'] === undefined) return false;
    return true;
}

export function CotatoMemberAttendResponseFromJSON(json: any): CotatoMemberAttendResponse {
    return CotatoMemberAttendResponseFromJSONTyped(json, false);
}

export function CotatoMemberAttendResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoMemberAttendResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'sessionId': json['sessionId'],
        'attendanceId': json['attendanceId'],
        'memberId': json['memberId'],
        'sessionTitle': json['sessionTitle'] == null ? undefined : json['sessionTitle'],
        'sessionDateTime': json['sessionDateTime'] == null ? undefined : (new Date(json['sessionDateTime'])),
        'openStatus': json['openStatus'] == null ? undefined : json['openStatus'],
        'attendanceType': json['attendanceType'] == null ? undefined : json['attendanceType'],
        'result': json['result'] == null ? undefined : json['result'],
    };
}

export function CotatoMemberAttendResponseToJSON(value?: CotatoMemberAttendResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'sessionId': value['sessionId'],
        'attendanceId': value['attendanceId'],
        'memberId': value['memberId'],
        'sessionTitle': value['sessionTitle'],
        'sessionDateTime': value['sessionDateTime'] == null ? undefined : ((value['sessionDateTime']).toISOString()),
        'openStatus': value['openStatus'],
        'attendanceType': value['attendanceType'],
        'result': value['result'],
    };
}

