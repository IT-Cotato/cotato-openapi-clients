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
import type { CotatoLocation } from './CotatoLocation.js';
import {
    CotatoLocationFromJSON,
    CotatoLocationFromJSONTyped,
    CotatoLocationToJSON,
} from './CotatoLocation.js';

/**
 * 
 * @export
 * @interface CotatoOfflineAttendanceRequest
 */
export interface CotatoOfflineAttendanceRequest {
    /**
     * 출석 PK
     * @type {number}
     * @memberof CotatoOfflineAttendanceRequest
     */
    attendanceId: number;
    /**
     * 회원 요청 시간
     * @type {Date}
     * @memberof CotatoOfflineAttendanceRequest
     */
    requestTime?: Date;
    /**
     * 
     * @type {CotatoLocation}
     * @memberof CotatoOfflineAttendanceRequest
     */
    location: CotatoLocation;
}

/**
 * Check if a given object implements the CotatoOfflineAttendanceRequest interface.
 */
export function instanceOfCotatoOfflineAttendanceRequest(value: object): value is CotatoOfflineAttendanceRequest {
    if (!('attendanceId' in value) || value['attendanceId'] === undefined) return false;
    if (!('location' in value) || value['location'] === undefined) return false;
    return true;
}

export function CotatoOfflineAttendanceRequestFromJSON(json: any): CotatoOfflineAttendanceRequest {
    return CotatoOfflineAttendanceRequestFromJSONTyped(json, false);
}

export function CotatoOfflineAttendanceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoOfflineAttendanceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'attendanceId': json['attendanceId'],
        'requestTime': json['requestTime'] == null ? undefined : (new Date(json['requestTime'])),
        'location': CotatoLocationFromJSON(json['location']),
    };
}

export function CotatoOfflineAttendanceRequestToJSON(value?: CotatoOfflineAttendanceRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'attendanceId': value['attendanceId'],
        'requestTime': value['requestTime'] == null ? undefined : ((value['requestTime']).toISOString()),
        'location': CotatoLocationToJSON(value['location']),
    };
}
