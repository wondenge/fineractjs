

import ApiClient from '../ApiClient';
import PutLoansLoanIdChargesChargeIdRequest from './PutLoansLoanIdChargesChargeIdRequest';

/**
 * The PutLoansLoanIdChargesChargeIdResponse model module.
 * @module model/PutLoansLoanIdChargesChargeIdResponse
 * @version 1.0
 */
class PutLoansLoanIdChargesChargeIdResponse {
    /**
     * Constructs a new <code>PutLoansLoanIdChargesChargeIdResponse</code>.
     * PutLoansLoanIdChargesChargeIdResponse
     * @alias module:model/PutLoansLoanIdChargesChargeIdResponse
     */
    constructor() { 
        
        PutLoansLoanIdChargesChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoansLoanIdChargesChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoansLoanIdChargesChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/PutLoansLoanIdChargesChargeIdResponse} The populated <code>PutLoansLoanIdChargesChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoansLoanIdChargesChargeIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PutLoansLoanIdChargesChargeIdRequest.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutLoansLoanIdChargesChargeIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutLoansLoanIdChargesChargeIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
PutLoansLoanIdChargesChargeIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutLoansLoanIdChargesChargeIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutLoansLoanIdChargesChargeIdRequest} changes
 */
PutLoansLoanIdChargesChargeIdResponse.prototype['changes'] = undefined;






export default PutLoansLoanIdChargesChargeIdResponse;

