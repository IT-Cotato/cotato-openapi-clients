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


import * as runtime from '../runtime.js';
import type {
  CotatoAddGenerationRequest,
  CotatoAddGenerationResponse,
  CotatoChangeGenerationPeriodRequest,
  CotatoChangeRecruitingStatusRequest,
  CotatoCheckMemberPoliciesRequest,
  CotatoCreateProjectRequest,
  CotatoCreateProjectResponse,
  CotatoFindMemberPolicyResponse,
  CotatoFindPasswordResponse,
  CotatoGenerationInfoResponse,
  CotatoJoinRequest,
  CotatoJoinResponse,
  CotatoLogoutRequest,
  CotatoMemberEmailResponse,
  CotatoPoliciesResponse,
  CotatoProjectDetailResponse,
  CotatoProjectSummaryResponse,
  CotatoReissueResponse,
  CotatoSendEmailRequest,
  CotatoSseEmitter,
} from '../models/index.js';
import {
    CotatoAddGenerationRequestFromJSON,
    CotatoAddGenerationRequestToJSON,
    CotatoAddGenerationResponseFromJSON,
    CotatoAddGenerationResponseToJSON,
    CotatoChangeGenerationPeriodRequestFromJSON,
    CotatoChangeGenerationPeriodRequestToJSON,
    CotatoChangeRecruitingStatusRequestFromJSON,
    CotatoChangeRecruitingStatusRequestToJSON,
    CotatoCheckMemberPoliciesRequestFromJSON,
    CotatoCheckMemberPoliciesRequestToJSON,
    CotatoCreateProjectRequestFromJSON,
    CotatoCreateProjectRequestToJSON,
    CotatoCreateProjectResponseFromJSON,
    CotatoCreateProjectResponseToJSON,
    CotatoFindMemberPolicyResponseFromJSON,
    CotatoFindMemberPolicyResponseToJSON,
    CotatoFindPasswordResponseFromJSON,
    CotatoFindPasswordResponseToJSON,
    CotatoGenerationInfoResponseFromJSON,
    CotatoGenerationInfoResponseToJSON,
    CotatoJoinRequestFromJSON,
    CotatoJoinRequestToJSON,
    CotatoJoinResponseFromJSON,
    CotatoJoinResponseToJSON,
    CotatoLogoutRequestFromJSON,
    CotatoLogoutRequestToJSON,
    CotatoMemberEmailResponseFromJSON,
    CotatoMemberEmailResponseToJSON,
    CotatoPoliciesResponseFromJSON,
    CotatoPoliciesResponseToJSON,
    CotatoProjectDetailResponseFromJSON,
    CotatoProjectDetailResponseToJSON,
    CotatoProjectSummaryResponseFromJSON,
    CotatoProjectSummaryResponseToJSON,
    CotatoReissueResponseFromJSON,
    CotatoReissueResponseToJSON,
    CotatoSendEmailRequestFromJSON,
    CotatoSendEmailRequestToJSON,
    CotatoSseEmitterFromJSON,
    CotatoSseEmitterToJSON,
} from '../models/index.js';

export interface AddGenerationRequest {
    cotatoAddGenerationRequest: CotatoAddGenerationRequest;
}

export interface ChangeGenerationPeriodRequest {
    cotatoChangeGenerationPeriodRequest: CotatoChangeGenerationPeriodRequest;
}

export interface ChangeRecruitingStatusRequest {
    cotatoChangeRecruitingStatusRequest: CotatoChangeRecruitingStatusRequest;
}

export interface CheckPoliciesRequest {
    cotatoCheckMemberPoliciesRequest: CotatoCheckMemberPoliciesRequest;
}

export interface CreateProjectRequest {
    cotatoCreateProjectRequest: CotatoCreateProjectRequest;
}

export interface CreateProjectImageRequest {
    projectId?: number;
    logoImage?: Blob;
    thumbNailImage?: Blob;
    detailImages?: Array<Blob>;
}

export interface FindEmailRequest {
    name: string;
    phone: string;
}

export interface FindGenerationByIdRequest {
    generationId: number;
}

export interface GetProjectDetailRequest {
    projectId: number;
}

export interface JoinAuthRequest {
    cotatoJoinRequest: CotatoJoinRequest;
}

export interface LogoutRequest {
    refreshToken: string;
    cotatoLogoutRequest: CotatoLogoutRequest;
}

