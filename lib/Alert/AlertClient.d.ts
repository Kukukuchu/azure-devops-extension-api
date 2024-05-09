import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";
import * as Alert from "../Alert/Alert";
import * as WebApi from "../WebApi/WebApi";
export declare class AlertRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions);
    /**
     * Get an alert.
     *
     * @param project - Project ID or project name
     * @param alertId - ID of alert to retrieve
     * @param repository - Name or id  of a repository that alert is part of
     * @param ref -
     * @param expand - Expand alert attributes. Possible options are \{ValidationFingerprint, None\}
     */
    getAlert(project: string, alertId: number, repository: string, ref?: string, expand?: Alert.ExpandOption): Promise<Alert.Alert>;
    /**
     * Get alerts for a repository
     *
     * @param project - Project ID or project name
     * @param repository - The name or ID of the repository
     * @param top - The maximum number of alerts to return
     * @param orderBy - Must be "id" "firstSeen" "lastSeen" "fixedOn" or "severity"  Defaults to "id"
     * @param criteria - Options to limit the alerts returned
     * @param continuationToken - If there are more alerts than can be returned, a continuation token is placed in the "x-ms-continuationtoken" header.  Use that token here to get the next page of alerts
     */
    getAlerts(project: string, repository: string, top?: number, orderBy?: string, criteria?: Alert.SearchCriteria, continuationToken?: string): Promise<WebApi.PagedList<Alert.Alert>>;
    /**
     * Get an alert.
     *
     * @param project - Project ID or project name
     * @param alertId - ID of alert to retrieve
     * @param repository - Name or id  of a repository that alert is part of
     * @param ref -
     * @param expand - Expand alert attributes. Possible options are \{ValidationFingerprint, None\}
     */
    getAlertSarif(project: string, alertId: number, repository: string, ref?: string, expand?: Alert.ExpandOption): Promise<string>;
    /**
     * Update the status of an alert
     *
     * @param stateUpdate - The new status of the alert
     * @param project - Project ID or project name
     * @param alertId - The ID of the alert
     * @param repository - The name or ID of the repository
     */
    updateAlert(stateUpdate: Alert.AlertStateUpdate, project: string, alertId: number, repository: string): Promise<Alert.Alert>;
    /**
     * Get instances of an alert.
     *
     * @param project - Project ID or project name
     * @param alertId - ID of alert to retrieve
     * @param repository - Name or id of a repository that alert is part of
     * @param ref -
     */
    getAlertInstances(project: string, alertId: number, repository: string, ref?: string): Promise<Alert.AlertAnalysisInstance[]>;
    /**
     * Update alert metadata associations.
     *
     * @param alertsMetadata - A list of metadata to associate with alerts.
     * @param project - Project ID or project name
     * @param repository - The name or ID of the repository.
     */
    updateAlertsMetadata(alertsMetadata: Alert.AlertMetadata[], project: string, repository: string): Promise<Alert.AlertMetadataChange[]>;
    /**
     * Upload a Sarif containing security alerts
     *
     * @param content - Content to upload
     * @param project - Project ID or project name
     * @param repository - The name or ID of a repository
     */
    uploadSarif(content: string, project: string, repository: string): Promise<number>;
    /**
     * @param project - Project ID or project name
     * @param repository -
     * @param alertType -
     */
    getUxFilters(project: string, repository: string, alertType: Alert.AlertType): Promise<Alert.UxFilters>;
    /**
     * Get the status of the Sarif processing job
     *
     * @param sarifId - Sarif ID returned when the Sarif was uploaded
     */
    getSarif(sarifId: number): Promise<Alert.SarifUploadStatus>;
}
