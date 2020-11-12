

import ApiClient from '../ApiClient';

/**
 * The PostSelfLoansLoanIdRequest model module.
 * @module model/PostSelfLoansLoanIdRequest
 * @version 1.0
 */
class PostSelfLoansLoanIdRequest {
    /**
     * Constructs a new <code>PostSelfLoansLoanIdRequest</code>.
     * PostSelfLoansLoanIdRequest
     * @alias module:model/PostSelfLoansLoanIdRequest
     */
    constructor() { 
        
        PostSelfLoansLoanIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSelfLoansLoanIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSelfLoansLoanIdRequest} obj Optional instance to populate.
     * @return {module:model/PostSelfLoansLoanIdRequest} The populated <code>PostSelfLoansLoanIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSelfLoansLoanIdRequest();

            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('withdrawnOnDate')) {
                obj['withdrawnOnDate'] = ApiClient.convertToType(data['withdrawnOnDate'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} locale
 */
PostSelfLoansLoanIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostSelfLoansLoanIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} withdrawnOnDate
 */
PostSelfLoansLoanIdRequest.prototype['withdrawnOnDate'] = undefined;

/**
 * @member {String} note
 */
PostSelfLoansLoanIdRequest.prototype['note'] = undefined;






export default PostSelfLoansLoanIdRequest;

