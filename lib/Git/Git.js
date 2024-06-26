/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
/**
 * The status of a comment thread.
 */
export var CommentThreadStatus;
(function (CommentThreadStatus) {
    /**
     * The thread status is unknown.
     */
    CommentThreadStatus[CommentThreadStatus["Unknown"] = 0] = "Unknown";
    /**
     * The thread status is active.
     */
    CommentThreadStatus[CommentThreadStatus["Active"] = 1] = "Active";
    /**
     * The thread status is resolved as fixed.
     */
    CommentThreadStatus[CommentThreadStatus["Fixed"] = 2] = "Fixed";
    /**
     * The thread status is resolved as won't fix.
     */
    CommentThreadStatus[CommentThreadStatus["WontFix"] = 3] = "WontFix";
    /**
     * The thread status is closed.
     */
    CommentThreadStatus[CommentThreadStatus["Closed"] = 4] = "Closed";
    /**
     * The thread status is resolved as by design.
     */
    CommentThreadStatus[CommentThreadStatus["ByDesign"] = 5] = "ByDesign";
    /**
     * The thread status is pending.
     */
    CommentThreadStatus[CommentThreadStatus["Pending"] = 6] = "Pending";
})(CommentThreadStatus || (CommentThreadStatus = {}));
/**
 * The type of a comment.
 */
export var CommentType;
(function (CommentType) {
    /**
     * The comment type is not known.
     */
    CommentType[CommentType["Unknown"] = 0] = "Unknown";
    /**
     * This is a regular user comment.
     */
    CommentType[CommentType["Text"] = 1] = "Text";
    /**
     * The comment comes as a result of a code change.
     */
    CommentType[CommentType["CodeChange"] = 2] = "CodeChange";
    /**
     * The comment represents a system message.
     */
    CommentType[CommentType["System"] = 3] = "System";
})(CommentType || (CommentType = {}));
/**
 * Current status of the asynchronous operation.
 */
export var GitAsyncOperationStatus;
(function (GitAsyncOperationStatus) {
    /**
     * The operation is waiting in a queue and has not yet started.
     */
    GitAsyncOperationStatus[GitAsyncOperationStatus["Queued"] = 1] = "Queued";
    /**
     * The operation is currently in progress.
     */
    GitAsyncOperationStatus[GitAsyncOperationStatus["InProgress"] = 2] = "InProgress";
    /**
     * The operation has completed.
     */
    GitAsyncOperationStatus[GitAsyncOperationStatus["Completed"] = 3] = "Completed";
    /**
     * The operation has failed. Check for an error message.
     */
    GitAsyncOperationStatus[GitAsyncOperationStatus["Failed"] = 4] = "Failed";
    /**
     * The operation has been abandoned.
     */
    GitAsyncOperationStatus[GitAsyncOperationStatus["Abandoned"] = 5] = "Abandoned";
})(GitAsyncOperationStatus || (GitAsyncOperationStatus = {}));
export var GitAsyncRefOperationFailureStatus;
(function (GitAsyncRefOperationFailureStatus) {
    /**
     * No status
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["None"] = 0] = "None";
    /**
     * Indicates that the ref update request could not be completed because the ref name presented in the request was not valid.
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["InvalidRefName"] = 1] = "InvalidRefName";
    /**
     * The ref update could not be completed because, in case-insensitive mode, the ref name conflicts with an existing, differently-cased ref name.
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["RefNameConflict"] = 2] = "RefNameConflict";
    /**
     * The ref update request could not be completed because the user lacks the permission to create a branch
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["CreateBranchPermissionRequired"] = 3] = "CreateBranchPermissionRequired";
    /**
     * The ref update request could not be completed because the user lacks write permissions required to write this ref
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["WritePermissionRequired"] = 4] = "WritePermissionRequired";
    /**
     * Target branch was deleted after Git async operation started
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["TargetBranchDeleted"] = 5] = "TargetBranchDeleted";
    /**
     * Git object is too large to materialize into memory
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["GitObjectTooLarge"] = 6] = "GitObjectTooLarge";
    /**
     * Identity who authorized the operation was not found
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["OperationIndentityNotFound"] = 7] = "OperationIndentityNotFound";
    /**
     * Async operation was not found
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["AsyncOperationNotFound"] = 8] = "AsyncOperationNotFound";
    /**
     * Unexpected failure
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["Other"] = 9] = "Other";
    /**
     * Initiator of async operation has signature with empty name or email
     */
    GitAsyncRefOperationFailureStatus[GitAsyncRefOperationFailureStatus["EmptyCommitterSignature"] = 10] = "EmptyCommitterSignature";
})(GitAsyncRefOperationFailureStatus || (GitAsyncRefOperationFailureStatus = {}));
/**
 * The type of a merge conflict.
 */
