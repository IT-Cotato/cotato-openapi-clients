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
import type { CotatoAttendanceResponse } from './cotato-attendance-response';

/**
 * 
 * @export
 * @interface CotatoAttendancesResponse
 */
export interface CotatoAttendancesResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendancesResponse
     */
    'generationId'?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoAttendancesResponse
     */
    'generationNumber'?: number;
    /**
     * 
     * @type {Array<CotatoAttendanceResponse>}
     * @memberof CotatoAttendancesResponse
     */
    'attendances'?: Array<CotatoAttendanceResponse>;
}
