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
var GitRestClient = /** @class */ (function (_super) {
    __extends(GitRestClient, _super);
    function GitRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * DELETE Deletes Enablement status and BillableCommitters data from DB. Deleting the enablement data will effectively disable it for the repositories affected.
     *
     * @param allProjects -
     * @param includeBillableCommitters -
     * @param projectIds -
     */
    GitRestClient.prototype.deleteEnablementStatus = function (allProjects, includeBillableCommitters, projectIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$allProjects': allProjects,
                    '$includeBillableCommitters': includeBillableCommitters,
                    projectIds: projectIds
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/git/advsecEnablement",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * GET Enablement status for project's repositories.
     *
     * @param projectIds - Null defaults to all projects in the host, list of project's repos status to return
     * @param billingDate - UTC expected, Null defaults to UtcNow(), can be provided for a point in time status
     * @param skip - Skip X rows of resultset to simulate paging.
     * @param take - Return Y rows of resultset to simulate paging.
     */
    GitRestClient.prototype.getEnablementStatus = function (projectIds, billingDate, skip, take) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectIds: projectIds,
                    '$billingDate': billingDate,
                    '$skip': skip,
                    '$take': take
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/git/advsecEnablement",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param enableOnCreateHost -
     */
    GitRestClient.prototype.getEnableOnCreateHost = function (enableOnCreateHost) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$enableOnCreateHost': enableOnCreateHost
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/git/advsecEnablement",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param enableOnCreateProjectId -
     */
    GitRestClient.prototype.getEnableOnCreateProject = function (enableOnCreateProjectId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$enableOnCreateProjectId': enableOnCreateProjectId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/git/advsecEnablement",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param enableOnCreateHost -
     */
    GitRestClient.prototype.setEnableOnCreateHost = function (enableOnCreateHost) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$enableOnCreateHost': enableOnCreateHost
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "_apis/git/advsecEnablement",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param enableOnCreateProjectId -
     * @param enableOnStatus -
     */
    GitRestClient.prototype.setEnableOnCreateProject = function (enableOnCreateProjectId, enableOnStatus) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$enableOnCreateProjectId': enableOnCreateProjectId,
                    '$enableOnStatus': enableOnStatus
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "_apis/git/advsecEnablement",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * POST Enablement status for repositories.
     *
     * @param enablementUpdates -
     */
    GitRestClient.prototype.updateEnablementStatus = function (enablementUpdates) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/git/advsecEnablement",
                        body: enablementUpdates
                    })];
            });
        });
    };
    /**
     * Get estimated billable pushers for an Organization for last 90 days.
     *
     */
    GitRestClient.prototype.getEstimatedBillablePushersOrg = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/git/advsecEstimate"
                    })];
            });
        });
    };
    /**
     * Get estimated billable pushers for a project for last 90 days.
     *
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getEstimatedBillablePushersProject = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/advsecEstimate",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * Get estimated billable committers for a repository for the last 90 days.
     *
     * @param project - Project ID or project name
     * @param repositoryId -
     */
    GitRestClient.prototype.getEstimatedBillableCommittersRepo = function (project, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/advsecEstimate",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        }
                    })];
            });
        });
    };
    /**
     * GET Advanced Security Permission status.
     *
     * @param projectName -
     * @param repositoryId - Repository user is trying to access
     * @param permission - Permission being requestd, must be "viewAlert" "dismissAlert" "manage" "viewEnablement" or "repoRead"
     */
    GitRestClient.prototype.getPermission = function (projectName, repositoryId, permission) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$projectName': projectName,
                    '$repositoryId': repositoryId,
                    '$permission': permission
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/git/advsecPermissions",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create an annotated tag.
     *
     * @param tagObject - Object containing details of tag to be created.
     * @param project - Project ID or project name
     * @param repositoryId - ID or name of the repository.
     */
    GitRestClient.prototype.createAnnotatedTag = function (tagObject, project, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/annotatedTags/{objectId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: tagObject
                    })];
            });
        });
    };
    /**
     * Get an annotated tag.
     *
     * @param project - Project ID or project name
     * @param repositoryId - ID or name of the repository.
     * @param objectId - ObjectId (Sha1Id) of tag to get.
     */
    GitRestClient.prototype.getAnnotatedTag = function (project, repositoryId, objectId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/annotatedTags/{objectId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            objectId: objectId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve actual billable committers for Advanced Security service for a given date.
     *
     * @param project - Project ID or project name
     * @param billingDate - UTC expected.  If not specified defaults to the previous billing day.
     * @param skip - Skip X rows of resultset to simulate paging.
     * @param take - Return Y rows of resultset to simulate paging.
     */
    GitRestClient.prototype.getBillableCommitters = function (project, billingDate, skip, take) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$billingDate': billingDate,
                    '$skip': skip,
                    '$take': take
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/billableCommitters",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve detailed actual billable committers for Advanced Security service for a given date. Detailed results intentionally does not filter out soft deleted projects and repositories to help diagnose billing issues.
     *
     * @param project - Project ID or project name
     * @param includeDetails - Return all the details on the billable committers.
     * @param billingDate - UTC expected. If not specified defaults to the previous billing day.
     */
    GitRestClient.prototype.getBillableCommittersDetail = function (project, includeDetails, billingDate) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$includeDetails': includeDetails,
                    '$billingDate': billingDate
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/billableCommitters",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a single blob.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param project - Project ID or project name
     * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param fileName - Provide a fileName to use for a download.
     * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    GitRestClient.prototype.getBlob = function (repositoryId, sha1, project, download, fileName, resolveLfs) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    download: download,
                    fileName: fileName,
                    resolveLfs: resolveLfs
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Blobs/{sha1}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            sha1: sha1
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a single blob.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param project - Project ID or project name
     * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param fileName - Provide a fileName to use for a download.
     * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    GitRestClient.prototype.getBlobContent = function (repositoryId, sha1, project, download, fileName, resolveLfs) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    download: download,
                    fileName: fileName,
                    resolveLfs: resolveLfs
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Blobs/{sha1}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            sha1: sha1
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Gets one or more blobs in a zip file download.
     *
     * @param blobIds - Blob IDs (SHA1 hashes) to be returned in the zip file.
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param filename -
     */
    GitRestClient.prototype.getBlobsZip = function (blobIds, repositoryId, project, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    filename: filename
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Blobs/{sha1}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues,
                        body: blobIds
                    })];
            });
        });
    };
    /**
     * Get a single blob.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param project - Project ID or project name
     * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param fileName - Provide a fileName to use for a download.
     * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    GitRestClient.prototype.getBlobZip = function (repositoryId, sha1, project, download, fileName, resolveLfs) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    download: download,
                    fileName: fileName,
                    resolveLfs: resolveLfs
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Blobs/{sha1}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            sha1: sha1
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve statistics about a single branch.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param name - Name of the branch.
     * @param project - Project ID or project name
     * @param baseVersionDescriptor - Identifies the commit or branch to use as the base.
     */
    GitRestClient.prototype.getBranch = function (repositoryId, name, project, baseVersionDescriptor) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    name: name,
                    baseVersionDescriptor: baseVersionDescriptor
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/stats/branches",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve statistics about all branches within a repository.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param baseVersionDescriptor - Identifies the commit or branch to use as the base.
     */
    GitRestClient.prototype.getBranches = function (repositoryId, project, baseVersionDescriptor) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    baseVersionDescriptor: baseVersionDescriptor
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/stats/branches",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve statistics for multiple commits
     *
     * @param searchCriteria - Base Commit and List of Target Commits to compare.
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getBranchStatsBatch = function (searchCriteria, repositoryId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/stats/branches",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: searchCriteria
                    })];
            });
        });
    };
    /**
     * Retrieve changes for a particular commit.
     *
     * @param commitId - The id of the commit.
     * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param project - Project ID or project name
     * @param top - The maximum number of changes to return.
     * @param skip - The number of changes to skip.
     */
    GitRestClient.prototype.getChanges = function (commitId, repositoryId, project, top, skip) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    top: top,
                    skip: skip
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/Changes",
                        routeValues: {
                            project: project,
                            commitId: commitId,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve one conflict for a cherry pick by ID
     *
     * @param repositoryId -
     * @param cherryPickId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getCherryPickConflict = function (repositoryId, cherryPickId, conflictId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            cherryPickId: cherryPickId,
                            conflictId: conflictId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve all conflicts for a cherry pick
     *
     * @param repositoryId -
     * @param cherryPickId -
     * @param project - Project ID or project name
     * @param continuationToken -
     * @param top -
     * @param excludeResolved -
     * @param onlyResolved -
     * @param includeObsolete -
     */
    GitRestClient.prototype.getCherryPickConflicts = function (repositoryId, cherryPickId, project, continuationToken, top, excludeResolved, onlyResolved, includeObsolete) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    continuationToken: continuationToken,
                    '$top': top,
                    excludeResolved: excludeResolved,
                    onlyResolved: onlyResolved,
                    includeObsolete: includeObsolete
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            cherryPickId: cherryPickId
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
     * Update merge conflict resolution
     *
     * @param conflict -
     * @param repositoryId -
     * @param cherryPickId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updateCherryPickConflict = function (conflict, repositoryId, cherryPickId, conflictId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            cherryPickId: cherryPickId,
                            conflictId: conflictId
                        },
                        body: conflict
                    })];
            });
        });
    };
    /**
     * Update multiple merge conflict resolutions
     *
     * @param conflictUpdates -
     * @param repositoryId -
     * @param cherryPickId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updateCherryPickConflicts = function (conflictUpdates, repositoryId, cherryPickId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            cherryPickId: cherryPickId
                        },
                        body: conflictUpdates
                    })];
            });
        });
    };
    /**
     * Given a commitId, returns a list of commits that are in the same cherry-pick family.
     *
     * @param repositoryNameOrId -
     * @param commitId -
     * @param project - Project ID or project name
     * @param includeLinks -
     */
    GitRestClient.prototype.getCherryPickRelationships = function (repositoryNameOrId, commitId, project, includeLinks) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeLinks: includeLinks
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryNameOrId}/cherryPickRelationships/{commitId}",
                        routeValues: {
                            project: project,
                            repositoryNameOrId: repositoryNameOrId,
                            commitId: commitId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Cherry pick a specific commit or commits that are associated to a pull request into a new branch.
     *
     * @param cherryPickToCreate -
     * @param project - Project ID or project name
     * @param repositoryId - ID of the repository.
     */
    GitRestClient.prototype.createCherryPick = function (cherryPickToCreate, project, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: cherryPickToCreate
                    })];
            });
        });
    };
    /**
     * Retrieve information about a cherry pick operation by cherry pick Id.
     *
     * @param project - Project ID or project name
     * @param cherryPickId - ID of the cherry pick.
     * @param repositoryId - ID of the repository.
     */
    GitRestClient.prototype.getCherryPick = function (project, cherryPickId, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}",
                        routeValues: {
                            project: project,
                            cherryPickId: cherryPickId,
                            repositoryId: repositoryId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve information about a cherry pick operation for a specific branch. This operation is expensive due to the underlying object structure, so this API only looks at the 1000 most recent cherry pick operations.
     *
     * @param project - Project ID or project name
     * @param repositoryId - ID of the repository.
     * @param refName - The GitAsyncRefOperationParameters generatedRefName used for the cherry pick operation.
     */
    GitRestClient.prototype.getCherryPickForRefName = function (project, repositoryId, refName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    refName: refName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/cherryPicks/{cherryPickId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Find the closest common commit (the merge base) between base and target commits, and get the diff between either the base and target commits or common and target commits.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param diffCommonCommit - If true, diff between common and target commits. If false, diff between base and target commits.
     * @param top - Maximum number of changes to return. Defaults to 100.
     * @param skip - Number of changes to skip
     * @param baseVersionDescriptor - Descriptor for base commit.
     * @param targetVersionDescriptor - Descriptor for target commit.
     */
    GitRestClient.prototype.getCommitDiffs = function (repositoryId, project, diffCommonCommit, top, skip, baseVersionDescriptor, targetVersionDescriptor) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    diffCommonCommit: diffCommonCommit,
                    '$top': top,
                    '$skip': skip,
                };
                if (baseVersionDescriptor) {
                    queryValues.baseVersionType = baseVersionDescriptor.versionType;
                    queryValues.baseVersion = baseVersionDescriptor.version;
                    queryValues.baseVersionOptions = baseVersionDescriptor.versionOptions;
                }
                if (targetVersionDescriptor) {
                    queryValues.targetVersionType = targetVersionDescriptor.versionType;
                    queryValues.targetVersion = targetVersionDescriptor.version;
                    queryValues.targetVersionOptions = targetVersionDescriptor.versionOptions;
                }
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/diffs/commits",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve a particular commit.
     *
     * @param commitId - The id of the commit.
     * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param project - Project ID or project name
     * @param changeCount - The number of changes to include in the result.
     */
    GitRestClient.prototype.getCommit = function (commitId, repositoryId, project, changeCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    changeCount: changeCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Commits/{commitId}",
                        routeValues: {
                            project: project,
                            commitId: commitId,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve git commits for a project
     *
     * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param searchCriteria -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getCommits = function (repositoryId, searchCriteria, project) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    searchCriteria: searchCriteria
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Commits/{commitId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve a list of commits associated with a particular push.
     *
     * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param pushId - The id of the push.
     * @param project - Project ID or project name
     * @param top - The maximum number of commits to return ("get the top x commits").
     * @param skip - The number of commits to skip.
     * @param includeLinks - Set to false to avoid including REST Url links for resources. Defaults to true.
     */
    GitRestClient.prototype.getPushCommits = function (repositoryId, pushId, project, top, skip, includeLinks) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    pushId: pushId,
                    top: top,
                    skip: skip,
                    includeLinks: includeLinks
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Commits/{commitId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve git commits for a project matching the search criteria
     *
     * @param searchCriteria - Search options
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param skip - Number of commits to skip. The value cannot exceed 3,000,000.
     * @param top - Maximum number of commits to return. The value cannot exceed 50,000.
     * @param includeStatuses - True to include additional commit status information.
     */
    GitRestClient.prototype.getCommitsBatch = function (searchCriteria, repositoryId, project, skip, top, includeStatuses) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$skip': skip,
                    '$top': top,
                    includeStatuses: includeStatuses
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/CommitsBatch",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues,
                        body: searchCriteria
                    })];
            });
        });
    };
    /**
     * Retrieve deleted git repositories.
     *
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getDeletedRepositories = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/DeletedRepositories",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * Get the file diffs for each of the specified files
     *
     * @param fileDiffsCriteria - List of file parameters objects
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository
     */
    GitRestClient.prototype.getFileDiffs = function (fileDiffsCriteria, project, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/FileDiffs",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: fileDiffsCriteria
                    })];
            });
        });
    };
    /**
     * Retrieve all forks of a repository in the collection.
     *
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param collectionId - Team project collection ID.
     * @param project - Project ID or project name
     * @param includeLinks - True to include links.
     */
    GitRestClient.prototype.getForks = function (repositoryNameOrId, collectionId, project, includeLinks) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeLinks: includeLinks
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryNameOrId}/forks/{collectionId}",
                        routeValues: {
                            project: project,
                            repositoryNameOrId: repositoryNameOrId,
                            collectionId: collectionId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Request that another repository's refs be fetched into this one. It syncs two existing forks. To create a fork, please see the \<a href="https://docs.microsoft.com/en-us/rest/api/vsts/git/repositories/create?view=azure-devops-rest-5.1"\> repositories endpoint\</a\>
     *
     * @param syncParams - Source repository and ref mapping.
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param includeLinks - True to include links
     */
    GitRestClient.prototype.createForkSyncRequest = function (syncParams, repositoryNameOrId, project, includeLinks) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeLinks: includeLinks
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests/{forkSyncOperationId}",
                        routeValues: {
                            project: project,
                            repositoryNameOrId: repositoryNameOrId
                        },
                        queryParams: queryValues,
                        body: syncParams
                    })];
            });
        });
    };
    /**
     * Get a specific fork sync operation's details.
     *
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param forkSyncOperationId - OperationId of the sync request.
     * @param project - Project ID or project name
     * @param includeLinks - True to include links.
     */
    GitRestClient.prototype.getForkSyncRequest = function (repositoryNameOrId, forkSyncOperationId, project, includeLinks) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeLinks: includeLinks
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests/{forkSyncOperationId}",
                        routeValues: {
                            project: project,
                            repositoryNameOrId: repositoryNameOrId,
                            forkSyncOperationId: forkSyncOperationId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve all requested fork sync operations on this repository.
     *
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param includeAbandoned - True to include abandoned requests.
     * @param includeLinks - True to include links.
     */
    GitRestClient.prototype.getForkSyncRequests = function (repositoryNameOrId, project, includeAbandoned, includeLinks) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeAbandoned: includeAbandoned,
                    includeLinks: includeLinks
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryNameOrId}/forkSyncRequests/{forkSyncOperationId}",
                        routeValues: {
                            project: project,
                            repositoryNameOrId: repositoryNameOrId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveHfs - Set to true to resolve Git HFS pointer files to return actual content from Git HFS.  Default is true.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    GitRestClient.prototype.getHfsItem = function (repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, includeContent, resolveHfs, sanitize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    path: path,
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                    resolveHfs: resolveHfs,
                    sanitize: sanitize
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/HfsItems/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveHfs - Set to true to resolve Git HFS pointer files to return actual content from Git HFS.  Default is true.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    GitRestClient.prototype.getHfsItemContent = function (repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, includeContent, resolveHfs, sanitize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    path: path,
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                    resolveHfs: resolveHfs,
                    sanitize: sanitize
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/HfsItems/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveHfs - Set to true to resolve Git HFS pointer files to return actual content from Git HFS.  Default is true.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    GitRestClient.prototype.getHfsItemText = function (repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, includeContent, resolveHfs, sanitize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    path: path,
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                    resolveHfs: resolveHfs,
                    sanitize: sanitize
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/HfsItems/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveHfs - Set to true to resolve Git HFS pointer files to return actual content from Git HFS.  Default is true.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    GitRestClient.prototype.getHfsItemZip = function (repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, includeContent, resolveHfs, sanitize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    path: path,
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                    resolveHfs: resolveHfs,
                    sanitize: sanitize
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/HfsItems/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create an import request.
     *
     * @param importRequest - The import request to create.
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository.
     */
    GitRestClient.prototype.createImportRequest = function (importRequest, project, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: importRequest
                    })];
            });
        });
    };
    /**
     * Retrieve a particular import request.
     *
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository.
     * @param importRequestId - The unique identifier for the import request.
     */
    GitRestClient.prototype.getImportRequest = function (project, repositoryId, importRequestId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            importRequestId: importRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve import requests for a repository.
     *
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository.
     * @param includeAbandoned - True to include abandoned import requests in the results.
     */
    GitRestClient.prototype.queryImportRequests = function (project, repositoryId, includeAbandoned) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeAbandoned: includeAbandoned
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retry or abandon a failed import request.
     *
     * @param importRequestToUpdate - The updated version of the import request. Currently, the only change allowed is setting the Status to Queued or Abandoned.
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository.
     * @param importRequestId - The unique identifier for the import request to update.
     */
    GitRestClient.prototype.updateImportRequest = function (importRequestToUpdate, project, repositoryId, importRequestId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/importRequests/{importRequestId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            importRequestId: importRequestId
                        },
                        body: importRequestToUpdate
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    GitRestClient.prototype.getItem = function (repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, includeContent, resolveLfs, sanitize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    path: path,
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                    resolveLfs: resolveLfs,
                    sanitize: sanitize
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    GitRestClient.prototype.getItemContent = function (repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, includeContent, resolveLfs, sanitize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    path: path,
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                    resolveLfs: resolveLfs,
                    sanitize: sanitize
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param includeLinks - Set to true to include links to items.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param zipForUnix - Set to true to keep the file permissions for unix (and POSIX) systems like executables and symlinks
     */
    GitRestClient.prototype.getItems = function (repositoryId, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, includeLinks, versionDescriptor, zipForUnix) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    includeLinks: includeLinks,
                    versionDescriptor: versionDescriptor,
                    zipForUnix: zipForUnix
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    GitRestClient.prototype.getItemText = function (repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, includeContent, resolveLfs, sanitize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    path: path,
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                    resolveLfs: resolveLfs,
                    sanitize: sanitize
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    GitRestClient.prototype.getItemZip = function (repositoryId, path, project, scopePath, recursionLevel, includeContentMetadata, latestProcessedChange, download, versionDescriptor, includeContent, resolveLfs, sanitize) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    path: path,
                    scopePath: scopePath,
                    recursionLevel: recursionLevel,
                    includeContentMetadata: includeContentMetadata,
                    latestProcessedChange: latestProcessedChange,
                    download: download,
                    versionDescriptor: versionDescriptor,
                    includeContent: includeContent,
                    resolveLfs: resolveLfs,
                    sanitize: sanitize
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Items/{*path}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     *
     * @param requestData - Request data attributes: ItemDescriptors, IncludeContentMetadata, LatestProcessedChange, IncludeLinks. ItemDescriptors: Collection of items to fetch, including path, version, and recursion level. IncludeContentMetadata: Whether to include metadata for all items LatestProcessedChange: Whether to include shallow ref to commit that last changed each item. IncludeLinks: Whether to include the _links field on the shallow references.
     * @param repositoryId - The name or ID of the repository
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getItemsBatch = function (requestData, repositoryId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/ItemsBatch",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: requestData
                    })];
            });
        });
    };
    /**
     * Find the merge bases of two commits, optionally across forks. If otherRepositoryId is not specified, the merge bases will only be calculated within the context of the local repositoryNameOrId.
     *
     * @param repositoryNameOrId - ID or name of the local repository.
     * @param commitId - First commit, usually the tip of the target branch of the potential merge.
     * @param otherCommitId - Other commit, usually the tip of the source branch of the potential merge.
     * @param project - Project ID or project name
     * @param otherCollectionId - The collection ID where otherCommitId lives.
     * @param otherRepositoryId - The repository ID where otherCommitId lives.
     */
    GitRestClient.prototype.getMergeBases = function (repositoryNameOrId, commitId, otherCommitId, project, otherCollectionId, otherRepositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    otherCommitId: otherCommitId,
                    otherCollectionId: otherCollectionId,
                    otherRepositoryId: otherRepositoryId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryNameOrId}/commits/{commitId}/mergeBases",
                        routeValues: {
                            project: project,
                            repositoryNameOrId: repositoryNameOrId,
                            commitId: commitId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Request a git merge operation. Currently we support merging only 2 commits.
     *
     * @param mergeParameters - Parents commitIds and merge commit messsage.
     * @param project - Project ID or project name
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param includeLinks - True to include links
     */
    GitRestClient.prototype.createMergeRequest = function (mergeParameters, project, repositoryNameOrId, includeLinks) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeLinks: includeLinks
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryNameOrId}/merges/{mergeOperationId}",
                        routeValues: {
                            project: project,
                            repositoryNameOrId: repositoryNameOrId
                        },
                        queryParams: queryValues,
                        body: mergeParameters
                    })];
            });
        });
    };
    /**
     * Get a specific merge operation's details.
     *
     * @param project - Project ID or project name
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param mergeOperationId - OperationId of the merge request.
     * @param includeLinks - True to include links
     */
    GitRestClient.prototype.getMergeRequest = function (project, repositoryNameOrId, mergeOperationId, includeLinks) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeLinks: includeLinks
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryNameOrId}/merges/{mergeOperationId}",
                        routeValues: {
                            project: project,
                            repositoryNameOrId: repositoryNameOrId,
                            mergeOperationId: mergeOperationId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Attach a new file to a pull request.
     *
     * @param content - Content to upload
     * @param fileName - The name of the file.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createAttachment = function (content, fileName, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",
                        routeValues: {
                            project: project,
                            fileName: fileName,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        customHeaders: {
                            "Content-Type": "application/octet-stream",
                        },
                        body: content,
                        isRawData: true
                    })];
            });
        });
    };
    /**
     * Delete a pull request attachment.
     *
     * @param fileName - The name of the attachment to delete.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.deleteAttachment = function (fileName, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",
                        routeValues: {
                            project: project,
                            fileName: fileName,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Get the file content of a pull request attachment.
     *
     * @param fileName - The name of the attachment.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getAttachmentContent = function (fileName, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",
                        routeValues: {
                            project: project,
                            fileName: fileName,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Get a list of files attached to a given pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getAttachments = function (repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Get the file content of a pull request attachment.
     *
     * @param fileName - The name of the attachment.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getAttachmentZip = function (fileName, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/attachments/{fileName}",
                        routeValues: {
                            project: project,
                            fileName: fileName,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Add a like on a comment.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - The ID of the thread that contains the comment.
     * @param commentId - The ID of the comment.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createLike = function (repositoryId, pullRequestId, threadId, commentId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId,
                            commentId: commentId
                        }
                    })];
            });
        });
    };
    /**
     * Delete a like on a comment.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - The ID of the thread that contains the comment.
     * @param commentId - The ID of the comment.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.deleteLike = function (repositoryId, pullRequestId, threadId, commentId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId,
                            commentId: commentId
                        }
                    })];
            });
        });
    };
    /**
     * Get likes for a comment.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - The ID of the thread that contains the comment.
     * @param commentId - The ID of the comment.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getLikes = function (repositoryId, pullRequestId, threadId, commentId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}/likes",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId,
                            commentId: commentId
                        }
                    })];
            });
        });
    };
    /**
     * Get the commits for the specified iteration of a pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the iteration from which to get the commits.
     * @param project - Project ID or project name
     * @param top - Maximum number of commits to return. The maximum number of commits that can be returned per batch is 500.
     * @param skip - Number of commits to skip.
     */
    GitRestClient.prototype.getPullRequestIterationCommits = function (repositoryId, pullRequestId, iterationId, project, top, skip) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    top: top,
                    skip: skip
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/commits",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            iterationId: iterationId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get the commits for the specified pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestCommits = function (repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/commits",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
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
     * Retrieve one conflict for a pull request by ID
     *
     * @param repositoryId -
     * @param pullRequestId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestConflict = function (repositoryId, pullRequestId, conflictId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            conflictId: conflictId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve all conflicts for a pull request
     *
     * @param repositoryId - The repository of the Pull Request.
     * @param pullRequestId - The pull request ID.
     * @param project - Project ID or project name
     * @param skip - Conflicts to skip.
     * @param top - Conflicts to return after skip.
     * @param includeObsolete - Includes obsolete conflicts.
     * @param excludeResolved - Excludes conflicts already resolved.
     * @param onlyResolved - Returns only the conflicts that are resolved.
     */
    GitRestClient.prototype.getPullRequestConflicts = function (repositoryId, pullRequestId, project, skip, top, includeObsolete, excludeResolved, onlyResolved) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$skip': skip,
                    '$top': top,
                    includeObsolete: includeObsolete,
                    excludeResolved: excludeResolved,
                    onlyResolved: onlyResolved
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update merge conflict resolution
     *
     * @param conflict -
     * @param repositoryId -
     * @param pullRequestId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updatePullRequestConflict = function (conflict, repositoryId, pullRequestId, conflictId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            conflictId: conflictId
                        },
                        body: conflict
                    })];
            });
        });
    };
    /**
     * Update multiple merge conflict resolutions
     *
     * @param conflictUpdates -
     * @param repositoryId -
     * @param pullRequestId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updatePullRequestConflicts = function (conflictUpdates, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        body: conflictUpdates
                    })];
            });
        });
    };
    /**
     * Retrieve the changes made in a pull request between two iterations.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration. \<br /\> Iteration one is the head of the source branch at the time the pull request is created and subsequent iterations are created when there are pushes to the source branch. Allowed values are between 1 and the maximum iteration on this pull request.
     * @param project - Project ID or project name
     * @param top - Optional. The number of changes to retrieve.  The default value is 100 and the maximum value is 2000.
     * @param skip - Optional. The number of changes to ignore.  For example, to retrieve changes 101-150, set top 50 and skip to 100.
     * @param compareTo - ID of the pull request iteration to compare against.  The default value is zero which indicates the comparison is made against the common commit between the source and target branches
     */
    GitRestClient.prototype.getPullRequestIterationChanges = function (repositoryId, pullRequestId, iterationId, project, top, skip, compareTo) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$top': top,
                    '$skip': skip,
                    '$compareTo': compareTo
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/changes",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            iterationId: iterationId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get the specified iteration for a pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration to return.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestIteration = function (repositoryId, pullRequestId, iterationId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            iterationId: iterationId
                        }
                    })];
            });
        });
    };
    /**
     * Get the list of iterations for the specified pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     * @param includeCommits - If true, include the commits associated with each iteration in the response.
     */
    GitRestClient.prototype.getPullRequestIterations = function (repositoryId, pullRequestId, project, includeCommits) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeCommits: includeCommits
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create a pull request status on the iteration. This operation will have the same result as Create status on pull request with specified iteration ID in the request body.
     *
     * @param status - Pull request status to create.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createPullRequestIterationStatus = function (status, repositoryId, pullRequestId, iterationId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            iterationId: iterationId
                        },
                        body: status
                    })];
            });
        });
    };
    /**
     * Delete pull request iteration status.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param statusId - ID of the pull request status.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.deletePullRequestIterationStatus = function (repositoryId, pullRequestId, iterationId, statusId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            iterationId: iterationId,
                            statusId: statusId
                        }
                    })];
            });
        });
    };
    /**
     * Get the specific pull request iteration status by ID. The status ID is unique within the pull request across all iterations.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param statusId - ID of the pull request status.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestIterationStatus = function (repositoryId, pullRequestId, iterationId, statusId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            iterationId: iterationId,
                            statusId: statusId
                        }
                    })];
            });
        });
    };
    /**
     * Get all the statuses associated with a pull request iteration.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestIterationStatuses = function (repositoryId, pullRequestId, iterationId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            iterationId: iterationId
                        }
                    })];
            });
        });
    };
    /**
     * Update pull request iteration statuses collection. The only supported operation type is \`remove\`.
     *
     * @param patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updatePullRequestIterationStatuses = function (patchDocument, repositoryId, pullRequestId, iterationId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/iterations/{iterationId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            iterationId: iterationId
                        },
                        customHeaders: {
                            "Content-Type": "application/json-patch+json",
                        },
                        body: patchDocument
                    })];
            });
        });
    };
    /**
     * Create a tag (if that does not exists yet) and add that as a label (tag) for a specified pull request. The only required field is the name of the new label (tag).
     *
     * @param label - Label to assign to the pull request.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     * @param projectId - Project ID or project name.
     */
    GitRestClient.prototype.createPullRequestLabel = function (label, repositoryId, pullRequestId, project, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectId: projectId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        queryParams: queryValues,
                        body: label
                    })];
            });
        });
    };
    /**
     * Removes a label (tag) from the set of those assigned to the pull request. The tag itself will not be deleted.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param labelIdOrName - The name or ID of the label requested.
     * @param project - Project ID or project name
     * @param projectId - Project ID or project name.
     */
    GitRestClient.prototype.deletePullRequestLabels = function (repositoryId, pullRequestId, labelIdOrName, project, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectId: projectId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            labelIdOrName: labelIdOrName
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieves a single label (tag) that has been assigned to a pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param labelIdOrName - The name or ID of the label requested.
     * @param project - Project ID or project name
     * @param projectId - Project ID or project name.
     */
    GitRestClient.prototype.getPullRequestLabel = function (repositoryId, pullRequestId, labelIdOrName, project, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectId: projectId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            labelIdOrName: labelIdOrName
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get all the labels (tags) assigned to a pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     * @param projectId - Project ID or project name.
     */
    GitRestClient.prototype.getPullRequestLabels = function (repositoryId, pullRequestId, project, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectId: projectId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/labels/{labelIdOrName}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get external properties of the pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestProperties = function (repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/properties",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Create or update pull request external properties. The patch operation can be \`add\`, \`replace\` or \`remove\`. For \`add\` operation, the path can be empty. If the path is empty, the value must be a list of key value pairs. For \`replace\` operation, the path cannot be empty. If the path does not exist, the property will be added to the collection. For \`remove\` operation, the path cannot be empty. If the path does not exist, no action will be performed.
     *
     * @param patchDocument - Properties to add, replace or remove in JSON Patch format.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updatePullRequestProperties = function (patchDocument, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/properties",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        customHeaders: {
                            "Content-Type": "application/json-patch+json",
                        },
                        body: patchDocument
                    })];
            });
        });
    };
    /**
     * This API is used to find what pull requests are related to a given commit.  It can be used to either find the pull request that created a particular merge commit or it can be used to find all pull requests that have ever merged a particular commit.  The input is a list of queries which each contain a list of commits. For each commit that you search against, you will get back a dictionary of commit -\> pull requests.
     *
     * @param queries - The list of queries to perform.
     * @param repositoryId - ID of the repository.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestQuery = function (queries, repositoryId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/PullRequestQuery",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: queries
                    })];
            });
        });
    };
    /**
     * Add a reviewer to a pull request or cast a vote.
     *
     * @param reviewer - Reviewer's vote.\<br /\>If the reviewer's ID is included here, it must match the reviewerID parameter.\<br /\>Reviewers can set their own vote with this method.  When adding other reviewers, vote must be set to zero.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param reviewerId - ID of the reviewer.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createPullRequestReviewer = function (reviewer, repositoryId, pullRequestId, reviewerId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            reviewerId: reviewerId
                        },
                        body: reviewer
                    })];
            });
        });
    };
    /**
     * Add reviewers to a pull request.
     *
     * @param reviewers - Reviewers to add to the pull request.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createPullRequestReviewers = function (reviewers, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        body: reviewers
                    })];
            });
        });
    };
    /**
     * Add an unmaterialized identity to the reviewers of a pull request.
     *
     * @param reviewer - Reviewer to add to the pull request.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createUnmaterializedPullRequestReviewer = function (reviewer, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PUT",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        body: reviewer
                    })];
            });
        });
    };
    /**
     * Remove a reviewer from a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param reviewerId - ID of the reviewer to remove.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.deletePullRequestReviewer = function (repositoryId, pullRequestId, reviewerId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            reviewerId: reviewerId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve information about a particular reviewer on a pull request
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param reviewerId - ID of the reviewer.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestReviewer = function (repositoryId, pullRequestId, reviewerId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            reviewerId: reviewerId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve the reviewers for a pull request
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestReviewers = function (repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Edit a reviewer entry. These fields are patchable: isFlagged, hasDeclined
     *
     * @param reviewer - Reviewer data.\<br /\>If the reviewer's ID is included here, it must match the reviewerID parameter.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param reviewerId - ID of the reviewer.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updatePullRequestReviewer = function (reviewer, repositoryId, pullRequestId, reviewerId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            reviewerId: reviewerId
                        },
                        body: reviewer
                    })];
            });
        });
    };
    /**
     * Reset the votes of multiple reviewers on a pull request.  NOTE: This endpoint only supports updating votes, but does not support updating required reviewers (use policy) or display names.
     *
     * @param patchVotes - IDs of the reviewers whose votes will be reset to zero
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updatePullRequestReviewers = function (patchVotes, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/reviewers/{reviewerId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        body: patchVotes
                    })];
            });
        });
    };
    /**
     * Retrieve a pull request.
     *
     * @param pullRequestId - The ID of the pull request to retrieve.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestById = function (pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/pullRequests/{pullRequestId}",
                        routeValues: {
                            project: project,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve all pull requests matching a specified criteria.
     *
     * @param project - Project ID or project name
     * @param searchCriteria - Pull requests will be returned that match this search criteria.
     * @param maxCommentLength - Not used.
     * @param skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param top - The number of pull requests to retrieve.
     */
    GitRestClient.prototype.getPullRequestsByProject = function (project, searchCriteria, maxCommentLength, skip, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    searchCriteria: searchCriteria,
                    maxCommentLength: maxCommentLength,
                    '$skip': skip,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/pullRequests",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create a pull request.
     *
     * @param gitPullRequestToCreate - The pull request to create.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param project - Project ID or project name
     * @param supportsIterations - If true, subsequent pushes to the pull request will be individually reviewable. Set this to false for large pull requests for performance reasons if this functionality is not needed.
     */
    GitRestClient.prototype.createPullRequest = function (gitPullRequestToCreate, repositoryId, project, supportsIterations) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    supportsIterations: supportsIterations
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues,
                        body: gitPullRequestToCreate
                    })];
            });
        });
    };
    /**
     * Retrieve a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - The ID of the pull request to retrieve.
     * @param project - Project ID or project name
     * @param maxCommentLength - Not used.
     * @param skip - Not used.
     * @param top - Not used.
     * @param includeCommits - If true, the pull request will be returned with the associated commits.
     * @param includeWorkItemRefs - If true, the pull request will be returned with the associated work item references.
     */
    GitRestClient.prototype.getPullRequest = function (repositoryId, pullRequestId, project, maxCommentLength, skip, top, includeCommits, includeWorkItemRefs) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    maxCommentLength: maxCommentLength,
                    '$skip': skip,
                    '$top': top,
                    includeCommits: includeCommits,
                    includeWorkItemRefs: includeWorkItemRefs
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve all pull requests matching a specified criteria.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param searchCriteria - Pull requests will be returned that match this search criteria.
     * @param project - Project ID or project name
     * @param maxCommentLength - Not used.
     * @param skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param top - The number of pull requests to retrieve.
     */
    GitRestClient.prototype.getPullRequests = function (repositoryId, searchCriteria, project, maxCommentLength, skip, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    searchCriteria: searchCriteria,
                    maxCommentLength: maxCommentLength,
                    '$skip': skip,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update a pull request
     *
     * @param gitPullRequestToUpdate - The pull request content that should be updated.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request to update.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updatePullRequest = function (gitPullRequestToUpdate, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        body: gitPullRequestToUpdate
                    })];
            });
        });
    };
    /**
     * Sends an e-mail notification about a specific pull request to a set of recipients
     *
     * @param userMessage -
     * @param repositoryId - ID of the git repository.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.sharePullRequest = function (userMessage, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/share",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        body: userMessage
                    })];
            });
        });
    };
    /**
     * Create a pull request status.
     *
     * @param status - Pull request status to create.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createPullRequestStatus = function (status, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        body: status
                    })];
            });
        });
    };
    /**
     * Delete pull request status.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param statusId - ID of the pull request status.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.deletePullRequestStatus = function (repositoryId, pullRequestId, statusId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            statusId: statusId
                        }
                    })];
            });
        });
    };
    /**
     * Get the specific pull request status by ID. The status ID is unique within the pull request across all iterations.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param statusId - ID of the pull request status.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestStatus = function (repositoryId, pullRequestId, statusId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            statusId: statusId
                        }
                    })];
            });
        });
    };
    /**
     * Get all the statuses associated with a pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestStatuses = function (repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Update pull request statuses collection. The only supported operation type is \`remove\`.
     *
     * @param patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updatePullRequestStatuses = function (patchDocument, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/statuses/{statusId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        customHeaders: {
                            "Content-Type": "application/json-patch+json",
                        },
                        body: patchDocument
                    })];
            });
        });
    };
    /**
     * Create a comment on a specific thread in a pull request (up to 500 comments can be created per thread).
     *
     * @param comment - The comment to create. Comments can be up to 150,000 characters.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread that the desired comment is in.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createComment = function (comment, repositoryId, pullRequestId, threadId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId
                        },
                        body: comment
                    })];
            });
        });
    };
    /**
     * Delete a comment associated with a specific thread in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread that the desired comment is in.
     * @param commentId - ID of the comment.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.deleteComment = function (repositoryId, pullRequestId, threadId, commentId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId,
                            commentId: commentId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve a comment associated with a specific thread in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread that the desired comment is in.
     * @param commentId - ID of the comment.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getComment = function (repositoryId, pullRequestId, threadId, commentId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId,
                            commentId: commentId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve all comments associated with a specific thread in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getComments = function (repositoryId, pullRequestId, threadId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId
                        }
                    })];
            });
        });
    };
    /**
     * Update a comment associated with a specific thread in a pull request.
     *
     * @param comment - The comment content that should be updated. Comments can be up to 150,000 characters.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread that the desired comment is in.
     * @param commentId - ID of the comment to update.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updateComment = function (comment, repositoryId, pullRequestId, threadId, commentId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}/comments/{commentId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId,
                            commentId: commentId
                        },
                        body: comment
                    })];
            });
        });
    };
    /**
     * Create a thread in a pull request.
     *
     * @param commentThread - The thread to create. Thread must contain at least one comment.
     * @param repositoryId - Repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createThread = function (commentThread, repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        body: commentThread
                    })];
            });
        });
    };
    /**
     * Retrieve a thread in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread.
     * @param project - Project ID or project name
     * @param iteration - If specified, thread position will be tracked using this iteration as the right side of the diff.
     * @param baseIteration - If specified, thread position will be tracked using this iteration as the left side of the diff.
     */
    GitRestClient.prototype.getPullRequestThread = function (repositoryId, pullRequestId, threadId, project, iteration, baseIteration) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$iteration': iteration,
                    '$baseIteration': baseIteration
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve all threads in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     * @param iteration - If specified, thread positions will be tracked using this iteration as the right side of the diff.
     * @param baseIteration - If specified, thread positions will be tracked using this iteration as the left side of the diff.
     */
    GitRestClient.prototype.getThreads = function (repositoryId, pullRequestId, project, iteration, baseIteration) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$iteration': iteration,
                    '$baseIteration': baseIteration
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update a thread in a pull request.
     *
     * @param commentThread - The thread content that should be updated.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread to update.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updateThread = function (commentThread, repositoryId, pullRequestId, threadId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/threads/{threadId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId,
                            threadId: threadId
                        },
                        body: commentThread
                    })];
            });
        });
    };
    /**
     * Retrieve a list of work items associated with a pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getPullRequestWorkItemRefs = function (repositoryId, pullRequestId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pullRequests/{pullRequestId}/workitems",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pullRequestId: pullRequestId
                        }
                    })];
            });
        });
    };
    /**
     * Push changes to the repository.
     *
     * @param push -
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createPush = function (push, repositoryId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pushes/{pushId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: push
                    })];
            });
        });
    };
    /**
     * Retrieves a particular push.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param pushId - ID of the push.
     * @param project - Project ID or project name
     * @param includeCommits - The number of commits to include in the result.
     * @param includeRefUpdates - If true, include the list of refs that were updated by the push.
     */
    GitRestClient.prototype.getPush = function (repositoryId, pushId, project, includeCommits, includeRefUpdates) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeCommits: includeCommits,
                    includeRefUpdates: includeRefUpdates
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pushes/{pushId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            pushId: pushId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieves pushes associated with the specified repository.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param skip - Number of pushes to skip.
     * @param top - Number of pushes to return.
     * @param searchCriteria - Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
     */
    GitRestClient.prototype.getPushes = function (repositoryId, project, skip, top, searchCriteria) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$skip': skip,
                    '$top': top,
                    searchCriteria: searchCriteria
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/pushes/{pushId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Destroy (hard delete) a soft-deleted Git repository.
     *
     * @param project - Project ID or project name
     * @param repositoryId - The ID of the repository.
     */
    GitRestClient.prototype.deleteRepositoryFromRecycleBin = function (project, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/recycleBin/repositories/{repositoryId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve soft-deleted git repositories from the recycle bin.
     *
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getRecycleBinRepositories = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/recycleBin/repositories/{repositoryId}",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * Recover a soft-deleted Git repository. Recently deleted repositories go into a soft-delete state for a period of time before they are hard deleted and become unrecoverable.
     *
     * @param repositoryDetails -
     * @param project - Project ID or project name
     * @param repositoryId - The ID of the repository.
     */
    GitRestClient.prototype.restoreRepositoryFromRecycleBin = function (repositoryDetails, project, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/recycleBin/repositories/{repositoryId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: repositoryDetails
                    })];
            });
        });
    };
    /**
     * Queries the provided repository for its refs and returns them.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param filter - [optional] A filter to apply to the refs (starts with).
     * @param includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @param includeStatuses - [optional] Includes up to the first 1000 commit statuses for each ref. The default value is false.
     * @param includeMyBranches - [optional] Includes only branches that the user owns, the branches the user favorites, and the default branch. The default value is false. Cannot be combined with the filter parameter.
     * @param latestStatusesOnly - [optional] True to include only the tip commit status for each ref. This option requires \`includeStatuses\` to be true. The default value is false.
     * @param peelTags - [optional] Annotated tags will populate the PeeledObjectId property. default is false.
     * @param filterContains - [optional] A filter to apply to the refs (contains).
     */
    GitRestClient.prototype.getRefs = function (repositoryId, project, filter, includeLinks, includeStatuses, includeMyBranches, latestStatusesOnly, peelTags, filterContains) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    filter: filter,
                    includeLinks: includeLinks,
                    includeStatuses: includeStatuses,
                    includeMyBranches: includeMyBranches,
                    latestStatusesOnly: latestStatusesOnly,
                    peelTags: peelTags,
                    filterContains: filterContains
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/refs/{*filter}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
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
     * Lock or Unlock a branch.
     *
     * @param newRefInfo - The ref update action (lock/unlock) to perform
     * @param repositoryId - The name or ID of the repository.
     * @param filter - The name of the branch to lock/unlock
     * @param project - Project ID or project name
     * @param projectId - ID or name of the team project. Optional if specifying an ID for repository.
     */
    GitRestClient.prototype.updateRef = function (newRefInfo, repositoryId, filter, project, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    filter: filter,
                    projectId: projectId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/refs/{*filter}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues,
                        body: newRefInfo
                    })];
            });
        });
    };
    /**
     * Creating, updating, or deleting refs(branches).
     *
     * @param refUpdates - List of ref updates to attempt to perform
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param projectId - ID or name of the team project. Optional if specifying an ID for repository.
     */
    GitRestClient.prototype.updateRefs = function (refUpdates, repositoryId, project, projectId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectId: projectId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/refs/{*filter}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues,
                        body: refUpdates
                    })];
            });
        });
    };
    /**
     * Creates a ref favorite
     *
     * @param favorite - The ref favorite to create.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createFavorite = function (favorite, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/favorites/refs/{favoriteId}",
                        routeValues: {
                            project: project
                        },
                        body: favorite
                    })];
            });
        });
    };
    /**
     * Deletes the refs favorite specified
     *
     * @param project - Project ID or project name
     * @param favoriteId - The Id of the ref favorite to delete.
     */
    GitRestClient.prototype.deleteRefFavorite = function (project, favoriteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/favorites/refs/{favoriteId}",
                        routeValues: {
                            project: project,
                            favoriteId: favoriteId
                        }
                    })];
            });
        });
    };
    /**
     * Gets the refs favorite for a favorite Id.
     *
     * @param project - Project ID or project name
     * @param favoriteId - The Id of the requested ref favorite.
     */
    GitRestClient.prototype.getRefFavorite = function (project, favoriteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/favorites/refs/{favoriteId}",
                        routeValues: {
                            project: project,
                            favoriteId: favoriteId
                        }
                    })];
            });
        });
    };
    /**
     * Gets the refs favorites for a repo and an identity.
     *
     * @param project - Project ID or project name
     * @param repositoryId - The id of the repository.
     * @param identityId - The id of the identity whose favorites are to be retrieved. If null, the requesting identity is used.
     */
    GitRestClient.prototype.getRefFavorites = function (project, repositoryId, identityId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    repositoryId: repositoryId,
                    identityId: identityId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/favorites/refs/{favoriteId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param identityId -
     */
    GitRestClient.prototype.getRefFavoritesForProject = function (project, identityId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    identityId: identityId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/favorites/refsForProject",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create a git repository in a team project.
     *
     * @param gitRepositoryToCreate - Specify the repo name, team project and/or parent repository. Team project information can be omitted from gitRepositoryToCreate if the request is project-scoped (i.e., includes project Id).
     * @param project - Project ID or project name
     * @param sourceRef - [optional] Specify the source refs to use while creating a fork repo
     */
    GitRestClient.prototype.createRepository = function (gitRepositoryToCreate, project, sourceRef) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    sourceRef: sourceRef
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/Repositories/{repositoryId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: gitRepositoryToCreate
                    })];
            });
        });
    };
    /**
     * Delete a git repository
     *
     * @param repositoryId - The ID of the repository.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.deleteRepository = function (repositoryId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/git/Repositories/{repositoryId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve git repositories.
     *
     * @param project - Project ID or project name
     * @param includeLinks - [optional] True to include reference links. The default value is false.
     * @param includeAllUrls - [optional] True to include all remote URLs. The default value is false.
     * @param includeHidden - [optional] True to include hidden repositories. The default value is false.
     */
    GitRestClient.prototype.getRepositories = function (project, includeLinks, includeAllUrls, includeHidden) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeLinks: includeLinks,
                    includeAllUrls: includeAllUrls,
                    includeHidden: includeHidden
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/Repositories/{repositoryId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve a git repository.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getRepository = function (repositoryId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/Repositories/{repositoryId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve a git repository.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param includeParent - True to include parent repository. Only available in authenticated calls.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getRepositoryWithParent = function (repositoryId, includeParent, project) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeParent: includeParent
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/Repositories/{repositoryId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Updates the Git repository with either a new repo name or a new default branch.
     *
     * @param newRepositoryInfo - Specify a new repo name or a new default branch of the repository
     * @param repositoryId - The ID of the repository.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updateRepository = function (newRepositoryInfo, repositoryId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/Repositories/{repositoryId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: newRepositoryInfo
                    })];
            });
        });
    };
    /**
     * Retrieve one conflict for a revert by ID
     *
     * @param repositoryId -
     * @param revertId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.getRevertConflict = function (repositoryId, revertId, conflictId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            revertId: revertId,
                            conflictId: conflictId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve all conflicts for a revert
     *
     * @param repositoryId -
     * @param revertId -
     * @param project - Project ID or project name
     * @param continuationToken -
     * @param top -
     * @param excludeResolved -
     * @param onlyResolved -
     * @param includeObsolete -
     */
    GitRestClient.prototype.getRevertConflicts = function (repositoryId, revertId, project, continuationToken, top, excludeResolved, onlyResolved, includeObsolete) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    continuationToken: continuationToken,
                    '$top': top,
                    excludeResolved: excludeResolved,
                    onlyResolved: onlyResolved,
                    includeObsolete: includeObsolete
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            revertId: revertId
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
     * Update merge conflict resolution
     *
     * @param conflict -
     * @param repositoryId -
     * @param revertId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updateRevertConflict = function (conflict, repositoryId, revertId, conflictId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            revertId: revertId,
                            conflictId: conflictId
                        },
                        body: conflict
                    })];
            });
        });
    };
    /**
     * Update multiple merge conflict resolutions
     *
     * @param conflictUpdates -
     * @param repositoryId -
     * @param revertId -
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.updateRevertConflicts = function (conflictUpdates, repositoryId, revertId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}/conflicts/{conflictId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            revertId: revertId
                        },
                        body: conflictUpdates
                    })];
            });
        });
    };
    /**
     * Starts the operation to create a new branch which reverts changes introduced by either a specific commit or commits that are associated to a pull request.
     *
     * @param revertToCreate -
     * @param project - Project ID or project name
     * @param repositoryId - ID of the repository.
     */
    GitRestClient.prototype.createRevert = function (revertToCreate, project, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        body: revertToCreate
                    })];
            });
        });
    };
    /**
     * Retrieve information about a revert operation by revert Id.
     *
     * @param project - Project ID or project name
     * @param revertId - ID of the revert operation.
     * @param repositoryId - ID of the repository.
     */
    GitRestClient.prototype.getRevert = function (project, revertId, repositoryId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}",
                        routeValues: {
                            project: project,
                            revertId: revertId,
                            repositoryId: repositoryId
                        }
                    })];
            });
        });
    };
    /**
     * Retrieve information about a revert operation for a specific branch.
     *
     * @param project - Project ID or project name
     * @param repositoryId - ID of the repository.
     * @param refName - The GitAsyncRefOperationParameters generatedRefName used for the revert operation.
     */
    GitRestClient.prototype.getRevertForRefName = function (project, repositoryId, refName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    refName: refName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/reverts/{revertId}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create Git commit status.
     *
     * @param gitCommitStatusToCreate - Git commit status object to create.
     * @param commitId - ID of the Git commit.
     * @param repositoryId - ID of the repository.
     * @param project - Project ID or project name
     */
    GitRestClient.prototype.createCommitStatus = function (gitCommitStatusToCreate, commitId, repositoryId, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/Statuses",
                        routeValues: {
                            project: project,
                            commitId: commitId,
                            repositoryId: repositoryId
                        },
                        body: gitCommitStatusToCreate
                    })];
            });
        });
    };
    /**
     * Get statuses associated with the Git commit.
     *
     * @param commitId - ID of the Git commit.
     * @param repositoryId - ID of the repository.
     * @param project - Project ID or project name
     * @param top - Optional. The number of statuses to retrieve. Default is 1000.
     * @param skip - Optional. The number of statuses to ignore. Default is 0. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param latestOnly - The flag indicates whether to get only latest statuses grouped by \`Context.Name\` and \`Context.Genre\`.
     */
    GitRestClient.prototype.getStatuses = function (commitId, repositoryId, project, top, skip, latestOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    top: top,
                    skip: skip,
                    latestOnly: latestOnly
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/commits/{commitId}/Statuses",
                        routeValues: {
                            project: project,
                            commitId: commitId,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieve a pull request suggestion for a particular repository or team project.
     *
     * @param repositoryId - ID of the git repository.
     * @param project - Project ID or project name
     * @param preferCompareBranch - If true, prefer the compare branch over the default branch as target branch for pull requests.
     */
    GitRestClient.prototype.getSuggestions = function (repositoryId, project, preferCompareBranch) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    preferCompareBranch: preferCompareBranch
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/suggestions",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     *
     * @param repositoryId - Repository Id.
     * @param sha1 - SHA1 hash of the tree object.
     * @param project - Project ID or project name
     * @param projectId - Project Id.
     * @param recursive - Search recursively. Include trees underneath this tree. Default is false.
     * @param fileName - Name to use if a .zip file is returned. Default is the object ID.
     */
    GitRestClient.prototype.getTree = function (repositoryId, sha1, project, projectId, recursive, fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectId: projectId,
                    recursive: recursive,
                    fileName: fileName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Trees/{sha1}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            sha1: sha1
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     *
     * @param repositoryId - Repository Id.
     * @param sha1 - SHA1 hash of the tree object.
     * @param project - Project ID or project name
     * @param projectId - Project Id.
     * @param recursive - Search recursively. Include trees underneath this tree. Default is false.
     * @param fileName - Name to use if a .zip file is returned. Default is the object ID.
     */
    GitRestClient.prototype.getTreeZip = function (repositoryId, sha1, project, projectId, recursive, fileName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    projectId: projectId,
                    recursive: recursive,
                    fileName: fileName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/git/repositories/{repositoryId}/Trees/{sha1}",
                        routeValues: {
                            project: project,
                            repositoryId: repositoryId,
                            sha1: sha1
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    GitRestClient.RESOURCE_AREA_ID = "4e080c62-fa21-4fbc-8fef-2a10a2b38049";
    return GitRestClient;
}(RestClientBase));
export { GitRestClient };
