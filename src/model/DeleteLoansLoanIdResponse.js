

import ApiClient from '../ApiClient';

/**
 * The DeleteLoansLoanIdResponse model module.
 * @module model/DeleteLoansLoanIdResponse
 * @version 1.0
 */
class DeleteLoansLoanIdResponse {
    /**
     * Constructs a new <code>DeleteLoansLoanIdResponse</code>.
     * DeleteLoansLoanIdResponse
     * @alias module:model/DeleteLoansLoanIdResponse
     */
    constructor() { 
        
        DeleteLoansLoanIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteLoansLoanIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteLoansLoanIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteLoansLoanIdResponse} The populated <code>DeleteLoansLoanIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteLoansLoanIdResponse();

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
DeleteLoansLoanIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
DeleteLoansLoanIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
DeleteLoansLoanIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
DeleteLoansLoanIdResponse.prototype['resourceId'] = undefined;






export default DeleteLoansLoanIdResponse;

