import { IVssRestClientOptions } from "../Common/Context";
import { RestClientBase } from "../Common/RestClientBase";
import * as Management from "../Management/Management";
export declare class ManagementRestClient extends RestClientBase {
    constructor(options: IVssRestClientOptions);
    /**
     * Delete the billing info for an organization.
     *
     * @param organizationId -
     */
    deleteBillingInfo(organizationId: string): Promise<void>;
    /**
     * Delete the meter usage history from Primary SU for an organization.
     *
     * @param organizationId -
     */
    deleteMeterUsageHistory(organizationId: string): Promise<void>;
    /**
     * Get the billing info for an organization.
     *
     * @param organizationId - Organization ID to get billing info for.
     */
    getBillingInfo(organizationId: string): Promise<Management.BillingInfo>;
    /**
     * Save the billing info for an organization.
     *
     * @param billingInfo -
     * @param organizationId -
     */
    saveBillingInfo(billingInfo: Management.BillingInfo, organizationId: string): Promise<void>;
    /**
     * During multi-org billing computation in primary scale unit(EUS21), this API is used to create billing snapshot for a specific org. Primary scale unit will call this API for each org in different scsle units to create billing snapshot. Data will be stored in the org specific partition DB -\> billing snapshot table. This is needed as customers will fetch billing data from their org specific partition DB.
     *
     * @param meterUsage -
     */
    createBillingSnapshot(meterUsage: Management.MeterUsage): Promise<void>;
    /**
     * Get all billable committers details, including those not matched with a VSID.
     *
     * @param billingDate - The date to query, or if not provided, today
     */
    getBillableCommitterDetails(billingDate?: Date): Promise<Management.BillableCommitterDetails[]>;
    /**
     */
    getLastMeterUsage(): Promise<Management.MeterUsage>;
    /**
     * Get commiters used when calculating billing information.
     *
     * @param billingDate - The date to query, or if not provided, today
     */
    getMeterUsage(billingDate?: Date): Promise<Management.MeterUsage>;
    /**
     * Get the current status of Advanced Security for the organization
     *
     * @param includeAllProperties - When true, also determine if pushes are blocked if they contain secrets
     */
    getOrgEnablementStatus(includeAllProperties?: boolean): Promise<Management.AdvSecEnablementSettings>;
    /**
     * Update the status of Advanced Security for the organization
     *
     * @param savedAdvSecEnablementStatus - The new status
     */
    updateOrgEnablementStatus(savedAdvSecEnablementStatus: Management.AdvSecEnablementSettingsUpdate): Promise<void>;
    /**
     * Estimate the committers that would be added to the customer's usage if Advanced Security was enabled for this organization.
     *
     */
    getEstimatedOrgBillablePushers(): Promise<string[]>;
    /**
     * Get the current status of Advanced Security for a project
     *
     * @param project - Project ID or project name
     * @param includeAllProperties - When true, also determine if pushes are blocked if they contain secrets
     */
    getProjectEnablementStatus(project: string, includeAllProperties?: boolean): Promise<Management.AdvSecEnablementSettings>;
    /**
     * Update the status of Advanced Security for the project
     *
     * @param savedAdvSecEnablementStatus - The new status
     * @param project - Project ID or project name
     */
    updateProjectEnablementStatus(savedAdvSecEnablementStatus: Management.AdvSecEnablementSettingsUpdate, project: string): Promise<void>;
    /**
     * Estimate the number of committers that would be added to the customer's usage if Advanced Security was enabled for this project.
     *
     * @param project - Project ID or project name
     */
    getEstimatedProjectBillablePushers(project: string): Promise<string[]>;
    /**
     * Determine if Advanced Security is enabled for a repository
     *
     * @param project - Project ID or project name
     * @param repository - The name or ID of the repository
     * @param includeAllProperties - When true, will also determine if pushes are blocked when secrets are detected
     */
    getRepoEnablementStatus(project: string, repository: string, includeAllProperties?: boolean): Promise<Management.AdvSecEnablementStatus>;
    /**
     * Update the enablement of Advanced Security for a repository
     *
     * @param savedAdvSecEnablementStatus - new status
     * @param project - Project ID or project name
     * @param repository - Name or ID of the repository
     */
    updateRepoAdvSecEnablementStatus(savedAdvSecEnablementStatus: Management.AdvSecEnablementStatusUpdate, project: string, repository: string): Promise<void>;
    /**
     * Estimate the committers that would be added to the customer's usage if Advanced Security was enabled for this repository.
     *
     * @param project - Project ID or project name
     * @param repository - The name or ID of the repository
     */
    getEstimatedRepoBillableCommitters(project: string, repository: string): Promise<string[]>;
}
