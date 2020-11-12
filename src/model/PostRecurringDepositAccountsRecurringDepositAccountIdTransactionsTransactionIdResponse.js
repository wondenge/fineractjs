  

import ApiClient from '../ApiClient';
import PostRecurringChanges from './PostRecurringChanges';

/**
 * The PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse model module.
 * @module model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse
 * @version 1.0
 */
class PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse {
    /**
     * Constructs a new <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse</code>.
     * PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse
     * @alias module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse
     */
    constructor() { 
        
        PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse} obj Optional instance to populate.
     * @return {module:model/PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse} The populated <code>PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse();

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
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PostRecurringChanges} changes
 */
PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse.prototype['changes'] = undefined;






export default PostRecurringDepositAccountsRecurringDepositAccountIdTransactionsTransactionIdResponse;

