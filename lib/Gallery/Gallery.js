/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
/**
 * How the acquisition is assigned
 */
export var AcquisitionAssignmentType;
(function (AcquisitionAssignmentType) {
    AcquisitionAssignmentType[AcquisitionAssignmentType["None"] = 0] = "None";
    /**
     * Just assign for me
     */
    AcquisitionAssignmentType[AcquisitionAssignmentType["Me"] = 1] = "Me";
    /**
     * Assign for all users in the account
     */
    AcquisitionAssignmentType[AcquisitionAssignmentType["All"] = 2] = "All";
})(AcquisitionAssignmentType || (AcquisitionAssignmentType = {}));
export var AcquisitionOperationState;
(function (AcquisitionOperationState) {
    /**
     * Not allowed to use this AcquisitionOperation
     */
    AcquisitionOperationState[AcquisitionOperationState["Disallow"] = 0] = "Disallow";
    /**
     * Allowed to use this AcquisitionOperation
     */
    AcquisitionOperationState[AcquisitionOperationState["Allow"] = 1] = "Allow";
    /**
     * Operation has already been completed and is no longer available
     */
    AcquisitionOperationState[AcquisitionOperationState["Completed"] = 3] = "Completed";
})(AcquisitionOperationState || (AcquisitionOperationState = {}));
/**
 * Set of different types of operations that can be requested.
 */
export var AcquisitionOperationType;
(function (AcquisitionOperationType) {
    /**
     * Not yet used
     */
    AcquisitionOperationType[AcquisitionOperationType["Get"] = 0] = "Get";
    /**
     * Install this extension into the host provided
     */
    AcquisitionOperationType[AcquisitionOperationType["Install"] = 1] = "Install";
    /**
     * Buy licenses for this extension and install into the host provided
     */
    AcquisitionOperationType[AcquisitionOperationType["Buy"] = 2] = "Buy";
    /**
     * Try this extension
     */
    AcquisitionOperationType[AcquisitionOperationType["Try"] = 3] = "Try";
    /**
     * Request this extension for installation
     */
    AcquisitionOperationType[AcquisitionOperationType["Request"] = 4] = "Request";
    /**
     * No action found
     */
    AcquisitionOperationType[AcquisitionOperationType["None"] = 5] = "None";
    /**
     * Request admins for purchasing extension
     */
    AcquisitionOperationType[AcquisitionOperationType["PurchaseRequest"] = 6] = "PurchaseRequest";
})(AcquisitionOperationType || (AcquisitionOperationType = {}));
export var ConcernCategory;
(function (ConcernCategory) {
    ConcernCategory[ConcernCategory["General"] = 1] = "General";
    ConcernCategory[ConcernCategory["Abusive"] = 2] = "Abusive";
    ConcernCategory[ConcernCategory["Spam"] = 4] = "Spam";
})(ConcernCategory || (ConcernCategory = {}));
export var DraftPatchOperation;
(function (DraftPatchOperation) {
    DraftPatchOperation[DraftPatchOperation["Publish"] = 1] = "Publish";
    DraftPatchOperation[DraftPatchOperation["Cancel"] = 2] = "Cancel";
})(DraftPatchOperation || (DraftPatchOperation = {}));
export var DraftStateType;
(function (DraftStateType) {
    DraftStateType[DraftStateType["Unpublished"] = 1] = "Unpublished";
    DraftStateType[DraftStateType["Published"] = 2] = "Published";
    DraftStateType[DraftStateType["Cancelled"] = 3] = "Cancelled";
    DraftStateType[DraftStateType["Error"] = 4] = "Error";
})(DraftStateType || (DraftStateType = {}));
export var ExtensionDeploymentTechnology;
(function (ExtensionDeploymentTechnology) {
    ExtensionDeploymentTechnology[ExtensionDeploymentTechnology["Exe"] = 1] = "Exe";
    ExtensionDeploymentTechnology[ExtensionDeploymentTechnology["Msi"] = 2] = "Msi";
    ExtensionDeploymentTechnology[ExtensionDeploymentTechnology["Vsix"] = 3] = "Vsix";
    ExtensionDeploymentTechnology[ExtensionDeploymentTechnology["ReferralLink"] = 4] = "ReferralLink";
})(ExtensionDeploymentTechnology || (ExtensionDeploymentTechnology = {}));
/**
 * Type of event
 */
