/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
export var AadLoginPromptOption;
(function (AadLoginPromptOption) {
    /**
     * Do not provide a prompt option
     */
    AadLoginPromptOption[AadLoginPromptOption["NoOption"] = 0] = "NoOption";
    /**
     * Force the user to login again.
     */
    AadLoginPromptOption[AadLoginPromptOption["Login"] = 1] = "Login";
    /**
     * Force the user to select which account they are logging in with instead of automatically picking the user up from the session state. NOTE: This does not work for switching between the variants of a dual-homed user.
     */
    AadLoginPromptOption[AadLoginPromptOption["SelectAccount"] = 2] = "SelectAccount";
    /**
     * Force the user to login again. \<remarks\> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login. \</remarks\>
     */
    AadLoginPromptOption[AadLoginPromptOption["FreshLogin"] = 3] = "FreshLogin";
    /**
     * Force the user to login again with mfa. \<remarks\> Ignore current authentication state and force the user to authenticate again. This option should be used instead of Login, if MFA is required. \</remarks\>
     */
    AadLoginPromptOption[AadLoginPromptOption["FreshLoginWithMfa"] = 4] = "FreshLoginWithMfa";
})(AadLoginPromptOption || (AadLoginPromptOption = {}));
export var AuditAction;
(function (AuditAction) {
    AuditAction[AuditAction["Add"] = 1] = "Add";
    AuditAction[AuditAction["Update"] = 2] = "Update";
    AuditAction[AuditAction["Delete"] = 3] = "Delete";
    AuditAction[AuditAction["Undelete"] = 4] = "Undelete";
})(AuditAction || (AuditAction = {}));
export var DemandSourceType;
(function (DemandSourceType) {
    DemandSourceType[DemandSourceType["Task"] = 0] = "Task";
    DemandSourceType[DemandSourceType["Feature"] = 1] = "Feature";
})(DemandSourceType || (DemandSourceType = {}));
/**
 * This is useful in getting a list of deployment groups, filtered for which caller has permissions to take a particular action.
 */
export var DeploymentGroupActionFilter;
(function (DeploymentGroupActionFilter) {
    /**
     * All deployment groups.
     */
    DeploymentGroupActionFilter[DeploymentGroupActionFilter["None"] = 0] = "None";
    /**
     * Only deployment groups for which caller has **manage** permission.
     */
    DeploymentGroupActionFilter[DeploymentGroupActionFilter["Manage"] = 2] = "Manage";
    /**
     * Only deployment groups for which caller has **use** permission.
     */
    DeploymentGroupActionFilter[DeploymentGroupActionFilter["Use"] = 16] = "Use";
})(DeploymentGroupActionFilter || (DeploymentGroupActionFilter = {}));
/**
 * Properties to be included or expanded in deployment group objects. This is useful when getting a single or list of deployment grouops.
 */
export var DeploymentGroupExpands;
(function (DeploymentGroupExpands) {
    /**
     * No additional properties.
     */
    DeploymentGroupExpands[DeploymentGroupExpands["None"] = 0] = "None";
    /**
     * Deprecated: Include all the deployment targets.
     */
    DeploymentGroupExpands[DeploymentGroupExpands["Machines"] = 2] = "Machines";
    /**
     * Include unique list of tags across all deployment targets.
     */
    DeploymentGroupExpands[DeploymentGroupExpands["Tags"] = 4] = "Tags";
})(DeploymentGroupExpands || (DeploymentGroupExpands = {}));
export var DeploymentMachineExpands;
(function (DeploymentMachineExpands) {
    DeploymentMachineExpands[DeploymentMachineExpands["None"] = 0] = "None";
    DeploymentMachineExpands[DeploymentMachineExpands["Capabilities"] = 2] = "Capabilities";
    DeploymentMachineExpands[DeploymentMachineExpands["AssignedRequest"] = 4] = "AssignedRequest";
})(DeploymentMachineExpands || (DeploymentMachineExpands = {}));
/**
 * Properties to be included or expanded in deployment pool summary objects. This is useful when getting a single or list of deployment pool summaries.
 */
