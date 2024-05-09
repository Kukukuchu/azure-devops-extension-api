/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
export var BillingMode;
(function (BillingMode) {
    /**
     * None implies the organization is not billable because no Azure Subscription has been set.
     */
    BillingMode[BillingMode["None"] = 0] = "None";
    /**
     * When an organization is the only organization mapped to an Azure Subscription.
     */
    BillingMode[BillingMode["SingleOrg"] = 1] = "SingleOrg";
    /**
     * When an organization is mapped to an Azure Subscription to which at least one other org is mapped.
     */
    BillingMode[BillingMode["MultiOrg"] = 2] = "MultiOrg";
})(BillingMode || (BillingMode = {}));
