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
 * @interface CotatoSocketTokenDto
 */
export interface CotatoSocketTokenDto {
    /**
     * 
     * @type {string}
     * @memberof CotatoSocketTokenDto
     */
    socketToken?: string;
}

/**
 * Check if a given object implements the CotatoSocketTokenDto interface.
 */
export function instanceOfCotatoSocketTokenDto(value: object): value is CotatoSocketTokenDto {
    return true;
}

export function CotatoSocketTokenDtoFromJSON(json: any): CotatoSocketTokenDto {
    return CotatoSocketTokenDtoFromJSONTyped(json, false);
}

export function CotatoSocketTokenDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoSocketTokenDto {
    if (json == null) {
        return json;
    }
    return {
        
        'socketToken': json['socketToken'] == null ? undefined : json['socketToken'],
    };
}

export function CotatoSocketTokenDtoToJSON(value?: CotatoSocketTokenDto | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'socketToken': value['socketToken'],
    };
}