export var DeploymentPoolSummaryExpands;
(function (DeploymentPoolSummaryExpands) {
    /**
     * No additional properties
     */
    DeploymentPoolSummaryExpands[DeploymentPoolSummaryExpands["None"] = 0] = "None";
    /**
     * Include deployment groups referring to the deployment pool.
     */
    DeploymentPoolSummaryExpands[DeploymentPoolSummaryExpands["DeploymentGroups"] = 2] = "DeploymentGroups";
    /**
     * Include Resource referring to the deployment pool.
     */
    DeploymentPoolSummaryExpands[DeploymentPoolSummaryExpands["Resource"] = 4] = "Resource";
})(DeploymentPoolSummaryExpands || (DeploymentPoolSummaryExpands = {}));
/**
 * Properties to be included or expanded in deployment target objects. This is useful when getting a single or list of deployment targets.
 */
export var DeploymentTargetExpands;
(function (DeploymentTargetExpands) {
    /**
     * No additional properties.
     */
    DeploymentTargetExpands[DeploymentTargetExpands["None"] = 0] = "None";
    /**
     * Include capabilities of the deployment agent.
     */
    DeploymentTargetExpands[DeploymentTargetExpands["Capabilities"] = 2] = "Capabilities";
    /**
     * Include the job request assigned to the deployment agent.
     */
    DeploymentTargetExpands[DeploymentTargetExpands["AssignedRequest"] = 4] = "AssignedRequest";
    /**
     * Include the last completed job request of the deployment agent.
     */
    DeploymentTargetExpands[DeploymentTargetExpands["LastCompletedRequest"] = 8] = "LastCompletedRequest";
})(DeploymentTargetExpands || (DeploymentTargetExpands = {}));
export var ElasticAgentState;
(function (ElasticAgentState) {
    ElasticAgentState[ElasticAgentState["None"] = 0] = "None";
    ElasticAgentState[ElasticAgentState["Enabled"] = 1] = "Enabled";
    ElasticAgentState[ElasticAgentState["Online"] = 2] = "Online";
    ElasticAgentState[ElasticAgentState["Assigned"] = 4] = "Assigned";
})(ElasticAgentState || (ElasticAgentState = {}));
export var ElasticComputeState;
(function (ElasticComputeState) {
    ElasticComputeState[ElasticComputeState["None"] = 0] = "None";
    ElasticComputeState[ElasticComputeState["Healthy"] = 1] = "Healthy";
    ElasticComputeState[ElasticComputeState["Creating"] = 2] = "Creating";
    ElasticComputeState[ElasticComputeState["Deleting"] = 3] = "Deleting";
    ElasticComputeState[ElasticComputeState["Failed"] = 4] = "Failed";
    ElasticComputeState[ElasticComputeState["Stopped"] = 5] = "Stopped";
    ElasticComputeState[ElasticComputeState["Reimaging"] = 6] = "Reimaging";
    ElasticComputeState[ElasticComputeState["UnhealthyVm"] = 7] = "UnhealthyVm";
    ElasticComputeState[ElasticComputeState["UnhealthyVmssVm"] = 8] = "UnhealthyVmssVm";
})(ElasticComputeState || (ElasticComputeState = {}));
export var ElasticNodeState;
(function (ElasticNodeState) {
    ElasticNodeState[ElasticNodeState["None"] = 0] = "None";
    ElasticNodeState[ElasticNodeState["New"] = 1] = "New";
    ElasticNodeState[ElasticNodeState["CreatingCompute"] = 2] = "CreatingCompute";
    ElasticNodeState[ElasticNodeState["StartingAgent"] = 3] = "StartingAgent";
    ElasticNodeState[ElasticNodeState["Idle"] = 4] = "Idle";
    ElasticNodeState[ElasticNodeState["Assigned"] = 5] = "Assigned";
    ElasticNodeState[ElasticNodeState["Offline"] = 6] = "Offline";
    ElasticNodeState[ElasticNodeState["PendingReimage"] = 7] = "PendingReimage";
    ElasticNodeState[ElasticNodeState["PendingDelete"] = 8] = "PendingDelete";
    ElasticNodeState[ElasticNodeState["Saved"] = 9] = "Saved";
    ElasticNodeState[ElasticNodeState["DeletingCompute"] = 10] = "DeletingCompute";
    ElasticNodeState[ElasticNodeState["Deleted"] = 11] = "Deleted";
    ElasticNodeState[ElasticNodeState["Lost"] = 12] = "Lost";
    ElasticNodeState[ElasticNodeState["ReimagingCompute"] = 13] = "ReimagingCompute";
    ElasticNodeState[ElasticNodeState["RestartingAgent"] = 14] = "RestartingAgent";
    ElasticNodeState[ElasticNodeState["FailedToStartPendingDelete"] = 15] = "FailedToStartPendingDelete";
    ElasticNodeState[ElasticNodeState["FailedToRestartPendingDelete"] = 16] = "FailedToRestartPendingDelete";
    ElasticNodeState[ElasticNodeState["FailedVMPendingDelete"] = 17] = "FailedVMPendingDelete";
    ElasticNodeState[ElasticNodeState["AssignedPendingDelete"] = 18] = "AssignedPendingDelete";
    ElasticNodeState[ElasticNodeState["RetryDelete"] = 19] = "RetryDelete";
    ElasticNodeState[ElasticNodeState["UnhealthyVm"] = 20] = "UnhealthyVm";
    ElasticNodeState[ElasticNodeState["UnhealthyVmPendingDelete"] = 21] = "UnhealthyVmPendingDelete";
})(ElasticNodeState || (ElasticNodeState = {}));
export var ElasticPoolState;
(function (ElasticPoolState) {
    /**
     * Online and healthy
     */
    ElasticPoolState[ElasticPoolState["Online"] = 0] = "Online";
    ElasticPoolState[ElasticPoolState["Offline"] = 1] = "Offline";
    ElasticPoolState[ElasticPoolState["Unhealthy"] = 2] = "Unhealthy";
    ElasticPoolState[ElasticPoolState["New"] = 3] = "New";
})(ElasticPoolState || (ElasticPoolState = {}));
/**
 * This is useful in getting a list of Environments, filtered for which caller has permissions to take a particular action.
 */
