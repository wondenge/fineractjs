

import ApiClient from '../ApiClient';

/**
 * The GetLoansLoanIdChargePaymentMode model module.
 * @module model/GetLoansLoanIdChargePaymentMode
 * @version 1.0
 */
class GetLoansLoanIdChargePaymentMode {
    /**
     * Constructs a new <code>GetLoansLoanIdChargePaymentMode</code>.
     * @alias module:model/GetLoansLoanIdChargePaymentMode
     */
    constructor() { 
        
        GetLoansLoanIdChargePaymentMode.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoansLoanIdChargePaymentMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoansLoanIdChargePaymentMode} obj Optional instance to populate.
     * @return {module:model/GetLoansLoanIdChargePaymentMode} The populated <code>GetLoansLoanIdChargePaymentMode</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoansLoanIdChargePaymentMode();

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
GetLoansLoanIdChargePaymentMode.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoansLoanIdChargePaymentMode.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoansLoanIdChargePaymentMode.prototype['description'] = undefined;






export default GetLoansLoanIdChargePaymentMode;

