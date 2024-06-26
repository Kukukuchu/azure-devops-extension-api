/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
/**
 * The types of test attachments.
 */
export var AttachmentType;
(function (AttachmentType) {
    /**
     * Attachment type GeneralAttachment , use this as default type unless you have other type.
     */
    AttachmentType[AttachmentType["GeneralAttachment"] = 0] = "GeneralAttachment";
    AttachmentType[AttachmentType["AfnStrip"] = 1] = "AfnStrip";
    AttachmentType[AttachmentType["BugFilingData"] = 2] = "BugFilingData";
    /**
     * Attachment type CodeCoverage.
     */
    AttachmentType[AttachmentType["CodeCoverage"] = 3] = "CodeCoverage";
    AttachmentType[AttachmentType["IntermediateCollectorData"] = 4] = "IntermediateCollectorData";
    AttachmentType[AttachmentType["RunConfig"] = 5] = "RunConfig";
    AttachmentType[AttachmentType["TestImpactDetails"] = 6] = "TestImpactDetails";
    AttachmentType[AttachmentType["TmiTestRunDeploymentFiles"] = 7] = "TmiTestRunDeploymentFiles";
    AttachmentType[AttachmentType["TmiTestRunReverseDeploymentFiles"] = 8] = "TmiTestRunReverseDeploymentFiles";
    AttachmentType[AttachmentType["TmiTestResultDetail"] = 9] = "TmiTestResultDetail";
    AttachmentType[AttachmentType["TmiTestRunSummary"] = 10] = "TmiTestRunSummary";
    /**
     * Attachment type ConsoleLog.
     */
    AttachmentType[AttachmentType["ConsoleLog"] = 11] = "ConsoleLog";
})(AttachmentType || (AttachmentType = {}));
/**
 * Enum of type Clone Operation Type.
 */
export var CloneOperationState;
(function (CloneOperationState) {
    /**
     * value for Failed State
     */
    CloneOperationState[CloneOperationState["Failed"] = 2] = "Failed";
    /**
     * value for Inprogress state
     */
    CloneOperationState[CloneOperationState["InProgress"] = 1] = "InProgress";
    /**
     * Value for Queued State
     */
    CloneOperationState[CloneOperationState["Queued"] = 0] = "Queued";
    /**
     * value for Success state
     */
    CloneOperationState[CloneOperationState["Succeeded"] = 3] = "Succeeded";
})(CloneOperationState || (CloneOperationState = {}));
/**
 * Represents status of code coverage summary for a build
 */
export var CoverageDetailedSummaryStatus;
(function (CoverageDetailedSummaryStatus) {
    /**
     * No coverage status
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["None"] = 0] = "None";
    /**
     * The summary evaluation is in progress
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["InProgress"] = 1] = "InProgress";
    /**
     * The summary evaluation is finalized and won't change
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["Finalized"] = 2] = "Finalized";
    /**
     * The summary evaluation is pending
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["Pending"] = 3] = "Pending";
    /**
     * Summary evaluation may be ongoing but another merge has been requested.
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["UpdateRequestQueued"] = 4] = "UpdateRequestQueued";
    /**
     * No coverage modules found
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["NoModulesFound"] = 5] = "NoModulesFound";
    /**
     * Number of Files exceeded
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["NumberOfFilesExceeded"] = 6] = "NumberOfFilesExceeded";
    /**
     * TNo Input Files
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["NoInputFiles"] = 7] = "NoInputFiles";
    /**
     * Build got cancelled by user
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["BuildCancelled"] = 8] = "BuildCancelled";
    /**
     * Coverage Jobs failed
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["FailedJobs"] = 9] = "FailedJobs";
    /**
     * Module merge Timeout
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["ModuleMergeJobTimeout"] = 10] = "ModuleMergeJobTimeout";
    /**
     * Coverage successfully completed
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["CodeCoverageSuccess"] = 11] = "CodeCoverageSuccess";
    /**
     * Invalid Build Configuration
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["InvalidBuildConfiguration"] = 12] = "InvalidBuildConfiguration";
    /**
     * Coverage Analyzer Build not found
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["CoverageAnalyzerBuildNotFound"] = 13] = "CoverageAnalyzerBuildNotFound";
    /**
     * Failed to requeue the build
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["FailedToRequeue"] = 14] = "FailedToRequeue";
    /**
     * Build got Bailed out
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["BuildBailedOut"] = 15] = "BuildBailedOut";
    /**
     * No Code coverage configured
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["NoCodeCoverageTask"] = 16] = "NoCodeCoverageTask";
    /**
     * CoverageMerge Job failed
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["MergeJobFailed"] = 17] = "MergeJobFailed";
    /**
     * CoverageMergeInvoker Job failed
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["MergeInvokerJobFailed"] = 18] = "MergeInvokerJobFailed";
    /**
     * CoverageMonitor Job failed
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["MonitorJobFailed"] = 19] = "MonitorJobFailed";
    /**
     * CoverageMergeInvoker Job timeout
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["ModuleMergeInvokerJobTimeout"] = 20] = "ModuleMergeInvokerJobTimeout";
    /**
     * CoverageMonitor Job timeout
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["MonitorJobTimeout"] = 21] = "MonitorJobTimeout";
    /**
     * Invalid Coverage Input file
     */
    CoverageDetailedSummaryStatus[CoverageDetailedSummaryStatus["InvalidCoverageInput"] = 22] = "InvalidCoverageInput";
})(CoverageDetailedSummaryStatus || (CoverageDetailedSummaryStatus = {}));
/**
 * Used to choose which coverage data is returned by a QueryXXXCoverage() call.
 */
