

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdResponse model module.
 * @module model/PostLoansLoanIdResponse
 * @version 1.0
 */
class PostLoansLoanIdResponse {
    /**
     * Constructs a new <code>PostLoansLoanIdResponse</code>.
     * PostLoansLoanIdResponse
     * @alias module:model/PostLoansLoanIdResponse
     */
    constructor() { 
        
        PostLoansLoanIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdResponse} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdResponse} The populated <code>PostLoansLoanIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdResponse();

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
PostLoansLoanIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostLoansLoanIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
PostLoansLoanIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostLoansLoanIdResponse.prototype['resourceId'] = undefined;






export default PostLoansLoanIdResponse;

