import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";
import * as TestPlan from "../TestPlan/TestPlan";
import * as WebApi from "../WebApi/WebApi";
export declare class TestPlanRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions);
    /**
     * Create a test configuration.
     *
     * @param testConfigurationCreateUpdateParameters - TestConfigurationCreateUpdateParameters
     * @param project - Project ID or project name
     */
    createTestConfiguration(testConfigurationCreateUpdateParameters: TestPlan.TestConfigurationCreateUpdateParameters, project: string): Promise<TestPlan.TestConfiguration>;
    /**
     * Delete a test configuration by its ID.
     *
     * @param project - Project ID or project name
     * @param testConfiguartionId - ID of the test configuration to delete.
     */
    deleteTestConfguration(project: string, testConfiguartionId: number): Promise<void>;
    /**
     * Get a test configuration
     *
     * @param project - Project ID or project name
     * @param testConfigurationId - ID of the test configuration to get.
     */
    getTestConfigurationById(project: string, testConfigurationId: number): Promise<TestPlan.TestConfiguration>;
    /**
     * Get a list of test configurations.
     *
     * @param project - Project ID or project name
     * @param continuationToken - If the list of configurations returned is not complete, a continuation token to query next batch of configurations is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test configurations.
     */
    getTestConfigurations(project: string, continuationToken?: string): Promise<WebApi.PagedList<TestPlan.TestConfiguration>>;
    /**
     * Update a test configuration by its ID.
     *
     * @param testConfigurationCreateUpdateParameters - TestConfigurationCreateUpdateParameters
     * @param project - Project ID or project name
     * @param testConfiguartionId - ID of the test configuration to update.
     */
    updateTestConfiguration(testConfigurationCreateUpdateParameters: TestPlan.TestConfigurationCreateUpdateParameters, project: string, testConfiguartionId: number): Promise<TestPlan.TestConfiguration>;
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
    getTestEntityCountByPlanId(project: string, planId: number, states?: string, outcome?: TestPlan.UserFriendlyTestOutcome, configurations?: string, testers?: string, assignedTo?: string, entity?: TestPlan.TestEntityTypes): Promise<TestPlan.TestEntityCount[]>;
    /**
     * Create a test plan.
     *
     * @param testPlanCreateParams - A testPlanCreateParams object.TestPlanCreateParams
     * @param project - Project ID or project name
     */
    createTestPlan(testPlanCreateParams: TestPlan.TestPlanCreateParams, project: string): Promise<TestPlan.TestPlan>;
    /**
     * Delete a test plan.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to be deleted.
     */
    deleteTestPlan(project: string, planId: number): Promise<void>;
    /**
     * Get a test plan by Id.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to get.
     */
    getTestPlanById(project: string, planId: number): Promise<TestPlan.TestPlan>;
    /**
     * Get a list of test plans
     *
     * @param project - Project ID or project name
     * @param owner - Filter for test plan by owner ID or name
     * @param continuationToken - If the list of plans returned is not complete, a continuation token to query next batch of plans is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test plans.
     * @param includePlanDetails - Get all properties of the test plan
     * @param filterActivePlans - Get just the active plans
     */
    getTestPlans(project: string, owner?: string, continuationToken?: string, includePlanDetails?: boolean, filterActivePlans?: boolean): Promise<WebApi.PagedList<TestPlan.TestPlan>>;
    /**
     * Update a test plan.
     *
     * @param testPlanUpdateParams - A testPlanUpdateParams object.TestPlanUpdateParams
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to be updated.
     */
    updateTestPlan(testPlanUpdateParams: TestPlan.TestPlanUpdateParams, project: string, planId: number): Promise<TestPlan.TestPlan>;
    /**
     * Get a list of test suite entries in the test suite.
     *
     * @param project - Project ID or project name
     * @param suiteId - Id of the parent suite.
     * @param suiteEntryType -
     */
    getSuiteEntries(project: string, suiteId: number, suiteEntryType?: TestPlan.SuiteEntryTypes): Promise<TestPlan.SuiteEntry[]>;
    /**
     * Reorder test suite entries in the test suite.
     *
     * @param suiteEntries - List of SuiteEntry to reorder.
     * @param project - Project ID or project name
     * @param suiteId - Id of the parent test suite.
     */
    reorderSuiteEntries(suiteEntries: TestPlan.SuiteEntryUpdateParams[], project: string, suiteId: number): Promise<TestPlan.SuiteEntry[]>;
    /**
     * Create bulk requirement based test suites.
     *
     * @param testSuiteCreateParams - Parameters for suite creation
     * @param project - Project ID or project name
     * @param planId - ID of the test plan where requirement based suites need to be created.
     * @param parentSuiteId - ID of the parent suite under which requirement based suites will be created
     */
    createBulkTestSuites(testSuiteCreateParams: TestPlan.TestSuiteCreateParams[], project: string, planId: number, parentSuiteId: number): Promise<TestPlan.TestSuite[]>;
    /**
     * Create test suite.
     *
     * @param testSuiteCreateParams - Parameters for suite creation
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suites.
     */
    createTestSuite(testSuiteCreateParams: TestPlan.TestSuiteCreateParams, project: string, planId: number): Promise<TestPlan.TestSuite>;
    /**
     * Delete test suite.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suite.
     * @param suiteId - ID of the test suite to delete.
     */
    deleteTestSuite(project: string, planId: number, suiteId: number): Promise<void>;
    /**
     * Get test suite by suite id.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suites.
     * @param suiteId - ID of the suite to get.
     * @param expand - Include the children suites and testers details
     */
    getTestSuiteById(project: string, planId: number, suiteId: number, expand?: TestPlan.SuiteExpand): Promise<TestPlan.TestSuite>;
    /**
     * Get test suites for plan.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan for which suites are requested.
     * @param expand - Include the children suites and testers details.
     * @param continuationToken - If the list of suites returned is not complete, a continuation token to query next batch of suites is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test suites.
     * @param asTreeView - If the suites returned should be in a tree structure.
     */
    getTestSuitesForPlan(project: string, planId: number, expand?: TestPlan.SuiteExpand, continuationToken?: string, asTreeView?: boolean): Promise<WebApi.PagedList<TestPlan.TestSuite>>;
    /**
     * Update test suite.
     *
     * @param testSuiteUpdateParams - Parameters for suite updation
     * @param project - Project ID or project name
     * @param planId - ID of the test plan that contains the suites.
     * @param suiteId - ID of the parent suite.
     */
    updateTestSuite(testSuiteUpdateParams: TestPlan.TestSuiteUpdateParams, project: string, planId: number, suiteId: number): Promise<TestPlan.TestSuite>;
    /**
     * Find the list of all test suites in which a given test case is present. This is helpful if you need to find out which test suites are using a test case, when you need to make changes to a test case.
     *
     * @param testCaseId - ID of the test case for which suites need to be fetched.
     */
    getSuitesByTestCaseId(testCaseId: number): Promise<TestPlan.TestSuite[]>;
    /**
     * Add test cases to a suite with specified configurations
     *
     * @param suiteTestCaseCreateUpdateParameters - SuiteTestCaseCreateUpdateParameters object.
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to which test cases are to be added.
     * @param suiteId - ID of the test suite to which test cases are to be added.
     */
    addTestCasesToSuite(suiteTestCaseCreateUpdateParameters: TestPlan.SuiteTestCaseCreateUpdateParameters[], project: string, planId: number, suiteId: number): Promise<TestPlan.TestCase[]>;
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
    getTestCase(project: string, planId: number, suiteId: number, testCaseId: string, witFields?: string, returnIdentityRef?: boolean): Promise<TestPlan.TestCase[]>;
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
    getTestCaseList(project: string, planId: number, suiteId: number, testIds?: string, configurationIds?: string, witFields?: string, continuationToken?: string, returnIdentityRef?: boolean, expand?: boolean, excludeFlags?: TestPlan.ExcludeFlags, isRecursive?: boolean): Promise<WebApi.PagedList<TestPlan.TestCase>>;
    /**
     * Removes test cases from a suite based on the list of test case Ids provided.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan from which test cases are to be removed.
     * @param suiteId - ID of the test suite from which test cases are to be removed.
     * @param testCaseIds - Test Case Ids to be removed.
     */
    removeTestCasesFromSuite(project: string, planId: number, suiteId: number, testCaseIds: string): Promise<void>;
    /**
     * Removes test cases from a suite based on the list of test case Ids provided. This API can be used to remove a larger number of test cases.
     *
     * @param project - Project ID or project name
     * @param planId - ID of the test plan from which test cases are to be removed.
     * @param suiteId - ID of the test suite from which test cases are to be removed.
     * @param testIds - Comma separated string of Test Case Ids to be removed.
     */
    removeTestCasesListFromSuite(project: string, planId: number, suiteId: number, testIds: string): Promise<void>;
    /**
     * Update the configurations for test cases
     *
     * @param suiteTestCaseCreateUpdateParameters - A SuiteTestCaseCreateUpdateParameters object.
     * @param project - Project ID or project name
     * @param planId - ID of the test plan to which test cases are to be updated.
     * @param suiteId - ID of the test suite to which test cases are to be updated.
     */
    updateSuiteTestCases(suiteTestCaseCreateUpdateParameters: TestPlan.SuiteTestCaseCreateUpdateParameters[], project: string, planId: number, suiteId: number): Promise<TestPlan.TestCase[]>;
    /**
     * @param cloneRequestBody -
     * @param project - Project ID or project name
     */
    cloneTestCase(cloneRequestBody: TestPlan.CloneTestCaseParams, project: string): Promise<TestPlan.CloneTestCaseOperationInformation>;
    /**
     * Get clone information.
     *
     * @param project - Project ID or project name
     * @param cloneOperationId - Operation ID returned when we queue a clone operation
     */
    getTestCaseCloneInformation(project: string, cloneOperationId: number): Promise<TestPlan.CloneTestCaseOperationInformation>;
    /**
     * Exports a set of test cases from a suite to a file. Currently supported  formats: xlsx
     *
     * @param exportTestCaseRequestBody - A ExportTestCaseParams object.ExportTestCaseParams
     * @param project - Project ID or project name
     */
    exportTestCases(exportTestCaseRequestBody: TestPlan.ExportTestCaseParams, project: string): Promise<ArrayBuffer>;
    /**
     * Delete a test case.
     *
     * @param project - Project ID or project name
     * @param testCaseId - Id of test case to be deleted.
     */
    deleteTestCase(project: string, testCaseId: number): Promise<void>;
    /**
     * Restore deleted test plan
     *
     * @param restoreModel - The model containing the restore information
     * @param project - Project ID or project name
     * @param planId - The ID of the test plan to restore
     */
    restoreDeletedTestPlan(restoreModel: TestPlan.TestPlanAndSuiteRestoreModel, project: string, planId: number): Promise<void>;
    /**
     * Clone test plan
     *
     * @param cloneRequestBody - Plan Clone Request Body detail TestPlanCloneRequest
     * @param project - Project ID or project name
     * @param deepClone - Clones all the associated test cases as well
     */
    cloneTestPlan(cloneRequestBody: TestPlan.CloneTestPlanParams, project: string, deepClone?: boolean): Promise<TestPlan.CloneTestPlanOperationInformation>;
    /**
     * Get clone information.
     *
     * @param project - Project ID or project name
     * @param cloneOperationId - Operation ID returned when we queue a clone operation
     */
    getCloneInformation(project: string, cloneOperationId: number): Promise<TestPlan.CloneTestPlanOperationInformation>;
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
    getPoints(project: string, planId: number, suiteId: number, pointId: string, returnIdentityRef?: boolean, includePointDetails?: boolean): Promise<TestPlan.TestPoint[]>;
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
    getPointsList(project: string, planId: number, suiteId: number, testPointIds?: string, testCaseId?: string, continuationToken?: string, returnIdentityRef?: boolean, includePointDetails?: boolean, isRecursive?: boolean): Promise<WebApi.PagedList<TestPlan.TestPoint>>;
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
    updateTestPoints(testPointUpdateParams: TestPlan.TestPointUpdateParams[], project: string, planId: number, suiteId: number, includePointDetails?: boolean, returnIdentityRef?: boolean): Promise<TestPlan.TestPoint[]>;
    /**
     * Restore deleted test suite
     *
     * @param payload - The model containing the restore information
     * @param project - Project ID or project name
     * @param suiteId - The ID of the test suite to restore
     */
    restoreDeletedTestSuite(payload: TestPlan.TestPlanAndSuiteRestoreModel, project: string, suiteId: number): Promise<void>;
    /**
     * Clone test suite
     *
     * @param cloneRequestBody - Suite Clone Request Body detail TestSuiteCloneRequest
     * @param project - Project ID or project name
     * @param deepClone - Clones all the associated test cases as well
     */
    cloneTestSuite(cloneRequestBody: TestPlan.CloneTestSuiteParams, project: string, deepClone?: boolean): Promise<TestPlan.CloneTestSuiteOperationInformation>;
    /**
     * Get clone information.
     *
     * @param project - Project ID or project name
     * @param cloneOperationId - Operation ID returned when we queue a clone operation
     */
    getSuiteCloneInformation(project: string, cloneOperationId: number): Promise<TestPlan.CloneTestSuiteOperationInformation>;
    /**
     * Create a test variable.
     *
     * @param testVariableCreateUpdateParameters - TestVariableCreateUpdateParameters
     * @param project - Project ID or project name
     */
    createTestVariable(testVariableCreateUpdateParameters: TestPlan.TestVariableCreateUpdateParameters, project: string): Promise<TestPlan.TestVariable>;
    /**
     * Delete a test variable by its ID.
     *
     * @param project - Project ID or project name
     * @param testVariableId - ID of the test variable to delete.
     */
    deleteTestVariable(project: string, testVariableId: number): Promise<void>;
    /**
     * Get a test variable by its ID.
     *
     * @param project - Project ID or project name
     * @param testVariableId - ID of the test variable to get.
     */
    getTestVariableById(project: string, testVariableId: number): Promise<TestPlan.TestVariable>;
    /**
     * Get a list of test variables.
     *
     * @param project - Project ID or project name
     * @param continuationToken - If the list of variables returned is not complete, a continuation token to query next batch of variables is included in the response header as "x-ms-continuationtoken". Omit this parameter to get the first batch of test variables.
     */
    getTestVariables(project: string, continuationToken?: string): Promise<WebApi.PagedList<TestPlan.TestVariable>>;
    /**
     * Update a test variable by its ID.
     *
     * @param testVariableCreateUpdateParameters - TestVariableCreateUpdateParameters
     * @param project - Project ID or project name
     * @param testVariableId - ID of the test variable to update.
     */
    updateTestVariable(testVariableCreateUpdateParameters: TestPlan.TestVariableCreateUpdateParameters, project: string, testVariableId: number): Promise<TestPlan.TestVariable>;
}
