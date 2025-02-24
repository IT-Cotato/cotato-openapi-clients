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
 * @interface CotatoQuizResultInfo
 */
export interface CotatoQuizResultInfo {
    /**
     * 
     * @type {number}
     * @memberof CotatoQuizResultInfo
     */
    quizId?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoQuizResultInfo
     */
    quizNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoQuizResultInfo
     */
    scorerId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoQuizResultInfo
     */
    scorerName?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoQuizResultInfo
     */
    backFourNumber?: string;
}

/**
 * Check if a given object implements the CotatoQuizResultInfo interface.
 */
export function instanceOfCotatoQuizResultInfo(value: object): value is CotatoQuizResultInfo {
    return true;
}

export function CotatoQuizResultInfoFromJSON(json: any): CotatoQuizResultInfo {
    return CotatoQuizResultInfoFromJSONTyped(json, false);
}

export function CotatoQuizResultInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoQuizResultInfo {
    if (json == null) {
        return json;
    }
    return {
        
        'quizId': json['quizId'] == null ? undefined : json['quizId'],
        'quizNumber': json['quizNumber'] == null ? undefined : json['quizNumber'],
        'scorerId': json['scorerId'] == null ? undefined : json['scorerId'],
        'scorerName': json['scorerName'] == null ? undefined : json['scorerName'],
        'backFourNumber': json['backFourNumber'] == null ? undefined : json['backFourNumber'],
    };
}

export function CotatoQuizResultInfoToJSON(value?: CotatoQuizResultInfo | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'quizId': value['quizId'],
        'quizNumber': value['quizNumber'],
        'scorerId': value['scorerId'],
        'scorerName': value['scorerName'],
        'backFourNumber': value['backFourNumber'],
    };
}

