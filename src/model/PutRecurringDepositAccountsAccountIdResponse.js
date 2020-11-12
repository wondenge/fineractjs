

import ApiClient from '../ApiClient';
import PutRecurringDepositAccountsChanges from './PutRecurringDepositAccountsChanges';

/**
 * The PutRecurringDepositAccountsAccountIdResponse model module.
 * @module model/PutRecurringDepositAccountsAccountIdResponse
 * @version 1.0
 */
class PutRecurringDepositAccountsAccountIdResponse {
    /**
     * Constructs a new <code>PutRecurringDepositAccountsAccountIdResponse</code>.
     * PutRecurringDepositAccountsAccountIdResponse
     * @alias module:model/PutRecurringDepositAccountsAccountIdResponse
     */
    constructor() { 
        
        PutRecurringDepositAccountsAccountIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRecurringDepositAccountsAccountIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRecurringDepositAccountsAccountIdResponse} obj Optional instance to populate.
     * @return {module:model/PutRecurringDepositAccountsAccountIdResponse} The populated <code>PutRecurringDepositAccountsAccountIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRecurringDepositAccountsAccountIdResponse();

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
                obj['changes'] = PutRecurringDepositAccountsChanges.constructFromObject(data['changes']);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} officeId
 */
PutRecurringDepositAccountsAccountIdResponse.prototype['officeId'] = undefined;

/**
 * @member {Number} clientId
 */
PutRecurringDepositAccountsAccountIdResponse.prototype['clientId'] = undefined;

/**
 * @member {Number} savingsId
 */
PutRecurringDepositAccountsAccountIdResponse.prototype['savingsId'] = undefined;

/**
 * @member {Number} resourceId
 */
PutRecurringDepositAccountsAccountIdResponse.prototype['resourceId'] = undefined;

/**
 * @member {module:model/PutRecurringDepositAccountsChanges} changes
 */
PutRecurringDepositAccountsAccountIdResponse.prototype['changes'] = undefined;






export default PutRecurringDepositAccountsAccountIdResponse;

