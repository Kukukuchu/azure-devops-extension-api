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
var TestPlanRestClient = /** @class */ (function (_super) {
    __extends(TestPlanRestClient, _super);
    function TestPlanRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * Create a test configuration.
     *
     * @param testConfigurationCreateUpdateParameters - TestConfigurationCreateUpdateParameters
     * @param project - Project ID or project name
     */
    TestPlanRestClient.prototype.createTestConfiguration = function (testConfigurationCreateUpdateParameters, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/Configurations/{testConfigurationId}",
                        routeValues: {
                            project: project
                        },
                        body: testConfigurationCreateUpdateParameters
                    })];
            });
        });
    };
    /**
     * Delete a test configuration by its ID.
     *
     * @param project - Project ID or project name
     * @param testConfiguartionId - ID of the test configuration to delete.
     */
    TestPlanRestClient.prototype.deleteTestConfguration = function (project, testConfiguartionId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testConfiguartionId: testConfiguartionId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testplan/Configurations/{testConfigurationId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get a test configuration
     *
     * @param project - Project ID or project name
     * @param testConfigurationId - ID of the test configuration to get.
     */
    TestPlanRestClient.prototype.getTestConfigurationById = function (project, testConfigurationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Configurations/{testConfigurationId}",
                        routeValues: {
                            project: project,
                            testConfigurationId: testConfigurationId
                        }
                    })];
            });
        });
    };
    /**
     * Get a list of test configurations.
     *
     * @param project - Project ID or project name
     * @param continuationToken - If the list of configurations returned is not complete, a continuation token to query next batch of configurations is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test configurations.
     */
    TestPlanRestClient.prototype.getTestConfigurations = function (project, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Configurations/{testConfigurationId}",
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
     * Update a test configuration by its ID.
     *
     * @param testConfigurationCreateUpdateParameters - TestConfigurationCreateUpdateParameters
     * @param project - Project ID or project name
     * @param testConfiguartionId - ID of the test configuration to update.
     */
    TestPlanRestClient.prototype.updateTestConfiguration = function (testConfigurationCreateUpdateParameters, project, testConfiguartionId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testConfiguartionId: testConfiguartionId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/Configurations/{testConfigurationId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: testConfigurationCreateUpdateParameters
                    })];
            });
        });
    };
    /**
     * @param project - Project ID or project name
     * @param planId -
     * @param states -
     * @param outcome -
     * @param configurations -
     * @param testers -
     * @param assignedTo -
     * @param entity -
     */
    TestPlanRestClient.prototype.getTestEntityCountByPlanId = function (project, planId, states, outcome, configurations, testers, assignedTo, entity) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    states: states,
                    outcome: outcome,
                    configurations: configurations,
                    testers: testers,
                    assignedTo: assignedTo,
                    entity: entity
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Count/{planId}",
                        routeValues: {
                            project: project,
                            planId: planId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Create a test plan.
     *
     * @param testPlanCreateParams - A testPlanCreateParams object.TestPlanCreateParams
     * @param project - Project ID or project name
     */
    TestPlanRestClient.prototype.createTestPlan = function (testPlanCreateParams, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}",
                        routeValues: {
                            project: project
                        },
                        body: testPlanCreateParams
                    })];
            });
        });
    };
    /**
     * Delete a test plan.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to be deleted.
     */
    TestPlanRestClient.prototype.deleteTestPlan = function (project, planId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}",
                        routeValues: {
                            project: project,
                            planId: planId
                        }
                    })];
            });
        });
    };
    /**
     * Get a test plan by Id.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to get.
     */
    TestPlanRestClient.prototype.getTestPlanById = function (project, planId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}",
                        routeValues: {
                            project: project,
                            planId: planId
                        }
                    })];
            });
        });
    };
    /**
     * Get a list of test plans
     *
     * @param project - Project ID or project name
     * @param owner - Filter for test plan by owner ID or name
     * @param continuationToken - If the list of plans returned is not complete, a continuation token to query next batch of plans is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test plans.
     * @param includePlanDetails - Get all properties of the test plan
     * @param filterActivePlans - Get just the active plans
     */
    TestPlanRestClient.prototype.getTestPlans = function (project, owner, continuationToken, includePlanDetails, filterActivePlans) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    owner: owner,
                    continuationToken: continuationToken,
                    includePlanDetails: includePlanDetails,
                    filterActivePlans: filterActivePlans
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}",
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
     * Update a test plan.
     *
     * @param testPlanUpdateParams - A testPlanUpdateParams object.TestPlanUpdateParams
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to be updated.
     */
    TestPlanRestClient.prototype.updateTestPlan = function (testPlanUpdateParams, project, planId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}",
                        routeValues: {
                            project: project,
                            planId: planId
                        },
                        body: testPlanUpdateParams
                    })];
            });
        });
    };
    /**
     * Get a list of test suite entries in the test suite.
     *
     * @param project - Project ID or project name
     * @param suiteId - Id of the parent suite.
     * @param suiteEntryType -
     */
    TestPlanRestClient.prototype.getSuiteEntries = function (project, suiteId, suiteEntryType) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    suiteEntryType: suiteEntryType
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/SuiteEntry/{suiteId}",
                        routeValues: {
                            project: project,
                            suiteId: suiteId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Reorder test suite entries in the test suite.
     *
     * @param suiteEntries - List of SuiteEntry to reorder.
     * @param project - Project ID or project name
     * @param suiteId - Id of the parent test suite.
     */
    TestPlanRestClient.prototype.reorderSuiteEntries = function (suiteEntries, project, suiteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/SuiteEntry/{suiteId}",
                        routeValues: {
                            project: project,
                            suiteId: suiteId
                        },
                        body: suiteEntries
                    })];
            });
        });
    };
    /**
     * Create bulk requirement based test suites.
     *
     * @param testSuiteCreateParams - Parameters for suite creation
     * @param project - Project ID or project name
     * @param planId - ID of the test plan where requirement based suites need to be created.
     * @param parentSuiteId - ID of the parent suite under which requirement based suites will be created
     */
    TestPlanRestClient.prototype.createBulkTestSuites = function (testSuiteCreateParams, project, planId, parentSuiteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{parentSuiteId}/bulk",
                        routeValues: {
                            project: project,
                            planId: planId,
                            parentSuiteId: parentSuiteId
                        },
                        body: testSuiteCreateParams
                    })];
            });
        });
    };
    /**
     * Create test suite.
     *
     * @param testSuiteCreateParams - Parameters for suite creation
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suites.
     */
    TestPlanRestClient.prototype.createTestSuite = function (testSuiteCreateParams, project, planId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}",
                        routeValues: {
                            project: project,
                            planId: planId
                        },
                        body: testSuiteCreateParams
                    })];
            });
        });
    };
    /**
     * Delete test suite.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suite.
     * @param suiteId - ID of the test suite to delete.
     */
    TestPlanRestClient.prototype.deleteTestSuite = function (project, planId, suiteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId
                        }
                    })];
            });
        });
    };
    /**
     * Get test suite by suite id.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suites.
     * @param suiteId - ID of the suite to get.
     * @param expand - Include the children suites and testers details
     */
    TestPlanRestClient.prototype.getTestSuiteById = function (project, planId, suiteId, expand) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    expand: expand
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}",
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
     * Get test suites for plan.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan for which suites are requested.
     * @param expand - Include the children suites and testers details.
     * @param continuationToken - If the list of suites returned is not complete, a continuation token to query next batch of suites is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test suites.
     * @param asTreeView - If the suites returned should be in a tree structure.
     */
    TestPlanRestClient.prototype.getTestSuitesForPlan = function (project, planId, expand, continuationToken, asTreeView) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    expand: expand,
                    continuationToken: continuationToken,
                    asTreeView: asTreeView
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}",
                        routeValues: {
                            project: project,
                            planId: planId
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
     * Update test suite.
     *
     * @param testSuiteUpdateParams - Parameters for suite updation
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suites.
     * @param suiteId - ID of the parent suite.
     */
    TestPlanRestClient.prototype.updateTestSuite = function (testSuiteUpdateParams, project, planId, suiteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId
                        },
                        body: testSuiteUpdateParams
                    })];
            });
        });
    };
    /**
     * Find the list of all test suites in which a given test case is present. This is helpful if you need to find out which test suites are using a test case, when you need to make changes to a test case.
     *
     * @param testCaseId - ID of the test case for which suites need to be fetched.
     */
    TestPlanRestClient.prototype.getSuitesByTestCaseId = function (testCaseId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testCaseId: testCaseId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/testplan/Suites",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Add test cases to a suite with specified configurations
     *
     * @param suiteTestCaseCreateUpdateParameters - SuiteTestCaseCreateUpdateParameters object.
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to which test cases are to be added.
     * @param suiteId - ID of the test suite to which test cases are to be added.
     */
    TestPlanRestClient.prototype.addTestCasesToSuite = function (suiteTestCaseCreateUpdateParameters, project, planId, suiteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase/{testCaseId}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId
                        },
                        body: suiteTestCaseCreateUpdateParameters
                    })];
            });
        });
    };
    /**
     * Get a particular Test Case from a Suite.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan for which test cases are requested.
     * @param suiteId - ID of the test suite for which test cases are requested.
     * @param testCaseId - Test Case Id to be fetched.
     * @param witFields - Get the list of witFields.
     * @param returnIdentityRef - If set to true, returns all identity fields, like AssignedTo, ActivatedBy etc., as IdentityRef objects. If set to false, these fields are returned as unique names in string format. This is false by default.
     */
    TestPlanRestClient.prototype.getTestCase = function (project, planId, suiteId, testCaseId, witFields, returnIdentityRef) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    witFields: witFields,
                    returnIdentityRef: returnIdentityRef
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase/{testCaseId}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId,
                            testCaseId: testCaseId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * Get Test Case List return those test cases which have all the configuration Ids as mentioned in the optional parameter. If configuration Ids is null, it return all the test cases
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan for which test cases are requested.
     * @param suiteId - ID of the test suite for which test cases are requested.
     * @param testIds - Test Case Ids to be fetched.
     * @param configurationIds - Fetch Test Cases which contains all the configuration Ids specified.
     * @param witFields - Get the list of witFields.
     * @param continuationToken - If the list of test cases returned is not complete, a continuation token to query next batch of test cases is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test cases.
     * @param returnIdentityRef - If set to true, returns all identity fields, like AssignedTo, ActivatedBy etc., as IdentityRef objects. If set to false, these fields are returned as unique names in string format. This is false by default.
     * @param expand - If set to false, will get a smaller payload containing only basic details about the suite test case object
     * @param excludeFlags - Flag to exclude various values from payload. For example to remove point assignments pass exclude = 1. To remove extra information (links, test plan , test suite) pass exclude = 2. To remove both extra information and point assignments pass exclude = 3 (1 + 2).
     * @param isRecursive -
     */
    TestPlanRestClient.prototype.getTestCaseList = function (project, planId, suiteId, testIds, configurationIds, witFields, continuationToken, returnIdentityRef, expand, excludeFlags, isRecursive) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    testIds: testIds,
                    configurationIds: configurationIds,
                    witFields: witFields,
                    continuationToken: continuationToken,
                    returnIdentityRef: returnIdentityRef,
                    expand: expand,
                    excludeFlags: excludeFlags,
                    isRecursive: isRecursive
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase/{testCaseId}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId
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
     * Removes test cases from a suite based on the list of test case Ids provided.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan from which test cases are to be removed.
     * @param suiteId - ID of the test suite from which test cases are to be removed.
     * @param testCaseIds - Test Case Ids to be removed.
     */
    TestPlanRestClient.prototype.removeTestCasesFromSuite = function (project, planId, suiteId, testCaseIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testCaseIds: testCaseIds
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase/{testCaseId}",
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
     * Removes test cases from a suite based on the list of test case Ids provided. This API can be used to remove a larger number of test cases.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan from which test cases are to be removed.
     * @param suiteId - ID of the test suite from which test cases are to be removed.
     * @param testIds - Comma separated string of Test Case Ids to be removed.
     */
    TestPlanRestClient.prototype.removeTestCasesListFromSuite = function (project, planId, suiteId, testIds) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    testIds: testIds
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase/{testCaseId}",
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
     * Update the configurations for test cases
     *
     * @param suiteTestCaseCreateUpdateParameters - A SuiteTestCaseCreateUpdateParameters object.
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to which test cases are to be updated.
     * @param suiteId - ID of the test suite to which test cases are to be updated.
     */
    TestPlanRestClient.prototype.updateSuiteTestCases = function (suiteTestCaseCreateUpdateParameters, project, planId, suiteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.3",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestCase/{testCaseId}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId
                        },
                        body: suiteTestCaseCreateUpdateParameters
                    })];
            });
        });
    };
    /**
     * @param cloneRequestBody -
     * @param project - Project ID or project name
     */
    TestPlanRestClient.prototype.cloneTestCase = function (cloneRequestBody, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/TestCases/CloneTestCaseOperation/{cloneOperationId}",
                        routeValues: {
                            project: project
                        },
                        body: cloneRequestBody
                    })];
            });
        });
    };
    /**
     * Get clone information.
     *
     * @param project - Project ID or project name
     * @param cloneOperationId - Operation ID returned when we queue a clone operation
     */
    TestPlanRestClient.prototype.getTestCaseCloneInformation = function (project, cloneOperationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testplan/TestCases/CloneTestCaseOperation/{cloneOperationId}",
                        routeValues: {
                            project: project,
                            cloneOperationId: cloneOperationId
                        }
                    })];
            });
        });
    };
    /**
     * Exports a set of test cases from a suite to a file. Currently supported  formats: xlsx
     *
     * @param exportTestCaseRequestBody - A ExportTestCaseParams object.ExportTestCaseParams
     * @param project - Project ID or project name
     */
    TestPlanRestClient.prototype.exportTestCases = function (exportTestCaseRequestBody, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        httpResponseType: "application/octet-stream",
                        routeTemplate: "{project}/_apis/testplan/TestCases/TestCaseFile",
                        routeValues: {
                            project: project
                        },
                        body: exportTestCaseRequestBody
                    })];
            });
        });
    };
    /**
     * Delete a test case.
     *
     * @param project - Project ID or project name
     * @param testCaseId - Id of test case to be deleted.
     */
    TestPlanRestClient.prototype.deleteTestCase = function (project, testCaseId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testplan/TestCases/{testCaseId}",
                        routeValues: {
                            project: project,
                            testCaseId: testCaseId
                        }
                    })];
            });
        });
    };
    /**
     * Restore deleted test plan
     *
     * @param restoreModel - The model containing the restore information
     * @param project - Project ID or project name
     * @param planId - The ID of the test plan to restore
     */
    TestPlanRestClient.prototype.restoreDeletedTestPlan = function (restoreModel, project, planId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/recycleBin/TestPlan/{planId}",
                        routeValues: {
                            project: project,
                            planId: planId
                        },
                        body: restoreModel
                    })];
            });
        });
    };
    /**
     * Clone test plan
     *
     * @param cloneRequestBody - Plan Clone Request Body detail TestPlanCloneRequest
     * @param project - Project ID or project name
     * @param deepClone - Clones all the associated test cases as well
     */
    TestPlanRestClient.prototype.cloneTestPlan = function (cloneRequestBody, project, deepClone) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    deepClone: deepClone
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/Plans/CloneOperation/{cloneOperationId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: cloneRequestBody
                    })];
            });
        });
    };
    /**
     * Get clone information.
     *
     * @param project - Project ID or project name
     * @param cloneOperationId - Operation ID returned when we queue a clone operation
     */
    TestPlanRestClient.prototype.getCloneInformation = function (project, cloneOperationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testplan/Plans/CloneOperation/{cloneOperationId}",
                        routeValues: {
                            project: project,
                            cloneOperationId: cloneOperationId
                        }
                    })];
            });
        });
    };
    /**
     * Get a particular Test Point from a suite.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan for which test points are requested.
     * @param suiteId - ID of the test suite for which test points are requested.
     * @param pointId - ID of test point to be fetched.
     * @param returnIdentityRef - If set to true, returns the AssignedTo field in TestCaseReference as IdentityRef object.
     * @param includePointDetails - If set to false, will get a smaller payload containing only basic details about the test point object
     */
    TestPlanRestClient.prototype.getPoints = function (project, planId, suiteId, pointId, returnIdentityRef, includePointDetails) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    pointId: pointId,
                    returnIdentityRef: returnIdentityRef,
                    includePointDetails: includePointDetails
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestPoint/{pointIds}",
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
     * Get all the points inside a suite based on some filters
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan for which test points are requested.
     * @param suiteId - ID of the test suite for which test points are requested
     * @param testPointIds - ID of test points to fetch.
     * @param testCaseId - Get Test Points for specific test case Ids.
     * @param continuationToken - If the list of test point returned is not complete, a continuation token to query next batch of test points is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test points.
     * @param returnIdentityRef - If set to true, returns the AssignedTo field in TestCaseReference as IdentityRef object.
     * @param includePointDetails - If set to false, will get a smaller payload containing only basic details about the test point object
     * @param isRecursive - If set to true, will also fetch test points belonging to child suites recursively.
     */
    TestPlanRestClient.prototype.getPointsList = function (project, planId, suiteId, testPointIds, testCaseId, continuationToken, returnIdentityRef, includePointDetails, isRecursive) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    testPointIds: testPointIds,
                    testCaseId: testCaseId,
                    continuationToken: continuationToken,
                    returnIdentityRef: returnIdentityRef,
                    includePointDetails: includePointDetails,
                    isRecursive: isRecursive
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestPoint/{pointIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId
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
     * Update Test Points. This is used to Reset test point to active, update the outcome of a test point or update the tester of a test point
     *
     * @param testPointUpdateParams - A TestPointUpdateParams Object.
     * @param project - Project ID or project name
     * @param planId - ID of the test plan for which test points are requested.
     * @param suiteId - ID of the test suite for which test points are requested.
     * @param includePointDetails - If set to false, will get a smaller payload containing only basic details about the test point object
     * @param returnIdentityRef - If set to true, returns the AssignedTo field in TestCaseReference as IdentityRef object.
     */
    TestPlanRestClient.prototype.updateTestPoints = function (testPointUpdateParams, project, planId, suiteId, includePointDetails, returnIdentityRef) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    includePointDetails: includePointDetails,
                    returnIdentityRef: returnIdentityRef
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/Plans/{planId}/Suites/{suiteId}/TestPoint/{pointIds}",
                        routeValues: {
                            project: project,
                            planId: planId,
                            suiteId: suiteId
                        },
                        queryParams: queryValues,
                        body: testPointUpdateParams
                    })];
            });
        });
    };
    /**
     * Restore deleted test suite
     *
     * @param payload - The model containing the restore information
     * @param project - Project ID or project name
     * @param suiteId - The ID of the test suite to restore
     */
    TestPlanRestClient.prototype.restoreDeletedTestSuite = function (payload, project, suiteId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/recycleBin/TestSuite/{suiteId}",
                        routeValues: {
                            project: project,
                            suiteId: suiteId
                        },
                        body: payload
                    })];
            });
        });
    };
    /**
     * Clone test suite
     *
     * @param cloneRequestBody - Suite Clone Request Body detail TestSuiteCloneRequest
     * @param project - Project ID or project name
     * @param deepClone - Clones all the associated test cases as well
     */
    TestPlanRestClient.prototype.cloneTestSuite = function (cloneRequestBody, project, deepClone) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    deepClone: deepClone
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/Suites/CloneOperation/{cloneOperationId}",
                        routeValues: {
                            project: project
                        },
                        queryParams: queryValues,
                        body: cloneRequestBody
                    })];
            });
        });
    };
    /**
     * Get clone information.
     *
     * @param project - Project ID or project name
     * @param cloneOperationId - Operation ID returned when we queue a clone operation
     */
    TestPlanRestClient.prototype.getSuiteCloneInformation = function (project, cloneOperationId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.2",
                        routeTemplate: "{project}/_apis/testplan/Suites/CloneOperation/{cloneOperationId}",
                        routeValues: {
                            project: project,
                            cloneOperationId: cloneOperationId
                        }
                    })];
            });
        });
    };
    /**
     * Create a test variable.
     *
     * @param testVariableCreateUpdateParameters - TestVariableCreateUpdateParameters
     * @param project - Project ID or project name
     */
    TestPlanRestClient.prototype.createTestVariable = function (testVariableCreateUpdateParameters, project) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "POST",
                        routeTemplate: "{project}/_apis/testplan/Variables/{testVariableId}",
                        routeValues: {
                            project: project
                        },
                        body: testVariableCreateUpdateParameters
                    })];
            });
        });
    };
    /**
     * Delete a test variable by its ID.
     *
     * @param project - Project ID or project name
     * @param testVariableId - ID of the test variable to delete.
     */
    TestPlanRestClient.prototype.deleteTestVariable = function (project, testVariableId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "{project}/_apis/testplan/Variables/{testVariableId}",
                        routeValues: {
                            project: project,
                            testVariableId: testVariableId
                        }
                    })];
            });
        });
    };
    /**
     * Get a test variable by its ID.
     *
     * @param project - Project ID or project name
     * @param testVariableId - ID of the test variable to get.
     */
    TestPlanRestClient.prototype.getTestVariableById = function (project, testVariableId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Variables/{testVariableId}",
                        routeValues: {
                            project: project,
                            testVariableId: testVariableId
                        }
                    })];
            });
        });
    };
    /**
     * Get a list of test variables.
     *
     * @param project - Project ID or project name
     * @param continuationToken - If the list of variables returned is not complete, a continuation token to query next batch of variables is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test variables.
     */
    TestPlanRestClient.prototype.getTestVariables = function (project, continuationToken) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            var _this = this;
            return __generator(this, function (_a) {
                queryValues = {
                    continuationToken: continuationToken
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "{project}/_apis/testplan/Variables/{testVariableId}",
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
     * Update a test variable by its ID.
     *
     * @param testVariableCreateUpdateParameters - TestVariableCreateUpdateParameters
     * @param project - Project ID or project name
     * @param testVariableId - ID of the test variable to update.
     */
    TestPlanRestClient.prototype.updateTestVariable = function (testVariableCreateUpdateParameters, project, testVariableId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "{project}/_apis/testplan/Variables/{testVariableId}",
                        routeValues: {
                            project: project,
                            testVariableId: testVariableId
                        },
                        body: testVariableCreateUpdateParameters
                    })];
            });
        });
    };
    return TestPlanRestClient;
}(RestClientBase));
export { TestPlanRestClient };