export var CoverageQueryFlags;
(function (CoverageQueryFlags) {
    /**
     * If set, the Coverage.Modules property will be populated.
     */
    CoverageQueryFlags[CoverageQueryFlags["Modules"] = 1] = "Modules";
    /**
     * If set, the ModuleCoverage.Functions properties will be populated.
     */
    CoverageQueryFlags[CoverageQueryFlags["Functions"] = 2] = "Functions";
    /**
     * If set, the ModuleCoverage.CoverageData field will be populated.
     */
    CoverageQueryFlags[CoverageQueryFlags["BlockData"] = 4] = "BlockData";
})(CoverageQueryFlags || (CoverageQueryFlags = {}));
export var CoverageStatus;
(function (CoverageStatus) {
    CoverageStatus[CoverageStatus["Covered"] = 0] = "Covered";
    CoverageStatus[CoverageStatus["NotCovered"] = 1] = "NotCovered";
    CoverageStatus[CoverageStatus["PartiallyCovered"] = 2] = "PartiallyCovered";
})(CoverageStatus || (CoverageStatus = {}));
/**
 * Represents status of code coverage summary for a build
 */
export var CoverageSummaryStatus;
(function (CoverageSummaryStatus) {
    /**
     * No coverage status
     */
    CoverageSummaryStatus[CoverageSummaryStatus["None"] = 0] = "None";
    /**
     * The summary evaluation is in progress
     */
    CoverageSummaryStatus[CoverageSummaryStatus["InProgress"] = 1] = "InProgress";
    /**
     * The summary evaluation for the previous request is completed. Summary can change in future
     */
    CoverageSummaryStatus[CoverageSummaryStatus["Completed"] = 2] = "Completed";
    /**
     * The summary evaluation is finalized and won't change
     */
    CoverageSummaryStatus[CoverageSummaryStatus["Finalized"] = 3] = "Finalized";
    /**
     * The summary evaluation is pending
     */
    CoverageSummaryStatus[CoverageSummaryStatus["Pending"] = 4] = "Pending";
    /**
     * Summary evaluation may be ongoing but another merge has been requested.
     */
    CoverageSummaryStatus[CoverageSummaryStatus["UpdateRequestQueued"] = 5] = "UpdateRequestQueued";
})(CoverageSummaryStatus || (CoverageSummaryStatus = {}));
export var CustomTestFieldScope;
(function (CustomTestFieldScope) {
    CustomTestFieldScope[CustomTestFieldScope["None"] = 0] = "None";
    CustomTestFieldScope[CustomTestFieldScope["TestRun"] = 1] = "TestRun";
    CustomTestFieldScope[CustomTestFieldScope["TestResult"] = 2] = "TestResult";
    CustomTestFieldScope[CustomTestFieldScope["System"] = 4] = "System";
    CustomTestFieldScope[CustomTestFieldScope["All"] = 7] = "All";
})(CustomTestFieldScope || (CustomTestFieldScope = {}));
export var CustomTestFieldType;
(function (CustomTestFieldType) {
    CustomTestFieldType[CustomTestFieldType["Bit"] = 2] = "Bit";
    CustomTestFieldType[CustomTestFieldType["DateTime"] = 4] = "DateTime";
    CustomTestFieldType[CustomTestFieldType["Int"] = 8] = "Int";
    CustomTestFieldType[CustomTestFieldType["Float"] = 6] = "Float";
    CustomTestFieldType[CustomTestFieldType["String"] = 12] = "String";
    CustomTestFieldType[CustomTestFieldType["Guid"] = 14] = "Guid";
})(CustomTestFieldType || (CustomTestFieldType = {}));
export var FlakyDetectionType;
(function (FlakyDetectionType) {
    /**
     * Custom defines manual detection type.
     */
    FlakyDetectionType[FlakyDetectionType["Custom"] = 1] = "Custom";
    /**
     * Defines System detection type.
     */
    FlakyDetectionType[FlakyDetectionType["System"] = 2] = "System";
})(FlakyDetectionType || (FlakyDetectionType = {}));
/**
 * Test summary metrics.
 */
