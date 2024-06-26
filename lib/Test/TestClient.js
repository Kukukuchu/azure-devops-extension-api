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
var TestRestClient = /** @class */ (function (_super) {
    __extends(TestRestClient, _super);
    function TestRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * Attach a file to test step result
     *
     * @param attachmentRequestModel - Attachment details TestAttachmentRequestModel
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test result that contains the iteration
     * @param iterationId - ID of the test result iteration.
     * @param actionPath - Hex value of test result action path.
     */
    TestRestClient.prototype.createTestIterationResultAttachment = function (attachmentRequestModel, project, runId, testCaseResultId, iterationId, actionPath) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    iterationId: iterationId,
                    actionPath: actionPath
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId
                        },
                        queryParams: queryValues,
                        body: attachmentRequestModel
                    })];
            });
        });
    };
    /**
     * Attach a file to a test result.
     *
     * @param attachmentRequestModel - Attachment details TestAttachmentRequestModel
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test result against which attachment has to be uploaded.
     */
    TestRestClient.prototype.createTestResultAttachment = function (attachmentRequestModel, project, runId, testCaseResultId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId
                        },
                        body: attachmentRequestModel
                    })];
            });
        });
    };
    /**
     * Attach a file to a test result
     *
     * @param attachmentRequestModel - Attachment Request Model.
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test results that contains sub result.
     * @param testSubResultId - ID of the test sub results against which attachment has to be uploaded.
     */
    TestRestClient.prototype.createTestSubResultAttachment = function (attachmentRequestModel, project, runId, testCaseResultId, testSubResultId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId
                        },
                        queryParams: queryValues,
                        body: attachmentRequestModel
                    })];
            });
        });
    };
    /**
     * Download a test result attachment by its ID.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the testCaseResultId.
     * @param testCaseResultId - ID of the test result whose attachment has to be downloaded.
     * @param attachmentId - ID of the test result attachment to be downloaded.
     */
    TestRestClient.prototype.getTestResultAttachmentContent = function (project, runId, testCaseResultId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId,
                            attachmentId: attachmentId
                        }
                    })];
            });
        });
    };
    /**
     * Get list of test result attachments reference.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test result.
     */
    TestRestClient.prototype.getTestResultAttachments = function (project, runId, testCaseResultId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId
                        }
                    })];
            });
        });
    };
    /**
     * Download a test result attachment by its ID.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the testCaseResultId.
     * @param testCaseResultId - ID of the test result whose attachment has to be downloaded.
     * @param attachmentId - ID of the test result attachment to be downloaded.
     */
    TestRestClient.prototype.getTestResultAttachmentZip = function (project, runId, testCaseResultId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId,
                            attachmentId: attachmentId
                        }
                    })];
            });
        });
    };
    /**
     * Download a test sub result attachment
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test results that contains sub result.
     * @param attachmentId - ID of the test result attachment to be downloaded
     * @param testSubResultId - ID of the test sub result whose attachment has to be downloaded
     */
    TestRestClient.prototype.getTestSubResultAttachmentContent = function (project, runId, testCaseResultId, attachmentId, testSubResultId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId,
                            attachmentId: attachmentId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get list of test sub result attachments
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test results that contains sub result.
     * @param testSubResultId - ID of the test sub result whose attachment has to be downloaded
     */
    TestRestClient.prototype.getTestSubResultAttachments = function (project, runId, testCaseResultId, testSubResultId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Download a test sub result attachment
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test results that contains sub result.
     * @param attachmentId - ID of the test result attachment to be downloaded
     * @param testSubResultId - ID of the test sub result whose attachment has to be downloaded
     */
    TestRestClient.prototype.getTestSubResultAttachmentZip = function (project, runId, testCaseResultId, attachmentId, testSubResultId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId,
                            attachmentId: attachmentId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Attach a file to a test run.
     *
     * @param attachmentRequestModel - Attachment details TestAttachmentRequestModel
     * @param project - Project ID or project name
     * @param runId - ID of the test run against which attachment has to be uploaded.
     */
    TestRestClient.prototype.createTestRunAttachment = function (attachmentRequestModel, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        body: attachmentRequestModel
                    })];
            });
        });
    };
    /**
     * Download a test run attachment by its ID.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run whose attachment has to be downloaded.
     * @param attachmentId - ID of the test run attachment to be downloaded.
     */
    TestRestClient.prototype.getTestRunAttachmentContent = function (project, runId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            attachmentId: attachmentId
                        }
                    })];
            });
        });
    };
    /**
     * Get list of test run attachments reference.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run.
     */
    TestRestClient.prototype.getTestRunAttachments = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Download a test run attachment by its ID.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run whose attachment has to be downloaded.
     * @param attachmentId - ID of the test run attachment to be downloaded.
     */
    TestRestClient.prototype.getTestRunAttachmentZip = function (project, runId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            attachmentId: attachmentId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     */
    TestRestClient.prototype.getBugsLinkedToTestResult = function (project, runId, testCaseResultId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Bugs",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId
                        }
                    })];
            });
        });
    };
    /**
     * Get code coverage data for a build.
     *
     * @param project - Project ID or project name
     * @param buildId - ID of the build for which code coverage data needs to be fetched.
     * @param flags - Value of flags determine the level of code coverage details to be fetched. Flags are additive. Expected Values are 1 for Modules, 2 for Functions, 4 for BlockData.
     */
    TestRestClient.prototype.getBuildCodeCoverage = function (project, buildId, flags) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    flags: flags
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/CodeCoverage",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Code Coverage Summary for Build.
     *
     * @param project - Project ID or project name
     * @param buildId - ID of the build for which code coverage data needs to be fetched.
     * @param deltaBuildId - Delta Build id (optional)
     */
    TestRestClient.prototype.getCodeCoverageSummary = function (project, buildId, deltaBuildId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    deltaBuildId: deltaBuildId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/CodeCoverage",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
     *
     * @param coverageData -
     * @param project - Project ID or project name
     * @param buildId -
     */
    TestRestClient.prototype.updateCodeCoverageSummary = function (coverageData, project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/CodeCoverage",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: coverageData
                    })];
            });
        });
    };
    /**
     * Get code coverage data for a test run
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run for which code coverage data needs to be fetched.
     * @param flags - Value of flags determine the level of code coverage details to be fetched. Flags are additive. Expected Values are 1 for Modules, 2 for Functions, 4 for BlockData.
     */
    TestRestClient.prototype.getTestRunCodeCoverage = function (project, runId, flags) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    flags: flags
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/CodeCoverage",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param newFields -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.addCustomFields = function (newFields, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/ExtensionFields",
                        routeValues: {
                            project: project
                        },
                        body: newFields
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param scopeFilter -
     */
    TestRestClient.prototype.queryCustomFields = function (project, scopeFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    scopeFilter: scopeFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/ExtensionFields",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param filter -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.queryTestResultHistory = function (filter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Results/History",
                        routeValues: {
                            project: project
                        },
                        body: filter
                    })];
            });
        });
    };
    /**
     * Get iteration for a result
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test result that contains the iterations.
     * @param iterationId - Id of the test results Iteration.
     * @param includeActionResults - Include result details for each action performed in the test iteration. ActionResults refer to outcome (pass/fail) of test steps that are executed as part of a running a manual test. Including the ActionResults flag gets the outcome of test steps in the actionResults section and test parameters in the parameters section for each test iteration.
     */
    TestRestClient.prototype.getTestIteration = function (project, runId, testCaseResultId, iterationId, includeActionResults) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeActionResults: includeActionResults
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Iterations/{iterationId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId,
                            iterationId: iterationId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get iterations for a result
     *
     * @param project - Project ID or project name
     * @param runId - ID of the test run that contains the result.
     * @param testCaseResultId - ID of the test result that contains the iterations.
     * @param includeActionResults - Include result details for each action performed in the test iteration. ActionResults refer to outcome (pass/fail) of test steps that are executed as part of a running a manual test. Including the ActionResults flag gets the outcome of test steps in the actionResults section and test parameters in the parameters section for each test iteration.
     */
    TestRestClient.prototype.getTestIterations = function (project, runId, testCaseResultId, includeActionResults) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeActionResults: includeActionResults
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}/Iterations/{iterationId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param workItemQuery -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.getLinkedWorkItemsByQuery = function (workItemQuery, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/LinkedWorkItemsQuery",
                        routeValues: {
                            project: project
                        },
                        body: workItemQuery
                    })];
            });
        });
    };
    /**
     * Get test run message logs
     *
     * @param project - Project ID or project name
     * @param runId - ID of the run to get.
     */
    TestRestClient.prototype.getTestRunLogs = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/MessageLogs",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Get a test point.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan.
     * @param suiteId - ID of the suite that contains the point.
     * @param pointIds - ID of the test point to get.
     * @param witFields - Comma-separated list of work item field names.
     */
    TestRestClient.prototype.getPoint = function (project, planId, suiteId, pointIds, witFields) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    witFields: witFields
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/Points/{pointIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId,
                            pointIds: pointIds
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of test points.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan.
     * @param suiteId - ID of the suite that contains the points.
     * @param witFields - Comma-separated list of work item field names.
     * @param configurationId - Get test points for specific configuration.
     * @param testCaseId - Get test points for a specific test case, valid when configurationId is not set.
     * @param testPointIds - Get test points for comma-separated list of test point IDs, valid only when configurationId and testCaseId are not set.
     * @param includePointDetails - Include all properties for the test point.
     * @param skip - Number of test points to skip..
     * @param top - Number of test points to return.
     */
    TestRestClient.prototype.getPoints = function (project, planId, suiteId, witFields, configurationId, testCaseId, testPointIds, includePointDetails, skip, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    witFields: witFields,
                    configurationId: configurationId,
                    testCaseId: testCaseId,
                    testPointIds: testPointIds,
                    includePointDetails: includePointDetails,
                    '$skip': skip,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/Points/{pointIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update test points.
     *
     * @param pointUpdateModel - Data to update.
     * @param project - Project ID or project name
     * @param planId - ID of the test plan.
     * @param suiteId - ID of the suite that contains the points.
     * @param pointIds - ID of the test point to get. Use a comma-separated list of IDs to update multiple test points.
     */
    TestRestClient.prototype.updateTestPoints = function (pointUpdateModel, project, planId, suiteId, pointIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/Points/{pointIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId,
                            pointIds: pointIds
                        },
                        body: pointUpdateModel
                    })];
            });
        });
    };
    /**
     * Get test points using query.
     *
     * @param query - TestPointsQuery to get test points.
     * @param project - Project ID or project name
     * @param skip - Number of test points to skip..
     * @param top - Number of test points to return.
     */
    TestRestClient.prototype.getPointsByQuery = function (query, project, skip, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$skip': skip,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Points",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: query
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param buildId -
     * @param publishContext -
     * @param groupBy -
     * @param filter -
     * @param orderby -
     * @param shouldIncludeResults -
     * @param queryRunSummaryForInProgress -
     */
    TestRestClient.prototype.getTestResultDetailsForBuild = function (project, buildId, publishContext, groupBy, filter, orderby, shouldIncludeResults, queryRunSummaryForInProgress) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    publishContext: publishContext,
                    groupBy: groupBy,
                    '$filter': filter,
                    '$orderby': orderby,
                    shouldIncludeResults: shouldIncludeResults,
                    queryRunSummaryForInProgress: queryRunSummaryForInProgress
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/test/ResultDetailsByBuild",
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
     * @param releaseId -
     * @param releaseEnvId -
     * @param publishContext -
     * @param groupBy -
     * @param filter -
     * @param orderby -
     * @param shouldIncludeResults -
     * @param queryRunSummaryForInProgress -
     */
    TestRestClient.prototype.getTestResultDetailsForRelease = function (project, releaseId, releaseEnvId, publishContext, groupBy, filter, orderby, shouldIncludeResults, queryRunSummaryForInProgress) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    releaseId: releaseId,
                    releaseEnvId: releaseEnvId,
                    publishContext: publishContext,
                    groupBy: groupBy,
                    '$filter': filter,
                    '$orderby': orderby,
                    shouldIncludeResults: shouldIncludeResults,
                    queryRunSummaryForInProgress: queryRunSummaryForInProgress
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/test/ResultDetailsByRelease",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param document -
     * @param project - Project ID or project name
     * @param runId -
     */
    TestRestClient.prototype.publishTestResultDocument = function (document, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/ResultDocument",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        body: document
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param buildId -
     * @param publishContext -
     * @param fields -
     * @param continuationToken -
     */
    TestRestClient.prototype.getResultGroupsByBuild = function (project, buildId, publishContext, fields, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    publishContext: publishContext,
                    fields: fields && fields.join(","),
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/test/ResultGroupsByBuild",
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
     * @param releaseId -
     * @param publishContext -
     * @param releaseEnvId -
     * @param fields -
     * @param continuationToken -
     */
    TestRestClient.prototype.getResultGroupsByRelease = function (project, releaseId, publishContext, releaseEnvId, fields, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    releaseId: releaseId,
                    publishContext: publishContext,
                    releaseEnvId: releaseEnvId,
                    fields: fields && fields.join(","),
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/test/ResultGroupsByRelease",
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
     * Get list of test Result meta data details for corresponding testcasereferenceId
     *
     * @param testReferenceIds - TestCaseReference Ids of the test Result to be queried, comma separated list of valid ids (limit no. of ids 200).
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.queryTestResultsMetaData = function (testReferenceIds, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Results/ResultMetaData",
                        routeValues: {
                            project: project
                        },
                        body: testReferenceIds
                    })];
            });
        });
    };
    /**
     * Get test result retention settings
     *
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.getResultRetentionSettings = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/ResultRetentionSettings",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * Update test result retention settings
     *
     * @param retentionSettings - Test result retention settings details to be updated
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.updateResultRetentionSettings = function (retentionSettings, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/test/ResultRetentionSettings",
                        routeValues: {
                            project: project
                        },
                        body: retentionSettings
                    })];
            });
        });
    };
    /**
     * Add test results to a test run.
     *
     * @param results - List of test results to add.
     * @param project - Project ID or project name
     * @param runId - Test run ID into which test results to add.
     */
    TestRestClient.prototype.addTestResultsToTestRun = function (results, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.6",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        body: results
                    })];
            });
        });
    };
    /**
     * Get a test result for a test run.
     *
     * @param project - Project ID or project name
     * @param runId - Test run ID of a test result to fetch.
     * @param testCaseResultId - Test result ID.
     * @param detailsToInclude - Details to include with test results. Default is None. Other values are Iterations, WorkItems and SubResults.
     */
    TestRestClient.prototype.getTestResultById = function (project, runId, testCaseResultId, detailsToInclude) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    detailsToInclude: detailsToInclude
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.6",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testCaseResultId: testCaseResultId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get test results for a test run.
     *
     * @param project - Project ID or project name
     * @param runId - Test run ID of test results to fetch.
     * @param detailsToInclude - Details to include with test results. Default is None. Other values are Iterations and WorkItems.
     * @param skip - Number of test results to skip from beginning.
     * @param top - Number of test results to return. Maximum is 1000 when detailsToInclude is None and 200 otherwise.
     * @param outcomes - Comma separated list of test outcomes to filter test results.
     */
    TestRestClient.prototype.getTestResults = function (project, runId, detailsToInclude, skip, top, outcomes) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    detailsToInclude: detailsToInclude,
                    '$skip': skip,
                    '$top': top,
                    outcomes: outcomes && outcomes.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.6",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update test results in a test run.
     *
     * @param results - List of test results to update.
     * @param project - Project ID or project name
     * @param runId - Test run ID whose test results to update.
     */
    TestRestClient.prototype.updateTestResults = function (results, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.6",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Results/{testCaseResultId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        body: results
                    })];
            });
        });
    };
    /**
     * This API will return results by Ids with fields specified/trend for particular automated test method. We are still improving this API and have not finalized proper signature and contract.
     *
     * @param query -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.getTestResultsByQuery = function (query, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.6",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Results",
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
     * @param publishContext -
     * @param outcomes -
     * @param top -
     * @param continuationToken -
     */
    TestRestClient.prototype.getTestResultsByBuild = function (project, buildId, publishContext, outcomes, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    publishContext: publishContext,
                    outcomes: outcomes && outcomes.join(","),
                    '$top': top,
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/ResultsByBuild",
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
     * @param releaseId -
     * @param releaseEnvid -
     * @param publishContext -
     * @param outcomes -
     * @param top -
     * @param continuationToken -
     */
    TestRestClient.prototype.getTestResultsByRelease = function (project, releaseId, releaseEnvid, publishContext, outcomes, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    releaseId: releaseId,
                    releaseEnvid: releaseEnvid,
                    publishContext: publishContext,
                    outcomes: outcomes && outcomes.join(","),
                    '$top': top,
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/ResultsByRelease",
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
     * @param buildId -
     * @param publishContext -
     * @param includeFailureDetails -
     * @param buildToCompare -
     */
    TestRestClient.prototype.queryTestResultsReportForBuild = function (project, buildId, publishContext, includeFailureDetails, buildToCompare) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    publishContext: publishContext,
                    includeFailureDetails: includeFailureDetails,
                    buildToCompare: buildToCompare
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/ResultSummaryByBuild",
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
     * @param releaseId -
     * @param releaseEnvId -
     * @param publishContext -
     * @param includeFailureDetails -
     * @param releaseToCompare -
     */
    TestRestClient.prototype.queryTestResultsReportForRelease = function (project, releaseId, releaseEnvId, publishContext, includeFailureDetails, releaseToCompare) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    releaseId: releaseId,
                    releaseEnvId: releaseEnvId,
                    publishContext: publishContext,
                    includeFailureDetails: includeFailureDetails,
                    releaseToCompare: releaseToCompare
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/ResultSummaryByRelease",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param releases -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.queryTestResultsSummaryForReleases = function (releases, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/ResultSummaryByRelease",
                        routeValues: {
                            project: project
                        },
                        body: releases
                    })];
            });
        });
    };
    /**
     * @param resultsContext -
     * @param project - Project ID or project name
     * @param workItemIds -
     */
    TestRestClient.prototype.queryTestSummaryByRequirement = function (resultsContext, project, workItemIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    workItemIds: workItemIds && workItemIds.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/ResultSummaryByRequirement",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: resultsContext
                    })];
            });
        });
    };
    /**
     * @param filter -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.queryResultTrendForBuild = function (filter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/ResultTrendByBuild",
                        routeValues: {
                            project: project
                        },
                        body: filter
                    })];
            });
        });
    };
    /**
     * @param filter -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.queryResultTrendForRelease = function (filter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/ResultTrendByRelease",
                        routeValues: {
                            project: project
                        },
                        body: filter
                    })];
            });
        });
    };
    /**
     * Get test run statistics , used when we want to get summary of a run by outcome.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the run to get.
     */
    TestRestClient.prototype.getTestRunStatistics = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}/Statistics",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Create new test run.
     *
     * @param testRun - Run details RunCreateModel
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.createTestRun = function (testRun, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}",
                        routeValues: {
                            project: project
                        },
                        body: testRun
                    })];
            });
        });
    };
    /**
     * Delete a test run by its ID.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the run to delete.
     */
    TestRestClient.prototype.deleteTestRun = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Get a test run by its ID.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the run to get.
     * @param includeDetails - Default value is true. It includes details like run statistics, release, build, test environment, post process state, and more.
     */
    TestRestClient.prototype.getTestRunById = function (project, runId, includeDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeDetails: includeDetails
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of test runs.
     *
     * @param project - Project ID or project name
     * @param buildUri - URI of the build that the runs used.
     * @param owner - Team foundation ID of the owner of the runs.
     * @param tmiRunId -
     * @param planId - ID of the test plan that the runs are a part of.
     * @param includeRunDetails - If true, include all the properties of the runs.
     * @param automated - If true, only returns automated runs.
     * @param skip - Number of test runs to skip.
     * @param top - Number of test runs to return.
     */
    TestRestClient.prototype.getTestRuns = function (project, buildUri, owner, tmiRunId, planId, includeRunDetails, automated, skip, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildUri: buildUri,
                    owner: owner,
                    tmiRunId: tmiRunId,
                    planId: planId,
                    includeRunDetails: includeRunDetails,
                    automated: automated,
                    '$skip': skip,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Query Test Runs based on filters. Mandatory fields are minLastUpdatedDate and maxLastUpdatedDate.
     *
     * @param project - Project ID or project name
     * @param minLastUpdatedDate - Minimum Last Modified Date of run to be queried (Mandatory).
     * @param maxLastUpdatedDate - Maximum Last Modified Date of run to be queried (Mandatory, difference between min and max date can be atmost 7 days).
     * @param state - Current state of the Runs to be queried.
     * @param planIds - Plan Ids of the Runs to be queried, comma separated list of valid ids (limit no. of ids 10).
     * @param isAutomated - Automation type of the Runs to be queried.
     * @param publishContext - PublishContext of the Runs to be queried.
     * @param buildIds - Build Ids of the Runs to be queried, comma separated list of valid ids (limit no. of ids 10).
     * @param buildDefIds - Build Definition Ids of the Runs to be queried, comma separated list of valid ids (limit no. of ids 10).
     * @param branchName - Source Branch name of the Runs to be queried.
     * @param releaseIds - Release Ids of the Runs to be queried, comma separated list of valid ids (limit no. of ids 10).
     * @param releaseDefIds - Release Definition Ids of the Runs to be queried, comma separated list of valid ids (limit no. of ids 10).
     * @param releaseEnvIds - Release Environment Ids of the Runs to be queried, comma separated list of valid ids (limit no. of ids 10).
     * @param releaseEnvDefIds - Release Environment Definition Ids of the Runs to be queried, comma separated list of valid ids (limit no. of ids 10).
     * @param runTitle - Run Title of the Runs to be queried.
     * @param top - Number of runs to be queried. Limit is 100
     * @param continuationToken - continuationToken received from previous batch or null for first batch. It is not supposed to be created (or altered, if received from last batch) by user.
     */
    TestRestClient.prototype.queryTestRuns = function (project, minLastUpdatedDate, maxLastUpdatedDate, state, planIds, isAutomated, publishContext, buildIds, buildDefIds, branchName, releaseIds, releaseDefIds, releaseEnvIds, releaseEnvDefIds, runTitle, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    minLastUpdatedDate: minLastUpdatedDate,
                    maxLastUpdatedDate: maxLastUpdatedDate,
                    state: state,
                    planIds: planIds && planIds.join(","),
                    isAutomated: isAutomated,
                    publishContext: publishContext,
                    buildIds: buildIds && buildIds.join(","),
                    buildDefIds: buildDefIds && buildDefIds.join(","),
                    branchName: branchName,
                    releaseIds: releaseIds && releaseIds.join(","),
                    releaseDefIds: releaseDefIds && releaseDefIds.join(","),
                    releaseEnvIds: releaseEnvIds && releaseEnvIds.join(","),
                    releaseEnvDefIds: releaseEnvDefIds && releaseEnvDefIds.join(","),
                    runTitle: runTitle,
                    '$top': top,
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}",
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
     * Update test run by its ID.
     *
     * @param runUpdateModel - Run details RunUpdateModel
     * @param project - Project ID or project name
     * @param runId - ID of the run to update.
     */
    TestRestClient.prototype.updateTestRun = function (runUpdateModel, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/test/Runs/{runId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        body: runUpdateModel
                    })];
            });
        });
    };
    /**
     * Create a test session
     *
     * @param testSession - Test session details for creation
     * @param teamContext - The team context for the operation
     */
    TestRestClient.prototype.createTestSession = function (testSession, teamContext) {
        return __awaiter(this, void 0, void 0, function () {
            var project, team;
            return __generator(this, function (_a) {
                project = teamContext.projectId || teamContext.project;
                team = teamContext.teamId || teamContext.team;
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/{team}/_apis/test/Session/{testSessionId}",
                        routeValues: {
                            project: project,
                            team: team
                        },
                        body: testSession
                    })];
            });
        });
    };
    /**
     * Get a list of test sessions
     *
     * @param teamContext - The team context for the operation
     * @param period - Period in days from now, for which test sessions are fetched.
     * @param allSessions - If false, returns test sessions for current user. Otherwise, it returns test sessions for all users
     * @param includeAllProperties - If true, it returns all properties of the test sessions. Otherwise, it returns the skinny version.
     * @param source - Source of the test session.
     * @param includeOnlyCompletedSessions - If true, it returns test sessions in completed state. Otherwise, it returns test sessions for all states
     */
    TestRestClient.prototype.getTestSessions = function (teamContext, period, allSessions, includeAllProperties, source, includeOnlyCompletedSessions) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues, project, team;
            return __generator(this, function (_a) {
                queryValues = {
                    period: period,
                    allSessions: allSessions,
                    includeAllProperties: includeAllProperties,
                    source: source,
                    includeOnlyCompletedSessions: includeOnlyCompletedSessions
                };
                project = teamContext.projectId || teamContext.project;
                team = teamContext.teamId || teamContext.team;
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/{team}/_apis/test/Session/{testSessionId}",
                        routeValues: {
                            project: project,
                            team: team
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update a test session
     *
     * @param testSession - Test session details for update
     * @param teamContext - The team context for the operation
     */
    TestRestClient.prototype.updateTestSession = function (testSession, teamContext) {
        return __awaiter(this, void 0, void 0, function () {
            var project, team;
            return __generator(this, function (_a) {
                project = teamContext.projectId || teamContext.project;
                team = teamContext.teamId || teamContext.team;
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/{team}/_apis/test/Session/{testSessionId}",
                        routeValues: {
                            project: project,
                            team: team
                        },
                        body: testSession
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param sharedParameterId -
     */
    TestRestClient.prototype.deleteSharedParameter = function (project, sharedParameterId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/test/SharedParameter/{sharedParameterId}",
                        routeValues: {
                            project: project,
                            sharedParameterId: sharedParameterId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param sharedStepId -
     */
    TestRestClient.prototype.deleteSharedStep = function (project, sharedStepId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/test/SharedStep/{sharedStepId}",
                        routeValues: {
                            project: project,
                            sharedStepId: sharedStepId
                        }
                    })];
            });
        });
    };
    /**
     * Add test cases to suite.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suite.
     * @param suiteId - ID of the test suite to which the test cases must be added.
     * @param testCaseIds - IDs of the test cases to add to the suite. Ids are specified in comma separated format.
     */
    TestRestClient.prototype.addTestCasesToSuite = function (project, planId, suiteId, testCaseIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/{action}/{testCaseIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId,
                            testCaseIds: testCaseIds,
                            action: "TestCases"
                        }
                    })];
            });
        });
    };
    /**
     * Get a specific test case in a test suite with test case id.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suites.
     * @param suiteId - ID of the suite that contains the test case.
     * @param testCaseIds - ID of the test case to get.
     */
    TestRestClient.prototype.getTestCaseById = function (project, planId, suiteId, testCaseIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/{action}/{testCaseIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId,
                            testCaseIds: testCaseIds,
                            action: "TestCases"
                        }
                    })];
            });
        });
    };
    /**
     * Get all test cases in a suite.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suites.
     * @param suiteId - ID of the suite to get.
     */
    TestRestClient.prototype.getTestCases = function (project, planId, suiteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/{action}/{testCaseIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId,
                            action: "TestCases"
                        }
                    })];
            });
        });
    };
    /**
     * The test points associated with the test cases are removed from the test suite. The test case work item is not deleted from the system. See test cases resource to delete a test case permanently.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suite.
     * @param suiteId - ID of the suite to get.
     * @param testCaseIds - IDs of the test cases to remove from the suite.
     */
    TestRestClient.prototype.removeTestCasesFromSuiteUrl = function (project, planId, suiteId, testCaseIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/{action}/{testCaseIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId,
                            testCaseIds: testCaseIds,
                            action: "TestCases"
                        }
                    })];
            });
        });
    };
    /**
     * Updates the properties of the test case association in a suite.
     *
     * @param suiteTestCaseUpdateModel - Model for updation of the properties of test case suite association.
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suite.
     * @param suiteId - ID of the test suite to which the test cases must be added.
     * @param testCaseIds - IDs of the test cases to add to the suite. Ids are specified in comma separated format.
     */
    TestRestClient.prototype.updateSuiteTestCases = function (suiteTestCaseUpdateModel, project, planId, suiteId, testCaseIds) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/test/Plans/{planId}/Suites/{suiteId}/{action}/{testCaseIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId,
                            testCaseIds: testCaseIds,
                            action: "TestCases"
                        },
                        body: suiteTestCaseUpdateModel
                    })];
            });
        });
    };
    /**
     * Delete a test case.
     *
     * @param project - Project ID or project name
     * @param testCaseId - Id of test case to delete.
     */
    TestRestClient.prototype.deleteTestCase = function (project, testCaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/test/TestCases/{testCaseId}",
                        routeValues: {
                            project: project,
                            testCaseId: testCaseId
                        }
                    })];
            });
        });
    };
    /**
     * Get history of a test method using TestHistoryQuery
     *
     * @param filter - TestHistoryQuery to get history
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.queryTestHistory = function (filter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/Results/TestHistory",
                        routeValues: {
                            project: project
                        },
                        body: filter
                    })];
            });
        });
    };
    /**
     * @param testSettings -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.createTestSettings = function (testSettings, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/TestSettings/{testSettingsId}",
                        routeValues: {
                            project: project
                        },
                        body: testSettings
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param testSettingsId -
     */
    TestRestClient.prototype.deleteTestSettings = function (project, testSettingsId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/test/TestSettings/{testSettingsId}",
                        routeValues: {
                            project: project,
                            testSettingsId: testSettingsId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param testSettingsId -
     */
    TestRestClient.prototype.getTestSettingsById = function (project, testSettingsId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/TestSettings/{testSettingsId}",
                        routeValues: {
                            project: project,
                            testSettingsId: testSettingsId
                        }
                    })];
            });
        });
    };
    /**
     * @param workItemToTestLinks -
     * @param project - Project ID or project name
     */
    TestRestClient.prototype.addWorkItemToTestLinks = function (workItemToTestLinks, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/TestMethods/WorkItems",
                        routeValues: {
                            project: project
                        },
                        body: workItemToTestLinks
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param testName -
     * @param workItemId -
     */
    TestRestClient.prototype.deleteTestMethodToWorkItemLink = function (project, testName, workItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testName: testName,
                    workItemId: workItemId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/test/TestMethods/{testName}/WorkItems/{workItemId}",
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
     * @param testName -
     */
    TestRestClient.prototype.queryTestMethodLinkedWorkItems = function (project, testName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testName: testName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/test/TestMethods/{testName}/WorkItems/{workItemId}",
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
     * @param workItemCategory -
     * @param automatedTestName -
     * @param testCaseId -
     * @param maxCompleteDate -
     * @param days -
     * @param workItemCount -
     */
    TestRestClient.prototype.queryTestResultWorkItems = function (project, workItemCategory, automatedTestName, testCaseId, maxCompleteDate, days, workItemCount) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    workItemCategory: workItemCategory,
                    automatedTestName: automatedTestName,
                    testCaseId: testCaseId,
                    maxCompleteDate: maxCompleteDate,
                    days: days,
                    '$workItemCount': workItemCount
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/test/Results/WorkItems",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    TestRestClient.RESOURCE_AREA_ID = "c2aa639c-3ccc-4740-b3b6-ce2a1e1d984e";
    return TestRestClient;
}(RestClientBase));
export { TestRestClient };
