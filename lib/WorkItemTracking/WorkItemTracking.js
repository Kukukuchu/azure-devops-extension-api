/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
/**
 * Flag to control error policy in a batch classification nodes get request.
 */
export var ClassificationNodesErrorPolicy;
(function (ClassificationNodesErrorPolicy) {
    ClassificationNodesErrorPolicy[ClassificationNodesErrorPolicy["Fail"] = 1] = "Fail";
    ClassificationNodesErrorPolicy[ClassificationNodesErrorPolicy["Omit"] = 2] = "Omit";
})(ClassificationNodesErrorPolicy || (ClassificationNodesErrorPolicy = {}));
/**
 * Specifies the additional data retrieval options for work item comments.
 */
export var CommentExpandOptions;
(function (CommentExpandOptions) {
    CommentExpandOptions[CommentExpandOptions["None"] = 0] = "None";
    /**
     * Include comment reactions.
     */
    CommentExpandOptions[CommentExpandOptions["Reactions"] = 1] = "Reactions";
    /**
     * Include the rendered text (html) in addition to MD text.
     */
    CommentExpandOptions[CommentExpandOptions["RenderedText"] = 8] = "RenderedText";
    /**
     * If specified, then ONLY rendered text (html) will be returned, w/o markdown. Supposed to be used internally from data provides for optimization purposes.
     */
    CommentExpandOptions[CommentExpandOptions["RenderedTextOnly"] = 16] = "RenderedTextOnly";
    CommentExpandOptions[CommentExpandOptions["All"] = -17] = "All";
})(CommentExpandOptions || (CommentExpandOptions = {}));
/**
 * Represents the possible types for the comment format. Should be in sync with WorkItemCommentFormat.cs
 */
export var CommentFormat;
(function (CommentFormat) {
    CommentFormat[CommentFormat["Markdown"] = 0] = "Markdown";
    CommentFormat[CommentFormat["Html"] = 1] = "Html";
})(CommentFormat || (CommentFormat = {}));
/**
 * Represents different reaction types for a work item comment.
 */
export var CommentReactionType;
(function (CommentReactionType) {
    CommentReactionType[CommentReactionType["Like"] = 0] = "Like";
    CommentReactionType[CommentReactionType["Dislike"] = 1] = "Dislike";
    CommentReactionType[CommentReactionType["Heart"] = 2] = "Heart";
    CommentReactionType[CommentReactionType["Hooray"] = 3] = "Hooray";
    CommentReactionType[CommentReactionType["Smile"] = 4] = "Smile";
    CommentReactionType[CommentReactionType["Confused"] = 5] = "Confused";
})(CommentReactionType || (CommentReactionType = {}));
export var CommentSortOrder;
(function (CommentSortOrder) {
    /**
     * The results will be sorted in Ascending order.
     */
    CommentSortOrder[CommentSortOrder["Asc"] = 1] = "Asc";
    /**
     * The results will be sorted in Descending order.
     */
    CommentSortOrder[CommentSortOrder["Desc"] = 2] = "Desc";
})(CommentSortOrder || (CommentSortOrder = {}));
/**
 * Enum for field types.
 */
export var FieldType;
(function (FieldType) {
    /**
     * String field type.
     */
    FieldType[FieldType["String"] = 0] = "String";
    /**
     * Integer field type.
     */
    FieldType[FieldType["Integer"] = 1] = "Integer";
    /**
     * Datetime field type.
     */
    FieldType[FieldType["DateTime"] = 2] = "DateTime";
    /**
     * Plain text field type.
     */
    FieldType[FieldType["PlainText"] = 3] = "PlainText";
    /**
     * HTML (Multiline) field type.
     */
    FieldType[FieldType["Html"] = 4] = "Html";
    /**
     * Treepath field type.
     */
    FieldType[FieldType["TreePath"] = 5] = "TreePath";
    /**
     * History field type.
     */
    FieldType[FieldType["History"] = 6] = "History";
    /**
     * Double field type.
     */
    FieldType[FieldType["Double"] = 7] = "Double";
    /**
     * Guid field type.
     */
    FieldType[FieldType["Guid"] = 8] = "Guid";
    /**
     * Boolean field type.
     */
    FieldType[FieldType["Boolean"] = 9] = "Boolean";
    /**
     * Identity field type.
     */
    FieldType[FieldType["Identity"] = 10] = "Identity";
    /**
     * String picklist field type. When creating a string picklist field from REST API, use "String" FieldType.
     */
    FieldType[FieldType["PicklistString"] = 11] = "PicklistString";
    /**
     * Integer picklist field type. When creating a integer picklist field from REST API, use "Integer" FieldType.
     */
    FieldType[FieldType["PicklistInteger"] = 12] = "PicklistInteger";
    /**
     * Double picklist field type. When creating a double picklist field from REST API, use "Double" FieldType.
     */
    FieldType[FieldType["PicklistDouble"] = 13] = "PicklistDouble";
})(FieldType || (FieldType = {}));
/**
 * Enum for field usages.
 */