export var ExtensionLifecycleEventType;
(function (ExtensionLifecycleEventType) {
    ExtensionLifecycleEventType[ExtensionLifecycleEventType["Uninstall"] = 1] = "Uninstall";
    ExtensionLifecycleEventType[ExtensionLifecycleEventType["Install"] = 2] = "Install";
    ExtensionLifecycleEventType[ExtensionLifecycleEventType["Review"] = 3] = "Review";
    ExtensionLifecycleEventType[ExtensionLifecycleEventType["Acquisition"] = 4] = "Acquisition";
    ExtensionLifecycleEventType[ExtensionLifecycleEventType["Sales"] = 5] = "Sales";
    ExtensionLifecycleEventType[ExtensionLifecycleEventType["Other"] = 999] = "Other";
})(ExtensionLifecycleEventType || (ExtensionLifecycleEventType = {}));
/**
 * Set of flags that can be associated with a given permission over an extension
 */
export var ExtensionPolicyFlags;
(function (ExtensionPolicyFlags) {
    /**
     * No permission
     */
    ExtensionPolicyFlags[ExtensionPolicyFlags["None"] = 0] = "None";
    /**
     * Permission on private extensions
     */
    ExtensionPolicyFlags[ExtensionPolicyFlags["Private"] = 1] = "Private";
    /**
     * Permission on public extensions
     */
    ExtensionPolicyFlags[ExtensionPolicyFlags["Public"] = 2] = "Public";
    /**
     * Permission in extensions that are in preview
     */
    ExtensionPolicyFlags[ExtensionPolicyFlags["Preview"] = 4] = "Preview";
    /**
     * Permission in released extensions
     */
    ExtensionPolicyFlags[ExtensionPolicyFlags["Released"] = 8] = "Released";
    /**
     * Permission in 1st party extensions
     */
    ExtensionPolicyFlags[ExtensionPolicyFlags["FirstParty"] = 16] = "FirstParty";
    /**
     * Mask that defines all permissions
     */
    ExtensionPolicyFlags[ExtensionPolicyFlags["All"] = 31] = "All";
})(ExtensionPolicyFlags || (ExtensionPolicyFlags = {}));
/**
 * Type of extension filters that are supported in the queries.
 */
