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
import type { CotatoLoginPostRequest } from '../model';
/**
 * LoginEndpointApi - axios parameter creator
 * @export
 */
export const LoginEndpointApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {CotatoLoginPostRequest} [cotatoLoginPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPost: async (cotatoLoginPostRequest?: CotatoLoginPostRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/login`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoLoginPostRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * LoginEndpointApi - functional programming interface
 * @export
 */
export const LoginEndpointApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = LoginEndpointApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {CotatoLoginPostRequest} [cotatoLoginPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async loginPost(cotatoLoginPostRequest?: CotatoLoginPostRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.loginPost(cotatoLoginPostRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['LoginEndpointApi.loginPost']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * LoginEndpointApi - factory interface
 * @export
 */
export const LoginEndpointApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = LoginEndpointApiFp(configuration)
    return {
        /**
         * 
         * @param {CotatoLoginPostRequest} [cotatoLoginPostRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        loginPost(cotatoLoginPostRequest?: CotatoLoginPostRequest, options?: any): AxiosPromise<void> {
            return localVarFp.loginPost(cotatoLoginPostRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * LoginEndpointApi - object-oriented interface
 * @export
 * @class LoginEndpointApi
 * @extends {BaseAPI}
 */
export class LoginEndpointApi extends BaseAPI {
    /**
     * 
     * @param {CotatoLoginPostRequest} [cotatoLoginPostRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof LoginEndpointApi
     */
    public loginPost(cotatoLoginPostRequest?: CotatoLoginPostRequest, options?: RawAxiosRequestConfig) {
        return LoginEndpointApiFp(this.configuration).loginPost(cotatoLoginPostRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
