

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdChargesChargeIdResponse model module.
 * @module model/PostLoansLoanIdChargesChargeIdResponse
 * @version 1.0
 */
class PostLoansLoanIdChargesChargeIdResponse {
    /**
     * Constructs a new <code>PostLoansLoanIdChargesChargeIdResponse</code>.
     * PostLoansLoanIdChargesChargeIdResponse
     * @alias module:model/PostLoansLoanIdChargesChargeIdResponse
     */
    constructor() { 
        
        PostLoansLoanIdChargesChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdChargesChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdChargesChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdChargesChargeIdResponse} The populated <code>PostLoansLoanIdChargesChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdChargesChargeIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('savingsId')) {
                obj['savingsId'] = ApiClient.convertToType(data['savingsId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostLoansLoanIdChargesChargeIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostLoansLoanIdChargesChargeIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
PostLoansLoanIdChargesChargeIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostLoansLoanIdChargesChargeIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostLoansLoanIdChargesChargeIdResponse.prototype['resourceId'] = undefined;






export default PostLoansLoanIdChargesChargeIdResponse;

