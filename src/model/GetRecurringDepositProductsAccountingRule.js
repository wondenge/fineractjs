

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsAccountingRule model module.
 * @module model/GetRecurringDepositProductsAccountingRule
 * @version 1.0
 */
class GetRecurringDepositProductsAccountingRule {
    /**
     * Constructs a new <code>GetRecurringDepositProductsAccountingRule</code>.
     * @alias module:model/GetRecurringDepositProductsAccountingRule
     */
    constructor() { 
        
        GetRecurringDepositProductsAccountingRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsAccountingRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsAccountingRule} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsAccountingRule} The populated <code>GetRecurringDepositProductsAccountingRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsAccountingRule();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositProductsAccountingRule.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsAccountingRule.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsAccountingRule.prototype['description'] = undefined;






export default GetRecurringDepositProductsAccountingRule;

