/* tslint:disable */
/* eslint-disable */
/**
 * COTATO 프로젝트 API 명세서
 * api 명세서
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime.js';
import type { CotatoProjectImageInfoResponse } from './CotatoProjectImageInfoResponse.js';
import {
    CotatoProjectImageInfoResponseFromJSON,
    CotatoProjectImageInfoResponseFromJSONTyped,
    CotatoProjectImageInfoResponseToJSON,
} from './CotatoProjectImageInfoResponse.js';
import type { CotatoProjectMemberInfoResponse } from './CotatoProjectMemberInfoResponse.js';
import {
    CotatoProjectMemberInfoResponseFromJSON,
    CotatoProjectMemberInfoResponseFromJSONTyped,
    CotatoProjectMemberInfoResponseToJSON,
} from './CotatoProjectMemberInfoResponse.js';

/**
 * 
 * @export
 * @interface CotatoProjectDetailResponse
 */
export interface CotatoProjectDetailResponse {
    /**
     * 
     * @type {number}
     * @memberof CotatoProjectDetailResponse
     */
    projectId?: number;
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectDetailResponse
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectDetailResponse
     */
    introduction?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectDetailResponse
     */
    githubUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectDetailResponse
     */
    behanceUrl?: string;
    /**
     * 
     * @type {string}
     * @memberof CotatoProjectDetailResponse
     */
    projectUrl?: string;
    /**
     * 
     * @type {number}
     * @memberof CotatoProjectDetailResponse
     */
    generationId?: number;
    /**
     * 
     * @type {number}
     * @memberof CotatoProjectDetailResponse
     */
    generationNumber?: number;
    /**
     * 
     * @type {Array<CotatoProjectImageInfoResponse>}
     * @memberof CotatoProjectDetailResponse
     */
    imageInfos?: Array<CotatoProjectImageInfoResponse>;
    /**
     * 
     * @type {Array<CotatoProjectMemberInfoResponse>}
     * @memberof CotatoProjectDetailResponse
     */
    memberInfos?: Array<CotatoProjectMemberInfoResponse>;
}

/**
 * Check if a given object implements the CotatoProjectDetailResponse interface.
 */
export function instanceOfCotatoProjectDetailResponse(value: object): value is CotatoProjectDetailResponse {
    return true;
}

export function CotatoProjectDetailResponseFromJSON(json: any): CotatoProjectDetailResponse {
    return CotatoProjectDetailResponseFromJSONTyped(json, false);
}

export function CotatoProjectDetailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoProjectDetailResponse {
    if (json == null) {
        return json;
    }
    return {
        
        'projectId': json['projectId'] == null ? undefined : json['projectId'],
        'name': json['name'] == null ? undefined : json['name'],
        'introduction': json['introduction'] == null ? undefined : json['introduction'],
        'githubUrl': json['githubUrl'] == null ? undefined : json['githubUrl'],
        'behanceUrl': json['behanceUrl'] == null ? undefined : json['behanceUrl'],
        'projectUrl': json['projectUrl'] == null ? undefined : json['projectUrl'],
        'generationId': json['generationId'] == null ? undefined : json['generationId'],
        'generationNumber': json['generationNumber'] == null ? undefined : json['generationNumber'],
        'imageInfos': json['imageInfos'] == null ? undefined : ((json['imageInfos'] as Array<any>).map(CotatoProjectImageInfoResponseFromJSON)),
        'memberInfos': json['memberInfos'] == null ? undefined : ((json['memberInfos'] as Array<any>).map(CotatoProjectMemberInfoResponseFromJSON)),
    };
}

export function CotatoProjectDetailResponseToJSON(value?: CotatoProjectDetailResponse | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'projectId': value['projectId'],
        'name': value['name'],
        'introduction': value['introduction'],
        'githubUrl': value['githubUrl'],
        'behanceUrl': value['behanceUrl'],
        'projectUrl': value['projectUrl'],
        'generationId': value['generationId'],
        'generationNumber': value['generationNumber'],
        'imageInfos': value['imageInfos'] == null ? undefined : ((value['imageInfos'] as Array<any>).map(CotatoProjectImageInfoResponseToJSON)),
        'memberInfos': value['memberInfos'] == null ? undefined : ((value['memberInfos'] as Array<any>).map(CotatoProjectMemberInfoResponseToJSON)),
    };
}

