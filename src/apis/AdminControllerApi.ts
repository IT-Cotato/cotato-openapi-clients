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
  CotatoApplyMemberInfoResponse,
  CotatoMemberEnrollInfoResponse,
  CotatoUpdateActiveMemberToOldMemberRequest,
  CotatoUpdateMemberRoleRequest,
  CotatoUpdateOldMemberRoleRequest,
} from '../models/index.js';
import {
    CotatoApplyMemberInfoResponseFromJSON,
    CotatoApplyMemberInfoResponseToJSON,
    CotatoMemberEnrollInfoResponseFromJSON,
    CotatoMemberEnrollInfoResponseToJSON,
    CotatoUpdateActiveMemberToOldMemberRequestFromJSON,
    CotatoUpdateActiveMemberToOldMemberRequestToJSON,
    CotatoUpdateMemberRoleRequestFromJSON,
    CotatoUpdateMemberRoleRequestToJSON,
    CotatoUpdateOldMemberRoleRequestFromJSON,
    CotatoUpdateOldMemberRoleRequestToJSON,
} from '../models/index.js';

export interface UpdateActiveMemberRoleRequest {
    cotatoUpdateMemberRoleRequest: CotatoUpdateMemberRoleRequest;
}

export interface UpdateActiveMembersToOldMembersRequest {
    cotatoUpdateActiveMemberToOldMemberRequest: CotatoUpdateActiveMemberToOldMemberRequest;
}

export interface UpdateOldMemberToActiveGenerationRequest {
    cotatoUpdateOldMemberRoleRequest: CotatoUpdateOldMemberRoleRequest;
}

/**
 * 
 */
export class AdminControllerApi extends runtime.BaseAPI {

    /**
     * @deprecated
     */
    async findApplicantListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CotatoApplyMemberInfoResponse>>> {
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
            path: `/v1/api/admin/applicants`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CotatoApplyMemberInfoResponseFromJSON));
    }

    /**
     * @deprecated
     */
    async findApplicantList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CotatoApplyMemberInfoResponse>> {
        const response = await this.findApplicantListRaw(initOverrides);
        return await response.value();
    }

    /**
     * @deprecated
     */
    async findCurrentActiveMembersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CotatoMemberEnrollInfoResponse>>> {
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
            path: `/v1/api/admin/active-members`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CotatoMemberEnrollInfoResponseFromJSON));
    }

    /**
     * @deprecated
     */
    async findCurrentActiveMembers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CotatoMemberEnrollInfoResponse>> {
        const response = await this.findCurrentActiveMembersRaw(initOverrides);
        return await response.value();
    }

    /**
     * @deprecated
     */
    async findOldMembersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CotatoMemberEnrollInfoResponse>>> {
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
            path: `/v1/api/admin/old-members`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CotatoMemberEnrollInfoResponseFromJSON));
    }

    /**
     * @deprecated
     */
    async findOldMembers(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CotatoMemberEnrollInfoResponse>> {
        const response = await this.findOldMembersRaw(initOverrides);
        return await response.value();
    }

    /**
     * @deprecated
     */
    async findRejectApplicantListRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<CotatoApplyMemberInfoResponse>>> {
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
            path: `/v1/api/admin/reject-applicants`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(CotatoApplyMemberInfoResponseFromJSON));
    }

    /**
     * @deprecated
     */
    async findRejectApplicantList(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<CotatoApplyMemberInfoResponse>> {
        const response = await this.findRejectApplicantListRaw(initOverrides);
        return await response.value();
    }

    /**
     * @deprecated
     */
    async updateActiveMemberRoleRaw(requestParameters: UpdateActiveMemberRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoUpdateMemberRoleRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoUpdateMemberRoleRequest',
                'Required parameter "cotatoUpdateMemberRoleRequest" was null or undefined when calling updateActiveMemberRole().'
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
            path: `/v1/api/admin/active-members/role`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoUpdateMemberRoleRequestToJSON(requestParameters['cotatoUpdateMemberRoleRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * @deprecated
     */
    async updateActiveMemberRole(requestParameters: UpdateActiveMemberRoleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateActiveMemberRoleRaw(requestParameters, initOverrides);
    }

    /**
     * @deprecated
     */
    async updateActiveMembersToOldMembersRaw(requestParameters: UpdateActiveMembersToOldMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoUpdateActiveMemberToOldMemberRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoUpdateActiveMemberToOldMemberRequest',
                'Required parameter "cotatoUpdateActiveMemberToOldMemberRequest" was null or undefined when calling updateActiveMembersToOldMembers().'
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
            path: `/v1/api/admin/active-members/to-old-members`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoUpdateActiveMemberToOldMemberRequestToJSON(requestParameters['cotatoUpdateActiveMemberToOldMemberRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * @deprecated
     */
    async updateActiveMembersToOldMembers(requestParameters: UpdateActiveMembersToOldMembersRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateActiveMembersToOldMembersRaw(requestParameters, initOverrides);
    }

    /**
     * @deprecated
     */
    async updateOldMemberToActiveGenerationRaw(requestParameters: UpdateOldMemberToActiveGenerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoUpdateOldMemberRoleRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoUpdateOldMemberRoleRequest',
                'Required parameter "cotatoUpdateOldMemberRoleRequest" was null or undefined when calling updateOldMemberToActiveGeneration().'
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
            path: `/v1/api/admin/old-members/role`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoUpdateOldMemberRoleRequestToJSON(requestParameters['cotatoUpdateOldMemberRoleRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * @deprecated
     */
    async updateOldMemberToActiveGeneration(requestParameters: UpdateOldMemberToActiveGenerationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.updateOldMemberToActiveGenerationRaw(requestParameters, initOverrides);
    }

}
