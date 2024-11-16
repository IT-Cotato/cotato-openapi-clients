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
 * @interface CotatoProjectMemberRequest
 */
export interface CotatoProjectMemberRequest {
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectMemberRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectMemberRequest
     */
    position: CotatoProjectMemberRequestPositionEnum;
}


/**
 * @export
 */
export const CotatoProjectMemberRequestPositionEnum = {
    None: 'NONE',
    Be: 'BE',
    Fe: 'FE',
    Design: 'DESIGN',
    Pm: 'PM'
} as const;
export type CotatoProjectMemberRequestPositionEnum = typeof CotatoProjectMemberRequestPositionEnum[keyof typeof CotatoProjectMemberRequestPositionEnum];


/**
 * Check if a given object implements the CotatoProjectMemberRequest interface.
 */
export function instanceOfCotatoProjectMemberRequest(value: object): value is CotatoProjectMemberRequest {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('position' in value) || value['position'] === undefined) return false;
    return true;
}

export function CotatoProjectMemberRequestFromJSON(json: any): CotatoProjectMemberRequest {
    return CotatoProjectMemberRequestFromJSONTyped(json, false);
}

export function CotatoProjectMemberRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoProjectMemberRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'position': json['position'],
    };
}

export function CotatoProjectMemberRequestToJSON(value?: CotatoProjectMemberRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'position': value['position'],
    };
}

