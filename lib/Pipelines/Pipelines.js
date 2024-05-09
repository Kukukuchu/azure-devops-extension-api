/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
export var ConfigurationType;
(function (ConfigurationType) {
    /**
     * Unknown type.
     */
    ConfigurationType[ConfigurationType["Unknown"] = 0] = "Unknown";
    /**
     * YAML.
     */
    ConfigurationType[ConfigurationType["Yaml"] = 1] = "Yaml";
    /**
     * Designer JSON.
     */
    ConfigurationType[ConfigurationType["DesignerJson"] = 2] = "DesignerJson";
    /**
     * Just-in-time.
     */
    ConfigurationType[ConfigurationType["JustInTime"] = 3] = "JustInTime";
    /**
     * Designer-JSON.
     */
    ConfigurationType[ConfigurationType["DesignerHyphenJson"] = 2] = "DesignerHyphenJson";
})(ConfigurationType || (ConfigurationType = {}));
/**
 * Expansion options for GetArtifact and ListArtifacts.
 */
export var GetArtifactExpandOptions;
(function (GetArtifactExpandOptions) {
    /**
     * No expansion.
     */
    GetArtifactExpandOptions[GetArtifactExpandOptions["None"] = 0] = "None";
    /**
     * Include signed content.
     */
    GetArtifactExpandOptions[GetArtifactExpandOptions["SignedContent"] = 1] = "SignedContent";
})(GetArtifactExpandOptions || (GetArtifactExpandOptions = {}));
/**
 * $expand options for GetLog and ListLogs.
 */
export var GetLogExpandOptions;
(function (GetLogExpandOptions) {
    GetLogExpandOptions[GetLogExpandOptions["None"] = 0] = "None";
    GetLogExpandOptions[GetLogExpandOptions["SignedContent"] = 1] = "SignedContent";
})(GetLogExpandOptions || (GetLogExpandOptions = {}));
export var RepositoryType;
(function (RepositoryType) {
    RepositoryType[RepositoryType["Unknown"] = 0] = "Unknown";
    RepositoryType[RepositoryType["GitHub"] = 1] = "GitHub";
    RepositoryType[RepositoryType["AzureReposGit"] = 2] = "AzureReposGit";
    RepositoryType[RepositoryType["GitHubEnterprise"] = 3] = "GitHubEnterprise";
    RepositoryType[RepositoryType["AzureReposGitHyphenated"] = 2] = "AzureReposGitHyphenated";
})(RepositoryType || (RepositoryType = {}));
/**
 * This is not a Flags enum because we don't want to set multiple results on a build. However, when adding values, please stick to powers of 2 as if it were a Flags enum. This will make it easier to query multiple results.
 */
export var RunResult;
(function (RunResult) {
    RunResult[RunResult["Unknown"] = 0] = "Unknown";
    RunResult[RunResult["Succeeded"] = 1] = "Succeeded";
    RunResult[RunResult["Failed"] = 2] = "Failed";
    RunResult[RunResult["Canceled"] = 4] = "Canceled";
})(RunResult || (RunResult = {}));
/**
 * This is not a Flags enum because we don't want to set multiple states on a build. However, when adding values, please stick to powers of 2 as if it were a Flags enum. This will make it easier to query multiple states.
 */
export var RunState;
(function (RunState) {
    RunState[RunState["Unknown"] = 0] = "Unknown";
    RunState[RunState["InProgress"] = 1] = "InProgress";
    RunState[RunState["Canceling"] = 2] = "Canceling";
    RunState[RunState["Completed"] = 4] = "Completed";
})(RunState || (RunState = {}));
