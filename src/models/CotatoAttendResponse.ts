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
 * @interface CotatoAttendResponse
 */
export interface CotatoAttendResponse {
    /**
     * 
     * @type {string}
     * @memberof CotatoAttendResponse
     */
    result?: CotatoAttendResponseResultEnum;
    /**
     * 
     * @type {string}
     * @memberof CotatoAttendResponse
     */
    message?: string;
}


/**
 * @export
 */
export const CotatoAttendResponseResultEnum = {
    Online: 'ONLINE',
    Offline: 'OFFLINE',
    Late: 'LATE',
    Absent: 'ABSENT'
} as const;
export type CotatoAttendResponseResultEnum = typeof CotatoAttendResponseResultEnum[keyof typeof CotatoAttendResponseResultEnum];


/**
 * Check if a given object implements the CotatoAttendResponse interface.
 */
export function instanceOfCotatoAttendResponse(value: object): value is CotatoAttendResponse {
    return true;
}

export function CotatoAttendResponseFromJSON(json: any): CotatoAttendResponse {
    return CotatoAttendResponseFromJSONTyped(json, false);
}

export function CotatoAttendResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAttendResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'result': json['result'] == null ? undefined : json['result'],
        'message': json['message'] == null ? undefined : json['message'],
    };
}

export function CotatoAttendResponseToJSON(value?: CotatoAttendResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'result': value['result'],
        'message': value['message'],
    };
}

