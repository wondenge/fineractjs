

import ApiClient from '../ApiClient';

/**
 * The PostLoansLoanIdRequest model module.
 * @module model/PostLoansLoanIdRequest
 * @version 1.0
 */
class PostLoansLoanIdRequest {
    /**
     * Constructs a new <code>PostLoansLoanIdRequest</code>.
     * PostLoansLoanIdRequest
     * @alias module:model/PostLoansLoanIdRequest
     */
    constructor() { 
        
        PostLoansLoanIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostLoansLoanIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostLoansLoanIdRequest} obj Optional instance to populate.
     * @return {module:model/PostLoansLoanIdRequest} The populated <code>PostLoansLoanIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostLoansLoanIdRequest();

            if (data.hasOwnProperty('toLoanOfficerId')) {
                obj['toLoanOfficerId'] = ApiClient.convertToType(data['toLoanOfficerId'], 'Number');
            }
            if (data.hasOwnProperty('assignmentDate')) {
                obj['assignmentDate'] = ApiClient.convertToType(data['assignmentDate'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('fromLoanOfficerId')) {
                obj['fromLoanOfficerId'] = ApiClient.convertToType(data['fromLoanOfficerId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} toLoanOfficerId
 */
PostLoansLoanIdRequest.prototype['toLoanOfficerId'] = undefined;

/**
 * @member {String} assignmentDate
 */
PostLoansLoanIdRequest.prototype['assignmentDate'] = undefined;

/**
 * @member {String} locale
 */
PostLoansLoanIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostLoansLoanIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Number} fromLoanOfficerId
 */
PostLoansLoanIdRequest.prototype['fromLoanOfficerId'] = undefined;






export default PostLoansLoanIdRequest;

