import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";
import * as ServiceEndpoint from "../ServiceEndpoint/ServiceEndpoint";
import * as WebApi from "../WebApi/WebApi";
export declare class ServiceEndpointRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions);
    static readonly RESOURCE_AREA_ID: string;
    /**
     * Returns list of azure subscriptions
     *
     */
    getAzureManagementGroups(): Promise<ServiceEndpoint.AzureManagementGroupQueryResult>;
    /**
     * Returns list of azure subscriptions
     *
     */
    getAzureSubscriptions(): Promise<ServiceEndpoint.AzureSubscriptionQueryResult>;
    /**
     * Proxy for a GET request defined by a service endpoint.
     *
     * @param serviceEndpointRequest - Service endpoint request.
     * @param project - Project ID or project name
     * @param endpointId - Id of the service endpoint.
     */
    executeServiceEndpointRequest(serviceEndpointRequest: ServiceEndpoint.ServiceEndpointRequest, project: string, endpointId: string): Promise<ServiceEndpoint.ServiceEndpointRequestResult>;
    /**
     * Proxy for a GET request defined by a service endpoint. The request is authorized using a data source in service endpoint. The response is filtered using an XPath/Json based selector.
     *
     * @param binding - Describes the data source to fetch.
     * @param project - Project ID or project name
     */
    queryServiceEndpoint(binding: ServiceEndpoint.DataSourceBinding, project: string): Promise<string[]>;
    /**
     * Creates a new service endpoint
     *
     * @param endpoint - Service endpoint to create
     */
    createServiceEndpoint(endpoint: ServiceEndpoint.ServiceEndpoint): Promise<ServiceEndpoint.ServiceEndpoint>;
    /**
     * Delete a service endpoint
     *
     * @param endpointId - Endpoint Id of endpoint to delete
     * @param projectIds - project Ids from which endpoint needs to be deleted
     * @param deep - delete the spn created by endpoint
     */
    deleteServiceEndpoint(endpointId: string, projectIds: string[], deep?: boolean): Promise<void>;
    /**
     * Share service endpoint across projects
     *
     * @param endpointProjectReferences - Project reference details of the target project
     * @param endpointId - Endpoint Id of the endpoint to share
     */
    shareServiceEndpoint(endpointProjectReferences: ServiceEndpoint.ServiceEndpointProjectReference[], endpointId: string): Promise<void>;
    /**
     * Update the service endpoint
     *
     * @param endpoint - Updated data for the endpoint
     * @param endpointId - Endpoint Id of the endpoint to update
     * @param operation - operation type
     */
    updateServiceEndpoint(endpoint: ServiceEndpoint.ServiceEndpoint, endpointId: string, operation?: string): Promise<ServiceEndpoint.ServiceEndpoint>;
    /**
     * Update the service endpoints.
     *
     * @param endpoints - Names of the service endpoints to update.
     */
    updateServiceEndpoints(endpoints: ServiceEndpoint.ServiceEndpoint[]): Promise<ServiceEndpoint.ServiceEndpoint[]>;
    /**
     * Get the service endpoint details.
     *
     * @param project - Project ID or project name
     * @param endpointId - Id of the service endpoint.
     * @param actionFilter - Action filter for the service connection. It specifies the action which can be performed on the service connection.
     */
    getServiceEndpointDetails(project: string, endpointId: string, actionFilter?: ServiceEndpoint.ServiceEndpointActionFilter): Promise<ServiceEndpoint.ServiceEndpoint>;
    /**
     * Get the service endpoints.
     *
     * @param project - Project ID or project name
     * @param type - Type of the service endpoints.
     * @param authSchemes - Authorization schemes used for service endpoints.
     * @param endpointIds - Ids of the service endpoints.
     * @param owner - Owner for service endpoints.
     * @param includeFailed - Failed flag for service endpoints.
     * @param includeDetails - Flag to include more details for service endpoints. This is for internal use only and the flag will be treated as false for all other requests
     * @param actionFilter - The "actionFilter" parameter allows users to evaluate requestor permissions and retrieve a list of endpoints that match the specified conditions, ensuring that only relevant endpoints are returned based on their permissions
     */
    getServiceEndpoints(project: string, type?: string, authSchemes?: string[], endpointIds?: string[], owner?: string, includeFailed?: boolean, includeDetails?: boolean, actionFilter?: ServiceEndpoint.ServiceEndpointActionFilter): Promise<ServiceEndpoint.ServiceEndpoint[]>;
    /**
     * Get the service endpoints by name.
     *
     * @param project - Project ID or project name
     * @param endpointNames - Names of the service endpoints.
     * @param type - Type of the service endpoints.
     * @param authSchemes - Authorization schemes used for service endpoints.
     * @param owner - Owner for service endpoints.
     * @param includeFailed - Failed flag for service endpoints.
     * @param includeDetails - Flag to include more details for service endpoints. This is for internal use only and the flag will be treated as false for all other requests
     */
    getServiceEndpointsByNames(project: string, endpointNames: string[], type?: string, authSchemes?: string[], owner?: string, includeFailed?: boolean, includeDetails?: boolean): Promise<ServiceEndpoint.ServiceEndpoint[]>;
    /**
     * Gets the service endpoints and patch new authorization parameters
     *
     * @param refreshAuthenticationParameters - Scope, Validity of Token requested.
     * @param project - Project ID or project name
     * @param endpointIds - Ids of the service endpoints.
     */
    getServiceEndpointsWithRefreshedAuthentication(refreshAuthenticationParameters: ServiceEndpoint.RefreshAuthenticationParameters[], project: string, endpointIds: string[]): Promise<ServiceEndpoint.ServiceEndpoint[]>;
    /**
     * Get service endpoint execution records.
     *
     * @param project - Project ID or project name
     * @param endpointId - Id of the service endpoint.
     * @param top - Number of service endpoint execution records to get.
     * @param continuationToken - A continuation token, returned by a previous call to this method, that can be used to return the next set of records
     */
    getServiceEndpointExecutionRecords(project: string, endpointId: string, top?: number, continuationToken?: number): Promise<WebApi.PagedList<ServiceEndpoint.ServiceEndpointExecutionRecord>>;
    /**
     * Add service endpoint execution records.
     *
     * @param input - Service endpoint execution records to add.
     * @param project - Project ID or project name
     */
    addServiceEndpointExecutionRecords(input: ServiceEndpoint.ServiceEndpointExecutionRecordsInput, project: string): Promise<ServiceEndpoint.ServiceEndpointExecutionRecord[]>;
    /**
     * @param configurationParams -
     */
    createOAuthConfiguration(configurationParams: ServiceEndpoint.OAuthConfigurationParams): Promise<ServiceEndpoint.OAuthConfiguration>;
    /**
     * @param configurationId -
     */
    deleteOAuthConfiguration(configurationId: string): Promise<ServiceEndpoint.OAuthConfiguration>;
    /**
     * @param configurationId -
     */
    getOAuthConfiguration(configurationId: string): Promise<ServiceEndpoint.OAuthConfiguration>;
    /**
     * @param endpointType -
     * @param actionFilter -
     */
    getOAuthConfigurations(endpointType?: string, actionFilter?: ServiceEndpoint.OAuthConfigurationActionFilter): Promise<ServiceEndpoint.OAuthConfiguration[]>;
    /**
     * @param configurationParams -
     * @param configurationId -
     */
    updateOAuthConfiguration(configurationParams: ServiceEndpoint.OAuthConfigurationParams, configurationId: string): Promise<ServiceEndpoint.OAuthConfiguration>;
    /**
     * @param endpointId -
     * @param project -
     */
    querySharedProjects(endpointId: string, project: string): Promise<ServiceEndpoint.ProjectReference[]>;
    /**
     * @param endpointId -
     * @param fromProject -
     * @param withProject -
     */
    shareEndpointWithProject(endpointId: string, fromProject: string, withProject: string): Promise<void>;
    /**
     * Get service endpoint types.
     *
     * @param type - Type of service endpoint.
     * @param scheme - Scheme of service endpoint.
     */
    getServiceEndpointTypes(type?: string, scheme?: string): Promise<ServiceEndpoint.ServiceEndpointType[]>;
    /**
     * @param tenantId -
     * @param redirectUri -
     * @param promptOption -
     * @param completeCallbackPayload -
     * @param completeCallbackByAuthCode -
     */
    createAadOAuthRequest(tenantId: string, redirectUri: string, promptOption?: ServiceEndpoint.AadLoginPromptOption, completeCallbackPayload?: string, completeCallbackByAuthCode?: boolean): Promise<string>;
    /**
     */
    getVstsAadTenantId(): Promise<string>;
}
