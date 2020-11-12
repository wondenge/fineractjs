

import ApiClient from '../ApiClient';

/**
 * The PostRecurringDepositAccountsResponse model module.
 * @module model/PostRecurringDepositAccountsResponse
 * @version 1.0
 */
class PostRecurringDepositAccountsResponse {
    /**
     * Constructs a new <code>PostRecurringDepositAccountsResponse</code>.
     * PostRecurringDepositAccountsResponse
     * @alias module:model/PostRecurringDepositAccountsResponse
     */
    constructor() { 
        
        PostRecurringDepositAccountsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositAccountsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositAccountsResponse} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositAccountsResponse} The populated <code>PostRecurringDepositAccountsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositAccountsResponse();

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
PostRecurringDepositAccountsResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostRecurringDepositAccountsResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostRecurringDepositAccountsResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostRecurringDepositAccountsResponse.prototype['resourceId'] = undefined;






export default PostRecurringDepositAccountsResponse;

