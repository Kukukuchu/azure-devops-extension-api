/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
export var AlertType;
(function (AlertType) {
    /**
     * The code has an unspecified vulnerability type
     */
    AlertType[AlertType["Unknown"] = 0] = "Unknown";
    /**
     * The code uses a dependency with a known vulnerability.
     */
    AlertType[AlertType["Dependency"] = 1] = "Dependency";
    /**
     * The code contains a secret that has now been compromised and must be revoked.
     */
    AlertType[AlertType["Secret"] = 2] = "Secret";
    /**
     * The code contains a weakness determined by static analysis.
     */
    AlertType[AlertType["Code"] = 3] = "Code";
})(AlertType || (AlertType = {}));
export var AnalysisConfigurationType;
(function (AnalysisConfigurationType) {
    /**
     * Default analysis configuration that is not attached to any other configuration data
     */
    AnalysisConfigurationType[AnalysisConfigurationType["Default"] = 0] = "Default";
    /**
     * Ado Pipeline, contains branch, pipeline, phase, and ADOPipelineId
     */
    AnalysisConfigurationType[AnalysisConfigurationType["AdoPipeline"] = 1] = "AdoPipeline";
})(AnalysisConfigurationType || (AnalysisConfigurationType = {}));
/**
 * This enum defines the dependency components.
 */
export var ComponentType;
(function (ComponentType) {
    ComponentType[ComponentType["Unknown"] = 0] = "Unknown";
    ComponentType[ComponentType["NuGet"] = 1] = "NuGet";
    /**
     * Indicates the component is an Npm package.
     */
    ComponentType[ComponentType["Npm"] = 2] = "Npm";
    /**
     * Indicates the component is a Maven artifact.
     */
    ComponentType[ComponentType["Maven"] = 3] = "Maven";
    /**
     * Indicates the component is a Git repository.
     */
    ComponentType[ComponentType["Git"] = 4] = "Git";
    /**
     * Indicates the component is not any of the supported component types by Governance.
     */
    ComponentType[ComponentType["Other"] = 5] = "Other";
    /**
     * Indicates the component is a Ruby gem.
     */
    ComponentType[ComponentType["RubyGems"] = 6] = "RubyGems";
    /**
     * Indicates the component is a Cargo package.
     */
    ComponentType[ComponentType["Cargo"] = 7] = "Cargo";
    /**
     * Indicates the component is a Pip package.
     */
    ComponentType[ComponentType["Pip"] = 8] = "Pip";
    /**
     * Indicates the component is a loose file. Not a package as understood by different package managers.
     */
    ComponentType[ComponentType["File"] = 9] = "File";
    /**
     * Indicates the component is a Go package.
     */
    ComponentType[ComponentType["Go"] = 10] = "Go";
    /**
     * Indicates the component is a Docker Image
     */
    ComponentType[ComponentType["DockerImage"] = 11] = "DockerImage";
    /**
     * Indicates the component is a CocoaPods pod.
     */
    ComponentType[ComponentType["Pod"] = 12] = "Pod";
    /**
     * Indicates the component is found in a linux environment. A package understood by linux based package managers like apt and rpm.
     */
    ComponentType[ComponentType["Linux"] = 13] = "Linux";
    /**
     * Indicates the component is a Conda package.
     */
    ComponentType[ComponentType["Conda"] = 14] = "Conda";
    /**
     * Indicates the component is a Docker Reference.
     */
    ComponentType[ComponentType["DockerReference"] = 15] = "DockerReference";
    /**
     * Indicates the component is a Vcpkg Package.
     */
    ComponentType[ComponentType["Vcpkg"] = 16] = "Vcpkg";
})(ComponentType || (ComponentType = {}));
export var Confidence;
(function (Confidence) {
    /**
     * High confidence level for alert
     */
    Confidence[Confidence["High"] = 0] = "High";
    /**
     * Other confidence level for alert
     */
    Confidence[Confidence["Other"] = 1] = "Other";
})(Confidence || (Confidence = {}));
export var DismissalType;
(function (DismissalType) {
    /**
     * Dismissal type unknown
     */
    DismissalType[DismissalType["Unknown"] = 0] = "Unknown";
    /**
     * Dismissal indicating alert has been fixed
     */
    DismissalType[DismissalType["Fixed"] = 1] = "Fixed";
    /**
     * Dismissal indicating user is accepting a risk for the alert
     */
    DismissalType[DismissalType["AcceptedRisk"] = 2] = "AcceptedRisk";
    /**
     * Dismissal indicating alert is a false positive and will likely not be fixed.
     */
    DismissalType[DismissalType["FalsePositive"] = 3] = "FalsePositive";
})(DismissalType || (DismissalType = {}));
export var ExpandOption;
(function (ExpandOption) {
    /**
     * No Expands.
     */
    ExpandOption[ExpandOption["None"] = 0] = "None";
    /**
     * Return validationFingerprints in Alert.
     */
    ExpandOption[ExpandOption["ValidationFingerprint"] = 1] = "ValidationFingerprint";
})(ExpandOption || (ExpandOption = {}));
/**
 * The type of change that occurred to the metadata.
 */