export var FieldUsage;
(function (FieldUsage) {
    /**
     * Empty usage.
     */
    FieldUsage[FieldUsage["None"] = 0] = "None";
    /**
     * Work item field usage.
     */
    FieldUsage[FieldUsage["WorkItem"] = 1] = "WorkItem";
    /**
     * Work item link field usage.
     */
    FieldUsage[FieldUsage["WorkItemLink"] = 2] = "WorkItemLink";
    /**
     * Treenode field usage.
     */
    FieldUsage[FieldUsage["Tree"] = 3] = "Tree";
    /**
     * Work Item Type Extension usage.
     */
    FieldUsage[FieldUsage["WorkItemTypeExtension"] = 4] = "WorkItemTypeExtension";
})(FieldUsage || (FieldUsage = {}));
/**
 * Flag to expand types of fields.
 */
export var GetFieldsExpand;
(function (GetFieldsExpand) {
    /**
     * Default behavior.
     */
    GetFieldsExpand[GetFieldsExpand["None"] = 0] = "None";
    /**
     * Adds extension fields to the response.
     */
    GetFieldsExpand[GetFieldsExpand["ExtensionFields"] = 1] = "ExtensionFields";
    /**
     * Includes fields that have been deleted.
     */
    GetFieldsExpand[GetFieldsExpand["IncludeDeleted"] = 2] = "IncludeDeleted";
})(GetFieldsExpand || (GetFieldsExpand = {}));
/**
 * The link query mode which determines the behavior of the query.
 */
export var LinkQueryMode;
(function (LinkQueryMode) {
    /**
     * Returns flat list of work items.
     */
    LinkQueryMode[LinkQueryMode["WorkItems"] = 0] = "WorkItems";
    /**
     * Returns work items where the source, target, and link criteria are all satisfied.
     */
    LinkQueryMode[LinkQueryMode["LinksOneHopMustContain"] = 1] = "LinksOneHopMustContain";
    /**
     * Returns work items that satisfy the source and link criteria, even if no linked work item satisfies the target criteria.
     */
    LinkQueryMode[LinkQueryMode["LinksOneHopMayContain"] = 2] = "LinksOneHopMayContain";
    /**
     * Returns work items that satisfy the source, only if no linked work item satisfies the link and target criteria.
     */
    LinkQueryMode[LinkQueryMode["LinksOneHopDoesNotContain"] = 3] = "LinksOneHopDoesNotContain";
    LinkQueryMode[LinkQueryMode["LinksRecursiveMustContain"] = 4] = "LinksRecursiveMustContain";
    /**
     * Returns work items a hierarchy of work items that by default satisfy the source
     */
    LinkQueryMode[LinkQueryMode["LinksRecursiveMayContain"] = 5] = "LinksRecursiveMayContain";
    LinkQueryMode[LinkQueryMode["LinksRecursiveDoesNotContain"] = 6] = "LinksRecursiveDoesNotContain";
})(LinkQueryMode || (LinkQueryMode = {}));
export var LogicalOperation;
(function (LogicalOperation) {
    LogicalOperation[LogicalOperation["NONE"] = 0] = "NONE";
    LogicalOperation[LogicalOperation["AND"] = 1] = "AND";
    LogicalOperation[LogicalOperation["OR"] = 2] = "OR";
})(LogicalOperation || (LogicalOperation = {}));
/**
 * Enumerates the possible provisioning actions that can be triggered on process template update.
 */