export var Metrics;
(function (Metrics) {
    /**
     * To get results of all matrix.
     */
    Metrics[Metrics["All"] = 1] = "All";
    /**
     * Get results summary by results outcome
     */
    Metrics[Metrics["ResultSummary"] = 2] = "ResultSummary";
    /**
     * Get results analysis which include failure analysis, increase/decrease in results count analysis.
     */
    Metrics[Metrics["ResultsAnalysis"] = 3] = "ResultsAnalysis";
    /**
     * Get runs summary
     */
    Metrics[Metrics["RunSummary"] = 4] = "RunSummary";
})(Metrics || (Metrics = {}));
export var OperationType;
(function (OperationType) {
    OperationType[OperationType["Add"] = 1] = "Add";
    OperationType[OperationType["Delete"] = 2] = "Delete";
})(OperationType || (OperationType = {}));
/**
 * Additional details with test result
 */
export var ResultDetails;
(function (ResultDetails) {
    /**
     * Core fields of test result. Core fields includes State, Outcome, Priority, AutomatedTestName, AutomatedTestStorage, Comments, ErrorMessage etc.
     */
    ResultDetails[ResultDetails["None"] = 0] = "None";
    /**
     * Test iteration details in a test result.
     */
    ResultDetails[ResultDetails["Iterations"] = 1] = "Iterations";
    /**
     * Workitems associated with a test result.
     */
    ResultDetails[ResultDetails["WorkItems"] = 2] = "WorkItems";
    /**
     * Subresults in a test result.
     */
    ResultDetails[ResultDetails["SubResults"] = 4] = "SubResults";
    /**
     * Point and plan detail in a test result.
     */
    ResultDetails[ResultDetails["Point"] = 8] = "Point";
})(ResultDetails || (ResultDetails = {}));
/**
 * Hierarchy type of the result/subresults.
 */
export var ResultGroupType;
(function (ResultGroupType) {
    /**
     * Leaf node of test result.
     */
    ResultGroupType[ResultGroupType["None"] = 0] = "None";
    /**
     * Hierarchy type of test result.
     */
    ResultGroupType[ResultGroupType["Rerun"] = 1] = "Rerun";
    /**
     * Hierarchy type of test result.
     */
    ResultGroupType[ResultGroupType["DataDriven"] = 2] = "DataDriven";
    /**
     * Hierarchy type of test result.
     */
    ResultGroupType[ResultGroupType["OrderedTest"] = 3] = "OrderedTest";
    /**
     * Unknown hierarchy type.
     */
    ResultGroupType[ResultGroupType["Generic"] = 4] = "Generic";
})(ResultGroupType || (ResultGroupType = {}));
export var ResultMetadata;
(function (ResultMetadata) {
    /**
     * Rerun metadata
     */
    ResultMetadata[ResultMetadata["Rerun"] = 1] = "Rerun";
    /**
     * Flaky metadata
     */
    ResultMetadata[ResultMetadata["Flaky"] = 2] = "Flaky";
})(ResultMetadata || (ResultMetadata = {}));
/**
 * Additional details with test result metadata
 */
export var ResultMetaDataDetails;
(function (ResultMetaDataDetails) {
    /**
     * Core fields of test result metadata.
     */
    ResultMetaDataDetails[ResultMetaDataDetails["None"] = 0] = "None";
    /**
     * Test FlakyIdentifiers details in test result metadata.
     */
    ResultMetaDataDetails[ResultMetaDataDetails["FlakyIdentifiers"] = 1] = "FlakyIdentifiers";
})(ResultMetaDataDetails || (ResultMetaDataDetails = {}));
/**
 * The top level entity that is being cloned as part of a Clone operation
 */
