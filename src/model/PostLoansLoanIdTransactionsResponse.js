

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdTransactionsResponse model module.
 * @module model/PostLoansLoanIdTransactionsResponse
 * @version 1.0
 */
class PostLoansLoanIdTransactionsResponse {
    /**
     * Constructs a new <code>PostLoansLoanIdTransactionsResponse</code>.
     * PostLoansLoanIdTransactionsResponse
     * @alias module:model/PostLoansLoanIdTransactionsResponse
     */
    constructor() { 
        
        PostLoansLoanIdTransactionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdTransactionsResponse} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdTransactionsResponse} The populated <code>PostLoansLoanIdTransactionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdTransactionsResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
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
PostLoansLoanIdTransactionsResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostLoansLoanIdTransactionsResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostLoansLoanIdTransactionsResponse.prototype['resourceId'] = undefined;






export default PostLoansLoanIdTransactionsResponse;