export var EnvironmentActionFilter;
(function (EnvironmentActionFilter) {
    /**
     * All environments for which user has **view** permission.
     */
    EnvironmentActionFilter[EnvironmentActionFilter["None"] = 0] = "None";
    /**
     * Only environments for which caller has **manage** permission.
     */
    EnvironmentActionFilter[EnvironmentActionFilter["Manage"] = 2] = "Manage";
    /**
     * Only environments for which caller has **use** permission.
     */
    EnvironmentActionFilter[EnvironmentActionFilter["Use"] = 16] = "Use";
})(EnvironmentActionFilter || (EnvironmentActionFilter = {}));
/**
 * Properties to be included or expanded in environment objects. This is useful when getting a single environment.
 */
export var EnvironmentExpands;
(function (EnvironmentExpands) {
    /**
     * No additional properties
     */
    EnvironmentExpands[EnvironmentExpands["None"] = 0] = "None";
    /**
     * Include resource references referring to the environment.
     */
    EnvironmentExpands[EnvironmentExpands["ResourceReferences"] = 1] = "ResourceReferences";
})(EnvironmentExpands || (EnvironmentExpands = {}));
/**
 * EnvironmentResourceType.
 */
export var EnvironmentResourceType;
(function (EnvironmentResourceType) {
    EnvironmentResourceType[EnvironmentResourceType["Undefined"] = 0] = "Undefined";
    /**
     * Unknown resource type
     */
    EnvironmentResourceType[EnvironmentResourceType["Generic"] = 1] = "Generic";
    /**
     * Virtual machine resource type
     */
    EnvironmentResourceType[EnvironmentResourceType["VirtualMachine"] = 2] = "VirtualMachine";
    /**
     * Kubernetes resource type
     */
    EnvironmentResourceType[EnvironmentResourceType["Kubernetes"] = 4] = "Kubernetes";
})(EnvironmentResourceType || (EnvironmentResourceType = {}));
export var ExclusiveLockType;
(function (ExclusiveLockType) {
    ExclusiveLockType[ExclusiveLockType["RunLatest"] = 0] = "RunLatest";
    ExclusiveLockType[ExclusiveLockType["Sequential"] = 1] = "Sequential";
    ExclusiveLockType[ExclusiveLockType["BranchRunLatest"] = 2] = "BranchRunLatest";
    ExclusiveLockType[ExclusiveLockType["Parallel"] = 3] = "Parallel";
})(ExclusiveLockType || (ExclusiveLockType = {}));
/**
 * The type of issue based on severity.
 */
