

import ApiClient from '../ApiClient';

/**
 * The PostalAddress model module.
 * @module model/PostalAddress
 * @version 1.0
 */
class PostalAddress {
    /**
     * Constructs a new <code>PostalAddress</code>.
     * @alias module:model/PostalAddress
     */
    constructor() { 
        
        PostalAddress.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostalAddress</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostalAddress} obj Optional instance to populate.
     * @return {module:model/PostalAddress} The populated <code>PostalAddress</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostalAddress();

            if (data.hasOwnProperty('addressLine1')) {
                obj['addressLine1'] = ApiClient.convertToType(data['addressLine1'], 'String');
            }
            if (data.hasOwnProperty('addressLine2')) {
                obj['addressLine2'] = ApiClient.convertToType(data['addressLine2'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('stateProvince')) {
                obj['stateProvince'] = ApiClient.convertToType(data['stateProvince'], 'String');
            }
            if (data.hasOwnProperty('postalCode')) {
                obj['postalCode'] = ApiClient.convertToType(data['postalCode'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} addressLine1
 */
PostalAddress.prototype['addressLine1'] = undefined;

/**
 * @member {String} addressLine2
 */
PostalAddress.prototype['addressLine2'] = undefined;

/**
 * @member {String} city
 */
PostalAddress.prototype['city'] = undefined;

/**
 * @member {String} stateProvince
 */
PostalAddress.prototype['stateProvince'] = undefined;

/**
 * @member {String} postalCode
 */
PostalAddress.prototype['postalCode'] = undefined;

/**
 * @member {String} country
 */
PostalAddress.prototype['country'] = undefined;






export default PostalAddress;

