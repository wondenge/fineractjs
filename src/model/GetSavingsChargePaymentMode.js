

import ApiClient from '../ApiClient';

/**
 * The GetSavingsChargePaymentMode model module.
 * @module model/GetSavingsChargePaymentMode
 * @version 1.0
 */
class GetSavingsChargePaymentMode {
    /**
     * Constructs a new <code>GetSavingsChargePaymentMode</code>.
     * @alias module:model/GetSavingsChargePaymentMode
     */
    constructor() { 
        
        GetSavingsChargePaymentMode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsChargePaymentMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsChargePaymentMode} obj Optional instance to populate.
     * @return {module:model/GetSavingsChargePaymentMode} The populated <code>GetSavingsChargePaymentMode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsChargePaymentMode();

            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} code
 */
GetSavingsChargePaymentMode.prototype['code'] = undefined;

/**
 * @member {Number} id
 */
GetSavingsChargePaymentMode.prototype['id'] = undefined;

/**
 * @member {String} description
 */
GetSavingsChargePaymentMode.prototype['description'] = undefined;






export default GetSavingsChargePaymentMode;

