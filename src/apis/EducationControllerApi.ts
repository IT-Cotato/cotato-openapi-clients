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
  CotatoAllEducationResponse,
  CotatoCreateEducationRequest,
  CotatoCreateEducationResponse,
  CotatoEducationCountResponse,
  CotatoEducationIdOfQuizResponse,
  CotatoFindEducationStatusResponse,
  CotatoKingMemberInfo,
  CotatoUpdateEducationRequest,
  CotatoWinnerInfoResponse,
} from '../models/index.js';
import {
    CotatoAllEducationResponseFromJSON,
    CotatoAllEducationResponseToJSON,
    CotatoCreateEducationRequestFromJSON,
    CotatoCreateEducationRequestToJSON,
    CotatoCreateEducationResponseFromJSON,
    CotatoCreateEducationResponseToJSON,
    CotatoEducationCountResponseFromJSON,
    CotatoEducationCountResponseToJSON,
    CotatoEducationIdOfQuizResponseFromJSON,
    CotatoEducationIdOfQuizResponseToJSON,
    CotatoFindEducationStatusResponseFromJSON,
    CotatoFindEducationStatusResponseToJSON,
    CotatoKingMemberInfoFromJSON,
    CotatoKingMemberInfoToJSON,
    CotatoUpdateEducationRequestFromJSON,
    CotatoUpdateEducationRequestToJSON,
    CotatoWinnerInfoResponseFromJSON,
    CotatoWinnerInfoResponseToJSON,
} from '../models/index.js';

export interface CalculateKingMembersRequest {
    educationId: number;
}

export interface CalculateWinnerRequest {
    educationId: number;
}

export interface CreateEducationRequest {
    cotatoCreateEducationRequest: CotatoCreateEducationRequest;
}

export interface FindEducationIdRequest {
    quizId: number;
}

export interface FindEducationListByGenerationRequest {
    generationId: number;
}

export interface FindEducationStatusRequest {
    educationId: number;
}

export interface FindFinalKingMembersRequest {
    educationId: number;
}

export interface FindWinnerRequest {
    educationId: number;
}

export interface UpdateEducationRequest {
    cotatoUpdateEducationRequest: CotatoUpdateEducationRequest;
}

/**
 * 
 */
export class EducationControllerApi extends runtime.BaseAPI {

