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
 * @interface CotatoAddSessionImageResponse
 */
export interface CotatoAddSessionImageResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoAddSessionImageResponse
     */
    imageId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoAddSessionImageResponse
     */
    imageUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof CotatoAddSessionImageResponse
     */
    order?: number;
}

/**
 * Check if a given object implements the CotatoAddSessionImageResponse interface.
 */
export function instanceOfCotatoAddSessionImageResponse(value: object): value is CotatoAddSessionImageResponse {
    return true;
}

export function CotatoAddSessionImageResponseFromJSON(json: any): CotatoAddSessionImageResponse {
    return CotatoAddSessionImageResponseFromJSONTyped(json, false);
}

export function CotatoAddSessionImageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAddSessionImageResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'imageId': json['imageId'] == null ? undefined : json['imageId'],
        'imageUrl': json['imageUrl'] == null ? undefined : json['imageUrl'],
        'order': json['order'] == null ? undefined : json['order'],
    };
}

export function CotatoAddSessionImageResponseToJSON(value?: CotatoAddSessionImageResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'imageId': value['imageId'],
        'imageUrl': value['imageUrl'],
        'order': value['order'],
    };
}