export var GitConflictType;
(function (GitConflictType) {
    /**
     * No conflict
     */
    GitConflictType[GitConflictType["None"] = 0] = "None";
    /**
     * Added on source and target; content differs
     */
    GitConflictType[GitConflictType["AddAdd"] = 1] = "AddAdd";
    /**
     * Added on source and rename destination on target
     */
    GitConflictType[GitConflictType["AddRename"] = 2] = "AddRename";
    /**
     * Deleted on source and edited on target
     */
    GitConflictType[GitConflictType["DeleteEdit"] = 3] = "DeleteEdit";
    /**
     * Deleted on source and renamed on target
     */
    GitConflictType[GitConflictType["DeleteRename"] = 4] = "DeleteRename";
    /**
     * Path is a directory on source and a file on target
     */
    GitConflictType[GitConflictType["DirectoryFile"] = 5] = "DirectoryFile";
    /**
     * Children of directory which has DirectoryFile or FileDirectory conflict
     */
    GitConflictType[GitConflictType["DirectoryChild"] = 6] = "DirectoryChild";
    /**
     * Edited on source and deleted on target
     */
    GitConflictType[GitConflictType["EditDelete"] = 7] = "EditDelete";
    /**
     * Edited on source and target; content differs
     */
    GitConflictType[GitConflictType["EditEdit"] = 8] = "EditEdit";
    /**
     * Path is a file on source and a directory on target
     */
    GitConflictType[GitConflictType["FileDirectory"] = 9] = "FileDirectory";
    /**
     * Same file renamed on both source and target; destination paths differ
     */
    GitConflictType[GitConflictType["Rename1to2"] = 10] = "Rename1to2";
    /**
     * Different files renamed to same destination path on both source and target
     */
    GitConflictType[GitConflictType["Rename2to1"] = 11] = "Rename2to1";
    /**
     * Rename destination on source and new file on target
     */
    GitConflictType[GitConflictType["RenameAdd"] = 12] = "RenameAdd";
    /**
     * Renamed on source and deleted on target
     */
    GitConflictType[GitConflictType["RenameDelete"] = 13] = "RenameDelete";
    /**
     * Rename destination on both source and target; content differs
     */
    GitConflictType[GitConflictType["RenameRename"] = 14] = "RenameRename";
})(GitConflictType || (GitConflictType = {}));
/**
 * Represents the possible outcomes from a request to update a pull request conflict
 */
export var GitConflictUpdateStatus;
(function (GitConflictUpdateStatus) {
    /**
     * Indicates that pull request conflict update request was completed successfully
     */
    GitConflictUpdateStatus[GitConflictUpdateStatus["Succeeded"] = 0] = "Succeeded";
    /**
     * Indicates that the update request did not fit the expected data contract
     */
    GitConflictUpdateStatus[GitConflictUpdateStatus["BadRequest"] = 1] = "BadRequest";
    /**
     * Indicates that the requested resolution was not valid
     */
    GitConflictUpdateStatus[GitConflictUpdateStatus["InvalidResolution"] = 2] = "InvalidResolution";
    /**
     * Indicates that the conflict in the update request was not a supported conflict type
     */
    GitConflictUpdateStatus[GitConflictUpdateStatus["UnsupportedConflictType"] = 3] = "UnsupportedConflictType";
    /**
     * Indicates that the conflict could not be found
     */
    GitConflictUpdateStatus[GitConflictUpdateStatus["NotFound"] = 4] = "NotFound";
})(GitConflictUpdateStatus || (GitConflictUpdateStatus = {}));
/**
 * Accepted types of version
 */
