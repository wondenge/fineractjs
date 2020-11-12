

import ApiClient from '../ApiClient';

/**
 * The GetFixedDepositProductsAccountingRule model module.
 * @module model/GetFixedDepositProductsAccountingRule
 * @version 1.0
 */
class GetFixedDepositProductsAccountingRule {
    /**
     * Constructs a new <code>GetFixedDepositProductsAccountingRule</code>.
     * @alias module:model/GetFixedDepositProductsAccountingRule
     */
    constructor() { 
        
        GetFixedDepositProductsAccountingRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetFixedDepositProductsAccountingRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetFixedDepositProductsAccountingRule} obj Optional instance to populate.
     * @return {module:model/GetFixedDepositProductsAccountingRule} The populated <code>GetFixedDepositProductsAccountingRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetFixedDepositProductsAccountingRule();

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
GetFixedDepositProductsAccountingRule.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetFixedDepositProductsAccountingRule.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetFixedDepositProductsAccountingRule.prototype['description'] = undefined;






export default GetFixedDepositProductsAccountingRule;

