

import ApiClient from '../ApiClient';
import GetFixedDepositAccountsAccountIdCurrency from './GetFixedDepositAccountsAccountIdCurrency';

/**
 * The GetFixedDepositAccountsAccountIdSummary model module.
 * @module model/GetFixedDepositAccountsAccountIdSummary
 * @version 1.0
 */
class GetFixedDepositAccountsAccountIdSummary {
    /**
     * Constructs a new <code>GetFixedDepositAccountsAccountIdSummary</code>.
     * @alias module:model/GetFixedDepositAccountsAccountIdSummary
     */
    constructor() { 
        
        GetFixedDepositAccountsAccountIdSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsAccountIdSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsAccountIdSummary} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsAccountIdSummary} The populated <code>GetFixedDepositAccountsAccountIdSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsAccountIdSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetFixedDepositAccountsAccountIdCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('accountBalance')) {
                obj['accountBalance'] = ApiClient.convertToType(data['accountBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetFixedDepositAccountsAccountIdCurrency} currency
 */
GetFixedDepositAccountsAccountIdSummary.prototype['currency'] = undefined;

/**
 * @member {Number} accountBalance
 */
GetFixedDepositAccountsAccountIdSummary.prototype['accountBalance'] = undefined;






export default GetFixedDepositAccountsAccountIdSummary;

