/*
 * ---------------------------------------------------------
 * Copyright(C) Microsoft Corporation. All rights reserved.
 * ---------------------------------------------------------
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import { RestClientBase } from "../Common/RestClientBase";
var LocationsRestClient = /** @class */ (function (_super) {
    __extends(LocationsRestClient, _super);
    function LocationsRestClient(options) {
        return _super.call(this, options) || this;
    }
    /**
     * This was copied and adapted from TeamFoundationConnectionService.Connect()
     *
     * @param connectOptions -
     * @param lastChangeId - Obsolete 32-bit LastChangeId
     * @param lastChangeId64 - Non-truncated 64-bit LastChangeId
     */
    LocationsRestClient.prototype.getConnectionData = function (connectOptions, lastChangeId, lastChangeId64) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    connectOptions: connectOptions,
                    lastChangeId: lastChangeId,
                    lastChangeId64: lastChangeId64
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/ConnectionData",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param areaId -
     * @param enterpriseName -
     * @param organizationName -
     */
    LocationsRestClient.prototype.getResourceArea = function (areaId, enterpriseName, organizationName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    enterpriseName: enterpriseName,
                    organizationName: organizationName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/ResourceAreas/{areaId}",
                        routeValues: {
                            areaId: areaId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param areaId -
     * @param hostId -
     */
    LocationsRestClient.prototype.getResourceAreaByHost = function (areaId, hostId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    hostId: hostId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/ResourceAreas/{areaId}",
                        routeValues: {
                            areaId: areaId
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param enterpriseName -
     * @param organizationName -
     */
    LocationsRestClient.prototype.getResourceAreas = function (enterpriseName, organizationName) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    enterpriseName: enterpriseName,
                    organizationName: organizationName
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/ResourceAreas/{areaId}",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param hostId -
     */
    LocationsRestClient.prototype.getResourceAreasByHost = function (hostId) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    hostId: hostId
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/ResourceAreas/{areaId}",
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param serviceType -
     * @param identifier -
     */
    LocationsRestClient.prototype.deleteServiceDefinition = function (serviceType, identifier) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "DELETE",
                        routeTemplate: "_apis/ServiceDefinitions/{serviceType}/{identifier}",
                        routeValues: {
                            serviceType: serviceType,
                            identifier: identifier
                        }
                    })];
            });
        });
    };
    /**
     * Finds a given service definition.
     *
     * @param serviceType -
     * @param identifier -
     * @param allowFaultIn - If true, we will attempt to fault in a host instance mapping if in SPS.
     * @param previewFaultIn - If true, we will calculate and return a host instance mapping, but not persist it.
     */
    LocationsRestClient.prototype.getServiceDefinition = function (serviceType, identifier, allowFaultIn, previewFaultIn) {
        return __awaiter(this, void 0, void 0, function () {
            var queryValues;
            return __generator(this, function (_a) {
                queryValues = {
                    allowFaultIn: allowFaultIn,
                    previewFaultIn: previewFaultIn
                };
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/ServiceDefinitions/{serviceType}/{identifier}",
                        routeValues: {
                            serviceType: serviceType,
                            identifier: identifier
                        },
                        queryParams: queryValues
                    })];
            });
        });
    };
    /**
     * @param serviceType -
     */
    LocationsRestClient.prototype.getServiceDefinitions = function (serviceType) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        routeTemplate: "_apis/ServiceDefinitions/{serviceType}/{identifier}",
                        routeValues: {
                            serviceType: serviceType
                        }
                    })];
            });
        });
    };
    /**
     * @param serviceDefinitions -
     */
    LocationsRestClient.prototype.updateServiceDefinitions = function (serviceDefinitions) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.beginRequest({
                        apiVersion: "7.2-preview.1",
                        method: "PATCH",
                        routeTemplate: "_apis/ServiceDefinitions/{serviceType}/{identifier}",
                        body: serviceDefinitions
                    })];
            });
        });
    };
    return LocationsRestClient;
}(RestClientBase));
export { LocationsRestClient };