export var GitHistoryMode;
(function (GitHistoryMode) {
    /**
     * The history mode used by \`git log\`. This is the default.
     */
    GitHistoryMode[GitHistoryMode["SimplifiedHistory"] = 0] = "SimplifiedHistory";
    /**
     * The history mode used by \`git log --first-parent\`
     */
    GitHistoryMode[GitHistoryMode["FirstParent"] = 1] = "FirstParent";
    /**
     * The history mode used by \`git log --full-history\`
     */
    GitHistoryMode[GitHistoryMode["FullHistory"] = 2] = "FullHistory";
    /**
     * The history mode used by \`git log --full-history --simplify-merges\`
     */
    GitHistoryMode[GitHistoryMode["FullHistorySimplifyMerges"] = 3] = "FullHistorySimplifyMerges";
})(GitHistoryMode || (GitHistoryMode = {}));
export var GitObjectType;
(function (GitObjectType) {
    GitObjectType[GitObjectType["Bad"] = 0] = "Bad";
    GitObjectType[GitObjectType["Commit"] = 1] = "Commit";
    GitObjectType[GitObjectType["Tree"] = 2] = "Tree";
    GitObjectType[GitObjectType["Blob"] = 3] = "Blob";
    GitObjectType[GitObjectType["Tag"] = 4] = "Tag";
    GitObjectType[GitObjectType["Ext2"] = 5] = "Ext2";
    GitObjectType[GitObjectType["OfsDelta"] = 6] = "OfsDelta";
    GitObjectType[GitObjectType["RefDelta"] = 7] = "RefDelta";
})(GitObjectType || (GitObjectType = {}));
export var GitPathActions;
(function (GitPathActions) {
    GitPathActions[GitPathActions["None"] = 0] = "None";
    GitPathActions[GitPathActions["Edit"] = 1] = "Edit";
    GitPathActions[GitPathActions["Delete"] = 2] = "Delete";
    GitPathActions[GitPathActions["Add"] = 3] = "Add";
    GitPathActions[GitPathActions["Rename"] = 4] = "Rename";
})(GitPathActions || (GitPathActions = {}));
/**
 * Enumeration of possible merge strategies which can be used to complete a pull request.
 */
export var GitPullRequestMergeStrategy;
(function (GitPullRequestMergeStrategy) {
    /**
     * A two-parent, no-fast-forward merge. The source branch is unchanged. This is the default behavior.
     */
    GitPullRequestMergeStrategy[GitPullRequestMergeStrategy["NoFastForward"] = 1] = "NoFastForward";
    /**
     * Put all changes from the pull request into a single-parent commit.
     */
    GitPullRequestMergeStrategy[GitPullRequestMergeStrategy["Squash"] = 2] = "Squash";
    /**
     * Rebase the source branch on top of the target branch HEAD commit, and fast-forward the target branch. The source branch is updated during the rebase operation.
     */
    GitPullRequestMergeStrategy[GitPullRequestMergeStrategy["Rebase"] = 3] = "Rebase";
    /**
     * Rebase the source branch on top of the target branch HEAD commit, and create a two-parent, no-fast-forward merge. The source branch is updated during the rebase operation.
     */
    GitPullRequestMergeStrategy[GitPullRequestMergeStrategy["RebaseMerge"] = 4] = "RebaseMerge";
})(GitPullRequestMergeStrategy || (GitPullRequestMergeStrategy = {}));
/**
 * Accepted types of pull request queries.
 */
export var GitPullRequestQueryType;
(function (GitPullRequestQueryType) {
    /**
     * No query type set.
     */
    GitPullRequestQueryType[GitPullRequestQueryType["NotSet"] = 0] = "NotSet";
    /**
     * Search for pull requests that created the supplied merge commits.
     */
    GitPullRequestQueryType[GitPullRequestQueryType["LastMergeCommit"] = 1] = "LastMergeCommit";
    /**
     * Search for pull requests that merged the supplied commits.
     */
    GitPullRequestQueryType[GitPullRequestQueryType["Commit"] = 2] = "Commit";
})(GitPullRequestQueryType || (GitPullRequestQueryType = {}));
export var GitPullRequestReviewFileType;
(function (GitPullRequestReviewFileType) {
    GitPullRequestReviewFileType[GitPullRequestReviewFileType["ChangeEntry"] = 0] = "ChangeEntry";
    GitPullRequestReviewFileType[GitPullRequestReviewFileType["Attachment"] = 1] = "Attachment";
})(GitPullRequestReviewFileType || (GitPullRequestReviewFileType = {}));
/**
 * Search type on ref name
 */
export var GitRefSearchType;
(function (GitRefSearchType) {
    GitRefSearchType[GitRefSearchType["Exact"] = 0] = "Exact";
    GitRefSearchType[GitRefSearchType["StartsWith"] = 1] = "StartsWith";
    GitRefSearchType[GitRefSearchType["Contains"] = 2] = "Contains";
})(GitRefSearchType || (GitRefSearchType = {}));
/**
 * Enumerates the modes under which ref updates can be written to their repositories.
 */
