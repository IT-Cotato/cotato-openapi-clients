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
import type { CotatoUpdateSessionImageOrderInfoRequest } from './cotato-update-session-image-order-info-request';

/**
 * 
 * @export
 * @interface CotatoUpdateSessionImageOrderRequest
 */
export interface CotatoUpdateSessionImageOrderRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoUpdateSessionImageOrderRequest
     */
    'sessionId'?: number;
    /**
     * 
     * @type {Array<CotatoUpdateSessionImageOrderInfoRequest>}
     * @memberof CotatoUpdateSessionImageOrderRequest
     */
    'orderInfos'?: Array<CotatoUpdateSessionImageOrderInfoRequest>;
}

