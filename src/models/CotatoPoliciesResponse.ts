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
import type { CotatoPolicyInfoResponse } from './CotatoPolicyInfoResponse.js';
import {
    CotatoPolicyInfoResponseFromJSON,
    CotatoPolicyInfoResponseFromJSONTyped,
    CotatoPolicyInfoResponseToJSON,
} from './CotatoPolicyInfoResponse.js';

/**
 * 
 * @export
 * @interface CotatoPoliciesResponse
 */
export interface CotatoPoliciesResponse {
    /**
     * 
     * @type {Array<CotatoPolicyInfoResponse>}
     * @memberof CotatoPoliciesResponse
     */
    policies?: Array<CotatoPolicyInfoResponse>;
}

/**
 * Check if a given object implements the CotatoPoliciesResponse interface.
 */
export function instanceOfCotatoPoliciesResponse(value: object): value is CotatoPoliciesResponse {
    return true;
}

export function CotatoPoliciesResponseFromJSON(json: any): CotatoPoliciesResponse {
    return CotatoPoliciesResponseFromJSONTyped(json, false);
}

export function CotatoPoliciesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoPoliciesResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'policies': json['policies'] == null ? undefined : ((json['policies'] as Array<any>).map(CotatoPolicyInfoResponseFromJSON)),
    };
}

export function CotatoPoliciesResponseToJSON(value?: CotatoPoliciesResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'policies': value['policies'] == null ? undefined : ((value['policies'] as Array<any>).map(CotatoPolicyInfoResponseToJSON)),
    };
}

