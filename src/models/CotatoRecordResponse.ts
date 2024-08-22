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

import { mapValues } from '../runtime.js';
/**
 * 
 * @export
 * @interface CotatoRecordResponse
 */
export interface CotatoRecordResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoRecordResponse
     */
    recordId?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoRecordResponse
     */
    ticketNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoRecordResponse
     */
    memberId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoRecordResponse
     */
    memberName?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoRecordResponse
     */
    backFourNumber?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoRecordResponse
     */
    reply?: string;
}

/**
 * Check if a given object implements the CotatoRecordResponse interface.
 */
export function instanceOfCotatoRecordResponse(value: object): value is CotatoRecordResponse {
    return true;
}

export function CotatoRecordResponseFromJSON(json: any): CotatoRecordResponse {
    return CotatoRecordResponseFromJSONTyped(json, false);
}

export function CotatoRecordResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoRecordResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'recordId': json['recordId'] == null ? undefined : json['recordId'],
        'ticketNumber': json['ticketNumber'] == null ? undefined : json['ticketNumber'],
        'memberId': json['memberId'] == null ? undefined : json['memberId'],
        'memberName': json['memberName'] == null ? undefined : json['memberName'],
        'backFourNumber': json['backFourNumber'] == null ? undefined : json['backFourNumber'],
        'reply': json['reply'] == null ? undefined : json['reply'],
    };
}

export function CotatoRecordResponseToJSON(value?: CotatoRecordResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'recordId': value['recordId'],
        'ticketNumber': value['ticketNumber'],
        'memberId': value['memberId'],
        'memberName': value['memberName'],
        'backFourNumber': value['backFourNumber'],
        'reply': value['reply'],
    };
}

