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
var ReleaseRestClient = /** @class */ (function (_super) {
    __extends(ReleaseRestClient, _super);
    function ReleaseRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * Returns the artifact details that automation agent requires
     *
     * @param project - Project ID or project name
     * @param releaseId -
     */
    ReleaseRestClient.prototype.getAgentArtifactDefinitions = function (project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/agentartifacts",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        }
                    })];
            });
        });
    };
    /**
     * Get a list of approvals
     *
     * @param project - Project ID or project name
     * @param assignedToFilter - Approvals assigned to this user.
     * @param statusFilter - Approvals with this status. Default is 'pending'.
     * @param releaseIdsFilter - Approvals for release id(s) mentioned in the filter. Multiple releases can be mentioned by separating them with ',' e.g. releaseIdsFilter=1,2,3,4.
     * @param typeFilter - Approval with this type.
     * @param top - Number of approvals to get. Default is 50.
     * @param continuationToken - Gets the approvals after the continuation token provided.
     * @param queryOrder - Gets the results in the defined order of created approvals. Default is 'descending'.
     * @param includeMyGroupApprovals - 'true' to include my group approvals. Default is 'false'.
     */
    ReleaseRestClient.prototype.getApprovals = function (project, assignedToFilter, statusFilter, releaseIdsFilter, typeFilter, top, continuationToken, queryOrder, includeMyGroupApprovals) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    assignedToFilter: assignedToFilter,
                    statusFilter: statusFilter,
                    releaseIdsFilter: releaseIdsFilter && releaseIdsFilter.join(","),
                    typeFilter: typeFilter,
                    top: top,
                    continuationToken: continuationToken,
                    queryOrder: queryOrder,
                    includeMyGroupApprovals: includeMyGroupApprovals
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/Release/approvals",
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
     * Get approval history.
     *
     * @param project - Project ID or project name
     * @param approvalStepId - Id of the approval.
     */
    ReleaseRestClient.prototype.getApprovalHistory = function (project, approvalStepId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/Release/approvals/{approvalStepId}/history",
                        routeValues: {
                            project: project,
                            approvalStepId: approvalStepId
                        }
                    })];
            });
        });
    };
    /**
     * Get an approval.
     *
     * @param project - Project ID or project name
     * @param approvalId - Id of the approval.
     * @param includeHistory - 'true' to include history of the approval. Default is 'false'.
     */
    ReleaseRestClient.prototype.getApproval = function (project, approvalId, includeHistory) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeHistory: includeHistory
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/Release/approvals/{approvalId}",
                        routeValues: {
                            project: project,
                            approvalId: approvalId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update status of an approval
     *
     * @param approval - ReleaseApproval object having status, approver and comments.
     * @param project - Project ID or project name
     * @param approvalId - Id of the approval.
     */
    ReleaseRestClient.prototype.updateReleaseApproval = function (approval, project, approvalId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/approvals/{approvalId}",
                        routeValues: {
                            project: project,
                            approvalId: approvalId
                        },
                        body: approval
                    })];
            });
        });
    };
    /**
     * @param approvals -
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.updateReleaseApprovals = function (approvals, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/approvals",
                        routeValues: {
                            project: project
                        },
                        body: approvals
                    })];
            });
        });
    };
    /**
     * Get a task attachment.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param attemptId - Attempt number of deployment.
     * @param timelineId - Timeline Id of the task.
     * @param recordId - Record Id of attachment.
     * @param type - Type of the attachment.
     * @param name - Name of the attachment.
     */
    ReleaseRestClient.prototype.getTaskAttachmentContent = function (project, releaseId, environmentId, attemptId, timelineId, recordId, type, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/timelines/{timelineId}/records/{recordId}/attachments/{type}/{name}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            attemptId: attemptId,
                            timelineId: timelineId,
                            recordId: recordId,
                            type: type,
                            name: name
                        }
                    })];
            });
        });
    };
    /**
     * Get a release task attachment.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param attemptId - Attempt number of deployment.
     * @param planId - Plan Id of the deploy phase.
     * @param timelineId - Timeline Id of the task.
     * @param recordId - Record Id of attachment.
     * @param type - Type of the attachment.
     * @param name - Name of the attachment.
     */
    ReleaseRestClient.prototype.getReleaseTaskAttachmentContent = function (project, releaseId, environmentId, attemptId, planId, timelineId, recordId, type, name) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/plan/{planId}/timelines/{timelineId}/records/{recordId}/attachments/{type}/{name}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            attemptId: attemptId,
                            planId: planId,
                            timelineId: timelineId,
                            recordId: recordId,
                            type: type,
                            name: name
                        }
                    })];
            });
        });
    };
    /**
     * Get the task attachments.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param attemptId - Attempt number of deployment.
     * @param timelineId - Timeline Id of the task.
     * @param type - Type of the attachment.
     */
    ReleaseRestClient.prototype.getTaskAttachments = function (project, releaseId, environmentId, attemptId, timelineId, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/timelines/{timelineId}/attachments/{type}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            attemptId: attemptId,
                            timelineId: timelineId,
                            type: type
                        }
                    })];
            });
        });
    };
    /**
     * Get the release task attachments.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param attemptId - Attempt number of deployment.
     * @param planId - Plan Id of the deploy phase.
     * @param type - Type of the attachment.
     */
    ReleaseRestClient.prototype.getReleaseTaskAttachments = function (project, releaseId, environmentId, attemptId, planId, type) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/plan/{planId}/attachments/{type}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            attemptId: attemptId,
                            planId: planId,
                            type: type
                        }
                    })];
            });
        });
    };
    /**
     * @param artifactType -
     * @param sourceId -
     * @param artifactVersionId -
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.getAutoTriggerIssues = function (artifactType, sourceId, artifactVersionId, project) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    artifactType: artifactType,
                    sourceId: sourceId,
                    artifactVersionId: artifactVersionId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/autotriggerissues",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets a badge that indicates the status of the most recent deployment for an environment.
     *
     * @param projectId - The ID of the Project.
     * @param releaseDefinitionId - The ID of the Release Definition.
     * @param environmentId - The ID of the Environment.
     * @param branchName - The name of the branch.
     */
    ReleaseRestClient.prototype.getDeploymentBadge = function (projectId, releaseDefinitionId, environmentId, branchName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/public/Release/badge/{projectId}/{releaseDefinitionId}/{environmentId}/{branchName}",
                        routeValues: {
                            projectId: projectId,
                            releaseDefinitionId: releaseDefinitionId,
                            environmentId: environmentId,
                            branchName: branchName
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param baseReleaseId -
     * @param top -
     * @param artifactAlias -
     */
    ReleaseRestClient.prototype.getReleaseChanges = function (project, releaseId, baseReleaseId, top, artifactAlias) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    baseReleaseId: baseReleaseId,
                    '$top': top,
                    artifactAlias: artifactAlias
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/changes",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param taskGroupId -
     * @param propertyFilters -
     */
    ReleaseRestClient.prototype.getDefinitionEnvironments = function (project, taskGroupId, propertyFilters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    taskGroupId: taskGroupId,
                    propertyFilters: propertyFilters && propertyFilters.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/definitionEnvironments",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create a release definition
     *
     * @param releaseDefinition - release definition object to create.
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.createReleaseDefinition = function (releaseDefinition, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}",
                        routeValues: {
                            project: project
                        },
                        body: releaseDefinition
                    })];
            });
        });
    };
    /**
     * Delete a release definition.
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the release definition.
     * @param comment - Comment for deleting a release definition.
     * @param forceDelete - 'true' to automatically cancel any in-progress release deployments and proceed with release definition deletion . Default is 'false'.
     */
    ReleaseRestClient.prototype.deleteReleaseDefinition = function (project, definitionId, comment, forceDelete) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    comment: comment,
                    forceDelete: forceDelete
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}",
                        routeValues: {
                            project: project,
                            definitionId: definitionId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a release definition.
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the release definition.
     * @param propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definition will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
     */
    ReleaseRestClient.prototype.getReleaseDefinition = function (project, definitionId, propertyFilters) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    propertyFilters: propertyFilters && propertyFilters.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}",
                        routeValues: {
                            project: project,
                            definitionId: definitionId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get release definition of a given revision.
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the release definition.
     * @param revision - Revision number of the release definition.
     */
    ReleaseRestClient.prototype.getReleaseDefinitionRevision = function (project, definitionId, revision) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    revision: revision
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}",
                        routeValues: {
                            project: project,
                            definitionId: definitionId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of release definitions.
     *
     * @param project - Project ID or project name
     * @param searchText - Get release definitions with names containing searchText.
     * @param expand - The properties that should be expanded in the list of Release definitions.
     * @param artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be \{projectGuid\}:\{BuildDefinitionId\}, for Jenkins it would be \{JenkinsConnectionId\}:\{JenkinsDefinitionId\}, for TfsOnPrem it would be \{TfsOnPremConnectionId\}:\{ProjectName\}:\{TfsOnPremDefinitionId\}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param top - Number of release definitions to get.
     * @param continuationToken - Gets the release definitions after the continuation token provided.
     * @param queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param path - Gets the release definitions under the specified path.
     * @param isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definitions will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release Definition from results irrespective of whether it has property set or not.
     * @param definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @param searchTextContainsFolderName - 'true' to get the release definitions under the folder with name as specified in searchText. Default is 'false'.
     */
    ReleaseRestClient.prototype.getReleaseDefinitions = function (project, searchText, expand, artifactType, artifactSourceId, top, continuationToken, queryOrder, path, isExactNameMatch, tagFilter, propertyFilters, definitionIdFilter, isDeleted, searchTextContainsFolderName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    searchText: searchText,
                    '$expand': expand,
                    artifactType: artifactType,
                    artifactSourceId: artifactSourceId,
                    '$top': top,
                    continuationToken: continuationToken,
                    queryOrder: queryOrder,
                    path: path,
                    isExactNameMatch: isExactNameMatch,
                    tagFilter: tagFilter && tagFilter.join(","),
                    propertyFilters: propertyFilters && propertyFilters.join(","),
                    definitionIdFilter: definitionIdFilter && definitionIdFilter.join(","),
                    isDeleted: isDeleted,
                    searchTextContainsFolderName: searchTextContainsFolderName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}",
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
     * Undelete a release definition.
     *
     * @param releaseDefinitionUndeleteParameter - Object for undelete release definition.
     * @param project - Project ID or project name
     * @param definitionId - Id of the release definition to be undeleted
     */
    ReleaseRestClient.prototype.undeleteReleaseDefinition = function (releaseDefinitionUndeleteParameter, project, definitionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}",
                        routeValues: {
                            project: project,
                            definitionId: definitionId
                        },
                        body: releaseDefinitionUndeleteParameter
                    })];
            });
        });
    };
    /**
     * Update a release definition.
     *
     * @param releaseDefinition - Release definition object to update.
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.updateReleaseDefinition = function (releaseDefinition, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}",
                        routeValues: {
                            project: project
                        },
                        body: releaseDefinition
                    })];
            });
        });
    };
    /**
     * Get a list of deployments
     *
     * @param project - Project ID or project name
     * @param definitionId - List the deployments for a given definition id.
     * @param definitionEnvironmentId - List the deployments for a given definition environment id.
     * @param createdBy - List the deployments for which deployments are created as identity specified.
     * @param minModifiedTime - List the deployments with LastModified time \>= minModifiedTime.
     * @param maxModifiedTime - List the deployments with LastModified time \<= maxModifiedTime.
     * @param deploymentStatus - List the deployments with given deployment status. Default is 'All'.
     * @param operationStatus - List the deployments with given operation status. Default is 'All'.
     * @param latestAttemptsOnly - 'true' to include deployments with latest attempt only. Default is 'false'.
     * @param queryOrder - List the deployments with given query order. Default is 'Descending'.
     * @param top - List the deployments with given top. Default top is '50' and Max top is '100'.
     * @param continuationToken - List the deployments with deployment id \>= continuationToken.
     * @param createdFor - List the deployments for which deployments are requested as identity specified.
     * @param minStartedTime - List the deployments with StartedOn time \>= minStartedTime.
     * @param maxStartedTime - List the deployments with StartedOn time \<= maxStartedTime.
     * @param sourceBranch - List the deployments that are deployed from given branch name.
     */
    ReleaseRestClient.prototype.getDeployments = function (project, definitionId, definitionEnvironmentId, createdBy, minModifiedTime, maxModifiedTime, deploymentStatus, operationStatus, latestAttemptsOnly, queryOrder, top, continuationToken, createdFor, minStartedTime, maxStartedTime, sourceBranch) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    definitionId: definitionId,
                    definitionEnvironmentId: definitionEnvironmentId,
                    createdBy: createdBy,
                    minModifiedTime: minModifiedTime,
                    maxModifiedTime: maxModifiedTime,
                    deploymentStatus: deploymentStatus,
                    operationStatus: operationStatus,
                    latestAttemptsOnly: latestAttemptsOnly,
                    queryOrder: queryOrder,
                    '$top': top,
                    continuationToken: continuationToken,
                    createdFor: createdFor,
                    minStartedTime: minStartedTime,
                    maxStartedTime: maxStartedTime,
                    sourceBranch: sourceBranch
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/Release/deployments",
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
     * @param queryParameters -
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.getDeploymentsForMultipleEnvironments = function (queryParameters, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/deployments",
                        routeValues: {
                            project: project
                        },
                        body: queryParameters
                    })];
            });
        });
    };
    /**
     * Get a release environment.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param expand - A property that should be expanded in the environment.
     */
    ReleaseRestClient.prototype.getReleaseEnvironment = function (project, releaseId, environmentId, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.7",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update the status of a release environment
     *
     * @param environmentUpdateData - Environment update meta data.
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     */
    ReleaseRestClient.prototype.updateReleaseEnvironment = function (environmentUpdateData, project, releaseId, environmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.7",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId
                        },
                        body: environmentUpdateData
                    })];
            });
        });
    };
    /**
     * Creates a definition environment template
     *
     * @param template - Definition environment template to create
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.createDefinitionEnvironmentTemplate = function (template, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/definitions/environmenttemplates",
                        routeValues: {
                            project: project
                        },
                        body: template
                    })];
            });
        });
    };
    /**
     * Delete a definition environment template
     *
     * @param project - Project ID or project name
     * @param templateId - Id of the definition environment template
     */
    ReleaseRestClient.prototype.deleteDefinitionEnvironmentTemplate = function (project, templateId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    templateId: templateId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/Release/definitions/environmenttemplates",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets a definition environment template
     *
     * @param project - Project ID or project name
     * @param templateId - Id of the definition environment template
     */
    ReleaseRestClient.prototype.getDefinitionEnvironmentTemplate = function (project, templateId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    templateId: templateId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        routeTemplate: "{project}/_apis/Release/definitions/environmenttemplates",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets a list of definition environment templates
     *
     * @param project - Project ID or project name
     * @param isDeleted - 'true' to get definition environment templates that have been deleted. Default is 'false'
     */
    ReleaseRestClient.prototype.listDefinitionEnvironmentTemplates = function (project, isDeleted) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    isDeleted: isDeleted
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        routeTemplate: "{project}/_apis/Release/definitions/environmenttemplates",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Undelete a release definition environment template.
     *
     * @param project - Project ID or project name
     * @param templateId - Id of the definition environment template to be undeleted
     */
    ReleaseRestClient.prototype.undeleteReleaseDefinitionEnvironmentTemplate = function (project, templateId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    templateId: templateId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/definitions/environmenttemplates",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param favoriteItems -
     * @param project - Project ID or project name
     * @param scope -
     * @param identityId -
     */
    ReleaseRestClient.prototype.createFavorites = function (favoriteItems, project, scope, identityId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    identityId: identityId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/favorites/{scope}",
                        routeValues: {
                            project: project,
                            scope: scope
                        },
                        queryParams: queryValues,
                        body: favoriteItems
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param scope -
     * @param identityId -
     * @param favoriteItemIds -
     */
    ReleaseRestClient.prototype.deleteFavorites = function (project, scope, identityId, favoriteItemIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    identityId: identityId,
                    favoriteItemIds: favoriteItemIds
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/Release/favorites/{scope}",
                        routeValues: {
                            project: project,
                            scope: scope
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param scope -
     * @param identityId -
     */
    ReleaseRestClient.prototype.getFavorites = function (project, scope, identityId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    identityId: identityId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/favorites/{scope}",
                        routeValues: {
                            project: project,
                            scope: scope
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param flightName -
     */
    ReleaseRestClient.prototype.getFlightAssignments = function (flightName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    flightName: flightName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/Release/flightAssignments",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Creates a new folder.
     *
     * @param folder - folder.
     * @param project - Project ID or project name
     * @param path - Path of the folder.
     */
    ReleaseRestClient.prototype.createFolder = function (folder, project, path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/folders/{*path}",
                        routeValues: {
                            project: project,
                            path: path
                        },
                        body: folder
                    })];
            });
        });
    };
    /**
     * Deletes a definition folder for given folder name and path and all it's existing definitions.
     *
     * @param project - Project ID or project name
     * @param path - Path of the folder to delete.
     */
    ReleaseRestClient.prototype.deleteFolder = function (project, path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/Release/folders/{*path}",
                        routeValues: {
                            project: project,
                            path: path
                        }
                    })];
            });
        });
    };
    /**
     * Gets folders.
     *
     * @param project - Project ID or project name
     * @param path - Path of the folder.
     * @param queryOrder - Gets the results in the defined order. Default is 'None'.
     */
    ReleaseRestClient.prototype.getFolders = function (project, path, queryOrder) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    queryOrder: queryOrder
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/Release/folders/{*path}",
                        routeValues: {
                            project: project,
                            path: path
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Updates an existing folder at given existing path.
     *
     * @param folder - folder.
     * @param project - Project ID or project name
     * @param path - Path of the folder to update.
     */
    ReleaseRestClient.prototype.updateFolder = function (folder, project, path) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/folders/{*path}",
                        routeValues: {
                            project: project,
                            path: path
                        },
                        body: folder
                    })];
            });
        });
    };
    /**
     * Updates the gate for a deployment.
     *
     * @param gateUpdateMetadata - Metadata to patch the Release Gates.
     * @param project - Project ID or project name
     * @param gateStepId - Gate step Id.
     */
    ReleaseRestClient.prototype.updateGates = function (gateUpdateMetadata, project, gateStepId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/gates/{gateStepId}",
                        routeValues: {
                            project: project,
                            gateStepId: gateStepId
                        },
                        body: gateUpdateMetadata
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     */
    ReleaseRestClient.prototype.getReleaseHistory = function (project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/history",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        }
                    })];
            });
        });
    };
    /**
     * @param query -
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.getInputValues = function (query, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/artifacts/inputvaluesquery",
                        routeValues: {
                            project: project
                        },
                        body: query
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param buildId -
     * @param sourceId -
     */
    ReleaseRestClient.prototype.getIssues = function (project, buildId, sourceId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    sourceId: sourceId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/issues/{buildId}",
                        routeValues: {
                            project: project,
                            buildId: buildId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets gate logs
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     * @param gateId - Id of the gate.
     * @param taskId - ReleaseTask Id for the log.
     */
    ReleaseRestClient.prototype.getGateLog = function (project, releaseId, environmentId, gateId, taskId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/gates/{gateId}/tasks/{taskId}/logs",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            gateId: gateId,
                            taskId: taskId
                        }
                    })];
            });
        });
    };
    /**
     * Get logs for a release Id.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     */
    ReleaseRestClient.prototype.getLogs = function (project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/logs",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        }
                    })];
            });
        });
    };
    /**
     * Gets logs
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     * @param taskId - ReleaseTask Id for the log.
     * @param attemptId - Id of the attempt.
     */
    ReleaseRestClient.prototype.getLog = function (project, releaseId, environmentId, taskId, attemptId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    attemptId: attemptId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/tasks/{taskId}/logs",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            taskId: taskId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets the task log of a release as a plain text file.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     * @param attemptId -
     * @param timelineId -
     * @param taskId - ReleaseTask Id for the log.
     * @param startLine - Starting line number for logs
     * @param endLine - Ending line number for logs
     */
    ReleaseRestClient.prototype.getTaskLog2 = function (project, releaseId, environmentId, attemptId, timelineId, taskId, startLine, endLine) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    startLine: startLine,
                    endLine: endLine
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/timelines/{timelineId}/tasks/{taskId}/logs",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            attemptId: attemptId,
                            timelineId: timelineId,
                            taskId: taskId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets the task log of a release as a plain text file.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     * @param releaseDeployPhaseId - Release deploy phase Id.
     * @param taskId - ReleaseTask Id for the log.
     * @param startLine - Starting line number for logs
     * @param endLine - Ending line number for logs
     */
    ReleaseRestClient.prototype.getTaskLog = function (project, releaseId, environmentId, releaseDeployPhaseId, taskId, startLine, endLine) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    startLine: startLine,
                    endLine: endLine
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/deployPhases/{releaseDeployPhaseId}/tasks/{taskId}/logs",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            releaseDeployPhaseId: releaseDeployPhaseId,
                            taskId: taskId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get manual intervention for a given release and manual intervention id.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param manualInterventionId - Id of the manual intervention.
     */
    ReleaseRestClient.prototype.getManualIntervention = function (project, releaseId, manualInterventionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/manualInterventions/{manualInterventionId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            manualInterventionId: manualInterventionId
                        }
                    })];
            });
        });
    };
    /**
     * List all manual interventions for a given release.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     */
    ReleaseRestClient.prototype.getManualInterventions = function (project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/manualInterventions/{manualInterventionId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        }
                    })];
            });
        });
    };
    /**
     * Update manual intervention.
     *
     * @param manualInterventionUpdateMetadata - Meta data to update manual intervention.
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param manualInterventionId - Id of the manual intervention.
     */
    ReleaseRestClient.prototype.updateManualIntervention = function (manualInterventionUpdateMetadata, project, releaseId, manualInterventionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/manualInterventions/{manualInterventionId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            manualInterventionId: manualInterventionId
                        },
                        body: manualInterventionUpdateMetadata
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param minMetricsTime -
     */
    ReleaseRestClient.prototype.getMetrics = function (project, minMetricsTime) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    minMetricsTime: minMetricsTime
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/metrics",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets Org pipeline release settings
     *
     */
    ReleaseRestClient.prototype.getOrgPipelineReleaseSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/Release/orgPipelineReleaseSettings"
                    })];
            });
        });
    };
    /**
     * Updates Org pipeline release settings
     *
     * @param newSettings -
     */
    ReleaseRestClient.prototype.updateOrgPipelineReleaseSettings = function (newSettings) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "_apis/Release/orgPipelineReleaseSettings",
                        body: newSettings
                    })];
            });
        });
    };
    /**
     * Gets pipeline release settings
     *
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.getPipelineReleaseSettings = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/pipelineReleaseSettings",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * Updates pipeline release settings
     *
     * @param newSettings -
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.updatePipelineReleaseSettings = function (newSettings, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/pipelineReleaseSettings",
                        routeValues: {
                            project: project
                        },
                        body: newSettings
                    })];
            });
        });
    };
    /**
     * @param artifactType -
     * @param artifactSourceId -
     */
    ReleaseRestClient.prototype.getReleaseProjects = function (artifactType, artifactSourceId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    artifactType: artifactType,
                    artifactSourceId: artifactSourceId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/Release/projects",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of releases
     *
     * @param project - Project ID or project name
     * @param definitionId - Releases from this release definition Id.
     * @param definitionEnvironmentId -
     * @param searchText - Releases with names containing searchText.
     * @param createdBy - Releases created by this user.
     * @param statusFilter - Releases that have this status.
     * @param environmentStatusFilter -
     * @param minCreatedTime - Releases that were created after this time.
     * @param maxCreatedTime - Releases that were created before this time.
     * @param queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param top - Number of releases to get. Default is 50.
     * @param continuationToken - Gets the releases after the continuation token provided.
     * @param expand - The property that should be expanded in the list of releases.
     * @param artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param sourceId - Unique identifier of the artifact used. e.g. For build it would be \{projectGuid\}:\{BuildDefinitionId\}, for Jenkins it would be \{JenkinsConnectionId\}:\{JenkinsDefinitionId\}, for TfsOnPrem it would be \{TfsOnPremConnectionId\}:\{ProjectName\}:\{TfsOnPremDefinitionId\}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param isDeleted - Gets the soft deleted releases, if true.
     * @param tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Releases will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release from results irrespective of whether it has property set or not.
     * @param releaseIdFilter - A comma-delimited list of releases Ids. Only releases with these Ids will be returned.
     * @param path - Releases under this folder path will be returned
     */
    ReleaseRestClient.prototype.getReleases = function (project, definitionId, definitionEnvironmentId, searchText, createdBy, statusFilter, environmentStatusFilter, minCreatedTime, maxCreatedTime, queryOrder, top, continuationToken, expand, artifactTypeId, sourceId, artifactVersionId, sourceBranchFilter, isDeleted, tagFilter, propertyFilters, releaseIdFilter, path) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    definitionId: definitionId,
                    definitionEnvironmentId: definitionEnvironmentId,
                    searchText: searchText,
                    createdBy: createdBy,
                    statusFilter: statusFilter,
                    environmentStatusFilter: environmentStatusFilter,
                    minCreatedTime: minCreatedTime,
                    maxCreatedTime: maxCreatedTime,
                    queryOrder: queryOrder,
                    '$top': top,
                    continuationToken: continuationToken,
                    '$expand': expand,
                    artifactTypeId: artifactTypeId,
                    sourceId: sourceId,
                    artifactVersionId: artifactVersionId,
                    sourceBranchFilter: sourceBranchFilter,
                    isDeleted: isDeleted,
                    tagFilter: tagFilter && tagFilter.join(","),
                    propertyFilters: propertyFilters && propertyFilters.join(","),
                    releaseIdFilter: releaseIdFilter && releaseIdFilter.join(","),
                    path: path
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        routeTemplate: "{project}/_apis/Release/releases",
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
     * Create a release.
     *
     * @param releaseStartMetadata - Metadata to create a release.
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.createRelease = function (releaseStartMetadata, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}",
                        routeValues: {
                            project: project
                        },
                        body: releaseStartMetadata
                    })];
            });
        });
    };
    /**
     * Soft delete a release
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param comment - Comment for deleting a release.
     */
    ReleaseRestClient.prototype.deleteRelease = function (project, releaseId, comment) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    comment: comment
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a Release
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param approvalFilters - A filter which would allow fetching approval steps selectively based on whether it is automated, or manual. This would also decide whether we should fetch pre and post approval snapshots. Assumes All by default
     * @param propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
     * @param expand - A property that should be expanded in the release.
     * @param topGateRecords - Number of release gate records to get. Default is 5.
     */
    ReleaseRestClient.prototype.getRelease = function (project, releaseId, approvalFilters, propertyFilters, expand, topGateRecords) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    approvalFilters: approvalFilters,
                    propertyFilters: propertyFilters && propertyFilters.join(","),
                    '$expand': expand,
                    '$topGateRecords': topGateRecords
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get release summary of a given definition Id.
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the definition to get release summary.
     * @param releaseCount - Count of releases to be included in summary.
     * @param includeArtifact - Include artifact details.Default is 'false'.
     * @param definitionEnvironmentIdsFilter -
     */
    ReleaseRestClient.prototype.getReleaseDefinitionSummary = function (project, definitionId, releaseCount, includeArtifact, definitionEnvironmentIdsFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    definitionId: definitionId,
                    releaseCount: releaseCount,
                    includeArtifact: includeArtifact,
                    definitionEnvironmentIdsFilter: definitionEnvironmentIdsFilter && definitionEnvironmentIdsFilter.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get release for a given revision number.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param definitionSnapshotRevision - Definition snapshot revision number.
     */
    ReleaseRestClient.prototype.getReleaseRevision = function (project, releaseId, definitionSnapshotRevision) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    definitionSnapshotRevision: definitionSnapshotRevision
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Undelete a soft deleted release.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of release to be undeleted.
     * @param comment - Any comment for undeleting.
     */
    ReleaseRestClient.prototype.undeleteRelease = function (project, releaseId, comment) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    comment: comment
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update a complete release object.
     *
     * @param release - Release object for update.
     * @param project - Project ID or project name
     * @param releaseId - Id of the release to update.
     */
    ReleaseRestClient.prototype.updateRelease = function (release, project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        body: release
                    })];
            });
        });
    };
    /**
     * Update few properties of a release.
     *
     * @param releaseUpdateMetadata - Properties of release to update.
     * @param project - Project ID or project name
     * @param releaseId - Id of the release to update.
     */
    ReleaseRestClient.prototype.updateReleaseResource = function (releaseUpdateMetadata, project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.8",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        body: releaseUpdateMetadata
                    })];
            });
        });
    };
    /**
     * Gets the release settings
     *
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.getReleaseSettings = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releasesettings",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * Updates the release settings
     *
     * @param releaseSettings -
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.updateReleaseSettings = function (releaseSettings, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/Release/releasesettings",
                        routeValues: {
                            project: project
                        },
                        body: releaseSettings
                    })];
            });
        });
    };
    /**
     * Get release definition for a given definitionId and revision
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the definition.
     * @param revision - Id of the revision.
     */
    ReleaseRestClient.prototype.getDefinitionRevision = function (project, definitionId, revision) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}/revisions/{revision}",
                        routeValues: {
                            project: project,
                            definitionId: definitionId,
                            revision: revision
                        }
                    })];
            });
        });
    };
    /**
     * Get revision history for a release definition
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the definition.
     */
    ReleaseRestClient.prototype.getReleaseDefinitionHistory = function (project, definitionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}/revisions/{revision}",
                        routeValues: {
                            project: project,
                            definitionId: definitionId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     */
    ReleaseRestClient.prototype.getSummaryMailSections = function (project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/sendmail/{releaseId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        }
                    })];
            });
        });
    };
    /**
     * @param mailMessage -
     * @param project - Project ID or project name
     * @param releaseId -
     */
    ReleaseRestClient.prototype.sendSummaryMail = function (mailMessage, project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/sendmail/{releaseId}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        body: mailMessage
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param definitionId -
     */
    ReleaseRestClient.prototype.getSourceBranches = function (project, definitionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/definitions/{definitionId}/sourcebranches",
                        routeValues: {
                            project: project,
                            definitionId: definitionId
                        }
                    })];
            });
        });
    };
    /**
     * Adds a tag to a definition
     *
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     * @param tag -
     */
    ReleaseRestClient.prototype.addDefinitionTag = function (project, releaseDefinitionId, tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/definitions/{releaseDefinitionId}/tags/{*tag}",
                        routeValues: {
                            project: project,
                            releaseDefinitionId: releaseDefinitionId,
                            tag: tag
                        }
                    })];
            });
        });
    };
    /**
     * Adds multiple tags to a definition
     *
     * @param tags -
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     */
    ReleaseRestClient.prototype.addDefinitionTags = function (tags, project, releaseDefinitionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/definitions/{releaseDefinitionId}/tags/{*tag}",
                        routeValues: {
                            project: project,
                            releaseDefinitionId: releaseDefinitionId
                        },
                        body: tags
                    })];
            });
        });
    };
    /**
     * Deletes a tag from a definition
     *
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     * @param tag -
     */
    ReleaseRestClient.prototype.deleteDefinitionTag = function (project, releaseDefinitionId, tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/Release/definitions/{releaseDefinitionId}/tags/{*tag}",
                        routeValues: {
                            project: project,
                            releaseDefinitionId: releaseDefinitionId,
                            tag: tag
                        }
                    })];
            });
        });
    };
    /**
     * Gets the tags for a definition
     *
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     */
    ReleaseRestClient.prototype.getDefinitionTags = function (project, releaseDefinitionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/definitions/{releaseDefinitionId}/tags/{*tag}",
                        routeValues: {
                            project: project,
                            releaseDefinitionId: releaseDefinitionId
                        }
                    })];
            });
        });
    };
    /**
     * Adds a tag to a releaseId
     *
     * @param project - Project ID or project name
     * @param releaseId -
     * @param tag -
     */
    ReleaseRestClient.prototype.addReleaseTag = function (project, releaseId, tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/tags/{*tag}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            tag: tag
                        }
                    })];
            });
        });
    };
    /**
     * Adds tag to a release
     *
     * @param tags -
     * @param project - Project ID or project name
     * @param releaseId -
     */
    ReleaseRestClient.prototype.addReleaseTags = function (tags, project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/tags/{*tag}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        body: tags
                    })];
            });
        });
    };
    /**
     * Deletes a tag from a release
     *
     * @param project - Project ID or project name
     * @param releaseId -
     * @param tag -
     */
    ReleaseRestClient.prototype.deleteReleaseTag = function (project, releaseId, tag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/tags/{*tag}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            tag: tag
                        }
                    })];
            });
        });
    };
    /**
     * Gets the tags for a release
     *
     * @param project - Project ID or project name
     * @param releaseId -
     */
    ReleaseRestClient.prototype.getReleaseTags = function (project, releaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/tags/{*tag}",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.getTags = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/tags",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param environmentId -
     * @param releaseDeployPhaseId -
     */
    ReleaseRestClient.prototype.getTasksForTaskGroup = function (project, releaseId, environmentId, releaseDeployPhaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/deployPhases/{releaseDeployPhaseId}/tasks",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            releaseDeployPhaseId: releaseDeployPhaseId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param environmentId -
     * @param attemptId -
     * @param timelineId -
     */
    ReleaseRestClient.prototype.getTasks2 = function (project, releaseId, environmentId, attemptId, timelineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/attempts/{attemptId}/timelines/{timelineId}/tasks",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId,
                            attemptId: attemptId,
                            timelineId: timelineId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param environmentId -
     * @param attemptId -
     */
    ReleaseRestClient.prototype.getTasks = function (project, releaseId, environmentId, attemptId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    attemptId: attemptId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/environments/{environmentId}/tasks",
                        routeValues: {
                            project: project,
                            releaseId: releaseId,
                            environmentId: environmentId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.getArtifactTypeDefinitions = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/artifacts/types",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     */
    ReleaseRestClient.prototype.getArtifactVersions = function (project, releaseDefinitionId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    releaseDefinitionId: releaseDefinitionId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/artifacts/versions",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param artifacts -
     * @param project - Project ID or project name
     */
    ReleaseRestClient.prototype.getArtifactVersionsForSources = function (artifacts, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Release/artifacts/versions",
                        routeValues: {
                            project: project
                        },
                        body: artifacts
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param baseReleaseId -
     * @param top -
     * @param artifactAlias -
     */
    ReleaseRestClient.prototype.getReleaseWorkItemsRefs = function (project, releaseId, baseReleaseId, top, artifactAlias) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    baseReleaseId: baseReleaseId,
                    '$top': top,
                    artifactAlias: artifactAlias
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Release/releases/{releaseId}/workitems",
                        routeValues: {
                            project: project,
                            releaseId: releaseId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    ReleaseRestClient.RESOURCE_AREA_ID = "efc2f575-36ef-48e9-b672-0c6fb4a48ac5";
    return ReleaseRestClient;
}(RestClientBase));
export { ReleaseRestClient };