export var ExtensionQueryFilterType;
(function (ExtensionQueryFilterType) {
    /**
     * The values are used as tags. All tags are treated as "OR" conditions with each other. There may be some value put on the number of matched tags from the query.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["Tag"] = 1] = "Tag";
    /**
     * The Values are an ExtensionName or fragment that is used to match other extension names.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["DisplayName"] = 2] = "DisplayName";
    /**
     * The Filter is one or more tokens that define what scope to return private extensions for.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["Private"] = 3] = "Private";
    /**
     * Retrieve a set of extensions based on their id's. The values should be the extension id's encoded as strings.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["Id"] = 4] = "Id";
    /**
     * The category is unlike other filters. It is AND'd with the other filters instead of being a separate query.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["Category"] = 5] = "Category";
    /**
     * Certain contribution types may be indexed to allow for query by type. User defined types can't be indexed at the moment.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["ContributionType"] = 6] = "ContributionType";
    /**
     * Retrieve an set extension based on the name based identifier. This differs from the internal id (which is being deprecated).
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["Name"] = 7] = "Name";
    /**
     * The InstallationTarget for an extension defines the target consumer for the extension. This may be something like VS, VSOnline, or VSCode
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["InstallationTarget"] = 8] = "InstallationTarget";
    /**
     * Query for featured extensions, no value is allowed when using the query type.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["Featured"] = 9] = "Featured";
    /**
     * The SearchText provided by the user to search for extensions
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["SearchText"] = 10] = "SearchText";
    /**
     * Query for extensions that are featured in their own category, The filterValue for this is name of category of extensions.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["FeaturedInCategory"] = 11] = "FeaturedInCategory";
    /**
     * When retrieving extensions from a query, exclude the extensions which are having the given flags. The value specified for this filter should be a string representing the integer values of the flags to be excluded. In case of multiple flags to be specified, a logical OR of the interger values should be given as value for this filter This should be at most one filter of this type. This only acts as a restrictive filter after. In case of having a particular flag in both IncludeWithFlags and ExcludeWithFlags, excludeFlags will remove the included extensions giving empty result for that flag.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["ExcludeWithFlags"] = 12] = "ExcludeWithFlags";
    /**
     * When retrieving extensions from a query, include the extensions which are having the given flags. The value specified for this filter should be a string representing the integer values of the flags to be included. In case of multiple flags to be specified, a logical OR of the integer values should be given as value for this filter This should be at most one filter of this type. This only acts as a restrictive filter after. In case of having a particular flag in both IncludeWithFlags and ExcludeWithFlags, excludeFlags will remove the included extensions giving empty result for that flag. In case of multiple flags given in IncludeWithFlags in ORed fashion, extensions having any of the given flags will be included.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["IncludeWithFlags"] = 13] = "IncludeWithFlags";
    /**
     * Filter the extensions based on the LCID values applicable. Any extensions which are not having any LCID values will also be filtered. This is currently only supported for VS extensions.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["Lcid"] = 14] = "Lcid";
    /**
     * Filter to provide the version of the installation target. This filter will be used along with InstallationTarget filter. The value should be a valid version string. Currently supported only if search text is provided.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["InstallationTargetVersion"] = 15] = "InstallationTargetVersion";
    /**
     * Filter type for specifying a range of installation target version. The filter will be used along with InstallationTarget filter. The value should be a pair of well formed version values separated by hyphen(-). Currently supported only if search text is provided.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["InstallationTargetVersionRange"] = 16] = "InstallationTargetVersionRange";
    /**
     * Filter type for specifying metadata key and value to be used for filtering.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["VsixMetadata"] = 17] = "VsixMetadata";
    /**
     * Filter to get extensions published by a publisher having supplied internal name
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["PublisherName"] = 18] = "PublisherName";
    /**
     * Filter to get extensions published by all publishers having supplied display name
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["PublisherDisplayName"] = 19] = "PublisherDisplayName";
    /**
     * When retrieving extensions from a query, include the extensions which have a publisher having the given flags. The value specified for this filter should be a string representing the integer values of the flags to be included. In case of multiple flags to be specified, a logical OR of the integer values should be given as value for this filter There should be at most one filter of this type. This only acts as a restrictive filter after. In case of multiple flags given in IncludeWithFlags in ORed fashion, extensions having any of the given flags will be included.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["IncludeWithPublisherFlags"] = 20] = "IncludeWithPublisherFlags";
    /**
     * Filter to get extensions shared with particular organization
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["OrganizationSharedWith"] = 21] = "OrganizationSharedWith";
    /**
     * Filter to get VS IDE extensions by Product Architecture
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["ProductArchitecture"] = 22] = "ProductArchitecture";
    /**
     * Filter to get VS Code extensions by target platform.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["TargetPlatform"] = 23] = "TargetPlatform";
    /**
     * Retrieve an extension based on the extensionName.
     */
    ExtensionQueryFilterType[ExtensionQueryFilterType["ExtensionName"] = 24] = "ExtensionName";
})(ExtensionQueryFilterType || (ExtensionQueryFilterType = {}));
/**
 * Set of flags used to determine which set of information is retrieved when reading published extensions
 */
