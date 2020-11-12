

import ApiClient from '../ApiClient';
import GetFixedDepositAccountsCurrency from './GetFixedDepositAccountsCurrency';

/**
 * The GetFixedDepositAccountsSummary model module.
 * @module model/GetFixedDepositAccountsSummary
 * @version 1.0
 */
class GetFixedDepositAccountsSummary {
    /**
     * Constructs a new <code>GetFixedDepositAccountsSummary</code>.
     * @alias module:model/GetFixedDepositAccountsSummary
     */
    constructor() { 
        
        GetFixedDepositAccountsSummary.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositAccountsSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositAccountsSummary} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositAccountsSummary} The populated <code>GetFixedDepositAccountsSummary</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositAccountsSummary();

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = GetFixedDepositAccountsCurrency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('accountBalance')) {
                obj['accountBalance'] = ApiClient.convertToType(data['accountBalance'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/GetFixedDepositAccountsCurrency} currency
 */
GetFixedDepositAccountsSummary.prototype['currency'] = undefined;

/**
 * @member {Number} accountBalance
 */
GetFixedDepositAccountsSummary.prototype['accountBalance'] = undefined;






export default GetFixedDepositAccountsSummary;