export var IssueType;
(function (IssueType) {
    IssueType[IssueType["Error"] = 1] = "Error";
    IssueType[IssueType["Warning"] = 2] = "Warning";
})(IssueType || (IssueType = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Error"] = 0] = "Error";
    LogLevel[LogLevel["Warning"] = 1] = "Warning";
    LogLevel[LogLevel["Info"] = 2] = "Info";
})(LogLevel || (LogLevel = {}));
export var MachineGroupActionFilter;
(function (MachineGroupActionFilter) {
    MachineGroupActionFilter[MachineGroupActionFilter["None"] = 0] = "None";
    MachineGroupActionFilter[MachineGroupActionFilter["Manage"] = 2] = "Manage";
    MachineGroupActionFilter[MachineGroupActionFilter["Use"] = 16] = "Use";
})(MachineGroupActionFilter || (MachineGroupActionFilter = {}));
export var MaskType;
(function (MaskType) {
    MaskType[MaskType["Variable"] = 1] = "Variable";
    MaskType[MaskType["Regex"] = 2] = "Regex";
})(MaskType || (MaskType = {}));
export var OperatingSystemType;
(function (OperatingSystemType) {
    OperatingSystemType[OperatingSystemType["Windows"] = 0] = "Windows";
    OperatingSystemType[OperatingSystemType["Linux"] = 1] = "Linux";
})(OperatingSystemType || (OperatingSystemType = {}));
export var OperationType;
(function (OperationType) {
    OperationType[OperationType["ConfigurationJob"] = 0] = "ConfigurationJob";
    OperationType[OperationType["SizingJob"] = 1] = "SizingJob";
    OperationType[OperationType["IncreaseCapacity"] = 2] = "IncreaseCapacity";
    OperationType[OperationType["Reimage"] = 3] = "Reimage";
    OperationType[OperationType["DeleteVMs"] = 4] = "DeleteVMs";
})(OperationType || (OperationType = {}));
export var OrchestrationType;
(function (OrchestrationType) {
    OrchestrationType[OrchestrationType["Uniform"] = 0] = "Uniform";
    OrchestrationType[OrchestrationType["Flexible"] = 1] = "Flexible";
})(OrchestrationType || (OrchestrationType = {}));
export var PlanGroupStatus;
(function (PlanGroupStatus) {
    PlanGroupStatus[PlanGroupStatus["Running"] = 1] = "Running";
    PlanGroupStatus[PlanGroupStatus["Queued"] = 2] = "Queued";
    PlanGroupStatus[PlanGroupStatus["All"] = 3] = "All";
})(PlanGroupStatus || (PlanGroupStatus = {}));
export var PlanGroupStatusFilter;
(function (PlanGroupStatusFilter) {
    PlanGroupStatusFilter[PlanGroupStatusFilter["Running"] = 1] = "Running";
    PlanGroupStatusFilter[PlanGroupStatusFilter["Queued"] = 2] = "Queued";
    PlanGroupStatusFilter[PlanGroupStatusFilter["All"] = 3] = "All";
})(PlanGroupStatusFilter || (PlanGroupStatusFilter = {}));
export var ResourceLockStatus;
(function (ResourceLockStatus) {
    ResourceLockStatus[ResourceLockStatus["Queued"] = 0] = "Queued";
    ResourceLockStatus[ResourceLockStatus["InUse"] = 1] = "InUse";
    ResourceLockStatus[ResourceLockStatus["Finished"] = 2] = "Finished";
    ResourceLockStatus[ResourceLockStatus["TimedOut"] = 3] = "TimedOut";
    ResourceLockStatus[ResourceLockStatus["Canceled"] = 4] = "Canceled";
    ResourceLockStatus[ResourceLockStatus["Abandoned"] = 5] = "Abandoned";
    ResourceLockStatus[ResourceLockStatus["WaitingOnChecks"] = 6] = "WaitingOnChecks";
})(ResourceLockStatus || (ResourceLockStatus = {}));
export var SecureFileActionFilter;
(function (SecureFileActionFilter) {
    SecureFileActionFilter[SecureFileActionFilter["None"] = 0] = "None";
    SecureFileActionFilter[SecureFileActionFilter["Manage"] = 2] = "Manage";
    SecureFileActionFilter[SecureFileActionFilter["Use"] = 16] = "Use";
})(SecureFileActionFilter || (SecureFileActionFilter = {}));
/**
 * This is useful in getting a list of deployment targets, filtered by the result of their last job.
 */
