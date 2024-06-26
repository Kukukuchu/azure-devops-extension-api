/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
/**
 * The current state of a feature within a given scope
 */
export var ContributedFeatureEnabledValue;
(function (ContributedFeatureEnabledValue) {
    /**
     * The state of the feature is not set for the specified scope
     */
    ContributedFeatureEnabledValue[ContributedFeatureEnabledValue["Undefined"] = -1] = "Undefined";
    /**
     * The feature is disabled at the specified scope
     */
    ContributedFeatureEnabledValue[ContributedFeatureEnabledValue["Disabled"] = 0] = "Disabled";
    /**
     * The feature is enabled at the specified scope
     */
    ContributedFeatureEnabledValue[ContributedFeatureEnabledValue["Enabled"] = 1] = "Enabled";
})(ContributedFeatureEnabledValue || (ContributedFeatureEnabledValue = {}));