export var GitRefUpdateMode;
(function (GitRefUpdateMode) {
    /**
     * Indicates the Git protocol model where any refs that can be updated will be updated, but any failures will not prevent other updates from succeeding.
     */
    GitRefUpdateMode[GitRefUpdateMode["BestEffort"] = 0] = "BestEffort";
    /**
     * Indicates that all ref updates must succeed or none will succeed. All ref updates will be atomically written. If any failure is encountered, previously successful updates will be rolled back and the entire operation will fail.
     */
    GitRefUpdateMode[GitRefUpdateMode["AllOrNone"] = 1] = "AllOrNone";
})(GitRefUpdateMode || (GitRefUpdateMode = {}));
/**
 * Represents the possible outcomes from a request to update a ref in a repository.
 */
export var GitRefUpdateStatus;
(function (GitRefUpdateStatus) {
    /**
     * Indicates that the ref update request was completed successfully.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["Succeeded"] = 0] = "Succeeded";
    /**
     * Indicates that the ref update request could not be completed because part of the graph would be disconnected by this change, and the caller does not have ForcePush permission on the repository.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["ForcePushRequired"] = 1] = "ForcePushRequired";
    /**
     * Indicates that the ref update request could not be completed because the old object ID presented in the request was not the object ID of the ref when the database attempted the update. The most likely scenario is that the caller lost a race to update the ref.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["StaleOldObjectId"] = 2] = "StaleOldObjectId";
    /**
     * Indicates that the ref update request could not be completed because the ref name presented in the request was not valid.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["InvalidRefName"] = 3] = "InvalidRefName";
    /**
     * The request was not processed
     */
    GitRefUpdateStatus[GitRefUpdateStatus["Unprocessed"] = 4] = "Unprocessed";
    /**
     * The ref update request could not be completed because the new object ID for the ref could not be resolved to a commit object (potentially through any number of tags)
     */
    GitRefUpdateStatus[GitRefUpdateStatus["UnresolvableToCommit"] = 5] = "UnresolvableToCommit";
    /**
     * The ref update request could not be completed because the user lacks write permissions required to write this ref
     */
    GitRefUpdateStatus[GitRefUpdateStatus["WritePermissionRequired"] = 6] = "WritePermissionRequired";
    /**
     * The ref update request could not be completed because the user lacks note creation permissions required to write this note
     */
    GitRefUpdateStatus[GitRefUpdateStatus["ManageNotePermissionRequired"] = 7] = "ManageNotePermissionRequired";
    /**
     * The ref update request could not be completed because the user lacks the permission to create a branch
     */
    GitRefUpdateStatus[GitRefUpdateStatus["CreateBranchPermissionRequired"] = 8] = "CreateBranchPermissionRequired";
    /**
     * The ref update request could not be completed because the user lacks the permission to create a tag
     */
    GitRefUpdateStatus[GitRefUpdateStatus["CreateTagPermissionRequired"] = 9] = "CreateTagPermissionRequired";
    /**
     * The ref update could not be completed because it was rejected by the plugin.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["RejectedByPlugin"] = 10] = "RejectedByPlugin";
    /**
     * The ref update could not be completed because the ref is locked by another user.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["Locked"] = 11] = "Locked";
    /**
     * The ref update could not be completed because, in case-insensitive mode, the ref name conflicts with an existing, differently-cased ref name.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["RefNameConflict"] = 12] = "RefNameConflict";
    /**
     * The ref update could not be completed because it was rejected by policy.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["RejectedByPolicy"] = 13] = "RejectedByPolicy";
    /**
     * Indicates that the ref update request was completed successfully, but the ref doesn't actually exist so no changes were made.  This should only happen during deletes.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["SucceededNonExistentRef"] = 14] = "SucceededNonExistentRef";
    /**
     * Indicates that the ref update request was completed successfully, but the passed-in ref was corrupt - as in, the old object ID was bad.  This should only happen during deletes.
     */
    GitRefUpdateStatus[GitRefUpdateStatus["SucceededCorruptRef"] = 15] = "SucceededCorruptRef";
})(GitRefUpdateStatus || (GitRefUpdateStatus = {}));
/**
 * The type of a merge conflict.
 */
