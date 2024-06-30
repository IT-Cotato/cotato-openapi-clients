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


// May contain unused imports in some cases
// @ts-ignore
import type { CotatoShortAnswerResponse } from './cotato-short-answer-response';

/**
 * 
 * @export
 * @interface CotatoShortQuizResponse
 */
export interface CotatoShortQuizResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoShortQuizResponse
     */
    'id'?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoShortQuizResponse
     */
    'number'?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoShortQuizResponse
     */
    'question'?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoShortQuizResponse
     */
    'image'?: string;
    /**
     * 
     * @type {Array<CotatoShortAnswerResponse>}
     * @memberof CotatoShortQuizResponse
     */
    'shortAnswers'?: Array<CotatoShortAnswerResponse>;
}

