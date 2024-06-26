import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";
import * as Test from "../Test/Test";
import * as WebApi from "../WebApi/WebApi";
export declare class TestResultsRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions);
    static readonly RESOURCE_AREA_ID: string;
    /**
     * @param attachmentRequestModel -
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param iterationId -
     * @param actionPath -
     */
    createTestIterationResultAttachment(attachmentRequestModel: Test.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, iterationId: number, actionPath?: string): Promise<Test.TestAttachmentReference>;
    /**
     * @param attachmentRequestModel -
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     */
    createTestResultAttachment(attachmentRequestModel: Test.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number): Promise<Test.TestAttachmentReference>;
    /**
     * @param attachmentRequestModel -
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param testSubResultId -
     */
    createTestSubResultAttachment(attachmentRequestModel: Test.TestAttachmentRequestModel, project: string, runId: number, testCaseResultId: number, testSubResultId: number): Promise<Test.TestAttachmentReference>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     */
    deleteTestResultAttachment(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<void>;
    /**
     * Returns a test iteration attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     * @param iterationId -
     */
    getTestIterationAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number, iterationId: number): Promise<ArrayBuffer>;
    /**
     * Returns a test iteration attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     * @param iterationId -
     */
    getTestIterationAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number, iterationId: number): Promise<ArrayBuffer>;
    /**
     * Returns a test result attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     */
    getTestResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<ArrayBuffer>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     */
    getTestResultAttachments(project: string, runId: number, testCaseResultId: number): Promise<Test.TestAttachment[]>;
    /**
     * Returns a test result attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     */
    getTestResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number): Promise<ArrayBuffer>;
    /**
     * Returns a test sub result attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     * @param testSubResultId -
     */
    getTestSubResultAttachmentContent(project: string, runId: number, testCaseResultId: number, attachmentId: number, testSubResultId: number): Promise<ArrayBuffer>;
    /**
     * Returns attachment references for test sub result.
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param testSubResultId -
     */
    getTestSubResultAttachments(project: string, runId: number, testCaseResultId: number, testSubResultId: number): Promise<Test.TestAttachment[]>;
    /**
     * Returns a test sub result attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     * @param attachmentId -
     * @param testSubResultId -
     */
    getTestSubResultAttachmentZip(project: string, runId: number, testCaseResultId: number, attachmentId: number, testSubResultId: number): Promise<ArrayBuffer>;
    /**
     * @param attachmentRequestModel -
     * @param project - Project ID or project name
     * @param runId -
     */
    createTestRunAttachment(attachmentRequestModel: Test.TestAttachmentRequestModel, project: string, runId: number): Promise<Test.TestAttachmentReference>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param attachmentId -
     */
    deleteTestRunAttachment(project: string, runId: number, attachmentId: number): Promise<void>;
    /**
     * Returns a test run attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param attachmentId -
     */
    getTestRunAttachmentContent(project: string, runId: number, attachmentId: number): Promise<ArrayBuffer>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     */
    getTestRunAttachments(project: string, runId: number): Promise<Test.TestAttachment[]>;
    /**
     * Returns a test run attachment
     *
     * @param project - Project ID or project name
     * @param runId -
     * @param attachmentId -
     */
    getTestRunAttachmentZip(project: string, runId: number, attachmentId: number): Promise<ArrayBuffer>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     */
    getBugsLinkedToTestResult(project: string, runId: number, testCaseResultId: number): Promise<Test.WorkItemReference[]>;
    /**
     * @param project - Project ID or project name
     * @param buildId -
     */
    fetchSourceCodeCoverageReport(project: string, buildId: number): Promise<Test.SourceViewBuildCoverage[]>;
    /**
     * @param project - Project ID or project name
     * @param buildId -
     * @param flags -
     */
    getBuildCodeCoverage(project: string, buildId: number, flags: number): Promise<Test.BuildCoverage[]>;
    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10&deltaBuildId=9 Request: build id and delta build id (optional)
     *
     * @param project - Project ID or project name
     * @param buildId -
     * @param deltaBuildId -
     */
    getCodeCoverageSummary(project: string, buildId: number, deltaBuildId?: number): Promise<Test.CodeCoverageSummary>;
    /**
     * http://(tfsserver):8080/tfs/DefaultCollection/_apis/test/CodeCoverage?buildId=10 Request: Json of code coverage summary
     *
     * @param project - Project ID or project name
     * @param buildId -
     * @param coverageData -
     */
    updateCodeCoverageSummary(project: string, buildId: number, coverageData?: Test.CodeCoverageData): Promise<void>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param flags -
     */
    getTestRunCodeCoverage(project: string, runId: number, flags: number): Promise<Test.TestRunCoverage[]>;
    /**
     * @param newFields -
     * @param project - Project ID or project name
     */
    addCustomFields(newFields: Test.CustomTestFieldDefinition[], project: string): Promise<Test.CustomTestFieldDefinition[]>;
    /**
     * @param project - Project ID or project name
     * @param scopeFilter -
     */
    queryCustomFields(project: string, scopeFilter: Test.CustomTestFieldScope): Promise<Test.CustomTestFieldDefinition[]>;
    /**
     * Get file coverage for the specified file
     *
     * @param fileCoverageRequest - File details with pull request iteration context
     * @param project - Project ID or project name
     */
    getFileLevelCodeCoverage(fileCoverageRequest: Test.FileCoverageRequest, project: string): Promise<string>;
    /**
     * @param project - Project ID or project name
     * @param buildDefinitionId -
     * @param minBuildCreatedDate -
     */
    getFlakyTestResultsByBuildDefinitionId(project: string, buildDefinitionId: number, minBuildCreatedDate: Date): Promise<Test.TestCaseResult[]>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     */
    getFlakyTestResultsByTestRun(project: string, runId: number): Promise<Test.TestCaseResult[]>;
    /**
     * @param filter -
     * @param project - Project ID or project name
     */
    queryTestResultHistory(filter: Test.ResultsFilter, project: string): Promise<Test.TestResultHistory>;
    /**
     * Get test run message logs
     *
     * @param project - Project ID or project name
     * @param runId - ID of the run to get.
     */
    getTestRunMessageLogs(project: string, runId: number): Promise<Test.TestMessageLogDetails[]>;
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
    getTestPipelineMetrics(project: string, pipelineId: number, stageName?: string, phaseName?: string, jobName?: string, metricNames?: Test.Metrics[], groupByNode?: boolean): Promise<Test.PipelineTestMetrics>;
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
    getTestResultDetailsForBuild(project: string, buildId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string, shouldIncludeResults?: boolean, queryRunSummaryForInProgress?: boolean): Promise<Test.TestResultsDetails>;
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
    getTestResultDetailsForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, groupBy?: string, filter?: string, orderby?: string, shouldIncludeResults?: boolean, queryRunSummaryForInProgress?: boolean): Promise<Test.TestResultsDetails>;
    /**
     * @param document -
     * @param project - Project ID or project name
     * @param runId -
     */
    publishTestResultDocument(document: Test.TestResultDocument, project: string, runId: number): Promise<Test.TestResultDocument>;
    /**
     * @param project - Project ID or project name
     * @param buildId -
     * @param publishContext -
     * @param fields -
     * @param continuationToken -
     */
    getResultGroupsByBuild(project: string, buildId: number, publishContext: string, fields?: string[], continuationToken?: string): Promise<WebApi.PagedList<Test.FieldDetailsForTestResults>>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param publishContext -
     * @param releaseEnvId -
     * @param fields -
     * @param continuationToken -
     */
    getResultGroupsByRelease(project: string, releaseId: number, publishContext: string, releaseEnvId?: number, fields?: string[], continuationToken?: string): Promise<WebApi.PagedList<Test.FieldDetailsForTestResults>>;
    /**
     * Get list of test Result meta data details for corresponding testcasereferenceId
     *
     * @param testCaseReferenceIds - TestCaseReference Ids of the test Result to be queried, comma separated list of valid ids (limit no. of ids 200).
     * @param project - Project ID or project name
     * @param detailsToInclude - Details to include with test results metadata. Default is None. Other values are FlakyIdentifiers.
     */
    queryTestResultsMetaData(testCaseReferenceIds: string[], project: string, detailsToInclude?: Test.ResultMetaDataDetails): Promise<Test.TestResultMetaData[]>;
    /**
     * Update properties of test result meta data
     *
     * @param testResultMetaDataUpdateInput - TestResultMetaData update input TestResultMetaDataUpdateInput
     * @param project - Project ID or project name
     * @param testCaseReferenceId - TestCaseReference Id of Test Result to be updated.
     */
    updateTestResultsMetaData(testResultMetaDataUpdateInput: Test.TestResultMetaDataUpdateInput, project: string, testCaseReferenceId: number): Promise<Test.TestResultMetaData>;
    /**
     * @param query -
     * @param project - Project ID or project name
     */
    getTestResultsByQuery(query: Test.TestResultsQuery, project: string): Promise<Test.TestResultsQuery>;
    /**
     * @param queryModel -
     * @param project - Project ID or project name
     * @param includeResultDetails -
     * @param includeIterationDetails -
     * @param skip -
     * @param top -
     */
    getTestResultsByQueryWiql(queryModel: Test.QueryModel, project: string, includeResultDetails?: boolean, includeIterationDetails?: boolean, skip?: number, top?: number): Promise<Test.TestCaseResult[]>;
    /**
     * @param results -
     * @param project - Project ID or project name
     * @param runId -
     */
    addTestResultsToTestRun(results: Test.TestCaseResult[], project: string, runId: number): Promise<Test.TestCaseResult[]>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param testResultId -
     * @param detailsToInclude -
     */
    getTestResultById(project: string, runId: number, testResultId: number, detailsToInclude?: Test.ResultDetails): Promise<Test.TestCaseResult>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param detailsToInclude -
     * @param skip -
     * @param top -
     * @param outcomes -
     * @param newTestsOnly -
     */
    getTestResults(project: string, runId: number, detailsToInclude?: Test.ResultDetails, skip?: number, top?: number, outcomes?: Test.TestOutcome[], newTestsOnly?: boolean): Promise<Test.TestCaseResult[]>;
    /**
     * @param results -
     * @param project - Project ID or project name
     * @param runId -
     */
    updateTestResults(results: Test.TestCaseResult[], project: string, runId: number): Promise<Test.TestCaseResult[]>;
    /**
     * @param project - Project ID or project name
     * @param buildId -
     * @param publishContext -
     * @param outcomes -
     * @param top -
     * @param continuationToken -
     */
    getTestResultsByBuild(project: string, buildId: number, publishContext?: string, outcomes?: Test.TestOutcome[], top?: number, continuationToken?: string): Promise<WebApi.PagedList<Test.ShallowTestCaseResult>>;
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
    getTestResultsByPipeline(project: string, pipelineId: number, stageName?: string, phaseName?: string, jobName?: string, outcomes?: Test.TestOutcome[], top?: number, continuationToken?: String): Promise<WebApi.PagedList<Test.ShallowTestCaseResult>>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param releaseEnvid -
     * @param publishContext -
     * @param outcomes -
     * @param top -
     * @param continuationToken -
     */
    getTestResultsByRelease(project: string, releaseId: number, releaseEnvid?: number, publishContext?: string, outcomes?: Test.TestOutcome[], top?: number, continuationToken?: string): Promise<WebApi.PagedList<Test.ShallowTestCaseResult>>;
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
    testResultsGroupDetails(project: string, pipelineId: number, stageName?: string, phaseName?: string, jobName?: string, shouldIncludeFailedAndAbortedResults?: boolean, queryGroupSummaryForInProgress?: boolean): Promise<Test.TestResultsDetails>;
    /**
     * @param project - Project ID or project name
     * @param buildId -
     * @param publishContext -
     * @param includeFailureDetails -
     * @param buildToCompare -
     */
    queryTestResultsReportForBuild(project: string, buildId: number, publishContext?: string, includeFailureDetails?: boolean, buildToCompare?: Test.BuildReference): Promise<Test.TestResultSummary>;
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
    queryTestResultsReportForPipeline(project: string, pipelineId: number, stageName?: string, phaseName?: string, jobName?: string, includeFailureDetails?: boolean): Promise<Test.TestResultSummary>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param releaseEnvId -
     * @param publishContext -
     * @param includeFailureDetails -
     * @param releaseToCompare -
     */
    queryTestResultsReportForRelease(project: string, releaseId: number, releaseEnvId: number, publishContext?: string, includeFailureDetails?: boolean, releaseToCompare?: Test.ReleaseReference): Promise<Test.TestResultSummary>;
    /**
     * @param releases -
     * @param project - Project ID or project name
     */
    queryTestResultsSummaryForReleases(releases: Test.ReleaseReference[], project: string): Promise<Test.TestResultSummary[]>;
    /**
     * @param resultsContext -
     * @param project - Project ID or project name
     * @param workItemIds -
     */
    queryTestSummaryByRequirement(resultsContext: Test.TestResultsContext, project: string, workItemIds?: number[]): Promise<Test.TestSummaryForWorkItem[]>;
    /**
     * @param filter -
     * @param project - Project ID or project name
     */
    queryResultTrendForBuild(filter: Test.TestResultTrendFilter, project: string): Promise<Test.AggregatedDataForResultTrend[]>;
    /**
     * @param filter -
     * @param project - Project ID or project name
     */
    queryResultTrendForRelease(filter: Test.TestResultTrendFilter, project: string): Promise<Test.AggregatedDataForResultTrend[]>;
    /**
     * @param testRun -
     * @param project - Project ID or project name
     */
    createTestRun(testRun: Test.RunCreateModel, project: string): Promise<Test.TestRun>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     */
    deleteTestRun(project: string, runId: number): Promise<void>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param includeDetails -
     * @param includeTags -
     */
    getTestRunById(project: string, runId: number, includeDetails?: boolean, includeTags?: boolean): Promise<Test.TestRun>;
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
    getTestRuns(project: string, buildUri?: string, owner?: string, tmiRunId?: string, planId?: number, includeRunDetails?: boolean, automated?: boolean, skip?: number, top?: number): Promise<Test.TestRun[]>;
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
    queryTestRuns(project: string, minLastUpdatedDate: Date, maxLastUpdatedDate: Date, state?: Test.TestRunState, planIds?: number[], isAutomated?: boolean, publishContext?: Test.TestRunPublishContext, buildIds?: number[], buildDefIds?: number[], branchName?: string, releaseIds?: number[], releaseDefIds?: number[], releaseEnvIds?: number[], releaseEnvDefIds?: number[], runTitle?: string, top?: number, continuationToken?: string): Promise<WebApi.PagedList<Test.TestRun>>;
    /**
     * @param runUpdateModel -
     * @param project - Project ID or project name
     * @param runId -
     */
    updateTestRun(runUpdateModel: Test.RunUpdateModel, project: string, runId: number): Promise<Test.TestRun>;
    /**
     * Get test run summary, used when we want to get summary of a run by outcome. Test run should be in completed state.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the run to get.
     */
    getTestRunSummaryByOutcome(project: string, runId: number): Promise<Test.TestRunStatistic>;
    /**
     * Get TestResultsSettings data
     *
     * @param project - Project ID or project name
     * @param settingsType -
     */
    getTestResultsSettings(project: string, settingsType?: Test.TestResultsSettingsType): Promise<Test.TestResultsSettings>;
    /**
     * Update project settings of test results
     *
     * @param testResultsUpdateSettings -
     * @param project - Project ID or project name
     */
    updatePipelinesTestSettings(testResultsUpdateSettings: Test.TestResultsUpdateSettings, project: string): Promise<Test.TestResultsSettings>;
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
    getSimilarTestResults(project: string, runId: number, testResultId: number, testSubResultId: number, top?: number, continuationToken?: String): Promise<Test.TestCaseResult[]>;
    /**
     * Get test run statistics , used when we want to get summary of a run by outcome.
     *
     * @param project - Project ID or project name
     * @param runId - ID of the run to get.
     */
    getTestRunStatistics(project: string, runId: number): Promise<Test.TestRunStatistic>;
    /**
     * \<p\>Gets the coverage status for the last successful build of a definition, optionally scoped to a specific branch\</p\>
     *
     * @param project - Project ID or project name
     * @param definition - The ID or name of the definition.
     * @param branchName - The branch name.
     * @param label - The String to replace the default text on the left side of the badge.
     */
    getCoverageStatusBadge(project: string, definition: string, branchName?: string, label?: string): Promise<string>;
    /**
     * Get all the tags in a build.
     *
     * @param project - Project ID or project name
     * @param buildId - Build ID
     */
    getTestTagsForBuild(project: string, buildId: number): Promise<Test.TestTag[]>;
    /**
     * Get all the tags in a release.
     *
     * @param project - Project ID or project name
     * @param releaseId - Release ID
     * @param releaseEnvId - Release environment ID
     */
    getTestTagsForRelease(project: string, releaseId: number, releaseEnvId: number): Promise<Test.TestTag[]>;
    /**
     * Update tags of a run, Tags can be Added and Deleted
     *
     * @param testTagsUpdateModel - TestTagsUpdateModel
     * @param project - Project ID or project name
     * @param runId - RunId of the run
     */
    updateTestRunTags(testTagsUpdateModel: Test.TestTagsUpdateModel, project: string, runId: number): Promise<Test.TestTag[]>;
    /**
     * Get all the tags in a build.
     *
     * @param project - Project ID or project name
     * @param buildId - Build ID
     */
    getTestTagSummaryForBuild(project: string, buildId: number): Promise<Test.TestTagSummary>;
    /**
     * Get all the tags in a release.
     *
     * @param project - Project ID or project name
     * @param releaseId - Release ID
     * @param releaseEnvId - Release environment ID
     */
    getTestTagSummaryForRelease(project: string, releaseId: number, releaseEnvId: number): Promise<Test.TestTagSummary>;
    /**
     * Creates an attachment in the LogStore for the specified buildId.
     *
     * @param attachmentRequestModel - Contains attachment info like stream, filename, comment, attachmentType
     * @param project - Project ID or project name
     * @param buildId - BuildId
     */
    createBuildAttachmentInLogStore(attachmentRequestModel: Test.TestAttachmentRequestModel, project: string, buildId: number): Promise<void>;
    /**
     * Creates an attachment in the LogStore for the specified runId.
     *
     * @param attachmentRequestModel - Contains attachment info like stream, filename, comment, attachmentType
     * @param project - Project ID or project name
     * @param runId - Test RunId
     */
    createTestRunLogStoreAttachment(attachmentRequestModel: Test.TestAttachmentRequestModel, project: string, runId: number): Promise<Test.TestLogStoreAttachmentReference>;
    /**
     * Deletes the attachment with the specified filename for the specified runId from the LogStore.
     *
     * @param project - Project ID or project name
     * @param runId - Test RunId
     * @param filename - Attachment FileName
     */
    deleteTestRunLogStoreAttachment(project: string, runId: number, filename: string): Promise<void>;
    /**
     * Returns the attachment with the specified filename for the specified runId from the LogStore.
     *
     * @param project - Project ID or project name
     * @param runId - Test RunId
     * @param filename - Attachment FileName
     */
    getTestRunLogStoreAttachmentContent(project: string, runId: number, filename: string): Promise<ArrayBuffer>;
    /**
     * Returns a list of attachments for the specified runId from the LogStore.
     *
     * @param project - Project ID or project name
     * @param runId - Test RunId
     */
    getTestRunLogStoreAttachments(project: string, runId: number): Promise<Test.TestLogStoreAttachment[]>;
    /**
     * Returns the attachment with the specified filename for the specified runId from the LogStore.
     *
     * @param project - Project ID or project name
     * @param runId - Test RunId
     * @param filename - Attachment FileName
     */
    getTestRunLogStoreAttachmentZip(project: string, runId: number, filename: string): Promise<ArrayBuffer>;
    /**
     * Creates a new test failure type
     *
     * @param testResultFailureType -
     * @param project - Project ID or project name
     */
    createFailureType(testResultFailureType: Test.TestResultFailureTypeRequestModel, project: string): Promise<Test.TestResultFailureType>;
    /**
     * Deletes a test failure type with specified failureTypeId
     *
     * @param project - Project ID or project name
     * @param failureTypeId -
     */
    deleteFailureType(project: string, failureTypeId: number): Promise<void>;
    /**
     * Returns the list of test failure types.
     *
     * @param project - Project ID or project name
     */
    getFailureTypes(project: string): Promise<Test.TestResultFailureType[]>;
    /**
     * Get history of a test method using TestHistoryQuery
     *
     * @param filter - TestHistoryQuery to get history
     * @param project - Project ID or project name
     */
    queryTestHistory(filter: Test.TestHistoryQuery, project: string): Promise<Test.TestHistoryQuery>;
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
    getTestLogsForBuild(project: string, buildId: number, type: Test.TestLogType, directoryPath?: string, fileNamePrefix?: string, fetchMetaData?: boolean, top?: number, continuationToken?: String): Promise<WebApi.PagedList<Test.TestLog>>;
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
    getTestResultLogs(project: string, runId: number, resultId: number, type: Test.TestLogType, directoryPath?: string, fileNamePrefix?: string, fetchMetaData?: boolean, top?: number, continuationToken?: String): Promise<WebApi.PagedList<Test.TestLog>>;
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
    getTestSubResultLogs(project: string, runId: number, resultId: number, subResultId: number, type: Test.TestLogType, directoryPath?: string, fileNamePrefix?: string, fetchMetaData?: boolean, top?: number, continuationToken?: String): Promise<WebApi.PagedList<Test.TestLog>>;
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
    getTestRunLogs(project: string, runId: number, type: Test.TestLogType, directoryPath?: string, fileNamePrefix?: string, fetchMetaData?: boolean, top?: number, continuationToken?: String): Promise<WebApi.PagedList<Test.TestLog>>;
    /**
     * Get SAS Uri of a build attachment
     *
     * @param project - Project ID or project name
     * @param build - Id of the build to get
     * @param type - type of the file
     * @param filePath - filePath for which sas uri is needed
     */
    getTestLogStoreEndpointDetailsForBuildLog(project: string, build: number, type: Test.TestLogType, filePath: string): Promise<Test.TestLogStoreEndpointDetails>;
    /**
     * Create and Get sas uri of the build container
     *
     * @param project - Project ID or project name
     * @param buildId - Id of the build to get
     * @param testLogStoreOperationType - Type of operation to perform using sas uri
     */
    testLogStoreEndpointDetailsForBuild(project: string, buildId: number, testLogStoreOperationType: Test.TestLogStoreOperationType): Promise<Test.TestLogStoreEndpointDetails>;
    /**
     * Get SAS Uri of a test results attachment
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run that contains result
     * @param resultId - Id of the test result whose files need to be downloaded
     * @param type - type of the file
     * @param filePath - filePath for which sas uri is needed
     */
    getTestLogStoreEndpointDetailsForResultLog(project: string, runId: number, resultId: number, type: Test.TestLogType, filePath: string): Promise<Test.TestLogStoreEndpointDetails>;
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
    getTestLogStoreEndpointDetailsForSubResultLog(project: string, runId: number, resultId: number, subResultId: number, type: Test.TestLogType, filePath: string): Promise<Test.TestLogStoreEndpointDetails>;
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
    testLogStoreEndpointDetailsForResult(project: string, runId: number, resultId: number, subResultId: number, filePath: string, type: Test.TestLogType): Promise<Test.TestLogStoreEndpointDetails>;
    /**
     * Get SAS Uri of a test run attachment
     *
     * @param project - Project ID or project name
     * @param runId - Id of the test run whose file has to be downloaded
     * @param type - type of the file
     * @param filePath - filePath for which sas uri is needed
     */
    getTestLogStoreEndpointDetailsForRunLog(project: string, runId: number, type: Test.TestLogType, filePath: string): Promise<Test.TestLogStoreEndpointDetails>;
    /**
     * Create empty file for a run and Get Sas uri for the file
     *
     * @param project - Project ID or project name
     * @param runId - Id of the run to get endpoint details
     * @param testLogStoreOperationType - Type of operation to perform using sas uri
     * @param filePath - file path to create an empty file
     * @param type - Default is GeneralAttachment, type of empty file to be created
     */
    testLogStoreEndpointDetailsForRun(project: string, runId: number, testLogStoreOperationType: Test.TestLogStoreOperationType, filePath?: string, type?: Test.TestLogType): Promise<Test.TestLogStoreEndpointDetails>;
    /**
     * Retrieves Test runs associated to a session
     *
     * @param project - Project ID or project name
     * @param sessionId - Id of TestResults session to obtain Test Runs for.
     */
    getTestRunsBySessionId(project: string, sessionId: number): Promise<number[]>;
    /**
     * Creates TestResultsSession object in TCM data store
     *
     * @param session - Received session object.
     * @param project - Project ID or project name
     */
    createTestSession(session: Test.TestResultsSession, project: string): Promise<number>;
    /**
     * Retrieves TestResultsSession metadata object in TCM data store
     *
     * @param project - Project ID or project name
     * @param buildId -
     */
    getTestSession(project: string, buildId: number): Promise<Test.TestResultsSession[]>;
    /**
     * Retrieves TestResultsSession Layout object in TCM data store
     *
     * @param project - Project ID or project name
     * @param sessionId -
     */
    getTestSessionLayout(project: string, sessionId: string): Promise<any[]>;
    /**
     * Creates Environment object in TCM data store
     *
     * @param environments - Received Environment object.
     * @param project - Project ID or project name
     */
    createEnvironment(environments: Test.TestSessionEnvironment[], project: string): Promise<void>;
    /**
     * Retrieves TestResultsSession Layout object in TCM data store
     *
     * @param project - Project ID or project name
     * @param sessionId - Retrieve session object.
     */
    getTestSessionLayoutBySessionId(project: string, sessionId: number): Promise<any[]>;
    /**
     * Creates Notification object in TCM data store for a given session
     *
     * @param notifications - Notification(s) to add for the specified sessionId
     * @param project - Project ID or project name
     * @param sessionId - ID of Session to add Notification
     */
    createNotification(notifications: Test.TestSessionNotification[], project: string, sessionId: number): Promise<number[]>;
    /**
     * Retrieves TestResultsSession Notification objects in TCM data store
     *
     * @param project - Project ID or project name
     * @param sessionId - Id of TestResults session to obtain Notifications for.
     */
    getSessionNotifications(project: string, sessionId: number): Promise<Test.TestSessionNotification[]>;
    /**
     * Add Test Results to test run session
     *
     * @param results -
     * @param project - Project ID or project name
     * @param runId - RunId of test run
     */
    addTestResultsToTestRunSession(results: Test.TestCaseResult[], project: string, runId: number): Promise<Test.TestCaseResult[]>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param detailsToInclude -
     * @param skip -
     * @param top -
     * @param outcomes -
     * @param newTestsOnly -
     */
    getTestSessionResults(project: string, runId: number, detailsToInclude?: Test.ResultDetails, skip?: number, top?: number, outcomes?: Test.TestOutcome[], newTestsOnly?: boolean): Promise<Test.TestCaseResult[]>;
    /**
     * Creates TestResultsMRX objects in TCM data store for existing test results
     *
     * @param results - Results object with only test results MRX properties and existing testResultId
     * @param project - Project ID or project name
     * @param runId - RunId of test run
     */
    updateTestResultsToTestRunSession(results: Test.TestCaseResult[], project: string, runId: number): Promise<number[]>;
    /**
     * @param testSettings -
     * @param project - Project ID or project name
     */
    createTestSettings(testSettings: Test.TestSettings, project: string): Promise<number>;
    /**
     * @param project - Project ID or project name
     * @param testSettingsId -
     */
    deleteTestSettings(project: string, testSettingsId: number): Promise<void>;
    /**
     * @param project - Project ID or project name
     * @param testSettingsId -
     */
    getTestSettingsById(project: string, testSettingsId: number): Promise<Test.TestSettings>;
    /**
     * @param workItemToTestLinks -
     * @param project - Project ID or project name
     */
    addWorkItemToTestLinks(workItemToTestLinks: Test.WorkItemToTestLinks, project: string): Promise<Test.WorkItemToTestLinks>;
    /**
     * @param project - Project ID or project name
     * @param testName -
     * @param workItemId -
     */
    deleteTestMethodToWorkItemLink(project: string, testName: string, workItemId: number): Promise<boolean>;
    /**
     * @param project - Project ID or project name
     * @param testName -
     */
    queryTestMethodLinkedWorkItems(project: string, testName: string): Promise<Test.TestToWorkItemLinks>;
    /**
     * @param project - Project ID or project name
     * @param runId -
     * @param testCaseResultId -
     */
    getTestResultWorkItemsById(project: string, runId: number, testCaseResultId: number): Promise<Test.WorkItemReference[]>;
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
    queryTestResultWorkItems(project: string, workItemCategory: string, automatedTestName?: string, testCaseId?: number, maxCompleteDate?: Date, days?: number, workItemCount?: number): Promise<Test.WorkItemReference[]>;
}
