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
var TestResultsRestClient = /** @class */ (function (_super) {
    __extends(TestResultsRestClient, _super);
    function TestResultsRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * @param attachmentRequestModel -
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param iterationId -
     * @param actionPath -
     */
    TestResultsRestClient.prototype.createTestIterationResultAttachment = function (attachmentRequestModel, project, runId, testCaseResultId, iterationId, actionPath) {
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
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * @param attachmentRequestModel -
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     */
    TestResultsRestClient.prototype.createTestResultAttachment = function (attachmentRequestModel, project, runId, testCaseResultId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * @param attachmentRequestModel -
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param testSubResultId -
     */
    TestResultsRestClient.prototype.createTestSubResultAttachment = function (attachmentRequestModel, project, runId, testCaseResultId, testSubResultId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     */
    TestResultsRestClient.prototype.deleteTestResultAttachment = function (project, runId, testCaseResultId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * Returns a test iteration attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     * @param iterationId -
     */
    TestResultsRestClient.prototype.getTestIterationAttachmentContent = function (project, runId, testCaseResultId, attachmentId, iterationId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    iterationId: iterationId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * Returns a test iteration attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     * @param iterationId -
     */
    TestResultsRestClient.prototype.getTestIterationAttachmentZip = function (project, runId, testCaseResultId, attachmentId, iterationId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    iterationId: iterationId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * Returns a test result attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     */
    TestResultsRestClient.prototype.getTestResultAttachmentContent = function (project, runId, testCaseResultId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     */
    TestResultsRestClient.prototype.getTestResultAttachments = function (project, runId, testCaseResultId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * Returns a test result attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     */
    TestResultsRestClient.prototype.getTestResultAttachmentZip = function (project, runId, testCaseResultId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * Returns a test sub result attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     * @param testSubResultId -
     */
    TestResultsRestClient.prototype.getTestSubResultAttachmentContent = function (project, runId, testCaseResultId, attachmentId, testSubResultId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * Returns attachment references for test sub result.
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param testSubResultId -
     */
    TestResultsRestClient.prototype.getTestSubResultAttachments = function (project, runId, testCaseResultId, testSubResultId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * Returns a test sub result attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     * @param testSubResultId -
     */
    TestResultsRestClient.prototype.getTestSubResultAttachmentZip = function (project, runId, testCaseResultId, attachmentId, testSubResultId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/attachments/{attachmentId}",
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
     * @param attachmentRequestModel -
     * @param project - Project ID or project name
     * @param runId -
     */
    TestResultsRestClient.prototype.createTestRunAttachment = function (attachmentRequestModel, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/attachments/{attachmentId}",
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
     * @param project - Project ID or project name
     * @param runId -
     * @param attachmentId -
     */
    TestResultsRestClient.prototype.deleteTestRunAttachment = function (project, runId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/attachments/{attachmentId}",
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
     * Returns a test run attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param attachmentId -
     */
    TestResultsRestClient.prototype.getTestRunAttachmentContent = function (project, runId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/attachments/{attachmentId}",
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
     */
    TestResultsRestClient.prototype.getTestRunAttachments = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/attachments/{attachmentId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Returns a test run attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param attachmentId -
     */
    TestResultsRestClient.prototype.getTestRunAttachmentZip = function (project, runId, attachmentId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/attachments/{attachmentId}",
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
    TestResultsRestClient.prototype.getBugsLinkedToTestResult = function (project, runId, testCaseResultId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/bugs",
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
     * @param project - Project ID or project name
     * @param buildId -
     */
    TestResultsRestClient.prototype.fetchSourceCodeCoverageReport = function (project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/codecoverage/sourceview",
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
     * @param buildId -
     * @param flags -
     */
    TestResultsRestClient.prototype.getBuildCodeCoverage = function (project, buildId, flags) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    flags: flags
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/codecoverage",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10&deltaBuildId=9 Request: build id and delta build id (optional)
     *
     * @param project - Project ID or project name
     * @param buildId -
     * @param deltaBuildId -
     */
    TestResultsRestClient.prototype.getCodeCoverageSummary = function (project, buildId, deltaBuildId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    deltaBuildId: deltaBuildId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/codecoverage",
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
     * @param project - Project ID or project name
     * @param buildId -
     * @param coverageData -
     */
    TestResultsRestClient.prototype.updateCodeCoverageSummary = function (project, buildId, coverageData) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/codecoverage",
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
     * @param project - Project ID or project name
     * @param runId -
     * @param flags -
     */
    TestResultsRestClient.prototype.getTestRunCodeCoverage = function (project, runId, flags) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    flags: flags
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/codecoverage",
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
    TestResultsRestClient.prototype.addCustomFields = function (newFields, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/extensionfields",
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
    TestResultsRestClient.prototype.queryCustomFields = function (project, scopeFilter) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    scopeFilter: scopeFilter
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/extensionfields",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get file coverage for the specified file
     *
     * @param fileCoverageRequest - File details with pull request iteration context
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.getFileLevelCodeCoverage = function (fileCoverageRequest, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        httpResponseType: "text/plain",
                        routeTemplate: "{project}/_apis/testresults/codecoverage/filecoverage",
                        routeValues: {
                            project: project
                        },
                        body: fileCoverageRequest
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param buildDefinitionId -
     * @param minBuildCreatedDate -
     */
    TestResultsRestClient.prototype.getFlakyTestResultsByBuildDefinitionId = function (project, buildDefinitionId, minBuildCreatedDate) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildDefinitionId: buildDefinitionId,
                    minBuildCreatedDate: minBuildCreatedDate
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/flakytestresults/builddefinition",
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
     * @param runId -
     */
    TestResultsRestClient.prototype.getFlakyTestResultsByTestRun = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/flakytestresults/runs/{runId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * @param filter -
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.queryTestResultHistory = function (filter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/results/History",
                        routeValues: {
                            project: project
                        },
                        body: filter
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
    TestResultsRestClient.prototype.getTestRunMessageLogs = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/MessageLogs",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Get summary of test results.
     *
     * @param project - Project ID or project name
     * @param pipelineId - Pipeline Id. This is same as build Id.
     * @param stageName - Name of the stage. Maximum supported length for name is 256 character.
     * @param phaseName - Name of the phase. Maximum supported length for name is 256 character.
     * @param jobName - Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     * @param metricNames -
     * @param groupByNode - Group summary for each node of the pipleine heirarchy
     */
    TestResultsRestClient.prototype.getTestPipelineMetrics = function (project, pipelineId, stageName, phaseName, jobName, metricNames, groupByNode) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    pipelineId: pipelineId,
                    stageName: stageName,
                    phaseName: phaseName,
                    jobName: jobName,
                    metricNames: metricNames && metricNames.join(","),
                    groupByNode: groupByNode
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/metrics",
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
     * @param buildId -
     * @param publishContext -
     * @param groupBy -
     * @param filter -
     * @param orderby -
     * @param shouldIncludeResults -
     * @param queryRunSummaryForInProgress -
     */
    TestResultsRestClient.prototype.getTestResultDetailsForBuild = function (project, buildId, publishContext, groupBy, filter, orderby, shouldIncludeResults, queryRunSummaryForInProgress) {
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
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultdetailsbybuild",
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
    TestResultsRestClient.prototype.getTestResultDetailsForRelease = function (project, releaseId, releaseEnvId, publishContext, groupBy, filter, orderby, shouldIncludeResults, queryRunSummaryForInProgress) {
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
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultdetailsbyrelease",
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
    TestResultsRestClient.prototype.publishTestResultDocument = function (document, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/ResultDocument",
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
    TestResultsRestClient.prototype.getResultGroupsByBuild = function (project, buildId, publishContext, fields, continuationToken) {
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
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultgroupsbybuild",
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
    TestResultsRestClient.prototype.getResultGroupsByRelease = function (project, releaseId, publishContext, releaseEnvId, fields, continuationToken) {
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
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultgroupsbyrelease",
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
     * @param testCaseReferenceIds - TestCaseReference Ids of the test Result to be queried, comma separated list of valid ids (limit no. of ids 200).
     * @param project - Project ID or project name
     * @param detailsToInclude - Details to include with test results metadata. Default is None. Other values are FlakyIdentifiers.
     */
    TestResultsRestClient.prototype.queryTestResultsMetaData = function (testCaseReferenceIds, project, detailsToInclude) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    detailsToInclude: detailsToInclude
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/results/ResultMetaData/{testCaseReferenceId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: testCaseReferenceIds
                    })];
            });
        });
    };
    /**
     * Update properties of test result meta data
     *
     * @param testResultMetaDataUpdateInput - TestResultMetaData update input TestResultMetaDataUpdateInput
     * @param project - Project ID or project name
     * @param testCaseReferenceId - TestCaseReference Id of Test Result to be updated.
     */
    TestResultsRestClient.prototype.updateTestResultsMetaData = function (testResultMetaDataUpdateInput, project, testCaseReferenceId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.4",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testresults/results/ResultMetaData/{testCaseReferenceId}",
                        routeValues: {
                            project: project,
                            testCaseReferenceId: testCaseReferenceId
                        },
                        body: testResultMetaDataUpdateInput
                    })];
            });
        });
    };
    /**
     * @param query -
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.getTestResultsByQuery = function (query, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/results",
                        routeValues: {
                            project: project
                        },
                        body: query
                    })];
            });
        });
    };
    /**
     * @param queryModel -
     * @param project - Project ID or project name
     * @param includeResultDetails -
     * @param includeIterationDetails -
     * @param skip -
     * @param top -
     */
    TestResultsRestClient.prototype.getTestResultsByQueryWiql = function (queryModel, project, includeResultDetails, includeIterationDetails, skip, top) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeResultDetails: includeResultDetails,
                    includeIterationDetails: includeIterationDetails,
                    '$skip': skip,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/results/query",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: queryModel
                    })];
            });
        });
    };
    /**
     * @param results -
     * @param project - Project ID or project name
     * @param runId -
     */
    TestResultsRestClient.prototype.addTestResultsToTestRun = function (results, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testResultId}",
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
     * @param project - Project ID or project name
     * @param runId -
     * @param testResultId -
     * @param detailsToInclude -
     */
    TestResultsRestClient.prototype.getTestResultById = function (project, runId, testResultId, detailsToInclude) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    detailsToInclude: detailsToInclude
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testResultId}",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testResultId: testResultId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param detailsToInclude -
     * @param skip -
     * @param top -
     * @param outcomes -
     * @param newTestsOnly -
     */
    TestResultsRestClient.prototype.getTestResults = function (project, runId, detailsToInclude, skip, top, outcomes, newTestsOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    detailsToInclude: detailsToInclude,
                    '$skip': skip,
                    '$top': top,
                    outcomes: outcomes && outcomes.join(","),
                    '$newTestsOnly': newTestsOnly
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testResultId}",
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
     * @param results -
     * @param project - Project ID or project name
     * @param runId -
     */
    TestResultsRestClient.prototype.updateTestResults = function (results, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testResultId}",
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
     * @param project - Project ID or project name
     * @param buildId -
     * @param publishContext -
     * @param outcomes -
     * @param top -
     * @param continuationToken -
     */
    TestResultsRestClient.prototype.getTestResultsByBuild = function (project, buildId, publishContext, outcomes, top, continuationToken) {
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
                        routeTemplate: "{project}/_apis/testresults/resultsbybuild",
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
     * Get a list of results.
     *
     * @param project - Project ID or project name
     * @param pipelineId - Pipeline Id. This is same as build Id.
     * @param stageName - Name of the stage. Maximum supported length for name is 256 character.
     * @param phaseName - Name of the phase. Maximum supported length for name is 256 character.
     * @param jobName - Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     * @param outcomes - List of outcome of results
     * @param top - Maximum number of results to return
     * @param continuationToken - Header to pass the continuationToken
     */
    TestResultsRestClient.prototype.getTestResultsByPipeline = function (project, pipelineId, stageName, phaseName, jobName, outcomes, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    pipelineId: pipelineId,
                    stageName: stageName,
                    phaseName: phaseName,
                    jobName: jobName,
                    outcomes: outcomes && outcomes.join(","),
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultsbypipeline",
                        routeValues: {
                            project: project
                        },
                        customHeaders: {
                            "x-ms-continuationtoken": continuationToken,
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
    TestResultsRestClient.prototype.getTestResultsByRelease = function (project, releaseId, releaseEnvid, publishContext, outcomes, top, continuationToken) {
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
                        routeTemplate: "{project}/_apis/testresults/resultsbyrelease",
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
     * Get all the available groups details and for these groups get failed and aborted results.
     *
     * @param project - Project ID or project name
     * @param pipelineId - Pipeline Id. This is same as build Id.
     * @param stageName - Name of the stage. Maximum supported length for name is 256 character.
     * @param phaseName - Name of the phase. Maximum supported length for name is 256 character.
     * @param jobName - Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     * @param shouldIncludeFailedAndAbortedResults - If true, it will return Ids of failed and aborted results for each test group
     * @param queryGroupSummaryForInProgress - If true, it will calculate summary for InProgress runs as well.
     */
    TestResultsRestClient.prototype.testResultsGroupDetails = function (project, pipelineId, stageName, phaseName, jobName, shouldIncludeFailedAndAbortedResults, queryGroupSummaryForInProgress) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    pipelineId: pipelineId,
                    stageName: stageName,
                    phaseName: phaseName,
                    jobName: jobName,
                    shouldIncludeFailedAndAbortedResults: shouldIncludeFailedAndAbortedResults,
                    queryGroupSummaryForInProgress: queryGroupSummaryForInProgress
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultsgroupDetails",
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
     * @param buildId -
     * @param publishContext -
     * @param includeFailureDetails -
     * @param buildToCompare -
     */
    TestResultsRestClient.prototype.queryTestResultsReportForBuild = function (project, buildId, publishContext, includeFailureDetails, buildToCompare) {
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
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultsummarybybuild",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get summary of test results.
     *
     * @param project - Project ID or project name
     * @param pipelineId - Pipeline Id. This is same as build Id.
     * @param stageName - Name of the stage. Maximum supported length for name is 256 character.
     * @param phaseName - Name of the phase. Maximum supported length for name is 256 character.
     * @param jobName - Matrixing in YAML generates copies of a job with different inputs in matrix. JobName is the name of those input. Maximum supported length for name is 256 character.
     * @param includeFailureDetails - If true returns failure insights
     */
    TestResultsRestClient.prototype.queryTestResultsReportForPipeline = function (project, pipelineId, stageName, phaseName, jobName, includeFailureDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    pipelineId: pipelineId,
                    stageName: stageName,
                    phaseName: phaseName,
                    jobName: jobName,
                    includeFailureDetails: includeFailureDetails
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultsummarybypipeline",
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
    TestResultsRestClient.prototype.queryTestResultsReportForRelease = function (project, releaseId, releaseEnvId, publishContext, includeFailureDetails, releaseToCompare) {
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
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/resultsummarybyrelease",
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
    TestResultsRestClient.prototype.queryTestResultsSummaryForReleases = function (releases, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/resultsummarybyrelease",
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
    TestResultsRestClient.prototype.queryTestSummaryByRequirement = function (resultsContext, project, workItemIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    workItemIds: workItemIds && workItemIds.join(",")
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/resultsummarybyrequirement",
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
    TestResultsRestClient.prototype.queryResultTrendForBuild = function (filter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/ResultTrendByBuild",
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
    TestResultsRestClient.prototype.queryResultTrendForRelease = function (filter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/ResultTrendByRelease",
                        routeValues: {
                            project: project
                        },
                        body: filter
                    })];
            });
        });
    };
    /**
     * @param testRun -
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.createTestRun = function (testRun, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}",
                        routeValues: {
                            project: project
                        },
                        body: testRun
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param runId -
     */
    TestResultsRestClient.prototype.deleteTestRun = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param includeDetails -
     * @param includeTags -
     */
    TestResultsRestClient.prototype.getTestRunById = function (project, runId, includeDetails, includeTags) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeDetails: includeDetails,
                    includeTags: includeTags
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}",
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
     * @param project - Project ID or project name
     * @param buildUri -
     * @param owner -
     * @param tmiRunId -
     * @param planId -
     * @param includeRunDetails -
     * @param automated -
     * @param skip -
     * @param top -
     */
    TestResultsRestClient.prototype.getTestRuns = function (project, buildUri, owner, tmiRunId, planId, includeRunDetails, automated, skip, top) {
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
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}",
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
     * @param planIds - Plan Ids of the Runs to be queried, comma separated list of valid ids.
     * @param isAutomated - Automation type of the Runs to be queried.
     * @param publishContext - PublishContext of the Runs to be queried.
     * @param buildIds - Build Ids of the Runs to be queried, comma separated list of valid ids.
     * @param buildDefIds - Build Definition Ids of the Runs to be queried, comma separated list of valid ids.
     * @param branchName - Source Branch name of the Runs to be queried.
     * @param releaseIds - Release Ids of the Runs to be queried, comma separated list of valid ids.
     * @param releaseDefIds - Release Definition Ids of the Runs to be queried, comma separated list of valid ids.
     * @param releaseEnvIds - Release Environment Ids of the Runs to be queried, comma separated list of valid ids.
     * @param releaseEnvDefIds - Release Environment Definition Ids of the Runs to be queried, comma separated list of valid ids.
     * @param runTitle - Run Title of the Runs to be queried.
     * @param top - Number of runs to be queried. Limit is 100
     * @param continuationToken - continuationToken received from previous batch or null for first batch. It is not supposed to be created (or altered, if received from last batch) by user.
     */
    TestResultsRestClient.prototype.queryTestRuns = function (project, minLastUpdatedDate, maxLastUpdatedDate, state, planIds, isAutomated, publishContext, buildIds, buildDefIds, branchName, releaseIds, releaseDefIds, releaseEnvIds, releaseEnvDefIds, runTitle, top, continuationToken) {
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
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}",
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
     * @param runUpdateModel -
     * @param project - Project ID or project name
     * @param runId -
     */
    TestResultsRestClient.prototype.updateTestRun = function (runUpdateModel, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}",
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
     * Get test run summary, used when we want to get summary of a run by outcome. Test run should be in completed state.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the run to get.
     */
    TestResultsRestClient.prototype.getTestRunSummaryByOutcome = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/runsummary",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Get TestResultsSettings data
     *
     * @param project - Project ID or project name
     * @param settingsType -
     */
    TestResultsRestClient.prototype.getTestResultsSettings = function (project, settingsType) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    settingsType: settingsType
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/testresults/settings",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update project settings of test results
     *
     * @param testResultsUpdateSettings -
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.updatePipelinesTestSettings = function (testResultsUpdateSettings, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testresults/settings",
                        routeValues: {
                            project: project
                        },
                        body: testResultsUpdateSettings
                    })];
            });
        });
    };
    /**
     * Gets the list of results whose failure matches with the provided one.
     *
     * @param project - Project ID or project name
     * @param runId - id of test run
     * @param testResultId - id of test result inside a test run
     * @param testSubResultId - id of subresult inside a test result
     * @param top - Maximum number of results to return
     * @param continuationToken - Header to pass the continuationToken
     */
    TestResultsRestClient.prototype.getSimilarTestResults = function (project, runId, testResultId, testSubResultId, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSubResultId: testSubResultId,
                    '$top': top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testResultId}/SimilarTestResults",
                        routeValues: {
                            project: project,
                            runId: runId,
                            testResultId: testResultId
                        },
                        customHeaders: {
                            "x-ms-continuationtoken": continuationToken,
                        },
                        queryParams: queryValues
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
    TestResultsRestClient.prototype.getTestRunStatistics = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/statistics",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * \<p\>Gets the coverage status for the last successful build of a definition, optionally scoped to a specific branch\</p\>
     *
     * @param project - Project ID or project name
     * @param definition - The ID or name of the definition.
     * @param branchName - The branch name.
     * @param label - The String to replace the default text on the left side of the badge.
     */
    TestResultsRestClient.prototype.getCoverageStatusBadge = function (project, definition, branchName, label) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    branchName: branchName,
                    label: label
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/codecoverage/status/{*definition}",
                        routeValues: {
                            project: project,
                            definition: definition
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get all the tags in a build.
     *
     * @param project - Project ID or project name
     * @param buildId - Build ID
     */
    TestResultsRestClient.prototype.getTestTagsForBuild = function (project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/tags",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get all the tags in a release.
     *
     * @param project - Project ID or project name
     * @param releaseId - Release ID
     * @param releaseEnvId - Release environment ID
     */
    TestResultsRestClient.prototype.getTestTagsForRelease = function (project, releaseId, releaseEnvId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    releaseId: releaseId,
                    releaseEnvId: releaseEnvId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/tags",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update tags of a run, Tags can be Added and Deleted
     *
     * @param testTagsUpdateModel - TestTagsUpdateModel
     * @param project - Project ID or project name
     * @param runId - RunId of the run
     */
    TestResultsRestClient.prototype.updateTestRunTags = function (testTagsUpdateModel, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/tags",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        body: testTagsUpdateModel
                    })];
            });
        });
    };
    /**
     * Get all the tags in a build.
     *
     * @param project - Project ID or project name
     * @param buildId - Build ID
     */
    TestResultsRestClient.prototype.getTestTagSummaryForBuild = function (project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/tagsummary",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get all the tags in a release.
     *
     * @param project - Project ID or project name
     * @param releaseId - Release ID
     * @param releaseEnvId - Release environment ID
     */
    TestResultsRestClient.prototype.getTestTagSummaryForRelease = function (project, releaseId, releaseEnvId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    releaseId: releaseId,
                    releaseEnvId: releaseEnvId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/tagsummary",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Creates an attachment in the LogStore for the specified buildId.
     *
     * @param attachmentRequestModel - Contains attachment info like stream, filename, comment, attachmentType
     * @param project - Project ID or project name
     * @param buildId - BuildId
     */
    TestResultsRestClient.prototype.createBuildAttachmentInLogStore = function (attachmentRequestModel, project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/uploadbuildattachments/{buildId}",
                        routeValues: {
                            project: project,
                            buildId: buildId
                        },
                        body: attachmentRequestModel
                    })];
            });
        });
    };
    /**
     * Creates an attachment in the LogStore for the specified runId.
     *
     * @param attachmentRequestModel - Contains attachment info like stream, filename, comment, attachmentType
     * @param project - Project ID or project name
     * @param runId - Test RunId
     */
    TestResultsRestClient.prototype.createTestRunLogStoreAttachment = function (attachmentRequestModel, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/testattachments",
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
     * Deletes the attachment with the specified filename for the specified runId from the LogStore.
     *
     * @param project - Project ID or project name
     * @param runId - Test RunId
     * @param filename - Attachment FileName
     */
    TestResultsRestClient.prototype.deleteTestRunLogStoreAttachment = function (project, runId, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    filename: filename
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/testattachments",
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
     * Returns the attachment with the specified filename for the specified runId from the LogStore.
     *
     * @param project - Project ID or project name
     * @param runId - Test RunId
     * @param filename - Attachment FileName
     */
    TestResultsRestClient.prototype.getTestRunLogStoreAttachmentContent = function (project, runId, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    filename: filename
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/testattachments",
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
     * Returns a list of attachments for the specified runId from the LogStore.
     *
     * @param project - Project ID or project name
     * @param runId - Test RunId
     */
    TestResultsRestClient.prototype.getTestRunLogStoreAttachments = function (project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/testattachments",
                        routeValues: {
                            project: project,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Returns the attachment with the specified filename for the specified runId from the LogStore.
     *
     * @param project - Project ID or project name
     * @param runId - Test RunId
     * @param filename - Attachment FileName
     */
    TestResultsRestClient.prototype.getTestRunLogStoreAttachmentZip = function (project, runId, filename) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    filename: filename
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        httpResponseType: "application/zip",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/testattachments",
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
     * Creates a new test failure type
     *
     * @param testResultFailureType -
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.createFailureType = function (testResultFailureType, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testfailuretype/{failureTypeId}",
                        routeValues: {
                            project: project
                        },
                        body: testResultFailureType
                    })];
            });
        });
    };
    /**
     * Deletes a test failure type with specified failureTypeId
     *
     * @param project - Project ID or project name
     * @param failureTypeId -
     */
    TestResultsRestClient.prototype.deleteFailureType = function (project, failureTypeId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testresults/testfailuretype/{failureTypeId}",
                        routeValues: {
                            project: project,
                            failureTypeId: failureTypeId
                        }
                    })];
            });
        });
    };
    /**
     * Returns the list of test failure types.
     *
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.getFailureTypes = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/testfailuretype/{failureTypeId}",
                        routeValues: {
                            project: project
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
    TestResultsRestClient.prototype.queryTestHistory = function (filter, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/results/TestHistory",
                        routeValues: {
                            project: project
                        },
                        body: filter
                    })];
            });
        });
    };
    /**
     * Get list of build attachments reference
     *
     * @param project - Project ID or project name
     * @param buildId - Id of the build to get
     * @param type - type of the attachment to get
     * @param directoryPath - directory path for which attachments are needed
     * @param fileNamePrefix - file name prefix to filter the list of attachment
     * @param fetchMetaData - Default is false, set if metadata is needed
     * @param top - Number of test attachments reference to return
     * @param continuationToken - Header to pass the continuationToken
     */
    TestResultsRestClient.prototype.getTestLogsForBuild = function (project, buildId, type, directoryPath, fileNamePrefix, fetchMetaData, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    type: type,
                    directoryPath: directoryPath,
                    fileNamePrefix: fileNamePrefix,
                    fetchMetaData: fetchMetaData,
                    top: top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/testlog",
                        routeValues: {
                            project: project
                        },
                        customHeaders: {
                            "x-ms-continuationtoken": continuationToken,
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
     * Get list of test result attachments reference
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run that contains the result
     * @param resultId - Id of the test result
     * @param type - type of attachments to get
     * @param directoryPath - directory path of attachments to get
     * @param fileNamePrefix - file name prefix to filter the list of attachment
     * @param fetchMetaData - Default is false, set if metadata is needed
     * @param top - Numbe of attachments reference to return
     * @param continuationToken - Header to pass the continuationToken
     */
    TestResultsRestClient.prototype.getTestResultLogs = function (project, runId, resultId, type, directoryPath, fileNamePrefix, fetchMetaData, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    type: type,
                    directoryPath: directoryPath,
                    fileNamePrefix: fileNamePrefix,
                    fetchMetaData: fetchMetaData,
                    top: top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{resultId}/testlog",
                        routeValues: {
                            project: project,
                            runId: runId,
                            resultId: resultId
                        },
                        customHeaders: {
                            "x-ms-continuationtoken": continuationToken,
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
     * Get list of test subresult attachments reference
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run that contains the results
     * @param resultId - Id of the test result that contains subresult
     * @param subResultId - Id of the test subresult
     * @param type - type of the attachments to get
     * @param directoryPath - directory path of the attachment to get
     * @param fileNamePrefix - file name prefix to filter the list of attachments
     * @param fetchMetaData - Default is false, set if metadata is needed
     * @param top - Number of attachments reference to return
     * @param continuationToken - Header to pass the continuationToken
     */
    TestResultsRestClient.prototype.getTestSubResultLogs = function (project, runId, resultId, subResultId, type, directoryPath, fileNamePrefix, fetchMetaData, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    subResultId: subResultId,
                    type: type,
                    directoryPath: directoryPath,
                    fileNamePrefix: fileNamePrefix,
                    fetchMetaData: fetchMetaData,
                    top: top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{resultId}/testlog",
                        routeValues: {
                            project: project,
                            runId: runId,
                            resultId: resultId
                        },
                        customHeaders: {
                            "x-ms-continuationtoken": continuationToken,
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
     * Get list of test run attachments reference
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run
     * @param type - type of the attachments to get
     * @param directoryPath - directory path for which attachments are needed
     * @param fileNamePrefix - file name prefix to filter the list of attachment
     * @param fetchMetaData - Default is false, set if metadata is needed
     * @param top - Number of attachments reference to return
     * @param continuationToken - Header to pass the continuationToken
     */
    TestResultsRestClient.prototype.getTestRunLogs = function (project, runId, type, directoryPath, fileNamePrefix, fetchMetaData, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    type: type,
                    directoryPath: directoryPath,
                    fileNamePrefix: fileNamePrefix,
                    fetchMetaData: fetchMetaData,
                    top: top
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/testlog",
                        routeValues: {
                            project: project,
                            runId: runId
                        },
                        customHeaders: {
                            "x-ms-continuationtoken": continuationToken,
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
     * Get SAS Uri of a build attachment
     *
     * @param project - Project ID or project name
     * @param build - Id of the build to get
     * @param type - type of the file
     * @param filePath - filePath for which sas uri is needed
     */
    TestResultsRestClient.prototype.getTestLogStoreEndpointDetailsForBuildLog = function (project, build, type, filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    build: build,
                    type: type,
                    filePath: filePath
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/testlogstoreendpoint",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create and Get sas uri of the build container
     *
     * @param project - Project ID or project name
     * @param buildId - Id of the build to get
     * @param testLogStoreOperationType - Type of operation to perform using sas uri
     */
    TestResultsRestClient.prototype.testLogStoreEndpointDetailsForBuild = function (project, buildId, testLogStoreOperationType) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId,
                    testLogStoreOperationType: testLogStoreOperationType
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testlogstoreendpoint",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get SAS Uri of a test results attachment
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run that contains result
     * @param resultId - Id of the test result whose files need to be downloaded
     * @param type - type of the file
     * @param filePath - filePath for which sas uri is needed
     */
    TestResultsRestClient.prototype.getTestLogStoreEndpointDetailsForResultLog = function (project, runId, resultId, type, filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    type: type,
                    filePath: filePath
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{resultId}/testlogstoreendpoint",
                        routeValues: {
                            project: project,
                            runId: runId,
                            resultId: resultId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get SAS Uri of a test subresults attachment
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run that contains result
     * @param resultId - Id of the test result that contains subresult
     * @param subResultId - Id of the test subresult whose file sas uri is needed
     * @param type - type of the file
     * @param filePath - filePath for which sas uri is needed
     */
    TestResultsRestClient.prototype.getTestLogStoreEndpointDetailsForSubResultLog = function (project, runId, resultId, subResultId, type, filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    subResultId: subResultId,
                    type: type,
                    filePath: filePath
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{resultId}/testlogstoreendpoint",
                        routeValues: {
                            project: project,
                            runId: runId,
                            resultId: resultId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create empty file for a result and Get Sas uri for the file
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run that contains the result
     * @param resultId - Id of the test results that contains sub result
     * @param subResultId - Id of the test sub result whose file sas uri is needed
     * @param filePath - file path inside the sub result for which sas uri is needed
     * @param type - Type of the file for download
     */
    TestResultsRestClient.prototype.testLogStoreEndpointDetailsForResult = function (project, runId, resultId, subResultId, filePath, type) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    subResultId: subResultId,
                    filePath: filePath,
                    type: type
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{resultId}/testlogstoreendpoint",
                        routeValues: {
                            project: project,
                            runId: runId,
                            resultId: resultId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get SAS Uri of a test run attachment
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run whose file has to be downloaded
     * @param type - type of the file
     * @param filePath - filePath for which sas uri is needed
     */
    TestResultsRestClient.prototype.getTestLogStoreEndpointDetailsForRunLog = function (project, runId, type, filePath) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    type: type,
                    filePath: filePath
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/testlogstoreendpoint",
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
     * Create empty file for a run and Get Sas uri for the file
     *
     * @param project - Project ID or project name
     * @param runId - Id of the run to get endpoint details
     * @param testLogStoreOperationType - Type of operation to perform using sas uri
     * @param filePath - file path to create an empty file
     * @param type - Default is GeneralAttachment, type of empty file to be created
     */
    TestResultsRestClient.prototype.testLogStoreEndpointDetailsForRun = function (project, runId, testLogStoreOperationType, filePath, type) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testLogStoreOperationType: testLogStoreOperationType,
                    filePath: filePath,
                    type: type
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/testlogstoreendpoint",
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
     * Retrieves Test runs associated to a session
     *
     * @param project - Project ID or project name
     * @param sessionId - Id of TestResults session to obtain Test Runs for.
     */
    TestResultsRestClient.prototype.getTestRunsBySessionId = function (project, sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/testsession/{sessionId}/runs",
                        routeValues: {
                            project: project,
                            sessionId: sessionId
                        }
                    })];
            });
        });
    };
    /**
     * Creates TestResultsSession object in TCM data store
     *
     * @param session - Received session object.
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.createTestSession = function (session, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testsession/session",
                        routeValues: {
                            project: project
                        },
                        body: session
                    })];
            });
        });
    };
    /**
     * Retrieves TestResultsSession metadata object in TCM data store
     *
     * @param project - Project ID or project name
     * @param buildId -
     */
    TestResultsRestClient.prototype.getTestSession = function (project, buildId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    buildId: buildId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/testsession/session",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Retrieves TestResultsSession Layout object in TCM data store
     *
     * @param project - Project ID or project name
     * @param sessionId -
     */
    TestResultsRestClient.prototype.getTestSessionLayout = function (project, sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    sessionId: sessionId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/testsession/session",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Creates Environment object in TCM data store
     *
     * @param environments - Received Environment object.
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.createEnvironment = function (environments, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testsession/environment",
                        routeValues: {
                            project: project
                        },
                        body: environments
                    })];
            });
        });
    };
    /**
     * Retrieves TestResultsSession Layout object in TCM data store
     *
     * @param project - Project ID or project name
     * @param sessionId - Retrieve session object.
     */
    TestResultsRestClient.prototype.getTestSessionLayoutBySessionId = function (project, sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/testsession/session/{sessionId}/layout",
                        routeValues: {
                            project: project,
                            sessionId: sessionId
                        }
                    })];
            });
        });
    };
    /**
     * Creates Notification object in TCM data store for a given session
     *
     * @param notifications - Notification(s) to add for the specified sessionId
     * @param project - Project ID or project name
     * @param sessionId - ID of Session to add Notification
     */
    TestResultsRestClient.prototype.createNotification = function (notifications, project, sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testsession/{sessionId}/notifications",
                        routeValues: {
                            project: project,
                            sessionId: sessionId
                        },
                        body: notifications
                    })];
            });
        });
    };
    /**
     * Retrieves TestResultsSession Notification objects in TCM data store
     *
     * @param project - Project ID or project name
     * @param sessionId - Id of TestResults session to obtain Notifications for.
     */
    TestResultsRestClient.prototype.getSessionNotifications = function (project, sessionId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/testsession/{sessionId}/notifications",
                        routeValues: {
                            project: project,
                            sessionId: sessionId
                        }
                    })];
            });
        });
    };
    /**
     * Add Test Results to test run session
     *
     * @param results -
     * @param project - Project ID or project name
     * @param runId - RunId of test run
     */
    TestResultsRestClient.prototype.addTestResultsToTestRunSession = function (results, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testsession/runs/{runId}/results/{testResultId}",
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
     * @param project - Project ID or project name
     * @param runId -
     * @param detailsToInclude -
     * @param skip -
     * @param top -
     * @param outcomes -
     * @param newTestsOnly -
     */
    TestResultsRestClient.prototype.getTestSessionResults = function (project, runId, detailsToInclude, skip, top, outcomes, newTestsOnly) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    detailsToInclude: detailsToInclude,
                    '$skip': skip,
                    '$top': top,
                    outcomes: outcomes && outcomes.join(","),
                    '$newTestsOnly': newTestsOnly
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/testsession/runs/{runId}/results/{testResultId}",
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
     * Creates TestResultsMRX objects in TCM data store for existing test results
     *
     * @param results - Results object with only test results MRX properties and existing testResultId
     * @param project - Project ID or project name
     * @param runId - RunId of test run
     */
    TestResultsRestClient.prototype.updateTestResultsToTestRunSession = function (results, project, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testresults/testsession/runs/{runId}/results/{testResultId}",
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
     * @param testSettings -
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.createTestSettings = function (testSettings, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testsettings",
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
    TestResultsRestClient.prototype.deleteTestSettings = function (project, testSettingsId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSettingsId: testSettingsId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testresults/testsettings",
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
     * @param testSettingsId -
     */
    TestResultsRestClient.prototype.getTestSettingsById = function (project, testSettingsId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testSettingsId: testSettingsId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testresults/testsettings",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param workItemToTestLinks -
     * @param project - Project ID or project name
     */
    TestResultsRestClient.prototype.addWorkItemToTestLinks = function (workItemToTestLinks, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testmethods/workitems",
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
    TestResultsRestClient.prototype.deleteTestMethodToWorkItemLink = function (project, testName, workItemId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testName: testName,
                    workItemId: workItemId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testresults/testmethods/{testName}/workitems/{workItemId}",
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
    TestResultsRestClient.prototype.queryTestMethodLinkedWorkItems = function (project, testName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testName: testName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testresults/testmethods/{testName}/workitems/{workItemId}",
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
     * @param runId -
     * @param testCaseResultId -
     */
    TestResultsRestClient.prototype.getTestResultWorkItemsById = function (project, runId, testCaseResultId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/runs/{runId}/results/{testCaseResultId}/workitems",
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
     * Query Test Result WorkItems based on filter
     *
     * @param project - Project ID or project name
     * @param workItemCategory - can take values Microsoft.BugCategory or all(for getting all workitems)
     * @param automatedTestName -
     * @param testCaseId -
     * @param maxCompleteDate -
     * @param days -
     * @param workItemCount -
     */
    TestResultsRestClient.prototype.queryTestResultWorkItems = function (project, workItemCategory, automatedTestName, testCaseId, maxCompleteDate, days, workItemCount) {
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
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testresults/results/workitems",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    TestResultsRestClient.RESOURCE_AREA_ID = "c83eaf52-edf3-4034-ae11-17d38f25404c";
    return TestResultsRestClient;
}(RestClientBase));
export { TestResultsRestClient };