export var ResultObjectType;
(function (ResultObjectType) {
    /**
     * Suite Clone
     */
    ResultObjectType[ResultObjectType["TestSuite"] = 0] = "TestSuite";
    /**
     * Plan Clone
     */
    ResultObjectType[ResultObjectType["TestPlan"] = 1] = "TestPlan";
})(ResultObjectType || (ResultObjectType = {}));
export var RunType;
(function (RunType) {
    /**
     * Only used during an update to preserve the existing value.
     */
    RunType[RunType["Unspecified"] = 0] = "Unspecified";
    /**
     * Normal test run.
     */
    RunType[RunType["Normal"] = 1] = "Normal";
    /**
     * Test run created for the blocked result when a test point is blocked.
     */
    RunType[RunType["Blocking"] = 2] = "Blocking";
    /**
     * Test run created from Web.
     */
    RunType[RunType["Web"] = 4] = "Web";
    /**
     * Run initiated from web through MTR
     */
    RunType[RunType["MtrRunInitiatedFromWeb"] = 8] = "MtrRunInitiatedFromWeb";
    /**
     * These test run would require DTL environment. These could be either of automated or manual test run.
     */
    RunType[RunType["RunWithDtlEnv"] = 16] = "RunWithDtlEnv";
    /**
     * These test run may or may not have published test results but it will have summary like total test, passed test, failed test etc. These are automated tests.
     */
    RunType[RunType["NoConfigRun"] = 32] = "NoConfigRun";
})(RunType || (RunType = {}));
export var Service;
(function (Service) {
    Service[Service["Any"] = 0] = "Any";
    Service[Service["Tcm"] = 1] = "Tcm";
    Service[Service["Tfs"] = 2] = "Tfs";
})(Service || (Service = {}));
export var SessionResult;
(function (SessionResult) {
    /**
     * Default
     */
    SessionResult[SessionResult["None"] = 0] = "None";
    /**
     * Session result with Passed
     */
    SessionResult[SessionResult["Passed"] = 1] = "Passed";
    /**
     * Session result with Failed
     */
    SessionResult[SessionResult["Failed"] = 2] = "Failed";
})(SessionResult || (SessionResult = {}));
export var SessionTimelineType;
(function (SessionTimelineType) {
    /**
     * Default
     */
    SessionTimelineType[SessionTimelineType["None"] = 0] = "None";
    /**
     * Timeline type for Queued status
     */
    SessionTimelineType[SessionTimelineType["Queued"] = 1] = "Queued";
    /**
     * Timeline type for Completed status
     */
    SessionTimelineType[SessionTimelineType["Completed"] = 2] = "Completed";
    /**
     * Timeline type for Started status
     */
    SessionTimelineType[SessionTimelineType["Started"] = 3] = "Started";
})(SessionTimelineType || (SessionTimelineType = {}));
/**
 * Option to get details in response
 */
export var SuiteExpand;
(function (SuiteExpand) {
    /**
     * Include children in response.
     */
    SuiteExpand[SuiteExpand["Children"] = 1] = "Children";
    /**
     * Include default testers in response.
     */
    SuiteExpand[SuiteExpand["DefaultTesters"] = 2] = "DefaultTesters";
})(SuiteExpand || (SuiteExpand = {}));
export var TCMServiceDataMigrationStatus;
(function (TCMServiceDataMigrationStatus) {
    /**
     * Migration Not Started
     */
    TCMServiceDataMigrationStatus[TCMServiceDataMigrationStatus["NotStarted"] = 0] = "NotStarted";
    /**
     * Migration InProgress
     */
    TCMServiceDataMigrationStatus[TCMServiceDataMigrationStatus["InProgress"] = 1] = "InProgress";
    /**
     * Migration Completed
     */
    TCMServiceDataMigrationStatus[TCMServiceDataMigrationStatus["Completed"] = 2] = "Completed";
    /**
     * Migration Failed
     */
    TCMServiceDataMigrationStatus[TCMServiceDataMigrationStatus["Failed"] = 3] = "Failed";
})(TCMServiceDataMigrationStatus || (TCMServiceDataMigrationStatus = {}));
/**
 * Represents the state of an ITestConfiguration object.
 */
export var TestConfigurationState;
(function (TestConfigurationState) {
    /**
     * The configuration can be used for new test runs.
     */
    TestConfigurationState[TestConfigurationState["Active"] = 1] = "Active";
    /**
     * The configuration has been retired and should not be used for new test runs.
     */
    TestConfigurationState[TestConfigurationState["Inactive"] = 2] = "Inactive";
})(TestConfigurationState || (TestConfigurationState = {}));
/**
 * Test Log Context
 */
