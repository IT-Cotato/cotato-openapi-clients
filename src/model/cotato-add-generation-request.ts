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



/**
 * 
 * @export
 * @interface CotatoAddGenerationRequest
 */
export interface CotatoAddGenerationRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoAddGenerationRequest
     */
    'generationNumber': number;
    /**
     * 
     * @type {string}
     * @memberof CotatoAddGenerationRequest
     */
    'startDate': string;
    /**
     * 
     * @type {string}
     * @memberof CotatoAddGenerationRequest
     */
    'endDate': string;
    /**
     * 
     * @type {number}
     * @memberof CotatoAddGenerationRequest
     */
    'sessionCount': number;
}

