/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
/**
 * Specifies the additional data retrieval options for comments.
 */
export var CommentExpandOptions;
(function (CommentExpandOptions) {
    /**
     * Include comments only, no mentions, reactions or rendered text
     */
    CommentExpandOptions[CommentExpandOptions["None"] = 0] = "None";
    /**
     * Include comment reactions
     */
    CommentExpandOptions[CommentExpandOptions["Reactions"] = 1] = "Reactions";
    /**
     * Include the rendered text (html) in addition to markdown text
     */
    CommentExpandOptions[CommentExpandOptions["RenderedText"] = 8] = "RenderedText";
    /**
     * If specified, then ONLY rendered text (html) will be returned, w/o markdown. Supposed to be used internally from data provides for optimization purposes.
     */
    CommentExpandOptions[CommentExpandOptions["RenderedTextOnly"] = 16] = "RenderedTextOnly";
    /**
     * If specified, then responses will be expanded in the results
     */
    CommentExpandOptions[CommentExpandOptions["Children"] = 32] = "Children";
    /**
     * Expand everything including Reactions, Mentions and also include RenderedText (HTML) for markdown comments
     */
    CommentExpandOptions[CommentExpandOptions["All"] = -17] = "All";
})(CommentExpandOptions || (CommentExpandOptions = {}));
/**
 * Format of the comment. Ex. Markdown, Html.
 */
export var CommentFormat;
(function (CommentFormat) {
    CommentFormat[CommentFormat["Markdown"] = 0] = "Markdown";
    CommentFormat[CommentFormat["Html"] = 1] = "Html";
})(CommentFormat || (CommentFormat = {}));
export var CommentMentionType;
(function (CommentMentionType) {
    /**
     * An identity was mentioned by using the format \@\{VSID\}
     */
    CommentMentionType[CommentMentionType["Person"] = 0] = "Person";
    /**
     * A work item was mentioned by using the format #\{Work Item ID\}
     */
    CommentMentionType[CommentMentionType["WorkItem"] = 1] = "WorkItem";
    /**
     * A Pull Request was mentioned by using the format !\{PR Number\}
     */
    CommentMentionType[CommentMentionType["PullRequest"] = 2] = "PullRequest";
})(CommentMentionType || (CommentMentionType = {}));
/**
 * Represents different reaction types for a comment
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
 * Represents the possible comment states.
 */
export var CommentState;
(function (CommentState) {
    CommentState[CommentState["Active"] = 0] = "Active";
    CommentState[CommentState["Resolved"] = 1] = "Resolved";
    CommentState[CommentState["Closed"] = 2] = "Closed";
})(CommentState || (CommentState = {}));
