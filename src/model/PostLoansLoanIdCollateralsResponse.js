

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdCollateralsResponse model module.
 * @module model/PostLoansLoanIdCollateralsResponse
 * @version 1.0
 */
class PostLoansLoanIdCollateralsResponse {
    /**
     * Constructs a new <code>PostLoansLoanIdCollateralsResponse</code>.
     * PostLoansLoanIdCollateralsResponse
     * @alias module:model/PostLoansLoanIdCollateralsResponse
     */
    constructor() { 
        
        PostLoansLoanIdCollateralsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdCollateralsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdCollateralsResponse} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdCollateralsResponse} The populated <code>PostLoansLoanIdCollateralsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdCollateralsResponse();

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
 * @member {Number} loanId
 */
PostLoansLoanIdCollateralsResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostLoansLoanIdCollateralsResponse.prototype['resourceId'] = undefined;






export default PostLoansLoanIdCollateralsResponse;

