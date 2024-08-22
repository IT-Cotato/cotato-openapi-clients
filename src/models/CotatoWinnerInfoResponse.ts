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
 * @interface CotatoWinnerInfoResponse
 */
export interface CotatoWinnerInfoResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoWinnerInfoResponse
     */
    memberId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoWinnerInfoResponse
     */
    memberName?: string;
    /**
     * 
     * @type {number}
     * @memberof CotatoWinnerInfoResponse
     */
    educationId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoWinnerInfoResponse
     */
    backFourNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoWinnerInfoResponse
     */
    memberPosition?: CotatoWinnerInfoResponseMemberPositionEnum;
}


/**
 * @export
 */
export const CotatoWinnerInfoResponseMemberPositionEnum = {
    None: 'NONE',
    Be: 'BE',
    Fe: 'FE',
    Design: 'DESIGN',
    Pm: 'PM'
} as const;
export type CotatoWinnerInfoResponseMemberPositionEnum = typeof CotatoWinnerInfoResponseMemberPositionEnum[keyof typeof CotatoWinnerInfoResponseMemberPositionEnum];


/**
 * Check if a given object implements the CotatoWinnerInfoResponse interface.
 */
export function instanceOfCotatoWinnerInfoResponse(value: object): value is CotatoWinnerInfoResponse {
    return true;
}

export function CotatoWinnerInfoResponseFromJSON(json: any): CotatoWinnerInfoResponse {
    return CotatoWinnerInfoResponseFromJSONTyped(json, false);
}

export function CotatoWinnerInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoWinnerInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'memberId': json['memberId'] == null ? undefined : json['memberId'],
        'memberName': json['memberName'] == null ? undefined : json['memberName'],
        'educationId': json['educationId'] == null ? undefined : json['educationId'],
        'backFourNumber': json['backFourNumber'] == null ? undefined : json['backFourNumber'],
        'memberPosition': json['memberPosition'] == null ? undefined : json['memberPosition'],
    };
}

export function CotatoWinnerInfoResponseToJSON(value?: CotatoWinnerInfoResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memberId': value['memberId'],
        'memberName': value['memberName'],
        'educationId': value['educationId'],
        'backFourNumber': value['backFourNumber'],
        'memberPosition': value['memberPosition'],
    };
}