export var TaskAgentJobResultFilter;
(function (TaskAgentJobResultFilter) {
    /**
     * Only those deployment targets on which last job failed (**Abandoned**, **Canceled**, **Failed**, **Skipped**).
     */
    TaskAgentJobResultFilter[TaskAgentJobResultFilter["Failed"] = 1] = "Failed";
    /**
     * Only those deployment targets on which last job Passed (**Succeeded**, **Succeeded with issues**).
     */
    TaskAgentJobResultFilter[TaskAgentJobResultFilter["Passed"] = 2] = "Passed";
    /**
     * Only those deployment targets that never executed a job.
     */
    TaskAgentJobResultFilter[TaskAgentJobResultFilter["NeverDeployed"] = 4] = "NeverDeployed";
    /**
     * All deployment targets.
     */
    TaskAgentJobResultFilter[TaskAgentJobResultFilter["All"] = 7] = "All";
})(TaskAgentJobResultFilter || (TaskAgentJobResultFilter = {}));
export var TaskAgentJobStepType;
(function (TaskAgentJobStepType) {
    TaskAgentJobStepType[TaskAgentJobStepType["Task"] = 1] = "Task";
    TaskAgentJobStepType[TaskAgentJobStepType["Action"] = 2] = "Action";
})(TaskAgentJobStepType || (TaskAgentJobStepType = {}));
/**
 * Filters pools based on whether the calling user has permission to use or manage the pool.
 */
