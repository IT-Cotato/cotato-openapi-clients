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
    name?: string;
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
    position?: CotatoWinnerInfoResponsePositionEnum;
}


/**
 * @export
 */
export const CotatoWinnerInfoResponsePositionEnum = {
    None: 'NONE',
    Be: 'BE',
    Fe: 'FE',
    Design: 'DESIGN',
    Pm: 'PM'
} as const;
export type CotatoWinnerInfoResponsePositionEnum = typeof CotatoWinnerInfoResponsePositionEnum[keyof typeof CotatoWinnerInfoResponsePositionEnum];


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
        'name': json['name'] == null ? undefined : json['name'],
        'educationId': json['educationId'] == null ? undefined : json['educationId'],
        'backFourNumber': json['backFourNumber'] == null ? undefined : json['backFourNumber'],
        'position': json['position'] == null ? undefined : json['position'],
    };
}

export function CotatoWinnerInfoResponseToJSON(value?: CotatoWinnerInfoResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memberId': value['memberId'],
        'name': value['name'],
        'educationId': value['educationId'],
        'backFourNumber': value['backFourNumber'],
        'position': value['position'],
    };
}