    /**
     */
    async calculateKingMembersRaw(requestParameters: CalculateKingMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['educationId'] == null) {
            throw new runtime.RequiredError(
                'educationId',
                'Required parameter "educationId" was null or undefined when calling calculateKingMembers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['educationId'] != null) {
            queryParameters['educationId'] = requestParameters['educationId'];
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
            path: `/v1/api/education/kings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async calculateKingMembers(requestParameters: CalculateKingMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.calculateKingMembersRaw(requestParameters, initOverrides);
    }

    /**
     */
    async calculateWinnerRaw(requestParameters: CalculateWinnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['educationId'] == null) {
            throw new runtime.RequiredError(
                'educationId',
                'Required parameter "educationId" was null or undefined when calling calculateWinner().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['educationId'] != null) {
            queryParameters['educationId'] = requestParameters['educationId'];
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
            path: `/v1/api/education/winner`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async calculateWinner(requestParameters: CalculateWinnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.calculateWinnerRaw(requestParameters, initOverrides);
    }

    /**
     * 교육 추가 API
     */
    async createEducationRaw(requestParameters: CreateEducationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoCreateEducationResponse>> {
        if (requestParameters['cotatoCreateEducationRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoCreateEducationRequest',
                'Required parameter "cotatoCreateEducationRequest" was null or undefined when calling createEducation().'
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
            path: `/v1/api/education`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoCreateEducationRequestToJSON(requestParameters['cotatoCreateEducationRequest']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoCreateEducationResponseFromJSON(jsonValue));
    }

    /**
     * 교육 추가 API
     */
    async createEducation(requestParameters: CreateEducationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoCreateEducationResponse> {
        const response = await this.createEducationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findEducationIdRaw(requestParameters: FindEducationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoEducationIdOfQuizResponse>> {
        if (requestParameters['quizId'] == null) {
            throw new runtime.RequiredError(
                'quizId',
                'Required parameter "quizId" was null or undefined when calling findEducationId().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['quizId'] != null) {
            queryParameters['quizId'] = requestParameters['quizId'];
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
            path: `/v1/api/education/from`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoEducationIdOfQuizResponseFromJSON(jsonValue));
    }

    /**
     */
    async findEducationId(requestParameters: FindEducationIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoEducationIdOfQuizResponse> {
        const response = await this.findEducationIdRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findEducationListByGenerationRaw(requestParameters: FindEducationListByGenerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CotatoAllEducationResponse>>> {
        if (requestParameters['generationId'] == null) {
            throw new runtime.RequiredError(
                'generationId',
                'Required parameter "generationId" was null or undefined when calling findEducationListByGeneration().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['generationId'] != null) {
            queryParameters['generationId'] = requestParameters['generationId'];
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
            path: `/v1/api/education`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CotatoAllEducationResponseFromJSON));
    }

    /**
     */
    async findEducationListByGeneration(requestParameters: FindEducationListByGenerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CotatoAllEducationResponse>> {
        const response = await this.findEducationListByGenerationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findEducationStatusRaw(requestParameters: FindEducationStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoFindEducationStatusResponse>> {
        if (requestParameters['educationId'] == null) {
            throw new runtime.RequiredError(
                'educationId',
                'Required parameter "educationId" was null or undefined when calling findEducationStatus().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['educationId'] != null) {
            queryParameters['educationId'] = requestParameters['educationId'];
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
            path: `/v1/api/education/status`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoFindEducationStatusResponseFromJSON(jsonValue));
    }

    /**
     */
    async findEducationStatus(requestParameters: FindEducationStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoFindEducationStatusResponse> {
        const response = await this.findEducationStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findFinalKingMembersRaw(requestParameters: FindFinalKingMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CotatoKingMemberInfo>>> {
        if (requestParameters['educationId'] == null) {
            throw new runtime.RequiredError(
                'educationId',
                'Required parameter "educationId" was null or undefined when calling findFinalKingMembers().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['educationId'] != null) {
            queryParameters['educationId'] = requestParameters['educationId'];
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
            path: `/v1/api/education/kings`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CotatoKingMemberInfoFromJSON));
    }

    /**
     */
    async findFinalKingMembers(requestParameters: FindFinalKingMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CotatoKingMemberInfo>> {
        const response = await this.findFinalKingMembersRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async findWinnerRaw(requestParameters: FindWinnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoWinnerInfoResponse>> {
        if (requestParameters['educationId'] == null) {
            throw new runtime.RequiredError(
                'educationId',
                'Required parameter "educationId" was null or undefined when calling findWinner().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['educationId'] != null) {
            queryParameters['educationId'] = requestParameters['educationId'];
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
            path: `/v1/api/education/winner`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoWinnerInfoResponseFromJSON(jsonValue));
    }

    /**
     */
    async findWinner(requestParameters: FindWinnerRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoWinnerInfoResponse> {
        const response = await this.findWinnerRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * 교육 및 퀴즈 수 조회 API
     */
    async getEducationCountsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoEducationCountResponse>> {
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
            path: `/v1/api/education/counts`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoEducationCountResponseFromJSON(jsonValue));
    }

    /**
     * 교육 및 퀴즈 수 조회 API
     */
    async getEducationCounts(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoEducationCountResponse> {
        const response = await this.getEducationCountsRaw(initOverrides);
        return await response.value();
    }

    /**
     * 교육 수정 API
     */
    async updateEducationRaw(requestParameters: UpdateEducationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoUpdateEducationRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoUpdateEducationRequest',
                'Required parameter "cotatoUpdateEducationRequest" was null or undefined when calling updateEducation().'
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
            path: `/v1/api/education`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoUpdateEducationRequestToJSON(requestParameters['cotatoUpdateEducationRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * 교육 수정 API
     */
    async updateEducation(requestParameters: UpdateEducationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateEducationRaw(requestParameters, initOverrides);
    }

}