export var ExtensionQueryFlags;
(function (ExtensionQueryFlags) {
    /**
     * None is used to retrieve only the basic extension details.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["None"] = 0] = "None";
    /**
     * IncludeVersions will return version information for extensions returned
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeVersions"] = 1] = "IncludeVersions";
    /**
     * IncludeFiles will return information about which files were found within the extension that were stored independent of the manifest. When asking for files, versions will be included as well since files are returned as a property of the versions.  These files can be retrieved using the path to the file without requiring the entire manifest be downloaded.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeFiles"] = 2] = "IncludeFiles";
    /**
     * Include the Categories and Tags that were added to the extension definition.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeCategoryAndTags"] = 4] = "IncludeCategoryAndTags";
    /**
     * Include the details about which accounts the extension has been shared with if the extension is a private extension.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeSharedAccounts"] = 8] = "IncludeSharedAccounts";
    /**
     * Include properties associated with versions of the extension
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeVersionProperties"] = 16] = "IncludeVersionProperties";
    /**
     * Excluding non-validated extensions will remove any extension versions that either are in the process of being validated or have failed validation.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["ExcludeNonValidated"] = 32] = "ExcludeNonValidated";
    /**
     * Include the set of installation targets the extension has requested.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeInstallationTargets"] = 64] = "IncludeInstallationTargets";
    /**
     * Include the base uri for assets of this extension
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeAssetUri"] = 128] = "IncludeAssetUri";
    /**
     * Include the statistics associated with this extension
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeStatistics"] = 256] = "IncludeStatistics";
    /**
     * When retrieving versions from a query, only include the latest version of the extensions that matched. This is useful when the caller doesn't need all the published versions. It will save a significant size in the returned payload.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeLatestVersionOnly"] = 512] = "IncludeLatestVersionOnly";
    /**
     * This flag switches the asset uri to use GetAssetByName instead of CDN When this is used, values of base asset uri and base asset uri fallback are switched When this is used, source of asset files are pointed to Gallery service always even if CDN is available
     */
    ExtensionQueryFlags[ExtensionQueryFlags["UseFallbackAssetUri"] = 1024] = "UseFallbackAssetUri";
    /**
     * This flag is used to get all the metadata values associated with the extension. This is not applicable to VSTS or VSCode extensions and usage is only internal.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeMetadata"] = 2048] = "IncludeMetadata";
    /**
     * This flag is used to indicate to return very small data for extension required by VS IDE. This flag is only compatible when querying is done by VS IDE
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeMinimalPayloadForVsIde"] = 4096] = "IncludeMinimalPayloadForVsIde";
    /**
     * This flag is used to get Lcid values associated with the extension. This is not applicable to VSTS or VSCode extensions and usage is only internal
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeLcids"] = 8192] = "IncludeLcids";
    /**
     * Include the details about which organizations the extension has been shared with if the extension is a private extension.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeSharedOrganizations"] = 16384] = "IncludeSharedOrganizations";
    /**
     * Include the details if an extension is in conflict list or not Currently being used for VSCode extensions.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["IncludeNameConflictInfo"] = 32768] = "IncludeNameConflictInfo";
    /**
     * AllAttributes is designed to be a mask that defines all sub-elements of the extension should be returned.  NOTE: This is not actually All flags. This is now locked to the set defined since changing this enum would be a breaking change and would change the behavior of anyone using it. Try not to use this value when making calls to the service, instead be explicit about the options required.
     */
    ExtensionQueryFlags[ExtensionQueryFlags["AllAttributes"] = 16863] = "AllAttributes";
})(ExtensionQueryFlags || (ExtensionQueryFlags = {}));
export var ExtensionStatisticOperation;
(function (ExtensionStatisticOperation) {
    ExtensionStatisticOperation[ExtensionStatisticOperation["None"] = 0] = "None";
    ExtensionStatisticOperation[ExtensionStatisticOperation["Set"] = 1] = "Set";
    ExtensionStatisticOperation[ExtensionStatisticOperation["Increment"] = 2] = "Increment";
    ExtensionStatisticOperation[ExtensionStatisticOperation["Decrement"] = 3] = "Decrement";
    ExtensionStatisticOperation[ExtensionStatisticOperation["Delete"] = 4] = "Delete";
})(ExtensionStatisticOperation || (ExtensionStatisticOperation = {}));
/**
 * Stats aggregation type
 */
export var ExtensionStatsAggregateType;
(function (ExtensionStatsAggregateType) {
    ExtensionStatsAggregateType[ExtensionStatsAggregateType["Daily"] = 1] = "Daily";
})(ExtensionStatsAggregateType || (ExtensionStatsAggregateType = {}));
/**
 * Set of flags that can be associated with a given extension version. These flags apply to a specific version of the extension.
 */
export var ExtensionVersionFlags;
(function (ExtensionVersionFlags) {
    /**
     * No flags exist for this version.
     */
    ExtensionVersionFlags[ExtensionVersionFlags["None"] = 0] = "None";
    /**
     * The Validated flag for a version means the extension version has passed validation and can be used..
     */
    ExtensionVersionFlags[ExtensionVersionFlags["Validated"] = 1] = "Validated";
})(ExtensionVersionFlags || (ExtensionVersionFlags = {}));
/**
 * Type of event
 */
export var NotificationTemplateType;
(function (NotificationTemplateType) {
    /**
     * Template type for Review Notification.
     */
    NotificationTemplateType[NotificationTemplateType["ReviewNotification"] = 1] = "ReviewNotification";
    /**
     * Template type for Qna Notification.
     */
    NotificationTemplateType[NotificationTemplateType["QnaNotification"] = 2] = "QnaNotification";
    /**
     * Template type for Customer Contact Notification.
     */
    NotificationTemplateType[NotificationTemplateType["CustomerContactNotification"] = 3] = "CustomerContactNotification";
    /**
     * Template type for Publisher Member Notification.
     */
    NotificationTemplateType[NotificationTemplateType["PublisherMemberUpdateNotification"] = 4] = "PublisherMemberUpdateNotification";
})(NotificationTemplateType || (NotificationTemplateType = {}));
/**
 * PagingDirection is used to define which set direction to move the returned result set based on a previous query.
 */