export var GitResolutionError;
(function (GitResolutionError) {
    /**
     * No error
     */
    GitResolutionError[GitResolutionError["None"] = 0] = "None";
    /**
     * User set a blob id for resolving a content merge, but blob was not found in repo during application
     */
    GitResolutionError[GitResolutionError["MergeContentNotFound"] = 1] = "MergeContentNotFound";
    /**
     * Attempted to resolve a conflict by moving a file to another path, but path was already in use
     */
    GitResolutionError[GitResolutionError["PathInUse"] = 2] = "PathInUse";
    /**
     * No error
     */
    GitResolutionError[GitResolutionError["InvalidPath"] = 3] = "InvalidPath";
    /**
     * GitResolutionAction was set to an unrecognized value
     */
    GitResolutionError[GitResolutionError["UnknownAction"] = 4] = "UnknownAction";
    /**
     * GitResolutionMergeType was set to an unrecognized value
     */
    GitResolutionError[GitResolutionError["UnknownMergeType"] = 5] = "UnknownMergeType";
    /**
     * Any error for which a more specific code doesn't apply
     */
    GitResolutionError[GitResolutionError["OtherError"] = 255] = "OtherError";
})(GitResolutionError || (GitResolutionError = {}));
export var GitResolutionMergeType;
(function (GitResolutionMergeType) {
    GitResolutionMergeType[GitResolutionMergeType["Undecided"] = 0] = "Undecided";
    GitResolutionMergeType[GitResolutionMergeType["TakeSourceContent"] = 1] = "TakeSourceContent";
    GitResolutionMergeType[GitResolutionMergeType["TakeTargetContent"] = 2] = "TakeTargetContent";
    GitResolutionMergeType[GitResolutionMergeType["AutoMerged"] = 3] = "AutoMerged";
    GitResolutionMergeType[GitResolutionMergeType["UserMerged"] = 4] = "UserMerged";
})(GitResolutionMergeType || (GitResolutionMergeType = {}));
export var GitResolutionPathConflictAction;
(function (GitResolutionPathConflictAction) {
    GitResolutionPathConflictAction[GitResolutionPathConflictAction["Undecided"] = 0] = "Undecided";
    GitResolutionPathConflictAction[GitResolutionPathConflictAction["KeepSourceRenameTarget"] = 1] = "KeepSourceRenameTarget";
    GitResolutionPathConflictAction[GitResolutionPathConflictAction["KeepSourceDeleteTarget"] = 2] = "KeepSourceDeleteTarget";
    GitResolutionPathConflictAction[GitResolutionPathConflictAction["KeepTargetRenameSource"] = 3] = "KeepTargetRenameSource";
    GitResolutionPathConflictAction[GitResolutionPathConflictAction["KeepTargetDeleteSource"] = 4] = "KeepTargetDeleteSource";
})(GitResolutionPathConflictAction || (GitResolutionPathConflictAction = {}));
export var GitResolutionRename1to2Action;
(function (GitResolutionRename1to2Action) {
    GitResolutionRename1to2Action[GitResolutionRename1to2Action["Undecided"] = 0] = "Undecided";
    GitResolutionRename1to2Action[GitResolutionRename1to2Action["KeepSourcePath"] = 1] = "KeepSourcePath";
    GitResolutionRename1to2Action[GitResolutionRename1to2Action["KeepTargetPath"] = 2] = "KeepTargetPath";
    GitResolutionRename1to2Action[GitResolutionRename1to2Action["KeepBothFiles"] = 3] = "KeepBothFiles";
})(GitResolutionRename1to2Action || (GitResolutionRename1to2Action = {}));
/**
 * Resolution status of a conflict.
 */
export var GitResolutionStatus;
(function (GitResolutionStatus) {
    GitResolutionStatus[GitResolutionStatus["Unresolved"] = 0] = "Unresolved";
    GitResolutionStatus[GitResolutionStatus["PartiallyResolved"] = 1] = "PartiallyResolved";
    GitResolutionStatus[GitResolutionStatus["Resolved"] = 2] = "Resolved";
})(GitResolutionStatus || (GitResolutionStatus = {}));
export var GitResolutionWhichAction;
(function (GitResolutionWhichAction) {
    GitResolutionWhichAction[GitResolutionWhichAction["Undecided"] = 0] = "Undecided";
    GitResolutionWhichAction[GitResolutionWhichAction["PickSourceAction"] = 1] = "PickSourceAction";
    GitResolutionWhichAction[GitResolutionWhichAction["PickTargetAction"] = 2] = "PickTargetAction";
})(GitResolutionWhichAction || (GitResolutionWhichAction = {}));
/**
 * State of the status.
 */
export var GitStatusState;
(function (GitStatusState) {
    /**
     * Status state not set. Default state.
     */
    GitStatusState[GitStatusState["NotSet"] = 0] = "NotSet";
    /**
     * Status pending.
     */
    GitStatusState[GitStatusState["Pending"] = 1] = "Pending";
    /**
     * Status succeeded.
     */
    GitStatusState[GitStatusState["Succeeded"] = 2] = "Succeeded";
    /**
     * Status failed.
     */
    GitStatusState[GitStatusState["Failed"] = 3] = "Failed";
    /**
     * Status with an error.
     */
    GitStatusState[GitStatusState["Error"] = 4] = "Error";
    /**
     * Status is not applicable to the target object.
     */
    GitStatusState[GitStatusState["NotApplicable"] = 5] = "NotApplicable";
    /**
     * Status Partially Succeeded, build finished with warnings.
     */
    GitStatusState[GitStatusState["PartiallySucceeded"] = 6] = "PartiallySucceeded";
})(GitStatusState || (GitStatusState = {}));
/**
 * Accepted types of version options
 */
