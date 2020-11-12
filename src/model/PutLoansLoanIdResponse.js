

import ApiClient from '../ApiClient';
import PutLoansLoanIdChanges from './PutLoansLoanIdChanges';

/**
 * The PutLoansLoanIdResponse model module.
 * @module model/PutLoansLoanIdResponse
 * @version 1.0
 */
class PutLoansLoanIdResponse {
    /**
     * Constructs a new <code>PutLoansLoanIdResponse</code>.
     * PutLoansLoanIdResponse
     * @alias module:model/PutLoansLoanIdResponse
     */
    constructor() { 
        
        PutLoansLoanIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutLoansLoanIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutLoansLoanIdResponse} obj Optional instance to populate.
     * @return {module:model/PutLoansLoanIdResponse} The populated <code>PutLoansLoanIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutLoansLoanIdResponse();

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
                obj['changes'] = PutLoansLoanIdChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutLoansLoanIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutLoansLoanIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
PutLoansLoanIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutLoansLoanIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutLoansLoanIdChanges} changes
 */
PutLoansLoanIdResponse.prototype['changes'] = undefined;






export default PutLoansLoanIdResponse;