export var PagingDirection;
(function (PagingDirection) {
    /**
     * Backward will return results from earlier in the resultset.
     */
    PagingDirection[PagingDirection["Backward"] = 1] = "Backward";
    /**
     * Forward will return results from later in the resultset.
     */
    PagingDirection[PagingDirection["Forward"] = 2] = "Forward";
})(PagingDirection || (PagingDirection = {}));
/**
 * Set of flags that can be associated with a given extension. These flags apply to all versions of the extension and not to a specific version.
 */
export var PublishedExtensionFlags;
(function (PublishedExtensionFlags) {
    /**
     * No flags exist for this extension.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["None"] = 0] = "None";
    /**
     * The Disabled flag for an extension means the extension can't be changed and won't be used by consumers. The disabled flag is managed by the service and can't be supplied by the Extension Developers.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Disabled"] = 1] = "Disabled";
    /**
     * BuiltIn Extension are available to all Tenants. An explicit registration is not required. This attribute is reserved and can't be supplied by Extension Developers.  BuiltIn extensions are by definition Public. There is no need to set the public flag for extensions marked BuiltIn.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["BuiltIn"] = 2] = "BuiltIn";
    /**
     * This extension has been validated by the service. The extension meets the requirements specified. This attribute is reserved and can't be supplied by the Extension Developers. Validation is a process that ensures that all contributions are well formed. They meet the requirements defined by the contribution type they are extending. Note this attribute will be updated asynchronously as the extension is validated by the developer of the contribution type. There will be restricted access to the extension while this process is performed.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Validated"] = 4] = "Validated";
    /**
     * Trusted extensions are ones that are given special capabilities. These tend to come from Microsoft and can't be published by the general public.  Note: BuiltIn extensions are always trusted.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Trusted"] = 8] = "Trusted";
    /**
     * The Paid flag indicates that the commerce can be enabled for this extension. Publisher needs to setup Offer/Pricing plan in Azure. If Paid flag is set and a corresponding Offer is not available, the extension will automatically be marked as Preview. If the publisher intends to make the extension Paid in the future, it is mandatory to set the Preview flag. This is currently available only for VSTS extensions only.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Paid"] = 16] = "Paid";
    /**
     * This extension registration is public, making its visibility open to the public. This means all tenants have the ability to install this extension. Without this flag the extension will be private and will need to be shared with the tenants that can install it.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Public"] = 256] = "Public";
    /**
     * This extension has multiple versions active at one time and version discovery should be done using the defined "Version Discovery" protocol to determine the version available to a specific user or tenant.  \@TODO: Link to Version Discovery Protocol.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["MultiVersion"] = 512] = "MultiVersion";
    /**
     * The system flag is reserved, and cant be used by publishers.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["System"] = 1024] = "System";
    /**
     * The Preview flag indicates that the extension is still under preview (not yet of "release" quality). These extensions may be decorated differently in the gallery and may have different policies applied to them.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Preview"] = 2048] = "Preview";
    /**
     * The Unpublished flag indicates that the extension can't be installed/downloaded. Users who have installed such an extension can continue to use the extension.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Unpublished"] = 4096] = "Unpublished";
    /**
     * The Trial flag indicates that the extension is in Trial version. The flag is right now being used only with respect to Visual Studio extensions.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Trial"] = 8192] = "Trial";
    /**
     * The Locked flag indicates that extension has been locked from Marketplace. Further updates/acquisitions are not allowed on the extension until this is present. This should be used along with making the extension private/unpublished.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Locked"] = 16384] = "Locked";
    /**
     * This flag is set for extensions we want to hide from Marketplace home and search pages. This will be used to override the exposure of builtIn flags.
     */
    PublishedExtensionFlags[PublishedExtensionFlags["Hidden"] = 32768] = "Hidden";
})(PublishedExtensionFlags || (PublishedExtensionFlags = {}));
export var PublisherFlags;
(function (PublisherFlags) {
    /**
     * This should never be returned, it is used to represent a publisher who's flags haven't changed during update calls.
     */
    PublisherFlags[PublisherFlags["UnChanged"] = 1073741824] = "UnChanged";
    /**
     * No flags exist for this publisher.
     */
    PublisherFlags[PublisherFlags["None"] = 0] = "None";
    /**
     * The Disabled flag for a publisher means the publisher can't be changed and won't be used by consumers, this extends to extensions owned by the publisher as well. The disabled flag is managed by the service and can't be supplied by the Extension Developers.
     */
    PublisherFlags[PublisherFlags["Disabled"] = 1] = "Disabled";
    /**
     * A verified publisher is one that Microsoft has done some review of and ensured the publisher meets a set of requirements. The requirements to become a verified publisher are not listed here.  They can be found in public documentation (TBD).
     */
    PublisherFlags[PublisherFlags["Verified"] = 2] = "Verified";
    /**
     * A Certified publisher is one that is Microsoft verified and in addition meets a set of requirements for its published extensions. The requirements to become a certified publisher are not listed here.  They can be found in public documentation (TBD).
     */
    PublisherFlags[PublisherFlags["Certified"] = 4] = "Certified";
    /**
     * This is the set of flags that can't be supplied by the developer and is managed by the service itself.
     */
    PublisherFlags[PublisherFlags["ServiceFlags"] = 7] = "ServiceFlags";
})(PublisherFlags || (PublisherFlags = {}));
export var PublisherPermissions;
(function (PublisherPermissions) {
    /**
     * This gives the bearer the rights to read Publishers and Extensions.
     */
    PublisherPermissions[PublisherPermissions["Read"] = 1] = "Read";
    /**
     * This gives the bearer the rights to update, delete, and share Extensions (but not the ability to create them).
     */
    PublisherPermissions[PublisherPermissions["UpdateExtension"] = 2] = "UpdateExtension";
    /**
     * This gives the bearer the rights to create new Publishers at the root of the namespace.
     */
    PublisherPermissions[PublisherPermissions["CreatePublisher"] = 4] = "CreatePublisher";
    /**
     * This gives the bearer the rights to create new Extensions within a publisher.
     */
    PublisherPermissions[PublisherPermissions["PublishExtension"] = 8] = "PublishExtension";
    /**
     * Admin gives the bearer the rights to manage restricted attributes of Publishers and Extensions.
     */
    PublisherPermissions[PublisherPermissions["Admin"] = 16] = "Admin";
    /**
     * TrustedPartner gives the bearer the rights to publish a extensions with restricted capabilities.
     */
    PublisherPermissions[PublisherPermissions["TrustedPartner"] = 32] = "TrustedPartner";
    /**
     * PrivateRead is another form of read designed to allow higher privilege accessors the ability to read private extensions.
     */
    PublisherPermissions[PublisherPermissions["PrivateRead"] = 64] = "PrivateRead";
    /**
     * This gives the bearer the rights to delete any extension.
     */
    PublisherPermissions[PublisherPermissions["DeleteExtension"] = 128] = "DeleteExtension";
    /**
     * This gives the bearer the rights edit the publisher settings.
     */
    PublisherPermissions[PublisherPermissions["EditSettings"] = 256] = "EditSettings";
    /**
     * This gives the bearer the rights to see all permissions on the publisher.
     */
    PublisherPermissions[PublisherPermissions["ViewPermissions"] = 512] = "ViewPermissions";
    /**
     * This gives the bearer the rights to assign permissions on the publisher.
     */
    PublisherPermissions[PublisherPermissions["ManagePermissions"] = 1024] = "ManagePermissions";
    /**
     * This gives the bearer the rights to delete the publisher.
     */
    PublisherPermissions[PublisherPermissions["DeletePublisher"] = 2048] = "DeletePublisher";
})(PublisherPermissions || (PublisherPermissions = {}));
/**
 * Set of flags used to define the attributes requested when a publisher is returned. Some API's allow the caller to specify the level of detail needed.
 */
