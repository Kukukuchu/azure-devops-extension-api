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
var ManagementRestClient = /** @class */ (function (_super) {
    __extends(ManagementRestClient, _super);
    function ManagementRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * Delete the billing info for an organization.
     *
     * @param organizationId -
     */
    ManagementRestClient.prototype.deleteBillingInfo = function (organizationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{organizationId}/_apis/Management/Billing/{action}",
                        routeValues: {
                            organizationId: organizationId,
                            action: "Default"
                        }
                    })];
            });
        });
    };
    /**
     * Delete the meter usage history from Primary SU for an organization.
     *
     * @param organizationId -
     */
    ManagementRestClient.prototype.deleteMeterUsageHistory = function (organizationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{organizationId}/_apis/Management/Billing/{action}",
                        routeValues: {
                            organizationId: organizationId,
                            action: "MeterUsageHistory"
                        }
                    })];
            });
        });
    };
    /**
     * Get the billing info for an organization.
     *
     * @param organizationId - Organization ID to get billing info for.
     */
    ManagementRestClient.prototype.getBillingInfo = function (organizationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{organizationId}/_apis/Management/Billing/{action}",
                        routeValues: {
                            organizationId: organizationId,
                            action: "Default"
                        }
                    })];
            });
        });
    };
    /**
     * Save the billing info for an organization.
     *
     * @param billingInfo -
     * @param organizationId -
     */
    ManagementRestClient.prototype.saveBillingInfo = function (billingInfo, organizationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{organizationId}/_apis/Management/Billing/{action}",
                        routeValues: {
                            organizationId: organizationId,
                            action: "Default"
                        },
                        body: billingInfo
                    })];
            });
        });
    };
    /**
     * During multi-org billing computation in primary scale unit(EUS21), this API is used to create billing snapshot for a specific org. Primary scale unit will call this API for each org in different scsle units to create billing snapshot. Data will be stored in the org specific partition DB -\> billing snapshot table. This is needed as customers will fetch billing data from their org specific partition DB.
     *
     * @param meterUsage -
     */
    ManagementRestClient.prototype.createBillingSnapshot = function (meterUsage) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "_apis/Management/MeterUsage/{action}",
                        routeValues: {
                            action: "Default"
                        },
                        body: meterUsage
                    })];
            });
        });
    };
    /**
     * Get all billable committers details, including those not matched with a VSID.
     *
     * @param billingDate - The date to query, or if not provided, today
     */
    ManagementRestClient.prototype.getBillableCommitterDetails = function (billingDate) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    billingDate: billingDate
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/Management/MeterUsage/{action}",
                        routeValues: {
                            action: "Details"
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     */
    ManagementRestClient.prototype.getLastMeterUsage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/Management/MeterUsage/{action}",
                        routeValues: {
                            action: "Last"
                        }
                    })];
            });
        });
    };
    /**
     * Get commiters used when calculating billing information.
     *
     * @param billingDate - The date to query, or if not provided, today
     */
    ManagementRestClient.prototype.getMeterUsage = function (billingDate) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    billingDate: billingDate
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/Management/MeterUsage/{action}",
                        routeValues: {
                            action: "Default"
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get the current status of Advanced Security for the organization
     *
     * @param includeAllProperties - When true, also determine if pushes are blocked if they contain secrets
     */
    ManagementRestClient.prototype.getOrgEnablementStatus = function (includeAllProperties) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeAllProperties: includeAllProperties
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/Management/enablement",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update the status of Advanced Security for the organization
     *
     * @param savedAdvSecEnablementStatus - The new status
     */
    ManagementRestClient.prototype.updateOrgEnablementStatus = function (savedAdvSecEnablementStatus) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "_apis/Management/enablement",
                        body: savedAdvSecEnablementStatus
                    })];
            });
        });
    };
    /**
     * Estimate the committers that would be added to the customer's usage if Advanced Security was enabled for this organization.
     *
     */
    ManagementRestClient.prototype.getEstimatedOrgBillablePushers = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/Management/meterUsageEstimate"
                    })];
            });
        });
    };
    /**
     * Get the current status of Advanced Security for a project
     *
     * @param project - Project ID or project name
     * @param includeAllProperties - When true, also determine if pushes are blocked if they contain secrets
     */
    ManagementRestClient.prototype.getProjectEnablementStatus = function (project, includeAllProperties) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeAllProperties: includeAllProperties
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Management/enablement",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Update the status of Advanced Security for the project
     *
     * @param savedAdvSecEnablementStatus - The new status
     * @param project - Project ID or project name
     */
    ManagementRestClient.prototype.updateProjectEnablementStatus = function (savedAdvSecEnablementStatus, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Management/enablement",
                        routeValues: {
                            project: project
                        },
                        body: savedAdvSecEnablementStatus
                    })];
            });
        });
    };
    /**
     * Estimate the number of committers that would be added to the customer's usage if Advanced Security was enabled for this project.
     *
     * @param project - Project ID or project name
     */
    ManagementRestClient.prototype.getEstimatedProjectBillablePushers = function (project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Management/meterUsageEstimate",
                        routeValues: {
                            project: project
                        }
                    })];
            });
        });
    };
    /**
     * Determine if Advanced Security is enabled for a repository
     *
     * @param project - Project ID or project name
     * @param repository - The name or ID of the repository
     * @param includeAllProperties - When true, will also determine if pushes are blocked when secrets are detected
     */
    ManagementRestClient.prototype.getRepoEnablementStatus = function (project, repository, includeAllProperties) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includeAllProperties: includeAllProperties
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Management/repositories/{repository}/enablement",
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
     * Update the enablement of Advanced Security for a repository
     *
     * @param savedAdvSecEnablementStatus - new status
     * @param project - Project ID or project name
     * @param repository - Name or ID of the repository
     */
    ManagementRestClient.prototype.updateRepoAdvSecEnablementStatus = function (savedAdvSecEnablementStatus, project, repository) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/Management/repositories/{repository}/enablement",
                        routeValues: {
                            project: project,
                            repository: repository
                        },
                        body: savedAdvSecEnablementStatus
                    })];
            });
        });
    };
    /**
     * Estimate the committers that would be added to the customer's usage if Advanced Security was enabled for this repository.
     *
     * @param project - Project ID or project name
     * @param repository - The name or ID of the repository
     */
    ManagementRestClient.prototype.getEstimatedRepoBillableCommitters = function (project, repository) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/Management/repositories/{repository}/meterUsageEstimate",
                        routeValues: {
                            project: project,
                            repository: repository
                        }
                    })];
            });
        });
    };
    return ManagementRestClient;
}(RestClientBase));
export { ManagementRestClient };
