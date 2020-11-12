

import ApiClient from '../ApiClient';

/**
 * The PostRecurringDepositAccountsAccountIdResponse model module.
 * @module model/PostRecurringDepositAccountsAccountIdResponse
 * @version 1.0
 */
class PostRecurringDepositAccountsAccountIdResponse {
    /**
     * Constructs a new <code>PostRecurringDepositAccountsAccountIdResponse</code>.
     * PostRecurringDepositAccountsAccountIdResponse
     * @alias module:model/PostRecurringDepositAccountsAccountIdResponse
     */
    constructor() { 
        
        PostRecurringDepositAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositAccountsAccountIdResponse} The populated <code>PostRecurringDepositAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositAccountsAccountIdResponse();

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
PostRecurringDepositAccountsAccountIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostRecurringDepositAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostRecurringDepositAccountsAccountIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostRecurringDepositAccountsAccountIdResponse.prototype['resourceId'] = undefined;






export default PostRecurringDepositAccountsAccountIdResponse;

