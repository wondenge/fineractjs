

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdChargesResponse model module.
 * @module model/PostLoansLoanIdChargesResponse
 * @version 1.0
 */
class PostLoansLoanIdChargesResponse {
    /**
     * Constructs a new <code>PostLoansLoanIdChargesResponse</code>.
     *  PostLoansLoanIdChargesResponse
     * @alias module:model/PostLoansLoanIdChargesResponse
     */
    constructor() { 
        
        PostLoansLoanIdChargesResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdChargesResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdChargesResponse} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdChargesResponse} The populated <code>PostLoansLoanIdChargesResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdChargesResponse();

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
PostLoansLoanIdChargesResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostLoansLoanIdChargesResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
PostLoansLoanIdChargesResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostLoansLoanIdChargesResponse.prototype['resourceId'] = undefined;






export default PostLoansLoanIdChargesResponse;

