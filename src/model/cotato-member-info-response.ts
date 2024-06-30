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
 * @interface CotatoMemberInfoResponse
 */
export interface CotatoMemberInfoResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoMemberInfoResponse
     */
    'memberId'?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoMemberInfoResponse
     */
    'memberName'?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoMemberInfoResponse
     */
    'backFourNumber'?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoMemberInfoResponse
     */
    'role'?: CotatoMemberInfoResponseRoleEnum;
}

export const CotatoMemberInfoResponseRoleEnum = {
    Refused: 'REFUSED',
    General: 'GENERAL',
    Member: 'MEMBER',
    OldMember: 'OLD_MEMBER',
    Admin: 'ADMIN',
    Education: 'EDUCATION'
} as const;

export type CotatoMemberInfoResponseRoleEnum = typeof CotatoMemberInfoResponseRoleEnum[keyof typeof CotatoMemberInfoResponseRoleEnum];


