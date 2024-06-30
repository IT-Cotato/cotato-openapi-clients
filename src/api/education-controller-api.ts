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
import type { CotatoAllEducationResponse } from '../model';
// @ts-ignore
import type { CotatoCreateEducationRequest } from '../model';
// @ts-ignore
import type { CotatoCreateEducationResponse } from '../model';
// @ts-ignore
import type { CotatoEducationIdOfQuizResponse } from '../model';
// @ts-ignore
import type { CotatoFindEducationStatusResponse } from '../model';
// @ts-ignore
import type { CotatoKingMemberInfo } from '../model';
// @ts-ignore
import type { CotatoUpdateEducationRequest } from '../model';
// @ts-ignore
import type { CotatoWinnerInfoResponse } from '../model';
/**
 * EducationControllerApi - axios parameter creator
 * @export
 */
export const EducationControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateKingMembers: async (educationId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'educationId' is not null or undefined
            assertParamExists('calculateKingMembers', 'educationId', educationId)
            const localVarPath = `/v1/api/education/kings`;
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

            if (educationId !== undefined) {
                localVarQueryParameter['educationId'] = educationId;
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
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateWinner: async (educationId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'educationId' is not null or undefined
            assertParamExists('calculateWinner', 'educationId', educationId)
            const localVarPath = `/v1/api/education/winner`;
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

            if (educationId !== undefined) {
                localVarQueryParameter['educationId'] = educationId;
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
         * @param {CotatoCreateEducationRequest} cotatoCreateEducationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEducation: async (cotatoCreateEducationRequest: CotatoCreateEducationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cotatoCreateEducationRequest' is not null or undefined
            assertParamExists('createEducation', 'cotatoCreateEducationRequest', cotatoCreateEducationRequest)
            const localVarPath = `/v1/api/education/add`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoCreateEducationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} quizId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEducationId: async (quizId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'quizId' is not null or undefined
            assertParamExists('findEducationId', 'quizId', quizId)
            const localVarPath = `/v1/api/education/from`;
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

            if (quizId !== undefined) {
                localVarQueryParameter['quizId'] = quizId;
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
         * @param {number} generationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEducationListByGeneration: async (generationId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'generationId' is not null or undefined
            assertParamExists('findEducationListByGeneration', 'generationId', generationId)
            const localVarPath = `/v1/api/education`;
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

            if (generationId !== undefined) {
                localVarQueryParameter['generationId'] = generationId;
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
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEducationStatus: async (educationId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'educationId' is not null or undefined
            assertParamExists('findEducationStatus', 'educationId', educationId)
            const localVarPath = `/v1/api/education/status`;
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

            if (educationId !== undefined) {
                localVarQueryParameter['educationId'] = educationId;
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
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findFinalKingMembers: async (educationId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'educationId' is not null or undefined
            assertParamExists('findFinalKingMembers', 'educationId', educationId)
            const localVarPath = `/v1/api/education/kings`;
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

            if (educationId !== undefined) {
                localVarQueryParameter['educationId'] = educationId;
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
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWinner: async (educationId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'educationId' is not null or undefined
            assertParamExists('findWinner', 'educationId', educationId)
            const localVarPath = `/v1/api/education/winner`;
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

            if (educationId !== undefined) {
                localVarQueryParameter['educationId'] = educationId;
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
         * @param {CotatoUpdateEducationRequest} cotatoUpdateEducationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEducation: async (cotatoUpdateEducationRequest: CotatoUpdateEducationRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cotatoUpdateEducationRequest' is not null or undefined
            assertParamExists('updateEducation', 'cotatoUpdateEducationRequest', cotatoUpdateEducationRequest)
            const localVarPath = `/v1/api/education/update`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoUpdateEducationRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * EducationControllerApi - functional programming interface
 * @export
 */
export const EducationControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = EducationControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async calculateKingMembers(educationId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.calculateKingMembers(educationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.calculateKingMembers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async calculateWinner(educationId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.calculateWinner(educationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.calculateWinner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CotatoCreateEducationRequest} cotatoCreateEducationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEducation(cotatoCreateEducationRequest: CotatoCreateEducationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoCreateEducationResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEducation(cotatoCreateEducationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.createEducation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} quizId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findEducationId(quizId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoEducationIdOfQuizResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findEducationId(quizId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.findEducationId']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} generationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findEducationListByGeneration(generationId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CotatoAllEducationResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findEducationListByGeneration(generationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.findEducationListByGeneration']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findEducationStatus(educationId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoFindEducationStatusResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findEducationStatus(educationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.findEducationStatus']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findFinalKingMembers(educationId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CotatoKingMemberInfo>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findFinalKingMembers(educationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.findFinalKingMembers']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findWinner(educationId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoWinnerInfoResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findWinner(educationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.findWinner']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CotatoUpdateEducationRequest} cotatoUpdateEducationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateEducation(cotatoUpdateEducationRequest: CotatoUpdateEducationRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateEducation(cotatoUpdateEducationRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['EducationControllerApi.updateEducation']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * EducationControllerApi - factory interface
 * @export
 */
export const EducationControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = EducationControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateKingMembers(educationId: number, options?: any): AxiosPromise<void> {
            return localVarFp.calculateKingMembers(educationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        calculateWinner(educationId: number, options?: any): AxiosPromise<void> {
            return localVarFp.calculateWinner(educationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CotatoCreateEducationRequest} cotatoCreateEducationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEducation(cotatoCreateEducationRequest: CotatoCreateEducationRequest, options?: any): AxiosPromise<CotatoCreateEducationResponse> {
            return localVarFp.createEducation(cotatoCreateEducationRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} quizId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEducationId(quizId: number, options?: any): AxiosPromise<CotatoEducationIdOfQuizResponse> {
            return localVarFp.findEducationId(quizId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} generationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEducationListByGeneration(generationId: number, options?: any): AxiosPromise<Array<CotatoAllEducationResponse>> {
            return localVarFp.findEducationListByGeneration(generationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findEducationStatus(educationId: number, options?: any): AxiosPromise<CotatoFindEducationStatusResponse> {
            return localVarFp.findEducationStatus(educationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findFinalKingMembers(educationId: number, options?: any): AxiosPromise<Array<CotatoKingMemberInfo>> {
            return localVarFp.findFinalKingMembers(educationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} educationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findWinner(educationId: number, options?: any): AxiosPromise<CotatoWinnerInfoResponse> {
            return localVarFp.findWinner(educationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CotatoUpdateEducationRequest} cotatoUpdateEducationRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateEducation(cotatoUpdateEducationRequest: CotatoUpdateEducationRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateEducation(cotatoUpdateEducationRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * EducationControllerApi - object-oriented interface
 * @export
 * @class EducationControllerApi
 * @extends {BaseAPI}
 */
export class EducationControllerApi extends BaseAPI {
    /**
     * 
     * @param {number} educationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public calculateKingMembers(educationId: number, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).calculateKingMembers(educationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} educationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public calculateWinner(educationId: number, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).calculateWinner(educationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CotatoCreateEducationRequest} cotatoCreateEducationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public createEducation(cotatoCreateEducationRequest: CotatoCreateEducationRequest, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).createEducation(cotatoCreateEducationRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} quizId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public findEducationId(quizId: number, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).findEducationId(quizId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} generationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public findEducationListByGeneration(generationId: number, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).findEducationListByGeneration(generationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} educationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public findEducationStatus(educationId: number, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).findEducationStatus(educationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} educationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public findFinalKingMembers(educationId: number, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).findFinalKingMembers(educationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} educationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public findWinner(educationId: number, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).findWinner(educationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CotatoUpdateEducationRequest} cotatoUpdateEducationRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof EducationControllerApi
     */
    public updateEducation(cotatoUpdateEducationRequest: CotatoUpdateEducationRequest, options?: RawAxiosRequestConfig) {
        return EducationControllerApiFp(this.configuration).updateEducation(cotatoUpdateEducationRequest, options).then((request) => request(this.axios, this.basePath));
    }
}