export var PublisherQueryFlags;
(function (PublisherQueryFlags) {
    /**
     * None is used to retrieve only the basic publisher details.
     */
    PublisherQueryFlags[PublisherQueryFlags["None"] = 0] = "None";
    /**
     * Is used to include a list of basic extension details for all extensions published by the requested publisher.
     */
    PublisherQueryFlags[PublisherQueryFlags["IncludeExtensions"] = 1] = "IncludeExtensions";
    /**
     * Is used to include email address of all the users who are marked as owners for the publisher
     */
    PublisherQueryFlags[PublisherQueryFlags["IncludeEmailAddress"] = 2] = "IncludeEmailAddress";
})(PublisherQueryFlags || (PublisherQueryFlags = {}));
/**
 * Access definition for a RoleAssignment.
 */
export var PublisherRoleAccess;
(function (PublisherRoleAccess) {
    /**
     * Access has been explicitly set.
     */
    PublisherRoleAccess[PublisherRoleAccess["Assigned"] = 1] = "Assigned";
    /**
     * Access has been inherited from a higher scope.
     */
    PublisherRoleAccess[PublisherRoleAccess["Inherited"] = 2] = "Inherited";
})(PublisherRoleAccess || (PublisherRoleAccess = {}));
export var PublisherState;
(function (PublisherState) {
    /**
     * No state exists for this publisher.
     */
    PublisherState[PublisherState["None"] = 0] = "None";
    /**
     * This state indicates that publisher has applied for Marketplace verification (via UI) and still not been certified. This state would be reset once the publisher is verified.
     */
    PublisherState[PublisherState["VerificationPending"] = 1] = "VerificationPending";
    /**
     * This state indicates that publisher has applied for Marketplace certification (via UI) and still not been certified. This state would be reset once the publisher is certified.
     */
    PublisherState[PublisherState["CertificationPending"] = 2] = "CertificationPending";
    /**
     * This state indicates that publisher had applied for Marketplace certification (via UI) but his/her certification got rejected. This state would be reset if and when the publisher is certified.
     */
    PublisherState[PublisherState["CertificationRejected"] = 4] = "CertificationRejected";
    /**
     * This state indicates that publisher was certified on the Marketplace, but his/her certification got revoked. This state would never be reset, even after publisher gets re-certified. It would indicate that the publisher certification was revoked at least once.
     */
    PublisherState[PublisherState["CertificationRevoked"] = 8] = "CertificationRevoked";
})(PublisherState || (PublisherState = {}));
/**
 * Denotes the status of the QnA Item
 */
