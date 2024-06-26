/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { RestClientBase } from "../Common/RestClientBase";
import { deserializeVssJsonObject } from "../Common/Util/Serialization";
var ServiceEndpointRestClient = /** @class */ (function (_super) {
    __extends(ServiceEndpointRestClient, _super);
    function ServiceEndpointRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * Returns list of azure subscriptions
     *
     */
    ServiceEndpointRestClient.prototype.getAzureManagementGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/serviceendpoint/endpointproxy/azurermmanagementgroups"
                    })];
            });
        });
    };
    /**
     * Returns list of azure subscriptions
     *
     */
    ServiceEndpointRestClient.prototype.getAzureSubscriptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/serviceendpoint/endpointproxy/azurermsubscriptions"
                    })];
            });
        });
    };
    /**
     * Proxy for a GET request defined by a service endpoint.
     *
     * @param serviceEndpointRequest - Service endpoint request.
     * @param project - Project ID or project name
     * @param endpointId - Id of the service endpoint.
     */
    ServiceEndpointRestClient.prototype.executeServiceEndpointRequest = function (serviceEndpointRequest, project, endpointId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    endpointId: endpointId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/serviceendpoint/endpointproxy",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: serviceEndpointRequest
                    })];
            });
        });
    };
    /**
     * Proxy for a GET request defined by a service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param binding - Describes the data source to fetch.
     * @param project - Project ID or project name
     */
    ServiceEndpointRestClient.prototype.queryServiceEndpoint = function (binding, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/serviceendpoint/endpointproxy",
                        routeValues: {
                            project: project
                        },
                        body: binding
                    })];
            });
        });
    };
    /**
     * Creates a new service endpoint
     *
     * @param endpoint - Service endpoint to create
     */
    ServiceEndpointRestClient.prototype.createServiceEndpoint = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "POST",
                        routeTemplate: "_apis/serviceendpoint/endpoints/{endpointId}",
                        body: endpoint
                    })];
            });
        });
    };
    /**
     * Delete a service endpoint
     *
     * @param endpointId - Endpoint Id of endpoint to delete
     * @param projectIds - project Ids from which endpoint needs to be deleted
     * @param deep - delete the spn created by endpoint
     */
    ServiceEndpointRestClient.prototype.deleteServiceEndpoint = function (endpointId, projectIds, deep) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectIds: projectIds && projectIds.join(","),
                    deep: deep
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "DELETE",
                        routeTemplate: "_apis/serviceendpoint/endpoints/{endpointId}",
                        routeValues: {
                            endpointId: endpointId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Share service endpoint across projects
     *
     * @param endpointProjectReferences - Project reference details of the target project
     * @param endpointId - Endpoint Id of the endpoint to share
     */
    ServiceEndpointRestClient.prototype.shareServiceEndpoint = function (endpointProjectReferences, endpointId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "PATCH",
                        routeTemplate: "_apis/serviceendpoint/endpoints/{endpointId}",
                        routeValues: {
                            endpointId: endpointId
                        },
                        body: endpointProjectReferences
                    })];
            });
        });
    };
    /**
     * Update the service endpoint
     *
     * @param endpoint - Updated data for the endpoint
     * @param endpointId - Endpoint Id of the endpoint to update
     * @param operation - operation type
     */
    ServiceEndpointRestClient.prototype.updateServiceEndpoint = function (endpoint, endpointId, operation) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    operation: operation
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "PUT",
                        routeTemplate: "_apis/serviceendpoint/endpoints/{endpointId}",
                        routeValues: {
                            endpointId: endpointId
                        },
                        queryParams: queryValues,
                        body: endpoint
                    })];
            });
        });
    };
    /**
     * Update the service endpoints.
     *
     * @param endpoints - Names of the service endpoints to update.
     */
    ServiceEndpointRestClient.prototype.updateServiceEndpoints = function (endpoints) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "PUT",
                        routeTemplate: "_apis/serviceendpoint/endpoints/{endpointId}",
                        body: endpoints
                    })];
            });
        });
    };
    /**
     * Get the service endpoint details.
     *
     * @param project - Project ID or project name
     * @param endpointId - Id of the service endpoint.
     * @param actionFilter - Action filter for the service connection. It specifies the action which can be performed on the service connection.
     */
    ServiceEndpointRestClient.prototype.getServiceEndpointDetails = function (project, endpointId, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        routeTemplate: "{project}/_apis/serviceendpoint/endpoints/{endpointId}",
                        routeValues: {
                            project: project,
                            endpointId: endpointId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get the service endpoints.
     *
     * @param project - Project ID or project name
     * @param type - Type of the service endpoints.
     * @param authSchemes - Authorization schemes used for service endpoints.
     * @param endpointIds - Ids of the service endpoints.
     * @param owner - Owner for service endpoints.
     * @param includeFailed - Failed flag for service endpoints.
     * @param includeDetails - Flag to include more details for service endpoints. This is for internal use only and the flag will be treated as false for all other requests
     * @param actionFilter - The "actionFilter" parameter allows users to evaluate requestor permissions and retrieve a list of endpoints that match the specified conditions, ensuring that only relevant endpoints are returned based on their permissions
     */
    ServiceEndpointRestClient.prototype.getServiceEndpoints = function (project, type, authSchemes, endpointIds, owner, includeFailed, includeDetails, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    type: type,
                    authSchemes: authSchemes && authSchemes.join(","),
                    endpointIds: endpointIds && endpointIds.join(","),
                    owner: owner,
                    includeFailed: includeFailed,
                    includeDetails: includeDetails,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        routeTemplate: "{project}/_apis/serviceendpoint/endpoints/{endpointId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get the service endpoints by name.
     *
     * @param project - Project ID or project name
     * @param endpointNames - Names of the service endpoints.
     * @param type - Type of the service endpoints.
     * @param authSchemes - Authorization schemes used for service endpoints.
     * @param owner - Owner for service endpoints.
     * @param includeFailed - Failed flag for service endpoints.
     * @param includeDetails - Flag to include more details for service endpoints. This is for internal use only and the flag will be treated as false for all other requests
     */
    ServiceEndpointRestClient.prototype.getServiceEndpointsByNames = function (project, endpointNames, type, authSchemes, owner, includeFailed, includeDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    endpointNames: endpointNames && endpointNames.join(","),
                    type: type,
                    authSchemes: authSchemes && authSchemes.join(","),
                    owner: owner,
                    includeFailed: includeFailed,
                    includeDetails: includeDetails
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        routeTemplate: "{project}/_apis/serviceendpoint/endpoints/{endpointId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets the service endpoints and patch new authorization parameters
     *
     * @param refreshAuthenticationParameters - Scope, Validity of Token requested.
     * @param project - Project ID or project name
     * @param endpointIds - Ids of the service endpoints.
     */
    ServiceEndpointRestClient.prototype.getServiceEndpointsWithRefreshedAuthentication = function (refreshAuthenticationParameters, project, endpointIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    endpointIds: endpointIds && endpointIds.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "POST",
                        routeTemplate: "{project}/_apis/serviceendpoint/endpoints/{endpointId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: refreshAuthenticationParameters
                    })];
            });
        });
    };
    /**
     * Get service endpoint execution records.
     *
     * @param project - Project ID or project name
     * @param endpointId - Id of the service endpoint.
     * @param top - Number of service endpoint execution records to get.
     * @param continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of records
     */
    ServiceEndpointRestClient.prototype.getServiceEndpointExecutionRecords = function (project, endpointId, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    top: top,
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/serviceendpoint/{endpointId}/executionhistory",
                        routeValues: {
                            project: project,
                            endpointId: endpointId
                        },
                        queryParams: queryValues,
                        returnRawResponse: true
                    }).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                        var body;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, response.text().then(deserializeVssJsonObject)];
                                case 1:
                                    body = _a.sent();
                                    body.continuationToken = response.headers.get("x-ms-continuationtoken");
                                    return [2 /*return*/, body];
                            }
                        });
                    }); })];
            });
        });
    };
    /**
     * Add service endpoint execution records.
     *
     * @param input - Service endpoint execution records to add.
     * @param project - Project ID or project name
     */
    ServiceEndpointRestClient.prototype.addServiceEndpointExecutionRecords = function (input, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/serviceendpoint/executionhistory",
                        routeValues: {
                            project: project
                        },
                        body: input
                    })];
            });
        });
    };
    /**
     * @param configurationParams -
     */
    ServiceEndpointRestClient.prototype.createOAuthConfiguration = function (configurationParams) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/serviceendpoint/oauthconfiguration/{configurationId}",
                        body: configurationParams
                    })];
            });
        });
    };
    /**
     * @param configurationId -
     */
    ServiceEndpointRestClient.prototype.deleteOAuthConfiguration = function (configurationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/serviceendpoint/oauthconfiguration/{configurationId}",
                        routeValues: {
                            configurationId: configurationId
                        }
                    })];
            });
        });
    };
    /**
     * @param configurationId -
     */
    ServiceEndpointRestClient.prototype.getOAuthConfiguration = function (configurationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/serviceendpoint/oauthconfiguration/{configurationId}",
                        routeValues: {
                            configurationId: configurationId
                        }
                    })];
            });
        });
    };
    /**
     * @param endpointType -
     * @param actionFilter -
     */
    ServiceEndpointRestClient.prototype.getOAuthConfigurations = function (endpointType, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    endpointType: endpointType,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/serviceendpoint/oauthconfiguration/{configurationId}",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param configurationParams -
     * @param configurationId -
     */
    ServiceEndpointRestClient.prototype.updateOAuthConfiguration = function (configurationParams, configurationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "_apis/serviceendpoint/oauthconfiguration/{configurationId}",
                        routeValues: {
                            configurationId: configurationId
                        },
                        body: configurationParams
                    })];
            });
        });
    };
    /**
     * @param endpointId -
     * @param project -
     */
    ServiceEndpointRestClient.prototype.querySharedProjects = function (endpointId, project) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    project: project
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/serviceendpoint/share/{endpointId}",
                        routeValues: {
                            endpointId: endpointId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param endpointId -
     * @param fromProject -
     * @param withProject -
     */
    ServiceEndpointRestClient.prototype.shareEndpointWithProject = function (endpointId, fromProject, withProject) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    fromProject: fromProject,
                    withProject: withProject
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/serviceendpoint/share/{endpointId}",
                        routeValues: {
                            endpointId: endpointId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get service endpoint types.
     *
     * @param type - Type of service endpoint.
     * @param scheme - Scheme of service endpoint.
     */
    ServiceEndpointRestClient.prototype.getServiceEndpointTypes = function (type, scheme) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    type: type,
                    scheme: scheme
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/serviceendpoint/types",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param tenantId -
     * @param redirectUri -
     * @param promptOption -
     * @param completeCallbackPayload -
     * @param completeCallbackByAuthCode -
     */
    ServiceEndpointRestClient.prototype.createAadOAuthRequest = function (tenantId, redirectUri, promptOption, completeCallbackPayload, completeCallbackByAuthCode) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    tenantId: tenantId,
                    redirectUri: redirectUri,
                    promptOption: promptOption,
                    completeCallbackPayload: completeCallbackPayload,
                    completeCallbackByAuthCode: completeCallbackByAuthCode
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/serviceendpoint/vstsaadoauth/vstsaadoauth",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     */
    ServiceEndpointRestClient.prototype.getVstsAadTenantId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/serviceendpoint/vstsaadoauth/vstsaadoauth"
                    })];
            });
        });
    };
    ServiceEndpointRestClient.RESOURCE_AREA_ID = "1814ab31-2f4f-4a9f-8761-f4d77dc5a5d7";
    return ServiceEndpointRestClient;
}(RestClientBase));
export { ServiceEndpointRestClient };
