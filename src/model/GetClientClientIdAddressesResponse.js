

import ApiClient from '../ApiClient';

/**
 * The GetClientClientIdAddressesResponse model module.
 * @module model/GetClientClientIdAddressesResponse
 * @version 1.0
 */
class GetClientClientIdAddressesResponse {
    /**
     * Constructs a new <code>GetClientClientIdAddressesResponse</code>.
     * GetClientClientIdAddressesResponse
     * @alias module:model/GetClientClientIdAddressesResponse
     */
    constructor() { 
        
        GetClientClientIdAddressesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientClientIdAddressesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientClientIdAddressesResponse} obj Optional instance to populate.
     * @return {module:model/GetClientClientIdAddressesResponse} The populated <code>GetClientClientIdAddressesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientClientIdAddressesResponse();

            if (data.hasOwnProperty('client_id')) {
                obj['client_id'] = ApiClient.convertToType(data['client_id'], 'Number');
            }
            if (data.hasOwnProperty('addressType')) {
                obj['addressType'] = ApiClient.convertToType(data['addressType'], 'String');
            }
            if (data.hasOwnProperty('addressId')) {
                obj['addressId'] = ApiClient.convertToType(data['addressId'], 'Number');
            }
            if (data.hasOwnProperty('addressTypeId')) {
                obj['addressTypeId'] = ApiClient.convertToType(data['addressTypeId'], 'Number');
            }
            if (data.hasOwnProperty('isActive')) {
                obj['isActive'] = ApiClient.convertToType(data['isActive'], 'Boolean');
            }
            if (data.hasOwnProperty('street')) {
                obj['street'] = ApiClient.convertToType(data['street'], 'String');
            }
            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('addressLine3')) {
                obj['addressLine3'] = ApiClient.convertToType(data['addressLine3'], 'String');
            }
            if (data.hasOwnProperty('townVillage')) {
                obj['townVillage'] = ApiClient.convertToType(data['townVillage'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('countyDistrict')) {
                obj['countyDistrict'] = ApiClient.convertToType(data['countyDistrict'], 'String');
            }
            if (data.hasOwnProperty('stateProvinceId')) {
                obj['stateProvinceId'] = ApiClient.convertToType(data['stateProvinceId'], 'Number');
            }
            if (data.hasOwnProperty('countryName')) {
                obj['countryName'] = ApiClient.convertToType(data['countryName'], 'String');
            }
            if (data.hasOwnProperty('stateName')) {
                obj['stateName'] = ApiClient.convertToType(data['stateName'], 'String');
            }
            if (data.hasOwnProperty('countryId')) {
                obj['countryId'] = ApiClient.convertToType(data['countryId'], 'Number');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'Number');
            }
            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('updatedBy')) {
                obj['updatedBy'] = ApiClient.convertToType(data['updatedBy'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} client_id
 */
GetClientClientIdAddressesResponse.prototype['client_id'] = undefined;

/**
 * @member {String} addressType
 */
GetClientClientIdAddressesResponse.prototype['addressType'] = undefined;

/**
 * @member {Number} addressId
 */
GetClientClientIdAddressesResponse.prototype['addressId'] = undefined;

/**
 * @member {Number} addressTypeId
 */
GetClientClientIdAddressesResponse.prototype['addressTypeId'] = undefined;

/**
 * @member {Boolean} isActive
 */
GetClientClientIdAddressesResponse.prototype['isActive'] = undefined;

/**
 * @member {String} street
 */
GetClientClientIdAddressesResponse.prototype['street'] = undefined;

/**
 * @member {String} addressLine1
 */
GetClientClientIdAddressesResponse.prototype['addressLine1'] = undefined;

/**
 * @member {String} addressLine2
 */
GetClientClientIdAddressesResponse.prototype['addressLine2'] = undefined;

/**
 * @member {String} addressLine3
 */
GetClientClientIdAddressesResponse.prototype['addressLine3'] = undefined;

/**
 * @member {String} townVillage
 */
GetClientClientIdAddressesResponse.prototype['townVillage'] = undefined;

/**
 * @member {String} city
 */
GetClientClientIdAddressesResponse.prototype['city'] = undefined;

/**
 * @member {String} countyDistrict
 */
GetClientClientIdAddressesResponse.prototype['countyDistrict'] = undefined;

/**
 * @member {Number} stateProvinceId
 */
GetClientClientIdAddressesResponse.prototype['stateProvinceId'] = undefined;

/**
 * @member {String} countryName
 */
GetClientClientIdAddressesResponse.prototype['countryName'] = undefined;

/**
 * @member {String} stateName
 */
GetClientClientIdAddressesResponse.prototype['stateName'] = undefined;

/**
 * @member {Number} countryId
 */
GetClientClientIdAddressesResponse.prototype['countryId'] = undefined;

/**
 * @member {Number} postalCode
 */
GetClientClientIdAddressesResponse.prototype['postalCode'] = undefined;

/**
 * @member {String} createdBy
 */
GetClientClientIdAddressesResponse.prototype['createdBy'] = undefined;

/**
 * @member {String} updatedBy
 */
GetClientClientIdAddressesResponse.prototype['updatedBy'] = undefined;






export default GetClientClientIdAddressesResponse;