export var QnAItemStatus;
(function (QnAItemStatus) {
    QnAItemStatus[QnAItemStatus["None"] = 0] = "None";
    /**
     * The UserEditable flag indicates whether the item is editable by the logged in user.
     */
    QnAItemStatus[QnAItemStatus["UserEditable"] = 1] = "UserEditable";
    /**
     * The PublisherCreated flag indicates whether the item has been created by extension publisher.
     */
    QnAItemStatus[QnAItemStatus["PublisherCreated"] = 2] = "PublisherCreated";
})(QnAItemStatus || (QnAItemStatus = {}));
/**
 * The status of a REST Api response status.
 */
export var RestApiResponseStatus;
(function (RestApiResponseStatus) {
    /**
     * The operation is completed.
     */
    RestApiResponseStatus[RestApiResponseStatus["Completed"] = 0] = "Completed";
    /**
     * The operation is failed.
     */
    RestApiResponseStatus[RestApiResponseStatus["Failed"] = 1] = "Failed";
    /**
     * The operation is in progress.
     */
    RestApiResponseStatus[RestApiResponseStatus["Inprogress"] = 2] = "Inprogress";
    /**
     * The operation is in skipped.
     */
    RestApiResponseStatus[RestApiResponseStatus["Skipped"] = 3] = "Skipped";
})(RestApiResponseStatus || (RestApiResponseStatus = {}));
/**
 * Type of operation
 */
export var ReviewEventOperation;
(function (ReviewEventOperation) {
    ReviewEventOperation[ReviewEventOperation["Create"] = 1] = "Create";
    ReviewEventOperation[ReviewEventOperation["Update"] = 2] = "Update";
    ReviewEventOperation[ReviewEventOperation["Delete"] = 3] = "Delete";
})(ReviewEventOperation || (ReviewEventOperation = {}));
/**
 * Options to GetReviews query
 */
export var ReviewFilterOptions;
(function (ReviewFilterOptions) {
    /**
     * No filtering, all reviews are returned (default option)
     */
    ReviewFilterOptions[ReviewFilterOptions["None"] = 0] = "None";
    /**
     * Filter out review items with empty review text
     */
    ReviewFilterOptions[ReviewFilterOptions["FilterEmptyReviews"] = 1] = "FilterEmptyReviews";
    /**
     * Filter out review items with empty usernames
     */
    ReviewFilterOptions[ReviewFilterOptions["FilterEmptyUserNames"] = 2] = "FilterEmptyUserNames";
})(ReviewFilterOptions || (ReviewFilterOptions = {}));
/**
 * Denotes the patch operation type
 */
export var ReviewPatchOperation;
(function (ReviewPatchOperation) {
    /**
     * Flag a review
     */
    ReviewPatchOperation[ReviewPatchOperation["FlagReview"] = 1] = "FlagReview";
    /**
     * Update an existing review
     */
    ReviewPatchOperation[ReviewPatchOperation["UpdateReview"] = 2] = "UpdateReview";
    /**
     * Submit a reply for a review
     */
    ReviewPatchOperation[ReviewPatchOperation["ReplyToReview"] = 3] = "ReplyToReview";
    /**
     * Submit an admin response
     */
    ReviewPatchOperation[ReviewPatchOperation["AdminResponseForReview"] = 4] = "AdminResponseForReview";
    /**
     * Delete an Admin Reply
     */
    ReviewPatchOperation[ReviewPatchOperation["DeleteAdminReply"] = 5] = "DeleteAdminReply";
    /**
     * Delete Publisher Reply
     */
    ReviewPatchOperation[ReviewPatchOperation["DeletePublisherReply"] = 6] = "DeletePublisherReply";
})(ReviewPatchOperation || (ReviewPatchOperation = {}));
/**
 * Type of event
 */
