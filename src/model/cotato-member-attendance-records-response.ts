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
import type { CotatoMemberAttendResponse } from './cotato-member-attend-response';

/**
 * 
 * @export
 * @interface CotatoMemberAttendanceRecordsResponse
 */
export interface CotatoMemberAttendanceRecordsResponse {
    /**
     * 요청한 기수 PK
     * @type {number}
     * @memberof CotatoMemberAttendanceRecordsResponse
     */
    'generationId'?: number;
    /**
     * 
     * @type {Array<CotatoMemberAttendResponse>}
     * @memberof CotatoMemberAttendanceRecordsResponse
     */
    'memberAttendResponses'?: Array<CotatoMemberAttendResponse>;
}