export var ProvisioningActionType;
(function (ProvisioningActionType) {
    ProvisioningActionType[ProvisioningActionType["Import"] = 0] = "Import";
    ProvisioningActionType[ProvisioningActionType["Validate"] = 1] = "Validate";
})(ProvisioningActionType || (ProvisioningActionType = {}));
/**
 * Enum to control error policy in a query batch request.
 */
export var QueryErrorPolicy;
(function (QueryErrorPolicy) {
    QueryErrorPolicy[QueryErrorPolicy["Fail"] = 1] = "Fail";
    QueryErrorPolicy[QueryErrorPolicy["Omit"] = 2] = "Omit";
})(QueryErrorPolicy || (QueryErrorPolicy = {}));
/**
 * Determines which set of additional query properties to display
 */
export var QueryExpand;
(function (QueryExpand) {
    /**
     * Expands Columns, Links and ChangeInfo
     */
    QueryExpand[QueryExpand["None"] = 0] = "None";
    /**
     * Expands Columns, Links,  ChangeInfo and WIQL text
     */
    QueryExpand[QueryExpand["Wiql"] = 1] = "Wiql";
    /**
     * Expands Columns, Links, ChangeInfo, WIQL text and clauses
     */
    QueryExpand[QueryExpand["Clauses"] = 2] = "Clauses";
    /**
     * Expands all properties
     */
    QueryExpand[QueryExpand["All"] = 3] = "All";
    /**
     * Displays minimal properties and the WIQL text
     */
    QueryExpand[QueryExpand["Minimal"] = 4] = "Minimal";
})(QueryExpand || (QueryExpand = {}));
export var QueryOption;
(function (QueryOption) {
    QueryOption[QueryOption["Doing"] = 1] = "Doing";
    QueryOption[QueryOption["Done"] = 2] = "Done";
    QueryOption[QueryOption["Followed"] = 3] = "Followed";
})(QueryOption || (QueryOption = {}));
/**
 * Determines whether a tree query matches parents or children first.
 */
export var QueryRecursionOption;
(function (QueryRecursionOption) {
    /**
     * Returns work items that satisfy the source, even if no linked work item satisfies the target and link criteria.
     */
    QueryRecursionOption[QueryRecursionOption["ParentFirst"] = 0] = "ParentFirst";
    /**
     * Returns work items that satisfy the target criteria, even if no work item satisfies the source and link criteria.
     */
    QueryRecursionOption[QueryRecursionOption["ChildFirst"] = 1] = "ChildFirst";
})(QueryRecursionOption || (QueryRecursionOption = {}));
/**
 * The query result type
 */
export var QueryResultType;
(function (QueryResultType) {
    /**
     * A list of work items (for flat queries).
     */
    QueryResultType[QueryResultType["WorkItem"] = 1] = "WorkItem";
    /**
     * A list of work item links (for OneHop and Tree queries).
     */
    QueryResultType[QueryResultType["WorkItemLink"] = 2] = "WorkItemLink";
})(QueryResultType || (QueryResultType = {}));
/**
 * The type of query.
 */
export var QueryType;
(function (QueryType) {
    /**
     * Gets a flat list of work items.
     */
    QueryType[QueryType["Flat"] = 1] = "Flat";
    /**
     * Gets a tree of work items showing their link hierarchy.
     */
    QueryType[QueryType["Tree"] = 2] = "Tree";
    /**
     * Gets a list of work items and their direct links.
     */
    QueryType[QueryType["OneHop"] = 3] = "OneHop";
})(QueryType || (QueryType = {}));
/**
 * The reporting revision expand level.
 */
export var ReportingRevisionsExpand;
(function (ReportingRevisionsExpand) {
    /**
     * Default behavior.
     */
    ReportingRevisionsExpand[ReportingRevisionsExpand["None"] = 0] = "None";
    /**
     * Add fields to the response.
     */
    ReportingRevisionsExpand[ReportingRevisionsExpand["Fields"] = 1] = "Fields";
})(ReportingRevisionsExpand || (ReportingRevisionsExpand = {}));
/**
 * Enumerates types of supported xml templates used for customization.
 */
