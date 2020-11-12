

import ApiClient from '../ApiClient';
import PostRecurringChanges from './PostRecurringChanges';

/**
 * The PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse model module.
 * @module model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse
 * @version 1.0
 */
class PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse {
    /**
     * Constructs a new <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse</code>.
     * PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse
     * @alias module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse
     */
    constructor() { 
        
        PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse} The populated <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse();

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
            if (data.hasOwnProperty('changes')) {
                obj['changes'] = PostRecurringChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PostRecurringChanges} changes
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse.prototype['changes'] = undefined;






export default PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsResponse;

