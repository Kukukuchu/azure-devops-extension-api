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
var TaskAgentRestClient = /** @class */ (function (_super) {
    __extends(TaskAgentRestClient, _super);
    function TaskAgentRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * @param agentCloud -
     */
    TaskAgentRestClient.prototype.addAgentCloud = function (agentCloud) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/agentclouds/{agentCloudId}",
                        body: agentCloud
                    })];
            });
        });
    };
    /**
     * @param agentCloudId -
     */
    TaskAgentRestClient.prototype.deleteAgentCloud = function (agentCloudId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/agentclouds/{agentCloudId}",
                        routeValues: {
                            agentCloudId: agentCloudId
                        }
                    })];
            });
        });
    };
    /**
     * @param agentCloudId -
     */
    TaskAgentRestClient.prototype.getAgentCloud = function (agentCloudId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/agentclouds/{agentCloudId}",
                        routeValues: {
                            agentCloudId: agentCloudId
                        }
                    })];
            });
        });
    };
    /**
     */
    TaskAgentRestClient.prototype.getAgentClouds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/agentclouds/{agentCloudId}"
                    })];
            });
        });
    };
    /**
     * @param updatedCloud -
     * @param agentCloudId -
     */
    TaskAgentRestClient.prototype.updateAgentCloud = function (updatedCloud, agentCloudId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "_apis/distributedtask/agentclouds/{agentCloudId}",
                        routeValues: {
                            agentCloudId: agentCloudId
                        },
                        body: updatedCloud
                    })];
            });
        });
    };
    /**
     * Get agent cloud types.
     *
     */
    TaskAgentRestClient.prototype.getAgentCloudTypes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/agentcloudtypes"
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param queueId -
     * @param top -
     * @param continuationToken -
     */
    TaskAgentRestClient.prototype.getAgentRequestsForQueue = function (project, queueId, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    '$top': top,
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}/agentrequests/{requestId}",
                        routeValues: {
                            project: project,
                            queueId: queueId
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
     * @param request -
     * @param project - Project ID or project name
     * @param queueId -
     */
    TaskAgentRestClient.prototype.queueAgentRequest = function (request, project, queueId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}/agentrequests/{requestId}",
                        routeValues: {
                            project: project,
                            queueId: queueId
                        },
                        body: request
                    })];
            });
        });
    };
    /**
     * Adds an agent to a pool.  You probably don't want to call this endpoint directly. Instead, [configure an agent](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) using the agent download package.
     *
     * @param agent - Details about the agent being added
     * @param poolId - The agent pool in which to add the agent
     */
    TaskAgentRestClient.prototype.addAgent = function (agent, poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/agents/{agentId}",
                        routeValues: {
                            poolId: poolId
                        },
                        body: agent
                    })];
            });
        });
    };
    /**
     * Delete an agent.  You probably don't want to call this endpoint directly. Instead, [use the agent configuration script](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) to remove an agent from your organization.
     *
     * @param poolId - The pool ID to remove the agent from
     * @param agentId - The agent ID to remove
     */
    TaskAgentRestClient.prototype.deleteAgent = function (poolId, agentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/agents/{agentId}",
                        routeValues: {
                            poolId: poolId,
                            agentId: agentId
                        }
                    })];
            });
        });
    };
    /**
     * Get information about an agent.
     *
     * @param poolId - The agent pool containing the agent
     * @param agentId - The agent ID to get information about
     * @param includeCapabilities - Whether to include the agent's capabilities in the response
     * @param includeAssignedRequest - Whether to include details about the agent's current work
     * @param includeLastCompletedRequest - Whether to include details about the agents' most recent completed work
     * @param propertyFilters - Filter which custom properties will be returned
     */
    TaskAgentRestClient.prototype.getAgent = function (poolId, agentId, includeCapabilities, includeAssignedRequest, includeLastCompletedRequest, propertyFilters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeCapabilities: includeCapabilities,
                    includeAssignedRequest: includeAssignedRequest,
                    includeLastCompletedRequest: includeLastCompletedRequest,
                    propertyFilters: propertyFilters && propertyFilters.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/agents/{agentId}",
                        routeValues: {
                            poolId: poolId,
                            agentId: agentId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of agents.
     *
     * @param poolId - The agent pool containing the agents
     * @param agentName - Filter on agent name
     * @param includeCapabilities - Whether to include the agents' capabilities in the response
     * @param includeAssignedRequest - Whether to include details about the agents' current work
     * @param includeLastCompletedRequest - Whether to include details about the agents' most recent completed work
     * @param propertyFilters - Filter which custom properties will be returned
     * @param demands - Filter by demands the agents can satisfy
     */
    TaskAgentRestClient.prototype.getAgents = function (poolId, agentName, includeCapabilities, includeAssignedRequest, includeLastCompletedRequest, propertyFilters, demands) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    agentName: agentName,
                    includeCapabilities: includeCapabilities,
                    includeAssignedRequest: includeAssignedRequest,
                    includeLastCompletedRequest: includeLastCompletedRequest,
                    propertyFilters: propertyFilters && propertyFilters.join(","),
                    demands: demands && demands.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/agents/{agentId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Replace an agent.  You probably don't want to call this endpoint directly. Instead, [use the agent configuration script](https://docs.microsoft.com/azure/devops/pipelines/agents/agents) to remove and reconfigure an agent from your organization.
     *
     * @param agent - Updated details about the replacing agent
     * @param poolId - The agent pool to use
     * @param agentId - The agent to replace
     */
    TaskAgentRestClient.prototype.replaceAgent = function (agent, poolId, agentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/agents/{agentId}",
                        routeValues: {
                            poolId: poolId,
                            agentId: agentId
                        },
                        body: agent
                    })];
            });
        });
    };
    /**
     * Update agent details.
     *
     * @param agent - Updated details about the agent
     * @param poolId - The agent pool to use
     * @param agentId - The agent to update
     */
    TaskAgentRestClient.prototype.updateAgent = function (agent, poolId, agentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/agents/{agentId}",
                        routeValues: {
                            poolId: poolId,
                            agentId: agentId
                        },
                        body: agent
                    })];
            });
        });
    };
    /**
     * Returns list of azure subscriptions
     *
     */
    TaskAgentRestClient.prototype.getAzureManagementGroups = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/serviceendpointproxy/azurermmanagementgroups"
                    })];
            });
        });
    };
    /**
     * Returns list of azure subscriptions
     *
     */
    TaskAgentRestClient.prototype.getAzureSubscriptions = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/serviceendpointproxy/azurermsubscriptions"
                    })];
            });
        });
    };
    /**
     * GET a PAT token for managing (configuring, removing, tagging) deployment targets in a deployment group.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group in which deployment targets are managed.
     */
    TaskAgentRestClient.prototype.generateDeploymentGroupAccessToken = function (project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroupaccesstoken/{deploymentGroupId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        }
                    })];
            });
        });
    };
    /**
     * Create a deployment group.
     *
     * @param deploymentGroup - Deployment group to create.
     * @param project - Project ID or project name
     */
    TaskAgentRestClient.prototype.addDeploymentGroup = function (deploymentGroup, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}",
                        routeValues: {
                            project: project
                        },
                        body: deploymentGroup
                    })];
            });
        });
    };
    /**
     * Delete a deployment group.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group to be deleted.
     */
    TaskAgentRestClient.prototype.deleteDeploymentGroup = function (project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        }
                    })];
            });
        });
    };
    /**
     * Get a deployment group by its ID.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group.
     * @param actionFilter - Get the deployment group only if this action can be performed on it.
     * @param expand - Include these additional details in the returned object.
     */
    TaskAgentRestClient.prototype.getDeploymentGroup = function (project, deploymentGroupId, actionFilter, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    actionFilter: actionFilter,
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of deployment groups by name or IDs.
     *
     * @param project - Project ID or project name
     * @param name - Name of the deployment group.
     * @param actionFilter - Get only deployment groups on which this action can be performed.
     * @param expand - Include these additional details in the returned objects.
     * @param continuationToken - Get deployment groups with names greater than this continuationToken lexicographically.
     * @param top - Maximum number of deployment groups to return. Default is **1000**.
     * @param ids - Comma separated list of IDs of the deployment groups.
     */
    TaskAgentRestClient.prototype.getDeploymentGroups = function (project, name, actionFilter, expand, continuationToken, top, ids) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    name: name,
                    actionFilter: actionFilter,
                    '$expand': expand,
                    continuationToken: continuationToken,
                    '$top': top,
                    ids: ids && ids.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}",
                        routeValues: {
                            project: project
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
     * Update a deployment group.
     *
     * @param deploymentGroup - Deployment group to update.
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group.
     */
    TaskAgentRestClient.prototype.updateDeploymentGroup = function (deploymentGroup, project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        body: deploymentGroup
                    })];
            });
        });
    };
    /**
     * Get a list of deployment group metrics.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupName - Name of the deployment group.
     * @param continuationToken - Get metrics for deployment groups with names greater than this continuationToken lexicographically.
     * @param top - Maximum number of deployment group metrics to return. Default is **50**.
     */
    TaskAgentRestClient.prototype.getDeploymentGroupsMetrics = function (project, deploymentGroupName, continuationToken, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    deploymentGroupName: deploymentGroupName,
                    continuationToken: continuationToken,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/deploymentgroupsmetrics",
                        routeValues: {
                            project: project
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
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     * @param machineId -
     * @param completedRequestCount -
     */
    TaskAgentRestClient.prototype.getAgentRequestsForDeploymentMachine = function (project, deploymentGroupId, machineId, completedRequestCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    machineId: machineId,
                    completedRequestCount: completedRequestCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/deploymentmachinejobrequests/{requestId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     * @param machineIds -
     * @param completedRequestCount -
     */
    TaskAgentRestClient.prototype.getAgentRequestsForDeploymentMachines = function (project, deploymentGroupId, machineIds, completedRequestCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    machineIds: machineIds && machineIds.join(","),
                    completedRequestCount: completedRequestCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/deploymentmachinejobrequests/{requestId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     */
    TaskAgentRestClient.prototype.refreshDeploymentMachines = function (project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/deploymentmachinemessages",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        }
                    })];
            });
        });
    };
    /**
     * GET a PAT token for managing (configuring, removing, tagging) deployment agents in a deployment pool.
     *
     * @param poolId - ID of the deployment pool in which deployment agents are managed.
     */
    TaskAgentRestClient.prototype.generateDeploymentPoolAccessToken = function (poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/deploymentpoolaccesstoken/{poolId}",
                        routeValues: {
                            poolId: poolId
                        }
                    })];
            });
        });
    };
    /**
     * Get a list of deployment pool summaries.
     *
     * @param poolName - Name of the deployment pool.
     * @param expands - Include these additional details in the returned objects.
     * @param poolIds - List of deployment pool ids.
     */
    TaskAgentRestClient.prototype.getDeploymentPoolsSummary = function (poolName, expands, poolIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    poolName: poolName,
                    expands: expands,
                    poolIds: poolIds && poolIds.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/deploymentPools/deploymentPoolsSummary",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get agent requests for a deployment target.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group to which the target belongs.
     * @param targetId - ID of the deployment target.
     * @param completedRequestCount - Maximum number of completed requests to return. Default is **50**
     */
    TaskAgentRestClient.prototype.getAgentRequestsForDeploymentTarget = function (project, deploymentGroupId, targetId, completedRequestCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    targetId: targetId,
                    completedRequestCount: completedRequestCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/deploymentTargetJobRequests",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get agent requests for a list deployment targets.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group to which the targets belong.
     * @param targetIds - Comma separated list of IDs of the deployment targets.
     * @param ownerId - Id of owner of agent job request.
     * @param completedOn - Datetime to return request after this time.
     * @param completedRequestCount - Maximum number of completed requests to return for each target. Default is **50**
     */
    TaskAgentRestClient.prototype.getAgentRequestsForDeploymentTargets = function (project, deploymentGroupId, targetIds, ownerId, completedOn, completedRequestCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    targetIds: targetIds && targetIds.join(","),
                    ownerId: ownerId,
                    completedOn: completedOn,
                    completedRequestCount: completedRequestCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/deploymentTargetJobRequests",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Upgrade the deployment targets in a deployment group.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group.
     */
    TaskAgentRestClient.prototype.refreshDeploymentTargets = function (project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/deploymentTargetMessages",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        }
                    })];
            });
        });
    };
    /**
     * Proxy for a GET request defined by an 'endpoint'. The request is authorized using a service connection. The response is filtered using an XPath/Json based selector.
     *
     * @param endpoint - Describes the URL to fetch.
     */
    TaskAgentRestClient.prototype.queryEndpoint = function (endpoint) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/endpoint",
                        body: endpoint
                    })];
            });
        });
    };
    /**
     * Get environment deployment execution history
     *
     * @param project - Project ID or project name
     * @param environmentId -
     * @param continuationToken -
     * @param top -
     */
    TaskAgentRestClient.prototype.getEnvironmentDeploymentExecutionRecords = function (project, environmentId, continuationToken, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    continuationToken: continuationToken,
                    top: top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/environmentdeploymentRecords",
                        routeValues: {
                            project: project,
                            environmentId: environmentId
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
     * Create an environment.
     *
     * @param environmentCreateParameter - Environment to create.
     * @param project - Project ID or project name
     */
    TaskAgentRestClient.prototype.addEnvironment = function (environmentCreateParameter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}",
                        routeValues: {
                            project: project
                        },
                        body: environmentCreateParameter
                    })];
            });
        });
    };
    /**
     * Delete the specified environment.
     *
     * @param project - Project ID or project name
     * @param environmentId - ID of the environment.
     */
    TaskAgentRestClient.prototype.deleteEnvironment = function (project, environmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId
                        }
                    })];
            });
        });
    };
    /**
     * Get an environment by its ID.
     *
     * @param project - Project ID or project name
     * @param environmentId - ID of the environment.
     * @param expands - Include these additional details in the returned objects.
     */
    TaskAgentRestClient.prototype.getEnvironmentById = function (project, environmentId, expands) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    expands: expands
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get all environments.
     *
     * @param project - Project ID or project name
     * @param name -
     * @param continuationToken -
     * @param top -
     */
    TaskAgentRestClient.prototype.getEnvironments = function (project, name, continuationToken, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    name: name,
                    continuationToken: continuationToken,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}",
                        routeValues: {
                            project: project
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
     * Update the specified environment.
     *
     * @param environmentUpdateParameter - Environment data to update.
     * @param project - Project ID or project name
     * @param environmentId - ID of the environment.
     */
    TaskAgentRestClient.prototype.updateEnvironment = function (environmentUpdateParameter, project, environmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId
                        },
                        body: environmentUpdateParameter
                    })];
            });
        });
    };
    /**
     * @param hubName -
     * @param includeEnterpriseUsersCount -
     * @param includeHostedAgentMinutesCount -
     */
    TaskAgentRestClient.prototype.getTaskHubLicenseDetails = function (hubName, includeEnterpriseUsersCount, includeHostedAgentMinutesCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeEnterpriseUsersCount: includeEnterpriseUsersCount,
                    includeHostedAgentMinutesCount: includeHostedAgentMinutesCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "_apis/distributedtask/hublicense/{hubName}",
                        routeValues: {
                            hubName: hubName
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param taskHubLicenseDetails -
     * @param hubName -
     */
    TaskAgentRestClient.prototype.updateTaskHubLicenseDetails = function (taskHubLicenseDetails, hubName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "PUT",
                        routeTemplate: "_apis/distributedtask/hublicense/{hubName}",
                        routeValues: {
                            hubName: hubName
                        },
                        body: taskHubLicenseDetails
                    })];
            });
        });
    };
    /**
     * @param inputValidationRequest -
     */
    TaskAgentRestClient.prototype.validateInputs = function (inputValidationRequest) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/inputvalidation",
                        body: inputValidationRequest
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param requestId -
     * @param lockToken -
     * @param result -
     * @param agentShuttingDown -
     */
    TaskAgentRestClient.prototype.deleteAgentRequest = function (poolId, requestId, lockToken, result, agentShuttingDown) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    lockToken: lockToken,
                    result: result,
                    agentShuttingDown: agentShuttingDown
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/jobrequests/{requestId}",
                        routeValues: {
                            poolId: poolId,
                            requestId: requestId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param requestId -
     * @param includeStatus -
     */
    TaskAgentRestClient.prototype.getAgentRequest = function (poolId, requestId, includeStatus) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeStatus: includeStatus
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/jobrequests/{requestId}",
                        routeValues: {
                            poolId: poolId,
                            requestId: requestId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param top -
     * @param continuationToken -
     */
    TaskAgentRestClient.prototype.getAgentRequests = function (poolId, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    '$top': top,
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/jobrequests/{requestId}",
                        routeValues: {
                            poolId: poolId
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
     * @param poolId -
     * @param agentId -
     * @param completedRequestCount -
     */
    TaskAgentRestClient.prototype.getAgentRequestsForAgent = function (poolId, agentId, completedRequestCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    agentId: agentId,
                    completedRequestCount: completedRequestCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/jobrequests/{requestId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param agentIds -
     * @param completedRequestCount -
     */
    TaskAgentRestClient.prototype.getAgentRequestsForAgents = function (poolId, agentIds, completedRequestCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    agentIds: agentIds && agentIds.join(","),
                    completedRequestCount: completedRequestCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/jobrequests/{requestId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param planId -
     * @param jobId -
     */
    TaskAgentRestClient.prototype.getAgentRequestsForPlan = function (poolId, planId, jobId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    planId: planId,
                    jobId: jobId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/jobrequests/{requestId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param request -
     * @param poolId -
     */
    TaskAgentRestClient.prototype.queueAgentRequestByPool = function (request, poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/jobrequests/{requestId}",
                        routeValues: {
                            poolId: poolId
                        },
                        body: request
                    })];
            });
        });
    };
    /**
     * @param request -
     * @param poolId -
     * @param requestId -
     * @param lockToken -
     * @param updateOptions -
     */
    TaskAgentRestClient.prototype.updateAgentRequest = function (request, poolId, requestId, lockToken, updateOptions) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    lockToken: lockToken,
                    updateOptions: updateOptions
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/jobrequests/{requestId}",
                        routeValues: {
                            poolId: poolId,
                            requestId: requestId
                        },
                        queryParams: queryValues,
                        body: request
                    })];
            });
        });
    };
    /**
     * @param createParameters -
     * @param project - Project ID or project name
     * @param environmentId -
     */
    TaskAgentRestClient.prototype.addKubernetesResource = function (createParameters, project, environmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes/{resourceId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId
                        },
                        body: createParameters
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param environmentId -
     * @param resourceId -
     */
    TaskAgentRestClient.prototype.deleteKubernetesResource = function (project, environmentId, resourceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes/{resourceId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId,
                            resourceId: resourceId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param environmentId -
     * @param resourceId -
     */
    TaskAgentRestClient.prototype.getKubernetesResource = function (project, environmentId, resourceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/kubernetes/{resourceId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId,
                            resourceId: resourceId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param machineGroupId -
     */
    TaskAgentRestClient.prototype.generateDeploymentMachineGroupAccessToken = function (project, machineGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/machinegroupaccesstoken/{machineGroupId}",
                        routeValues: {
                            project: project,
                            machineGroupId: machineGroupId
                        }
                    })];
            });
        });
    };
    /**
     * @param machineGroup -
     * @param project - Project ID or project name
     */
    TaskAgentRestClient.prototype.addDeploymentMachineGroup = function (machineGroup, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/machinegroups/{machineGroupId}",
                        routeValues: {
                            project: project
                        },
                        body: machineGroup
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param machineGroupId -
     */
    TaskAgentRestClient.prototype.deleteDeploymentMachineGroup = function (project, machineGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/machinegroups/{machineGroupId}",
                        routeValues: {
                            project: project,
                            machineGroupId: machineGroupId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param machineGroupId -
     * @param actionFilter -
     */
    TaskAgentRestClient.prototype.getDeploymentMachineGroup = function (project, machineGroupId, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/machinegroups/{machineGroupId}",
                        routeValues: {
                            project: project,
                            machineGroupId: machineGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param machineGroupName -
     * @param actionFilter -
     */
    TaskAgentRestClient.prototype.getDeploymentMachineGroups = function (project, machineGroupName, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    machineGroupName: machineGroupName,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/machinegroups/{machineGroupId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param machineGroup -
     * @param project - Project ID or project name
     * @param machineGroupId -
     */
    TaskAgentRestClient.prototype.updateDeploymentMachineGroup = function (machineGroup, project, machineGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/machinegroups/{machineGroupId}",
                        routeValues: {
                            project: project,
                            machineGroupId: machineGroupId
                        },
                        body: machineGroup
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param machineGroupId -
     * @param tagFilters -
     */
    TaskAgentRestClient.prototype.getDeploymentMachineGroupMachines = function (project, machineGroupId, tagFilters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    tagFilters: tagFilters && tagFilters.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/machinegroups/{machineGroupId}/machines",
                        routeValues: {
                            project: project,
                            machineGroupId: machineGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param deploymentMachines -
     * @param project - Project ID or project name
     * @param machineGroupId -
     */
    TaskAgentRestClient.prototype.updateDeploymentMachineGroupMachines = function (deploymentMachines, project, machineGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/machinegroups/{machineGroupId}/machines",
                        routeValues: {
                            project: project,
                            machineGroupId: machineGroupId
                        },
                        body: deploymentMachines
                    })];
            });
        });
    };
    /**
     * @param machine -
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     */
    TaskAgentRestClient.prototype.addDeploymentMachine = function (machine, project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/machines/{machineId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        body: machine
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     * @param machineId -
     */
    TaskAgentRestClient.prototype.deleteDeploymentMachine = function (project, deploymentGroupId, machineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/machines/{machineId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId,
                            machineId: machineId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     * @param machineId -
     * @param expand -
     */
    TaskAgentRestClient.prototype.getDeploymentMachine = function (project, deploymentGroupId, machineId, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/machines/{machineId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId,
                            machineId: machineId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     * @param tags -
     * @param name -
     * @param expand -
     */
    TaskAgentRestClient.prototype.getDeploymentMachines = function (project, deploymentGroupId, tags, name, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    tags: tags && tags.join(","),
                    name: name,
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/machines/{machineId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param machine -
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     * @param machineId -
     */
    TaskAgentRestClient.prototype.replaceDeploymentMachine = function (machine, project, deploymentGroupId, machineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/machines/{machineId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId,
                            machineId: machineId
                        },
                        body: machine
                    })];
            });
        });
    };
    /**
     * @param machine -
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     * @param machineId -
     */
    TaskAgentRestClient.prototype.updateDeploymentMachine = function (machine, project, deploymentGroupId, machineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/machines/{machineId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId,
                            machineId: machineId
                        },
                        body: machine
                    })];
            });
        });
    };
    /**
     * @param machines -
     * @param project - Project ID or project name
     * @param deploymentGroupId -
     */
    TaskAgentRestClient.prototype.updateDeploymentMachines = function (machines, project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/machines/{machineId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        body: machines
                    })];
            });
        });
    };
    /**
     * @param definition -
     * @param poolId -
     */
    TaskAgentRestClient.prototype.createAgentPoolMaintenanceDefinition = function (definition, poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancedefinitions/{definitionId}",
                        routeValues: {
                            poolId: poolId
                        },
                        body: definition
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param definitionId -
     */
    TaskAgentRestClient.prototype.deleteAgentPoolMaintenanceDefinition = function (poolId, definitionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancedefinitions/{definitionId}",
                        routeValues: {
                            poolId: poolId,
                            definitionId: definitionId
                        }
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param definitionId -
     */
    TaskAgentRestClient.prototype.getAgentPoolMaintenanceDefinition = function (poolId, definitionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancedefinitions/{definitionId}",
                        routeValues: {
                            poolId: poolId,
                            definitionId: definitionId
                        }
                    })];
            });
        });
    };
    /**
     * @param poolId -
     */
    TaskAgentRestClient.prototype.getAgentPoolMaintenanceDefinitions = function (poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancedefinitions/{definitionId}",
                        routeValues: {
                            poolId: poolId
                        }
                    })];
            });
        });
    };
    /**
     * @param definition -
     * @param poolId -
     * @param definitionId -
     */
    TaskAgentRestClient.prototype.updateAgentPoolMaintenanceDefinition = function (definition, poolId, definitionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancedefinitions/{definitionId}",
                        routeValues: {
                            poolId: poolId,
                            definitionId: definitionId
                        },
                        body: definition
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param jobId -
     */
    TaskAgentRestClient.prototype.deleteAgentPoolMaintenanceJob = function (poolId, jobId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancejobs/{jobId}",
                        routeValues: {
                            poolId: poolId,
                            jobId: jobId
                        }
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param jobId -
     */
    TaskAgentRestClient.prototype.getAgentPoolMaintenanceJob = function (poolId, jobId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancejobs/{jobId}",
                        routeValues: {
                            poolId: poolId,
                            jobId: jobId
                        }
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param jobId -
     */
    TaskAgentRestClient.prototype.getAgentPoolMaintenanceJobLogs = function (poolId, jobId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancejobs/{jobId}",
                        routeValues: {
                            poolId: poolId,
                            jobId: jobId
                        }
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param definitionId -
     */
    TaskAgentRestClient.prototype.getAgentPoolMaintenanceJobs = function (poolId, definitionId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    definitionId: definitionId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancejobs/{jobId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param job -
     * @param poolId -
     */
    TaskAgentRestClient.prototype.queueAgentPoolMaintenanceJob = function (job, poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancejobs/{jobId}",
                        routeValues: {
                            poolId: poolId
                        },
                        body: job
                    })];
            });
        });
    };
    /**
     * @param job -
     * @param poolId -
     * @param jobId -
     */
    TaskAgentRestClient.prototype.updateAgentPoolMaintenanceJob = function (job, poolId, jobId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/maintenancejobs/{jobId}",
                        routeValues: {
                            poolId: poolId,
                            jobId: jobId
                        },
                        body: job
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param messageId -
     * @param sessionId -
     */
    TaskAgentRestClient.prototype.deleteMessage = function (poolId, messageId, sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    sessionId: sessionId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/messages/{messageId}",
                        routeValues: {
                            poolId: poolId,
                            messageId: messageId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param sessionId -
     * @param lastMessageId -
     */
    TaskAgentRestClient.prototype.getMessage = function (poolId, sessionId, lastMessageId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    sessionId: sessionId,
                    lastMessageId: lastMessageId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/messages/{messageId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param agentId -
     */
    TaskAgentRestClient.prototype.refreshAgent = function (poolId, agentId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    agentId: agentId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/messages/{messageId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     */
    TaskAgentRestClient.prototype.refreshAgents = function (poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/messages/{messageId}",
                        routeValues: {
                            poolId: poolId
                        }
                    })];
            });
        });
    };
    /**
     * @param message -
     * @param poolId -
     * @param requestId -
     */
    TaskAgentRestClient.prototype.sendMessage = function (message, poolId, requestId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    requestId: requestId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/messages/{messageId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues,
                        body: message
                    })];
            });
        });
    };
    /**
     * @param packageType -
     * @param platform -
     * @param version -
     */
    TaskAgentRestClient.prototype.getPackage = function (packageType, platform, version) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "_apis/distributedtask/packages/{packageType}/{platform}/{version}",
                        routeValues: {
                            packageType: packageType,
                            platform: platform,
                            version: version
                        }
                    })];
            });
        });
    };
    /**
     * @param packageType -
     * @param platform -
     * @param top -
     */
    TaskAgentRestClient.prototype.getPackages = function (packageType, platform, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "_apis/distributedtask/packages/{packageType}/{platform}/{version}",
                        routeValues: {
                            packageType: packageType,
                            platform: platform
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     */
    TaskAgentRestClient.prototype.getAgentPoolMetadata = function (poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "text/plain",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/poolmetadata",
                        routeValues: {
                            poolId: poolId
                        }
                    })];
            });
        });
    };
    /**
     * @param agentPoolMetadata -
     * @param poolId -
     */
    TaskAgentRestClient.prototype.setAgentPoolMetadata = function (agentPoolMetadata, poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/poolmetadata",
                        routeValues: {
                            poolId: poolId
                        },
                        customHeaders: {
                            "Content-Type": "application/octet-stream",
                        },
                        body: agentPoolMetadata,
                        isRawData: true
                    })];
            });
        });
    };
    /**
     * Checks if current identity has passed permissions on a pool.
     *
     * @param poolId - Id of the pool to check
     * @param permissions - Permissions to check. Multiple permissions might be merged into single value using bitwise OR operator (e.g. AgentPoolPermissions.Manage | AgentPoolPermissions.View)
     */
    TaskAgentRestClient.prototype.hasPoolPermissions = function (poolId, permissions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/permissions/{permissions}",
                        routeValues: {
                            poolId: poolId,
                            permissions: permissions
                        }
                    })];
            });
        });
    };
    /**
     * Create an agent pool.
     *
     * @param pool - Details about the new agent pool
     */
    TaskAgentRestClient.prototype.addAgentPool = function (pool) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}",
                        body: pool
                    })];
            });
        });
    };
    /**
     * Delete an agent pool.
     *
     * @param poolId - ID of the agent pool to delete
     */
    TaskAgentRestClient.prototype.deleteAgentPool = function (poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}",
                        routeValues: {
                            poolId: poolId
                        }
                    })];
            });
        });
    };
    /**
     * Get information about an agent pool.
     *
     * @param poolId - An agent pool ID
     * @param properties - Agent pool properties (comma-separated)
     * @param actionFilter - Filter by whether the calling user has use or manage permissions
     */
    TaskAgentRestClient.prototype.getAgentPool = function (poolId, properties, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    properties: properties && properties.join(","),
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}",
                        routeValues: {
                            poolId: poolId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of agent pools.
     *
     * @param poolName - Filter by name
     * @param properties - Filter by agent pool properties (comma-separated)
     * @param poolType - Filter by pool type
     * @param actionFilter - Filter by whether the calling user has use or manage permissions
     */
    TaskAgentRestClient.prototype.getAgentPools = function (poolName, properties, poolType, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    poolName: poolName,
                    properties: properties && properties.join(","),
                    poolType: poolType,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of agent pools.
     *
     * @param poolIds - pool Ids to fetch
     * @param actionFilter - Filter by whether the calling user has use or manage permissions
     */
    TaskAgentRestClient.prototype.getAgentPoolsByIds = function (poolIds, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    poolIds: poolIds && poolIds.join(","),
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update properties on an agent pool
     *
     * @param pool - Updated agent pool details
     * @param poolId - The agent pool to update
     */
    TaskAgentRestClient.prototype.updateAgentPool = function (pool, poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}",
                        routeValues: {
                            poolId: poolId
                        },
                        body: pool
                    })];
            });
        });
    };
    /**
     * Create a new agent queue to connect a project to an agent pool.
     *
     * @param queue - Details about the queue to create
     * @param project - Project ID or project name
     * @param authorizePipelines - Automatically authorize this queue when using YAML
     */
    TaskAgentRestClient.prototype.addAgentQueue = function (queue, project, authorizePipelines) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    authorizePipelines: authorizePipelines
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: queue
                    })];
            });
        });
    };
    /**
     * Create a new team project.
     *
     * @param project - Project ID or project name
     */
    TaskAgentRestClient.prototype.createTeamProject = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * Removes an agent queue from a project.
     *
     * @param queueId - The agent queue to remove
     * @param project - Project ID or project name
     */
    TaskAgentRestClient.prototype.deleteAgentQueue = function (queueId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}",
                        routeValues: {
                            project: project,
                            queueId: queueId
                        }
                    })];
            });
        });
    };
    /**
     * Get information about an agent queue.
     *
     * @param queueId - The agent queue to get information about
     * @param project - Project ID or project name
     * @param actionFilter - Filter by whether the calling user has use or manage permissions
     */
    TaskAgentRestClient.prototype.getAgentQueue = function (queueId, project, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}",
                        routeValues: {
                            project: project,
                            queueId: queueId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of agent queues.
     *
     * @param project - Project ID or project name
     * @param queueName - Filter on the agent queue name
     * @param actionFilter - Filter by whether the calling user has use or manage permissions
     */
    TaskAgentRestClient.prototype.getAgentQueues = function (project, queueName, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    queueName: queueName,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of agent queues by their IDs
     *
     * @param queueIds - A comma-separated list of agent queue IDs to retrieve
     * @param project - Project ID or project name
     * @param actionFilter - Filter by whether the calling user has use or manage permissions
     */
    TaskAgentRestClient.prototype.getAgentQueuesByIds = function (queueIds, project, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    queueIds: queueIds && queueIds.join(","),
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of agent queues by their names
     *
     * @param queueNames - A comma-separated list of agent names to retrieve
     * @param project - Project ID or project name
     * @param actionFilter - Filter by whether the calling user has use or manage permissions
     */
    TaskAgentRestClient.prototype.getAgentQueuesByNames = function (queueNames, project, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    queueNames: queueNames && queueNames.join(","),
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of agent queues by pool ids
     *
     * @param poolIds - A comma-separated list of pool ids to get the corresponding queues for
     * @param project - Project ID or project name
     * @param actionFilter - Filter by whether the calling user has use or manage permissions
     */
    TaskAgentRestClient.prototype.getAgentQueuesForPools = function (poolIds, project, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    poolIds: poolIds && poolIds.join(","),
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/queues/{queueId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param agentCloudId -
     */
    TaskAgentRestClient.prototype.getAgentCloudRequests = function (agentCloudId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/agentclouds/{agentCloudId}/requests/{agentCloudRequestId}",
                        routeValues: {
                            agentCloudId: agentCloudId
                        }
                    })];
            });
        });
    };
    /**
     */
    TaskAgentRestClient.prototype.getResourceLimits = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/resourcelimits"
                    })];
            });
        });
    };
    /**
     * @param parallelismTag -
     * @param poolIsHosted -
     * @param includeRunningRequests -
     */
    TaskAgentRestClient.prototype.getResourceUsage = function (parallelismTag, poolIsHosted, includeRunningRequests) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    parallelismTag: parallelismTag,
                    poolIsHosted: poolIsHosted,
                    includeRunningRequests: includeRunningRequests
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "_apis/distributedtask/resourceusage",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param taskGroupId -
     */
    TaskAgentRestClient.prototype.getTaskGroupHistory = function (project, taskGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}/revisions",
                        routeValues: {
                            project: project,
                            taskGroupId: taskGroupId
                        }
                    })];
            });
        });
    };
    /**
     * Delete a secure file
     *
     * @param project - Project ID or project name
     * @param secureFileId - The unique secure file Id
     */
    TaskAgentRestClient.prototype.deleteSecureFile = function (project, secureFileId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project,
                            secureFileId: secureFileId
                        }
                    })];
            });
        });
    };
    /**
     * Download a secure file by Id
     *
     * @param project - Project ID or project name
     * @param secureFileId - The unique secure file Id
     * @param ticket - A valid download ticket
     * @param download - If download is true, the file is sent as attachement in the response body. If download is false, the response body contains the file stream.
     */
    TaskAgentRestClient.prototype.downloadSecureFile = function (project, secureFileId, ticket, download) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    ticket: ticket,
                    download: download
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project,
                            secureFileId: secureFileId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a secure file
     *
     * @param project - Project ID or project name
     * @param secureFileId - The unique secure file Id
     * @param includeDownloadTicket - If includeDownloadTicket is true and the caller has permissions, a download ticket is included in the response.
     * @param actionFilter -
     */
    TaskAgentRestClient.prototype.getSecureFile = function (project, secureFileId, includeDownloadTicket, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeDownloadTicket: includeDownloadTicket,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project,
                            secureFileId: secureFileId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get secure files
     *
     * @param project - Project ID or project name
     * @param namePattern - Name of the secure file to match. Can include wildcards to match multiple files.
     * @param includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param actionFilter - Filter by secure file permissions for View, Manage or Use action. Defaults to View.
     */
    TaskAgentRestClient.prototype.getSecureFiles = function (project, namePattern, includeDownloadTickets, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    namePattern: namePattern,
                    includeDownloadTickets: includeDownloadTickets,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get secure files
     *
     * @param project - Project ID or project name
     * @param secureFileIds - A list of secure file Ids
     * @param includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param actionFilter -
     */
    TaskAgentRestClient.prototype.getSecureFilesByIds = function (project, secureFileIds, includeDownloadTickets, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    secureFileIds: secureFileIds && secureFileIds.join(","),
                    includeDownloadTickets: includeDownloadTickets,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get secure files
     *
     * @param project - Project ID or project name
     * @param secureFileNames - A list of secure file Ids
     * @param includeDownloadTickets - If includeDownloadTickets is true and the caller has permissions, a download ticket for each secure file is included in the response.
     * @param actionFilter -
     */
    TaskAgentRestClient.prototype.getSecureFilesByNames = function (project, secureFileNames, includeDownloadTickets, actionFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    secureFileNames: secureFileNames && secureFileNames.join(","),
                    includeDownloadTickets: includeDownloadTickets,
                    actionFilter: actionFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Query secure files using a name pattern and a condition on file properties.
     *
     * @param condition - The main condition syntax is described [here](https://go.microsoft.com/fwlink/?linkid=842996). Use the *property('property-name')* function to access the value of the specified property of a secure file. It returns null if the property is not set. E.g. \`\`\` and( eq( property('devices'), '2' ), in( property('provisioning profile type'), 'ad hoc', 'development' ) ) \`\`\`
     * @param project - Project ID or project name
     * @param namePattern - Name of the secure file to match. Can include wildcards to match multiple files.
     */
    TaskAgentRestClient.prototype.querySecureFilesByProperties = function (condition, project, namePattern) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    namePattern: namePattern
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: condition
                    })];
            });
        });
    };
    /**
     * Update the name or properties of an existing secure file
     *
     * @param secureFile - The secure file with updated name and/or properties
     * @param project - Project ID or project name
     * @param secureFileId - The unique secure file Id
     */
    TaskAgentRestClient.prototype.updateSecureFile = function (secureFile, project, secureFileId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project,
                            secureFileId: secureFileId
                        },
                        body: secureFile
                    })];
            });
        });
    };
    /**
     * Update properties and/or names of a set of secure files. Files are identified by their IDs. Properties provided override the existing one entirely, i.e. do not merge.
     *
     * @param secureFiles - A list of secure file objects. Only three field must be populated Id, Name, and Properties. The rest of fields in the object are ignored.
     * @param project - Project ID or project name
     */
    TaskAgentRestClient.prototype.updateSecureFiles = function (secureFiles, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project
                        },
                        body: secureFiles
                    })];
            });
        });
    };
    /**
     * Upload a secure file, include the file stream in the request body
     *
     * @param content - Content to upload
     * @param project - Project ID or project name
     * @param name - Name of the file to upload
     * @param authorizePipelines - If authorizePipelines is true, then the secure file is authorized for use by all pipelines in the project.
     */
    TaskAgentRestClient.prototype.uploadSecureFile = function (content, project, name, authorizePipelines) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    name: name,
                    authorizePipelines: authorizePipelines
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/securefiles/{secureFileId}",
                        routeValues: {
                            project: project
                        },
                        customHeaders: {
                            "Content-Type": "application/octet-stream",
                        },
                        queryParams: queryValues,
                        body: content,
                        isRawData: true
                    })];
            });
        });
    };
    /**
     * @param session -
     * @param poolId -
     */
    TaskAgentRestClient.prototype.createAgentSession = function (session, poolId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/sessions/{sessionId}",
                        routeValues: {
                            poolId: poolId
                        },
                        body: session
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param sessionId -
     */
    TaskAgentRestClient.prototype.deleteAgentSession = function (poolId, sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/sessions/{sessionId}",
                        routeValues: {
                            poolId: poolId,
                            sessionId: sessionId
                        }
                    })];
            });
        });
    };
    /**
     * Register a deployment target to a deployment group. Generally this is called by agent configuration tool.
     *
     * @param machine - Deployment target to register.
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group to which the deployment target is registered.
     */
    TaskAgentRestClient.prototype.addDeploymentTarget = function (machine, project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        body: machine
                    })];
            });
        });
    };
    /**
     * Delete a deployment target in a deployment group. This deletes the agent from associated deployment pool too.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group in which deployment target is deleted.
     * @param targetId - ID of the deployment target to delete.
     */
    TaskAgentRestClient.prototype.deleteDeploymentTarget = function (project, deploymentGroupId, targetId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId,
                            targetId: targetId
                        }
                    })];
            });
        });
    };
    /**
     * Get a deployment target by its ID in a deployment group
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group to which deployment target belongs.
     * @param targetId - ID of the deployment target to return.
     * @param expand - Include these additional details in the returned objects.
     */
    TaskAgentRestClient.prototype.getDeploymentTarget = function (project, deploymentGroupId, targetId, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId,
                            targetId: targetId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of deployment targets in a deployment group.
     *
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group.
     * @param tags - Get only the deployment targets that contain all these comma separted list of tags.
     * @param name - Name pattern of the deployment targets to return.
     * @param partialNameMatch - When set to true, treats **name** as pattern. Else treats it as absolute match. Default is **false**.
     * @param expand - Include these additional details in the returned objects.
     * @param agentStatus - Get only deployment targets that have this status.
     * @param agentJobResult - Get only deployment targets that have this last job result.
     * @param continuationToken - Get deployment targets with names greater than this continuationToken lexicographically.
     * @param top - Maximum number of deployment targets to return. Default is **1000**.
     * @param enabled - Get only deployment targets that are enabled or disabled. Default is 'null' which returns all the targets.
     * @param propertyFilters -
     */
    TaskAgentRestClient.prototype.getDeploymentTargets = function (project, deploymentGroupId, tags, name, partialNameMatch, expand, agentStatus, agentJobResult, continuationToken, top, enabled, propertyFilters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    tags: tags && tags.join(","),
                    name: name,
                    partialNameMatch: partialNameMatch,
                    '$expand': expand,
                    agentStatus: agentStatus,
                    agentJobResult: agentJobResult,
                    continuationToken: continuationToken,
                    '$top': top,
                    enabled: enabled,
                    propertyFilters: propertyFilters && propertyFilters.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
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
     * Replace a deployment target in a deployment group. Generally this is called by agent configuration tool.
     *
     * @param machine - New deployment target.
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group in which deployment target is replaced.
     * @param targetId - ID of the deployment target to replace.
     */
    TaskAgentRestClient.prototype.replaceDeploymentTarget = function (machine, project, deploymentGroupId, targetId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId,
                            targetId: targetId
                        },
                        body: machine
                    })];
            });
        });
    };
    /**
     * Update a deployment target and its agent properties in a deployment group. Generally this is called by agent configuration tool.
     *
     * @param machine - Deployment target to update.
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group in which deployment target is updated.
     * @param targetId - ID of the deployment target to update.
     */
    TaskAgentRestClient.prototype.updateDeploymentTarget = function (machine, project, deploymentGroupId, targetId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId,
                            targetId: targetId
                        },
                        body: machine
                    })];
            });
        });
    };
    /**
     * Update tags of a list of deployment targets in a deployment group.
     *
     * @param machines - Deployment targets with tags to udpdate.
     * @param project - Project ID or project name
     * @param deploymentGroupId - ID of the deployment group in which deployment targets are updated.
     */
    TaskAgentRestClient.prototype.updateDeploymentTargets = function (machines, project, deploymentGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/deploymentgroups/{deploymentGroupId}/targets/{targetId}",
                        routeValues: {
                            project: project,
                            deploymentGroupId: deploymentGroupId
                        },
                        body: machines
                    })];
            });
        });
    };
    /**
     * Create a task group.
     *
     * @param taskGroup - Task group object to create.
     * @param project - Project ID or project name
     */
    TaskAgentRestClient.prototype.addTaskGroup = function (taskGroup, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project
                        },
                        body: taskGroup
                    })];
            });
        });
    };
    /**
     * Delete a task group.
     *
     * @param project - Project ID or project name
     * @param taskGroupId - Id of the task group to be deleted.
     * @param comment - Comments to delete.
     */
    TaskAgentRestClient.prototype.deleteTaskGroup = function (project, taskGroupId, comment) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    comment: comment
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project,
                            taskGroupId: taskGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get task group.
     *
     * @param project - Project ID or project name
     * @param taskGroupId - Id of the task group.
     * @param versionSpec - version specification of the task group. examples: 1, 1.0.
     * @param expand - The properties that should be expanded. example $expand=Tasks will expand nested task groups.
     */
    TaskAgentRestClient.prototype.getTaskGroup = function (project, taskGroupId, versionSpec, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    versionSpec: versionSpec,
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project,
                            taskGroupId: taskGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param taskGroupId -
     * @param revision -
     */
    TaskAgentRestClient.prototype.getTaskGroupRevision = function (project, taskGroupId, revision) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    revision: revision
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project,
                            taskGroupId: taskGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * List task groups.
     *
     * @param project - Project ID or project name
     * @param taskGroupId - Id of the task group.
     * @param expanded - 'true' to recursively expand task groups. Default is 'false'.
     * @param taskIdFilter - Guid of the taskId to filter.
     * @param deleted - 'true'to include deleted task groups. Default is 'false'.
     * @param top - Number of task groups to get.
     * @param continuationToken - Gets the task groups after the continuation token provided.
     * @param queryOrder - Gets the results in the defined order. Default is 'CreatedOnDescending'.
     */
    TaskAgentRestClient.prototype.getTaskGroups = function (project, taskGroupId, expanded, taskIdFilter, deleted, top, continuationToken, queryOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    expanded: expanded,
                    taskIdFilter: taskIdFilter,
                    deleted: deleted,
                    '$top': top,
                    continuationToken: continuationToken,
                    queryOrder: queryOrder
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project,
                            taskGroupId: taskGroupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param taskGroupMetadata -
     * @param project - Project ID or project name
     * @param parentTaskGroupId -
     */
    TaskAgentRestClient.prototype.publishTaskGroup = function (taskGroupMetadata, project, parentTaskGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    parentTaskGroupId: parentTaskGroupId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: taskGroupMetadata
                    })];
            });
        });
    };
    /**
     * @param taskGroup -
     * @param project - Project ID or project name
     */
    TaskAgentRestClient.prototype.undeleteTaskGroup = function (taskGroup, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project
                        },
                        body: taskGroup
                    })];
            });
        });
    };
    /**
     * Update a task group.
     *
     * @param taskGroup - Task group to update.
     * @param project - Project ID or project name
     * @param taskGroupId - Id of the task group to update.
     */
    TaskAgentRestClient.prototype.updateTaskGroup = function (taskGroup, project, taskGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project,
                            taskGroupId: taskGroupId
                        },
                        body: taskGroup
                    })];
            });
        });
    };
    /**
     * @param taskGroupUpdateProperties -
     * @param project - Project ID or project name
     * @param taskGroupId -
     * @param disablePriorVersions -
     */
    TaskAgentRestClient.prototype.updateTaskGroupProperties = function (taskGroupUpdateProperties, project, taskGroupId, disablePriorVersions) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    disablePriorVersions: disablePriorVersions
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/taskgroups/{taskGroupId}",
                        routeValues: {
                            project: project,
                            taskGroupId: taskGroupId
                        },
                        queryParams: queryValues,
                        body: taskGroupUpdateProperties
                    })];
            });
        });
    };
    /**
     * @param taskId -
     */
    TaskAgentRestClient.prototype.deleteTaskDefinition = function (taskId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/tasks/{taskId}/{versionString}",
                        routeValues: {
                            taskId: taskId
                        }
                    })];
            });
        });
    };
    /**
     * @param taskId -
     * @param versionString -
     * @param visibility -
     * @param scopeLocal -
     */
    TaskAgentRestClient.prototype.getTaskContentZip = function (taskId, versionString, visibility, scopeLocal) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    visibility: visibility,
                    scopeLocal: scopeLocal
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "_apis/distributedtask/tasks/{taskId}/{versionString}",
                        routeValues: {
                            taskId: taskId,
                            versionString: versionString
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param taskId -
     * @param versionString -
     * @param visibility -
     * @param scopeLocal -
     */
    TaskAgentRestClient.prototype.getTaskDefinition = function (taskId, versionString, visibility, scopeLocal) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    visibility: visibility,
                    scopeLocal: scopeLocal
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/tasks/{taskId}/{versionString}",
                        routeValues: {
                            taskId: taskId,
                            versionString: versionString
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param taskId -
     * @param visibility -
     * @param scopeLocal -
     * @param allVersions -
     */
    TaskAgentRestClient.prototype.getTaskDefinitions = function (taskId, visibility, scopeLocal, allVersions) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    visibility: visibility,
                    scopeLocal: scopeLocal,
                    allVersions: allVersions
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/tasks/{taskId}/{versionString}",
                        routeValues: {
                            taskId: taskId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param poolId -
     * @param agentId -
     * @param currentState -
     */
    TaskAgentRestClient.prototype.updateAgentUpdateState = function (poolId, agentId, currentState) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    currentState: currentState
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/agents/{agentId}/updates",
                        routeValues: {
                            poolId: poolId,
                            agentId: agentId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param userCapabilities -
     * @param poolId -
     * @param agentId -
     */
    TaskAgentRestClient.prototype.updateAgentUserCapabilities = function (userCapabilities, poolId, agentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "_apis/distributedtask/pools/{poolId}/agents/{agentId}/usercapabilities",
                        routeValues: {
                            poolId: poolId,
                            agentId: agentId
                        },
                        body: userCapabilities
                    })];
            });
        });
    };
    /**
     * Add a variable group.
     *
     * @param variableGroupParameters -
     */
    TaskAgentRestClient.prototype.addVariableGroup = function (variableGroupParameters) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "_apis/distributedtask/variablegroups/{groupId}",
                        body: variableGroupParameters
                    })];
            });
        });
    };
    /**
     * Delete a variable group
     *
     * @param groupId - Id of the variable group.
     * @param projectIds -
     */
    TaskAgentRestClient.prototype.deleteVariableGroup = function (groupId, projectIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectIds: projectIds && projectIds.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "DELETE",
                        routeTemplate: "_apis/distributedtask/variablegroups/{groupId}",
                        routeValues: {
                            groupId: groupId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Add a variable group.
     *
     * @param variableGroupProjectReferences -
     * @param variableGroupId -
     */
    TaskAgentRestClient.prototype.shareVariableGroup = function (variableGroupProjectReferences, variableGroupId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    variableGroupId: variableGroupId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "_apis/distributedtask/variablegroups/{groupId}",
                        queryParams: queryValues,
                        body: variableGroupProjectReferences
                    })];
            });
        });
    };
    /**
     * Update a variable group.
     *
     * @param variableGroupParameters -
     * @param groupId - Id of the variable group to update.
     */
    TaskAgentRestClient.prototype.updateVariableGroup = function (variableGroupParameters, groupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PUT",
                        routeTemplate: "_apis/distributedtask/variablegroups/{groupId}",
                        routeValues: {
                            groupId: groupId
                        },
                        body: variableGroupParameters
                    })];
            });
        });
    };
    /**
     * Get a variable group.
     *
     * @param project - Project ID or project name
     * @param groupId - Id of the variable group.
     */
    TaskAgentRestClient.prototype.getVariableGroup = function (project, groupId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/distributedtask/variablegroups/{groupId}",
                        routeValues: {
                            project: project,
                            groupId: groupId
                        }
                    })];
            });
        });
    };
    /**
     * Get variable groups.
     *
     * @param project - Project ID or project name
     * @param groupName - Name of variable group.
     * @param actionFilter - Action filter for the variable group. It specifies the action which can be performed on the variable groups.
     * @param top - Number of variable groups to get.
     * @param continuationToken - Gets the variable groups after the continuation token provided.
     * @param queryOrder - Gets the results in the defined order. Default is 'IdDescending'.
     */
    TaskAgentRestClient.prototype.getVariableGroups = function (project, groupName, actionFilter, top, continuationToken, queryOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    groupName: groupName,
                    actionFilter: actionFilter,
                    '$top': top,
                    continuationToken: continuationToken,
                    queryOrder: queryOrder
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/distributedtask/variablegroups/{groupId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get variable groups by ids.
     *
     * @param project - Project ID or project name
     * @param groupIds - Comma separated list of Ids of variable groups.
     * @param loadSecrets - Flag indicating if the secrets within variable groups should be loaded.
     */
    TaskAgentRestClient.prototype.getVariableGroupsById = function (project, groupIds, loadSecrets) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    groupIds: groupIds && groupIds.join(","),
                    loadSecrets: loadSecrets
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/distributedtask/variablegroups/{groupId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param createParameters -
     * @param project - Project ID or project name
     * @param environmentId -
     */
    TaskAgentRestClient.prototype.addVirtualMachineGroup = function (createParameters, project, environmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/virtualmachinegroups/{resourceId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId
                        },
                        body: createParameters
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param environmentId -
     * @param resourceId -
     */
    TaskAgentRestClient.prototype.deleteVirtualMachineGroup = function (project, environmentId, resourceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/virtualmachinegroups/{resourceId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId,
                            resourceId: resourceId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param environmentId -
     * @param resourceId -
     */
    TaskAgentRestClient.prototype.getVirtualMachineGroup = function (project, environmentId, resourceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/virtualmachinegroups/{resourceId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId,
                            resourceId: resourceId
                        }
                    })];
            });
        });
    };
    /**
     * @param resource -
     * @param project - Project ID or project name
     * @param environmentId -
     */
    TaskAgentRestClient.prototype.updateVirtualMachineGroup = function (resource, project, environmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/virtualmachinegroups/{resourceId}",
                        routeValues: {
                            project: project,
                            environmentId: environmentId
                        },
                        body: resource
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param environmentId -
     * @param resourceId -
     * @param continuationToken -
     * @param name -
     * @param partialNameMatch -
     * @param tags -
     * @param top -
     */
    TaskAgentRestClient.prototype.getVirtualMachines = function (project, environmentId, resourceId, continuationToken, name, partialNameMatch, tags, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    continuationToken: continuationToken,
                    name: name,
                    partialNameMatch: partialNameMatch,
                    tags: tags && tags.join(","),
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/virtualmachinegroups/{resourceId}/virtualmachines",
                        routeValues: {
                            project: project,
                            environmentId: environmentId,
                            resourceId: resourceId
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
     * @param machines -
     * @param project - Project ID or project name
     * @param environmentId -
     * @param resourceId -
     */
    TaskAgentRestClient.prototype.updateVirtualMachines = function (machines, project, environmentId, resourceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/distributedtask/environments/{environmentId}/providers/virtualmachinegroups/{resourceId}/virtualmachines",
                        routeValues: {
                            project: project,
                            environmentId: environmentId,
                            resourceId: resourceId
                        },
                        body: machines
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
    TaskAgentRestClient.prototype.createAadOAuthRequest = function (tenantId, redirectUri, promptOption, completeCallbackPayload, completeCallbackByAuthCode) {
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
                        routeTemplate: "_apis/distributedtask/serviceendpointproxy/vstsaadoauth",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     */
    TaskAgentRestClient.prototype.getVstsAadTenantId = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/serviceendpointproxy/vstsaadoauth"
                    })];
            });
        });
    };
    /**
     * GET the Yaml schema used for Yaml file validation.
     *
     * @param validateTaskNames - Whether the schema should validate that tasks are actually installed (useful for offline tools where you don't want validation).
     */
    TaskAgentRestClient.prototype.getYamlSchema = function (validateTaskNames) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    validateTaskNames: validateTaskNames
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/distributedtask/yamlschema",
                        queryParams: queryValues
                    })];
            });
        });
    };
    TaskAgentRestClient.RESOURCE_AREA_ID = "a85b8835-c1a1-4aac-ae97-1c3d0ba72dbd";
    return TaskAgentRestClient;
}(RestClientBase));
export { TaskAgentRestClient };
