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
 * @interface CotatoUpdateSessionRequest
 */
export interface CotatoUpdateSessionRequest {
    /**
     * 
     * @type {number}
     * @memberof CotatoUpdateSessionRequest
     */
    'sessionId': number;
    /**
     * 
     * @type {string}
     * @memberof CotatoUpdateSessionRequest
     */
    'title'?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoUpdateSessionRequest
     */
    'description'?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoUpdateSessionRequest
     */
    'itIssue': CotatoUpdateSessionRequestItIssueEnum;
    /**
     * 
     * @type {string}
     * @memberof CotatoUpdateSessionRequest
     */
    'networking': CotatoUpdateSessionRequestNetworkingEnum;
    /**
     * 
     * @type {string}
     * @memberof CotatoUpdateSessionRequest
     */
    'csEducation': CotatoUpdateSessionRequestCsEducationEnum;
    /**
     * 
     * @type {string}
     * @memberof CotatoUpdateSessionRequest
     */
    'devTalk': CotatoUpdateSessionRequestDevTalkEnum;
}

export const CotatoUpdateSessionRequestItIssueEnum = {
    On: 'IT_ON',
    Off: 'IT_OFF'
} as const;

export type CotatoUpdateSessionRequestItIssueEnum = typeof CotatoUpdateSessionRequestItIssueEnum[keyof typeof CotatoUpdateSessionRequestItIssueEnum];
export const CotatoUpdateSessionRequestNetworkingEnum = {
    On: 'NW_ON',
    Off: 'NW_OFF'
} as const;

export type CotatoUpdateSessionRequestNetworkingEnum = typeof CotatoUpdateSessionRequestNetworkingEnum[keyof typeof CotatoUpdateSessionRequestNetworkingEnum];
export const CotatoUpdateSessionRequestCsEducationEnum = {
    On: 'CS_ON',
    Off: 'CS_OFF'
} as const;

export type CotatoUpdateSessionRequestCsEducationEnum = typeof CotatoUpdateSessionRequestCsEducationEnum[keyof typeof CotatoUpdateSessionRequestCsEducationEnum];
export const CotatoUpdateSessionRequestDevTalkEnum = {
    On: 'DEVTALK_ON',
    Off: 'DEVTALK_OFF'
} as const;

export type CotatoUpdateSessionRequestDevTalkEnum = typeof CotatoUpdateSessionRequestDevTalkEnum[keyof typeof CotatoUpdateSessionRequestDevTalkEnum];

