

import ApiClient from '../ApiClient';

/**
 * The GetLoansChargePaymentMode model module.
 * @module model/GetLoansChargePaymentMode
 * @version 1.0
 */
class GetLoansChargePaymentMode {
    /**
     * Constructs a new <code>GetLoansChargePaymentMode</code>.
     * @alias module:model/GetLoansChargePaymentMode
     */
    constructor() { 
        
        GetLoansChargePaymentMode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansChargePaymentMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansChargePaymentMode} obj Optional instance to populate.
     * @return {module:model/GetLoansChargePaymentMode} The populated <code>GetLoansChargePaymentMode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansChargePaymentMode();

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
GetLoansChargePaymentMode.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansChargePaymentMode.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansChargePaymentMode.prototype['description'] = undefined;






export default GetLoansChargePaymentMode;

