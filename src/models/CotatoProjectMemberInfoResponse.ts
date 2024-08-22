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
 * @interface CotatoProjectMemberInfoResponse
 */
export interface CotatoProjectMemberInfoResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoProjectMemberInfoResponse
     */
    memberId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectMemberInfoResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectMemberInfoResponse
     */
    position?: CotatoProjectMemberInfoResponsePositionEnum;
}


/**
 * @export
 */
export const CotatoProjectMemberInfoResponsePositionEnum = {
    None: 'NONE',
    Be: 'BE',
    Fe: 'FE',
    Design: 'DESIGN',
    Pm: 'PM'
} as const;
export type CotatoProjectMemberInfoResponsePositionEnum = typeof CotatoProjectMemberInfoResponsePositionEnum[keyof typeof CotatoProjectMemberInfoResponsePositionEnum];


/**
 * Check if a given object implements the CotatoProjectMemberInfoResponse interface.
 */
export function instanceOfCotatoProjectMemberInfoResponse(value: object): value is CotatoProjectMemberInfoResponse {
    return true;
}

export function CotatoProjectMemberInfoResponseFromJSON(json: any): CotatoProjectMemberInfoResponse {
    return CotatoProjectMemberInfoResponseFromJSONTyped(json, false);
}

export function CotatoProjectMemberInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoProjectMemberInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'memberId': json['memberId'] == null ? undefined : json['memberId'],
        'name': json['name'] == null ? undefined : json['name'],
        'position': json['position'] == null ? undefined : json['position'],
    };
}

export function CotatoProjectMemberInfoResponseToJSON(value?: CotatoProjectMemberInfoResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memberId': value['memberId'],
        'name': value['name'],
        'position': value['position'],
    };
}

