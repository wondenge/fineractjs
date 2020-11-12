

import ApiClient from '../ApiClient';
import PutSelfLoansChanges from './PutSelfLoansChanges';

/**
 * The PutSelfLoansLoanIdResponse model module.
 * @module model/PutSelfLoansLoanIdResponse
 * @version 1.0
 */
class PutSelfLoansLoanIdResponse {
    /**
     * Constructs a new <code>PutSelfLoansLoanIdResponse</code>.
     * PutSelfLoansLoanIdResponse
     * @alias module:model/PutSelfLoansLoanIdResponse
     */
    constructor() { 
        
        PutSelfLoansLoanIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutSelfLoansLoanIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutSelfLoansLoanIdResponse} obj Optional instance to populate.
     * @return {module:model/PutSelfLoansLoanIdResponse} The populated <code>PutSelfLoansLoanIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutSelfLoansLoanIdResponse();

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
                obj['changes'] = PutSelfLoansChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutSelfLoansLoanIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutSelfLoansLoanIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
PutSelfLoansLoanIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutSelfLoansLoanIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutSelfLoansChanges} changes
 */
PutSelfLoansLoanIdResponse.prototype['changes'] = undefined;






export default PutSelfLoansLoanIdResponse;

