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
 * @interface CotatoCreateProjectResponse
 */
export interface CotatoCreateProjectResponse {
    /**
     * 생성된 프로젝트 PK
     * @type {number}
     * @memberof CotatoCreateProjectResponse
     */
    projectId?: number;
}

/**
 * Check if a given object implements the CotatoCreateProjectResponse interface.
 */
export function instanceOfCotatoCreateProjectResponse(value: object): value is CotatoCreateProjectResponse {
    return true;
}

export function CotatoCreateProjectResponseFromJSON(json: any): CotatoCreateProjectResponse {
    return CotatoCreateProjectResponseFromJSONTyped(json, false);
}

export function CotatoCreateProjectResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoCreateProjectResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
    };
}

export function CotatoCreateProjectResponseToJSON(value?: CotatoCreateProjectResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'projectId': value['projectId'],
    };
}

