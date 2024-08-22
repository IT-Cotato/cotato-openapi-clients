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
 * @interface CotatoSseEmitter
 */
export interface CotatoSseEmitter {
    /**
     * 
     * @type {number}
     * @memberof CotatoSseEmitter
     */
    timeout?: number;
}

/**
 * Check if a given object implements the CotatoSseEmitter interface.
 */
export function instanceOfCotatoSseEmitter(value: object): value is CotatoSseEmitter {
    return true;
}

export function CotatoSseEmitterFromJSON(json: any): CotatoSseEmitter {
    return CotatoSseEmitterFromJSONTyped(json, false);
}

export function CotatoSseEmitterFromJSONTyped(json: any, ignoreDiscriminator: boolean): CotatoSseEmitter {
    if (json == null) {
        return json;
    }
    return {
        
        'timeout': json['timeout'] == null ? undefined : json['timeout'],
    };
}

export function CotatoSseEmitterToJSON(value?: CotatoSseEmitter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'timeout': value['timeout'],
    };
}
