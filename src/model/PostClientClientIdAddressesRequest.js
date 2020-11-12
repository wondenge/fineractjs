

import ApiClient from '../ApiClient';

/**
 * The PostClientClientIdAddressesRequest model module.
 * @module model/PostClientClientIdAddressesRequest
 * @version 1.0
 */
class PostClientClientIdAddressesRequest {
    /**
     * Constructs a new <code>PostClientClientIdAddressesRequest</code>.
     * PostClientClientIdAddressesRequest
     * @alias module:model/PostClientClientIdAddressesRequest
     */
    constructor() { 
        
        PostClientClientIdAddressesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientClientIdAddressesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientClientIdAddressesRequest} obj Optional instance to populate.
     * @return {module:model/PostClientClientIdAddressesRequest} The populated <code>PostClientClientIdAddressesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientClientIdAddressesRequest();

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
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('stateProvinceId')) {
                obj['stateProvinceId'] = ApiClient.convertToType(data['stateProvinceId'], 'Number');
            }
            if (data.hasOwnProperty('countryId')) {
                obj['countryId'] = ApiClient.convertToType(data['countryId'], 'Number');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} street
 */
PostClientClientIdAddressesRequest.prototype['street'] = undefined;

/**
 * @member {String} addressLine1
 */
PostClientClientIdAddressesRequest.prototype['addressLine1'] = undefined;

/**
 * @member {String} addressLine2
 */
PostClientClientIdAddressesRequest.prototype['addressLine2'] = undefined;

/**
 * @member {String} addressLine3
 */
PostClientClientIdAddressesRequest.prototype['addressLine3'] = undefined;

/**
 * @member {String} city
 */
PostClientClientIdAddressesRequest.prototype['city'] = undefined;

/**
 * @member {Number} stateProvinceId
 */
PostClientClientIdAddressesRequest.prototype['stateProvinceId'] = undefined;

/**
 * @member {Number} countryId
 */
PostClientClientIdAddressesRequest.prototype['countryId'] = undefined;

/**
 * @member {Number} postalCode
 */
PostClientClientIdAddressesRequest.prototype['postalCode'] = undefined;






export default PostClientClientIdAddressesRequest;

