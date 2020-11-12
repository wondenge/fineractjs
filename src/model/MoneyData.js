

import ApiClient from '../ApiClient';

/**
 * The MoneyData model module.
 * @module model/MoneyData
 * @version 1.0
 */
class MoneyData {
    /**
     * Constructs a new <code>MoneyData</code>.
     * @alias module:model/MoneyData
     * @param amount {Number} 
     * @param currency {String} 
     */
    constructor(amount, currency) { 
        
        MoneyData.initialize(this, amount, currency);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, amount, currency) { 
        obj['amount'] = amount;
        obj['currency'] = currency;
    }

    /**
     * Constructs a <code>MoneyData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MoneyData} obj Optional instance to populate.
     * @return {module:model/MoneyData} The populated <code>MoneyData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MoneyData();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
MoneyData.prototype['amount'] = undefined;

/**
 * @member {String} currency
 */
MoneyData.prototype['currency'] = undefined;






export default MoneyData;

