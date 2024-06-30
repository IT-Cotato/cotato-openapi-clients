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
import type { CotatoFindPasswordResponse } from '../model';
// @ts-ignore
import type { CotatoJoinRequest } from '../model';
// @ts-ignore
import type { CotatoLogoutRequest } from '../model';
// @ts-ignore
import type { CotatoMemberEmailResponse } from '../model';
// @ts-ignore
import type { CotatoReissueResponse } from '../model';
// @ts-ignore
import type { CotatoSendEmailRequest } from '../model';
/**
 * AuthControllerApi - axios parameter creator
 * @export
 */
export const AuthControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {string} name 
         * @param {string} phone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEmail: async (name: string, phone: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'name' is not null or undefined
            assertParamExists('findEmail', 'name', name)
            // verify required parameter 'phone' is not null or undefined
            assertParamExists('findEmail', 'phone', phone)
            const localVarPath = `/v1/api/auth/email`;
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

            if (name !== undefined) {
                localVarQueryParameter['name'] = name;
            }

            if (phone !== undefined) {
                localVarQueryParameter['phone'] = phone;
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
         * @param {CotatoJoinRequest} cotatoJoinRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        joinAuth: async (cotatoJoinRequest: CotatoJoinRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cotatoJoinRequest' is not null or undefined
            assertParamExists('joinAuth', 'cotatoJoinRequest', cotatoJoinRequest)
            const localVarPath = `/v1/api/auth/join`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoJoinRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} refreshToken 
         * @param {CotatoLogoutRequest} cotatoLogoutRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout: async (refreshToken: string, cotatoLogoutRequest: CotatoLogoutRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'refreshToken' is not null or undefined
            assertParamExists('logout', 'refreshToken', refreshToken)
            // verify required parameter 'cotatoLogoutRequest' is not null or undefined
            assertParamExists('logout', 'cotatoLogoutRequest', cotatoLogoutRequest)
            const localVarPath = `/v1/api/auth/logout`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoLogoutRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CotatoSendEmailRequest} cotatoSendEmailRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSignUpVerificationCode1: async (cotatoSendEmailRequest: CotatoSendEmailRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cotatoSendEmailRequest' is not null or undefined
            assertParamExists('sendSignUpVerificationCode1', 'cotatoSendEmailRequest', cotatoSendEmailRequest)
            const localVarPath = `/v1/api/auth/verification`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoSendEmailRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {string} refreshToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenReissue: async (refreshToken: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'refreshToken' is not null or undefined
            assertParamExists('tokenReissue', 'refreshToken', refreshToken)
            const localVarPath = `/v1/api/auth/reissue`;
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
         * @param {string} email 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyCode1: async (email: string, code: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'email' is not null or undefined
            assertParamExists('verifyCode1', 'email', email)
            // verify required parameter 'code' is not null or undefined
            assertParamExists('verifyCode1', 'code', code)
            const localVarPath = `/v1/api/auth/verification`;
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

            if (email !== undefined) {
                localVarQueryParameter['email'] = email;
            }

            if (code !== undefined) {
                localVarQueryParameter['code'] = code;
            }


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * AuthControllerApi - functional programming interface
 * @export
 */
export const AuthControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = AuthControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {string} name 
         * @param {string} phone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findEmail(name: string, phone: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoMemberEmailResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findEmail(name, phone, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.findEmail']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CotatoJoinRequest} cotatoJoinRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async joinAuth(cotatoJoinRequest: CotatoJoinRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.joinAuth(cotatoJoinRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.joinAuth']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} refreshToken 
         * @param {CotatoLogoutRequest} cotatoLogoutRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async logout(refreshToken: string, cotatoLogoutRequest: CotatoLogoutRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.logout(refreshToken, cotatoLogoutRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.logout']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CotatoSendEmailRequest} cotatoSendEmailRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sendSignUpVerificationCode1(cotatoSendEmailRequest: CotatoSendEmailRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sendSignUpVerificationCode1(cotatoSendEmailRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.sendSignUpVerificationCode1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} refreshToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async tokenReissue(refreshToken: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoReissueResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.tokenReissue(refreshToken, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.tokenReissue']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {string} email 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async verifyCode1(email: string, code: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoFindPasswordResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.verifyCode1(email, code, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['AuthControllerApi.verifyCode1']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * AuthControllerApi - factory interface
 * @export
 */
export const AuthControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = AuthControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {string} name 
         * @param {string} phone 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEmail(name: string, phone: string, options?: any): AxiosPromise<CotatoMemberEmailResponse> {
            return localVarFp.findEmail(name, phone, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CotatoJoinRequest} cotatoJoinRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        joinAuth(cotatoJoinRequest: CotatoJoinRequest, options?: any): AxiosPromise<void> {
            return localVarFp.joinAuth(cotatoJoinRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} refreshToken 
         * @param {CotatoLogoutRequest} cotatoLogoutRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        logout(refreshToken: string, cotatoLogoutRequest: CotatoLogoutRequest, options?: any): AxiosPromise<void> {
            return localVarFp.logout(refreshToken, cotatoLogoutRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CotatoSendEmailRequest} cotatoSendEmailRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sendSignUpVerificationCode1(cotatoSendEmailRequest: CotatoSendEmailRequest, options?: any): AxiosPromise<void> {
            return localVarFp.sendSignUpVerificationCode1(cotatoSendEmailRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} refreshToken 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        tokenReissue(refreshToken: string, options?: any): AxiosPromise<CotatoReissueResponse> {
            return localVarFp.tokenReissue(refreshToken, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {string} email 
         * @param {string} code 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        verifyCode1(email: string, code: string, options?: any): AxiosPromise<CotatoFindPasswordResponse> {
            return localVarFp.verifyCode1(email, code, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * AuthControllerApi - object-oriented interface
 * @export
 * @class AuthControllerApi
 * @extends {BaseAPI}
 */
export class AuthControllerApi extends BaseAPI {
    /**
     * 
     * @param {string} name 
     * @param {string} phone 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public findEmail(name: string, phone: string, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).findEmail(name, phone, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CotatoJoinRequest} cotatoJoinRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public joinAuth(cotatoJoinRequest: CotatoJoinRequest, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).joinAuth(cotatoJoinRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} refreshToken 
     * @param {CotatoLogoutRequest} cotatoLogoutRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public logout(refreshToken: string, cotatoLogoutRequest: CotatoLogoutRequest, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).logout(refreshToken, cotatoLogoutRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CotatoSendEmailRequest} cotatoSendEmailRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public sendSignUpVerificationCode1(cotatoSendEmailRequest: CotatoSendEmailRequest, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).sendSignUpVerificationCode1(cotatoSendEmailRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} refreshToken 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public tokenReissue(refreshToken: string, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).tokenReissue(refreshToken, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {string} email 
     * @param {string} code 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof AuthControllerApi
     */
    public verifyCode1(email: string, code: string, options?: RawAxiosRequestConfig) {
        return AuthControllerApiFp(this.configuration).verifyCode1(email, code, options).then((request) => request(this.axios, this.basePath));
    }
}