export var TestLogScope;
(function (TestLogScope) {
    /**
     * Log file is associated with Run, result, subresult
     */
    TestLogScope[TestLogScope["Run"] = 0] = "Run";
    /**
     * Log File associated with Build
     */
    TestLogScope[TestLogScope["Build"] = 1] = "Build";
    /**
     * Log File associated with Release
     */
    TestLogScope[TestLogScope["Release"] = 2] = "Release";
})(TestLogScope || (TestLogScope = {}));
/**
 * Test Log Status codes.
 */
export var TestLogStatusCode;
(function (TestLogStatusCode) {
    /**
     * Operation is successful
     */
    TestLogStatusCode[TestLogStatusCode["Success"] = 0] = "Success";
    /**
     * Operation failed
     */
    TestLogStatusCode[TestLogStatusCode["Failed"] = 1] = "Failed";
    /**
     * Operation failed due to file already exist
     */
    TestLogStatusCode[TestLogStatusCode["FileAlreadyExists"] = 2] = "FileAlreadyExists";
    /**
     * Invalid input provided by user
     */
    TestLogStatusCode[TestLogStatusCode["InvalidInput"] = 3] = "InvalidInput";
    /**
     * Invalid file name provided by user
     */
    TestLogStatusCode[TestLogStatusCode["InvalidFileName"] = 4] = "InvalidFileName";
    /**
     * Error occurred while operating on container
     */
    TestLogStatusCode[TestLogStatusCode["InvalidContainer"] = 5] = "InvalidContainer";
    /**
     * Blob Transfer Error
     */
    TestLogStatusCode[TestLogStatusCode["TransferFailed"] = 6] = "TransferFailed";
    /**
     * TestLogStore feature is not enabled
     */
    TestLogStatusCode[TestLogStatusCode["FeatureDisabled"] = 7] = "FeatureDisabled";
    /**
     * Build for which operation is requested does not exist
     */
    TestLogStatusCode[TestLogStatusCode["BuildDoesNotExist"] = 8] = "BuildDoesNotExist";
    /**
     * Run for which operation is requested does not exist
     */
    TestLogStatusCode[TestLogStatusCode["RunDoesNotExist"] = 9] = "RunDoesNotExist";
    /**
     * Container cannot be created
     */
    TestLogStatusCode[TestLogStatusCode["ContainerNotCreated"] = 10] = "ContainerNotCreated";
    /**
     * Api is not supported
     */
    TestLogStatusCode[TestLogStatusCode["APINotSupported"] = 11] = "APINotSupported";
    /**
     * File size is greater than the limitation
     */
    TestLogStatusCode[TestLogStatusCode["FileSizeExceeds"] = 12] = "FileSizeExceeds";
    /**
     * Container is not found for which operation is requested
     */
    TestLogStatusCode[TestLogStatusCode["ContainerNotFound"] = 13] = "ContainerNotFound";
    /**
     * File cannot be found
     */
    TestLogStatusCode[TestLogStatusCode["FileNotFound"] = 14] = "FileNotFound";
    /**
     * Directory cannot be found
     */
    TestLogStatusCode[TestLogStatusCode["DirectoryNotFound"] = 15] = "DirectoryNotFound";
    /**
     * Storage capacity exceeded
     */
    TestLogStatusCode[TestLogStatusCode["StorageCapacityExceeded"] = 16] = "StorageCapacityExceeded";
})(TestLogStatusCode || (TestLogStatusCode = {}));
/**
 * Specifies set of possible log store endpoint type.
 */
export var TestLogStoreEndpointType;
(function (TestLogStoreEndpointType) {
    /**
     * Endpoint type is scoped to root
     */
    TestLogStoreEndpointType[TestLogStoreEndpointType["Root"] = 1] = "Root";
    /**
     * Endpoint type is scoped to file
     */
    TestLogStoreEndpointType[TestLogStoreEndpointType["File"] = 2] = "File";
})(TestLogStoreEndpointType || (TestLogStoreEndpointType = {}));
/**
 * Specifies set of possible operation type on log store.
 */
