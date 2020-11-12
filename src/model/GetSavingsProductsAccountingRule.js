

import ApiClient from '../ApiClient';

/**
 * The GetSavingsProductsAccountingRule model module.
 * @module model/GetSavingsProductsAccountingRule
 * @version 1.0
 */
class GetSavingsProductsAccountingRule {
    /**
     * Constructs a new <code>GetSavingsProductsAccountingRule</code>.
     * @alias module:model/GetSavingsProductsAccountingRule
     */
    constructor() { 
        
        GetSavingsProductsAccountingRule.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetSavingsProductsAccountingRule</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetSavingsProductsAccountingRule} obj Optional instance to populate.
     * @return {module:model/GetSavingsProductsAccountingRule} The populated <code>GetSavingsProductsAccountingRule</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetSavingsProductsAccountingRule();

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
GetSavingsProductsAccountingRule.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetSavingsProductsAccountingRule.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetSavingsProductsAccountingRule.prototype['description'] = undefined;






export default GetSavingsProductsAccountingRule;

