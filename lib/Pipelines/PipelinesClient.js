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
var PipelinesRestClient = /** @class */ (function (_super) {
    __extends(PipelinesRestClient, _super);
    function PipelinesRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * Get a specific artifact from a pipeline run
     *
     * @param project - Project ID or project name
     * @param pipelineId - ID of the pipeline.
     * @param runId - ID of the run of that pipeline.
     * @param artifactName - Name of the artifact.
     * @param expand - Expand options. Default is None.
     */
    PipelinesRestClient.prototype.getArtifact = function (project, pipelineId, runId, artifactName, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    artifactName: artifactName,
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}/runs/{runId}/artifacts",
                        routeValues: {
                            project: project,
                            pipelineId: pipelineId,
                            runId: runId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a specific log from a pipeline run
     *
     * @param project - Project ID or project name
     * @param pipelineId - ID of the pipeline.
     * @param runId - ID of the run of that pipeline.
     * @param logId - ID of the log.
     * @param expand - Expand options. Default is None.
     */
    PipelinesRestClient.prototype.getLog = function (project, pipelineId, runId, logId, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}/runs/{runId}/logs/{logId}",
                        routeValues: {
                            project: project,
                            pipelineId: pipelineId,
                            runId: runId,
                            logId: logId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of logs from a pipeline run.
     *
     * @param project - Project ID or project name
     * @param pipelineId - ID of the pipeline.
     * @param runId - ID of the run of that pipeline.
     * @param expand - Expand options. Default is None.
     */
    PipelinesRestClient.prototype.listLogs = function (project, pipelineId, runId, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    '$expand': expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}/runs/{runId}/logs/{logId}",
                        routeValues: {
                            project: project,
                            pipelineId: pipelineId,
                            runId: runId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create a pipeline.
     *
     * @param inputParameters - Input parameters.
     * @param project - Project ID or project name
     */
    PipelinesRestClient.prototype.createPipeline = function (inputParameters, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}",
                        routeValues: {
                            project: project
                        },
                        body: inputParameters
                    })];
            });
        });
    };
    /**
     * Gets a pipeline, optionally at the specified version
     *
     * @param project - Project ID or project name
     * @param pipelineId - The pipeline ID
     * @param pipelineVersion - The pipeline version
     */
    PipelinesRestClient.prototype.getPipeline = function (project, pipelineId, pipelineVersion) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    pipelineVersion: pipelineVersion
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}",
                        routeValues: {
                            project: project,
                            pipelineId: pipelineId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a list of pipelines.
     *
     * @param project - Project ID or project name
     * @param orderBy - A sort expression. Defaults to "name asc"
     * @param top - The maximum number of pipelines to return
     * @param continuationToken - A continuation token from a previous request, to retrieve the next page of results
     */
    PipelinesRestClient.prototype.listPipelines = function (project, orderBy, top, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    orderBy: orderBy,
                    '$top': top,
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Queues a dry run of the pipeline and returns an object containing the final yaml.
     *
     * @param runParameters - Optional additional parameters for this run.
     * @param project - Project ID or project name
     * @param pipelineId - The pipeline ID.
     * @param pipelineVersion - The pipeline version.
     */
    PipelinesRestClient.prototype.preview = function (runParameters, project, pipelineId, pipelineVersion) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    pipelineVersion: pipelineVersion
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}/preview",
                        routeValues: {
                            project: project,
                            pipelineId: pipelineId
                        },
                        queryParams: queryValues,
                        body: runParameters
                    })];
            });
        });
    };
    /**
     * Gets a run for a particular pipeline.
     *
     * @param project - Project ID or project name
     * @param pipelineId - The pipeline id
     * @param runId - The run id
     */
    PipelinesRestClient.prototype.getRun = function (project, pipelineId, runId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}/runs/{runId}",
                        routeValues: {
                            project: project,
                            pipelineId: pipelineId,
                            runId: runId
                        }
                    })];
            });
        });
    };
    /**
     * Gets top 10000 runs for a particular pipeline.
     *
     * @param project - Project ID or project name
     * @param pipelineId - The pipeline id
     */
    PipelinesRestClient.prototype.listRuns = function (project, pipelineId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}/runs/{runId}",
                        routeValues: {
                            project: project,
                            pipelineId: pipelineId
                        }
                    })];
            });
        });
    };
    /**
     * Runs a pipeline.
     *
     * @param runParameters - Optional additional parameters for this run.
     * @param project - Project ID or project name
     * @param pipelineId - The pipeline ID.
     * @param pipelineVersion - The pipeline version.
     */
    PipelinesRestClient.prototype.runPipeline = function (runParameters, project, pipelineId, pipelineVersion) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    pipelineVersion: pipelineVersion
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/pipelines/{pipelineId}/runs/{runId}",
                        routeValues: {
                            project: project,
                            pipelineId: pipelineId
                        },
                        queryParams: queryValues,
                        body: runParameters
                    })];
            });
        });
    };
    return PipelinesRestClient;
}(RestClientBase));
export { PipelinesRestClient };