export var TestLogStoreOperationType;
(function (TestLogStoreOperationType) {
    /**
     * Operation is scoped to read data only.
     */
    TestLogStoreOperationType[TestLogStoreOperationType["Read"] = 1] = "Read";
    /**
     * Operation is scoped to create data only.
     */
    TestLogStoreOperationType[TestLogStoreOperationType["Create"] = 2] = "Create";
    /**
     * Operation is scoped to read and create data.
     */
    TestLogStoreOperationType[TestLogStoreOperationType["ReadAndCreate"] = 3] = "ReadAndCreate";
})(TestLogStoreOperationType || (TestLogStoreOperationType = {}));
/**
 * Test Log Types
 */
export var TestLogType;
(function (TestLogType) {
    /**
     * Any gereric attachment.
     */
    TestLogType[TestLogType["GeneralAttachment"] = 1] = "GeneralAttachment";
    /**
     * Code Coverage files
     */
    TestLogType[TestLogType["CodeCoverage"] = 2] = "CodeCoverage";
    /**
     * Test Impact details.
     */
    TestLogType[TestLogType["TestImpact"] = 3] = "TestImpact";
    /**
     * Temporary files
     */
    TestLogType[TestLogType["Intermediate"] = 4] = "Intermediate";
    /**
     * Subresult Attachment
     */
    TestLogType[TestLogType["System"] = 5] = "System";
    /**
     * merged Coverage file
     */
    TestLogType[TestLogType["MergedCoverageFile"] = 6] = "MergedCoverageFile";
})(TestLogType || (TestLogType = {}));
/**
 * Valid TestOutcome values.
 */
export var TestOutcome;
(function (TestOutcome) {
    /**
     * Only used during an update to preserve the existing value.
     */
    TestOutcome[TestOutcome["Unspecified"] = 0] = "Unspecified";
    /**
     * Test has not been completed, or the test type does not report pass/failure.
     */
    TestOutcome[TestOutcome["None"] = 1] = "None";
    /**
     * Test was executed w/o any issues.
     */
    TestOutcome[TestOutcome["Passed"] = 2] = "Passed";
    /**
     * Test was executed, but there were issues. Issues may involve exceptions or failed assertions.
     */
    TestOutcome[TestOutcome["Failed"] = 3] = "Failed";
    /**
     * Test has completed, but we can't say if it passed or failed. May be used for aborted tests...
     */
    TestOutcome[TestOutcome["Inconclusive"] = 4] = "Inconclusive";
    /**
     * The test timed out
     */
    TestOutcome[TestOutcome["Timeout"] = 5] = "Timeout";
    /**
     * Test was aborted. This was not caused by a user gesture, but rather by a framework decision.
     */
    TestOutcome[TestOutcome["Aborted"] = 6] = "Aborted";
    /**
     * Test had it chance for been executed but was not, as ITestElement.IsRunnable == false.
     */
    TestOutcome[TestOutcome["Blocked"] = 7] = "Blocked";
    /**
     * Test was not executed. This was caused by a user gesture - e.g. user hit stop button.
     */
    TestOutcome[TestOutcome["NotExecuted"] = 8] = "NotExecuted";
    /**
     * To be used by Run level results. This is not a failure.
     */
    TestOutcome[TestOutcome["Warning"] = 9] = "Warning";
    /**
     * There was a system error while we were trying to execute a test.
     */
    TestOutcome[TestOutcome["Error"] = 10] = "Error";
    /**
     * Test is Not Applicable for execution.
     */
    TestOutcome[TestOutcome["NotApplicable"] = 11] = "NotApplicable";
    /**
     * Test is paused.
     */
    TestOutcome[TestOutcome["Paused"] = 12] = "Paused";
    /**
     * Test is currently executing. Added this for TCM charts
     */
    TestOutcome[TestOutcome["InProgress"] = 13] = "InProgress";
    /**
     * Test is not impacted. Added fot TIA.
     */
    TestOutcome[TestOutcome["NotImpacted"] = 14] = "NotImpacted";
    TestOutcome[TestOutcome["MaxValue"] = 14] = "MaxValue";
})(TestOutcome || (TestOutcome = {}));
export var TestPointState;
(function (TestPointState) {
    /**
     * Default
     */
    TestPointState[TestPointState["None"] = 0] = "None";
    /**
     * The test point needs to be executed in order for the test pass to be considered complete.  Either the test has not been run before or the previous run failed.
     */
    TestPointState[TestPointState["Ready"] = 1] = "Ready";
    /**
     * The test has passed successfully and does not need to be re-run for the test pass to be considered complete.
     */
    TestPointState[TestPointState["Completed"] = 2] = "Completed";
    /**
     * The test point needs to be executed but is not able to.
     */
    TestPointState[TestPointState["NotReady"] = 3] = "NotReady";
    /**
     * The test is being executed.
     */
    TestPointState[TestPointState["InProgress"] = 4] = "InProgress";
    TestPointState[TestPointState["MaxValue"] = 4] = "MaxValue";
})(TestPointState || (TestPointState = {}));
/**
 * Group by for results
 */
