/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
export var AccountStatus;
(function (AccountStatus) {
    AccountStatus[AccountStatus["None"] = 0] = "None";
    /**
     * This hosting account is active and assigned to a customer.
     */
    AccountStatus[AccountStatus["Enabled"] = 1] = "Enabled";
    /**
     * This hosting account is disabled.
     */
    AccountStatus[AccountStatus["Disabled"] = 2] = "Disabled";
    /**
     * This account is part of deletion batch and scheduled for deletion.
     */
    AccountStatus[AccountStatus["Deleted"] = 3] = "Deleted";
    /**
     * This account is not mastered locally and has physically moved.
     */
    AccountStatus[AccountStatus["Moved"] = 4] = "Moved";
})(AccountStatus || (AccountStatus = {}));
export var AccountType;
(function (AccountType) {
    AccountType[AccountType["Personal"] = 0] = "Personal";
    AccountType[AccountType["Organization"] = 1] = "Organization";
})(AccountType || (AccountType = {}));
export var AccountUserStatus;
(function (AccountUserStatus) {
    AccountUserStatus[AccountUserStatus["None"] = 0] = "None";
    /**
     * User has signed in at least once to the VSTS account
     */
    AccountUserStatus[AccountUserStatus["Active"] = 1] = "Active";
    /**
     * User cannot sign in; primarily used by admin to temporarily remove a user due to absence or license reallocation
     */
    AccountUserStatus[AccountUserStatus["Disabled"] = 2] = "Disabled";
    /**
     * User is removed from the VSTS account by the VSTS account admin
     */
    AccountUserStatus[AccountUserStatus["Deleted"] = 3] = "Deleted";
    /**
     * User is invited to join the VSTS account by the VSTS account admin, but has not signed up/signed in yet
     */
    AccountUserStatus[AccountUserStatus["Pending"] = 4] = "Pending";
    /**
     * User can sign in; primarily used when license is in expired state and we give a grace period
     */
    AccountUserStatus[AccountUserStatus["Expired"] = 5] = "Expired";
    /**
     * User is disabled; if reenabled, they will still be in the Pending state
     */
    AccountUserStatus[AccountUserStatus["PendingDisabled"] = 6] = "PendingDisabled";
})(AccountUserStatus || (AccountUserStatus = {}));
