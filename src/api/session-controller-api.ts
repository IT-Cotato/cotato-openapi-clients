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
import type { CotatoAddSessionResponse } from '../model';
// @ts-ignore
import type { CotatoCsEducationOnSessionNumberResponse } from '../model';
// @ts-ignore
import type { CotatoSessionListResponse } from '../model';
// @ts-ignore
import type { CotatoUpdateSessionDescriptionRequest } from '../model';
// @ts-ignore
import type { CotatoUpdateSessionNumberRequest } from '../model';
/**
 * SessionControllerApi - axios parameter creator
 * @export
 */
export const SessionControllerApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @param {number} generationId 
         * @param {string} title 
         * @param {string} description 
         * @param {File} [sessionImage] 
         * @param {AddSessionItIssueEnum} [itIssue] 
         * @param {AddSessionNetworkingEnum} [networking] 
         * @param {AddSessionCsEducationEnum} [csEducation] 
         * @param {AddSessionDevTalkEnum} [devTalk] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSession: async (generationId: number, title: string, description: string, sessionImage?: File, itIssue?: AddSessionItIssueEnum, networking?: AddSessionNetworkingEnum, csEducation?: AddSessionCsEducationEnum, devTalk?: AddSessionDevTalkEnum, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'generationId' is not null or undefined
            assertParamExists('addSession', 'generationId', generationId)
            // verify required parameter 'title' is not null or undefined
            assertParamExists('addSession', 'title', title)
            // verify required parameter 'description' is not null or undefined
            assertParamExists('addSession', 'description', description)
            const localVarPath = `/v1/api/session/add`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


            if (generationId !== undefined) { 
                localVarFormParams.append('generationId', generationId as any);
            }
    
            if (sessionImage !== undefined) { 
                localVarFormParams.append('sessionImage', sessionImage as any);
            }
    
            if (title !== undefined) { 
                localVarFormParams.append('title', title as any);
            }
    
            if (description !== undefined) { 
                localVarFormParams.append('description', description as any);
            }
    
            if (itIssue !== undefined) { 
                localVarFormParams.append('itIssue', itIssue as any);
            }
    
            if (networking !== undefined) { 
                localVarFormParams.append('networking', networking as any);
            }
    
            if (csEducation !== undefined) { 
                localVarFormParams.append('csEducation', csEducation as any);
            }
    
            if (devTalk !== undefined) { 
                localVarFormParams.append('devTalk', devTalk as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

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
        findAllCsOnSessionsByGenerationId: async (generationId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'generationId' is not null or undefined
            assertParamExists('findAllCsOnSessionsByGenerationId', 'generationId', generationId)
            const localVarPath = `/v1/api/session/cs-on`;
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
         * @param {number} generationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSessionsByGenerationId: async (generationId: number, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'generationId' is not null or undefined
            assertParamExists('findSessionsByGenerationId', 'generationId', generationId)
            const localVarPath = `/v1/api/session`;
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
         * @param {number} sessionId 
         * @param {boolean} isPhotoUpdated 
         * @param {UpdateSessionItIssueEnum} itIssue 
         * @param {UpdateSessionNetworkingEnum} networking 
         * @param {UpdateSessionCsEducationEnum} csEducation 
         * @param {UpdateSessionDevTalkEnum} devTalk 
         * @param {File} [sessionImage] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSession: async (sessionId: number, isPhotoUpdated: boolean, itIssue: UpdateSessionItIssueEnum, networking: UpdateSessionNetworkingEnum, csEducation: UpdateSessionCsEducationEnum, devTalk: UpdateSessionDevTalkEnum, sessionImage?: File, title?: string, description?: string, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('updateSession', 'sessionId', sessionId)
            // verify required parameter 'isPhotoUpdated' is not null or undefined
            assertParamExists('updateSession', 'isPhotoUpdated', isPhotoUpdated)
            // verify required parameter 'itIssue' is not null or undefined
            assertParamExists('updateSession', 'itIssue', itIssue)
            // verify required parameter 'networking' is not null or undefined
            assertParamExists('updateSession', 'networking', networking)
            // verify required parameter 'csEducation' is not null or undefined
            assertParamExists('updateSession', 'csEducation', csEducation)
            // verify required parameter 'devTalk' is not null or undefined
            assertParamExists('updateSession', 'devTalk', devTalk)
            const localVarPath = `/v1/api/session/update`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


            if (sessionId !== undefined) { 
                localVarFormParams.append('sessionId', sessionId as any);
            }
    
            if (sessionImage !== undefined) { 
                localVarFormParams.append('sessionImage', sessionImage as any);
            }
    
            if (isPhotoUpdated !== undefined) { 
                localVarFormParams.append('isPhotoUpdated', String(isPhotoUpdated) as any);
            }
    
            if (title !== undefined) { 
                localVarFormParams.append('title', title as any);
            }
    
            if (description !== undefined) { 
                localVarFormParams.append('description', description as any);
            }
    
            if (itIssue !== undefined) { 
                localVarFormParams.append('itIssue', itIssue as any);
            }
    
            if (networking !== undefined) { 
                localVarFormParams.append('networking', networking as any);
            }
    
            if (csEducation !== undefined) { 
                localVarFormParams.append('csEducation', csEducation as any);
            }
    
            if (devTalk !== undefined) { 
                localVarFormParams.append('devTalk', devTalk as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CotatoUpdateSessionDescriptionRequest} cotatoUpdateSessionDescriptionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSessionDescription: async (cotatoUpdateSessionDescriptionRequest: CotatoUpdateSessionDescriptionRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cotatoUpdateSessionDescriptionRequest' is not null or undefined
            assertParamExists('updateSessionDescription', 'cotatoUpdateSessionDescriptionRequest', cotatoUpdateSessionDescriptionRequest)
            const localVarPath = `/v1/api/session/description`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoUpdateSessionDescriptionRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {CotatoUpdateSessionNumberRequest} cotatoUpdateSessionNumberRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSessionNumber: async (cotatoUpdateSessionNumberRequest: CotatoUpdateSessionNumberRequest, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'cotatoUpdateSessionNumberRequest' is not null or undefined
            assertParamExists('updateSessionNumber', 'cotatoUpdateSessionNumberRequest', cotatoUpdateSessionNumberRequest)
            const localVarPath = `/v1/api/session/number`;
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
            localVarRequestOptions.data = serializeDataIfNeeded(cotatoUpdateSessionNumberRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @param {number} sessionId 
         * @param {File} [sessionImage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSessionPhoto: async (sessionId: number, sessionImage?: File, options: RawAxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'sessionId' is not null or undefined
            assertParamExists('updateSessionPhoto', 'sessionId', sessionId)
            const localVarPath = `/v1/api/session/update/photo`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new ((configuration && configuration.formDataCtor) || FormData)();

            // authentication bearerAuth required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


            if (sessionId !== undefined) { 
                localVarFormParams.append('sessionId', sessionId as any);
            }
    
            if (sessionImage !== undefined) { 
                localVarFormParams.append('sessionImage', sessionImage as any);
            }
    
    
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = localVarFormParams;

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SessionControllerApi - functional programming interface
 * @export
 */
export const SessionControllerApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SessionControllerApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @param {number} generationId 
         * @param {string} title 
         * @param {string} description 
         * @param {File} [sessionImage] 
         * @param {AddSessionItIssueEnum} [itIssue] 
         * @param {AddSessionNetworkingEnum} [networking] 
         * @param {AddSessionCsEducationEnum} [csEducation] 
         * @param {AddSessionDevTalkEnum} [devTalk] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async addSession(generationId: number, title: string, description: string, sessionImage?: File, itIssue?: AddSessionItIssueEnum, networking?: AddSessionNetworkingEnum, csEducation?: AddSessionCsEducationEnum, devTalk?: AddSessionDevTalkEnum, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CotatoAddSessionResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.addSession(generationId, title, description, sessionImage, itIssue, networking, csEducation, devTalk, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionControllerApi.addSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} generationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findAllCsOnSessionsByGenerationId(generationId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CotatoCsEducationOnSessionNumberResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findAllCsOnSessionsByGenerationId(generationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionControllerApi.findAllCsOnSessionsByGenerationId']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} generationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async findSessionsByGenerationId(generationId: number, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<CotatoSessionListResponse>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.findSessionsByGenerationId(generationId, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionControllerApi.findSessionsByGenerationId']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} sessionId 
         * @param {boolean} isPhotoUpdated 
         * @param {UpdateSessionItIssueEnum} itIssue 
         * @param {UpdateSessionNetworkingEnum} networking 
         * @param {UpdateSessionCsEducationEnum} csEducation 
         * @param {UpdateSessionDevTalkEnum} devTalk 
         * @param {File} [sessionImage] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSession(sessionId: number, isPhotoUpdated: boolean, itIssue: UpdateSessionItIssueEnum, networking: UpdateSessionNetworkingEnum, csEducation: UpdateSessionCsEducationEnum, devTalk: UpdateSessionDevTalkEnum, sessionImage?: File, title?: string, description?: string, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSession(sessionId, isPhotoUpdated, itIssue, networking, csEducation, devTalk, sessionImage, title, description, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionControllerApi.updateSession']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CotatoUpdateSessionDescriptionRequest} cotatoUpdateSessionDescriptionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSessionDescription(cotatoUpdateSessionDescriptionRequest: CotatoUpdateSessionDescriptionRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSessionDescription(cotatoUpdateSessionDescriptionRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionControllerApi.updateSessionDescription']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {CotatoUpdateSessionNumberRequest} cotatoUpdateSessionNumberRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSessionNumber(cotatoUpdateSessionNumberRequest: CotatoUpdateSessionNumberRequest, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSessionNumber(cotatoUpdateSessionNumberRequest, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionControllerApi.updateSessionNumber']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
        /**
         * 
         * @param {number} sessionId 
         * @param {File} [sessionImage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateSessionPhoto(sessionId: number, sessionImage?: File, options?: RawAxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateSessionPhoto(sessionId, sessionImage, options);
            const localVarOperationServerIndex = configuration?.serverIndex ?? 0;
            const localVarOperationServerBasePath = operationServerMap['SessionControllerApi.updateSessionPhoto']?.[localVarOperationServerIndex]?.url;
            return (axios, basePath) => createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration)(axios, localVarOperationServerBasePath || basePath);
        },
    }
};

/**
 * SessionControllerApi - factory interface
 * @export
 */
export const SessionControllerApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SessionControllerApiFp(configuration)
    return {
        /**
         * 
         * @param {number} generationId 
         * @param {string} title 
         * @param {string} description 
         * @param {File} [sessionImage] 
         * @param {AddSessionItIssueEnum} [itIssue] 
         * @param {AddSessionNetworkingEnum} [networking] 
         * @param {AddSessionCsEducationEnum} [csEducation] 
         * @param {AddSessionDevTalkEnum} [devTalk] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        addSession(generationId: number, title: string, description: string, sessionImage?: File, itIssue?: AddSessionItIssueEnum, networking?: AddSessionNetworkingEnum, csEducation?: AddSessionCsEducationEnum, devTalk?: AddSessionDevTalkEnum, options?: any): AxiosPromise<CotatoAddSessionResponse> {
            return localVarFp.addSession(generationId, title, description, sessionImage, itIssue, networking, csEducation, devTalk, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} generationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findAllCsOnSessionsByGenerationId(generationId: number, options?: any): AxiosPromise<Array<CotatoCsEducationOnSessionNumberResponse>> {
            return localVarFp.findAllCsOnSessionsByGenerationId(generationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} generationId 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        findSessionsByGenerationId(generationId: number, options?: any): AxiosPromise<Array<CotatoSessionListResponse>> {
            return localVarFp.findSessionsByGenerationId(generationId, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sessionId 
         * @param {boolean} isPhotoUpdated 
         * @param {UpdateSessionItIssueEnum} itIssue 
         * @param {UpdateSessionNetworkingEnum} networking 
         * @param {UpdateSessionCsEducationEnum} csEducation 
         * @param {UpdateSessionDevTalkEnum} devTalk 
         * @param {File} [sessionImage] 
         * @param {string} [title] 
         * @param {string} [description] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSession(sessionId: number, isPhotoUpdated: boolean, itIssue: UpdateSessionItIssueEnum, networking: UpdateSessionNetworkingEnum, csEducation: UpdateSessionCsEducationEnum, devTalk: UpdateSessionDevTalkEnum, sessionImage?: File, title?: string, description?: string, options?: any): AxiosPromise<void> {
            return localVarFp.updateSession(sessionId, isPhotoUpdated, itIssue, networking, csEducation, devTalk, sessionImage, title, description, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CotatoUpdateSessionDescriptionRequest} cotatoUpdateSessionDescriptionRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSessionDescription(cotatoUpdateSessionDescriptionRequest: CotatoUpdateSessionDescriptionRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateSessionDescription(cotatoUpdateSessionDescriptionRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {CotatoUpdateSessionNumberRequest} cotatoUpdateSessionNumberRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSessionNumber(cotatoUpdateSessionNumberRequest: CotatoUpdateSessionNumberRequest, options?: any): AxiosPromise<void> {
            return localVarFp.updateSessionNumber(cotatoUpdateSessionNumberRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @param {number} sessionId 
         * @param {File} [sessionImage] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateSessionPhoto(sessionId: number, sessionImage?: File, options?: any): AxiosPromise<void> {
            return localVarFp.updateSessionPhoto(sessionId, sessionImage, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SessionControllerApi - object-oriented interface
 * @export
 * @class SessionControllerApi
 * @extends {BaseAPI}
 */
export class SessionControllerApi extends BaseAPI {
    /**
     * 
     * @param {number} generationId 
     * @param {string} title 
     * @param {string} description 
     * @param {File} [sessionImage] 
     * @param {AddSessionItIssueEnum} [itIssue] 
     * @param {AddSessionNetworkingEnum} [networking] 
     * @param {AddSessionCsEducationEnum} [csEducation] 
     * @param {AddSessionDevTalkEnum} [devTalk] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionControllerApi
     */
    public addSession(generationId: number, title: string, description: string, sessionImage?: File, itIssue?: AddSessionItIssueEnum, networking?: AddSessionNetworkingEnum, csEducation?: AddSessionCsEducationEnum, devTalk?: AddSessionDevTalkEnum, options?: RawAxiosRequestConfig) {
        return SessionControllerApiFp(this.configuration).addSession(generationId, title, description, sessionImage, itIssue, networking, csEducation, devTalk, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} generationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionControllerApi
     */
    public findAllCsOnSessionsByGenerationId(generationId: number, options?: RawAxiosRequestConfig) {
        return SessionControllerApiFp(this.configuration).findAllCsOnSessionsByGenerationId(generationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} generationId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionControllerApi
     */
    public findSessionsByGenerationId(generationId: number, options?: RawAxiosRequestConfig) {
        return SessionControllerApiFp(this.configuration).findSessionsByGenerationId(generationId, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sessionId 
     * @param {boolean} isPhotoUpdated 
     * @param {UpdateSessionItIssueEnum} itIssue 
     * @param {UpdateSessionNetworkingEnum} networking 
     * @param {UpdateSessionCsEducationEnum} csEducation 
     * @param {UpdateSessionDevTalkEnum} devTalk 
     * @param {File} [sessionImage] 
     * @param {string} [title] 
     * @param {string} [description] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionControllerApi
     */
    public updateSession(sessionId: number, isPhotoUpdated: boolean, itIssue: UpdateSessionItIssueEnum, networking: UpdateSessionNetworkingEnum, csEducation: UpdateSessionCsEducationEnum, devTalk: UpdateSessionDevTalkEnum, sessionImage?: File, title?: string, description?: string, options?: RawAxiosRequestConfig) {
        return SessionControllerApiFp(this.configuration).updateSession(sessionId, isPhotoUpdated, itIssue, networking, csEducation, devTalk, sessionImage, title, description, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CotatoUpdateSessionDescriptionRequest} cotatoUpdateSessionDescriptionRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionControllerApi
     */
    public updateSessionDescription(cotatoUpdateSessionDescriptionRequest: CotatoUpdateSessionDescriptionRequest, options?: RawAxiosRequestConfig) {
        return SessionControllerApiFp(this.configuration).updateSessionDescription(cotatoUpdateSessionDescriptionRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {CotatoUpdateSessionNumberRequest} cotatoUpdateSessionNumberRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionControllerApi
     */
    public updateSessionNumber(cotatoUpdateSessionNumberRequest: CotatoUpdateSessionNumberRequest, options?: RawAxiosRequestConfig) {
        return SessionControllerApiFp(this.configuration).updateSessionNumber(cotatoUpdateSessionNumberRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @param {number} sessionId 
     * @param {File} [sessionImage] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SessionControllerApi
     */
    public updateSessionPhoto(sessionId: number, sessionImage?: File, options?: RawAxiosRequestConfig) {
        return SessionControllerApiFp(this.configuration).updateSessionPhoto(sessionId, sessionImage, options).then((request) => request(this.axios, this.basePath));
    }
}

/**
 * @export
 */
export const AddSessionItIssueEnum = {
    On: 'IT_ON',
    Off: 'IT_OFF'
} as const;
export type AddSessionItIssueEnum = typeof AddSessionItIssueEnum[keyof typeof AddSessionItIssueEnum];
/**
 * @export
 */
export const AddSessionNetworkingEnum = {
    On: 'NW_ON',
    Off: 'NW_OFF'
} as const;
export type AddSessionNetworkingEnum = typeof AddSessionNetworkingEnum[keyof typeof AddSessionNetworkingEnum];
/**
 * @export
 */
export const AddSessionCsEducationEnum = {
    On: 'CS_ON',
    Off: 'CS_OFF'
} as const;
export type AddSessionCsEducationEnum = typeof AddSessionCsEducationEnum[keyof typeof AddSessionCsEducationEnum];
/**
 * @export
 */
export const AddSessionDevTalkEnum = {
    On: 'DEVTALK_ON',
    Off: 'DEVTALK_OFF'
} as const;
export type AddSessionDevTalkEnum = typeof AddSessionDevTalkEnum[keyof typeof AddSessionDevTalkEnum];
/**
 * @export
 */
export const UpdateSessionItIssueEnum = {
    On: 'IT_ON',
    Off: 'IT_OFF'
} as const;
export type UpdateSessionItIssueEnum = typeof UpdateSessionItIssueEnum[keyof typeof UpdateSessionItIssueEnum];
/**
 * @export
 */
export const UpdateSessionNetworkingEnum = {
    On: 'NW_ON',
    Off: 'NW_OFF'
} as const;
export type UpdateSessionNetworkingEnum = typeof UpdateSessionNetworkingEnum[keyof typeof UpdateSessionNetworkingEnum];
/**
 * @export
 */
export const UpdateSessionCsEducationEnum = {
    On: 'CS_ON',
    Off: 'CS_OFF'
} as const;
export type UpdateSessionCsEducationEnum = typeof UpdateSessionCsEducationEnum[keyof typeof UpdateSessionCsEducationEnum];
/**
 * @export
 */
export const UpdateSessionDevTalkEnum = {
    On: 'DEVTALK_ON',
    Off: 'DEVTALK_OFF'
} as const;
export type UpdateSessionDevTalkEnum = typeof UpdateSessionDevTalkEnum[keyof typeof UpdateSessionDevTalkEnum];