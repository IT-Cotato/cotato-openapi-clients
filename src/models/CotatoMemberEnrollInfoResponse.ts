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
 * @interface CotatoMemberEnrollInfoResponse
 */
export interface CotatoMemberEnrollInfoResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoMemberEnrollInfoResponse
     */
    memberId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoMemberEnrollInfoResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoMemberEnrollInfoResponse
     */
    position?: CotatoMemberEnrollInfoResponsePositionEnum;
    /**
     * 
     * @type {number}
     * @memberof CotatoMemberEnrollInfoResponse
     */
    generationNumber?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoMemberEnrollInfoResponse
     */
    role?: CotatoMemberEnrollInfoResponseRoleEnum;
}


/**
 * @export
 */
export const CotatoMemberEnrollInfoResponsePositionEnum = {
    None: 'NONE',
    Be: 'BE',
    Fe: 'FE',
    Design: 'DESIGN',
    Pm: 'PM'
} as const;
export type CotatoMemberEnrollInfoResponsePositionEnum = typeof CotatoMemberEnrollInfoResponsePositionEnum[keyof typeof CotatoMemberEnrollInfoResponsePositionEnum];

/**
 * @export
 */
export const CotatoMemberEnrollInfoResponseRoleEnum = {
    Refused: 'REFUSED',
    General: 'GENERAL',
    Member: 'MEMBER',
    OldMember: 'OLD_MEMBER',
    Admin: 'ADMIN',
    Education: 'EDUCATION',
    Operation: 'OPERATION'
} as const;
export type CotatoMemberEnrollInfoResponseRoleEnum = typeof CotatoMemberEnrollInfoResponseRoleEnum[keyof typeof CotatoMemberEnrollInfoResponseRoleEnum];


/**
 * Check if a given object implements the CotatoMemberEnrollInfoResponse interface.
 */
export function instanceOfCotatoMemberEnrollInfoResponse(value: object): value is CotatoMemberEnrollInfoResponse {
    return true;
}

export function CotatoMemberEnrollInfoResponseFromJSON(json: any): CotatoMemberEnrollInfoResponse {
    return CotatoMemberEnrollInfoResponseFromJSONTyped(json, false);
}

export function CotatoMemberEnrollInfoResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoMemberEnrollInfoResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'memberId': json['memberId'] == null ? undefined : json['memberId'],
        'name': json['name'] == null ? undefined : json['name'],
        'position': json['position'] == null ? undefined : json['position'],
        'generationNumber': json['generationNumber'] == null ? undefined : json['generationNumber'],
        'role': json['role'] == null ? undefined : json['role'],
    };
}

export function CotatoMemberEnrollInfoResponseToJSON(value?: CotatoMemberEnrollInfoResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memberId': value['memberId'],
        'name': value['name'],
        'position': value['position'],
        'generationNumber': value['generationNumber'],
        'role': value['role'],
    };
}