export var ReviewResourceType;
(function (ReviewResourceType) {
    ReviewResourceType[ReviewResourceType["Review"] = 1] = "Review";
    ReviewResourceType[ReviewResourceType["PublisherReply"] = 2] = "PublisherReply";
    ReviewResourceType[ReviewResourceType["AdminReply"] = 3] = "AdminReply";
})(ReviewResourceType || (ReviewResourceType = {}));
/**
 * Defines the sort order that can be defined for Extensions query
 */
export var SortByType;
(function (SortByType) {
    /**
     * The results will be sorted by relevance in case search query is given, if no search query resutls will be provided as is
     */
    SortByType[SortByType["Relevance"] = 0] = "Relevance";
    /**
     * The results will be sorted as per Last Updated date of the extensions with recently updated at the top
     */
    SortByType[SortByType["LastUpdatedDate"] = 1] = "LastUpdatedDate";
    /**
     * Results will be sorted Alphabetically as per the title of the extension
     */
    SortByType[SortByType["Title"] = 2] = "Title";
    /**
     * Results will be sorted Alphabetically as per Publisher title
     */
    SortByType[SortByType["Publisher"] = 3] = "Publisher";
    /**
     * Results will be sorted by Install Count
     */
    SortByType[SortByType["InstallCount"] = 4] = "InstallCount";
    /**
     * The results will be sorted as per Published date of the extensions
     */
    SortByType[SortByType["PublishedDate"] = 5] = "PublishedDate";
    /**
     * The results will be sorted as per Average ratings of the extensions
     */
    SortByType[SortByType["AverageRating"] = 6] = "AverageRating";
    /**
     * The results will be sorted as per Trending Daily Score of the extensions
     */
    SortByType[SortByType["TrendingDaily"] = 7] = "TrendingDaily";
    /**
     * The results will be sorted as per Trending weekly Score of the extensions
     */
    SortByType[SortByType["TrendingWeekly"] = 8] = "TrendingWeekly";
    /**
     * The results will be sorted as per Trending monthly Score of the extensions
     */
    SortByType[SortByType["TrendingMonthly"] = 9] = "TrendingMonthly";
    /**
     * The results will be sorted as per ReleaseDate of the extensions (date on which the extension first went public)
     */
    SortByType[SortByType["ReleaseDate"] = 10] = "ReleaseDate";
    /**
     * The results will be sorted as per Author defined in the VSix/Metadata. If not defined, publisher name is used This is specifically needed by VS IDE, other (new and old) clients are not encouraged to use this
     */
    SortByType[SortByType["Author"] = 11] = "Author";
    /**
     * The results will be sorted as per Weighted Rating of the extension.
     */
    SortByType[SortByType["WeightedRating"] = 12] = "WeightedRating";
})(SortByType || (SortByType = {}));
/**
 * Defines the sort order that can be defined for Extensions query
 */
export var SortOrderType;
(function (SortOrderType) {
    /**
     * Results will be sorted in the default order as per the sorting type defined. The default varies for each type, e.g. for Relevance, default is Descending, for Title default is Ascending etc.
     */
    SortOrderType[SortOrderType["Default"] = 0] = "Default";
    /**
     * The results will be sorted in Ascending order
     */
    SortOrderType[SortOrderType["Ascending"] = 1] = "Ascending";
    /**
     * The results will be sorted in Descending order
     */
    SortOrderType[SortOrderType["Descending"] = 2] = "Descending";
})(SortOrderType || (SortOrderType = {}));
export var VSCodeWebExtensionStatisicsType;
(function (VSCodeWebExtensionStatisicsType) {
    VSCodeWebExtensionStatisicsType[VSCodeWebExtensionStatisicsType["Install"] = 1] = "Install";
    VSCodeWebExtensionStatisicsType[VSCodeWebExtensionStatisicsType["Update"] = 2] = "Update";
    VSCodeWebExtensionStatisicsType[VSCodeWebExtensionStatisicsType["Uninstall"] = 3] = "Uninstall";
})(VSCodeWebExtensionStatisicsType || (VSCodeWebExtensionStatisicsType = {}));
