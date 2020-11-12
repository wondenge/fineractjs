

import ApiClient from '../ApiClient';
import PostLoanChanges from './PostLoanChanges';

/**
 * The PostLoansLoanIdScheduleResponse model module.
 * @module model/PostLoansLoanIdScheduleResponse
 * @version 1.0
 */
class PostLoansLoanIdScheduleResponse {
    /**
     * Constructs a new <code>PostLoansLoanIdScheduleResponse</code>.
     * PostLoansLoanIdScheduleResponse
     * @alias module:model/PostLoansLoanIdScheduleResponse
     */
    constructor() { 
        
        PostLoansLoanIdScheduleResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdScheduleResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdScheduleResponse} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdScheduleResponse} The populated <code>PostLoansLoanIdScheduleResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdScheduleResponse();

            if (data.hasOwnProperty('loanId')) {
                obj['loanId'] = ApiClient.convertToType(data['loanId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PostLoanChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} loanId
 */
PostLoansLoanIdScheduleResponse.prototype['loanId'] = undefined;

/**
 * @member {module:model/PostLoanChanges} changes
 */
PostLoansLoanIdScheduleResponse.prototype['changes'] = undefined;






export default PostLoansLoanIdScheduleResponse;