export var GitVersionOptions;
(function (GitVersionOptions) {
    /**
     * Not specified
     */
    GitVersionOptions[GitVersionOptions["None"] = 0] = "None";
    /**
     * Commit that changed item prior to the current version
     */
    GitVersionOptions[GitVersionOptions["PreviousChange"] = 1] = "PreviousChange";
    /**
     * First parent of commit (HEAD^)
     */
    GitVersionOptions[GitVersionOptions["FirstParent"] = 2] = "FirstParent";
})(GitVersionOptions || (GitVersionOptions = {}));
/**
 * Accepted types of version
 */
export var GitVersionType;
(function (GitVersionType) {
    /**
     * Interpret the version as a branch name
     */
    GitVersionType[GitVersionType["Branch"] = 0] = "Branch";
    /**
     * Interpret the version as a tag name
     */
    GitVersionType[GitVersionType["Tag"] = 1] = "Tag";
    /**
     * Interpret the version as a commit ID (SHA1)
     */
    GitVersionType[GitVersionType["Commit"] = 2] = "Commit";
})(GitVersionType || (GitVersionType = {}));
export var ItemContentType;
(function (ItemContentType) {
    ItemContentType[ItemContentType["RawText"] = 0] = "RawText";
    ItemContentType[ItemContentType["Base64Encoded"] = 1] = "Base64Encoded";
})(ItemContentType || (ItemContentType = {}));
/**
 * The reason for which the pull request iteration was created.
 */
export var IterationReason;
(function (IterationReason) {
    IterationReason[IterationReason["Push"] = 0] = "Push";
    IterationReason[IterationReason["ForcePush"] = 1] = "ForcePush";
    IterationReason[IterationReason["Create"] = 2] = "Create";
    IterationReason[IterationReason["Rebase"] = 4] = "Rebase";
    IterationReason[IterationReason["Unknown"] = 8] = "Unknown";
    IterationReason[IterationReason["Retarget"] = 16] = "Retarget";
    IterationReason[IterationReason["ResolveConflicts"] = 32] = "ResolveConflicts";
})(IterationReason || (IterationReason = {}));
/**
 * Type of change for a line diff block
 */
export var LineDiffBlockChangeType;
(function (LineDiffBlockChangeType) {
    /**
     * No change - both the blocks are identical
     */
    LineDiffBlockChangeType[LineDiffBlockChangeType["None"] = 0] = "None";
    /**
     * Lines were added to the block in the modified file
     */
    LineDiffBlockChangeType[LineDiffBlockChangeType["Add"] = 1] = "Add";
    /**
     * Lines were deleted from the block in the original file
     */
    LineDiffBlockChangeType[LineDiffBlockChangeType["Delete"] = 2] = "Delete";
    /**
     * Lines were modified
     */
    LineDiffBlockChangeType[LineDiffBlockChangeType["Edit"] = 3] = "Edit";
})(LineDiffBlockChangeType || (LineDiffBlockChangeType = {}));
/**
 * The status of a pull request merge.
 */
export var PullRequestAsyncStatus;
(function (PullRequestAsyncStatus) {
    /**
     * Status is not set. Default state.
     */
    PullRequestAsyncStatus[PullRequestAsyncStatus["NotSet"] = 0] = "NotSet";
    /**
     * Pull request merge is queued.
     */
    PullRequestAsyncStatus[PullRequestAsyncStatus["Queued"] = 1] = "Queued";
    /**
     * Pull request merge failed due to conflicts.
     */
    PullRequestAsyncStatus[PullRequestAsyncStatus["Conflicts"] = 2] = "Conflicts";
    /**
     * Pull request merge succeeded.
     */
    PullRequestAsyncStatus[PullRequestAsyncStatus["Succeeded"] = 3] = "Succeeded";
    /**
     * Pull request merge rejected by policy.
     */
    PullRequestAsyncStatus[PullRequestAsyncStatus["RejectedByPolicy"] = 4] = "RejectedByPolicy";
    /**
     * Pull request merge failed.
     */
    PullRequestAsyncStatus[PullRequestAsyncStatus["Failure"] = 5] = "Failure";
})(PullRequestAsyncStatus || (PullRequestAsyncStatus = {}));
/**
 * The specific type of a pull request merge failure.
 */