export var MetadataChangeType;
(function (MetadataChangeType) {
    MetadataChangeType[MetadataChangeType["None"] = 0] = "None";
    MetadataChangeType[MetadataChangeType["Created"] = 1] = "Created";
    MetadataChangeType[MetadataChangeType["Updated"] = 2] = "Updated";
    MetadataChangeType[MetadataChangeType["Deleted"] = 3] = "Deleted";
})(MetadataChangeType || (MetadataChangeType = {}));
/**
 * The operation to be performed on the metadata.
 */
export var MetadataOperation;
(function (MetadataOperation) {
    /**
     * Represents the defualt value if the operation is not specified or not supported.
     */
    MetadataOperation[MetadataOperation["None"] = 0] = "None";
    /**
     * Represents the addition of the metadata.
     */
    MetadataOperation[MetadataOperation["Add"] = 1] = "Add";
    /**
     * Represents the removal of the metadata.
     */
    MetadataOperation[MetadataOperation["Remove"] = 2] = "Remove";
})(MetadataOperation || (MetadataOperation = {}));
/**
 * This enum defines the different result types.
 */
export var ResultType;
(function (ResultType) {
    /**
     * The result was found from an unspecified analysis type
     */
    ResultType[ResultType["Unknown"] = 0] = "Unknown";
    /**
     * The result was found from dependency analysis
     */
    ResultType[ResultType["Dependency"] = 1] = "Dependency";
    /**
     * The result was found from static code analysis
     */
    ResultType[ResultType["VersionControl"] = 2] = "VersionControl";
})(ResultType || (ResultType = {}));
export var SarifJobStatus;
(function (SarifJobStatus) {
    /**
     * The job type when it is new
     */
    SarifJobStatus[SarifJobStatus["New"] = 0] = "New";
    /**
     * The job type when it is queued
     */
    SarifJobStatus[SarifJobStatus["Queued"] = 1] = "Queued";
    /**
     * The job type when it is completed
     */
    SarifJobStatus[SarifJobStatus["Completed"] = 2] = "Completed";
    /**
     * The job type when it fails
     */
    SarifJobStatus[SarifJobStatus["Failed"] = 3] = "Failed";
})(SarifJobStatus || (SarifJobStatus = {}));
export var Severity;
(function (Severity) {
    Severity[Severity["Low"] = 0] = "Low";
    Severity[Severity["Medium"] = 1] = "Medium";
    Severity[Severity["High"] = 2] = "High";
    Severity[Severity["Critical"] = 3] = "Critical";
    Severity[Severity["Note"] = 4] = "Note";
    Severity[Severity["Warning"] = 5] = "Warning";
    Severity[Severity["Error"] = 6] = "Error";
})(Severity || (Severity = {}));
export var State;
(function (State) {
    /**
     * Alert is in an indeterminate state
     */
    State[State["Unknown"] = 0] = "Unknown";
    /**
     * Alert has been detected in the code
     */
    State[State["Active"] = 1] = "Active";
    /**
     * Alert was dismissed by a user
     */
    State[State["Dismissed"] = 2] = "Dismissed";
    /**
     * The issue is no longer detected in the code
     */
    State[State["Fixed"] = 4] = "Fixed";
    /**
     * The tool has determined that the issue is no longer a risk
     */
    State[State["AutoDismissed"] = 8] = "AutoDismissed";
})(State || (State = {}));
