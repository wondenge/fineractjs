

import ApiClient from '../ApiClient';

/**
 * The PutLoansLoanIdChargesChargeIdRequest model module.
 * @module model/PutLoansLoanIdChargesChargeIdRequest
 * @version 1.0
 */
class PutLoansLoanIdChargesChargeIdRequest {
    /**
     * Constructs a new <code>PutLoansLoanIdChargesChargeIdRequest</code>.
     *  PutLoansLoanIdChargesChargeIdRequest
     * @alias module:model/PutLoansLoanIdChargesChargeIdRequest
     */
    constructor() { 
        
        PutLoansLoanIdChargesChargeIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoansLoanIdChargesChargeIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoansLoanIdChargesChargeIdRequest} obj Optional instance to populate.
     * @return {module:model/PutLoansLoanIdChargesChargeIdRequest} The populated <code>PutLoansLoanIdChargesChargeIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoansLoanIdChargesChargeIdRequest();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('dueDate')) {
                obj['dueDate'] = ApiClient.convertToType(data['dueDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateFormat
 */
PutLoansLoanIdChargesChargeIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PutLoansLoanIdChargesChargeIdRequest.prototype['locale'] = undefined;

/**
 * @member {Number} amount
 */
PutLoansLoanIdChargesChargeIdRequest.prototype['amount'] = undefined;

/**
 * @member {String} dueDate
 */
PutLoansLoanIdChargesChargeIdRequest.prototype['dueDate'] = undefined;






export default PutLoansLoanIdChargesChargeIdRequest;

