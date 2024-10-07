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
import type { CotatoCheckPolicyRequest } from './CotatoCheckPolicyRequest.js';
import {
    CotatoCheckPolicyRequestFromJSON,
    CotatoCheckPolicyRequestFromJSONTyped,
    CotatoCheckPolicyRequestToJSON,
} from './CotatoCheckPolicyRequest.js';

/**
 * 
 * @export
 * @interface CotatoJoinRequest
 */
export interface CotatoJoinRequest {
    /**
     * 
     * @type {string}
     * @memberof CotatoJoinRequest
     */
    email: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoJoinRequest
     */
    password: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoJoinRequest
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoJoinRequest
     */
    phoneNumber: string;
    /**
     * 동의 표시한 정책 목록
     * @type {Array<CotatoCheckPolicyRequest>}
     * @memberof CotatoJoinRequest
     */
    policies?: Array<CotatoCheckPolicyRequest>;
}

/**
 * Check if a given object implements the CotatoJoinRequest interface.
 */
export function instanceOfCotatoJoinRequest(value: object): value is CotatoJoinRequest {
    if (!('email' in value) || value['email'] === undefined) return false;
    if (!('password' in value) || value['password'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('phoneNumber' in value) || value['phoneNumber'] === undefined) return false;
    return true;
}

export function CotatoJoinRequestFromJSON(json: any): CotatoJoinRequest {
    return CotatoJoinRequestFromJSONTyped(json, false);
}

export function CotatoJoinRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoJoinRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'email': json['email'],
        'password': json['password'],
        'name': json['name'],
        'phoneNumber': json['phoneNumber'],
        'policies': json['policies'] == null ? undefined : ((json['policies'] as Array<any>).map(CotatoCheckPolicyRequestFromJSON)),
    };
}

export function CotatoJoinRequestToJSON(value?: CotatoJoinRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'email': value['email'],
        'password': value['password'],
        'name': value['name'],
        'phoneNumber': value['phoneNumber'],
        'policies': value['policies'] == null ? undefined : ((value['policies'] as Array<any>).map(CotatoCheckPolicyRequestToJSON)),
    };
}

