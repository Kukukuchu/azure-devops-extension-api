import { getAccessToken, getService } from "azure-devops-extension-sdk";
export function getClient(clientClass, clientOptions) {
    var options = clientOptions || {};
    if (!options.rootPath) {
        options.rootPath = getService("ms.vss-features.location-service" /* LocationService */).then(function (locationService) {
            if (clientClass.RESOURCE_AREA_ID) {
                return locationService.getResourceAreaLocation(clientClass.RESOURCE_AREA_ID);
            }
            else {
                return locationService.getServiceLocation();
            }
        });
    }
    if (!options.authTokenProvider) {
        options.authTokenProvider = {
            getAuthorizationHeader: function () {
                return getAccessToken().then(function (token) { return token ? ("Bearer " + token) : ""; });
            }
        };
    }
    return new clientClass(options);
}
