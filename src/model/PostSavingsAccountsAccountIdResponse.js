

import ApiClient from '../ApiClient';

/**
 * The PostSavingsAccountsAccountIdResponse model module.
 * @module model/PostSavingsAccountsAccountIdResponse
 * @version 1.0
 */
class PostSavingsAccountsAccountIdResponse {
    /**
     * Constructs a new <code>PostSavingsAccountsAccountIdResponse</code>.
     * PostSavingsAccountsAccountIdResponse
     * @alias module:model/PostSavingsAccountsAccountIdResponse
     */
    constructor() { 
        
        PostSavingsAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/PostSavingsAccountsAccountIdResponse} The populated <code>PostSavingsAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsAccountsAccountIdResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = ApiClient.convertToType(data['changes'], Object);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostSavingsAccountsAccountIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostSavingsAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostSavingsAccountsAccountIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {Object} changes
 */
PostSavingsAccountsAccountIdResponse.prototype['changes'] = undefined;






export default PostSavingsAccountsAccountIdResponse;

