

import ApiClient from '../ApiClient';
import GetRecurringDepositAccountsCurrency from './GetRecurringDepositAccountsCurrency';

/**
 * The GetRecurringDepositAccountsSummary model module.
 * @module model/GetRecurringDepositAccountsSummary
 * @version 1.0
 */
class GetRecurringDepositAccountsSummary {
    /**
     * Constructs a new <code>GetRecurringDepositAccountsSummary</code>.
     * @alias module:model/GetRecurringDepositAccountsSummary
     */
    constructor() { 
        
        GetRecurringDepositAccountsSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositAccountsSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositAccountsSummary} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositAccountsSummary} The populated <code>GetRecurringDepositAccountsSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositAccountsSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetRecurringDepositAccountsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('accountBalance')) {
                obj['accountBalance'] = ApiClient.convertToType(data['accountBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetRecurringDepositAccountsCurrency} currency
 */
GetRecurringDepositAccountsSummary.prototype['currency'] = undefined;

/**
 * @member {Number} accountBalance
 */
GetRecurringDepositAccountsSummary.prototype['accountBalance'] = undefined;






export default GetRecurringDepositAccountsSummary;

