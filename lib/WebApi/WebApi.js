/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
/**
 * Enumeration of the options that can be passed in on Connect.
 */
export var ConnectOptions;
(function (ConnectOptions) {
    /**
     * Retrieve no optional data.
     */
    ConnectOptions[ConnectOptions["None"] = 0] = "None";
    /**
     * Includes information about AccessMappings and ServiceDefinitions.
     */
    ConnectOptions[ConnectOptions["IncludeServices"] = 1] = "IncludeServices";
    /**
     * Includes the last user access for this host.
     */
    ConnectOptions[ConnectOptions["IncludeLastUserAccess"] = 2] = "IncludeLastUserAccess";
    /**
     * This is only valid on the deployment host and when true. Will only return inherited definitions.
     */
    ConnectOptions[ConnectOptions["IncludeInheritedDefinitionsOnly"] = 4] = "IncludeInheritedDefinitionsOnly";
    /**
     * When true will only return non inherited definitions. Only valid at non-deployment host.
     */
    ConnectOptions[ConnectOptions["IncludeNonInheritedDefinitionsOnly"] = 8] = "IncludeNonInheritedDefinitionsOnly";
})(ConnectOptions || (ConnectOptions = {}));
export var DeploymentFlags;
(function (DeploymentFlags) {
    DeploymentFlags[DeploymentFlags["None"] = 0] = "None";
    DeploymentFlags[DeploymentFlags["Hosted"] = 1] = "Hosted";
    DeploymentFlags[DeploymentFlags["OnPremises"] = 2] = "OnPremises";
})(DeploymentFlags || (DeploymentFlags = {}));
export var JWTAlgorithm;
(function (JWTAlgorithm) {
    JWTAlgorithm[JWTAlgorithm["None"] = 0] = "None";
    JWTAlgorithm[JWTAlgorithm["HS256"] = 1] = "HS256";
    JWTAlgorithm[JWTAlgorithm["RS256"] = 2] = "RS256";
})(JWTAlgorithm || (JWTAlgorithm = {}));
export var Operation;
(function (Operation) {
    Operation[Operation["Add"] = 0] = "Add";
    Operation[Operation["Remove"] = 1] = "Remove";
    Operation[Operation["Replace"] = 2] = "Replace";
    Operation[Operation["Move"] = 3] = "Move";
    Operation[Operation["Copy"] = 4] = "Copy";
    Operation[Operation["Test"] = 5] = "Test";
})(Operation || (Operation = {}));
export var UserProfileBackupState;
(function (UserProfileBackupState) {
    UserProfileBackupState[UserProfileBackupState["Inactive"] = 0] = "Inactive";
    UserProfileBackupState[UserProfileBackupState["Active"] = 1] = "Active";
})(UserProfileBackupState || (UserProfileBackupState = {}));
export var UserProfileSyncState;
(function (UserProfileSyncState) {
    UserProfileSyncState[UserProfileSyncState["None"] = 0] = "None";
    UserProfileSyncState[UserProfileSyncState["Completed"] = 1] = "Completed";
    UserProfileSyncState[UserProfileSyncState["NewProfileDataAndImageRetrieved"] = 2] = "NewProfileDataAndImageRetrieved";
    UserProfileSyncState[UserProfileSyncState["ProfileDataBackupDone"] = 3] = "ProfileDataBackupDone";
    UserProfileSyncState[UserProfileSyncState["NewProfileDataSet"] = 4] = "NewProfileDataSet";
    UserProfileSyncState[UserProfileSyncState["NewProfileDataUpdateFailed"] = 5] = "NewProfileDataUpdateFailed";
    UserProfileSyncState[UserProfileSyncState["NewProfileImageUpdateFailed"] = 6] = "NewProfileImageUpdateFailed";
})(UserProfileSyncState || (UserProfileSyncState = {}));
