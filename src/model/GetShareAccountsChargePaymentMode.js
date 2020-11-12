

import ApiClient from '../ApiClient';

/**
 * The GetShareAccountsChargePaymentMode model module.
 * @module model/GetShareAccountsChargePaymentMode
 * @version 1.0
 */
class GetShareAccountsChargePaymentMode {
    /**
     * Constructs a new <code>GetShareAccountsChargePaymentMode</code>.
     * @alias module:model/GetShareAccountsChargePaymentMode
     */
    constructor() { 
        
        GetShareAccountsChargePaymentMode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetShareAccountsChargePaymentMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetShareAccountsChargePaymentMode} obj Optional instance to populate.
     * @return {module:model/GetShareAccountsChargePaymentMode} The populated <code>GetShareAccountsChargePaymentMode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetShareAccountsChargePaymentMode();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetShareAccountsChargePaymentMode.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetShareAccountsChargePaymentMode.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetShareAccountsChargePaymentMode.prototype['description'] = undefined;






export default GetShareAccountsChargePaymentMode;

