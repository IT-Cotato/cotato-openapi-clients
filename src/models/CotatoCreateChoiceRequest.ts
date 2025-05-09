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
 * @interface CotatoCreateChoiceRequest
 */
export interface CotatoCreateChoiceRequest {
    /**
     * 
     * @type {string}
     * @memberof CotatoCreateChoiceRequest
     */
    content?: string;
    /**
     * 
     * @type {number}
     * @memberof CotatoCreateChoiceRequest
     */
    number?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoCreateChoiceRequest
     */
    isAnswer?: CotatoCreateChoiceRequestIsAnswerEnum;
}


/**
 * @export
 */
export const CotatoCreateChoiceRequestIsAnswerEnum = {
    Answer: 'ANSWER',
    NoAnswer: 'NO_ANSWER',
    Secret: 'SECRET'
} as const;
export type CotatoCreateChoiceRequestIsAnswerEnum = typeof CotatoCreateChoiceRequestIsAnswerEnum[keyof typeof CotatoCreateChoiceRequestIsAnswerEnum];


/**
 * Check if a given object implements the CotatoCreateChoiceRequest interface.
 */
export function instanceOfCotatoCreateChoiceRequest(value: object): value is CotatoCreateChoiceRequest {
    return true;
}

export function CotatoCreateChoiceRequestFromJSON(json: any): CotatoCreateChoiceRequest {
    return CotatoCreateChoiceRequestFromJSONTyped(json, false);
}

export function CotatoCreateChoiceRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoCreateChoiceRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'content': json['content'] == null ? undefined : json['content'],
        'number': json['number'] == null ? undefined : json['number'],
        'isAnswer': json['isAnswer'] == null ? undefined : json['isAnswer'],
    };
}

export function CotatoCreateChoiceRequestToJSON(value?: CotatoCreateChoiceRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'content': value['content'],
        'number': value['number'],
        'isAnswer': value['isAnswer'],
    };
}