export var PullRequestMergeFailureType;
(function (PullRequestMergeFailureType) {
    /**
     * Type is not set. Default type.
     */
    PullRequestMergeFailureType[PullRequestMergeFailureType["None"] = 0] = "None";
    /**
     * Pull request merge failure type unknown.
     */
    PullRequestMergeFailureType[PullRequestMergeFailureType["Unknown"] = 1] = "Unknown";
    /**
     * Pull request merge failed due to case mismatch.
     */
    PullRequestMergeFailureType[PullRequestMergeFailureType["CaseSensitive"] = 2] = "CaseSensitive";
    /**
     * Pull request merge failed due to an object being too large.
     */
    PullRequestMergeFailureType[PullRequestMergeFailureType["ObjectTooLarge"] = 3] = "ObjectTooLarge";
})(PullRequestMergeFailureType || (PullRequestMergeFailureType = {}));
/**
 * Status of a pull request.
 */
export var PullRequestStatus;
(function (PullRequestStatus) {
    /**
     * Status not set. Default state.
     */
    PullRequestStatus[PullRequestStatus["NotSet"] = 0] = "NotSet";
    /**
     * Pull request is active.
     */
    PullRequestStatus[PullRequestStatus["Active"] = 1] = "Active";
    /**
     * Pull request is abandoned.
     */
    PullRequestStatus[PullRequestStatus["Abandoned"] = 2] = "Abandoned";
    /**
     * Pull request is completed.
     */
    PullRequestStatus[PullRequestStatus["Completed"] = 3] = "Completed";
    /**
     * Used in pull request search criteria to include all statuses.
     */
    PullRequestStatus[PullRequestStatus["All"] = 4] = "All";
})(PullRequestStatus || (PullRequestStatus = {}));
/**
 * Specifies the desired type of time range for pull requests queries.
 */
export var PullRequestTimeRangeType;
(function (PullRequestTimeRangeType) {
    /**
     * The date when the pull request was created.
     */
    PullRequestTimeRangeType[PullRequestTimeRangeType["Created"] = 1] = "Created";
    /**
     * The date when the pull request was closed (completed, abandoned, or merged externally).
     */
    PullRequestTimeRangeType[PullRequestTimeRangeType["Closed"] = 2] = "Closed";
})(PullRequestTimeRangeType || (PullRequestTimeRangeType = {}));
export var RefFavoriteType;
(function (RefFavoriteType) {
    RefFavoriteType[RefFavoriteType["Invalid"] = 0] = "Invalid";
    RefFavoriteType[RefFavoriteType["Folder"] = 1] = "Folder";
    RefFavoriteType[RefFavoriteType["Ref"] = 2] = "Ref";
})(RefFavoriteType || (RefFavoriteType = {}));
/**
 * Enumeration that represents the types of IDEs supported.
 */
export var SupportedIdeType;
(function (SupportedIdeType) {
    SupportedIdeType[SupportedIdeType["Unknown"] = 0] = "Unknown";
    SupportedIdeType[SupportedIdeType["AndroidStudio"] = 1] = "AndroidStudio";
    SupportedIdeType[SupportedIdeType["AppCode"] = 2] = "AppCode";
    SupportedIdeType[SupportedIdeType["CLion"] = 3] = "CLion";
    SupportedIdeType[SupportedIdeType["DataGrip"] = 4] = "DataGrip";
    SupportedIdeType[SupportedIdeType["Eclipse"] = 13] = "Eclipse";
    SupportedIdeType[SupportedIdeType["IntelliJ"] = 5] = "IntelliJ";
    SupportedIdeType[SupportedIdeType["MPS"] = 6] = "MPS";
    SupportedIdeType[SupportedIdeType["PhpStorm"] = 7] = "PhpStorm";
    SupportedIdeType[SupportedIdeType["PyCharm"] = 8] = "PyCharm";
    SupportedIdeType[SupportedIdeType["RubyMine"] = 9] = "RubyMine";
    SupportedIdeType[SupportedIdeType["Tower"] = 10] = "Tower";
    SupportedIdeType[SupportedIdeType["VisualStudio"] = 11] = "VisualStudio";
    SupportedIdeType[SupportedIdeType["VSCode"] = 14] = "VSCode";
    SupportedIdeType[SupportedIdeType["WebStorm"] = 12] = "WebStorm";
})(SupportedIdeType || (SupportedIdeType = {}));
/**
 * Options for Version handling.
 */
