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
export var AccessTokenRequestType;
(function (AccessTokenRequestType) {
    AccessTokenRequestType[AccessTokenRequestType["None"] = 0] = "None";
    AccessTokenRequestType[AccessTokenRequestType["Oauth"] = 1] = "Oauth";
    AccessTokenRequestType[AccessTokenRequestType["Direct"] = 2] = "Direct";
})(AccessTokenRequestType || (AccessTokenRequestType = {}));
export var OAuthConfigurationActionFilter;
(function (OAuthConfigurationActionFilter) {
    OAuthConfigurationActionFilter[OAuthConfigurationActionFilter["None"] = 0] = "None";
    OAuthConfigurationActionFilter[OAuthConfigurationActionFilter["Manage"] = 2] = "Manage";
    OAuthConfigurationActionFilter[OAuthConfigurationActionFilter["Use"] = 16] = "Use";
})(OAuthConfigurationActionFilter || (OAuthConfigurationActionFilter = {}));
export var ServiceEndpointActionFilter;
(function (ServiceEndpointActionFilter) {
    ServiceEndpointActionFilter[ServiceEndpointActionFilter["None"] = 0] = "None";
    ServiceEndpointActionFilter[ServiceEndpointActionFilter["Manage"] = 2] = "Manage";
    ServiceEndpointActionFilter[ServiceEndpointActionFilter["Use"] = 16] = "Use";
    ServiceEndpointActionFilter[ServiceEndpointActionFilter["View"] = 32] = "View";
})(ServiceEndpointActionFilter || (ServiceEndpointActionFilter = {}));
export var ServiceEndpointExecutionResult;
(function (ServiceEndpointExecutionResult) {
    /**
     * "Service endpoint request succeeded.
     */
    ServiceEndpointExecutionResult[ServiceEndpointExecutionResult["Succeeded"] = 0] = "Succeeded";
    /**
     * "Service endpoint request succeeded but with some issues.
     */
    ServiceEndpointExecutionResult[ServiceEndpointExecutionResult["SucceededWithIssues"] = 1] = "SucceededWithIssues";
    /**
     * "Service endpoint request failed.
     */
    ServiceEndpointExecutionResult[ServiceEndpointExecutionResult["Failed"] = 2] = "Failed";
    /**
     * "Service endpoint request was cancelled.
     */
    ServiceEndpointExecutionResult[ServiceEndpointExecutionResult["Canceled"] = 3] = "Canceled";
    /**
     * "Service endpoint request was skipped.
     */
    ServiceEndpointExecutionResult[ServiceEndpointExecutionResult["Skipped"] = 4] = "Skipped";
    /**
     * "Service endpoint request was abandoned.
     */
    ServiceEndpointExecutionResult[ServiceEndpointExecutionResult["Abandoned"] = 5] = "Abandoned";
})(ServiceEndpointExecutionResult || (ServiceEndpointExecutionResult = {}));