export interface SendSignUpVerificationCode1Request {
    cotatoSendEmailRequest: CotatoSendEmailRequest;
}

export interface TokenReissueRequest {
    refreshToken: string;
}

export interface VerifyCode1Request {
    email: string;
    code: string;
}

/**
 * 
 */
export class APIApi extends runtime.BaseAPI {

    /**
     */
    async addGenerationRaw(requestParameters: AddGenerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoAddGenerationResponse>> {
        if (requestParameters['cotatoAddGenerationRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoAddGenerationRequest',
                'Required parameter "cotatoAddGenerationRequest" was null or undefined when calling addGeneration().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/generation/add`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoAddGenerationRequestToJSON(requestParameters['cotatoAddGenerationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoAddGenerationResponseFromJSON(jsonValue));
    }

    /**
     */
    async addGeneration(requestParameters: AddGenerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoAddGenerationResponse> {
        const response = await this.addGenerationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async changeGenerationPeriodRaw(requestParameters: ChangeGenerationPeriodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoChangeGenerationPeriodRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoChangeGenerationPeriodRequest',
                'Required parameter "cotatoChangeGenerationPeriodRequest" was null or undefined when calling changeGenerationPeriod().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/generation/period`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoChangeGenerationPeriodRequestToJSON(requestParameters['cotatoChangeGenerationPeriodRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async changeGenerationPeriod(requestParameters: ChangeGenerationPeriodRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.changeGenerationPeriodRaw(requestParameters, initOverrides);
    }

    /**
     */
    async changeRecruitingStatusRaw(requestParameters: ChangeRecruitingStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoChangeRecruitingStatusRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoChangeRecruitingStatusRequest',
                'Required parameter "cotatoChangeRecruitingStatusRequest" was null or undefined when calling changeRecruitingStatus().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/generation/recruiting`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoChangeRecruitingStatusRequestToJSON(requestParameters['cotatoChangeRecruitingStatusRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async changeRecruitingStatus(requestParameters: ChangeRecruitingStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.changeRecruitingStatusRaw(requestParameters, initOverrides);
    }

    /**
     * 특정 정책에 대해 동의 여부 체크 API
     */
    async checkPoliciesRaw(requestParameters: CheckPoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoCheckMemberPoliciesRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoCheckMemberPoliciesRequest',
                'Required parameter "cotatoCheckMemberPoliciesRequest" was null or undefined when calling checkPolicies().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/api/policies/check`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoCheckMemberPoliciesRequestToJSON(requestParameters['cotatoCheckMemberPoliciesRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 특정 정책에 대해 동의 여부 체크 API
     */
    async checkPolicies(requestParameters: CheckPoliciesRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.checkPoliciesRaw(requestParameters, initOverrides);
    }

    /**
     * 프로젝트 등록 API
     */
    async createProjectRaw(requestParameters: CreateProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoCreateProjectResponse>> {
        if (requestParameters['cotatoCreateProjectRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoCreateProjectRequest',
                'Required parameter "cotatoCreateProjectRequest" was null or undefined when calling createProject().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/api/projects`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoCreateProjectRequestToJSON(requestParameters['cotatoCreateProjectRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoCreateProjectResponseFromJSON(jsonValue));
    }

    /**
     * 프로젝트 등록 API
     */
    async createProject(requestParameters: CreateProjectRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoCreateProjectResponse> {
        const response = await this.createProjectRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 프로젝트 사진 등록 API
     */
    async createProjectImageRaw(requestParameters: CreateProjectImageRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const consumes: runtime.Consume[] = [
            { contentType: 'multipart/form-data' },
        ];
        // @ts-ignore: canConsumeForm may be unused
        const canConsumeForm = runtime.canConsumeForm(consumes);

        let formParams: { append(param: string, value: any): any };
        let useForm = false;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        // use FormData to transmit files using content-type "multipart/form-data"
        useForm = canConsumeForm;
        if (useForm) {
            formParams = new FormData();
        } else {
            formParams = new URLSearchParams();
        }

        if (requestParameters['projectId'] != null) {
            formParams.append('projectId', requestParameters['projectId'] as any);
        }

        if (requestParameters['logoImage'] != null) {
            formParams.append('logoImage', requestParameters['logoImage'] as any);
        }

        if (requestParameters['thumbNailImage'] != null) {
            formParams.append('thumbNailImage', requestParameters['thumbNailImage'] as any);
        }

        if (requestParameters['detailImages'] != null) {
            requestParameters['detailImages'].forEach((element) => {
                formParams.append('detailImages', element as any);
            })
        }

        const response = await this.request({
            path: `/v2/api/projects/images`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: formParams,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 프로젝트 사진 등록 API
     */
    async createProjectImage(requestParameters: CreateProjectImageRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.createProjectImageRaw(requestParameters, initOverrides);
    }

    /**
     * 현재 날짜 기준 세션 정보 반환 API
     */
    async findCurrentGenerationRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoGenerationInfoResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/generation/current`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoGenerationInfoResponseFromJSON(jsonValue));
    }

    /**
     * 현재 날짜 기준 세션 정보 반환 API
     */
    async findCurrentGeneration(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoGenerationInfoResponse> {
        const response = await this.findCurrentGenerationRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async findEmailRaw(requestParameters: FindEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoMemberEmailResponse>> {
        if (requestParameters['name'] == null) {
            throw new runtime.RequiredError(
                'name',
                'Required parameter "name" was null or undefined when calling findEmail().'
            );
        }

        if (requestParameters['phone'] == null) {
            throw new runtime.RequiredError(
                'phone',
                'Required parameter "phone" was null or undefined when calling findEmail().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['name'] != null) {
            queryParameters['name'] = requestParameters['name'];
        }

        if (requestParameters['phone'] != null) {
            queryParameters['phone'] = requestParameters['phone'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/auth/email`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoMemberEmailResponseFromJSON(jsonValue));
    }

    /**
     */
    async findEmail(requestParameters: FindEmailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoMemberEmailResponse> {
        const response = await this.findEmailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 기수 단건 조회 API
     */
    async findGenerationByIdRaw(requestParameters: FindGenerationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoGenerationInfoResponse>> {
        if (requestParameters['generationId'] == null) {
            throw new runtime.RequiredError(
                'generationId',
                'Required parameter "generationId" was null or undefined when calling findGenerationById().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/generation/{generationId}`.replace(`{${"generationId"}}`, encodeURIComponent(String(requestParameters['generationId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoGenerationInfoResponseFromJSON(jsonValue));
    }

    /**
     * 기수 단건 조회 API
     */
    async findGenerationById(requestParameters: FindGenerationByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoGenerationInfoResponse> {
        const response = await this.findGenerationByIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findGenerationsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CotatoGenerationInfoResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/generation`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CotatoGenerationInfoResponseFromJSON));
    }

    /**
     */
    async findGenerations(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CotatoGenerationInfoResponse>> {
        const response = await this.findGenerationsRaw(initOverrides);
        return await response.value();
    }

    /**
     * 프로젝트 목록 조회 API
     */
    async getAllProjectSummariesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CotatoProjectSummaryResponse>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/api/projects`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CotatoProjectSummaryResponseFromJSON));
    }

    /**
     * 프로젝트 목록 조회 API
     */
    async getAllProjectSummaries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CotatoProjectSummaryResponse>> {
        const response = await this.getAllProjectSummariesRaw(initOverrides);
        return await response.value();
    }

    /**
     * 회원 가입 시 보여줘야 할 정책 목록 반환 API
     */
    async getPoliciesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoPoliciesResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/api/policies`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoPoliciesResponseFromJSON(jsonValue));
    }

    /**
     * 회원 가입 시 보여줘야 할 정책 목록 반환 API
     */
    async getPolicies(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoPoliciesResponse> {
        const response = await this.getPoliciesRaw(initOverrides);
        return await response.value();
    }

    /**
     * 특정 프로젝트 상세 정보 조회 API
     */
    async getProjectDetailRaw(requestParameters: GetProjectDetailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoProjectDetailResponse>> {
        if (requestParameters['projectId'] == null) {
            throw new runtime.RequiredError(
                'projectId',
                'Required parameter "projectId" was null or undefined when calling getProjectDetail().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/api/projects/{projectId}`.replace(`{${"projectId"}}`, encodeURIComponent(String(requestParameters['projectId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoProjectDetailResponseFromJSON(jsonValue));
    }

    /**
     * 특정 프로젝트 상세 정보 조회 API
     */
    async getProjectDetail(requestParameters: GetProjectDetailRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoProjectDetailResponse> {
        const response = await this.getProjectDetailRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 체크하지 않은 정책 조회 API
     */
    async getUnCheckedPoliciesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoFindMemberPolicyResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/api/policies/essential`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoFindMemberPolicyResponseFromJSON(jsonValue));
    }

    /**
     * 체크하지 않은 정책 조회 API
     */
    async getUnCheckedPolicies(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoFindMemberPolicyResponse> {
        const response = await this.getUnCheckedPoliciesRaw(initOverrides);
        return await response.value();
    }

    /**
     * 회원 가입 API
     */
    async joinAuthRaw(requestParameters: JoinAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoJoinResponse>> {
        if (requestParameters['cotatoJoinRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoJoinRequest',
                'Required parameter "cotatoJoinRequest" was null or undefined when calling joinAuth().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/auth/join`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoJoinRequestToJSON(requestParameters['cotatoJoinRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoJoinResponseFromJSON(jsonValue));
    }

    /**
     * 회원 가입 API
     */
    async joinAuth(requestParameters: JoinAuthRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoJoinResponse> {
        const response = await this.joinAuthRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async logoutRaw(requestParameters: LogoutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['refreshToken'] == null) {
            throw new runtime.RequiredError(
                'refreshToken',
                'Required parameter "refreshToken" was null or undefined when calling logout().'
            );
        }

        if (requestParameters['cotatoLogoutRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoLogoutRequest',
                'Required parameter "cotatoLogoutRequest" was null or undefined when calling logout().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/auth/logout`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoLogoutRequestToJSON(requestParameters['cotatoLogoutRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async logout(requestParameters: LogoutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.logoutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async sendSignUpVerificationCode1Raw(requestParameters: SendSignUpVerificationCode1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoSendEmailRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoSendEmailRequest',
                'Required parameter "cotatoSendEmailRequest" was null or undefined when calling sendSignUpVerificationCode1().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/auth/verification`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoSendEmailRequestToJSON(requestParameters['cotatoSendEmailRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async sendSignUpVerificationCode1(requestParameters: SendSignUpVerificationCode1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.sendSignUpVerificationCode1Raw(requestParameters, initOverrides);
    }

    /**
     * 최초 로그인 시 출결 알림 구독 API
     */
    async subscribeAttendanceRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoSseEmitter>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v2/api/events/attendances`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoSseEmitterFromJSON(jsonValue));
    }

    /**
     * 최초 로그인 시 출결 알림 구독 API
     */
    async subscribeAttendance(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoSseEmitter> {
        const response = await this.subscribeAttendanceRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async tokenReissueRaw(requestParameters: TokenReissueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoReissueResponse>> {
        if (requestParameters['refreshToken'] == null) {
            throw new runtime.RequiredError(
                'refreshToken',
                'Required parameter "refreshToken" was null or undefined when calling tokenReissue().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/auth/reissue`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoReissueResponseFromJSON(jsonValue));
    }

    /**
     */
    async tokenReissue(requestParameters: TokenReissueRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoReissueResponse> {
        const response = await this.tokenReissueRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async verifyCode1Raw(requestParameters: VerifyCode1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoFindPasswordResponse>> {
        if (requestParameters['email'] == null) {
            throw new runtime.RequiredError(
                'email',
                'Required parameter "email" was null or undefined when calling verifyCode1().'
            );
        }

        if (requestParameters['code'] == null) {
            throw new runtime.RequiredError(
                'code',
                'Required parameter "code" was null or undefined when calling verifyCode1().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['email'] != null) {
            queryParameters['email'] = requestParameters['email'];
        }

        if (requestParameters['code'] != null) {
            queryParameters['code'] = requestParameters['code'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        if (this.configuration && this.configuration.accessToken) {
            const token = this.configuration.accessToken;
            const tokenString = await token("bearerAuth", []);

            if (tokenString) {
                headerParameters["Authorization"] = `Bearer ${tokenString}`;
            }
        }
        const response = await this.request({
            path: `/v1/api/auth/verification`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoFindPasswordResponseFromJSON(jsonValue));
    }

    /**
     */
    async verifyCode1(requestParameters: VerifyCode1Request, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoFindPasswordResponse> {
        const response = await this.verifyCode1Raw(requestParameters, initOverrides);
        return await response.value();
    }

}
