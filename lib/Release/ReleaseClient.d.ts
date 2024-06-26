import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";
import * as FormInput from "../FormInput/FormInput";
import * as Release from "../Release/Release";
import * as WebApi from "../WebApi/WebApi";
export declare class ReleaseRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions);
    static readonly RESOURCE_AREA_ID: string;
    /**
     * Returns the artifact details that automation agent requires
     *
     * @param project - Project ID or project name
     * @param releaseId -
     */
    getAgentArtifactDefinitions(project: string, releaseId: number): Promise<Release.AgentArtifactDefinition[]>;
    /**
     * Get a list of approvals
     *
     * @param project - Project ID or project name
     * @param assignedToFilter - Approvals assigned to this user.
     * @param statusFilter - Approvals with this status. Default is 'pending'.
     * @param releaseIdsFilter - Approvals for release id(s) mentioned in the filter. Multiple releases can be mentioned by separating them with ',' e.g. releaseIdsFilter=1,2,3,4.
     * @param typeFilter - Approval with this type.
     * @param top - Number of approvals to get. Default is 50.
     * @param continuationToken - Gets the approvals after the continuation token provided.
     * @param queryOrder - Gets the results in the defined order of created approvals. Default is 'descending'.
     * @param includeMyGroupApprovals - 'true' to include my group approvals. Default is 'false'.
     */
    getApprovals(project: string, assignedToFilter?: string, statusFilter?: Release.ApprovalStatus, releaseIdsFilter?: number[], typeFilter?: Release.ApprovalType, top?: number, continuationToken?: number, queryOrder?: Release.ReleaseQueryOrder, includeMyGroupApprovals?: boolean): Promise<WebApi.PagedList<Release.ReleaseApproval>>;
    /**
     * Get approval history.
     *
     * @param project - Project ID or project name
     * @param approvalStepId - Id of the approval.
     */
    getApprovalHistory(project: string, approvalStepId: number): Promise<Release.ReleaseApproval>;
    /**
     * Get an approval.
     *
     * @param project - Project ID or project name
     * @param approvalId - Id of the approval.
     * @param includeHistory - 'true' to include history of the approval. Default is 'false'.
     */
    getApproval(project: string, approvalId: number, includeHistory?: boolean): Promise<Release.ReleaseApproval>;
    /**
     * Update status of an approval
     *
     * @param approval - ReleaseApproval object having status, approver and comments.
     * @param project - Project ID or project name
     * @param approvalId - Id of the approval.
     */
    updateReleaseApproval(approval: Release.ReleaseApproval, project: string, approvalId: number): Promise<Release.ReleaseApproval>;
    /**
     * @param approvals -
     * @param project - Project ID or project name
     */
    updateReleaseApprovals(approvals: Release.ReleaseApproval[], project: string): Promise<Release.ReleaseApproval[]>;
    /**
     * Get a task attachment.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param attemptId - Attempt number of deployment.
     * @param timelineId - Timeline Id of the task.
     * @param recordId - Record Id of attachment.
     * @param type - Type of the attachment.
     * @param name - Name of the attachment.
     */
    getTaskAttachmentContent(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, recordId: string, type: string, name: string): Promise<ArrayBuffer>;
    /**
     * Get a release task attachment.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param attemptId - Attempt number of deployment.
     * @param planId - Plan Id of the deploy phase.
     * @param timelineId - Timeline Id of the task.
     * @param recordId - Record Id of attachment.
     * @param type - Type of the attachment.
     * @param name - Name of the attachment.
     */
    getReleaseTaskAttachmentContent(project: string, releaseId: number, environmentId: number, attemptId: number, planId: string, timelineId: string, recordId: string, type: string, name: string): Promise<ArrayBuffer>;
    /**
     * Get the task attachments.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param attemptId - Attempt number of deployment.
     * @param timelineId - Timeline Id of the task.
     * @param type - Type of the attachment.
     */
    getTaskAttachments(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, type: string): Promise<Release.ReleaseTaskAttachment[]>;
    /**
     * Get the release task attachments.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param attemptId - Attempt number of deployment.
     * @param planId - Plan Id of the deploy phase.
     * @param type - Type of the attachment.
     */
    getReleaseTaskAttachments(project: string, releaseId: number, environmentId: number, attemptId: number, planId: string, type: string): Promise<Release.ReleaseTaskAttachment[]>;
    /**
     * @param artifactType -
     * @param sourceId -
     * @param artifactVersionId -
     * @param project - Project ID or project name
     */
    getAutoTriggerIssues(artifactType: string, sourceId: string, artifactVersionId: string, project?: string): Promise<Release.AutoTriggerIssue[]>;
    /**
     * Gets a badge that indicates the status of the most recent deployment for an environment.
     *
     * @param projectId - The ID of the Project.
     * @param releaseDefinitionId - The ID of the Release Definition.
     * @param environmentId - The ID of the Environment.
     * @param branchName - The name of the branch.
     */
    getDeploymentBadge(projectId: string, releaseDefinitionId: number, environmentId: number, branchName?: string): Promise<string>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param baseReleaseId -
     * @param top -
     * @param artifactAlias -
     */
    getReleaseChanges(project: string, releaseId: number, baseReleaseId?: number, top?: number, artifactAlias?: string): Promise<Release.Change[]>;
    /**
     * @param project - Project ID or project name
     * @param taskGroupId -
     * @param propertyFilters -
     */
    getDefinitionEnvironments(project: string, taskGroupId?: string, propertyFilters?: string[]): Promise<Release.DefinitionEnvironmentReference[]>;
    /**
     * Create a release definition
     *
     * @param releaseDefinition - release definition object to create.
     * @param project - Project ID or project name
     */
    createReleaseDefinition(releaseDefinition: Release.ReleaseDefinition, project: string): Promise<Release.ReleaseDefinition>;
    /**
     * Delete a release definition.
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the release definition.
     * @param comment - Comment for deleting a release definition.
     * @param forceDelete - 'true' to automatically cancel any in-progress release deployments and proceed with release definition deletion . Default is 'false'.
     */
    deleteReleaseDefinition(project: string, definitionId: number, comment?: string, forceDelete?: boolean): Promise<void>;
    /**
     * Get a release definition.
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the release definition.
     * @param propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definition will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
     */
    getReleaseDefinition(project: string, definitionId: number, propertyFilters?: string[]): Promise<Release.ReleaseDefinition>;
    /**
     * Get release definition of a given revision.
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the release definition.
     * @param revision - Revision number of the release definition.
     */
    getReleaseDefinitionRevision(project: string, definitionId: number, revision: number): Promise<string>;
    /**
     * Get a list of release definitions.
     *
     * @param project - Project ID or project name
     * @param searchText - Get release definitions with names containing searchText.
     * @param expand - The properties that should be expanded in the list of Release definitions.
     * @param artifactType - Release definitions with given artifactType will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param artifactSourceId - Release definitions with given artifactSourceId will be returned. e.g. For build it would be \{projectGuid\}:\{BuildDefinitionId\}, for Jenkins it would be \{JenkinsConnectionId\}:\{JenkinsDefinitionId\}, for TfsOnPrem it would be \{TfsOnPremConnectionId\}:\{ProjectName\}:\{TfsOnPremDefinitionId\}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json at https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param top - Number of release definitions to get.
     * @param continuationToken - Gets the release definitions after the continuation token provided.
     * @param queryOrder - Gets the results in the defined order. Default is 'IdAscending'.
     * @param path - Gets the release definitions under the specified path.
     * @param isExactNameMatch - 'true'to gets the release definitions with exact match as specified in searchText. Default is 'false'.
     * @param tagFilter - A comma-delimited list of tags. Only release definitions with these tags will be returned.
     * @param propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release Definitions will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release Definition from results irrespective of whether it has property set or not.
     * @param definitionIdFilter - A comma-delimited list of release definitions to retrieve.
     * @param isDeleted - 'true' to get release definitions that has been deleted. Default is 'false'
     * @param searchTextContainsFolderName - 'true' to get the release definitions under the folder with name as specified in searchText. Default is 'false'.
     */
    getReleaseDefinitions(project: string, searchText?: string, expand?: Release.ReleaseDefinitionExpands, artifactType?: string, artifactSourceId?: string, top?: number, continuationToken?: string, queryOrder?: Release.ReleaseDefinitionQueryOrder, path?: string, isExactNameMatch?: boolean, tagFilter?: string[], propertyFilters?: string[], definitionIdFilter?: string[], isDeleted?: boolean, searchTextContainsFolderName?: boolean): Promise<WebApi.PagedList<Release.ReleaseDefinition>>;
    /**
     * Undelete a release definition.
     *
     * @param releaseDefinitionUndeleteParameter - Object for undelete release definition.
     * @param project - Project ID or project name
     * @param definitionId - Id of the release definition to be undeleted
     */
    undeleteReleaseDefinition(releaseDefinitionUndeleteParameter: Release.ReleaseDefinitionUndeleteParameter, project: string, definitionId: number): Promise<Release.ReleaseDefinition>;
    /**
     * Update a release definition.
     *
     * @param releaseDefinition - Release definition object to update.
     * @param project - Project ID or project name
     */
    updateReleaseDefinition(releaseDefinition: Release.ReleaseDefinition, project: string): Promise<Release.ReleaseDefinition>;
    /**
     * Get a list of deployments
     *
     * @param project - Project ID or project name
     * @param definitionId - List the deployments for a given definition id.
     * @param definitionEnvironmentId - List the deployments for a given definition environment id.
     * @param createdBy - List the deployments for which deployments are created as identity specified.
     * @param minModifiedTime - List the deployments with LastModified time \>= minModifiedTime.
     * @param maxModifiedTime - List the deployments with LastModified time \<= maxModifiedTime.
     * @param deploymentStatus - List the deployments with given deployment status. Default is 'All'.
     * @param operationStatus - List the deployments with given operation status. Default is 'All'.
     * @param latestAttemptsOnly - 'true' to include deployments with latest attempt only. Default is 'false'.
     * @param queryOrder - List the deployments with given query order. Default is 'Descending'.
     * @param top - List the deployments with given top. Default top is '50' and Max top is '100'.
     * @param continuationToken - List the deployments with deployment id \>= continuationToken.
     * @param createdFor - List the deployments for which deployments are requested as identity specified.
     * @param minStartedTime - List the deployments with StartedOn time \>= minStartedTime.
     * @param maxStartedTime - List the deployments with StartedOn time \<= maxStartedTime.
     * @param sourceBranch - List the deployments that are deployed from given branch name.
     */
    getDeployments(project: string, definitionId?: number, definitionEnvironmentId?: number, createdBy?: string, minModifiedTime?: Date, maxModifiedTime?: Date, deploymentStatus?: Release.DeploymentStatus, operationStatus?: Release.DeploymentOperationStatus, latestAttemptsOnly?: boolean, queryOrder?: Release.ReleaseQueryOrder, top?: number, continuationToken?: number, createdFor?: string, minStartedTime?: Date, maxStartedTime?: Date, sourceBranch?: string): Promise<WebApi.PagedList<Release.Deployment>>;
    /**
     * @param queryParameters -
     * @param project - Project ID or project name
     */
    getDeploymentsForMultipleEnvironments(queryParameters: Release.DeploymentQueryParameters, project: string): Promise<Release.Deployment[]>;
    /**
     * Get a release environment.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of the release environment.
     * @param expand - A property that should be expanded in the environment.
     */
    getReleaseEnvironment(project: string, releaseId: number, environmentId: number, expand?: Release.ReleaseEnvironmentExpands): Promise<Release.ReleaseEnvironment>;
    /**
     * Update the status of a release environment
     *
     * @param environmentUpdateData - Environment update meta data.
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     */
    updateReleaseEnvironment(environmentUpdateData: Release.ReleaseEnvironmentUpdateMetadata, project: string, releaseId: number, environmentId: number): Promise<Release.ReleaseEnvironment>;
    /**
     * Creates a definition environment template
     *
     * @param template - Definition environment template to create
     * @param project - Project ID or project name
     */
    createDefinitionEnvironmentTemplate(template: Release.ReleaseDefinitionEnvironmentTemplate, project: string): Promise<Release.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * Delete a definition environment template
     *
     * @param project - Project ID or project name
     * @param templateId - Id of the definition environment template
     */
    deleteDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<void>;
    /**
     * Gets a definition environment template
     *
     * @param project - Project ID or project name
     * @param templateId - Id of the definition environment template
     */
    getDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<Release.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * Gets a list of definition environment templates
     *
     * @param project - Project ID or project name
     * @param isDeleted - 'true' to get definition environment templates that have been deleted. Default is 'false'
     */
    listDefinitionEnvironmentTemplates(project: string, isDeleted?: boolean): Promise<Release.ReleaseDefinitionEnvironmentTemplate[]>;
    /**
     * Undelete a release definition environment template.
     *
     * @param project - Project ID or project name
     * @param templateId - Id of the definition environment template to be undeleted
     */
    undeleteReleaseDefinitionEnvironmentTemplate(project: string, templateId: string): Promise<Release.ReleaseDefinitionEnvironmentTemplate>;
    /**
     * @param favoriteItems -
     * @param project - Project ID or project name
     * @param scope -
     * @param identityId -
     */
    createFavorites(favoriteItems: Release.FavoriteItem[], project: string, scope: string, identityId?: string): Promise<Release.FavoriteItem[]>;
    /**
     * @param project - Project ID or project name
     * @param scope -
     * @param identityId -
     * @param favoriteItemIds -
     */
    deleteFavorites(project: string, scope: string, identityId?: string, favoriteItemIds?: string): Promise<void>;
    /**
     * @param project - Project ID or project name
     * @param scope -
     * @param identityId -
     */
    getFavorites(project: string, scope: string, identityId?: string): Promise<Release.FavoriteItem[]>;
    /**
     * @param flightName -
     */
    getFlightAssignments(flightName?: string): Promise<string[]>;
    /**
     * Creates a new folder.
     *
     * @param folder - folder.
     * @param project - Project ID or project name
     * @param path - Path of the folder.
     */
    createFolder(folder: Release.Folder, project: string, path?: string): Promise<Release.Folder>;
    /**
     * Deletes a definition folder for given folder name and path and all it's existing definitions.
     *
     * @param project - Project ID or project name
     * @param path - Path of the folder to delete.
     */
    deleteFolder(project: string, path: string): Promise<void>;
    /**
     * Gets folders.
     *
     * @param project - Project ID or project name
     * @param path - Path of the folder.
     * @param queryOrder - Gets the results in the defined order. Default is 'None'.
     */
    getFolders(project: string, path?: string, queryOrder?: Release.FolderPathQueryOrder): Promise<Release.Folder[]>;
    /**
     * Updates an existing folder at given existing path.
     *
     * @param folder - folder.
     * @param project - Project ID or project name
     * @param path - Path of the folder to update.
     */
    updateFolder(folder: Release.Folder, project: string, path: string): Promise<Release.Folder>;
    /**
     * Updates the gate for a deployment.
     *
     * @param gateUpdateMetadata - Metadata to patch the Release Gates.
     * @param project - Project ID or project name
     * @param gateStepId - Gate step Id.
     */
    updateGates(gateUpdateMetadata: Release.GateUpdateMetadata, project: string, gateStepId: number): Promise<Release.ReleaseGates>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     */
    getReleaseHistory(project: string, releaseId: number): Promise<Release.ReleaseRevision[]>;
    /**
     * @param query -
     * @param project - Project ID or project name
     */
    getInputValues(query: FormInput.InputValuesQuery, project: string): Promise<FormInput.InputValuesQuery>;
    /**
     * @param project - Project ID or project name
     * @param buildId -
     * @param sourceId -
     */
    getIssues(project: string, buildId: number, sourceId?: string): Promise<Release.AutoTriggerIssue[]>;
    /**
     * Gets gate logs
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     * @param gateId - Id of the gate.
     * @param taskId - ReleaseTask Id for the log.
     */
    getGateLog(project: string, releaseId: number, environmentId: number, gateId: number, taskId: number): Promise<string>;
    /**
     * Get logs for a release Id.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     */
    getLogs(project: string, releaseId: number): Promise<ArrayBuffer>;
    /**
     * Gets logs
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     * @param taskId - ReleaseTask Id for the log.
     * @param attemptId - Id of the attempt.
     */
    getLog(project: string, releaseId: number, environmentId: number, taskId: number, attemptId?: number): Promise<string>;
    /**
     * Gets the task log of a release as a plain text file.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     * @param attemptId -
     * @param timelineId -
     * @param taskId - ReleaseTask Id for the log.
     * @param startLine - Starting line number for logs
     * @param endLine - Ending line number for logs
     */
    getTaskLog2(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string, taskId: number, startLine?: number, endLine?: number): Promise<string>;
    /**
     * Gets the task log of a release as a plain text file.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param environmentId - Id of release environment.
     * @param releaseDeployPhaseId - Release deploy phase Id.
     * @param taskId - ReleaseTask Id for the log.
     * @param startLine - Starting line number for logs
     * @param endLine - Ending line number for logs
     */
    getTaskLog(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number, taskId: number, startLine?: number, endLine?: number): Promise<string>;
    /**
     * Get manual intervention for a given release and manual intervention id.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param manualInterventionId - Id of the manual intervention.
     */
    getManualIntervention(project: string, releaseId: number, manualInterventionId: number): Promise<Release.ManualIntervention>;
    /**
     * List all manual interventions for a given release.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     */
    getManualInterventions(project: string, releaseId: number): Promise<Release.ManualIntervention[]>;
    /**
     * Update manual intervention.
     *
     * @param manualInterventionUpdateMetadata - Meta data to update manual intervention.
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param manualInterventionId - Id of the manual intervention.
     */
    updateManualIntervention(manualInterventionUpdateMetadata: Release.ManualInterventionUpdateMetadata, project: string, releaseId: number, manualInterventionId: number): Promise<Release.ManualIntervention>;
    /**
     * @param project - Project ID or project name
     * @param minMetricsTime -
     */
    getMetrics(project: string, minMetricsTime?: Date): Promise<Release.Metric[]>;
    /**
     * Gets Org pipeline release settings
     *
     */
    getOrgPipelineReleaseSettings(): Promise<Release.OrgPipelineReleaseSettings>;
    /**
     * Updates Org pipeline release settings
     *
     * @param newSettings -
     */
    updateOrgPipelineReleaseSettings(newSettings: Release.OrgPipelineReleaseSettingsUpdateParameters): Promise<Release.OrgPipelineReleaseSettings>;
    /**
     * Gets pipeline release settings
     *
     * @param project - Project ID or project name
     */
    getPipelineReleaseSettings(project: string): Promise<Release.ProjectPipelineReleaseSettings>;
    /**
     * Updates pipeline release settings
     *
     * @param newSettings -
     * @param project - Project ID or project name
     */
    updatePipelineReleaseSettings(newSettings: Release.ProjectPipelineReleaseSettingsUpdateParameters, project: string): Promise<Release.ProjectPipelineReleaseSettings>;
    /**
     * @param artifactType -
     * @param artifactSourceId -
     */
    getReleaseProjects(artifactType: string, artifactSourceId: string): Promise<Release.ProjectReference[]>;
    /**
     * Get a list of releases
     *
     * @param project - Project ID or project name
     * @param definitionId - Releases from this release definition Id.
     * @param definitionEnvironmentId -
     * @param searchText - Releases with names containing searchText.
     * @param createdBy - Releases created by this user.
     * @param statusFilter - Releases that have this status.
     * @param environmentStatusFilter -
     * @param minCreatedTime - Releases that were created after this time.
     * @param maxCreatedTime - Releases that were created before this time.
     * @param queryOrder - Gets the results in the defined order of created date for releases. Default is descending.
     * @param top - Number of releases to get. Default is 50.
     * @param continuationToken - Gets the releases after the continuation token provided.
     * @param expand - The property that should be expanded in the list of releases.
     * @param artifactTypeId - Releases with given artifactTypeId will be returned. Values can be Build, Jenkins, GitHub, Nuget, Team Build (external), ExternalTFSBuild, Git, TFVC, ExternalTfsXamlBuild.
     * @param sourceId - Unique identifier of the artifact used. e.g. For build it would be \{projectGuid\}:\{BuildDefinitionId\}, for Jenkins it would be \{JenkinsConnectionId\}:\{JenkinsDefinitionId\}, for TfsOnPrem it would be \{TfsOnPremConnectionId\}:\{ProjectName\}:\{TfsOnPremDefinitionId\}. For third-party artifacts e.g. TeamCity, BitBucket you may refer 'uniqueSourceIdentifier' inside vss-extension.json https://github.com/Microsoft/vsts-rm-extensions/blob/master/Extensions.
     * @param artifactVersionId - Releases with given artifactVersionId will be returned. E.g. in case of Build artifactType, it is buildId.
     * @param sourceBranchFilter - Releases with given sourceBranchFilter will be returned.
     * @param isDeleted - Gets the soft deleted releases, if true.
     * @param tagFilter - A comma-delimited list of tags. Only releases with these tags will be returned.
     * @param propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Releases will contain values for the specified property Ids (if they exist). If not set, properties will not be included. Note that this will not filter out any Release from results irrespective of whether it has property set or not.
     * @param releaseIdFilter - A comma-delimited list of releases Ids. Only releases with these Ids will be returned.
     * @param path - Releases under this folder path will be returned
     */
    getReleases(project?: string, definitionId?: number, definitionEnvironmentId?: number, searchText?: string, createdBy?: string, statusFilter?: Release.ReleaseStatus, environmentStatusFilter?: number, minCreatedTime?: Date, maxCreatedTime?: Date, queryOrder?: Release.ReleaseQueryOrder, top?: number, continuationToken?: number, expand?: Release.ReleaseExpands, artifactTypeId?: string, sourceId?: string, artifactVersionId?: string, sourceBranchFilter?: string, isDeleted?: boolean, tagFilter?: string[], propertyFilters?: string[], releaseIdFilter?: number[], path?: string): Promise<WebApi.PagedList<Release.Release>>;
    /**
     * Create a release.
     *
     * @param releaseStartMetadata - Metadata to create a release.
     * @param project - Project ID or project name
     */
    createRelease(releaseStartMetadata: Release.ReleaseStartMetadata, project: string): Promise<Release.Release>;
    /**
     * Soft delete a release
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param comment - Comment for deleting a release.
     */
    deleteRelease(project: string, releaseId: number, comment?: string): Promise<void>;
    /**
     * Get a Release
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param approvalFilters - A filter which would allow fetching approval steps selectively based on whether it is automated, or manual. This would also decide whether we should fetch pre and post approval snapshots. Assumes All by default
     * @param propertyFilters - A comma-delimited list of extended properties to be retrieved. If set, the returned Release will contain values for the specified property Ids (if they exist). If not set, properties will not be included.
     * @param expand - A property that should be expanded in the release.
     * @param topGateRecords - Number of release gate records to get. Default is 5.
     */
    getRelease(project: string, releaseId: number, approvalFilters?: Release.ApprovalFilters, propertyFilters?: string[], expand?: Release.SingleReleaseExpands, topGateRecords?: number): Promise<Release.Release>;
    /**
     * Get release summary of a given definition Id.
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the definition to get release summary.
     * @param releaseCount - Count of releases to be included in summary.
     * @param includeArtifact - Include artifact details.Default is 'false'.
     * @param definitionEnvironmentIdsFilter -
     */
    getReleaseDefinitionSummary(project: string, definitionId: number, releaseCount: number, includeArtifact?: boolean, definitionEnvironmentIdsFilter?: number[]): Promise<Release.ReleaseDefinitionSummary>;
    /**
     * Get release for a given revision number.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of the release.
     * @param definitionSnapshotRevision - Definition snapshot revision number.
     */
    getReleaseRevision(project: string, releaseId: number, definitionSnapshotRevision: number): Promise<string>;
    /**
     * Undelete a soft deleted release.
     *
     * @param project - Project ID or project name
     * @param releaseId - Id of release to be undeleted.
     * @param comment - Any comment for undeleting.
     */
    undeleteRelease(project: string, releaseId: number, comment: string): Promise<void>;
    /**
     * Update a complete release object.
     *
     * @param release - Release object for update.
     * @param project - Project ID or project name
     * @param releaseId - Id of the release to update.
     */
    updateRelease(release: Release.Release, project: string, releaseId: number): Promise<Release.Release>;
    /**
     * Update few properties of a release.
     *
     * @param releaseUpdateMetadata - Properties of release to update.
     * @param project - Project ID or project name
     * @param releaseId - Id of the release to update.
     */
    updateReleaseResource(releaseUpdateMetadata: Release.ReleaseUpdateMetadata, project: string, releaseId: number): Promise<Release.Release>;
    /**
     * Gets the release settings
     *
     * @param project - Project ID or project name
     */
    getReleaseSettings(project: string): Promise<Release.ReleaseSettings>;
    /**
     * Updates the release settings
     *
     * @param releaseSettings -
     * @param project - Project ID or project name
     */
    updateReleaseSettings(releaseSettings: Release.ReleaseSettings, project: string): Promise<Release.ReleaseSettings>;
    /**
     * Get release definition for a given definitionId and revision
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the definition.
     * @param revision - Id of the revision.
     */
    getDefinitionRevision(project: string, definitionId: number, revision: number): Promise<string>;
    /**
     * Get revision history for a release definition
     *
     * @param project - Project ID or project name
     * @param definitionId - Id of the definition.
     */
    getReleaseDefinitionHistory(project: string, definitionId: number): Promise<Release.ReleaseDefinitionRevision[]>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     */
    getSummaryMailSections(project: string, releaseId: number): Promise<Release.SummaryMailSection[]>;
    /**
     * @param mailMessage -
     * @param project - Project ID or project name
     * @param releaseId -
     */
    sendSummaryMail(mailMessage: Release.MailMessage, project: string, releaseId: number): Promise<void>;
    /**
     * @param project - Project ID or project name
     * @param definitionId -
     */
    getSourceBranches(project: string, definitionId: number): Promise<string[]>;
    /**
     * Adds a tag to a definition
     *
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     * @param tag -
     */
    addDefinitionTag(project: string, releaseDefinitionId: number, tag: string): Promise<string[]>;
    /**
     * Adds multiple tags to a definition
     *
     * @param tags -
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     */
    addDefinitionTags(tags: string[], project: string, releaseDefinitionId: number): Promise<string[]>;
    /**
     * Deletes a tag from a definition
     *
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     * @param tag -
     */
    deleteDefinitionTag(project: string, releaseDefinitionId: number, tag: string): Promise<string[]>;
    /**
     * Gets the tags for a definition
     *
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     */
    getDefinitionTags(project: string, releaseDefinitionId: number): Promise<string[]>;
    /**
     * Adds a tag to a releaseId
     *
     * @param project - Project ID or project name
     * @param releaseId -
     * @param tag -
     */
    addReleaseTag(project: string, releaseId: number, tag: string): Promise<string[]>;
    /**
     * Adds tag to a release
     *
     * @param tags -
     * @param project - Project ID or project name
     * @param releaseId -
     */
    addReleaseTags(tags: string[], project: string, releaseId: number): Promise<string[]>;
    /**
     * Deletes a tag from a release
     *
     * @param project - Project ID or project name
     * @param releaseId -
     * @param tag -
     */
    deleteReleaseTag(project: string, releaseId: number, tag: string): Promise<string[]>;
    /**
     * Gets the tags for a release
     *
     * @param project - Project ID or project name
     * @param releaseId -
     */
    getReleaseTags(project: string, releaseId: number): Promise<string[]>;
    /**
     * @param project - Project ID or project name
     */
    getTags(project: string): Promise<string[]>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param environmentId -
     * @param releaseDeployPhaseId -
     */
    getTasksForTaskGroup(project: string, releaseId: number, environmentId: number, releaseDeployPhaseId: number): Promise<Release.ReleaseTask[]>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param environmentId -
     * @param attemptId -
     * @param timelineId -
     */
    getTasks2(project: string, releaseId: number, environmentId: number, attemptId: number, timelineId: string): Promise<Release.ReleaseTask[]>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param environmentId -
     * @param attemptId -
     */
    getTasks(project: string, releaseId: number, environmentId: number, attemptId?: number): Promise<Release.ReleaseTask[]>;
    /**
     * @param project - Project ID or project name
     */
    getArtifactTypeDefinitions(project: string): Promise<Release.ArtifactTypeDefinition[]>;
    /**
     * @param project - Project ID or project name
     * @param releaseDefinitionId -
     */
    getArtifactVersions(project: string, releaseDefinitionId: number): Promise<Release.ArtifactVersionQueryResult>;
    /**
     * @param artifacts -
     * @param project - Project ID or project name
     */
    getArtifactVersionsForSources(artifacts: Release.Artifact[], project: string): Promise<Release.ArtifactVersionQueryResult>;
    /**
     * @param project - Project ID or project name
     * @param releaseId -
     * @param baseReleaseId -
     * @param top -
     * @param artifactAlias -
     */
    getReleaseWorkItemsRefs(project: string, releaseId: number, baseReleaseId?: number, top?: number, artifactAlias?: string): Promise<Release.ReleaseWorkItemRef[]>;
}