export var TestResultGroupBy;
(function (TestResultGroupBy) {
    /**
     * Group the results by branches
     */
    TestResultGroupBy[TestResultGroupBy["Branch"] = 1] = "Branch";
    /**
     * Group the results by environment
     */
    TestResultGroupBy[TestResultGroupBy["Environment"] = 2] = "Environment";
})(TestResultGroupBy || (TestResultGroupBy = {}));
export var TestResultsContextType;
(function (TestResultsContextType) {
    TestResultsContextType[TestResultsContextType["Build"] = 1] = "Build";
    TestResultsContextType[TestResultsContextType["Release"] = 2] = "Release";
    TestResultsContextType[TestResultsContextType["Pipeline"] = 3] = "Pipeline";
})(TestResultsContextType || (TestResultsContextType = {}));
export var TestResultsSessionState;
(function (TestResultsSessionState) {
    /**
     * Default
     */
    TestResultsSessionState[TestResultsSessionState["None"] = 0] = "None";
    /**
     * Session state with Running
     */
    TestResultsSessionState[TestResultsSessionState["Running"] = 1] = "Running";
    /**
     * Session state with Completed
     */
    TestResultsSessionState[TestResultsSessionState["Completed"] = 2] = "Completed";
    /**
     * Session state with Waiting
     */
    TestResultsSessionState[TestResultsSessionState["Waiting"] = 3] = "Waiting";
    /**
     * Session state with Cancelled
     */
    TestResultsSessionState[TestResultsSessionState["Cancelled"] = 4] = "Cancelled";
})(TestResultsSessionState || (TestResultsSessionState = {}));
export var TestResultsSettingsType;
(function (TestResultsSettingsType) {
    /**
     * Returns All Test Settings.
     */
    TestResultsSettingsType[TestResultsSettingsType["All"] = 1] = "All";
    /**
     * Returns Flaky Test Settings.
     */
    TestResultsSettingsType[TestResultsSettingsType["Flaky"] = 2] = "Flaky";
    /**
     * Returns whether to log new tests or not
     */
    TestResultsSettingsType[TestResultsSettingsType["NewTestLogging"] = 3] = "NewTestLogging";
})(TestResultsSettingsType || (TestResultsSettingsType = {}));
/**
 * The types of outcomes for test run.
 */
export var TestRunOutcome;
(function (TestRunOutcome) {
    /**
     * Run with zero failed tests and has at least one impacted test
     */
    TestRunOutcome[TestRunOutcome["Passed"] = 0] = "Passed";
    /**
     * Run with at-least one failed test.
     */
    TestRunOutcome[TestRunOutcome["Failed"] = 1] = "Failed";
    /**
     * Run with no impacted tests.
     */
    TestRunOutcome[TestRunOutcome["NotImpacted"] = 2] = "NotImpacted";
    /**
     * Runs with All tests in other category.
     */
    TestRunOutcome[TestRunOutcome["Others"] = 3] = "Others";
})(TestRunOutcome || (TestRunOutcome = {}));
/**
 * The types of publish context for run.
 */
export var TestRunPublishContext;
(function (TestRunPublishContext) {
    /**
     * Run is published for Build Context.
     */
    TestRunPublishContext[TestRunPublishContext["Build"] = 1] = "Build";
    /**
     * Run is published for Release Context.
     */
    TestRunPublishContext[TestRunPublishContext["Release"] = 2] = "Release";
    /**
     * Run is published for any Context.
     */
    TestRunPublishContext[TestRunPublishContext["All"] = 3] = "All";
})(TestRunPublishContext || (TestRunPublishContext = {}));
/**
 * The types of states for test run.
 */
