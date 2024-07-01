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


import type { Configuration } from '../configuration';
import type { AxiosPromise, AxiosInstance, RawAxiosRequestConfig } from 'axios';
import globalAxios from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, type RequestArgs, BaseAPI, RequiredError, operationServerMap } from '../base';
// @ts-ignore
import type { CotatoMemberInfoResponse } from '../model';
// @ts-ignore
import type { CotatoMemberMyPageInfoResponse } from '../model';
// @ts-ignore
import type { CotatoUpdatePasswordRequest } from '../model';
/**
 * MemberControllerApi - axios parameter creator
 * @export
 */
export const MemberControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findMemberInfo: async (authorization: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('findMemberInfo', 'authorization', authorization)
            const localVarPath = `/v1/api/member/info`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} memberId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findMyPageInfo: async (memberId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'memberId' is not null or undefined
            assertParamExists('findMyPageInfo', 'memberId', memberId)
            const localVarPath = `/v1/api/member/{memberId}/mypage`
                .replace(`{${"memberId"}}`, encodeURIComponent(String(memberId)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} authorization 
         * @param {CotatoUpdatePasswordRequest} cotatoUpdatePasswordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePassword: async (authorization: string, cotatoUpdatePasswordRequest: CotatoUpdatePasswordRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'authorization' is not null or undefined
            assertParamExists('updatePassword', 'authorization', authorization)
            // verify required parameter 'cotatoUpdatePasswordRequest' is not null or undefined
            assertParamExists('updatePassword', 'cotatoUpdatePasswordRequest', cotatoUpdatePasswordRequest)
            const localVarPath = `/v1/api/member/update/password`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)

            if (authorization != null) {
                localVarHeaderParameter['Authorization'] = String(authorization);
            }


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoUpdatePasswordRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * MemberControllerApi - functional programming interface
 * @export
 */
export const MemberControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = MemberControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findMemberInfo(authorization: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoMemberInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findMemberInfo(authorization, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MemberControllerApi.findMemberInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} memberId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findMyPageInfo(memberId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoMemberMyPageInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findMyPageInfo(memberId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MemberControllerApi.findMyPageInfo']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} authorization 
         * @param {CotatoUpdatePasswordRequest} cotatoUpdatePasswordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updatePassword(authorization: string, cotatoUpdatePasswordRequest: CotatoUpdatePasswordRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updatePassword(authorization, cotatoUpdatePasswordRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['MemberControllerApi.updatePassword']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * MemberControllerApi - factory interface
 * @export
 */
export const MemberControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = MemberControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} authorization 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findMemberInfo(authorization: string, options?: any): AxiosPromise<CotatoMemberInfoResponse> {
            return localVarFp.findMemberInfo(authorization, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} memberId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findMyPageInfo(memberId: number, options?: any): AxiosPromise<CotatoMemberMyPageInfoResponse> {
            return localVarFp.findMyPageInfo(memberId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} authorization 
         * @param {CotatoUpdatePasswordRequest} cotatoUpdatePasswordRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updatePassword(authorization: string, cotatoUpdatePasswordRequest: CotatoUpdatePasswordRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updatePassword(authorization, cotatoUpdatePasswordRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * MemberControllerApi - object-oriented interface
 * @export
 * @class MemberControllerApi
 * @extends {BaseAPI}
 */
export class MemberControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} authorization 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MemberControllerApi
     */
    public findMemberInfo(authorization: string, options?: RawAxiosRequestConfig) {
        return MemberControllerApiFp(this.configuration).findMemberInfo(authorization, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} memberId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MemberControllerApi
     */
    public findMyPageInfo(memberId: number, options?: RawAxiosRequestConfig) {
        return MemberControllerApiFp(this.configuration).findMyPageInfo(memberId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} authorization 
     * @param {CotatoUpdatePasswordRequest} cotatoUpdatePasswordRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof MemberControllerApi
     */
    public updatePassword(authorization: string, cotatoUpdatePasswordRequest: CotatoUpdatePasswordRequest, options?: RawAxiosRequestConfig) {
        return MemberControllerApiFp(this.configuration).updatePassword(authorization, cotatoUpdatePasswordRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