export var TfvcVersionOption;
(function (TfvcVersionOption) {
    /**
     * None.
     */
    TfvcVersionOption[TfvcVersionOption["None"] = 0] = "None";
    /**
     * Return the previous version.
     */
    TfvcVersionOption[TfvcVersionOption["Previous"] = 1] = "Previous";
    /**
     * Only usuable with versiontype MergeSource and integer versions, uses RenameSource identifier instead of Merge identifier.
     */
    TfvcVersionOption[TfvcVersionOption["UseRename"] = 2] = "UseRename";
})(TfvcVersionOption || (TfvcVersionOption = {}));
/**
 * Type of Version object
 */
export var TfvcVersionType;
(function (TfvcVersionType) {
    /**
     * Version is treated as a ChangesetId.
     */
    TfvcVersionType[TfvcVersionType["None"] = 0] = "None";
    /**
     * Version is treated as a ChangesetId.
     */
    TfvcVersionType[TfvcVersionType["Changeset"] = 1] = "Changeset";
    /**
     * Version is treated as a Shelveset name and owner.
     */
    TfvcVersionType[TfvcVersionType["Shelveset"] = 2] = "Shelveset";
    /**
     * Version is treated as a Change.
     */
    TfvcVersionType[TfvcVersionType["Change"] = 3] = "Change";
    /**
     * Version is treated as a Date.
     */
    TfvcVersionType[TfvcVersionType["Date"] = 4] = "Date";
    /**
     * If Version is defined the Latest of that Version will be used, if no version is defined the latest ChangesetId will be used.
     */
    TfvcVersionType[TfvcVersionType["Latest"] = 5] = "Latest";
    /**
     * Version will be treated as a Tip, if no version is defined latest will be used.
     */
    TfvcVersionType[TfvcVersionType["Tip"] = 6] = "Tip";
    /**
     * Version will be treated as a MergeSource.
     */
    TfvcVersionType[TfvcVersionType["MergeSource"] = 7] = "MergeSource";
})(TfvcVersionType || (TfvcVersionType = {}));
export var VersionControlChangeType;
(function (VersionControlChangeType) {
    VersionControlChangeType[VersionControlChangeType["None"] = 0] = "None";
    VersionControlChangeType[VersionControlChangeType["Add"] = 1] = "Add";
    VersionControlChangeType[VersionControlChangeType["Edit"] = 2] = "Edit";
    VersionControlChangeType[VersionControlChangeType["Encoding"] = 4] = "Encoding";
    VersionControlChangeType[VersionControlChangeType["Rename"] = 8] = "Rename";
    VersionControlChangeType[VersionControlChangeType["Delete"] = 16] = "Delete";
    VersionControlChangeType[VersionControlChangeType["Undelete"] = 32] = "Undelete";
    VersionControlChangeType[VersionControlChangeType["Branch"] = 64] = "Branch";
    VersionControlChangeType[VersionControlChangeType["Merge"] = 128] = "Merge";
    VersionControlChangeType[VersionControlChangeType["Lock"] = 256] = "Lock";
    VersionControlChangeType[VersionControlChangeType["Rollback"] = 512] = "Rollback";
    VersionControlChangeType[VersionControlChangeType["SourceRename"] = 1024] = "SourceRename";
    VersionControlChangeType[VersionControlChangeType["TargetRename"] = 2048] = "TargetRename";
    VersionControlChangeType[VersionControlChangeType["Property"] = 4096] = "Property";
    VersionControlChangeType[VersionControlChangeType["All"] = 8191] = "All";
})(VersionControlChangeType || (VersionControlChangeType = {}));
export var VersionControlRecursionType;
(function (VersionControlRecursionType) {
    /**
     * Only return the specified item.
     */
    VersionControlRecursionType[VersionControlRecursionType["None"] = 0] = "None";
    /**
     * Return the specified item and its direct children.
     */
    VersionControlRecursionType[VersionControlRecursionType["OneLevel"] = 1] = "OneLevel";
    /**
     * Return the specified item and its direct children, as well as recursive chains of nested child folders that only contain a single folder.
     */
    VersionControlRecursionType[VersionControlRecursionType["OneLevelPlusNestedEmptyFolders"] = 4] = "OneLevelPlusNestedEmptyFolders";
    /**
     * Return specified item and all descendants
     */
    VersionControlRecursionType[VersionControlRecursionType["Full"] = 120] = "Full";
})(VersionControlRecursionType || (VersionControlRecursionType = {}));
