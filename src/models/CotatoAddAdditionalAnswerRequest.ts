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
 * @interface CotatoAddAdditionalAnswerRequest
 */
export interface CotatoAddAdditionalAnswerRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoAddAdditionalAnswerRequest
     */
    quizId: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoAddAdditionalAnswerRequest
     */
    answer: string;
}

/**
 * Check if a given object implements the CotatoAddAdditionalAnswerRequest interface.
 */
export function instanceOfCotatoAddAdditionalAnswerRequest(value: object): value is CotatoAddAdditionalAnswerRequest {
    if (!('quizId' in value) || value['quizId'] === undefined) return false;
    if (!('answer' in value) || value['answer'] === undefined) return false;
    return true;
}

export function CotatoAddAdditionalAnswerRequestFromJSON(json: any): CotatoAddAdditionalAnswerRequest {
    return CotatoAddAdditionalAnswerRequestFromJSONTyped(json, false);
}

export function CotatoAddAdditionalAnswerRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoAddAdditionalAnswerRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'quizId': json['quizId'],
        'answer': json['answer'],
    };
}

export function CotatoAddAdditionalAnswerRequestToJSON(value?: CotatoAddAdditionalAnswerRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'quizId': value['quizId'],
        'answer': value['answer'],
    };
}