export var TaskAgentPoolActionFilter;
(function (TaskAgentPoolActionFilter) {
    TaskAgentPoolActionFilter[TaskAgentPoolActionFilter["None"] = 0] = "None";
    TaskAgentPoolActionFilter[TaskAgentPoolActionFilter["Manage"] = 2] = "Manage";
    TaskAgentPoolActionFilter[TaskAgentPoolActionFilter["Use"] = 16] = "Use";
})(TaskAgentPoolActionFilter || (TaskAgentPoolActionFilter = {}));
export var TaskAgentPoolMaintenanceJobResult;
(function (TaskAgentPoolMaintenanceJobResult) {
    TaskAgentPoolMaintenanceJobResult[TaskAgentPoolMaintenanceJobResult["Succeeded"] = 1] = "Succeeded";
    TaskAgentPoolMaintenanceJobResult[TaskAgentPoolMaintenanceJobResult["Failed"] = 2] = "Failed";
    TaskAgentPoolMaintenanceJobResult[TaskAgentPoolMaintenanceJobResult["Canceled"] = 4] = "Canceled";
})(TaskAgentPoolMaintenanceJobResult || (TaskAgentPoolMaintenanceJobResult = {}));
export var TaskAgentPoolMaintenanceJobStatus;
(function (TaskAgentPoolMaintenanceJobStatus) {
    TaskAgentPoolMaintenanceJobStatus[TaskAgentPoolMaintenanceJobStatus["InProgress"] = 1] = "InProgress";
    TaskAgentPoolMaintenanceJobStatus[TaskAgentPoolMaintenanceJobStatus["Completed"] = 2] = "Completed";
    TaskAgentPoolMaintenanceJobStatus[TaskAgentPoolMaintenanceJobStatus["Cancelling"] = 4] = "Cancelling";
    TaskAgentPoolMaintenanceJobStatus[TaskAgentPoolMaintenanceJobStatus["Queued"] = 8] = "Queued";
})(TaskAgentPoolMaintenanceJobStatus || (TaskAgentPoolMaintenanceJobStatus = {}));
export var TaskAgentPoolMaintenanceScheduleDays;
(function (TaskAgentPoolMaintenanceScheduleDays) {
    /**
     * Do not run.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["None"] = 0] = "None";
    /**
     * Run on Monday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Monday"] = 1] = "Monday";
    /**
     * Run on Tuesday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Tuesday"] = 2] = "Tuesday";
    /**
     * Run on Wednesday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Wednesday"] = 4] = "Wednesday";
    /**
     * Run on Thursday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Thursday"] = 8] = "Thursday";
    /**
     * Run on Friday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Friday"] = 16] = "Friday";
    /**
     * Run on Saturday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Saturday"] = 32] = "Saturday";
    /**
     * Run on Sunday.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["Sunday"] = 64] = "Sunday";
    /**
     * Run on all days of the week.
     */
    TaskAgentPoolMaintenanceScheduleDays[TaskAgentPoolMaintenanceScheduleDays["All"] = 127] = "All";
})(TaskAgentPoolMaintenanceScheduleDays || (TaskAgentPoolMaintenanceScheduleDays = {}));
/**
 * Additional settings and descriptors for a TaskAgentPool
 */
export var TaskAgentPoolOptions;
(function (TaskAgentPoolOptions) {
    TaskAgentPoolOptions[TaskAgentPoolOptions["None"] = 0] = "None";
    /**
     * TaskAgentPool backed by the Elastic pool service
     */
    TaskAgentPoolOptions[TaskAgentPoolOptions["ElasticPool"] = 1] = "ElasticPool";
    /**
     * Set to true if agents are re-imaged after each TaskAgentJobRequest
     */
    TaskAgentPoolOptions[TaskAgentPoolOptions["SingleUseAgents"] = 2] = "SingleUseAgents";
    /**
     * Set to true if agents are held for investigation after a TaskAgentJobRequest failure
     */
    TaskAgentPoolOptions[TaskAgentPoolOptions["PreserveAgentOnJobFailure"] = 4] = "PreserveAgentOnJobFailure";
})(TaskAgentPoolOptions || (TaskAgentPoolOptions = {}));
/**
 * The type of agent pool.
 */
export var TaskAgentPoolType;
(function (TaskAgentPoolType) {
    /**
     * A typical pool of task agents
     */
    TaskAgentPoolType[TaskAgentPoolType["Automation"] = 1] = "Automation";
    /**
     * A deployment pool
     */
    TaskAgentPoolType[TaskAgentPoolType["Deployment"] = 2] = "Deployment";
})(TaskAgentPoolType || (TaskAgentPoolType = {}));
/**
 * Filters queues based on whether the calling user has permission to use or manage the queue.
 */
