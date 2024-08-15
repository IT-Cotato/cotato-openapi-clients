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
 * @interface CotatoCheckPolicyRequest
 */
export interface CotatoCheckPolicyRequest {
    /**
     * 체크할 정책 PK
     * @type {number}
     * @memberof CotatoCheckPolicyRequest
     */
    'policyId': number;
    /**
     * 정책 동의 여부
     * @type {boolean}
     * @memberof CotatoCheckPolicyRequest
     */
    'isChecked': boolean;
}

