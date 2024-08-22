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
 * @interface CotatoReplyRequest
 */
export interface CotatoReplyRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoReplyRequest
     */
    quizId: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoReplyRequest
     */
    memberId: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof CotatoReplyRequest
     */
    inputs: Array<string>;
}

/**
 * Check if a given object implements the CotatoReplyRequest interface.
 */
export function instanceOfCotatoReplyRequest(value: object): value is CotatoReplyRequest {
    if (!('quizId' in value) || value['quizId'] === undefined) return false;
    if (!('memberId' in value) || value['memberId'] === undefined) return false;
    if (!('inputs' in value) || value['inputs'] === undefined) return false;
    return true;
}

export function CotatoReplyRequestFromJSON(json: any): CotatoReplyRequest {
    return CotatoReplyRequestFromJSONTyped(json, false);
}

export function CotatoReplyRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoReplyRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'quizId': json['quizId'],
        'memberId': json['memberId'],
        'inputs': json['inputs'],
    };
}

export function CotatoReplyRequestToJSON(value?: CotatoReplyRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'quizId': value['quizId'],
        'memberId': value['memberId'],
        'inputs': value['inputs'],
    };
}

