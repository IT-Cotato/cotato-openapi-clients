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
  CotatoEducationCloseRequest,
  CotatoEducationOpenRequest,
  CotatoQuizSocketRequest,
  CotatoSocketTokenDto,
} from '../models/index.js';
import {
    CotatoEducationCloseRequestFromJSON,
    CotatoEducationCloseRequestToJSON,
    CotatoEducationOpenRequestFromJSON,
    CotatoEducationOpenRequestToJSON,
    CotatoQuizSocketRequestFromJSON,
    CotatoQuizSocketRequestToJSON,
    CotatoSocketTokenDtoFromJSON,
    CotatoSocketTokenDtoToJSON,
} from '../models/index.js';

export interface AccessQuizRequest {
    cotatoQuizSocketRequest: CotatoQuizSocketRequest;
}

export interface CloseEducationRequest {
    cotatoEducationCloseRequest: CotatoEducationCloseRequest;
}

export interface DenyQuizRequest {
    cotatoQuizSocketRequest: CotatoQuizSocketRequest;
}

export interface OpenEducationRequest {
    cotatoEducationOpenRequest: CotatoEducationOpenRequest;
}

export interface SendKingCommandRequest {
    educationId: number;
}

export interface SendWinnerCommandRequest {
    educationId: number;
}

export interface StartQuizSolveRequest {
    cotatoQuizSocketRequest: CotatoQuizSocketRequest;
}

export interface StopQuizSolveRequest {
    cotatoQuizSocketRequest: CotatoQuizSocketRequest;
}

/**
 * 
 */
export class SocketControllerApi extends runtime.BaseAPI {

    /**
     */
    async accessQuizRaw(requestParameters: AccessQuizRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoQuizSocketRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoQuizSocketRequest',
                'Required parameter "cotatoQuizSocketRequest" was null or undefined when calling accessQuiz().'
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
            path: `/v1/api/socket/access`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoQuizSocketRequestToJSON(requestParameters['cotatoQuizSocketRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async accessQuiz(requestParameters: AccessQuizRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.accessQuizRaw(requestParameters, initOverrides);
    }

    /**
     */
    async closeEducationRaw(requestParameters: CloseEducationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoEducationCloseRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoEducationCloseRequest',
                'Required parameter "cotatoEducationCloseRequest" was null or undefined when calling closeEducation().'
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
            path: `/v1/api/socket/close/csquiz`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoEducationCloseRequestToJSON(requestParameters['cotatoEducationCloseRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async closeEducation(requestParameters: CloseEducationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.closeEducationRaw(requestParameters, initOverrides);
    }

    /**
     */
    async denyQuizRaw(requestParameters: DenyQuizRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoQuizSocketRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoQuizSocketRequest',
                'Required parameter "cotatoQuizSocketRequest" was null or undefined when calling denyQuiz().'
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
            path: `/v1/api/socket/deny`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoQuizSocketRequestToJSON(requestParameters['cotatoQuizSocketRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async denyQuiz(requestParameters: DenyQuizRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.denyQuizRaw(requestParameters, initOverrides);
    }

    /**
     */
    async makeSocketTokenRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CotatoSocketTokenDto>> {
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
            path: `/v1/api/socket/token`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CotatoSocketTokenDtoFromJSON(jsonValue));
    }

    /**
     */
    async makeSocketToken(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CotatoSocketTokenDto> {
        const response = await this.makeSocketTokenRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async openEducationRaw(requestParameters: OpenEducationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoEducationOpenRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoEducationOpenRequest',
                'Required parameter "cotatoEducationOpenRequest" was null or undefined when calling openEducation().'
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
            path: `/v1/api/socket/start/csquiz`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoEducationOpenRequestToJSON(requestParameters['cotatoEducationOpenRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async openEducation(requestParameters: OpenEducationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.openEducationRaw(requestParameters, initOverrides);
    }

    /**
     */
    async sendKingCommandRaw(requestParameters: SendKingCommandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['educationId'] == null) {
            throw new runtime.RequiredError(
                'educationId',
                'Required parameter "educationId" was null or undefined when calling sendKingCommand().'
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
            path: `/v1/api/socket/kings`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async sendKingCommand(requestParameters: SendKingCommandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.sendKingCommandRaw(requestParameters, initOverrides);
    }

    /**
     */
    async sendWinnerCommandRaw(requestParameters: SendWinnerCommandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['educationId'] == null) {
            throw new runtime.RequiredError(
                'educationId',
                'Required parameter "educationId" was null or undefined when calling sendWinnerCommand().'
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
            path: `/v1/api/socket/winner`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async sendWinnerCommand(requestParameters: SendWinnerCommandRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.sendWinnerCommandRaw(requestParameters, initOverrides);
    }

    /**
     */
    async startQuizSolveRaw(requestParameters: StartQuizSolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoQuizSocketRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoQuizSocketRequest',
                'Required parameter "cotatoQuizSocketRequest" was null or undefined when calling startQuizSolve().'
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
            path: `/v1/api/socket/start`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoQuizSocketRequestToJSON(requestParameters['cotatoQuizSocketRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async startQuizSolve(requestParameters: StartQuizSolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.startQuizSolveRaw(requestParameters, initOverrides);
    }

    /**
     */
    async stopQuizSolveRaw(requestParameters: StopQuizSolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['cotatoQuizSocketRequest'] == null) {
            throw new runtime.RequiredError(
                'cotatoQuizSocketRequest',
                'Required parameter "cotatoQuizSocketRequest" was null or undefined when calling stopQuizSolve().'
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
            path: `/v1/api/socket/stop`,
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
            body: CotatoQuizSocketRequestToJSON(requestParameters['cotatoQuizSocketRequest']),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async stopQuizSolve(requestParameters: StopQuizSolveRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.stopQuizSolveRaw(requestParameters, initOverrides);
    }

}