export var TaskAgentQueueActionFilter;
(function (TaskAgentQueueActionFilter) {
    TaskAgentQueueActionFilter[TaskAgentQueueActionFilter["None"] = 0] = "None";
    TaskAgentQueueActionFilter[TaskAgentQueueActionFilter["Manage"] = 2] = "Manage";
    TaskAgentQueueActionFilter[TaskAgentQueueActionFilter["Use"] = 16] = "Use";
})(TaskAgentQueueActionFilter || (TaskAgentQueueActionFilter = {}));
export var TaskAgentRequestUpdateOptions;
(function (TaskAgentRequestUpdateOptions) {
    TaskAgentRequestUpdateOptions[TaskAgentRequestUpdateOptions["None"] = 0] = "None";
    TaskAgentRequestUpdateOptions[TaskAgentRequestUpdateOptions["BumpRequestToTop"] = 1] = "BumpRequestToTop";
})(TaskAgentRequestUpdateOptions || (TaskAgentRequestUpdateOptions = {}));
export var TaskAgentStatus;
(function (TaskAgentStatus) {
    TaskAgentStatus[TaskAgentStatus["Offline"] = 1] = "Offline";
    TaskAgentStatus[TaskAgentStatus["Online"] = 2] = "Online";
})(TaskAgentStatus || (TaskAgentStatus = {}));
/**
 * This is useful in getting a list of deployment targets, filtered by the deployment agent status.
 */
export var TaskAgentStatusFilter;
(function (TaskAgentStatusFilter) {
    /**
     * Only deployment targets that are offline.
     */
    TaskAgentStatusFilter[TaskAgentStatusFilter["Offline"] = 1] = "Offline";
    /**
     * Only deployment targets that are online.
     */
    TaskAgentStatusFilter[TaskAgentStatusFilter["Online"] = 2] = "Online";
    /**
     * All deployment targets.
     */
    TaskAgentStatusFilter[TaskAgentStatusFilter["All"] = 3] = "All";
})(TaskAgentStatusFilter || (TaskAgentStatusFilter = {}));
export var TaskAgentUpdateReasonType;
(function (TaskAgentUpdateReasonType) {
    TaskAgentUpdateReasonType[TaskAgentUpdateReasonType["Manual"] = 1] = "Manual";
    TaskAgentUpdateReasonType[TaskAgentUpdateReasonType["MinAgentVersionRequired"] = 2] = "MinAgentVersionRequired";
    TaskAgentUpdateReasonType[TaskAgentUpdateReasonType["Downgrade"] = 3] = "Downgrade";
})(TaskAgentUpdateReasonType || (TaskAgentUpdateReasonType = {}));
export var TaskCommandMode;
(function (TaskCommandMode) {
    TaskCommandMode[TaskCommandMode["Any"] = 0] = "Any";
    TaskCommandMode[TaskCommandMode["Restricted"] = 1] = "Restricted";
})(TaskCommandMode || (TaskCommandMode = {}));
export var TaskDefinitionStatus;
(function (TaskDefinitionStatus) {
    TaskDefinitionStatus[TaskDefinitionStatus["Preinstalled"] = 1] = "Preinstalled";
    TaskDefinitionStatus[TaskDefinitionStatus["ReceivedInstallOrUpdate"] = 2] = "ReceivedInstallOrUpdate";
    TaskDefinitionStatus[TaskDefinitionStatus["Installed"] = 3] = "Installed";
    TaskDefinitionStatus[TaskDefinitionStatus["ReceivedUninstall"] = 4] = "ReceivedUninstall";
    TaskDefinitionStatus[TaskDefinitionStatus["Uninstalled"] = 5] = "Uninstalled";
    TaskDefinitionStatus[TaskDefinitionStatus["RequestedUpdate"] = 6] = "RequestedUpdate";
    TaskDefinitionStatus[TaskDefinitionStatus["Updated"] = 7] = "Updated";
    TaskDefinitionStatus[TaskDefinitionStatus["AlreadyUpToDate"] = 8] = "AlreadyUpToDate";
    TaskDefinitionStatus[TaskDefinitionStatus["InlineUpdateReceived"] = 9] = "InlineUpdateReceived";
})(TaskDefinitionStatus || (TaskDefinitionStatus = {}));
export var TaskGroupExpands;
(function (TaskGroupExpands) {
    TaskGroupExpands[TaskGroupExpands["None"] = 0] = "None";
    TaskGroupExpands[TaskGroupExpands["Tasks"] = 2] = "Tasks";
})(TaskGroupExpands || (TaskGroupExpands = {}));
/**
 * Specifies the desired ordering of taskGroups.
 */
