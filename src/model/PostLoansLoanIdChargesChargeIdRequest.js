

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdChargesChargeIdRequest model module.
 * @module model/PostLoansLoanIdChargesChargeIdRequest
 * @version 1.0
 */
class PostLoansLoanIdChargesChargeIdRequest {
    /**
     * Constructs a new <code>PostLoansLoanIdChargesChargeIdRequest</code>.
     * PostLoansLoanIdChargesChargeIdRequest
     * @alias module:model/PostLoansLoanIdChargesChargeIdRequest
     */
    constructor() { 
        
        PostLoansLoanIdChargesChargeIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdChargesChargeIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdChargesChargeIdRequest} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdChargesChargeIdRequest} The populated <code>PostLoansLoanIdChargesChargeIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdChargesChargeIdRequest();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('transactionDate')) {
                obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateFormat
 */
PostLoansLoanIdChargesChargeIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostLoansLoanIdChargesChargeIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} transactionDate
 */
PostLoansLoanIdChargesChargeIdRequest.prototype['transactionDate'] = undefined;






export default PostLoansLoanIdChargesChargeIdRequest;

