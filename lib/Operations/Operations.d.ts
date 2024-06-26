/**
 * Contains information about the progress or result of an async operation.
 */
export interface Operation extends OperationReference {
    /**
     * Links to other related objects.
     */
    _links: any;
    /**
     * Detailed messaged about the status of an operation.
     */
    detailedMessage: string;
    /**
     * Result message for an operation.
     */
    resultMessage: string;
    /**
     * URL to the operation result.
     */
    resultUrl: OperationResultReference;
}
/**
 * Reference for an async operation.
 */
export interface OperationReference {
    /**
     * Unique identifier for the operation.
     */
    id: string;
    /**
     * Unique identifier for the plugin.
     */
    pluginId: string;
    /**
     * The current status of the operation.
     */
    status: OperationStatus;
    /**
     * URL to get the full operation object.
     */
    url: string;
}
export interface OperationResultReference {
    /**
     * URL to the operation result.
     */
    resultUrl: string;
}
/**
 * The status of an operation.
 */
export declare enum OperationStatus {
    /**
     * The operation does not have a status set.
     */
    NotSet = 0,
    /**
     * The operation has been queued.
     */
    Queued = 1,
    /**
     * The operation is in progress.
     */
    InProgress = 2,
    /**
     * The operation was cancelled by the user.
     */
    Cancelled = 3,
    /**
     * The operation completed successfully.
     */
    Succeeded = 4,
    /**
     * The operation completed with a failure.
     */
    Failed = 5
}
