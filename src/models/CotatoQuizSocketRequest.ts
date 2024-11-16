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
 * @interface CotatoQuizSocketRequest
 */
export interface CotatoQuizSocketRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoQuizSocketRequest
     */
    quizId: number;
}

/**
 * Check if a given object implements the CotatoQuizSocketRequest interface.
 */
export function instanceOfCotatoQuizSocketRequest(value: object): value is CotatoQuizSocketRequest {
    if (!('quizId' in value) || value['quizId'] === undefined) return false;
    return true;
}

export function CotatoQuizSocketRequestFromJSON(json: any): CotatoQuizSocketRequest {
    return CotatoQuizSocketRequestFromJSONTyped(json, false);
}

export function CotatoQuizSocketRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoQuizSocketRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'quizId': json['quizId'],
    };
}

export function CotatoQuizSocketRequestToJSON(value?: CotatoQuizSocketRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'quizId': value['quizId'],
    };
}