export var TaskGroupQueryOrder;
(function (TaskGroupQueryOrder) {
    /**
     * Order by createdon ascending.
     */
    TaskGroupQueryOrder[TaskGroupQueryOrder["CreatedOnAscending"] = 0] = "CreatedOnAscending";
    /**
     * Order by createdon descending.
     */
    TaskGroupQueryOrder[TaskGroupQueryOrder["CreatedOnDescending"] = 1] = "CreatedOnDescending";
})(TaskGroupQueryOrder || (TaskGroupQueryOrder = {}));
export var TaskOrchestrationItemType;
(function (TaskOrchestrationItemType) {
    TaskOrchestrationItemType[TaskOrchestrationItemType["Container"] = 0] = "Container";
    TaskOrchestrationItemType[TaskOrchestrationItemType["Job"] = 1] = "Job";
})(TaskOrchestrationItemType || (TaskOrchestrationItemType = {}));
export var TaskOrchestrationPlanState;
(function (TaskOrchestrationPlanState) {
    TaskOrchestrationPlanState[TaskOrchestrationPlanState["InProgress"] = 1] = "InProgress";
    TaskOrchestrationPlanState[TaskOrchestrationPlanState["Queued"] = 2] = "Queued";
    TaskOrchestrationPlanState[TaskOrchestrationPlanState["Completed"] = 4] = "Completed";
    TaskOrchestrationPlanState[TaskOrchestrationPlanState["Throttled"] = 8] = "Throttled";
})(TaskOrchestrationPlanState || (TaskOrchestrationPlanState = {}));
/**
 * The result of an operation tracked by a timeline record.
 */
export var TaskResult;
(function (TaskResult) {
    TaskResult[TaskResult["Succeeded"] = 0] = "Succeeded";
    TaskResult[TaskResult["SucceededWithIssues"] = 1] = "SucceededWithIssues";
    TaskResult[TaskResult["Failed"] = 2] = "Failed";
    TaskResult[TaskResult["Canceled"] = 3] = "Canceled";
    TaskResult[TaskResult["Skipped"] = 4] = "Skipped";
    TaskResult[TaskResult["Abandoned"] = 5] = "Abandoned";
})(TaskResult || (TaskResult = {}));
/**
 * The state of the timeline record.
 */
export var TimelineRecordState;
(function (TimelineRecordState) {
    TimelineRecordState[TimelineRecordState["Pending"] = 0] = "Pending";
    TimelineRecordState[TimelineRecordState["InProgress"] = 1] = "InProgress";
    TimelineRecordState[TimelineRecordState["Completed"] = 2] = "Completed";
})(TimelineRecordState || (TimelineRecordState = {}));
export var VariableGroupActionFilter;
(function (VariableGroupActionFilter) {
    VariableGroupActionFilter[VariableGroupActionFilter["None"] = 0] = "None";
    VariableGroupActionFilter[VariableGroupActionFilter["Manage"] = 2] = "Manage";
    VariableGroupActionFilter[VariableGroupActionFilter["Use"] = 16] = "Use";
})(VariableGroupActionFilter || (VariableGroupActionFilter = {}));
/**
 * Specifies the desired ordering of variableGroups.
 */
export var VariableGroupQueryOrder;
(function (VariableGroupQueryOrder) {
    /**
     * Order by id ascending.
     */
    VariableGroupQueryOrder[VariableGroupQueryOrder["IdAscending"] = 0] = "IdAscending";
    /**
     * Order by id descending.
     */
    VariableGroupQueryOrder[VariableGroupQueryOrder["IdDescending"] = 1] = "IdDescending";
})(VariableGroupQueryOrder || (VariableGroupQueryOrder = {}));
