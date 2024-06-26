import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";
import * as TfsCore from "../Core/Core";
import * as Git from "../Git/Git";
import * as WebApi from "../WebApi/WebApi";
export declare class GitRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions);
    static readonly RESOURCE_AREA_ID: string;
    /**
     * DELETE Deletes Enablement status and BillableCommitters data from DB. Deleting the enablement data will effectively disable it for the repositories affected.
     *
     * @param allProjects -
     * @param includeBillableCommitters -
     * @param projectIds -
     */
    deleteEnablementStatus(allProjects: boolean, includeBillableCommitters?: boolean, projectIds?: string[]): Promise<void>;
    /**
     * GET Enablement status for project's repositories.
     *
     * @param projectIds - Null defaults to all projects in the host, list of project's repos status to return
     * @param billingDate - UTC expected, Null defaults to UtcNow(), can be provided for a point in time status
     * @param skip - Skip X rows of resultset to simulate paging.
     * @param take - Return Y rows of resultset to simulate paging.
     */
    getEnablementStatus(projectIds?: string[], billingDate?: Date, skip?: number, take?: number): Promise<Git.AdvSecEnablementStatus[]>;
    /**
     * @param enableOnCreateHost -
     */
    getEnableOnCreateHost(enableOnCreateHost: boolean): Promise<boolean>;
    /**
     * @param enableOnCreateProjectId -
     */
    getEnableOnCreateProject(enableOnCreateProjectId: string): Promise<boolean>;
    /**
     * @param enableOnCreateHost -
     */
    setEnableOnCreateHost(enableOnCreateHost: boolean): Promise<void>;
    /**
     * @param enableOnCreateProjectId -
     * @param enableOnStatus -
     */
    setEnableOnCreateProject(enableOnCreateProjectId: string, enableOnStatus: boolean): Promise<void>;
    /**
     * POST Enablement status for repositories.
     *
     * @param enablementUpdates -
     */
    updateEnablementStatus(enablementUpdates: Git.AdvSecEnablementUpdate[]): Promise<void>;
    /**
     * Get estimated billable pushers for an Organization for last 90 days.
     *
     */
    getEstimatedBillablePushersOrg(): Promise<Git.BillablePusher[]>;
    /**
     * Get estimated billable pushers for a project for last 90 days.
     *
     * @param project - Project ID or project name
     */
    getEstimatedBillablePushersProject(project: string): Promise<Git.BillablePusher[]>;
    /**
     * Get estimated billable committers for a repository for the last 90 days.
     *
     * @param project - Project ID or project name
     * @param repositoryId -
     */
    getEstimatedBillableCommittersRepo(project: string, repositoryId: string): Promise<Git.BillableCommitter[]>;
    /**
     * GET Advanced Security Permission status.
     *
     * @param projectName -
     * @param repositoryId - Repository user is trying to access
     * @param permission - Permission being requestd, must be "viewAlert" "dismissAlert" "manage" "viewEnablement" or "repoRead"
     */
    getPermission(projectName?: string, repositoryId?: string, permission?: string): Promise<boolean>;
    /**
     * Create an annotated tag.
     *
     * @param tagObject - Object containing details of tag to be created.
     * @param project - Project ID or project name
     * @param repositoryId - ID or name of the repository.
     */
    createAnnotatedTag(tagObject: Git.GitAnnotatedTag, project: string, repositoryId: string): Promise<Git.GitAnnotatedTag>;
    /**
     * Get an annotated tag.
     *
     * @param project - Project ID or project name
     * @param repositoryId - ID or name of the repository.
     * @param objectId - ObjectId (Sha1Id) of tag to get.
     */
    getAnnotatedTag(project: string, repositoryId: string, objectId: string): Promise<Git.GitAnnotatedTag>;
    /**
     * Retrieve actual billable committers for Advanced Security service for a given date.
     *
     * @param project - Project ID or project name
     * @param billingDate - UTC expected.  If not specified defaults to the previous billing day.
     * @param skip - Skip X rows of resultset to simulate paging.
     * @param take - Return Y rows of resultset to simulate paging.
     */
    getBillableCommitters(project: string, billingDate?: Date, skip?: number, take?: number): Promise<Git.BillableCommitter[]>;
    /**
     * Retrieve detailed actual billable committers for Advanced Security service for a given date. Detailed results intentionally does not filter out soft deleted projects and repositories to help diagnose billing issues.
     *
     * @param project - Project ID or project name
     * @param includeDetails - Return all the details on the billable committers.
     * @param billingDate - UTC expected. If not specified defaults to the previous billing day.
     */
    getBillableCommittersDetail(project: string, includeDetails: string, billingDate?: Date): Promise<Git.BillableCommitterDetail[]>;
    /**
     * Get a single blob.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param project - Project ID or project name
     * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param fileName - Provide a fileName to use for a download.
     * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    getBlob(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string, resolveLfs?: boolean): Promise<Git.GitBlobRef>;
    /**
     * Get a single blob.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param project - Project ID or project name
     * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param fileName - Provide a fileName to use for a download.
     * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    getBlobContent(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string, resolveLfs?: boolean): Promise<ArrayBuffer>;
    /**
     * Gets one or more blobs in a zip file download.
     *
     * @param blobIds - Blob IDs (SHA1 hashes) to be returned in the zip file.
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param filename -
     */
    getBlobsZip(blobIds: string[], repositoryId: string, project?: string, filename?: string): Promise<ArrayBuffer>;
    /**
     * Get a single blob.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param sha1 - SHA1 hash of the file. You can get the SHA1 of a file using the "Git/Items/Get Item" endpoint.
     * @param project - Project ID or project name
     * @param download - If true, prompt for a download rather than rendering in a browser. Note: this value defaults to true if $format is zip
     * @param fileName - Provide a fileName to use for a download.
     * @param resolveLfs - If true, try to resolve a blob to its LFS contents, if it's an LFS pointer file. Only compatible with octet-stream Accept headers or $format types
     */
    getBlobZip(repositoryId: string, sha1: string, project?: string, download?: boolean, fileName?: string, resolveLfs?: boolean): Promise<ArrayBuffer>;
    /**
     * Retrieve statistics about a single branch.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param name - Name of the branch.
     * @param project - Project ID or project name
     * @param baseVersionDescriptor - Identifies the commit or branch to use as the base.
     */
    getBranch(repositoryId: string, name: string, project?: string, baseVersionDescriptor?: Git.GitVersionDescriptor): Promise<Git.GitBranchStats>;
    /**
     * Retrieve statistics about all branches within a repository.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param baseVersionDescriptor - Identifies the commit or branch to use as the base.
     */
    getBranches(repositoryId: string, project?: string, baseVersionDescriptor?: Git.GitVersionDescriptor): Promise<Git.GitBranchStats[]>;
    /**
     * Retrieve statistics for multiple commits
     *
     * @param searchCriteria - Base Commit and List of Target Commits to compare.
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     */
    getBranchStatsBatch(searchCriteria: Git.GitQueryBranchStatsCriteria, repositoryId: string, project?: string): Promise<Git.GitBranchStats[]>;
    /**
     * Retrieve changes for a particular commit.
     *
     * @param commitId - The id of the commit.
     * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param project - Project ID or project name
     * @param top - The maximum number of changes to return.
     * @param skip - The number of changes to skip.
     */
    getChanges(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number): Promise<Git.GitCommitChanges>;
    /**
     * Retrieve one conflict for a cherry pick by ID
     *
     * @param repositoryId -
     * @param cherryPickId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    getCherryPickConflict(repositoryId: string, cherryPickId: number, conflictId: number, project?: string): Promise<Git.GitConflict>;
    /**
     * Retrieve all conflicts for a cherry pick
     *
     * @param repositoryId -
     * @param cherryPickId -
     * @param project - Project ID or project name
     * @param continuationToken -
     * @param top -
     * @param excludeResolved -
     * @param onlyResolved -
     * @param includeObsolete -
     */
    getCherryPickConflicts(repositoryId: string, cherryPickId: number, project?: string, continuationToken?: string, top?: number, excludeResolved?: boolean, onlyResolved?: boolean, includeObsolete?: boolean): Promise<WebApi.PagedList<Git.GitConflict>>;
    /**
     * Update merge conflict resolution
     *
     * @param conflict -
     * @param repositoryId -
     * @param cherryPickId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    updateCherryPickConflict(conflict: Git.GitConflict, repositoryId: string, cherryPickId: number, conflictId: number, project?: string): Promise<Git.GitConflict>;
    /**
     * Update multiple merge conflict resolutions
     *
     * @param conflictUpdates -
     * @param repositoryId -
     * @param cherryPickId -
     * @param project - Project ID or project name
     */
    updateCherryPickConflicts(conflictUpdates: Git.GitConflict[], repositoryId: string, cherryPickId: number, project?: string): Promise<Git.GitConflictUpdateResult[]>;
    /**
     * Given a commitId, returns a list of commits that are in the same cherry-pick family.
     *
     * @param repositoryNameOrId -
     * @param commitId -
     * @param project - Project ID or project name
     * @param includeLinks -
     */
    getCherryPickRelationships(repositoryNameOrId: string, commitId: string, project?: string, includeLinks?: boolean): Promise<Git.GitCommitRef[]>;
    /**
     * Cherry pick a specific commit or commits that are associated to a pull request into a new branch.
     *
     * @param cherryPickToCreate -
     * @param project - Project ID or project name
     * @param repositoryId - ID of the repository.
     */
    createCherryPick(cherryPickToCreate: Git.GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<Git.GitCherryPick>;
    /**
     * Retrieve information about a cherry pick operation by cherry pick Id.
     *
     * @param project - Project ID or project name
     * @param cherryPickId - ID of the cherry pick.
     * @param repositoryId - ID of the repository.
     */
    getCherryPick(project: string, cherryPickId: number, repositoryId: string): Promise<Git.GitCherryPick>;
    /**
     * Retrieve information about a cherry pick operation for a specific branch. This operation is expensive due to the underlying object structure, so this API only looks at the 1000 most recent cherry pick operations.
     *
     * @param project - Project ID or project name
     * @param repositoryId - ID of the repository.
     * @param refName - The GitAsyncRefOperationParameters generatedRefName used for the cherry pick operation.
     */
    getCherryPickForRefName(project: string, repositoryId: string, refName: string): Promise<Git.GitCherryPick>;
    /**
     * Find the closest common commit (the merge base) between base and target commits, and get the diff between either the base and target commits or common and target commits.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param diffCommonCommit - If true, diff between common and target commits. If false, diff between base and target commits.
     * @param top - Maximum number of changes to return. Defaults to 100.
     * @param skip - Number of changes to skip
     * @param baseVersionDescriptor - Descriptor for base commit.
     * @param targetVersionDescriptor - Descriptor for target commit.
     */
    getCommitDiffs(repositoryId: string, project?: string, diffCommonCommit?: boolean, top?: number, skip?: number, baseVersionDescriptor?: Git.GitBaseVersionDescriptor, targetVersionDescriptor?: Git.GitTargetVersionDescriptor): Promise<Git.GitCommitDiffs>;
    /**
     * Retrieve a particular commit.
     *
     * @param commitId - The id of the commit.
     * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param project - Project ID or project name
     * @param changeCount - The number of changes to include in the result.
     */
    getCommit(commitId: string, repositoryId: string, project?: string, changeCount?: number): Promise<Git.GitCommit>;
    /**
     * Retrieve git commits for a project
     *
     * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param searchCriteria -
     * @param project - Project ID or project name
     */
    getCommits(repositoryId: string, searchCriteria: Git.GitQueryCommitsCriteria, project?: string): Promise<Git.GitCommitRef[]>;
    /**
     * Retrieve a list of commits associated with a particular push.
     *
     * @param repositoryId - The id or friendly name of the repository. To use the friendly name, projectId must also be specified.
     * @param pushId - The id of the push.
     * @param project - Project ID or project name
     * @param top - The maximum number of commits to return ("get the top x commits").
     * @param skip - The number of commits to skip.
     * @param includeLinks - Set to false to avoid including REST Url links for resources. Defaults to true.
     */
    getPushCommits(repositoryId: string, pushId: number, project?: string, top?: number, skip?: number, includeLinks?: boolean): Promise<Git.GitCommitRef[]>;
    /**
     * Retrieve git commits for a project matching the search criteria
     *
     * @param searchCriteria - Search options
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param skip - Number of commits to skip. The value cannot exceed 3,000,000.
     * @param top - Maximum number of commits to return. The value cannot exceed 50,000.
     * @param includeStatuses - True to include additional commit status information.
     */
    getCommitsBatch(searchCriteria: Git.GitQueryCommitsCriteria, repositoryId: string, project?: string, skip?: number, top?: number, includeStatuses?: boolean): Promise<Git.GitCommitRef[]>;
    /**
     * Retrieve deleted git repositories.
     *
     * @param project - Project ID or project name
     */
    getDeletedRepositories(project: string): Promise<Git.GitDeletedRepository[]>;
    /**
     * Get the file diffs for each of the specified files
     *
     * @param fileDiffsCriteria - List of file parameters objects
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository
     */
    getFileDiffs(fileDiffsCriteria: Git.FileDiffsCriteria, project: string, repositoryId: string): Promise<Git.FileDiff[]>;
    /**
     * Retrieve all forks of a repository in the collection.
     *
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param collectionId - Team project collection ID.
     * @param project - Project ID or project name
     * @param includeLinks - True to include links.
     */
    getForks(repositoryNameOrId: string, collectionId: string, project?: string, includeLinks?: boolean): Promise<Git.GitRepositoryRef[]>;
    /**
     * Request that another repository's refs be fetched into this one. It syncs two existing forks. To create a fork, please see the \<a href="https://docs.microsoft.com/en-us/rest/api/vsts/git/repositories/create?view=azure-devops-rest-5.1"\> repositories endpoint\</a\>
     *
     * @param syncParams - Source repository and ref mapping.
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param includeLinks - True to include links
     */
    createForkSyncRequest(syncParams: Git.GitForkSyncRequestParameters, repositoryNameOrId: string, project?: string, includeLinks?: boolean): Promise<Git.GitForkSyncRequest>;
    /**
     * Get a specific fork sync operation's details.
     *
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param forkSyncOperationId - OperationId of the sync request.
     * @param project - Project ID or project name
     * @param includeLinks - True to include links.
     */
    getForkSyncRequest(repositoryNameOrId: string, forkSyncOperationId: number, project?: string, includeLinks?: boolean): Promise<Git.GitForkSyncRequest>;
    /**
     * Retrieve all requested fork sync operations on this repository.
     *
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param includeAbandoned - True to include abandoned requests.
     * @param includeLinks - True to include links.
     */
    getForkSyncRequests(repositoryNameOrId: string, project?: string, includeAbandoned?: boolean, includeLinks?: boolean): Promise<Git.GitForkSyncRequest[]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveHfs - Set to true to resolve Git HFS pointer files to return actual content from Git HFS.  Default is true.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    getHfsItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Git.GitVersionDescriptor, includeContent?: boolean, resolveHfs?: boolean, sanitize?: boolean): Promise<Git.GitItem>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveHfs - Set to true to resolve Git HFS pointer files to return actual content from Git HFS.  Default is true.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    getHfsItemContent(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Git.GitVersionDescriptor, includeContent?: boolean, resolveHfs?: boolean, sanitize?: boolean): Promise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveHfs - Set to true to resolve Git HFS pointer files to return actual content from Git HFS.  Default is true.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    getHfsItemText(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Git.GitVersionDescriptor, includeContent?: boolean, resolveHfs?: boolean, sanitize?: boolean): Promise<string>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveHfs - Set to true to resolve Git HFS pointer files to return actual content from Git HFS.  Default is true.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    getHfsItemZip(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Git.GitVersionDescriptor, includeContent?: boolean, resolveHfs?: boolean, sanitize?: boolean): Promise<ArrayBuffer>;
    /**
     * Create an import request.
     *
     * @param importRequest - The import request to create.
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository.
     */
    createImportRequest(importRequest: Git.GitImportRequest, project: string, repositoryId: string): Promise<Git.GitImportRequest>;
    /**
     * Retrieve a particular import request.
     *
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository.
     * @param importRequestId - The unique identifier for the import request.
     */
    getImportRequest(project: string, repositoryId: string, importRequestId: number): Promise<Git.GitImportRequest>;
    /**
     * Retrieve import requests for a repository.
     *
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository.
     * @param includeAbandoned - True to include abandoned import requests in the results.
     */
    queryImportRequests(project: string, repositoryId: string, includeAbandoned?: boolean): Promise<Git.GitImportRequest[]>;
    /**
     * Retry or abandon a failed import request.
     *
     * @param importRequestToUpdate - The updated version of the import request. Currently, the only change allowed is setting the Status to Queued or Abandoned.
     * @param project - Project ID or project name
     * @param repositoryId - The name or ID of the repository.
     * @param importRequestId - The unique identifier for the import request to update.
     */
    updateImportRequest(importRequestToUpdate: Git.GitImportRequest, project: string, repositoryId: string, importRequestId: number): Promise<Git.GitImportRequest>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    getItem(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Git.GitVersionDescriptor, includeContent?: boolean, resolveLfs?: boolean, sanitize?: boolean): Promise<Git.GitItem>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    getItemContent(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Git.GitVersionDescriptor, includeContent?: boolean, resolveLfs?: boolean, sanitize?: boolean): Promise<ArrayBuffer>;
    /**
     * Get Item Metadata and/or Content for a collection of items. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param includeLinks - Set to true to include links to items.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param zipForUnix - Set to true to keep the file permissions for unix (and POSIX) systems like executables and symlinks
     */
    getItems(repositoryId: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, includeLinks?: boolean, versionDescriptor?: Git.GitVersionDescriptor, zipForUnix?: boolean): Promise<Git.GitItem[]>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    getItemText(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Git.GitVersionDescriptor, includeContent?: boolean, resolveLfs?: boolean, sanitize?: boolean): Promise<string>;
    /**
     * Get Item Metadata and/or Content for a single item. The download parameter is to indicate whether the content should be available as a download or just sent as a stream in the response. Doesn't apply to zipped content, which is always returned as a download.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param path - The item path.
     * @param project - Project ID or project name
     * @param scopePath - The path scope.  The default is null.
     * @param recursionLevel - The recursion level of this request. The default is 'none', no recursion.
     * @param includeContentMetadata - Set to true to include content metadata.  Default is false.
     * @param latestProcessedChange - Set to true to include the latest changes.  Default is false.
     * @param download - Set to true to download the response as a file.  Default is false.
     * @param versionDescriptor - Version descriptor.  Default is the default branch for the repository.
     * @param includeContent - Set to true to include item content when requesting json.  Default is false.
     * @param resolveLfs - Set to true to resolve Git LFS pointer files to return actual content from Git LFS.  Default is false.
     * @param sanitize - Set to true to sanitize an svg file and return it as image. Useful only if requested for svg file. Default is false.
     */
    getItemZip(repositoryId: string, path: string, project?: string, scopePath?: string, recursionLevel?: Git.VersionControlRecursionType, includeContentMetadata?: boolean, latestProcessedChange?: boolean, download?: boolean, versionDescriptor?: Git.GitVersionDescriptor, includeContent?: boolean, resolveLfs?: boolean, sanitize?: boolean): Promise<ArrayBuffer>;
    /**
     * Post for retrieving a creating a batch out of a set of items in a repo / project given a list of paths or a long path
     *
     * @param requestData - Request data attributes: ItemDescriptors, IncludeContentMetadata, LatestProcessedChange, IncludeLinks. ItemDescriptors: Collection of items to fetch, including path, version, and recursion level. IncludeContentMetadata: Whether to include metadata for all items LatestProcessedChange: Whether to include shallow ref to commit that last changed each item. IncludeLinks: Whether to include the _links field on the shallow references.
     * @param repositoryId - The name or ID of the repository
     * @param project - Project ID or project name
     */
    getItemsBatch(requestData: Git.GitItemRequestData, repositoryId: string, project?: string): Promise<Git.GitItem[][]>;
    /**
     * Find the merge bases of two commits, optionally across forks. If otherRepositoryId is not specified, the merge bases will only be calculated within the context of the local repositoryNameOrId.
     *
     * @param repositoryNameOrId - ID or name of the local repository.
     * @param commitId - First commit, usually the tip of the target branch of the potential merge.
     * @param otherCommitId - Other commit, usually the tip of the source branch of the potential merge.
     * @param project - Project ID or project name
     * @param otherCollectionId - The collection ID where otherCommitId lives.
     * @param otherRepositoryId - The repository ID where otherCommitId lives.
     */
    getMergeBases(repositoryNameOrId: string, commitId: string, otherCommitId: string, project?: string, otherCollectionId?: string, otherRepositoryId?: string): Promise<Git.GitCommitRef[]>;
    /**
     * Request a git merge operation. Currently we support merging only 2 commits.
     *
     * @param mergeParameters - Parents commitIds and merge commit messsage.
     * @param project - Project ID or project name
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param includeLinks - True to include links
     */
    createMergeRequest(mergeParameters: Git.GitMergeParameters, project: string, repositoryNameOrId: string, includeLinks?: boolean): Promise<Git.GitMerge>;
    /**
     * Get a specific merge operation's details.
     *
     * @param project - Project ID or project name
     * @param repositoryNameOrId - The name or ID of the repository.
     * @param mergeOperationId - OperationId of the merge request.
     * @param includeLinks - True to include links
     */
    getMergeRequest(project: string, repositoryNameOrId: string, mergeOperationId: number, includeLinks?: boolean): Promise<Git.GitMerge>;
    /**
     * Attach a new file to a pull request.
     *
     * @param content - Content to upload
     * @param fileName - The name of the file.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    createAttachment(content: any, fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<Git.Attachment>;
    /**
     * Delete a pull request attachment.
     *
     * @param fileName - The name of the attachment to delete.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    deleteAttachment(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    /**
     * Get the file content of a pull request attachment.
     *
     * @param fileName - The name of the attachment.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    getAttachmentContent(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<ArrayBuffer>;
    /**
     * Get a list of files attached to a given pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    getAttachments(repositoryId: string, pullRequestId: number, project?: string): Promise<Git.Attachment[]>;
    /**
     * Get the file content of a pull request attachment.
     *
     * @param fileName - The name of the attachment.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    getAttachmentZip(fileName: string, repositoryId: string, pullRequestId: number, project?: string): Promise<ArrayBuffer>;
    /**
     * Add a like on a comment.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - The ID of the thread that contains the comment.
     * @param commentId - The ID of the comment.
     * @param project - Project ID or project name
     */
    createLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<void>;
    /**
     * Delete a like on a comment.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - The ID of the thread that contains the comment.
     * @param commentId - The ID of the comment.
     * @param project - Project ID or project name
     */
    deleteLike(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<void>;
    /**
     * Get likes for a comment.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - The ID of the thread that contains the comment.
     * @param commentId - The ID of the comment.
     * @param project - Project ID or project name
     */
    getLikes(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<WebApi.IdentityRef[]>;
    /**
     * Get the commits for the specified iteration of a pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the iteration from which to get the commits.
     * @param project - Project ID or project name
     * @param top - Maximum number of commits to return. The maximum number of commits that can be returned per batch is 500.
     * @param skip - Number of commits to skip.
     */
    getPullRequestIterationCommits(repositoryId: string, pullRequestId: number, iterationId: number, project?: string, top?: number, skip?: number): Promise<Git.GitCommitRef[]>;
    /**
     * Get the commits for the specified pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    getPullRequestCommits(repositoryId: string, pullRequestId: number, project?: string): Promise<WebApi.PagedList<Git.GitCommitRef>>;
    /**
     * Retrieve one conflict for a pull request by ID
     *
     * @param repositoryId -
     * @param pullRequestId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    getPullRequestConflict(repositoryId: string, pullRequestId: number, conflictId: number, project?: string): Promise<Git.GitConflict>;
    /**
     * Retrieve all conflicts for a pull request
     *
     * @param repositoryId - The repository of the Pull Request.
     * @param pullRequestId - The pull request ID.
     * @param project - Project ID or project name
     * @param skip - Conflicts to skip.
     * @param top - Conflicts to return after skip.
     * @param includeObsolete - Includes obsolete conflicts.
     * @param excludeResolved - Excludes conflicts already resolved.
     * @param onlyResolved - Returns only the conflicts that are resolved.
     */
    getPullRequestConflicts(repositoryId: string, pullRequestId: number, project?: string, skip?: number, top?: number, includeObsolete?: boolean, excludeResolved?: boolean, onlyResolved?: boolean): Promise<Git.GitConflict[]>;
    /**
     * Update merge conflict resolution
     *
     * @param conflict -
     * @param repositoryId -
     * @param pullRequestId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    updatePullRequestConflict(conflict: Git.GitConflict, repositoryId: string, pullRequestId: number, conflictId: number, project?: string): Promise<Git.GitConflict>;
    /**
     * Update multiple merge conflict resolutions
     *
     * @param conflictUpdates -
     * @param repositoryId -
     * @param pullRequestId -
     * @param project - Project ID or project name
     */
    updatePullRequestConflicts(conflictUpdates: Git.GitConflict[], repositoryId: string, pullRequestId: number, project?: string): Promise<Git.GitConflictUpdateResult[]>;
    /**
     * Retrieve the changes made in a pull request between two iterations.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration. \<br /\> Iteration one is the head of the source branch at the time the pull request is created and subsequent iterations are created when there are pushes to the source branch. Allowed values are between 1 and the maximum iteration on this pull request.
     * @param project - Project ID or project name
     * @param top - Optional. The number of changes to retrieve.  The default value is 100 and the maximum value is 2000.
     * @param skip - Optional. The number of changes to ignore.  For example, to retrieve changes 101-150, set top 50 and skip to 100.
     * @param compareTo - ID of the pull request iteration to compare against.  The default value is zero which indicates the comparison is made against the common commit between the source and target branches
     */
    getPullRequestIterationChanges(repositoryId: string, pullRequestId: number, iterationId: number, project?: string, top?: number, skip?: number, compareTo?: number): Promise<Git.GitPullRequestIterationChanges>;
    /**
     * Get the specified iteration for a pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration to return.
     * @param project - Project ID or project name
     */
    getPullRequestIteration(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<Git.GitPullRequestIteration>;
    /**
     * Get the list of iterations for the specified pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     * @param includeCommits - If true, include the commits associated with each iteration in the response.
     */
    getPullRequestIterations(repositoryId: string, pullRequestId: number, project?: string, includeCommits?: boolean): Promise<Git.GitPullRequestIteration[]>;
    /**
     * Create a pull request status on the iteration. This operation will have the same result as Create status on pull request with specified iteration ID in the request body.
     *
     * @param status - Pull request status to create.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param project - Project ID or project name
     */
    createPullRequestIterationStatus(status: Git.GitPullRequestStatus, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<Git.GitPullRequestStatus>;
    /**
     * Delete pull request iteration status.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param statusId - ID of the pull request status.
     * @param project - Project ID or project name
     */
    deletePullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): Promise<void>;
    /**
     * Get the specific pull request iteration status by ID. The status ID is unique within the pull request across all iterations.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param statusId - ID of the pull request status.
     * @param project - Project ID or project name
     */
    getPullRequestIterationStatus(repositoryId: string, pullRequestId: number, iterationId: number, statusId: number, project?: string): Promise<Git.GitPullRequestStatus>;
    /**
     * Get all the statuses associated with a pull request iteration.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param project - Project ID or project name
     */
    getPullRequestIterationStatuses(repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<Git.GitPullRequestStatus[]>;
    /**
     * Update pull request iteration statuses collection. The only supported operation type is \`remove\`.
     *
     * @param patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param iterationId - ID of the pull request iteration.
     * @param project - Project ID or project name
     */
    updatePullRequestIterationStatuses(patchDocument: WebApi.JsonPatchDocument, repositoryId: string, pullRequestId: number, iterationId: number, project?: string): Promise<void>;
    /**
     * Create a tag (if that does not exists yet) and add that as a label (tag) for a specified pull request. The only required field is the name of the new label (tag).
     *
     * @param label - Label to assign to the pull request.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     * @param projectId - Project ID or project name.
     */
    createPullRequestLabel(label: TfsCore.WebApiCreateTagRequestData, repositoryId: string, pullRequestId: number, project?: string, projectId?: string): Promise<TfsCore.WebApiTagDefinition>;
    /**
     * Removes a label (tag) from the set of those assigned to the pull request. The tag itself will not be deleted.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param labelIdOrName - The name or ID of the label requested.
     * @param project - Project ID or project name
     * @param projectId - Project ID or project name.
     */
    deletePullRequestLabels(repositoryId: string, pullRequestId: number, labelIdOrName: string, project?: string, projectId?: string): Promise<void>;
    /**
     * Retrieves a single label (tag) that has been assigned to a pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param labelIdOrName - The name or ID of the label requested.
     * @param project - Project ID or project name
     * @param projectId - Project ID or project name.
     */
    getPullRequestLabel(repositoryId: string, pullRequestId: number, labelIdOrName: string, project?: string, projectId?: string): Promise<TfsCore.WebApiTagDefinition>;
    /**
     * Get all the labels (tags) assigned to a pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     * @param projectId - Project ID or project name.
     */
    getPullRequestLabels(repositoryId: string, pullRequestId: number, project?: string, projectId?: string): Promise<TfsCore.WebApiTagDefinition[]>;
    /**
     * Get external properties of the pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    getPullRequestProperties(repositoryId: string, pullRequestId: number, project?: string): Promise<any>;
    /**
     * Create or update pull request external properties. The patch operation can be \`add\`, \`replace\` or \`remove\`. For \`add\` operation, the path can be empty. If the path is empty, the value must be a list of key value pairs. For \`replace\` operation, the path cannot be empty. If the path does not exist, the property will be added to the collection. For \`remove\` operation, the path cannot be empty. If the path does not exist, no action will be performed.
     *
     * @param patchDocument - Properties to add, replace or remove in JSON Patch format.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    updatePullRequestProperties(patchDocument: WebApi.JsonPatchDocument, repositoryId: string, pullRequestId: number, project?: string): Promise<any>;
    /**
     * This API is used to find what pull requests are related to a given commit.  It can be used to either find the pull request that created a particular merge commit or it can be used to find all pull requests that have ever merged a particular commit.  The input is a list of queries which each contain a list of commits. For each commit that you search against, you will get back a dictionary of commit -\> pull requests.
     *
     * @param queries - The list of queries to perform.
     * @param repositoryId - ID of the repository.
     * @param project - Project ID or project name
     */
    getPullRequestQuery(queries: Git.GitPullRequestQuery, repositoryId: string, project?: string): Promise<Git.GitPullRequestQuery>;
    /**
     * Add a reviewer to a pull request or cast a vote.
     *
     * @param reviewer - Reviewer's vote.\<br /\>If the reviewer's ID is included here, it must match the reviewerID parameter.\<br /\>Reviewers can set their own vote with this method.  When adding other reviewers, vote must be set to zero.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param reviewerId - ID of the reviewer.
     * @param project - Project ID or project name
     */
    createPullRequestReviewer(reviewer: Git.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<Git.IdentityRefWithVote>;
    /**
     * Add reviewers to a pull request.
     *
     * @param reviewers - Reviewers to add to the pull request.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    createPullRequestReviewers(reviewers: WebApi.IdentityRef[], repositoryId: string, pullRequestId: number, project?: string): Promise<Git.IdentityRefWithVote[]>;
    /**
     * Add an unmaterialized identity to the reviewers of a pull request.
     *
     * @param reviewer - Reviewer to add to the pull request.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    createUnmaterializedPullRequestReviewer(reviewer: Git.IdentityRefWithVote, repositoryId: string, pullRequestId: number, project?: string): Promise<Git.IdentityRefWithVote>;
    /**
     * Remove a reviewer from a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param reviewerId - ID of the reviewer to remove.
     * @param project - Project ID or project name
     */
    deletePullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<void>;
    /**
     * Retrieve information about a particular reviewer on a pull request
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param reviewerId - ID of the reviewer.
     * @param project - Project ID or project name
     */
    getPullRequestReviewer(repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<Git.IdentityRefWithVote>;
    /**
     * Retrieve the reviewers for a pull request
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    getPullRequestReviewers(repositoryId: string, pullRequestId: number, project?: string): Promise<Git.IdentityRefWithVote[]>;
    /**
     * Edit a reviewer entry. These fields are patchable: isFlagged, hasDeclined
     *
     * @param reviewer - Reviewer data.\<br /\>If the reviewer's ID is included here, it must match the reviewerID parameter.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param reviewerId - ID of the reviewer.
     * @param project - Project ID or project name
     */
    updatePullRequestReviewer(reviewer: Git.IdentityRefWithVote, repositoryId: string, pullRequestId: number, reviewerId: string, project?: string): Promise<Git.IdentityRefWithVote>;
    /**
     * Reset the votes of multiple reviewers on a pull request.  NOTE: This endpoint only supports updating votes, but does not support updating required reviewers (use policy) or display names.
     *
     * @param patchVotes - IDs of the reviewers whose votes will be reset to zero
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request
     * @param project - Project ID or project name
     */
    updatePullRequestReviewers(patchVotes: Git.IdentityRefWithVote[], repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    /**
     * Retrieve a pull request.
     *
     * @param pullRequestId - The ID of the pull request to retrieve.
     * @param project - Project ID or project name
     */
    getPullRequestById(pullRequestId: number, project?: string): Promise<Git.GitPullRequest>;
    /**
     * Retrieve all pull requests matching a specified criteria.
     *
     * @param project - Project ID or project name
     * @param searchCriteria - Pull requests will be returned that match this search criteria.
     * @param maxCommentLength - Not used.
     * @param skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param top - The number of pull requests to retrieve.
     */
    getPullRequestsByProject(project: string, searchCriteria: Git.GitPullRequestSearchCriteria, maxCommentLength?: number, skip?: number, top?: number): Promise<Git.GitPullRequest[]>;
    /**
     * Create a pull request.
     *
     * @param gitPullRequestToCreate - The pull request to create.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param project - Project ID or project name
     * @param supportsIterations - If true, subsequent pushes to the pull request will be individually reviewable. Set this to false for large pull requests for performance reasons if this functionality is not needed.
     */
    createPullRequest(gitPullRequestToCreate: Git.GitPullRequest, repositoryId: string, project?: string, supportsIterations?: boolean): Promise<Git.GitPullRequest>;
    /**
     * Retrieve a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - The ID of the pull request to retrieve.
     * @param project - Project ID or project name
     * @param maxCommentLength - Not used.
     * @param skip - Not used.
     * @param top - Not used.
     * @param includeCommits - If true, the pull request will be returned with the associated commits.
     * @param includeWorkItemRefs - If true, the pull request will be returned with the associated work item references.
     */
    getPullRequest(repositoryId: string, pullRequestId: number, project?: string, maxCommentLength?: number, skip?: number, top?: number, includeCommits?: boolean, includeWorkItemRefs?: boolean): Promise<Git.GitPullRequest>;
    /**
     * Retrieve all pull requests matching a specified criteria.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param searchCriteria - Pull requests will be returned that match this search criteria.
     * @param project - Project ID or project name
     * @param maxCommentLength - Not used.
     * @param skip - The number of pull requests to ignore. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param top - The number of pull requests to retrieve.
     */
    getPullRequests(repositoryId: string, searchCriteria: Git.GitPullRequestSearchCriteria, project?: string, maxCommentLength?: number, skip?: number, top?: number): Promise<Git.GitPullRequest[]>;
    /**
     * Update a pull request
     *
     * @param gitPullRequestToUpdate - The pull request content that should be updated.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request to update.
     * @param project - Project ID or project name
     */
    updatePullRequest(gitPullRequestToUpdate: Git.GitPullRequest, repositoryId: string, pullRequestId: number, project?: string): Promise<Git.GitPullRequest>;
    /**
     * Sends an e-mail notification about a specific pull request to a set of recipients
     *
     * @param userMessage -
     * @param repositoryId - ID of the git repository.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    sharePullRequest(userMessage: Git.ShareNotificationContext, repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    /**
     * Create a pull request status.
     *
     * @param status - Pull request status to create.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    createPullRequestStatus(status: Git.GitPullRequestStatus, repositoryId: string, pullRequestId: number, project?: string): Promise<Git.GitPullRequestStatus>;
    /**
     * Delete pull request status.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param statusId - ID of the pull request status.
     * @param project - Project ID or project name
     */
    deletePullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): Promise<void>;
    /**
     * Get the specific pull request status by ID. The status ID is unique within the pull request across all iterations.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param statusId - ID of the pull request status.
     * @param project - Project ID or project name
     */
    getPullRequestStatus(repositoryId: string, pullRequestId: number, statusId: number, project?: string): Promise<Git.GitPullRequestStatus>;
    /**
     * Get all the statuses associated with a pull request.
     *
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    getPullRequestStatuses(repositoryId: string, pullRequestId: number, project?: string): Promise<Git.GitPullRequestStatus[]>;
    /**
     * Update pull request statuses collection. The only supported operation type is \`remove\`.
     *
     * @param patchDocument - Operations to apply to the pull request statuses in JSON Patch format.
     * @param repositoryId - The repository ID of the pull request’s target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    updatePullRequestStatuses(patchDocument: WebApi.JsonPatchDocument, repositoryId: string, pullRequestId: number, project?: string): Promise<void>;
    /**
     * Create a comment on a specific thread in a pull request (up to 500 comments can be created per thread).
     *
     * @param comment - The comment to create. Comments can be up to 150,000 characters.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread that the desired comment is in.
     * @param project - Project ID or project name
     */
    createComment(comment: Git.Comment, repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<Git.Comment>;
    /**
     * Delete a comment associated with a specific thread in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread that the desired comment is in.
     * @param commentId - ID of the comment.
     * @param project - Project ID or project name
     */
    deleteComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<void>;
    /**
     * Retrieve a comment associated with a specific thread in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread that the desired comment is in.
     * @param commentId - ID of the comment.
     * @param project - Project ID or project name
     */
    getComment(repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<Git.Comment>;
    /**
     * Retrieve all comments associated with a specific thread in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread.
     * @param project - Project ID or project name
     */
    getComments(repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<Git.Comment[]>;
    /**
     * Update a comment associated with a specific thread in a pull request.
     *
     * @param comment - The comment content that should be updated. Comments can be up to 150,000 characters.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread that the desired comment is in.
     * @param commentId - ID of the comment to update.
     * @param project - Project ID or project name
     */
    updateComment(comment: Git.Comment, repositoryId: string, pullRequestId: number, threadId: number, commentId: number, project?: string): Promise<Git.Comment>;
    /**
     * Create a thread in a pull request.
     *
     * @param commentThread - The thread to create. Thread must contain at least one comment.
     * @param repositoryId - Repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    createThread(commentThread: Git.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, project?: string): Promise<Git.GitPullRequestCommentThread>;
    /**
     * Retrieve a thread in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread.
     * @param project - Project ID or project name
     * @param iteration - If specified, thread position will be tracked using this iteration as the right side of the diff.
     * @param baseIteration - If specified, thread position will be tracked using this iteration as the left side of the diff.
     */
    getPullRequestThread(repositoryId: string, pullRequestId: number, threadId: number, project?: string, iteration?: number, baseIteration?: number): Promise<Git.GitPullRequestCommentThread>;
    /**
     * Retrieve all threads in a pull request.
     *
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     * @param iteration - If specified, thread positions will be tracked using this iteration as the right side of the diff.
     * @param baseIteration - If specified, thread positions will be tracked using this iteration as the left side of the diff.
     */
    getThreads(repositoryId: string, pullRequestId: number, project?: string, iteration?: number, baseIteration?: number): Promise<Git.GitPullRequestCommentThread[]>;
    /**
     * Update a thread in a pull request.
     *
     * @param commentThread - The thread content that should be updated.
     * @param repositoryId - The repository ID of the pull request's target branch.
     * @param pullRequestId - ID of the pull request.
     * @param threadId - ID of the thread to update.
     * @param project - Project ID or project name
     */
    updateThread(commentThread: Git.GitPullRequestCommentThread, repositoryId: string, pullRequestId: number, threadId: number, project?: string): Promise<Git.GitPullRequestCommentThread>;
    /**
     * Retrieve a list of work items associated with a pull request.
     *
     * @param repositoryId - ID or name of the repository.
     * @param pullRequestId - ID of the pull request.
     * @param project - Project ID or project name
     */
    getPullRequestWorkItemRefs(repositoryId: string, pullRequestId: number, project?: string): Promise<WebApi.ResourceRef[]>;
    /**
     * Push changes to the repository.
     *
     * @param push -
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     */
    createPush(push: Git.GitPush, repositoryId: string, project?: string): Promise<Git.GitPush>;
    /**
     * Retrieves a particular push.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param pushId - ID of the push.
     * @param project - Project ID or project name
     * @param includeCommits - The number of commits to include in the result.
     * @param includeRefUpdates - If true, include the list of refs that were updated by the push.
     */
    getPush(repositoryId: string, pushId: number, project?: string, includeCommits?: number, includeRefUpdates?: boolean): Promise<Git.GitPush>;
    /**
     * Retrieves pushes associated with the specified repository.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param skip - Number of pushes to skip.
     * @param top - Number of pushes to return.
     * @param searchCriteria - Search criteria attributes: fromDate, toDate, pusherId, refName, includeRefUpdates or includeLinks. fromDate: Start date to search from. toDate: End date to search to. pusherId: Identity of the person who submitted the push. refName: Branch name to consider. includeRefUpdates: If true, include the list of refs that were updated by the push. includeLinks: Whether to include the _links field on the shallow references.
     */
    getPushes(repositoryId: string, project?: string, skip?: number, top?: number, searchCriteria?: Git.GitPushSearchCriteria): Promise<Git.GitPush[]>;
    /**
     * Destroy (hard delete) a soft-deleted Git repository.
     *
     * @param project - Project ID or project name
     * @param repositoryId - The ID of the repository.
     */
    deleteRepositoryFromRecycleBin(project: string, repositoryId: string): Promise<void>;
    /**
     * Retrieve soft-deleted git repositories from the recycle bin.
     *
     * @param project - Project ID or project name
     */
    getRecycleBinRepositories(project: string): Promise<Git.GitDeletedRepository[]>;
    /**
     * Recover a soft-deleted Git repository. Recently deleted repositories go into a soft-delete state for a period of time before they are hard deleted and become unrecoverable.
     *
     * @param repositoryDetails -
     * @param project - Project ID or project name
     * @param repositoryId - The ID of the repository.
     */
    restoreRepositoryFromRecycleBin(repositoryDetails: Git.GitRecycleBinRepositoryDetails, project: string, repositoryId: string): Promise<Git.GitRepository>;
    /**
     * Queries the provided repository for its refs and returns them.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param filter - [optional] A filter to apply to the refs (starts with).
     * @param includeLinks - [optional] Specifies if referenceLinks should be included in the result. default is false.
     * @param includeStatuses - [optional] Includes up to the first 1000 commit statuses for each ref. The default value is false.
     * @param includeMyBranches - [optional] Includes only branches that the user owns, the branches the user favorites, and the default branch. The default value is false. Cannot be combined with the filter parameter.
     * @param latestStatusesOnly - [optional] True to include only the tip commit status for each ref. This option requires \`includeStatuses\` to be true. The default value is false.
     * @param peelTags - [optional] Annotated tags will populate the PeeledObjectId property. default is false.
     * @param filterContains - [optional] A filter to apply to the refs (contains).
     */
    getRefs(repositoryId: string, project?: string, filter?: string, includeLinks?: boolean, includeStatuses?: boolean, includeMyBranches?: boolean, latestStatusesOnly?: boolean, peelTags?: boolean, filterContains?: string): Promise<WebApi.PagedList<Git.GitRef>>;
    /**
     * Lock or Unlock a branch.
     *
     * @param newRefInfo - The ref update action (lock/unlock) to perform
     * @param repositoryId - The name or ID of the repository.
     * @param filter - The name of the branch to lock/unlock
     * @param project - Project ID or project name
     * @param projectId - ID or name of the team project. Optional if specifying an ID for repository.
     */
    updateRef(newRefInfo: Git.GitRefUpdate, repositoryId: string, filter: string, project?: string, projectId?: string): Promise<Git.GitRef>;
    /**
     * Creating, updating, or deleting refs(branches).
     *
     * @param refUpdates - List of ref updates to attempt to perform
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     * @param projectId - ID or name of the team project. Optional if specifying an ID for repository.
     */
    updateRefs(refUpdates: Git.GitRefUpdate[], repositoryId: string, project?: string, projectId?: string): Promise<Git.GitRefUpdateResult[]>;
    /**
     * Creates a ref favorite
     *
     * @param favorite - The ref favorite to create.
     * @param project - Project ID or project name
     */
    createFavorite(favorite: Git.GitRefFavorite, project: string): Promise<Git.GitRefFavorite>;
    /**
     * Deletes the refs favorite specified
     *
     * @param project - Project ID or project name
     * @param favoriteId - The Id of the ref favorite to delete.
     */
    deleteRefFavorite(project: string, favoriteId: number): Promise<void>;
    /**
     * Gets the refs favorite for a favorite Id.
     *
     * @param project - Project ID or project name
     * @param favoriteId - The Id of the requested ref favorite.
     */
    getRefFavorite(project: string, favoriteId: number): Promise<Git.GitRefFavorite>;
    /**
     * Gets the refs favorites for a repo and an identity.
     *
     * @param project - Project ID or project name
     * @param repositoryId - The id of the repository.
     * @param identityId - The id of the identity whose favorites are to be retrieved. If null, the requesting identity is used.
     */
    getRefFavorites(project: string, repositoryId?: string, identityId?: string): Promise<Git.GitRefFavorite[]>;
    /**
     * @param project - Project ID or project name
     * @param identityId -
     */
    getRefFavoritesForProject(project: string, identityId?: string): Promise<Git.GitRefFavorite[]>;
    /**
     * Create a git repository in a team project.
     *
     * @param gitRepositoryToCreate - Specify the repo name, team project and/or parent repository. Team project information can be omitted from gitRepositoryToCreate if the request is project-scoped (i.e., includes project Id).
     * @param project - Project ID or project name
     * @param sourceRef - [optional] Specify the source refs to use while creating a fork repo
     */
    createRepository(gitRepositoryToCreate: Git.GitRepositoryCreateOptions, project?: string, sourceRef?: string): Promise<Git.GitRepository>;
    /**
     * Delete a git repository
     *
     * @param repositoryId - The ID of the repository.
     * @param project - Project ID or project name
     */
    deleteRepository(repositoryId: string, project?: string): Promise<void>;
    /**
     * Retrieve git repositories.
     *
     * @param project - Project ID or project name
     * @param includeLinks - [optional] True to include reference links. The default value is false.
     * @param includeAllUrls - [optional] True to include all remote URLs. The default value is false.
     * @param includeHidden - [optional] True to include hidden repositories. The default value is false.
     */
    getRepositories(project?: string, includeLinks?: boolean, includeAllUrls?: boolean, includeHidden?: boolean): Promise<Git.GitRepository[]>;
    /**
     * Retrieve a git repository.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param project - Project ID or project name
     */
    getRepository(repositoryId: string, project?: string): Promise<Git.GitRepository>;
    /**
     * Retrieve a git repository.
     *
     * @param repositoryId - The name or ID of the repository.
     * @param includeParent - True to include parent repository. Only available in authenticated calls.
     * @param project - Project ID or project name
     */
    getRepositoryWithParent(repositoryId: string, includeParent: boolean, project?: string): Promise<Git.GitRepository>;
    /**
     * Updates the Git repository with either a new repo name or a new default branch.
     *
     * @param newRepositoryInfo - Specify a new repo name or a new default branch of the repository
     * @param repositoryId - The ID of the repository.
     * @param project - Project ID or project name
     */
    updateRepository(newRepositoryInfo: Git.GitRepository, repositoryId: string, project?: string): Promise<Git.GitRepository>;
    /**
     * Retrieve one conflict for a revert by ID
     *
     * @param repositoryId -
     * @param revertId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    getRevertConflict(repositoryId: string, revertId: number, conflictId: number, project?: string): Promise<Git.GitConflict>;
    /**
     * Retrieve all conflicts for a revert
     *
     * @param repositoryId -
     * @param revertId -
     * @param project - Project ID or project name
     * @param continuationToken -
     * @param top -
     * @param excludeResolved -
     * @param onlyResolved -
     * @param includeObsolete -
     */
    getRevertConflicts(repositoryId: string, revertId: number, project?: string, continuationToken?: string, top?: number, excludeResolved?: boolean, onlyResolved?: boolean, includeObsolete?: boolean): Promise<WebApi.PagedList<Git.GitConflict>>;
    /**
     * Update merge conflict resolution
     *
     * @param conflict -
     * @param repositoryId -
     * @param revertId -
     * @param conflictId -
     * @param project - Project ID or project name
     */
    updateRevertConflict(conflict: Git.GitConflict, repositoryId: string, revertId: number, conflictId: number, project?: string): Promise<Git.GitConflict>;
    /**
     * Update multiple merge conflict resolutions
     *
     * @param conflictUpdates -
     * @param repositoryId -
     * @param revertId -
     * @param project - Project ID or project name
     */
    updateRevertConflicts(conflictUpdates: Git.GitConflict[], repositoryId: string, revertId: number, project?: string): Promise<Git.GitConflictUpdateResult[]>;
    /**
     * Starts the operation to create a new branch which reverts changes introduced by either a specific commit or commits that are associated to a pull request.
     *
     * @param revertToCreate -
     * @param project - Project ID or project name
     * @param repositoryId - ID of the repository.
     */
    createRevert(revertToCreate: Git.GitAsyncRefOperationParameters, project: string, repositoryId: string): Promise<Git.GitRevert>;
    /**
     * Retrieve information about a revert operation by revert Id.
     *
     * @param project - Project ID or project name
     * @param revertId - ID of the revert operation.
     * @param repositoryId - ID of the repository.
     */
    getRevert(project: string, revertId: number, repositoryId: string): Promise<Git.GitRevert>;
    /**
     * Retrieve information about a revert operation for a specific branch.
     *
     * @param project - Project ID or project name
     * @param repositoryId - ID of the repository.
     * @param refName - The GitAsyncRefOperationParameters generatedRefName used for the revert operation.
     */
    getRevertForRefName(project: string, repositoryId: string, refName: string): Promise<Git.GitRevert>;
    /**
     * Create Git commit status.
     *
     * @param gitCommitStatusToCreate - Git commit status object to create.
     * @param commitId - ID of the Git commit.
     * @param repositoryId - ID of the repository.
     * @param project - Project ID or project name
     */
    createCommitStatus(gitCommitStatusToCreate: Git.GitStatus, commitId: string, repositoryId: string, project?: string): Promise<Git.GitStatus>;
    /**
     * Get statuses associated with the Git commit.
     *
     * @param commitId - ID of the Git commit.
     * @param repositoryId - ID of the repository.
     * @param project - Project ID or project name
     * @param top - Optional. The number of statuses to retrieve. Default is 1000.
     * @param skip - Optional. The number of statuses to ignore. Default is 0. For example, to retrieve results 101-150, set top to 50 and skip to 100.
     * @param latestOnly - The flag indicates whether to get only latest statuses grouped by \`Context.Name\` and \`Context.Genre\`.
     */
    getStatuses(commitId: string, repositoryId: string, project?: string, top?: number, skip?: number, latestOnly?: boolean): Promise<Git.GitStatus[]>;
    /**
     * Retrieve a pull request suggestion for a particular repository or team project.
     *
     * @param repositoryId - ID of the git repository.
     * @param project - Project ID or project name
     * @param preferCompareBranch - If true, prefer the compare branch over the default branch as target branch for pull requests.
     */
    getSuggestions(repositoryId: string, project?: string, preferCompareBranch?: boolean): Promise<Git.GitSuggestion[]>;
    /**
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     *
     * @param repositoryId - Repository Id.
     * @param sha1 - SHA1 hash of the tree object.
     * @param project - Project ID or project name
     * @param projectId - Project Id.
     * @param recursive - Search recursively. Include trees underneath this tree. Default is false.
     * @param fileName - Name to use if a .zip file is returned. Default is the object ID.
     */
    getTree(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): Promise<Git.GitTreeRef>;
    /**
     * The Tree endpoint returns the collection of objects underneath the specified tree. Trees are folders in a Git repository.
     *
     * @param repositoryId - Repository Id.
     * @param sha1 - SHA1 hash of the tree object.
     * @param project - Project ID or project name
     * @param projectId - Project Id.
     * @param recursive - Search recursively. Include trees underneath this tree. Default is false.
     * @param fileName - Name to use if a .zip file is returned. Default is the object ID.
     */
    getTreeZip(repositoryId: string, sha1: string, project?: string, projectId?: string, recursive?: boolean, fileName?: string): Promise<ArrayBuffer>;
}
