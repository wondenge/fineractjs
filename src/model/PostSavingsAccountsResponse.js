

import ApiClient from '../ApiClient';

/**
 * The PostSavingsAccountsResponse model module.
 * @module model/PostSavingsAccountsResponse
 * @version 1.0
 */
class PostSavingsAccountsResponse {
    /**
     * Constructs a new <code>PostSavingsAccountsResponse</code>.
     * PostSavingsAccountsResponse
     * @alias module:model/PostSavingsAccountsResponse
     */
    constructor() { 
        
        PostSavingsAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostSavingsAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostSavingsAccountsResponse} obj Optional instance to populate.
     * @return {module:model/PostSavingsAccountsResponse} The populated <code>PostSavingsAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostSavingsAccountsResponse();

            if (data.hasOwnProperty('officeId')) {
                obj['officeId'] = ApiClient.convertToType(data['officeId'], 'Number');
            }
            if (data.hasOwnProperty('clientId')) {
                obj['clientId'] = ApiClient.convertToType(data['clientId'], 'Number');
            }
            if (data.hasOwnProperty('savingsId')) {
                obj['savingsId'] = ApiClient.convertToType(data['savingsId'], 'Number');
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
PostSavingsAccountsResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostSavingsAccountsResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostSavingsAccountsResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostSavingsAccountsResponse.prototype['resourceId'] = undefined;






export default PostSavingsAccountsResponse;

