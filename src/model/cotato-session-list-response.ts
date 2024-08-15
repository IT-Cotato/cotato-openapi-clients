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
import type { CotatoSessionContents } from './cotato-session-contents';
// May contain unused imports in some cases
// @ts-ignore
import type { CotatoSessionListImageInfoResponse } from './cotato-session-list-image-info-response';

/**
 * 
 * @export
 * @interface CotatoSessionListResponse
 */
export interface CotatoSessionListResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoSessionListResponse
     */
    'sessionId'?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoSessionListResponse
     */
    'sessionNumber'?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoSessionListResponse
     */
    'title'?: string;
    /**
     * 
     * @type {Array<CotatoSessionListImageInfoResponse>}
     * @memberof CotatoSessionListResponse
     */
    'imageInfos'?: Array<CotatoSessionListImageInfoResponse>;
    /**
     * 
     * @type {string}
     * @memberof CotatoSessionListResponse
     */
    'description'?: string;
    /**
     * 
     * @type {number}
     * @memberof CotatoSessionListResponse
     */
    'generationId'?: number;
    /**
     * 
     * @type {CotatoSessionContents}
     * @memberof CotatoSessionListResponse
     */
    'sessionContents'?: CotatoSessionContents;
}