export var TemplateType;
(function (TemplateType) {
    TemplateType[TemplateType["WorkItemType"] = 0] = "WorkItemType";
    TemplateType[TemplateType["GlobalWorkflow"] = 1] = "GlobalWorkflow";
})(TemplateType || (TemplateType = {}));
/**
 * Types of tree node structures.
 */
export var TreeNodeStructureType;
(function (TreeNodeStructureType) {
    /**
     * Area type.
     */
    TreeNodeStructureType[TreeNodeStructureType["Area"] = 0] = "Area";
    /**
     * Iteration type.
     */
    TreeNodeStructureType[TreeNodeStructureType["Iteration"] = 1] = "Iteration";
})(TreeNodeStructureType || (TreeNodeStructureType = {}));
/**
 * Types of tree structures groups.
 */
export var TreeStructureGroup;
(function (TreeStructureGroup) {
    TreeStructureGroup[TreeStructureGroup["Areas"] = 0] = "Areas";
    TreeStructureGroup[TreeStructureGroup["Iterations"] = 1] = "Iterations";
})(TreeStructureGroup || (TreeStructureGroup = {}));
/**
 * Enum to control error policy in a bulk get work items request.
 */
export var WorkItemErrorPolicy;
(function (WorkItemErrorPolicy) {
    /**
     * Fail work error policy.
     */
    WorkItemErrorPolicy[WorkItemErrorPolicy["Fail"] = 1] = "Fail";
    /**
     * Omit work error policy.
     */
    WorkItemErrorPolicy[WorkItemErrorPolicy["Omit"] = 2] = "Omit";
})(WorkItemErrorPolicy || (WorkItemErrorPolicy = {}));
/**
 * Flag to control payload properties from get work item command.
 */
export var WorkItemExpand;
(function (WorkItemExpand) {
    /**
     * Default behavior.
     */
    WorkItemExpand[WorkItemExpand["None"] = 0] = "None";
    /**
     * Relations work item expand.
     */
    WorkItemExpand[WorkItemExpand["Relations"] = 1] = "Relations";
    /**
     * Fields work item expand.
     */
    WorkItemExpand[WorkItemExpand["Fields"] = 2] = "Fields";
    /**
     * Links work item expand.
     */
    WorkItemExpand[WorkItemExpand["Links"] = 3] = "Links";
    /**
     * Expands all.
     */
    WorkItemExpand[WorkItemExpand["All"] = 4] = "All";
})(WorkItemExpand || (WorkItemExpand = {}));
/**
 * Type of the activity
 */
export var WorkItemRecentActivityType;
(function (WorkItemRecentActivityType) {
    WorkItemRecentActivityType[WorkItemRecentActivityType["Visited"] = 0] = "Visited";
    WorkItemRecentActivityType[WorkItemRecentActivityType["Edited"] = 1] = "Edited";
    WorkItemRecentActivityType[WorkItemRecentActivityType["Deleted"] = 2] = "Deleted";
    WorkItemRecentActivityType[WorkItemRecentActivityType["Restored"] = 3] = "Restored";
})(WorkItemRecentActivityType || (WorkItemRecentActivityType = {}));
/**
 * Expand options for the work item field(s) request.
 */
export var WorkItemTypeFieldsExpandLevel;
(function (WorkItemTypeFieldsExpandLevel) {
    /**
     * Includes only basic properties of the field.
     */
    WorkItemTypeFieldsExpandLevel[WorkItemTypeFieldsExpandLevel["None"] = 0] = "None";
    /**
     * Includes allowed values for the field.
     */
    WorkItemTypeFieldsExpandLevel[WorkItemTypeFieldsExpandLevel["AllowedValues"] = 1] = "AllowedValues";
    /**
     * Includes dependent fields of the field.
     */
    WorkItemTypeFieldsExpandLevel[WorkItemTypeFieldsExpandLevel["DependentFields"] = 2] = "DependentFields";
    /**
     * Includes allowed values and dependent fields of the field.
     */
    WorkItemTypeFieldsExpandLevel[WorkItemTypeFieldsExpandLevel["All"] = 3] = "All";
})(WorkItemTypeFieldsExpandLevel || (WorkItemTypeFieldsExpandLevel = {}));
