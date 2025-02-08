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
 * @interface CotatoAddableMemberInfo
 */
export interface CotatoAddableMemberInfo {
    /**
     * 멤버 Id
     * @type {number}
     * @memberof CotatoAddableMemberInfo
     */
    memberId: number;
    /**
     * 이름
     * @type {string}
     * @memberof CotatoAddableMemberInfo
     */
    name: string;
    /**
     * 합격 기수
     * @type {number}
     * @memberof CotatoAddableMemberInfo
     */
    generationNumber: number;
    /**
     * 포지션
     * @type {string}
     * @memberof CotatoAddableMemberInfo
     */
    position: CotatoAddableMemberInfoPositionEnum;
}


/**
 * @export
 */
export const CotatoAddableMemberInfoPositionEnum = {
    None: 'NONE',
    Be: 'BE',
    Fe: 'FE',
    Design: 'DESIGN',
    Pm: 'PM'
} as const;
export type CotatoAddableMemberInfoPositionEnum = typeof CotatoAddableMemberInfoPositionEnum[keyof typeof CotatoAddableMemberInfoPositionEnum];


/**
 * Check if a given object implements the CotatoAddableMemberInfo interface.
 */
export function instanceOfCotatoAddableMemberInfo(value: object): value is CotatoAddableMemberInfo {
    if (!('memberId' in value) || value['memberId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('generationNumber' in value) || value['generationNumber'] === undefined) return false;
    if (!('position' in value) || value['position'] === undefined) return false;
    return true;
}

export function CotatoAddableMemberInfoFromJSON(json: any): CotatoAddableMemberInfo {
    return CotatoAddableMemberInfoFromJSONTyped(json, false);
}

export function CotatoAddableMemberInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAddableMemberInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'memberId': json['memberId'],
        'name': json['name'],
        'generationNumber': json['generationNumber'],
        'position': json['position'],
    };
}

export function CotatoAddableMemberInfoToJSON(value?: CotatoAddableMemberInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memberId': value['memberId'],
        'name': value['name'],
        'generationNumber': value['generationNumber'],
        'position': value['position'],
    };
}

