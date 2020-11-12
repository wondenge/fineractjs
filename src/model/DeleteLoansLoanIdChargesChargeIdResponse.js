

import ApiClient from '../ApiClient';

/**
 * The DeleteLoansLoanIdChargesChargeIdResponse model module.
 * @module model/DeleteLoansLoanIdChargesChargeIdResponse
 * @version 1.0
 */
class DeleteLoansLoanIdChargesChargeIdResponse {
    /**
     * Constructs a new <code>DeleteLoansLoanIdChargesChargeIdResponse</code>.
     * DeleteLoansLoanIdChargesChargeIdResponse
     * @alias module:model/DeleteLoansLoanIdChargesChargeIdResponse
     */
    constructor() { 
        
        DeleteLoansLoanIdChargesChargeIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteLoansLoanIdChargesChargeIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLoansLoanIdChargesChargeIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteLoansLoanIdChargesChargeIdResponse} The populated <code>DeleteLoansLoanIdChargesChargeIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteLoansLoanIdChargesChargeIdResponse();

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
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
DeleteLoansLoanIdChargesChargeIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
DeleteLoansLoanIdChargesChargeIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
DeleteLoansLoanIdChargesChargeIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteLoansLoanIdChargesChargeIdResponse.prototype['resourceId'] = undefined;






export default DeleteLoansLoanIdChargesChargeIdResponse;

