

import ApiClient from '../ApiClient';

/**
 * The PostSavingsAccountsAccountIdRequest model module.
 * @module model/PostSavingsAccountsAccountIdRequest
 * @version 1.0
 */
class PostSavingsAccountsAccountIdRequest {
    /**
     * Constructs a new <code>PostSavingsAccountsAccountIdRequest</code>.
     * PostSavingsAccountsAccountIdRequest
     * @alias module:model/PostSavingsAccountsAccountIdRequest
     */
    constructor() { 
        
        PostSavingsAccountsAccountIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsAccountsAccountIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsAccountsAccountIdRequest} obj Optional instance to populate.
     * @return {module:model/PostSavingsAccountsAccountIdRequest} The populated <code>PostSavingsAccountsAccountIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsAccountsAccountIdRequest();

            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('unassignedDate')) {
                obj['unassignedDate'] = ApiClient.convertToType(data['unassignedDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} dateFormat
 */
PostSavingsAccountsAccountIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} locale
 */
PostSavingsAccountsAccountIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} unassignedDate
 */
PostSavingsAccountsAccountIdRequest.prototype['unassignedDate'] = undefined;






export default PostSavingsAccountsAccountIdRequest;

