

import ApiClient from '../ApiClient';
import PostSelfLoansLoanIdChanges from './PostSelfLoansLoanIdChanges';

/**
 * The PostSelfLoansLoanIdResponse model module.
 * @module model/PostSelfLoansLoanIdResponse
 * @version 1.0
 */
class PostSelfLoansLoanIdResponse {
    /**
     * Constructs a new <code>PostSelfLoansLoanIdResponse</code>.
     * PostSelfLoansLoanIdResponse
     * @alias module:model/PostSelfLoansLoanIdResponse
     */
    constructor() { 
        
        PostSelfLoansLoanIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansLoanIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansLoanIdResponse} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansLoanIdResponse} The populated <code>PostSelfLoansLoanIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansLoanIdResponse();

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
                obj['changes'] = PostSelfLoansLoanIdChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostSelfLoansLoanIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostSelfLoansLoanIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} loanId
 */
PostSelfLoansLoanIdResponse.prototype['loanId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostSelfLoansLoanIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PostSelfLoansLoanIdChanges} changes
 */
PostSelfLoansLoanIdResponse.prototype['changes'] = undefined;






export default PostSelfLoansLoanIdResponse;