export var TestRunState;
(function (TestRunState) {
    /**
     * Only used during an update to preserve the existing value.
     */
    TestRunState[TestRunState["Unspecified"] = 0] = "Unspecified";
    /**
     * The run is still being created.  No tests have started yet.
     */
    TestRunState[TestRunState["NotStarted"] = 1] = "NotStarted";
    /**
     * Tests are running.
     */
    TestRunState[TestRunState["InProgress"] = 2] = "InProgress";
    /**
     * All tests have completed or been skipped.
     */
    TestRunState[TestRunState["Completed"] = 3] = "Completed";
    /**
     * Run is stopped and remaining tests have been aborted
     */
    TestRunState[TestRunState["Aborted"] = 4] = "Aborted";
    /**
     * Run is currently initializing This is a legacy state and should not be used any more
     */
    TestRunState[TestRunState["Waiting"] = 5] = "Waiting";
    /**
     * Run requires investigation because of a test point failure This is a legacy state and should not be used any more
     */
    TestRunState[TestRunState["NeedsInvestigation"] = 6] = "NeedsInvestigation";
})(TestRunState || (TestRunState = {}));
/**
 * The types of sub states for test run. It gives the user more info about the test run beyond the high level test run state
 */
export var TestRunSubstate;
(function (TestRunSubstate) {
    /**
     * Run with noState.
     */
    TestRunSubstate[TestRunSubstate["None"] = 0] = "None";
    /**
     * Run state while Creating Environment.
     */
    TestRunSubstate[TestRunSubstate["CreatingEnvironment"] = 1] = "CreatingEnvironment";
    /**
     * Run state while Running Tests.
     */
    TestRunSubstate[TestRunSubstate["RunningTests"] = 2] = "RunningTests";
    /**
     * Run state while Creating Environment.
     */
    TestRunSubstate[TestRunSubstate["CanceledByUser"] = 3] = "CanceledByUser";
    /**
     * Run state when it is Aborted By the System.
     */
    TestRunSubstate[TestRunSubstate["AbortedBySystem"] = 4] = "AbortedBySystem";
    /**
     * Run state when run has timedOut.
     */
    TestRunSubstate[TestRunSubstate["TimedOut"] = 5] = "TimedOut";
    /**
     * Run state while Pending Analysis.
     */
    TestRunSubstate[TestRunSubstate["PendingAnalysis"] = 6] = "PendingAnalysis";
    /**
     * Run state after being Analysed.
     */
    TestRunSubstate[TestRunSubstate["Analyzed"] = 7] = "Analyzed";
    /**
     * Run state when cancellation is in Progress.
     */
    TestRunSubstate[TestRunSubstate["CancellationInProgress"] = 8] = "CancellationInProgress";
})(TestRunSubstate || (TestRunSubstate = {}));
/**
 * Represents the source from which the test session was created
 */
export var TestSessionSource;
(function (TestSessionSource) {
    /**
     * Source of test session uncertain as it is stale
     */
    TestSessionSource[TestSessionSource["Unknown"] = 0] = "Unknown";
    /**
     * The session was created from Microsoft Test Manager exploratory desktop tool.
     */
    TestSessionSource[TestSessionSource["XTDesktop"] = 1] = "XTDesktop";
    /**
     * The session was created from feedback client.
     */
    TestSessionSource[TestSessionSource["FeedbackDesktop"] = 2] = "FeedbackDesktop";
    /**
     * The session was created from browser extension.
     */
    TestSessionSource[TestSessionSource["XTWeb"] = 3] = "XTWeb";
    /**
     * The session was created from browser extension.
     */
    TestSessionSource[TestSessionSource["FeedbackWeb"] = 4] = "FeedbackWeb";
    /**
     * The session was created from web access using Microsoft Test Manager exploratory desktop tool.
     */
    TestSessionSource[TestSessionSource["XTDesktop2"] = 5] = "XTDesktop2";
    /**
     * To show sessions from all supported sources.
     */
    TestSessionSource[TestSessionSource["SessionInsightsForAll"] = 6] = "SessionInsightsForAll";
})(TestSessionSource || (TestSessionSource = {}));
/**
 * Represents the state of the test session.
 */
export var TestSessionState;
(function (TestSessionState) {
    /**
     * Only used during an update to preserve the existing value.
     */
    TestSessionState[TestSessionState["Unspecified"] = 0] = "Unspecified";
    /**
     * The session is still being created.
     */
    TestSessionState[TestSessionState["NotStarted"] = 1] = "NotStarted";
    /**
     * The session is running.
     */
    TestSessionState[TestSessionState["InProgress"] = 2] = "InProgress";
    /**
     * The session has paused.
     */
    TestSessionState[TestSessionState["Paused"] = 3] = "Paused";
    /**
     * The session has completed.
     */
    TestSessionState[TestSessionState["Completed"] = 4] = "Completed";
    /**
     * This is required for Feedback session which are declined
     */
    TestSessionState[TestSessionState["Declined"] = 5] = "Declined";
})(TestSessionState || (TestSessionState = {}));
