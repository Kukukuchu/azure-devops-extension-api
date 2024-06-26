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
var AlertRestClient = /** @class */ (function (_super) {
    __extends(AlertRestClient, _super);
    function AlertRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * Get an alert.
     *
     * @param project - Project ID or project name
     * @param alertId - ID of alert to retrieve
     * @param repository - Name or id  of a repository that alert is part of
     * @param ref -
     * @param expand - Expand alert attributes. Possible options are \{ValidationFingerprint, None\}
     */
    AlertRestClient.prototype.getAlert = function (project, alertId, repository, ref, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    ref: ref,
                    expand: expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Alert/repositories/{repository}/Alerts/{alertId}",
                        routeValues: {
                            project: project,
                            alertId: alertId,
                            repository: repository
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get alerts for a repository
     *
     * @param project - Project ID or project name
     * @param repository - The name or ID of the repository
     * @param top - The maximum number of alerts to return
     * @param orderBy - Must be "id" "firstSeen" "lastSeen" "fixedOn" or "severity"  Defaults to "id"
     * @param criteria - Options to limit the alerts returned
     * @param continuationToken - If there are more alerts than can be returned, a continuation token is placed in the "x-ms-continuationtoken" header.  Use that token here to get the next page of alerts
     */
    AlertRestClient.prototype.getAlerts = function (project, repository, top, orderBy, criteria, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    top: top,
                    orderBy: orderBy,
                    criteria: criteria,
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Alert/repositories/{repository}/Alerts/{alertId}",
                        routeValues: {
                            project: project,
                            repository: repository
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
     * Get an alert.
     *
     * @param project - Project ID or project name
     * @param alertId - ID of alert to retrieve
     * @param repository - Name or id  of a repository that alert is part of
     * @param ref -
     * @param expand - Expand alert attributes. Possible options are \{ValidationFingerprint, None\}
     */
    AlertRestClient.prototype.getAlertSarif = function (project, alertId, repository, ref, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    ref: ref,
                    expand: expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Alert/repositories/{repository}/Alerts/{alertId}",
                        routeValues: {
                            project: project,
                            alertId: alertId,
                            repository: repository
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update the status of an alert
     *
     * @param stateUpdate - The new status of the alert
     * @param project - Project ID or project name
     * @param alertId - The ID of the alert
     * @param repository - The name or ID of the repository
     */
    AlertRestClient.prototype.updateAlert = function (stateUpdate, project, alertId, repository) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Alert/repositories/{repository}/Alerts/{alertId}",
                        routeValues: {
                            project: project,
                            alertId: alertId,
                            repository: repository
                        },
                        body: stateUpdate
                    })];
            });
        });
    };
    /**
     * Get instances of an alert.
     *
     * @param project - Project ID or project name
     * @param alertId - ID of alert to retrieve
     * @param repository - Name or id of a repository that alert is part of
     * @param ref -
     */
    AlertRestClient.prototype.getAlertInstances = function (project, alertId, repository, ref) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    ref: ref
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Alert/repositories/{repository}/alerts/{alertId}/Instances",
                        routeValues: {
                            project: project,
                            alertId: alertId,
                            repository: repository
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update alert metadata associations.
     *
     * @param alertsMetadata - A list of metadata to associate with alerts.
     * @param project - Project ID or project name
     * @param repository - The name or ID of the repository.
     */
    AlertRestClient.prototype.updateAlertsMetadata = function (alertsMetadata, project, repository) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Alert/repositories/{repository}/alerts/Metadata",
                        routeValues: {
                            project: project,
                            repository: repository
                        },
                        body: alertsMetadata
                    })];
            });
        });
    };
    /**
     * Upload a Sarif containing security alerts
     *
     * @param content - Content to upload
     * @param project - Project ID or project name
     * @param repository - The name or ID of a repository
     */
    AlertRestClient.prototype.uploadSarif = function (content, project, repository) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/Alert/repositories/{repository}/sarifs",
                        routeValues: {
                            project: project,
                            repository: repository
                        },
                        customHeaders: {
                            "Content-Type": "application/octet-stream",
                        },
                        body: content
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param repository -
     * @param alertType -
     */
    AlertRestClient.prototype.getUxFilters = function (project, repository, alertType) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    alertType: alertType
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Alert/repositories/{repository}/filters",
                        routeValues: {
                            project: project,
                            repository: repository
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get the status of the Sarif processing job
     *
     * @param sarifId - Sarif ID returned when the Sarif was uploaded
     */
    AlertRestClient.prototype.getSarif = function (sarifId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "_apis/Alert/Sarifs/{sarifId}",
                        routeValues: {
                            sarifId: sarifId
                        }
                    })];
            });
        });
    };
    return AlertRestClient;
}(RestClientBase));
export { AlertRestClient };
