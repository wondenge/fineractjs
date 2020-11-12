

import ApiClient from '../ApiClient';

/**
 * The PutRecurringDepositAccountsChanges model module.
 * @module model/PutRecurringDepositAccountsChanges
 * @version 1.0
 */
class PutRecurringDepositAccountsChanges {
    /**
     * Constructs a new <code>PutRecurringDepositAccountsChanges</code>.
     * @alias module:model/PutRecurringDepositAccountsChanges
     */
    constructor() { 
        
        PutRecurringDepositAccountsChanges.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRecurringDepositAccountsChanges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRecurringDepositAccountsChanges} obj Optional instance to populate.
     * @return {module:model/PutRecurringDepositAccountsChanges} The populated <code>PutRecurringDepositAccountsChanges</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRecurringDepositAccountsChanges();

            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} depositAmount
 */
PutRecurringDepositAccountsChanges.prototype['depositAmount'] = undefined;

/**
 * @member {String} locale
 */
PutRecurringDepositAccountsChanges.prototype['locale'] = undefined;






export default PutRecurringDepositAccountsChanges;

