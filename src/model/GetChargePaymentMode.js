

import ApiClient from '../ApiClient';

/**
 * The GetChargePaymentMode model module.
 * @module model/GetChargePaymentMode
 * @version 1.0
 */
class GetChargePaymentMode {
    /**
     * Constructs a new <code>GetChargePaymentMode</code>.
     * @alias module:model/GetChargePaymentMode
     */
    constructor() { 
        
        GetChargePaymentMode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetChargePaymentMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetChargePaymentMode} obj Optional instance to populate.
     * @return {module:model/GetChargePaymentMode} The populated <code>GetChargePaymentMode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetChargePaymentMode();

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
GetChargePaymentMode.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetChargePaymentMode.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetChargePaymentMode.prototype['description'] = undefined;






export default GetChargePaymentMode;

